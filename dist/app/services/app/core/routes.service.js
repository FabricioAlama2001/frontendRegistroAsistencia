import { __decorate } from "tslib";
import { inject, Injectable } from '@angular/core';
import { Router } from "@angular/router";
export var AppRoutesEnum;
(function (AppRoutesEnum) {
    AppRoutesEnum["CORE"] = "/core";
    AppRoutesEnum["AUTH"] = "/auth";
    AppRoutesEnum["COMMON"] = "/common";
})(AppRoutesEnum || (AppRoutesEnum = {}));
let RoutesService = class RoutesService {
    constructor() {
        this.router = inject(Router);
    }
    get core() {
        return '/core/';
    }
    /** Admin Role **/
    get admin() {
        return '/admin/';
    }
    get users() {
        return this.admin + 'users';
    }
    /** Planner Role **/
    academicFormationList() {
        this.router.navigate([this.core + 'professionals/1/academic-formations']);
    }
    projectsForm(id) {
        return this.core + `planner/projects/${id}`;
    }
    componentsList(projectId = null) {
        if (projectId) {
            return this.core + `planner/projects/${projectId}/components`;
        }
        return this.core + `planner/components`;
    }
    componentsForm(projectId, id) {
        return this.core + `planner/projects/${projectId}/components/${id}`;
    }
    get subactivitiesList() {
        return this.core + '/planner/subactivities';
    }
    subactivitiesForm(id) {
        return this.core + `planner/subactivities/${id}`;
    }
    activitiesForm(componentId, id) {
        return this.core + `planner/components/${componentId}/activities/${id}`;
    }
    activitiesList(componentId = null) {
        if (componentId) {
            return this.core + `planner/components/${componentId}/activities`;
        }
        return this.core + `planner/activities`;
    }
    get unitManagersList() {
        return this.core + 'planner/unit-managers';
    }
    unitManagersForm(id) {
        return this.core + `planner/unit-managers/${id}`;
    }
    get transactionDetailsList() {
        return this.core + 'planner/transaction-details';
    }
    transactionDetailsForm(id) {
        return this.core + `planner/transaction-details/${id}`;
    }
    /** Applicant Routes **/
    get scpListApplicant() {
        return this.core + 'applicant/transactions/scp';
    }
    scpFormApplicant(id) {
        return this.core + `applicant/transactions/scp/${id}`;
    }
    programingFormApplicant(id) {
        return this.core + `applicant/transactions/scp/programming/${id}`;
    }
    /** Applicant Routes **/
    /** Catalogue Role **/
    get budgetItemsList() {
        return this.core + 'catalogue/budget-items';
    }
    budgetItemsForm(id) {
        return this.core + `catalogue/budget-items/${id}`;
    }
    get expenseGroupsList() {
        return this.core + '/catalogue/expense-groups';
    }
    expenseGroupsForm(id) {
        return this.core + `catalogue/expense-groups/${id}`;
    }
    get expenseTypesList() {
        return this.core + '/catalogue/expense-types';
    }
    expenseTypesForm(id) {
        return this.core + `catalogue/expense-types/${id}`;
    }
    get documentTypesList() {
        return this.core + '/catalogue/document-types';
    }
    documentTypesForm(id) {
        return this.core + `catalogue/document-types/${id}`;
    }
    get pndObjectivesList() {
        return this.core + '/catalogue/pnd-objectives';
    }
    pndObjectivesForm(id) {
        return this.core + `catalogue/pnd-objectives/${id}`;
    }
    get pndPolicesList() {
        return this.core + '/catalogue/pnd-polices';
    }
    pndPolicesForm(id) {
        return this.core + `catalogue/pnd-polices/${id}`;
    }
    get indicatorComponentsList() {
        return this.core + '/catalogue/indicator-components';
    }
    indicatorComponentsForm(id) {
        return this.core + `catalogue/indicator-components/${id}`;
    }
    get fundingSourcesList() {
        return this.core + '/catalogue/funding-sources';
    }
    fundingSourcesForm(id) {
        return this.core + `catalogue/funding-sources/${id}`;
    }
    get institutionalStrategicPlansList() {
        return this.core + '/catalogue/institutional-strategic-plans';
    }
    institutionalStrategicPlansForm(id) {
        return this.core + `catalogue/institutional-strategic-plans/${id}`;
    }
    get strategicAxesList() {
        return this.core + '/catalogue/strategic-axes';
    }
    strategicAxesForm(id) {
        return this.core + `catalogue/strategic-axes/${id}`;
    }
    get strategiesList() {
        return this.core + '/catalogue/strategies';
    }
    strategiesForm(id) {
        return this.core + `catalogue/strategies/${id}`;
    }
    get indicatorSubactivitiesList() {
        return this.core + '/catalogue/indicator-subactivities';
    }
    indicatorSubactivitiesForm(id) {
        return this.core + `catalogue/indicator-subactivities/${id}`;
    }
    get continentsList() {
        return this.core + '/catalogue/continents';
    }
    continentsForm(id) {
        return this.core + `catalogue/continents/${id}`;
    }
    get fiscalYearsList() {
        return this.core + '/catalogue/fiscal-years';
    }
    fiscalYearsForm(id) {
        return this.core + `catalogue/fiscal-years/${id}`;
    }
    get unitsList() {
        return this.core + '/catalogue/units';
    }
    unitsForm(id) {
        return this.core + `catalogue/units/${id}`;
    }
    get programmingTypesList() {
        return this.core + '/catalogue/programming-types';
    }
    programmingTypesForm(id) {
        return this.core + `catalogue/programming-types/${id}`;
    }
    get applicationStatusList() {
        return this.core + '/catalogue/application-status';
    }
    applicationStatusForm(id) {
        return this.core + `catalogue/application-status/${id}`;
    }
    get transactionsList() {
        return this.core + '/applicant/transactions';
    }
    transactionsForm(id) {
        return this.core + `applicant/transactions/${id}`;
    }
    get common() {
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
        this.router.navigateByUrl(`/core/manager/employees/form`);
    }
    dashboardEmployee() {
        // this.router.navigateByUrl(`/core/dashboards/national-supervisor`);
        this.router.navigateByUrl(`/core/national-supervisor/agreement-list`);
    }
    passwordReset() {
        this.router.navigateByUrl(`/password-reset`);
    }
    registration() {
        this.router.navigateByUrl(`/auth/registrations`);
    }
    professionalRegistration() {
        this.router.navigateByUrl(`/auth/registrations/professionals`);
    }
    companyRegistration() {
        this.router.navigateByUrl(`/auth/registrations/companies`);
    }
};
RoutesService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], RoutesService);
export { RoutesService };
//# sourceMappingURL=routes.service.js.map