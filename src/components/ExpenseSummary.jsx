import React from 'react'

const ExpenseSummary = ({totalExpenses, budget }) => {
    let remaining_amount = budget - totalExpenses
    return (
        <div className='card my-2 shadow'>
            <div className="card-body my-1">
                <p className='card-text text-danger fw-bold'>
                    <span className='text-secondary fw-bold'>TOTAL EXPENSES:</span>
                    {totalExpenses.toFixed(2)}
                </p>
                <p className='card-text text-success fw-bold'>
                    <span className='text-secondary fw-bold'>REMAINING BUDGET:</span>
                    {remaining_amount.toFixed(2)}
                </p>
            </div>
        </div>
    )
}

export default ExpenseSummary
