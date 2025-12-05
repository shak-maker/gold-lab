import { NextResponse } from 'next/server';

export async function GET() {
  try {
    let goldPriceUSD = 62.50; // Fallback price per gram in USD
    let usdToMntRate = 3400; // Fallback exchange rate (1 USD = ~3400 MNT)

    // Fetch gold price in USD
    try {
      const goldResponse = await fetch('https://api.metals.live/v1/spot/gold', {
        headers: {
          'Accept': 'application/json',
        },
        next: { revalidate: 300 }, // Cache for 5 minutes
      });

      if (goldResponse.ok) {
        const goldData = await goldResponse.json();
        if (goldData.price && typeof goldData.price === 'number') {
          // Convert price per ounce to price per gram (1 oz = 31.1035 g)
          goldPriceUSD = goldData.price / 31.1035;
        }
      }
    } catch (e) {
      console.log('Gold price API failed, using fallback...');
    }

    // Fetch USD to MNT exchange rate
    try {
      // Using exchangerate-api.com (free tier, no key required for basic usage)
      const exchangeResponse = await fetch('https://api.exchangerate-api.com/v4/latest/USD', {
        next: { revalidate: 3600 }, // Cache for 1 hour
      });

      if (exchangeResponse.ok) {
        const exchangeData = await exchangeResponse.json();
        if (exchangeData.rates && exchangeData.rates.MNT) {
          usdToMntRate = exchangeData.rates.MNT;
        }
      }
    } catch (e) {
      console.log('Exchange rate API failed, using fallback rate...');
    }

    // Convert gold price to MNT
    const pricePerGramMNT = goldPriceUSD * usdToMntRate;
    const pricePerOunceMNT = (goldPriceUSD * 31.1035) * usdToMntRate;

    return NextResponse.json({ 
      price: goldPriceUSD,
      priceUSD: goldPriceUSD,
      pricePerOunce: pricePerOunceMNT,
      exchangeRate: usdToMntRate,
      currency: 'USD',
      timestamp: new Date().toISOString(),
    });

  } catch (error) {
    console.error('Error fetching gold price:', error);
    // Fallback with default MNT price
    return NextResponse.json(
      { 
        error: 'Failed to fetch gold price', 
        price: 62.50 * 3400, // Fallback in MNT
        priceUSD: 62.50,
        exchangeRate: 3400,
        currency: 'MNT',
      },
      { status: 500 }
    );
  }
}
