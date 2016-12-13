import { Component,ViewChild } from '@angular/core';
import { DashboardService } from './dashboard.service';
import {MonthlyExpensesComponent} from './../monthly-expenses/monthly-expenses.component'
import {  ExpensesSummaryComponent} from './expenses-summary/expenses-summary.component';
import {  ExpensesSummaryIsFixedComponent} from './expenses-summary/expenses-summary-isfixed.component';
import { ExpensesComponent } from './../expenses/expenses.component';
import { BalanceComponent } from './balance/balance.component';
import { IncomeSummaryComponent } from './income-summary/income-summary.component';
import { MONTHS_DICT } from './../app.constants';
import { Dict } from './../app.dict';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls:['dashboard.component.css']

})



export class DashboardComponent {
    title = 'HOME_PAGE';
    month:string;
    year : number;
    monthCounter=0;
   
    
    @ViewChild(MonthlyExpensesComponent)
    private monthlyExpensesComponent :MonthlyExpensesComponent;
    
    @ViewChild(ExpensesSummaryComponent)
    private expensesSummaryComponent : ExpensesSummaryComponent;

    @ViewChild(ExpensesSummaryIsFixedComponent)
    private expensesSummaryIsFixedComponent:ExpensesSummaryIsFixedComponent;

    
    @ViewChild(ExpensesComponent )
    private expensesComponent :ExpensesComponent;

    @ViewChild(BalanceComponent)
    private balanceComponent :BalanceComponent;

    @ViewChild(IncomeSummaryComponent)
     private incomeSummaryComponent :IncomeSummaryComponent;
 

    constructor(private service: DashboardService) { };


    ngOnInit(): void {
      this.year=new Date().getFullYear();
      this.month=  MONTHS_DICT[new Date().getMonth()]["value"];

      console.log("************** Dashboard init",this.year, this.month,"*************");
    }

    refreshViews():void{
        console.log("*********DashboardComponent#refreshViews********");
        this.monthlyExpensesComponent.getMonthlyExpenses(this.month,this.year);
        this.expensesSummaryComponent.getMonthlyExpensesSum(this.month,this.year);
        this.expensesSummaryIsFixedComponent.getMonthlyFixedExpensesSum(this.month,this.year);
        this.expensesSummaryIsFixedComponent.getMonthlySingleExpensesSum(this.month,this.year);
        this.balanceComponent.getBalance(this.month,this.year);
      
    }

      refreshAllViews():void{
        console.log("*********DashboardComponent#refreshAllViews********");
        this.monthlyExpensesComponent.getMonthlyExpenses(this.month,this.year);
        this.expensesSummaryComponent.getMonthlyExpensesSum(this.month,this.year);
        this.expensesSummaryIsFixedComponent.getMonthlyFixedExpensesSum(this.month,this.year);
        this.expensesSummaryIsFixedComponent.getMonthlySingleExpensesSum(this.month,this.year);
        this.expensesComponent.getExpenses(this.month,this.year);
        this.balanceComponent.getBalance(this.month,this.year);
        this.incomeSummaryComponent.getMonthlyIncomeSum(this.month,this.year);
    }

    nextMonth():void{
         console.log("*********DashboardComponent#nextMonth ",this.year, this.month,"********");
         this.monthCounter++;
         var nextMonthIdx = new Date().getMonth()+this.monthCounter;
         if(nextMonthIdx > 11 ){
          nextMonthIdx=nextMonthIdx-12;
        }

        if(this.month=='DECEMBER')
         this.year++;
         
          
        this.month=  MONTHS_DICT[nextMonthIdx].value;
        
          
        console.log("************** DashboardComponent#nextMonth ",this.year, this.month,"*************");
        this.refreshAllViews();
    }

}
