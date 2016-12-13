import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ExpensesComponent } from './expenses/expenses.component';
import { ExpensesSummaryComponent } from './dashboard/expenses-summary/expenses-summary.component';
import { IncomeSummaryComponent } from './dashboard/income-summary/income-summary.component';
import { BalanceComponent} from './dashboard/balance/balance.component';
import { NewExpenseComponent } from './expenses/new-expense/new-expense.component';
import { ExpensesSummaryIsFixedComponent } from './dashboard/expenses-summary/expenses-summary-isfixed.component';
import { ExpenseService } from './expenses/expense.service';
import { MonthlyExpensesService} from './monthly-expenses/monthly-expenses.service'
import {MonthlyExpensesComponent} from './monthly-expenses/monthly-expenses.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardService } from './dashboard/dashboard.service';
import { HttpModule }    from '@angular/http';
import { Configuration } from './app.constants';
import { ChartsModule } from 'ng2-charts/ng2-charts';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule,
    RouterModule.forRoot([
      {
        path: 'expenses',
        component: ExpensesComponent
      }, {
        path: 'new-expense',
        component: NewExpenseComponent
      },
      {
        path: 'dasboard',
        component: DashboardComponent
      },
      {
        path: '',
        redirectTo: '/dasboard',
        pathMatch: 'full'
      }
    ])
  ],
  declarations: [
    AppComponent,
    ExpensesComponent,
    NewExpenseComponent,
    DashboardComponent,
    MonthlyExpensesComponent,
    ExpensesSummaryComponent,
    ExpensesSummaryIsFixedComponent,
    IncomeSummaryComponent,
    BalanceComponent
  ],
  bootstrap: [AppComponent],
  providers: [ExpenseService,MonthlyExpensesService,DashboardService,Configuration],

})
export class AppModule { }
