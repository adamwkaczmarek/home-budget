import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ExpenseService } from './../../expenses/expense.service';
import { MonthlyExpensesService } from './../../monthly-expenses/monthly-expenses.service';
import { MONTHS_DICT } from './../../app.constants';
import { Dict } from './../../app.dict';


@Component({
    selector: 'my-expenses-summary',
    templateUrl: 'expenses-summary.component.html'

})



export class ExpensesSummaryComponent {
    title = 'Zdefiniowane';
    amount: Number;
    mode = "LIST_ALL";
   

    @Input()
    month: string;
    @Input()
    year: number;

    constructor(private monthlyExpenseService: MonthlyExpensesService) {
        this.amount = 0;
    };


    getMonthlyExpensesSum(month, year): void {

        console.log("**********ExpensesSummaryComponen#getMonthlyExpensesSum()" + month + " " + year + "**************");
        this.monthlyExpenseService
            .getMonthlyExpensesSum(month, year)
            .then(sum => this.amount = sum);

    }

    ngOnInit(): void {
            this.getMonthlyExpensesSum(this.month, this.year);
    }


}
