import { VacationDetail } from './vacation-detail.interface';

export interface Vacation {
  id: string;
  userId: string;
  vacationDetails?: VacationDetail[]; // Relación con los detalles de vacaciones
}
