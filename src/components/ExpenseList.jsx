import React from 'react'

const ExpenseList = ({ expenses }) => {
  return (
    <div className="card p-3 shadow ">
      <table className='table table-bordered table-hover mt-2'>
        <thead>
       <tr className='table-dark'>
        <th scope='col'>Expense name</th>
        <th scope='col'>Expense type</th>
        <th scope='col'>Cost</th>
       </tr>
       </thead>
       <tbody>
        {expenses.map((expense) => (
            <tr>
              <td>{expense.name}</td>
              <td>{expense.category}</td>
              <td>{expense.amount.toFixed(2)}</td>
            </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default ExpenseList
