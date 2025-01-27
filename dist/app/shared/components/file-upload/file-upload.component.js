import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PrimeIcons } from "primeng/api";
import { FormControl } from "@angular/forms";
let FileUploadComponent = class FileUploadComponent {
    constructor(filesHttpService) {
        this.filesHttpService = filesHttpService;
        this.acceptAttributes = '.pdf,.txt,.doc,.docx,.xls,.xlsx,.csv,.ppt,.pptx,.zip,.rar,.7z,.tar, image/*';
        this.auto = true;
        this.multiple = true;
        this.maxFileSize = 10240000 * 20;
        this.fileLimit = 20;
        this.mode = 'basic';
        this.modelId = '';
        this.flagUploadFiles = new EventEmitter(false);
        this.types = [];
        this.selectedType = new EventEmitter();
        this.PrimeIcons = PrimeIcons;
        this.type = new FormControl(null);
    }
    uploadFile(event, uploadFiles) {
        if (this.typeId) {
            const formData = new FormData();
            formData.append('file', event.files[0]);
            this.filesHttpService.uploadFile(this.modelId, this.typeId, formData).subscribe(response => {
                this.flagUploadFiles.emit(true);
                uploadFiles.clear();
            }, error => uploadFiles.clear());
        }
        else if (this.type.value) {
            const formData = new FormData();
            formData.append('file', event.files[0]);
            this.filesHttpService.uploadFile(this.modelId, this.type.value.id, formData).subscribe(response => {
                this.flagUploadFiles.emit(true);
                uploadFiles.clear();
            }, error => uploadFiles.clear());
        }
        else {
            // this.messageService.errorCustom('Seleccione un tipo de documento', 'Intente de nuevo por favor');
        }
    }
    uploadFiles(event, uploadFiles) {
        const formData = new FormData();
        formData.append('files[]', event.files);
        formData.append('typeId', 'hola');
        this.filesHttpService.uploadFiles(this.modelId, formData).subscribe(response => {
            this.flagUploadFiles.emit(false);
            uploadFiles.clear();
        }, error => uploadFiles.clear());
    }
};
__decorate([
    Input()
], FileUploadComponent.prototype, "acceptAttributes", void 0);
__decorate([
    Input()
], FileUploadComponent.prototype, "auto", void 0);
__decorate([
    Input()
], FileUploadComponent.prototype, "multiple", void 0);
__decorate([
    Input()
], FileUploadComponent.prototype, "maxFileSize", void 0);
__decorate([
    Input()
], FileUploadComponent.prototype, "fileLimit", void 0);
__decorate([
    Input()
], FileUploadComponent.prototype, "mode", void 0);
__decorate([
    Input()
], FileUploadComponent.prototype, "modelId", void 0);
__decorate([
    Output()
], FileUploadComponent.prototype, "flagUploadFiles", void 0);
__decorate([
    Input()
], FileUploadComponent.prototype, "types", void 0);
__decorate([
    Output()
], FileUploadComponent.prototype, "selectedType", void 0);
__decorate([
    Input()
], FileUploadComponent.prototype, "typeId", void 0);
FileUploadComponent = __decorate([
    Component({
        selector: 'app-file-upload',
        templateUrl: './file-upload.component.html',
        styleUrls: ['./file-upload.component.scss']
    })
], FileUploadComponent);
export { FileUploadComponent };
//# sourceMappingURL=file-upload.component.js.map