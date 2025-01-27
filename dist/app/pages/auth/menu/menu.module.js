import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { MenuFormComponent } from './menu-form/menu-form.component';
let MenuModule = class MenuModule {
};
MenuModule = __decorate([
    NgModule({
        declarations: [
            MenuComponent,
            MenuListComponent,
            MenuFormComponent
        ],
        imports: [
            CommonModule,
            MenuRoutingModule
        ]
    })
], MenuModule);
export { MenuModule };
//# sourceMappingURL=menu.module.js.map