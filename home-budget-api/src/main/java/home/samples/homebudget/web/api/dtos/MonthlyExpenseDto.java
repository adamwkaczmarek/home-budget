package home.samples.homebudget.web.api.dtos;

import home.samples.homebudget.domain.MonthlyExpense;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by adam on 02.11.16.
 */
public class MonthlyExpenseDto {

    private Long id;
    private ExpenseDto expense;
    private Double amount;
    private String month;
    private Integer year;
    private Boolean isIncurred;

    public MonthlyExpenseDto(Long id, ExpenseDto expense, Double amount, String month, Integer year,Boolean isIncurred) {
        this.id = id;
        this.expense = expense;
        this.amount = amount;
        this.month = month;
        this.year = year;
        this.isIncurred=isIncurred;
    }

    public Long getId() {
        return id;
    }

    public ExpenseDto getExpense() {
        return expense;
    }

    public String getMonth() {
        return month;
    }

    public Integer getYear() {
        return year;
    }

    public Double getAmount() {
        return amount;
    }

    public Boolean getIncurred() {return isIncurred;}

    public static MonthlyExpenseDto toDto(MonthlyExpense monthlyExpense){

        return new MonthlyExpenseDto(
                monthlyExpense.getId(),
                ExpenseDto.toDto(monthlyExpense.getExpense()),
                monthlyExpense.getAmount(),
                monthlyExpense.getMonth().toString(),
                monthlyExpense.getYear(),
                monthlyExpense.getIncurred()
                );
    }

    public  static List<MonthlyExpenseDto> toDtos(List<MonthlyExpense> monthlyExpenses){
        return monthlyExpenses.stream().map(monthlyExpense->toDto(monthlyExpense)).collect(Collectors.toList());
    };
}
