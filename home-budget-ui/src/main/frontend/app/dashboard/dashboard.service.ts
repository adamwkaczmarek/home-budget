import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Configuration } from './../app.constants';
import { Balance } from './balance/balance';
import {AuthService} from '../shared/auth/auth.service';
import 'rxjs/add/operator/toPromise';



@Injectable()
export class DashboardService {
    private incomeInMothUrl: string;
    private balanceInMothUrl: string;
    //private headers: Headers;

    constructor(private http: Http, private _configuration: Configuration,private authService: AuthService) {
        this.incomeInMothUrl= '/api/monthly-income/get';
        this.balanceInMothUrl= '/api/monthly-balance/get';
    };

    getMonthlyIncome(month:string,year:number):Promise<Number>{

      return  this.http.get( this.incomeInMothUrl+'/'+month+'/'+year, {headers: this.authService.getAuthorizationHeaders()})
        .toPromise()
        .then(response => Number(response.text()))
        .catch(this.handleError);

    }

     getMonthlyBalance(month:string,year:number):Promise<Balance>{
      return  this.http.get( this.balanceInMothUrl+'/'+month+'/'+year, {headers: this.authService.getAuthorizationHeaders()})
        .toPromise()
        .then(response=>response.json() as Balance)
        .catch(this.handleError);

    }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}