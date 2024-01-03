import {ExpenseCategory} from './types';

export const appName = 'outlayfie';

export const appVersion = '1.0.0';

export const colors = {
  heading: '#718096',
  button: '#506978',
  error: '#FF474A',
};

export const categoryBG: Record<ExpenseCategory, string> = {
  food: '#E1D3EE',
  commute: '#B0E3D3',
  shopping: '#EcFAD7',
  entertainment: '#ffdfdd',
  other: '#CAD309',
};
