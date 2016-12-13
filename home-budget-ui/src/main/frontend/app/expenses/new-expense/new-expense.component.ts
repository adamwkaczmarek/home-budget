import { Component,Output,EventEmitter } from '@angular/core';
import { Expense } from '../expense';
import { ExpenseService } from '../expense.service';
import { Configuration } from './../../app.constants';
import { MONTHS_DICT } from './../../app.constants';
import { YEAR_DICT } from './../../app.constants';


@Component({
    selector: 'new-expense',
    templateUrl: 'new-expense.component.html'
})

export class NewExpenseComponent {
    title = 'Nowy wydatek';
    model= new Expense(0,'',0,false,'',2016);
    monthDict=MONTHS_DICT;
    yearDict=YEAR_DICT;
    @Output() onAdd= new EventEmitter<void>();

    constructor(private expenseService:ExpenseService,private configuration: Configuration){
       
    };

    onSubmit(){
        this.expenseService.addExpenses(this.model).then(expense => this.onAdd.emit());
        this.model=new Expense(0,'',0,false,'',2016);
    }
   
}
