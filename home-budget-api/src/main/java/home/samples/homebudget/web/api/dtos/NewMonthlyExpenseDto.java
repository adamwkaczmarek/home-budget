package home.samples.homebudget.web.api.dtos;

/**
 * Created by adam on 07.11.16.
 */
public class NewMonthlyExpenseDto {

    private Long expenseId;
    private Double amount;
    private String month;
    private Integer year;

    public NewMonthlyExpenseDto(){}

    public NewMonthlyExpenseDto(Long expenseId, Double amount, String month, Integer year) {
        this.expenseId = expenseId;
        this.amount = amount;
        this.month = month;
        this.year = year;
    }

    public Long getExpenseId() {
        return expenseId;
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

}
