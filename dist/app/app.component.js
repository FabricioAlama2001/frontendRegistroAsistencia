import { __decorate } from "tslib";
import { Component, inject } from '@angular/core';
import { environment } from "../environments/environment";
import { TranslateService } from '@ngx-translate/core';
import { PrimeNGConfig } from 'primeng/api';
let AppComponent = class AppComponent {
    constructor() {
        this.title = 'SIC';
        this.env = environment.API_URL;
        this.translateService = inject(TranslateService);
        this.primengConfig = inject(PrimeNGConfig);
    }
    ngAfterViewInit() {
        this.translateChange('es');
    }
    translateChange(lang) {
        this.translateService.use(lang);
        this.translateService.get('primeng').subscribe((res) => this.primengConfig.setTranslation(res));
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrl: './app.component.scss'
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map