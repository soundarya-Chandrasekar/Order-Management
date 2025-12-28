import React, { useState, useEffect } from "react";
import styles from "../Component-Style/OrderHistory.module.css";

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  const handleDelete = (index) => {
    const updatedOrders = orders.filter((_, i) => i !== index);
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  return (
    <div className={styles.orderHistoryPage}>
      <h1 className={styles.heading}>All Orders Received</h1>
      {orders.length === 0 ? (
        <p className={styles.noOrder}>No orders yet!</p>
      ) : (
        <div className={styles.tableWrapper}>
        <table className={styles.ordersTable}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Company</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Preference</th>
              <th>Count</th>
              <th>Material</th>
              <th>Date</th>
              <th>Delivery</th>
              <th>Ends</th>
              <th>Meters</th>
              <th>Kgs</th>
              <th>Color</th>
              <th>Specification</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, i) => (
              <tr key={i}>
                <td>{order.name}</td>
                <td>{order.company}</td>
                <td>{order.email}</td>
                <td>{order.number}</td>
                <td>{order.options}</td>
                <td>{order.count}</td>
                <td>{order.material}</td>
                <td>{order.date}</td>
                <td>{order.category}</td>
                <td>{order.ends}</td>
                <td>{order.meter}</td>
                <td>{order.kgs}</td>
                <td>{order.color}</td>
                <td>{order.message}</td>
                <td>
                  <button
                    onClick={() => handleDelete(i)}
                    className={styles.deleteBtn}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
