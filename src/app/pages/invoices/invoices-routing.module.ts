import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component
import { ListInvoicesComponent } from './list-invoices/list-invoices.component';

const routes: Routes = [
  {
    path: 'list-invoices',
    component: ListInvoicesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoicesRoutingModule { }
