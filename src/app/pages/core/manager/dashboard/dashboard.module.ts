import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {ChartModule} from "primeng/chart";
import {PanelModule} from "primeng/panel";
import {TableModule} from "primeng/table";


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ChartModule,
    PanelModule,
    TableModule
  ]
})
export class DashboardModule { }
