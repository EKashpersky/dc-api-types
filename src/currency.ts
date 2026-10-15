export interface CurrencyView {
  id: number;
  a3c: string;
  symbol: string;
}

export interface RateProviderView {
  id: number;
  name: string;
  baseCurrencyId: number;
  baseCurrency: CurrencyView;
}

export interface CurrencyRateView {
  providerId: number;
  currencyId: number;
  mid: string;
  provider: RateProviderView;
  currency: CurrencyView;
}

export interface CurrencyInflationView {
  currencyId: number;
  year: number;
  value: string;
}
