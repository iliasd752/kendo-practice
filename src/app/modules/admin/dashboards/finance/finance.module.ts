import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SharedModule } from 'app/shared/shared.module';
import { FinanceComponent } from 'app/modules/admin/dashboards/finance/finance.component';
import { financeRoutes } from 'app/modules/admin/dashboards/finance/finance.routing';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {MatExpansionModule} from "@angular/material/expansion";

@NgModule({
    declarations: [
        FinanceComponent
    ],
    imports: [
        RouterModule.forChild(financeRoutes),
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        MatProgressBarModule,
        MatSortModule,
        MatTableModule,
        NgApexchartsModule,
        SharedModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatInputModule,
        MatExpansionModule
    ]
})
export class FinanceModule
{
}
