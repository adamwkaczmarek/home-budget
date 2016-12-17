package home.samples.homebudget.domain;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;

/**
 * Created by adam on 18.11.16.
 */
@Entity(name="MONTHLY_INCOME")
public class MonthlyIncome{

    @EmbeddedId
    MonthlyIncomeId id;

    @Column(name = "AMOUNT",nullable = false)
    private Double amount;


    public MonthlyIncome() {}

    public MonthlyIncome(MonthlyIncomeId id, Double amount) {
        this.id = id;
        this.amount = amount;
    }

    public MonthlyIncomeId getId() {
        return id;
    }

    public Double getAmount() {
        return amount;
    }
}
