import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from "../../shared/shared.module";
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { CardModule } from 'primeng/card';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    NgModule({
        declarations: [],
        exports: [],
        imports: [
            CommonModule,
            AuthRoutingModule,
            ReactiveFormsModule,
            SharedModule,
            ButtonModule,
            CardModule,
            CheckboxModule,
            DividerModule,
            InputTextModule,
            PasswordModule,
            RippleModule,
        ]
    })
], AuthModule);
export { AuthModule };
//# sourceMappingURL=auth.module.js.map