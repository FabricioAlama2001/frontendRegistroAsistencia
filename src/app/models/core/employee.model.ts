import {CatalogueModel, ScheduleModel} from '@models/core';
import {UserModel} from "@models/auth";

export interface EmployeeModel {
  id: string;
  createAt: Date;
  updateAt: Date;
  deleteAt: Date;

  user: UserModel;
  position: CatalogueModel;
  schedule: ScheduleModel;
}

export interface CreateContinentDto extends Omit<EmployeeModel, 'id'> {}

export interface UpdateContinentDto extends Partial<Omit<EmployeeModel, 'id'>> {}

export interface SelectContinentDto extends Partial<EmployeeModel> {}
