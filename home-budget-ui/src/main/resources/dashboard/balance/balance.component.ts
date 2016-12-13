import { Component, ElementRef, Input, ViewChild, EventEmitter, Output } from '@angular/core';
import { MONTHS_DICT } from './../../app.constants';
import { DashboardService } from './../dashboard.service';
import { Dict } from './../../app.dict';
import { Balance } from './balance';





@Component({
    moduleId: module.id,
    selector: 'my-balance',
    templateUrl: 'balance.component.html'


})



export class BalanceComponent {

    @Input()
    month: string;
    @Input()
    year: number;
    // Doughnut
    public doughnutChartLabels: string[] = ['Wydatki poczynione i wydatki stałe [%]',"Wydatki planowane [%]", 'Dostępny budżet [%]', ];
    public doughnutChartColors: any[] = [{ backgroundColor: ["#dd4b39","#f0b0a8", "#00a65a"] }];
    public doughnutChartData: number[] = [100, 0];
    public doughnutChartType: string = 'pie';
    //
    @Output() onNextMonth = new EventEmitter<void>();
    //
    month_display: string;
    public balance: Balance;

    constructor(private dashboardService: DashboardService) { };


    ngOnInit(): void {
        this.balance=new Balance(0,0,0);
        console.log("***** BalanceComponent#ngOnInit " + this.month + " " + this.year + " ")
        this.getBalance(this.month, this.year);
    }


    nextMonth(): void {
        console.log("**********BalanceComponent#nextMonth()**************");
        this.onNextMonth.emit();
    }

    getBalance(month, year): void {

        this.month_display = MONTHS_DICT.find(dict => dict.value == month).display;
        console.log("***** BalanceComponent#getBalance " + month + " " + year + " " + this.month_display);
        this.dashboardService.getMonthlyBalance(month, year).then(balance => {
            this.balance = new Balance(this.round(balance.balance),
                this.round(balance.budgetUsagePercent),
                this.round(balance.plannedBudgetUsegePercent))
        this.doughnutChartData = [this.balance.budgetUsagePercent,this.balance.plannedBudgetUsegePercent, 100 - (this.balance.budgetUsagePercent+this.balance.plannedBudgetUsegePercent)];
        console.log("BalanceComponent#then",this.balance)    
    })
    };

    round(number: number): number {
        return Math.round(number * 100) / 100;
    }
}

