export interface DashboardMetric {
  title: string;
  value: number;
  icon?: string;
  color?: string;
}

export interface DashboardData {
  metrics: DashboardMetric[];
  attendanceReport: {
    onTime: number;
    late: number;
  };
}
