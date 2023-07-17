type Repeat = (func: Function, timesRepeated?: number) => void;

export const repeat: Repeat = (func, timesRepeated = 100) => {
  for (let i = 0; i < timesRepeated; i++) func();
};

type CTS = (
  func: Function,
  options?: { length?: number; args?: any[] }
) => any[];

export const createTestSequence: CTS = (
  func,
  { length = 100, args = [] } = {}
) => {
  return [...Array(length)].map(() => func(...args));
};
