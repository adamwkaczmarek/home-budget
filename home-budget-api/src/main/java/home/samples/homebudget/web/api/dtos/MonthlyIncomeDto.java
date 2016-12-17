package home.samples.homebudget.web.api.dtos;


import home.samples.homebudget.domain.MonthlyIncome;

/**
 * Created by adam on 18.11.16.
 */
public class MonthlyIncomeDto {

    private Double amount;
    private String month;
    private Integer year;

    public MonthlyIncomeDto(){}

    public MonthlyIncomeDto(Double amount, String month, Integer year) {
        this.amount = amount;
        this.month = month;
        this.year = year;
    }

    public Double getAmount() {
        return amount;
    }

    public String getMonth() {
        return month;
    }

    public Integer getYear() {
        return year;
    }

    public static MonthlyIncomeDto toDto(MonthlyIncome monthlyIncome){

        return new MonthlyIncomeDto(monthlyIncome.getAmount(),monthlyIncome.getId().getMonth().toString(),monthlyIncome.getId().getYear());
    }

}
