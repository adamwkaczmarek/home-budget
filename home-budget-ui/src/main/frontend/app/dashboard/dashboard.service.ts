import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Configuration } from './../app.constants';
import { Balance } from './balance/balance';
import 'rxjs/add/operator/toPromise';



@Injectable()
export class DashboardService {
    private incomeInMothUrl: string;
    private balanceInMothUrl: string;
    private headers: Headers;

    constructor(private http: Http, private _configuration: Configuration) {
        this.incomeInMothUrl= _configuration.ServerWithApiUrl + 'home-samples/monthly-income/get/';
        this.balanceInMothUrl= _configuration.ServerWithApiUrl + "home-samples/monthly-balance/get"

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');

    };

    getMonthlyIncome(month:string,year:number):Promise<Number>{

      return  this.http.get( this.incomeInMothUrl+'/'+month+'/'+year)
        .toPromise()
        .then(response => Number(response.text()))
        .catch(this.handleError);

    }

     getMonthlyBalance(month:string,year:number):Promise<Balance>{
      return  this.http.get( this.balanceInMothUrl+'/'+month+'/'+year)
        .toPromise()
        .then(response=>response.json() as Balance)
        .catch(this.handleError);

    }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}