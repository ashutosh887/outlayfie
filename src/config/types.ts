export type TRIP = {
  id: string;
  city: string;
  country: string;
};

export type AppStackNavigationParams = {
  Home: undefined;
  Login: undefined;
  AddExpense: {id: string; city: string; country: string};
  AddTrip: undefined;
  AllTrips: undefined;
  TripExpenses: {id: string; city: string; country: string};
};

export type ExpenseItem = {
  id: string;
  title: string;
  amount: number;
  category: ExpenseCategory;
};

export type ExpenseCategory =
  | 'food'
  | 'commute'
  | 'shopping'
  | 'entertainment'
  | 'other';
