package home.samples.homebudget.web.api.dtos;

/**
 * Created by adam on 04.11.16.
 */
public class NewExpenseDto {

    private Long id;
    private String desc;
    private Double amount;
    private Boolean isFixedExpense;
    private String month;
    private Integer year;

    public NewExpenseDto(){}

    public NewExpenseDto(Long id, String desc, Double amount, Boolean isFixedExpense, String month, Integer year) {
        this.id = id;
        this.desc = desc;
        this.amount = amount;
        this.isFixedExpense = isFixedExpense;
        this.month = month;
        this.year = year;
    }

    public Long getId() {
        return id;
    }

    public String getDesc() {
        return desc;
    }

    public Double getAmount() {
        return amount;
    }

    public Boolean getIsFixedExpense() {
        return isFixedExpense;
    }

    public String getMonth() {
        return month;
    }

    public Integer getYear() {
        return year;
    }
}
