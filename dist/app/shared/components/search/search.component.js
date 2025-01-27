import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UntypedFormControl } from "@angular/forms";
import { debounceTime } from "rxjs";
let SearchComponent = class SearchComponent {
    constructor(coreService) {
        this.coreService = coreService;
        this.columns = [];
        this.records = [];
        this.selectedRecordOut = new EventEmitter();
        this.displayModal = new EventEmitter();
        this.paginatorOut = new EventEmitter();
        this.searchOut = new EventEmitter();
        this.isLoading = false;
        this.items = [];
        this.search = new UntypedFormControl('');
        this.progressBarDelete = false;
        this.selectedRecords = [];
        this.paginatorIn = this.coreService.paginator;
        this.search.valueChanges.pipe(debounceTime(600)).subscribe((value) => {
            this.searchOut.emit(value);
        });
    }
    ngOnInit() {
    }
    select(record) {
        this.selectedRecordOut.emit(record);
        this.displayModal.emit(false);
    }
    paginate(event) {
        // this.paginatorIn.page = event.page + 1;
        this.paginatorOut.emit(event.page + 1);
    }
    catalogues() {
    }
};
__decorate([
    Input()
], SearchComponent.prototype, "columns", void 0);
__decorate([
    Input()
], SearchComponent.prototype, "records", void 0);
__decorate([
    Input()
], SearchComponent.prototype, "paginatorIn", void 0);
__decorate([
    Output()
], SearchComponent.prototype, "selectedRecordOut", void 0);
__decorate([
    Output()
], SearchComponent.prototype, "displayModal", void 0);
__decorate([
    Output()
], SearchComponent.prototype, "paginatorOut", void 0);
__decorate([
    Output()
], SearchComponent.prototype, "searchOut", void 0);
SearchComponent = __decorate([
    Component({
        selector: 'app-search',
        templateUrl: './search.component.html',
        styleUrls: ['./search.component.scss']
    })
], SearchComponent);
export { SearchComponent };
//# sourceMappingURL=search.component.js.map