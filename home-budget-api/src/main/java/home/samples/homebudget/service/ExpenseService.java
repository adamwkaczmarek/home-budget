package home.samples.homebudget.service;


import home.samples.homebudget.domain.Expense;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Month;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Adam on 2016-10-26.
 */
@Service
public class ExpenseService {

    @Autowired
    ExpenseRepository repository;
    @Autowired
    MonthlyExpenseRepository monthlyExpenseRepository;

    public List<Expense> getAll() {
        return repository.findAll();
    }

    public List <Expense> findNotAssigned(Month month,Integer year){
        List<Long> exludedExpensesIds=new ArrayList<>();
        exludedExpensesIds.addAll(monthlyExpenseRepository.findIdsByIsFixed(false));
        exludedExpensesIds.addAll(monthlyExpenseRepository.findIdsByIsFixedMonthAndYear(month, year, true));

        if(exludedExpensesIds.isEmpty())
            return  repository.findAll();

        return  repository.findByIdNotIn(exludedExpensesIds);
    }

    public Expense add(Expense expense) {
        return repository.save(expense);
    }

    public void remove(Long id) {
        repository.delete(id);
    }

    public Expense findById(Long id) {
        return  repository.findOne(id);
    }

}
