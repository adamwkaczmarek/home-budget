package home.samples.homebudget.domain;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;
import java.time.Month;

/**
 * Created by adam on 18.11.16.
 */
@Embeddable
public class MonthlyIncomeId  implements Serializable {

    @Column(name="MONTH",nullable = false)
    private Month month;


    @Column(name="YEAR",nullable = false)
    private Integer year;

    public MonthlyIncomeId(){}

    public MonthlyIncomeId(Month month, Integer year) {
        this.month = month;
        this.year = year;
    }

    public Month getMonth() {
        return month;
    }

    public Integer getYear() {
        return year;
    }
}
