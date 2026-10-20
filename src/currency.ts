export interface CurrencyView {
  id: number;
  a3c: string;
  symbol: string;
}

export interface RateProviderView {
  id: number;
  name: string;
  baseCurrency: CurrencyView;
}

export interface RateInflationYear {
  year: number;
  value: string;
}

export interface CurrencyInflationView {
  currencyId: number;
  year: number;
  value: string;
}

export interface CurrencyRateView {
  mid: string;
  currency: CurrencyView;
  inflation: RateInflationYear[];
}

export interface CurrencyRateListView {
  providerId: number;
  mid: string;
  currency: CurrencyView;
  inflation: RateInflationYear[];
}