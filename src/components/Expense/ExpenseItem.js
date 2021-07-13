import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  //it can not work like this----

  // let title = props.title;

  // const clickHandler = () => {
  //     title = 'updated!!!';
  //     console.log('Clicked!!');
  // }

  // using state--

  // const [title, setTitle] = useState(props.title);

  // const clickHandler = () => {
  //     setTitle('Updated!!!');
  // }
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price"> INR {props.amount} </div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
