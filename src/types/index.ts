export type CategoryKey = "smoking" | "alcohol" | "obesity" | "sleep";

export type SmokingEntry = {
  country: string;
  countryCode: string;
  rate: number | null;
  note: string;
  source: string;
};

export type AlcoholEntry = {
  country: string;
  countryCode: string;
  litersPerCapita: number | null;
  shotsEquivalent: number | null;
  note: string;
  source: string;
};

export type ObesityEntry = {
  country: string;
  countryCode: string;
  obesityRate: number | null;
  overweightRate: number | null;
  note: string;
  source: string;
};

export type SleepEntry = {
  country: string;
  countryCode: string;
  avgHoursPerNight: number | null;
  recommendedHours: number;
  culturalFactor: string;
  note: string;
};

export type RankingEntry = {
  rank: number;
  country: string;
  countryCode: string;
  mainIssue: string;
  categories: CategoryKey[];
};

export type EconomyData = {
  incomeThresholdUSD: number;
  thresholdDescription: string;
  culturalFactors: Array<{
    country: string;
    countryCode: string;
    factors: string[];
  }>;
};
