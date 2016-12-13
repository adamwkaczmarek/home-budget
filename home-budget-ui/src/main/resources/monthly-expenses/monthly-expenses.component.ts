import { Component ,Input, Output, EventEmitter} from '@angular/core';
import { MonthlyExpense } from './monthly-expense';
import { MonthlyExpensesService } from './monthly-expenses.service';


@Component({
    moduleId: module.id,
    selector: 'my-monthly-expenses',
    templateUrl: 'monthly-expenses.component.html',
    styles : [`
        .incurred-class{
            text-decoration: line-through;
            font-weight: 500 !important;
            color: grey; 
        }`]

})



export class MonthlyExpensesComponent {
    monthlyExpenses: MonthlyExpense[];
   @Input()
    month:string;
    @Input()
    year:number;

    @Output() onRemove=new EventEmitter<void>();

    constructor(private service: MonthlyExpensesService) {

    };


    getMonthlyExpenses(month,year): void {
       console.log("**********MonthlyExpensesComponent#getMonthlyExpenses()"+month + " " + year  +"**************");
       this.service
       .getMonthlyExpenses(month,year)
        .then( monthlyExpenses=> this.monthlyExpenses = monthlyExpenses);
    }
    
    removeMonthlyExpense(monthlyExpense:MonthlyExpense):void{
        this.service.removeExpense(monthlyExpense.id).then(response=>this.onRemove.emit());
    }

    incurredPopertyChange(monthlyExpense:MonthlyExpense):void{
        if(monthlyExpense.incurred){
            this.service.setAsIncurred(monthlyExpense.id).then(response=>this.onRemove.emit());
        }else{
             this.service.setAsNotIncurred(monthlyExpense.id).then(response=>this.onRemove.emit()); 
        }
    }

    ngOnInit(): void {
        this.getMonthlyExpenses(this.month,this.year);
    }

}
