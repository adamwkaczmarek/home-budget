export class MonthlyExpense {

    constructor(
    public id: number,
    public desc: string,
    public amount: number,
    public isFixedExpense: boolean,
    public month:string,
    public year:number, 
    public incurred:boolean
    ) {

    }

}
