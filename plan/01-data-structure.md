# Veri Yapısı

Tüm veri `src/data/` altında statik JSON olarak tutulur. TypeScript tipleriyle derleme zamanında doğrulanır.

---

## Dosya Listesi (20 kategori + 1 yapısal)

```
src/data/
├── smoking.json
├── e_cigarette.json
├── alcohol.json
├── drugs.json
├── benzodiazepines.json      ← yeni
├── obesity.json
├── social_media.json
├── online_harassment.json    ← yeni
├── gambling.json
├── gaming.json
├── eating_disorders.json
├── body_dysmorphia.json
├── domestic_violence.json    ← yeni
├── workaholism.json
├── sleep.json
├── physical_inactivity.json
├── caffeine.json
├── shopping.json
├── pornography.json
├── sugar.json
└── continents.json
```

---

## Ortak Tip: `Entry`

```ts
type Continent = "americas" | "europe" | "asia" | "mena" | "africa" | "global";

type Entry = {
  country: string;
  countryCode: string;    // ISO 3166-1 alpha-2; bölgeler: "EU", "GLOBAL"
  continent: Continent;
  value: number | null;
  unit: string;
  note: string;
  source: string;
  isRegional?: boolean;
};
```

---

## Yeni Dosya Tipleri

### benzodiazepines.json
```ts
type BenzoEntry = Entry & {
  usersMillions?: number;         // 30.6
  misusersMillions?: number;      // 5.3
  overdoseDeaths?: number;        // 10964
  femaleToMaleRatio?: number;     // 2 (kadınlar 2x fazla)
  elderlyChronicUseRate?: number; // 0.33 (1/3 yaşlı bakım hastası)
};
```

### online_harassment.json
```ts
type OnlineHarassmentEntry = Entry & {
  hateSpeechEncounterRate: number | null; // %85 (Hindistan)
  teenHarassmentRate?: number;            // %50 (ABD)
  seriousHarassmentRate?: number;         // %22 (ABD yetişkin)
  physicalThreatRate?: number;            // %10
  disabledHarassmentRate?: number;        // %31
};
```

### domestic_violence.json
```ts
type DomesticViolenceEntry = Entry & {
  lifetimePrevalenceWomen: number | null; // %33 (ABD)
  annualFemicideGlobal?: number;          // 50000
  dailyFemicideGlobal?: number;           // 137
  globalAffectedMillions?: number;        // 840
};
```

---

## Mevcut Tipler (değişmeyen özet)

| Dosya | Ana Alan |
|-------|----------|
| smoking.json | `rate: number` (%) |
| e_cigarette.json | `vapeRate`, `youthDailyRate`, `youthVsAdultMultiplier` |
| alcohol.json | `litersPerCapita` |
| drugs.json | `drugType`, `dailyDeaths`, `overdoseGrowthRate` |
| obesity.json | `obesityRate`, `fastFoodFreqPerWeek`, `projection2035HighBMI` |
| social_media.json | `addictionRatePercent`, `dailyScreenHours` |
| gambling.json | `studentRate`, `teenRateOld`, `teenRateNew`, `marketBillionUSD` |
| gaming.json | `addictionRate`, `teenRate` |
| eating_disorders.json | `affectedMillions`, `mortalityRate` |
| body_dysmorphia.json | `bddRateInCosmeticPatients`, `bddVsGeneralPopMultiplier` |
| workaholism.json | `rate`, `weeklyHours55plusRate` |
| sleep.json | `avgHoursPerNight`, `insufficientSleepRate` |
| physical_inactivity.json | `inactivityRate`, `atRiskBillions` |
| caffeine.json | `cupsPerDay`, `addictionRate` |
| shopping.json | `addictionRate`, `femalePercent` |
| pornography.json | `problematicUseRate`, `globalMillions`, `firstExposureAge` |
| sugar.json | `globalConsumptionMillionTons` |
| continents.json | `slug`, `label`, `topStats[]` |

---

## Ortak Kurallar

- Bilinmeyen değerler `null`; asla `0` veya `""` değil.
- `countryCode` ISO 3166-1 alpha-2; bölgeler için `"EU"`, `"GLOBAL"`.
- Yüzde değerleri 0–100 aralığında.
- Bölgesel ortalamalar `isRegional: true` ile işaretlenir.
