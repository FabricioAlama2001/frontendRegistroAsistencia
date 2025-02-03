import {inject, Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "@servicesApp/auth";

export enum AppRoutesEnum {
  CORE = '/core',
  AUTH = '/auth',
  COMMON = '/common',
}

@Injectable({
  providedIn: 'root'
})
export class RoutesService {
  private readonly router = inject(Router);

  constructor() {
  }

  get core(): string {
    return '/core/';
  }

  /** Admin Role **/
  get admin(): string {
    return '/admin/';
  }

  get users(): string {
    return this.admin + 'users';
  }

  get common(): string {
    return '/common';
  }

  /** Login **/
  login() {
    this.router.navigateByUrl(`/login`);
  }

  forbidden() {
    this.router.navigateByUrl(`/common/403`);
  }

  unauthenticated() {
    this.router.navigateByUrl(`/common/401`);
  }

  notFound() {
    this.router.navigateByUrl(`/common/404`);
  }

  roleSelect() {
    this.router.navigateByUrl(`/auth/authentication/role-select`);
  }

  get profile() {
    return '/profile';
  }

  /** Dashboards **/
  dashboardAdmin() {
    this.router.navigateByUrl(`/core/dashboards/admin`);
  }

  dashboardManager() {
    this.router.navigateByUrl(`/core/manager/dashboard`);
  }

  dashboardEmployee() {
    // this.router.navigateByUrl(`/core/dashboards/national-supervisor`);
    this.router.navigateByUrl(`/core/national-supervisor/agreement-list`);
  }
}
