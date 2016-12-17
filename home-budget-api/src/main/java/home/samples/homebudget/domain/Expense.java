package home.samples.homebudget.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * Created by Adam on 2016-10-26.
 */
@Entity(name="EXPENSE")
public class Expense {

    @Id
    @GeneratedValue
    @Column(name="ID")
    private Long id;

    @Column(name = "DESCRIPTION",nullable = false)
    private String description;

    @Column(name = "AMOUNT",nullable = false)
    private Double amount;

    @Column(name="IS_FIXED")
    private Boolean isFixedExpense=false;

    public Expense(){}

    public Expense(String description, Double amount,Boolean isFixedExpense) {
        this.description = description;
        this.amount = amount;
        this.isFixedExpense=isFixedExpense;
    }

    public Long getId() {
        return id;
    }

    public String getDescription() {
        return description;
    }

    public Double getAmount() {
        return amount;
    }

    public Boolean getFixedExpense() {
        return isFixedExpense;
    }
}
