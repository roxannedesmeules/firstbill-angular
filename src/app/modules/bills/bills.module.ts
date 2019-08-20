import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { BillsRoutingModule } from './bills-routing.module';

import { BillService } from '@core/services/bills/bill.service';

import { ListComponent } from './pages/list/list.component';
import { DetailsComponent } from './pages/details/details.component';

import { FormComponent } from './components/form/form.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
    declarations   : [
        ListComponent,
        FormComponent,
        DetailsComponent,
        CardComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        BillsRoutingModule,
    ],
    entryComponents: [ ListComponent ],
    providers: [
        BillService,
    ],
})
export class BillsModule {}