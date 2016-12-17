package home.samples.homebudget.web;


import home.samples.homebudget.domain.Expense;
import home.samples.homebudget.domain.MonthlyExpense;
import home.samples.homebudget.service.ExpenseService;
import home.samples.homebudget.service.MonthlyExpenseService;
import home.samples.homebudget.web.api.dtos.MonthlyExpenseDto;
import home.samples.homebudget.web.api.dtos.NewMonthlyExpenseDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.time.Month;
import java.util.List;

/**
 * Created by Adam on 2016-11-06.
 */
@Controller
@CrossOrigin
@RequestMapping("/monthly-expense")
public class MonthlyExpenseController {

    @Autowired
    MonthlyExpenseService monthlyExpenseService;
    @Autowired
    ExpenseService expenseService;

    @ResponseBody
    @RequestMapping(value="/add", method = RequestMethod.POST)
    public MonthlyExpenseDto add(@RequestBody NewMonthlyExpenseDto monthlyExpenseDto){
        Expense expense = expenseService.findById(monthlyExpenseDto.getExpenseId());
        MonthlyExpense monthlyExpense = monthlyExpenseService.add(new MonthlyExpense(expense, monthlyExpenseDto.getAmount(), Month.valueOf(monthlyExpenseDto.getMonth()), monthlyExpenseDto.getYear()));
        return MonthlyExpenseDto.toDto(monthlyExpense);
    }

    @ResponseBody
    @RequestMapping(value="/remove/{id}", method = RequestMethod.DELETE)
    public void remove(@PathVariable Long id){
        monthlyExpenseService.remove(id);
    }

    @ResponseBody
    @RequestMapping(value="/in-month/{month}/{year}", method = RequestMethod.GET)
    public List<MonthlyExpenseDto> findByMonthAndYear(@PathVariable String month, @PathVariable Integer year){
      return MonthlyExpenseDto.toDtos(monthlyExpenseService.findByMonthAndYear(Month.valueOf(month), year));
    }

    @ResponseBody
     @RequestMapping(value="/in-month/{month}/{year}/sum", method = RequestMethod.GET)
     public Double getSumInMonth(@PathVariable String month, @PathVariable Integer year){
        return monthlyExpenseService.getSumInMonthIncurred(Month.valueOf(month), year);
    }

    @ResponseBody
    @RequestMapping(value="/in-month/{month}/{year}/sum-fixed", method = RequestMethod.GET)
    public Double getSumInMonthFixed(@PathVariable String month, @PathVariable Integer year){
        return monthlyExpenseService.getSumInMonthIncurred(Month.valueOf(month), year,true);
    }

    @ResponseBody
    @RequestMapping(value="/in-month/{month}/{year}/sum-single", method = RequestMethod.GET)
    public Double getSumInMonthSingle(@PathVariable String month, @PathVariable Integer year){
        return monthlyExpenseService.getSumInMonthIncurred(Month.valueOf(month), year, false);
    }

    @ResponseBody
    @RequestMapping(value="/set-as-incurred/{id}", method = RequestMethod.PUT)
    public void setAsIncurred(@PathVariable Long id){

        monthlyExpenseService.setAsIncurred(id);
    }

    @ResponseBody
    @RequestMapping(value="/set-as-not-incurred/{id}", method = RequestMethod.PUT)
    public void setAsNotIncurred(@PathVariable Long id){

        monthlyExpenseService.setAsNotIncurred(id);
    }


}
