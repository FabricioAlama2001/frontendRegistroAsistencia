import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from "@angular/forms";
import { PrimeIcons } from "primeng/api";
let FileListComponent = class FileListComponent {
    constructor(confirmationService, coreService, filesHttpService, overlaysService, messageService) {
        this.confirmationService = confirmationService;
        this.coreService = coreService;
        this.filesHttpService = filesHttpService;
        this.overlaysService = overlaysService;
        this.messageService = messageService;
        this.PrimeIcons = PrimeIcons;
        this.acceptAttributes = '.pdf,.txt,.doc,.docx,.xls,.xlsx,.csv,.ppt,.pptx,.zip,.rar,.7z,.tar, image/*';
        this.multiple = true;
        this.maxFileSize = 10240000 * 20;
        this.fileLimit = 20;
        this.modelId = '';
        this.isVisible = false;
        this.enabled = true;
        this.types = [];
        this.isHide = new EventEmitter(false);
        this.selectedType = new EventEmitter();
        this.files = new EventEmitter();
        this.buttonActions = [];
        this.columns = this.buildColumns;
        this.isButtonActions = false;
        this.search = new FormControl('');
        this.type = new FormControl();
        this.selectedItem = {};
        this.selectedItems = [];
        this.items = [];
        this.isDialog = true;
        this.paginator = this.coreService.paginator;
        this.search.valueChanges.subscribe((value) => {
            if (value.length === 0) {
                this.findByModel();
            }
        });
        this.type.valueChanges.subscribe((value) => {
            this.selectedType.emit(value);
        });
    }
    ngOnInit() {
        this.findByModel();
    }
    findByModel(page = 0) {
        this.filesHttpService.findByModel(this.modelId)
            .subscribe((response) => {
            this.paginator = response.pagination;
            this.items = response.data;
            this.files.emit(this.items);
        });
    }
    get buildColumns() {
        return [
            { field: 'originalName', header: 'Nombre' },
            { field: 'extension', header: 'Extensión' },
            { field: 'type', header: 'Tipo' },
            { field: 'size', header: 'Tamaño' },
        ];
    }
    selectItem(item) {
        this.selectedItem = item;
        this.buildButtonActions();
        this.isButtonActions = true;
    }
    paginate(event) {
        this.findByModel(event.page);
    }
    buildButtonActions() {
        this.buttonActions = [];
        this.buttonActions.push({
            icon: PrimeIcons.DOWNLOAD,
            command: () => {
                if (this.selectedItem?.id)
                    this.download(this.selectedItem);
            },
        });
    }
    download(file) {
        this.filesHttpService.downloadFile(file);
    }
    remove(event, id) {
        this.confirmationService.confirm({
            target: event.target,
            ...this.overlaysService.deleteConfirmPopup,
            accept: () => {
                this.filesHttpService.remove(id).subscribe(() => {
                    this.items = this.items.filter(item => item.id !== id);
                    this.paginator.totalItems--;
                    this.files.emit(this.items);
                });
            }
        });
    }
};
__decorate([
    Input()
], FileListComponent.prototype, "acceptAttributes", void 0);
__decorate([
    Input()
], FileListComponent.prototype, "multiple", void 0);
__decorate([
    Input()
], FileListComponent.prototype, "maxFileSize", void 0);
__decorate([
    Input()
], FileListComponent.prototype, "fileLimit", void 0);
__decorate([
    Input()
], FileListComponent.prototype, "modelId", void 0);
__decorate([
    Input()
], FileListComponent.prototype, "isVisible", void 0);
__decorate([
    Input()
], FileListComponent.prototype, "enabled", void 0);
__decorate([
    Input()
], FileListComponent.prototype, "types", void 0);
__decorate([
    Output()
], FileListComponent.prototype, "isHide", void 0);
__decorate([
    Output()
], FileListComponent.prototype, "selectedType", void 0);
__decorate([
    Output()
], FileListComponent.prototype, "files", void 0);
__decorate([
    Input()
], FileListComponent.prototype, "isDialog", void 0);
FileListComponent = __decorate([
    Component({
        selector: 'app-file-list',
        templateUrl: './file-list.component.html',
        styleUrls: ['./file-list.component.scss']
    })
], FileListComponent);
export { FileListComponent };
//# sourceMappingURL=file-list.component.js.map