import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';
import { ButtonModule } from "primeng/button";
import { RippleModule } from "primeng/ripple";
import { MessageModule } from "primeng/message";
import { NotFoundComponent } from './not-found/not-found.component';
import { CommonRoutingModule } from './common-routing.module';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ServiceUnavailableComponent } from './service-unavailable/service-unavailable.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { InternalServerErrorComponent } from './internal-server-error/internal-server-error.component';
import { DividerModule } from "primeng/divider";
let CommonModule = class CommonModule {
};
CommonModule = __decorate([
    NgModule({
        declarations: [
            NotFoundComponent,
            ForbiddenComponent,
            ServiceUnavailableComponent,
            UnauthorizedComponent,
            InternalServerErrorComponent
        ],
        imports: [
            NgCommonModule,
            CommonRoutingModule,
            ButtonModule,
            RippleModule,
            MessageModule,
            DividerModule
        ]
    })
], CommonModule);
export { CommonModule };
//# sourceMappingURL=common.module.js.map