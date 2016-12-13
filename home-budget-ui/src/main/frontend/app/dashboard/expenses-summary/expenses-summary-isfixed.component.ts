import { Component,Input } from '@angular/core';
import { ExpenseService } from './../../expenses/expense.service';
import { MonthlyExpensesService } from './../../monthly-expenses/monthly-expenses.service';


@Component({
    selector: 'my-expenses-summary-isfixed',
    templateUrl: 'expenses-summary-isfixed.component.html'

})

export class ExpensesSummaryIsFixedComponent {
    amount_fixed : Number;
    amount_single : Number;
    mode="LIST_ALL";
    @Input()
    month:string;
    @Input()
    year:number;

    constructor(private monthlyExpenseService:MonthlyExpensesService ) {
       this. amount_fixed=0;
       this.amount_single=0;
    };


    getMonthlyFixedExpensesSum(month,year): void {
       console.log("**********ExpensesSummaryIsFixedComponent#getMonthlyFixedExpensesSum()"+month + " " + year  +"**************");
       this.monthlyExpenseService
       .getMonthlyFixedExpensesSum(this.month,this.year)
       .then(sum=>this.amount_fixed=sum);
    }

     getMonthlySingleExpensesSum(month,year): void {
       this.monthlyExpenseService
       .getMonthlySingleExpensesSum(this.month,this.year)
       .then(sum=>this.amount_single=sum);
    }

    ngOnInit(): void {
        this.getMonthlySingleExpensesSum(this.month,this.year);
        this.getMonthlyFixedExpensesSum(this.month,this.year);
    }

}
