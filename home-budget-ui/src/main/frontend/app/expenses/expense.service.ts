import { Injectable } from '@angular/core';
import { Expense } from './expense';
import { Headers, Http } from '@angular/http';
import { Configuration } from './../app.constants';
import {AuthService} from '../shared/auth/auth.service';
import 'rxjs/add/operator/toPromise';



@Injectable()
export class ExpenseService {
    private findNotAssignedUrl: string;
    private addActionUrl: string;
    private removeActionUrl:string;
    private headers: Headers;

    constructor(private http: Http, private _configuration: Configuration,private authService: AuthService) {
        this.findNotAssignedUrl = '/api/expense/all-not-assigned/';
        this.addActionUrl ='/api/expense/add/';
        this.removeActionUrl="/api/expense/remove/"

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');

    };


    getExpenses(month,year): Promise<Expense[]> {
        return this.http.get(this.findNotAssignedUrl+'/'+month+'/'+year,{headers: this.authService.getAuthorizationHeaders()})
            .toPromise()
            .then(response => response.json() as Expense[])
            .catch(this.handleError)
    }

    addExpenses(newFixedExpesnse: Expense): Promise<Expense> {
        console.log(newFixedExpesnse);
       return this.http.post(this.addActionUrl, newFixedExpesnse, {headers: this.authService.getAuthorizationHeaders()}).toPromise()
            .then(response => response.json() as Expense)
            .catch(this.handleError)
    }

     removeExpenses(id: number): Promise<any> {
        return this.http.delete(this.removeActionUrl+ "/"+id, {headers: this.authService.getAuthorizationHeaders()}).toPromise().catch(this.handleError);
    }
    
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
