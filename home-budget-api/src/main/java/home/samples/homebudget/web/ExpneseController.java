package home.samples.homebudget.web;


import home.samples.homebudget.domain.Expense;
import home.samples.homebudget.service.ExpenseService;
import home.samples.homebudget.service.MonthlyExpenseService;
import home.samples.homebudget.web.api.dtos.ExpenseDto;
import home.samples.homebudget.web.api.dtos.NewExpenseDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.time.Month;
import java.util.List;

/**
 * Created by Adam on 2016-10-26.
 */
@Controller
@CrossOrigin
@RequestMapping("/expense")
public class ExpneseController {
    @Autowired
    ExpenseService expenseService;
    @Autowired
    MonthlyExpenseService monthlyExpenseService;

    @ResponseBody
    @RequestMapping(value="/all", method = RequestMethod.GET)
    public List<ExpenseDto> getAll(){

       return ExpenseDto.toDtos(expenseService.getAll());
    }


    @ResponseBody
    @RequestMapping(value="/all-not-assigned/{month}/{year}", method = RequestMethod.GET)
    public List<ExpenseDto> getAllNotAssigned(@PathVariable String month, @PathVariable Integer year){

        return ExpenseDto.toDtos(expenseService.findNotAssigned(Month.valueOf(month),year));
    }

    @ResponseBody
    @RequestMapping(value="/find/{id}", method = RequestMethod.GET)
    public ExpenseDto findById(@PathVariable Long id){

        return ExpenseDto.toDto(expenseService.findById(id));
    }
    @ResponseBody
    @RequestMapping(value="/add", method = RequestMethod.POST)
    public ExpenseDto add(@RequestBody NewExpenseDto expenseDto){

        Expense expense = expenseService.add(new Expense(expenseDto.getDesc(), expenseDto.getAmount(), expenseDto.getIsFixedExpense()));
        return ExpenseDto.toDto(expense);
    }

    @ResponseBody
    @RequestMapping(value="/remove/{id}", method = RequestMethod.DELETE)
    public void remove( @PathVariable("id") Long id){

        expenseService.remove(id);
    }

}
