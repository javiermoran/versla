import IBudgetItem from './IBudgetItem';

export default interface IBudget {
  uid?: string;
  items: IBudgetItem[];
  date: number;
  userId: string;
  estimatedTotal: number;
  actualTotal?: number;
}
