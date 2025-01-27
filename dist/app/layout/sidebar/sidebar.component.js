import { __decorate } from "tslib";
import { Component, inject } from '@angular/core';
import { PrimeIcons } from 'primeng/api';
import { AuthHttpService, AuthService, MenusHttpService } from "../../services/app/auth";
import { AgreementsService, CoreService, MessageService, RoutesService } from "../../services/app/core";
import { format } from "date-fns";
import { Router } from "@angular/router";
let SidebarComponent = class SidebarComponent {
    constructor() {
        this.PrimeIcons = PrimeIcons;
        this.menus = [];
        this.showedMenu = false;
        this.closed = true;
        this.closedLock = null;
        this.isVisibleAbout = false;
        this.coreService = inject(CoreService);
        this.menusHttpService = inject(MenusHttpService);
        this.authHttpService = inject(AuthHttpService);
        this.agreementsService = inject(AgreementsService);
        this.authService = inject(AuthService);
        this.messageService = inject(MessageService);
        this.routesService = inject(RoutesService);
        this.router = inject(Router);
        this.currentYear = format(new Date(), 'yyyy');
    }
    ngOnInit() {
        this.getMenus();
    }
    showSubMenu(id = 0) {
        this.showedMenu = !this.showedMenu;
        if (id > 0) {
            document.getElementById(id?.toString()).className = this.showedMenu ? 'showMenu' : '';
        }
    }
    getMenus() {
        if (this.authService.role) {
            this.menusHttpService.getMenusByRole(this.authService.role.id).subscribe(menus => {
                this.menus = menus.map(menu => {
                    return {
                        label: menu.label,
                        icon: menu.icon,
                        command: () => {
                            this.agreementsService.clearAgreement();
                            this.coreService.sidebarVisible = false;
                            this.router.navigate([menu.routerLink]);
                        }
                    };
                });
                this.menus.push({
                    label: 'Cerrar Sesión',
                    icon: PrimeIcons.POWER_OFF,
                    command: () => {
                        this.coreService.sidebarVisible = false;
                        this.authHttpService.signOut();
                    }
                });
            });
        }
        else {
            this.routesService.login();
        }
    }
    // lockMenu() {
    //   if (this.closedLock === 'lock') {
    //     this.closedLock = 'lock'
    //   } else {
    //     this.closedLock = 'lock'
    //   }
    //
    // }
    showCloseMenu() {
        if (!this.closedLock) {
            this.closed = !this.closed;
        }
    }
    closeMenu() {
        if (!this.closedLock) {
            this.closed = true;
        }
    }
    signOut() {
        this.authHttpService.signOut();
    }
    about() {
        this.isVisibleAbout = true;
    }
};
SidebarComponent = __decorate([
    Component({
        selector: 'app-sidebar',
        templateUrl: './sidebar.component.html',
        styleUrls: ['./sidebar.component.scss']
    })
], SidebarComponent);
export { SidebarComponent };
//# sourceMappingURL=sidebar.component.js.map