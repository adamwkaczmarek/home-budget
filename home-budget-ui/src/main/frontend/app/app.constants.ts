import { Injectable } from '@angular/core';
import { Dict } from './app.dict';
 
export const MONTHS_DICT : Dict[]=[
    {value:'JANUARY',display:'Styczneń'},
    {value:'FEBRUARY',display:'Luty'},
    {value:'MARCH',display:'Marzec'},
    {value:'APRIL',display:'Kwiecień'},
    {value:'MAY',display:'Maj'},
    {value:'JUNE',display:'Czerwiec'},
    {value:'JULY',display:'Lipiec'},
    {value:'AUGUST',display:'Sierpień'},
    {value:'SPTEMBER',display:'Wrzesień'},
    {value:'OCTOBER',display:'Paździenik'},
    {value:'NOVEMBER',display:'Listopad'},
    {value:'DECEMBER',display:'Grudzień'}
]

export const YEAR_DICT : Object[]=[
    {value:2016,display:'2016'},
    {value:2017,display:'2017'}
]




@Injectable()
export class Configuration {
    public Server: string = "http://localhost:8080/";
    public ApiUrl: string = "";
    public ServerWithApiUrl = this.Server + this.ApiUrl;
}