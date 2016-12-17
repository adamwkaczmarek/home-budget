package home.samples.homebudget.service;


import home.samples.homebudget.domain.MonthlyIncome;
import home.samples.homebudget.domain.MonthlyIncomeId;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by adam on 18.11.16.
 */
public interface MonthlyIncomeRepository extends JpaRepository<MonthlyIncome,MonthlyIncomeId> {

}

