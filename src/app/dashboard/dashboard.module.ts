import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomepageComponent } from './components/homepage/homepage.component';
import { QuickActionsComponent } from './components/quick-actions/quick-actions.component';
import { TransactionEmptyStateComponent } from './components/transaction-empty-state/transaction-empty-state.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { TransactionListItemComponent } from './components/transaction-list-item/transaction-list-item.component';


@NgModule({
  declarations: [
    HomepageComponent,
    QuickActionsComponent,
    TransactionEmptyStateComponent,
    TransactionListComponent,
    TransactionListItemComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
