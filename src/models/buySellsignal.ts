export interface ISignalItem {
  SL: number;
  T1: number;
  T2: number;
  T3: number;
  _id: string;
  achievedPrice: number;
  analyst: string;
  analystName: string;
  archiveCount: number;
  buy: boolean;
  comparator: string;
  created_at: string;
  description: string;
  isActive: boolean;
  isArchives: boolean;
  isFree: boolean;
  isIntraday: boolean;
  isLike: boolean;
  likeCount: number;
  possibility: number;
  price: number;
  stockName: string;
  updated_at: string;
  validTill: string;
  achievedValue: string;
  subscribeClient: Array<string>;
}
