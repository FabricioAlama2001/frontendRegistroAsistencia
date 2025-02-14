import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
let ExtensionsPipe = class ExtensionsPipe {
    transform(value, ...args) {
        const pathAssets = 'assets/images/shared/files/';
        value = value ? value.toLowerCase() : value;
        switch (value) {
            case 'pdf':
            case '.pdf':
                return pathAssets + 'pdf.png';
            case 'jpg':
            case '.jpg':
            case 'jpeg':
            case '.jpeg':
            case 'png':
            case '.png':
            case 'bmp':
            case '.bmp':
            case 'tiff':
            case '.tiff':
            case 'tif':
            case '.tif':
            case 'svg':
            case '.svg':
                return pathAssets + 'image.png';
            case 'txt':
            case '.txt':
                return pathAssets + 'txt.png';
            case 'doc':
            case '.doc':
            case 'docx':
            case '.docx':
                return pathAssets + 'word.png';
            case 'xls':
            case '.xls':
            case 'xlsx':
            case '.xlsx':
            case 'csv':
            case '.csv':
                return pathAssets + 'excel.png';
            case 'zip':
            case '.zip':
            case 'rar':
            case '.rar':
            case '7z':
            case '.7z':
            case 'tar':
            case '.tar':
                return pathAssets + 'zip.png';
            case 'ptt':
            case '.ptt':
            case 'pptx':
            case '.pptx':
                return pathAssets + 'powerpoint.png';
            default:
                return pathAssets + 'other.png';
        }
    }
};
ExtensionsPipe = __decorate([
    Pipe({
        name: 'extensions'
    })
], ExtensionsPipe);
export { ExtensionsPipe };
//# sourceMappingURL=extensions.pipe.js.map