export interface DeliveryRecord {
  period: string;
  percentage: number;
  isPeak?: boolean;
}

export const deliveryPerformanceData: DeliveryRecord[] = [
  { period: "2024 Avg", percentage: 96 },
  { period: "Jan 2025", percentage: 95 },
  { period: "Feb 2025", percentage: 95 },
  { period: "Mar 2025", percentage: 94 },
  { period: "Apr 2025", percentage: 96 },
  { period: "May 2025", percentage: 100, isPeak: true },
  { period: "Jun 2025", percentage: 100, isPeak: true },
  { period: "Jul 2025", percentage: 100, isPeak: true },
  { period: "Aug 2025", percentage: 100, isPeak: true },
  { period: "Sep 2025", percentage: 95 },
  { period: "Oct 2025", percentage: 97 },
  { period: "Nov 2025", percentage: 92 },
  { period: "Dec 2025", percentage: 96 },
];

export const year2025AverageDelivery = 97;
