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
  value: number;
}

export interface CurrencyInflationView {
  currencyId: number;
  year: number;
  value: number;
}

export interface CurrencyRateView {
  mid: number;
  currency: CurrencyView;
  inflation: RateInflationYear[];
}

export interface CurrencyRateListView {
  providerId: number;
  mid: number;
  currency: CurrencyView;
  inflation: RateInflationYear[];
}