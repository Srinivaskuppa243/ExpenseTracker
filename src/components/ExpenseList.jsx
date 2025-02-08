import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const ExpenseList = ({ expenses, setExpenses }) => {
  console.log("expenses: ",expenses)
  const [show, setShow] = useState(false);
  const [selectedExpense, setSelectedExpense] = useState(null);

  const handleEdit = (expense) => {
    console.log("Editing Expense: ",expense)
    setSelectedExpense({ ...expense }); // Copy expense object to avoid direct state mutation
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setSelectedExpense(null); // Reset selectedExpense on modal close
  };

  const handleSave = () => {
    if (!selectedExpense) return;

    setExpenses((prev) =>
      prev.map((exp) =>
        exp.id === selectedExpense.id ? selectedExpense : exp
      )
    );

    setShow(false);
  };

  const handleDelete = (id) => {
    setExpenses((prev) => prev.filter((expense) => expense.id !== id));
  };

  return (
    <div className="card p-3 shadow">
      <h3 className="card-title mx-auto fw-bold">Summary</h3>
      <table className="table table-bordered table-hover mt-2">
        <thead>
          <tr className="table-dark">
            <th scope="col">Expense name</th>
            <th scope="col">Expense type</th>
            <th scope="col">Cost</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.name}</td>
              <td>{expense.category}</td>
              <td>₹{expense.amount.toFixed(2)}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => handleEdit(expense)}
                >
                 <i class="bi bi-pencil-square"></i>
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(expense.id)}
                >
                  <i class="bi bi-trash3-fill"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Expense</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedExpense && (
            <Form>
              <Form.Group>
                <Form.Label>Expense Name</Form.Label>
                <Form.Control
                  type="text"
                  value={selectedExpense.name || ""}
                  onChange={(e) =>{
                    console.log("Updated name: ",e.target.value)
                    setSelectedExpense((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Category</Form.Label>
                <Form.Select
                  value={selectedExpense.category || ""}
                  onChange={(e) =>
                    setSelectedExpense((prev) => ({
                      ...prev,
                      category: e.target.value,
                    }))
                  }
                >
                  <option value="Food">Food</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Travel">Travel</option>
                  <option value="Hospital">Hospital</option>
                  <option value="Other">Other</option>
                </Form.Select>
              </Form.Group>
              <Form.Group>
                <Form.Label>Amount</Form.Label>
                <Form.Control
                  type="number"
                  value={selectedExpense.amount || ""}
                  onChange={(e) =>
                    setSelectedExpense((prev) => ({
                      ...prev,
                      amount: parseFloat(e.target.value) || 0,
                    }))
                  }
                />
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ExpenseList;
