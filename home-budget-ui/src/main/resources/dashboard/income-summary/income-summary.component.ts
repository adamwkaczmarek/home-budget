import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ExpenseService } from './../../expenses/expense.service';
import { MonthlyExpensesService } from './../../monthly-expenses/monthly-expenses.service';
import { MONTHS_DICT } from './../../app.constants';
import { Dict } from './../../app.dict';
import { DashboardService } from './../dashboard.service';


@Component({
    moduleId: module.id,
    selector: 'my-income-summary',
    templateUrl: 'income-summary.component.html'

})



export class IncomeSummaryComponent {
    amount: Number;

    @Input()
    month: string;
    @Input()
    year: number;

    constructor(private dashboardService: DashboardService) {
        this.amount = 0;
    };


    getMonthlyIncomeSum(month, year): void {
         console.log("*********IncomeSummaryComponent#getMonthlyIncomeSum********");
         this.dashboardService.getMonthlyIncome(month,year).then(amount=>this.amount=amount);
    }

    ngOnInit(): void {
        this.getMonthlyIncomeSum(this.month, this.year);
    }


}