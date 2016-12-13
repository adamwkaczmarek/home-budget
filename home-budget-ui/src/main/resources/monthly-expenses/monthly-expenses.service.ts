import { Injectable } from '@angular/core';
import { MonthlyExpense } from './monthly-expense';
import { NewMonthlyExpense } from './new-monthly-expense';
import { Headers, Http } from '@angular/http';
import { Configuration } from './../app.constants';
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

    constructor(private http: Http, private _configuration: Configuration) {
        this.findUrl = _configuration.ServerWithApiUrl + 'home-samples/monthly-expense/in-month/';
        this.addActionUrl = _configuration.ServerWithApiUrl + 'home-samples/monthly-expense/add/';
        this.sumInMonthUrl = _configuration.ServerWithApiUrl + 'home-samples/monthly-expense/in-month';
        this.removeActionUrl = _configuration.ServerWithApiUrl + "home-samples/monthly-expense/remove/";
        this.setAsIncurredUrl = _configuration.ServerWithApiUrl + "home-samples/monthly-expense/set-as-incurred/";
        this.setAsNotIncurredUrl = _configuration.ServerWithApiUrl + "home-samples/monthly-expense/set-as-not-incurred";

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');

    };

    setAsIncurred(id: number): Promise<any> {
        return this.http.put(this.setAsIncurredUrl + "/" + id, {
            headers: this.headers
        }).toPromise()
            .catch(this.handleError)
    }


    setAsNotIncurred(id: number): Promise<any> {
        return this.http.put(this.setAsNotIncurredUrl + "/" + id, {
            headers: this.headers
        }).toPromise()
            .catch(this.handleError)
    }


    getMonthlyExpenses(month: string, year: number): Promise<MonthlyExpense[]> {
        return this.http.get(this.findUrl + '/' + month + '/' + year)
            .toPromise()
            .then(response => response.json() as MonthlyExpense[])
            .catch(this.handleError)
    }

    getMonthlyExpensesSum(month: string, year: number): Promise<Number> {

        return this.http.get(this.sumInMonthUrl + '/' + month + '/' + year + '/sum')
            .toPromise()
            .then(response => Number(response.text()))
            .catch(this.handleError);

    }
    getMonthlyFixedExpensesSum(month: string, year: number): Promise<Number> {

        return this.http.get(this.sumInMonthUrl + '/' + month + '/' + year + '/sum-fixed')
            .toPromise()
            .then(response => Number(response.text()))
            .catch(this.handleError);

    }
    getMonthlySingleExpensesSum(month: string, year: number): Promise<Number> {

        return this.http.get(this.sumInMonthUrl + '/' + month + '/' + year + '/sum-single')
            .toPromise()
            .then(response => Number(response.text()))
            .catch(this.handleError);

    }


    addExpenses(newMonthlyExpesnse: NewMonthlyExpense): Promise<MonthlyExpense> {
        console.log(newMonthlyExpesnse);
        return this.http.post(this.addActionUrl, newMonthlyExpesnse, {
            headers: this.headers
        }).toPromise()
            .then(response => response.json() as MonthlyExpense)
            .catch(this.handleError)
    }

    removeExpense(id: number): Promise<any> {
        return this.http.delete(this.removeActionUrl + "/" + id, {
            headers: this.headers
        }).toPromise()
            .catch(this.handleError)
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
