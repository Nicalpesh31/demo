import React from 'react';
import { Component } from 'react';
import "./ItemList.css"

class ExpenseEntryItemList extends Component{
    constructor(props) {
        super(props);
        this.state={
            items:this.props.items
        }
        }
        getTotal(){
            let total =0;
            for(var i=0; i<this.state.items.length;i++){
                total+= this.state.items[i].amount
            }
        }

        render() {
        const lists = this.state.items.map( (item) =>
        <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.amount}</td>
        <td>{new Date(item.spendDate).toDateString()}</td>
        <td>{item.category}</td>
        </tr>
        );
        return (
            <table>
            <thead>
            <tr>
            <th>Item</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Category</th>
            </tr>
            </thead>
            <tbody>
            {lists}
            </tbody>
            </table>
            );
        }
    }
export default ExpenseEntryItemList;
