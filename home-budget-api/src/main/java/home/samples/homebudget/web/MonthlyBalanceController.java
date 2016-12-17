package home.samples.homebudget.web;


import home.samples.homebudget.domain.MonthlyIncomeId;
import home.samples.homebudget.service.MonthlyExpenseService;
import home.samples.homebudget.service.MonthlyIncomeService;
import home.samples.homebudget.web.api.dtos.BalanceDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.time.Month;

/**
 * Created by Adam on 2016-11-18.
 */
@Controller
@RequestMapping("monthly-balance")
@CrossOrigin
public class MonthlyBalanceController {

    @Autowired
    MonthlyIncomeService monthlyIncomeService;
    @Autowired
    MonthlyExpenseService monthlyExpenseService;

    @ResponseBody
    @RequestMapping(value="/get/{month}/{year}", method = RequestMethod.GET)
    public BalanceDto get(@PathVariable String month, @PathVariable Integer year){
        Double singleExpenseIncurred= monthlyExpenseService.getSumInMonthIncurred(Month.valueOf(month), year,false);
        Double fixedExpense = monthlyExpenseService.getSumInMonth(Month.valueOf(month), year, true);
        Double expensePlanned=monthlyExpenseService.getSumInMonthNotIncurred(Month.valueOf(month), year,false);
        Double income = monthlyIncomeService.findById(new MonthlyIncomeId(Month.valueOf(month), year)).getAmount();;
        Double balance = income-(singleExpenseIncurred+fixedExpense);

        return new BalanceDto(balance,
                            (balance <=0 ? 100.0  : ((singleExpenseIncurred+fixedExpense)/income)*100),
                            (expensePlanned/income)*100);
    }

}
