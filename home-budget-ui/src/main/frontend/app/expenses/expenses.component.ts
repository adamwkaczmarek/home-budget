import { Component, Output, EventEmitter,Input } from '@angular/core';
import { Expense } from './expense';
import { ExpenseService } from './expense.service';
import { MonthlyExpensesService } from './../monthly-expenses/monthly-expenses.service';
import { NewMonthlyExpense } from './../monthly-expenses/new-monthly-expense';


@Component({
    selector: 'my-expenses',
    templateUrl: 'expenses.component.html',
    styleUrls: ['expenses.componet.css']

})



export class ExpensesComponent {
    title = 'Zdefiniowane';
    expenses: Expense[];
    mode = "LIST_ALL";
    choosenExpense:Expense;

    @Input()
    month:string;
    @Input()
    year:number;



    @Output() onSetMonthlyExpense = new EventEmitter<void>();

    constructor(private expeseService: ExpenseService, private monthlyExpenseService: MonthlyExpensesService) {
      
    };


    getExpenses(month,year): void {
        console.log("**********ExpensesComponent#getExpenses "+month + " " + year  +"**************");
        this.expeseService
            .getExpenses(month,year)
            .then(expense => this.expenses = expense);
    }

    ngOnInit(): void {
       
        this.getExpenses(this.month,this.year);
    }

    newExpense(): void {
        this.mode = "NEW";
    }

    removeExpense(expense):void{
        this.expeseService.removeExpenses(expense.id).then(response => this.refreshList());
    }

    setMonthlyExpense(expense: Expense): void {
       
        this.choosenExpense=expense;
        console.log(this.choosenExpense);
        
        if(!expense.amount || expense.amount==0){
            this.mode = "SET_AMOUNT";
        }else{
            this.monthlyExpenseService
            .addExpenses(new NewMonthlyExpense(this.choosenExpense.id, this.choosenExpense.amount, this.month, this.year))
            .then(monthlyExpense => this.onSetMonthlyExpense.emit())
            .then(monthlyExpense => this. refreshList());
        }
        
      
    }

    setExpensesAmount():void{
          this.monthlyExpenseService
            .addExpenses(new NewMonthlyExpense(this.choosenExpense.id, this.choosenExpense.amount, this.month, this.year))
            .then(monthlyExpense => this.onSetMonthlyExpense.emit())
            .then(monthlyExpense => this. refreshList());
    };

    refreshList(): void {
        console.log("**********setListMode**************");
        this.expeseService
            .getExpenses(this.month,this.year)
            .then(expense => this.expenses = expense);
        this.mode = "LIST_ALL";
    }

}
