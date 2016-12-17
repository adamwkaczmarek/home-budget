package home.samples.homebudget.domain;

import javax.persistence.*;
import java.time.Month;

/**
 * Created by Adam on 2016-10-30.
 */
@Entity
@NamedQueries({
        @NamedQuery(
                name = MonthlyExpense.FIND_BY_MONTH_ADN_YEAR ,
                query = "select me from MonthlyExpense me where month=?1 and year=?2"
        ),
        @NamedQuery(
                name = MonthlyExpense.SUM_IN_MONTH ,
                query = "select sum(me.amount) from MonthlyExpense me where month=?1 and year=?2 and isIncurred=?3"),
        @NamedQuery(name = MonthlyExpense.SUM_IN_MONTH_IS_FIXED ,
                    query = "select sum(me.amount) from MonthlyExpense me join me.expense ex where me.month=?1 and me.year=?2 and ex.isFixedExpense=?3 and me.isIncurred=?4")


})
public class MonthlyExpense {

    public static final String FIND_BY_MONTH_ADN_YEAR = "MonthlyExpense.findByMonthAndYear";
    public static final String SUM_IN_MONTH="MonthlyExpense.sumInMonth";
    public static final String SUM_IN_MONTH_IS_FIXED="MonthlyExpense.sumInMonthIsFixed";

    @Id
    @GeneratedValue
    @Column(name="ID")
    private Long id;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="EXPENSE_ID")
    private Expense expense;

    @Column(name="AMOUNT")
    private Double amount;

    @Column(name="MONTH",nullable = false)
    private Month month;

    @Column(name="YEAR",nullable = false)
    private Integer year;

    @Column(name="IS_INCURRED")
    private Boolean isIncurred=false;

    public MonthlyExpense(){}



    public MonthlyExpense(Expense expense, Double amount, Month month, Integer year) {
        this.expense = expense;
        this.amount = amount;
        this.month = month;
        this.year = year;
    }



    public Long getId() {
        return id;
    }

    public Expense getExpense() {
        return expense;
    }

    public Month getMonth() {
        return month;
    }

    public Integer getYear() {
        return year;
    }

    public Double getAmount() {
        return amount;
    }

    public Boolean getIncurred() {return isIncurred;}

    public void setIncurred(Boolean incurred) {isIncurred = incurred;}
}
