package home.samples.homebudget.web;


import home.samples.homebudget.domain.MonthlyIncome;
import home.samples.homebudget.domain.MonthlyIncomeId;
import home.samples.homebudget.service.MonthlyIncomeService;
import home.samples.homebudget.web.api.dtos.MonthlyIncomeDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.time.Month;

/**
 * Created by adam on 18.11.16.
 */
@Controller
@CrossOrigin
@RequestMapping("monthly-income")
public class MonthlyIncomeController {

    @Autowired
    MonthlyIncomeService monthlyIncomeService;

    @ResponseBody
    @RequestMapping(value="/get/{month}/{year}", method = RequestMethod.GET)
    public Double get(@PathVariable String month, @PathVariable Integer year){
        return monthlyIncomeService.findById(new MonthlyIncomeId(Month.valueOf(month), year)).getAmount();

    }
    @ResponseBody
    @RequestMapping(value="/add", method = RequestMethod.POST)
    public MonthlyIncomeDto add(@RequestBody MonthlyIncomeDto monthlyIncomeDto){
        return MonthlyIncomeDto.toDto( monthlyIncomeService.add(
                                    new MonthlyIncome(
                                            new MonthlyIncomeId(Month.valueOf(monthlyIncomeDto.getMonth()),monthlyIncomeDto.getYear()),
                                            monthlyIncomeDto.getAmount()
                                    )
        ));

    }


}
