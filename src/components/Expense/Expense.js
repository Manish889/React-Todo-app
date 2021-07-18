import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "../NewExpense/ExpenseFilter";
import ExpenseChart from "./ExpenseChart";
import ExpenseList from "./ExpenseList";
import "./Expense.css";

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const enteredYear = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filteredYear}
          onSelectingYear={enteredYear}
        />
        <ExpenseChart expenses={filteredExpenses}/>
        < ExpenseList items={filteredExpenses} />
        {/* {filteredExpenses.length === 0 && <p>Oops! no expenses found.</p>}

        {filteredExpenses.length > 0 &&  filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}
        {/* {filteredExpenses.length === 0 ? (
          <p>Oops! no expenses found.</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )} */}
        {/* <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        /> */}
      </Card>
    </div>
  );
};

export default Expense;
