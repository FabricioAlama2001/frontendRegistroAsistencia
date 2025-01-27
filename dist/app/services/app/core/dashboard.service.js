import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
let DashboardService = class DashboardService {
    getDashboardData() {
        const mockData = {
            metrics: [
                { title: 'Total de Empleados', value: 6, icon: 'pi pi-users', color: '#607D8B' },
                { title: 'Empleados a Tiempo', value: 56.58, icon: 'pi pi-clock', color: '#4CAF50' },
                { title: 'A Tiempo Hoy', value: 4, icon: 'pi pi-check', color: '#FFC107' },
                { title: 'Tarde Hoy', value: 2, icon: 'pi pi-times', color: '#F44336' },
            ],
            attendanceReport: {
                onTime: 56.58,
                late: 43.42,
            },
        };
        return of(mockData);
    }
};
DashboardService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], DashboardService);
export { DashboardService };
//# sourceMappingURL=dashboard.service.js.map