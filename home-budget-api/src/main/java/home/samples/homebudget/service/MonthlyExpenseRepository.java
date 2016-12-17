package home.samples.homebudget.service;


import home.samples.homebudget.domain.MonthlyExpense;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.Month;
import java.util.List;

/**
 * Created by adam on 02.11.16.
 */
public interface MonthlyExpenseRepository  extends JpaRepository<MonthlyExpense,Long> {

    public List<MonthlyExpense> findByMonthAndYear(Month month, Integer year);

    public Double sumInMonth(Month month, Integer year, Boolean isIncurred);

    public Double sumInMonthIsFixed(Month month, Integer year, Boolean isFixed, Boolean isIncurred);

    @Query("select sum(me.amount) from MonthlyExpense me join me.expense ex where me.month=?1 and me.year=?2 and ex.isFixedExpense=?3")
    public Double sumInMonthIsFixed(Month month, Integer year, Boolean isFixed);

    @Query("select ex.id from MonthlyExpense me join me.expense ex where  ex.isFixedExpense=?1")
    public List<Long> findIdsByIsFixed(Boolean isFixed);

    @Query("select ex.id from MonthlyExpense me join me.expense ex where me.month=?1 and me.year=?2 and ex.isFixedExpense=?3")
    public List<Long> findIdsByIsFixedMonthAndYear(Month month, Integer year, Boolean isFixed);
}
