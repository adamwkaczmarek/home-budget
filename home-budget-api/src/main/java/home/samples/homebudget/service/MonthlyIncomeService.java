package home.samples.homebudget.service;


import home.samples.homebudget.domain.MonthlyIncome;
import home.samples.homebudget.domain.MonthlyIncomeId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by adam on 18.11.16.
 */
@Service
public class MonthlyIncomeService {

    @Autowired
    MonthlyIncomeRepository monthlyIncomeRepository;

    public MonthlyIncome add(MonthlyIncome monthlyIncome) {
        return monthlyIncomeRepository.save(monthlyIncome);
    }

    public void remove(MonthlyIncomeId id) {
        monthlyIncomeRepository.delete(id);
    }

    public MonthlyIncome findById(MonthlyIncomeId id) {
        return  monthlyIncomeRepository.findOne(id);
    }


}
