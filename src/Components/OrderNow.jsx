import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import styles from "../Component-Style/OrderNow.module.css";
import ColorSelector from "./ColorSelector";

const OrderNow = () => {
  const initialFormData = {
    name: "",
    company: "",
    email: "",
    number: "",
    options: "",
    count: "",
    material: "",
    date: "",
    category: "",
    ends: "",
    meter: "",
    kgs: "",
    message: "",
    color: "", // Added color to formData
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [previewOrder, setPreviewOrder] = useState(null);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleColorSelect = (color) => {
    setFormData((prev) => ({
      ...prev,
      color,
    }));
  };

  const validateInputs = () => {
    const newErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Username is required";
      isValid = false;
    }
    if (!formData.company.trim()) {
      newErrors.company = "Company Name is required";
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
      isValid = false;
    }
    if (!formData.number.trim()) {
      newErrors.number = "Contact Number is required";
      isValid = false;
    } else if (formData.number.length < 10) {
      newErrors.number = "Enter correct Number";
      isValid = false;
    }
    if (!formData.options.trim()) {
      newErrors.options = "Please select an option";
      isValid = false;
    }
    if (!formData.count) {
      newErrors.count = "Please enter count";
      isValid = false;
    }
    if (!formData.material.trim()) {
      newErrors.material = "Material required";
      isValid = false;
    }
    if (!formData.date.trim()) {
      newErrors.date = "Expected date required";
      isValid = false;
    }
    if (!formData.category.trim()) {
      newErrors.category = "Select delivery mode";
      isValid = false;
    }
    if (!formData.ends.trim()) {
      newErrors.ends = "Ends required";
      isValid = false;
    }
    if (!formData.meter.trim()) {
      newErrors.meter = "Meter required";
      isValid = false;
    }
    if (!formData.kgs.trim()) {
      newErrors.kgs = "Kgs required";
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = "Please fill specification";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateInputs()) return;
    setPreviewOrder(formData);
    setFormData(initialFormData);
    setErrors({});
  };

  const handleSaveOrder = () => {
    const updatedOrders = [...orders, previewOrder];
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
    alert("Order placed successfully!");
    setPreviewOrder(null);
  };

  // Edit handler - refill form with preview data
  const handleEditOrder = () => {
    setFormData(previewOrder);
    setPreviewOrder(null);
  };

  return (
    <div className={styles.pageWrapper}>
      <Helmet>
        <title>Order Now</title>
        <link rel="icon" type="image/png" href="/logo_pto.png" />
      </Helmet>

      <div className={styles.orderNowPage}>
        {/* <h1 className={styles.formHeading}>
          Order Now
        </h1> */}

        <div className={styles.background}>
          <h1 className={styles.formHeading}>
          Order Now
        </h1>
          <div className={styles.formWrapper}>
            <form className={styles.orderFormContainer} onSubmit={handleSubmit}>
              {/* Row 1 */}
              <div className={styles.formRow}>
                <div className={styles.inputGroup}>
                  <label className={styles.labelText}>Name</label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter Name"
                    className={styles.inputField}
                  />
                  {errors.name && <div className={styles.error}>{errors.name}</div>}
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.labelText}>Company</label>
                  <input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Enter Company"
                    className={styles.inputField}
                  />
                  {errors.company && <div className={styles.error}>{errors.company}</div>}
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.labelText}>Email</label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Email"
                    className={styles.inputField}
                  />
                  {errors.email && <div className={styles.error}>{errors.email}</div>}
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.labelText}>Phone Number</label>
                  <input
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                    placeholder="Enter Phone"
                    className={styles.inputField}
                  />
                  {errors.number && <div className={styles.error}>{errors.number}</div>}
                </div>
              </div>

              {/* Row 2 */}
              <div className={styles.formRow}>
                <div className={styles.inputGroup}>
                  <label className={styles.labelText}>Preference</label>
                  <select
                    name="options"
                    value={formData.options}
                    onChange={handleChange}
                    className={styles.selectField}
                  >
                    <option value="">Select</option>
                    <option value="Spinning">Spinning</option>
                    <option value="Wrapping">Wrapping</option>
                    <option value="Winding">Winding</option>
                    <option value="Weaving">Weaving</option>
                  </select>
                  {errors.options && <div className={styles.error}>{errors.options}</div>}
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.labelText}>No. of Items</label>
                  <input
                    name="count"
                    type="number"
                    value={formData.count}
                    onChange={handleChange}
                    placeholder="Count"
                    className={styles.inputField}
                  />
                  {errors.count && <div className={styles.error}>{errors.count}</div>}
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.labelText}>Material</label>
                  <input
                    name="material"
                    value={formData.material}
                    onChange={handleChange}
                    placeholder="Material"
                    className={styles.inputField}
                  />
                  {errors.material && <div className={styles.error}>{errors.material}</div>}
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.labelText}>Expected Delivery Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className={styles.inputField}
                  />
                  {errors.date && <div className={styles.error}>{errors.date}</div>}
                </div>
              </div>

              {/* Row 3 */}
              <div className={styles.formRow}>
                <div className={styles.inputGroup}>
                  <label className={styles.labelText}>Delivery Mode</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className={styles.selectField}
                  >
                    <option value="">Select</option>
                    <option value="Delivery Needed">Delivery Needed</option>
                    <option value="Delivery Not Needed">Delivery Not Needed</option>
                  </select>
                  {errors.category && <div className={styles.error}>{errors.category}</div>}
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.labelText}>Ends</label>
                  <input
                    name="ends"
                    value={formData.ends}
                    onChange={handleChange}
                    className={styles.inputField}
                  />
                  {errors.ends && <div className={styles.error}>{errors.ends}</div>}
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.labelText}>Meters</label>
                  <input
                    name="meter"
                    value={formData.meter}
                    onChange={handleChange}
                    className={styles.inputField}
                  />
                  {errors.meter && <div className={styles.error}>{errors.meter}</div>}
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.labelText}>Kgs</label>
                  <input
                    name="kgs"
                    value={formData.kgs}
                    onChange={handleChange}
                    className={styles.inputField}
                  />
                  {errors.kgs && <div className={styles.error}>{errors.kgs}</div>}
                </div>
              </div>

              {/* Row 4 — Color + Specification */}
              <div className={styles.colorSpecRow}>
                <div className={styles.colorBox}>
                  <ColorSelector onColorSelect={handleColorSelect} />
                </div>

                <div className={styles.specBox}>
                  <label>Specification</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter detailed specification..."
                    className={styles.textareaField}
                  />
                  {errors.message && <span className={styles.error}>{errors.message}</span>}
                </div>
              </div>

              <div className={styles.centerButton}>
                <button type="submit" className={styles.submitBtn}>
                  Preview Order
                </button>
              </div>
            </form>

            {previewOrder && (
              <div className={styles.previewTableSection}>
              <div className={styles.ordersTableWrapper}>
                <h2>Order Preview</h2>
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
                      <th>Color</th> {/* Added column */}
                      <th>Specification</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{previewOrder.name}</td>
                      <td>{previewOrder.company}</td>
                      <td>{previewOrder.email}</td>
                      <td>{previewOrder.number}</td>
                      <td>{previewOrder.options}</td>
                      <td>{previewOrder.count}</td>
                      <td>{previewOrder.material}</td>
                      <td>{previewOrder.date}</td>
                      <td>{previewOrder.category}</td>
                      <td>{previewOrder.ends}</td>
                      <td>{previewOrder.meter}</td>
                      <td>{previewOrder.kgs}</td>
                      <td>
                        <div
                          style={{
                            backgroundColor: previewOrder.color || "#ccc",
                            width: "40px",
                            height: "20px",
                            margin: "0 auto",
                            borderRadius: "4px",
                            border: "1px solid #999",
                          }}
                        ></div>
                      </td>
                      <td>{previewOrder.message}</td>
                    </tr>
                  </tbody>
                </table>

                <div className={styles.centerButton}>
                  <button onClick={handleSaveOrder} className={styles.submitBtn}>
                    Save Order
                  </button>
                  <button onClick={handleEditOrder} className={styles.editBtn}>
                    Edit
                  </button>
                </div>
              </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderNow;
