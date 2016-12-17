package home.samples.homebudget.service;


import home.samples.homebudget.domain.Expense;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * Created by Adam on 2016-10-26.
 */
public interface ExpenseRepository extends JpaRepository<Expense,Long> {

    public List<Expense> findByIdNotIn(List<Long> excludedIds);
}
