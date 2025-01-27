import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PrimeIcons } from "primeng/api";
let ImageUploadComponent = class ImageUploadComponent {
    constructor(filesHttpService) {
        this.filesHttpService = filesHttpService;
        this.acceptAttributes = 'image/*';
        this.multiple = true;
        this.maxFileSize = 10240000 * 20;
        this.fileLimit = 1;
        this.modelId = '';
        this.flagUploadFiles = new EventEmitter(false);
        this.PrimeIcons = PrimeIcons;
    }
    uploadFile(event, uploadFiles) {
        const formData = new FormData();
        formData.append('file', event.files[0]);
        this.filesHttpService.uploadImage(this.modelId, formData).subscribe(response => {
            this.flagUploadFiles.emit(true);
            uploadFiles.clear();
        }, error => uploadFiles.clear());
    }
};
__decorate([
    Input()
], ImageUploadComponent.prototype, "acceptAttributes", void 0);
__decorate([
    Input()
], ImageUploadComponent.prototype, "multiple", void 0);
__decorate([
    Input()
], ImageUploadComponent.prototype, "maxFileSize", void 0);
__decorate([
    Input()
], ImageUploadComponent.prototype, "fileLimit", void 0);
__decorate([
    Input()
], ImageUploadComponent.prototype, "modelId", void 0);
__decorate([
    Output()
], ImageUploadComponent.prototype, "flagUploadFiles", void 0);
ImageUploadComponent = __decorate([
    Component({
        selector: 'app-image-upload',
        templateUrl: './image-upload.component.html',
        styleUrls: ['./image-upload.component.scss']
    })
], ImageUploadComponent);
export { ImageUploadComponent };
//# sourceMappingURL=image-upload.component.js.map