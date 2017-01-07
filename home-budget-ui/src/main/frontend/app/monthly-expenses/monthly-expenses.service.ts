import { Injectable } from '@angular/core';
import { MonthlyExpense } from './monthly-expense';
import { NewMonthlyExpense } from './new-monthly-expense';
import { Headers, Http } from '@angular/http';
import { Configuration } from './../app.constants';
import {AuthService} from '../shared/auth/auth.service';

import 'rxjs/add/operator/toPromise';



@Injectable()
export class MonthlyExpensesService {
    private findUrl: string;
    private addActionUrl: string;
    private sumInMonthUrl: string;
    private removeActionUrl: string;
    private setAsIncurredUrl: string;
    private setAsNotIncurredUrl: string;

    private headers: Headers;

    constructor(private http: Http, private _configuration: Configuration,private authService: AuthService) {
        this.findUrl = '/api/monthly-expense/in-month/';
        this.addActionUrl = '/api/monthly-expense/add/';
        this.sumInMonthUrl ='/api/monthly-expense/in-month';
        this.removeActionUrl = "/api/monthly-expense/remove/";
        this.setAsIncurredUrl = "/api/monthly-expense/set-as-incurred/";
        this.setAsNotIncurredUrl = "/api/monthly-expense/set-as-not-incurred";

    };

    setAsIncurred(id: number): Promise<any> {
        return this.http.put(this.setAsIncurredUrl + "/" + id, {headers: this.authService.getAuthorizationHeaders()}).toPromise()
            .catch(this.handleError)
    }


    setAsNotIncurred(id: number): Promise<any> {
        return this.http.put(this.setAsNotIncurredUrl + "/" + id, {headers: this.authService.getAuthorizationHeaders()}).toPromise()
            .catch(this.handleError)
    }


    getMonthlyExpenses(month: string, year: number): Promise<MonthlyExpense[]> {
        return this.http.get(this.findUrl + '/' + month + '/' + year,{headers: this.authService.getAuthorizationHeaders()})
            .toPromise()
            .then(response => response.json() as MonthlyExpense[])
            .catch(this.handleError)
    }

    getMonthlyExpensesSum(month: string, year: number): Promise<Number> {

        return this.http.get(this.sumInMonthUrl + '/' + month + '/' + year + '/sum',{headers: this.authService.getAuthorizationHeaders()})
            .toPromise()
            .then(response => Number(response.text()))
            .catch(this.handleError);

    }
    getMonthlyFixedExpensesSum(month: string, year: number): Promise<Number> {

        return this.http.get(this.sumInMonthUrl + '/' + month + '/' + year + '/sum-fixed',{headers: this.authService.getAuthorizationHeaders()})
            .toPromise()
            .then(response => Number(response.text()))
            .catch(this.handleError);

    }
    getMonthlySingleExpensesSum(month: string, year: number): Promise<Number> {

        return this.http.get(this.sumInMonthUrl + '/' + month + '/' + year + '/sum-single',{headers: this.authService.getAuthorizationHeaders()})
            .toPromise()
            .then(response => Number(response.text()))
            .catch(this.handleError);

    }


    addExpenses(newMonthlyExpesnse: NewMonthlyExpense): Promise<MonthlyExpense> {
        console.log(newMonthlyExpesnse);
        return this.http.post(this.addActionUrl, newMonthlyExpesnse, {headers: this.authService.getAuthorizationHeaders()}).toPromise()
            .then(response => response.json() as MonthlyExpense)
            .catch(this.handleError)
    }

    removeExpense(id: number): Promise<any> {
        return this.http.delete(this.removeActionUrl + "/" + id, {headers: this.authService.getAuthorizationHeaders()}).toPromise()
            .catch(this.handleError)
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
