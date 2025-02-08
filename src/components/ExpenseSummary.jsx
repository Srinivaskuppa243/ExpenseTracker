import React from 'react'

const ExpenseSummary = ({ totalExpenses, budget }) => {
    let remaining_amount = budget - totalExpenses
    return (
        <div className='card my-2 p-3 shadow'>
            <div className='d-flex justify-content-around gap-3'>
                <div className='card p-3 shadow'>
                    <p className='card-text text-center text-danger fw-bold'>
                        <h3 className='text-secondary fw-bold'>TOTAL EXPENSES:</h3>
                        <h4>₹{totalExpenses.toFixed(2)}</h4>
                    </p>
                </div>
                <div className='card p-3 shadow'>
                    <p className='card-text text-center text-success fw-bold'>
                        <h3 className='text-secondary fw-bold'>REMAINING BUDGET:</h3>
                        <h4>₹{remaining_amount.toFixed(2)}</h4>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ExpenseSummary
