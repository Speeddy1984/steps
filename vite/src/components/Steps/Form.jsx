import { useState } from "react";
import styles from "./steps.module.css";

const Form = ({ addWorkout }) => {
  const [date, setDate] = useState("");
  const [distance, setDistance] = useState("");
  const [error, setError] = useState("");

  const isValidDate = (dateString) => {
    const regex = /^\d{2}\.\d{2}\.\d{4}$/;
    if (!regex.test(dateString)) {
      return false;
    }
    const [day, month, year] = dateString.split(".").map(Number);
    const date = new Date(year, month - 1, day);
    return (
      date.getFullYear() === year &&
      date.getMonth() === month - 1 &&
      date.getDate() === day
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidDate(date)) {
      setError("Введите корректную дату в формате ДД.ММ.ГГГГ");
      return;
    }
    if (date && distance) {
      addWorkout(date, parseFloat(distance));
      setDate("");
      setDistance("");
      setError("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={styles["input"]}
        type="text"
        placeholder="Дата (ДД.ММ.ГГГГ)"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        className={styles["input"]}
        type="number"
        placeholder="Пройдено, км"
        value={distance}
        onChange={(e) => setDistance(e.target.value)}
      />
      <button type="submit">OK</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default Form;
