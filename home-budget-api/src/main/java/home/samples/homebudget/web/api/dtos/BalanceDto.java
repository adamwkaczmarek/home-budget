package home.samples.homebudget.web.api.dtos;

/**
 * Created by Adam on 2016-11-18.
 */
public class BalanceDto {
    Double balance;
    Double budgetUsagePercent;
    Double plannedBudgetUsegePercent;


    public BalanceDto(){}

    public BalanceDto(Double balance, Double budgetUsagePercent) {
        this.balance = balance;
        this.budgetUsagePercent = budgetUsagePercent;
    }

    public BalanceDto(Double balance, Double budgetUsagePercent, Double plannedBudgetUsegePercent) {
        this.balance = balance;
        this.budgetUsagePercent = budgetUsagePercent;
        this.plannedBudgetUsegePercent = plannedBudgetUsegePercent;
    }

    public Double getBalance() {
        return balance;
    }

    public Double getBudgetUsagePercent() {
        return budgetUsagePercent;
    }

    public Double getPlannedBudgetUsegePercent() {return plannedBudgetUsegePercent;}
}
