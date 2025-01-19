import {Permission} from "@models/core/permission.interface";

export interface PermissionType {
  id: string;
  name: string;
  isDiscountable: boolean;
  permissions?: Permission[];
}
