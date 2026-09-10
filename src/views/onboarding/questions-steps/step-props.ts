export type StepProps<T> = {
  value: T;
  onChange: (value: T) => void;
  onNext: () => void;
  onBack: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
};
