import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Map, marker, tileLayer } from "leaflet";
let MapComponent = class MapComponent {
    constructor() {
        this.latitudeOut = new EventEmitter();
        this.longitudeOut = new EventEmitter();
        this.latitudeIn = 0;
        this.longitudeIn = 0;
        this.map = '';
    }
    ngAfterViewInit() {
        if (this.latitudeIn && this.longitudeIn) {
            const myMap = new Map(this.map).setView([this.latitudeIn, this.longitudeIn], 14);
            // tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {}).addTo(myMap);
            //
            //http://ows.mundialis.de/services/service?
            tileLayer.wms('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                format: 'image/png',
                transparent: true,
                attribution: ''
            }).addTo(myMap);
            let markerItem = marker([this.latitudeIn, this.longitudeIn]).addTo(myMap).bindPopup('Mi Ubicación');
            myMap.on('click', (e) => {
                myMap.removeLayer(markerItem);
                if (e?.latlng && e?.latlng) {
                    markerItem = marker([e.latlng.lat, e.latlng.lng]).addTo(myMap).bindPopup('Mi Ubicación');
                    this.latitudeOut.emit(e.latlng.lat);
                    this.longitudeOut.emit(e.latlng.lng);
                }
            });
        }
    }
};
__decorate([
    Output()
], MapComponent.prototype, "latitudeOut", void 0);
__decorate([
    Output()
], MapComponent.prototype, "longitudeOut", void 0);
__decorate([
    Input()
], MapComponent.prototype, "latitudeIn", void 0);
__decorate([
    Input()
], MapComponent.prototype, "longitudeIn", void 0);
__decorate([
    Input()
], MapComponent.prototype, "map", void 0);
MapComponent = __decorate([
    Component({
        selector: 'app-map',
        templateUrl: './map.component.html',
        styleUrls: ['./map.component.scss']
    })
], MapComponent);
export { MapComponent };
//# sourceMappingURL=map.component.js.map