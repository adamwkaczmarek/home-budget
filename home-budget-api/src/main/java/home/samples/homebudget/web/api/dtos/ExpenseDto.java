package home.samples.homebudget.web.api.dtos;


import home.samples.homebudget.domain.Expense;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by adam on 28.10.16.
 */
public class ExpenseDto {

    private Long id;
    private String desc;
    private Double amount;
    private Boolean isFixedExpense;

    public String getDesc() {
        return desc;
    }

    public Double getAmount() {
        return amount;
    }

    public Long getId() {
        return id;
    }

    public Boolean getIsFixedExpense() {
        return isFixedExpense;
    }

    public ExpenseDto() {

    }

    public ExpenseDto(Long id, String desc, Double amount, Boolean isFixedExpense) {
        this.id = id;
        this.desc = desc;
        this.amount = amount;
        this.isFixedExpense = isFixedExpense;
    }

    public static ExpenseDto toDto(Expense expense){

            return new ExpenseDto(expense.getId(),
                    expense.getDescription(),
                    expense.getAmount(),
                    expense.getFixedExpense());
    }

    public  static List<ExpenseDto> toDtos(List<Expense> expenses){
        return expenses.stream().map(expense->toDto(expense)).collect(Collectors.toList());
    };
}
