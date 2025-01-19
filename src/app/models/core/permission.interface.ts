
export interface Permission {
  id: string;
  permissionTypeId: string;
  userId: string;
  formId: string;
  issuedAt: Date;
  startedAt: Date;
  endedAt: Date;
  observation?: string;
  location: string;
  unit: string;
  position: string;
  coordination?: string;
}
