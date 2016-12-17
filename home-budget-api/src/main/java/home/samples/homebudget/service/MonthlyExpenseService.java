package home.samples.homebudget.service;

import home.samples.homebudget.domain.MonthlyExpense;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Month;
import java.util.List;

/**
 * Created by adam on 02.11.16.
 */
@Service
public class MonthlyExpenseService {

    @Autowired
    MonthlyExpenseRepository repository;

    public List<MonthlyExpense> getAll() {
        return repository.findAll();
    }

    public MonthlyExpense add(MonthlyExpense monthlyExpense) {
        return repository.save(monthlyExpense);
    }

    public void remove(Long id) {
        repository.delete(id);
    }

    public MonthlyExpense findById(Long id) {
        return  repository.findOne(id);
    }

    public List<MonthlyExpense> findByMonthAndYear(Month month,Integer year){
        return repository.findByMonthAndYear(month,year);
    }

    public Double getSumInMonthIncurred(Month month,Integer year){
        Double sum =repository.sumInMonth(month, year,true);
        return sum==null ? 0 : sum;
    }

    public Double getSumInMonthNotIncurred(Month month,Integer year){
        Double sum =repository.sumInMonth(month, year,false);
        return sum==null ? 0 : sum;
    }

    public Double getSumInMonthIncurred(Month month,Integer year,Boolean isFixed){
        Double sum = repository.sumInMonthIsFixed(month, year, isFixed,true);
        return sum==null?  0 :sum;
    }

    public Double getSumInMonthNotIncurred(Month month,Integer year,Boolean isFixed){
        Double sum = repository.sumInMonthIsFixed(month, year, isFixed,false);
        return sum==null?  0 :sum;
    }


    public Double getSumInMonth(Month month,Integer year,Boolean isFixed){
        Double sum = repository.sumInMonthIsFixed(month, year, isFixed);
        return sum==null?  0 :sum;
    }


    public void setAsIncurred(Long id){
        MonthlyExpense monthlyExpense = repository.findOne(id);
        monthlyExpense.setIncurred(true);
        repository.save(monthlyExpense);
    }

    public void setAsNotIncurred(Long id){
        MonthlyExpense monthlyExpense = repository.findOne(id);
        monthlyExpense.setIncurred(false);
        repository.save(monthlyExpense);
    }

}
