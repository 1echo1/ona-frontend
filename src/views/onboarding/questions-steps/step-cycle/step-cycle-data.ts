export type StepCycleFormData = {
  conditions: string;
  cycleLength: number;
  lastPeriod: {
    day?: number;
    month?: number;
    year?: number;
  };
};
