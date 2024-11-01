import React from "react";
import styles from "./Board.module.css";
import collapseIcon from "../../assets/icons/collapseIcon.png"; // Adjust path as necessary

const nameStorageKey = "userName";

const taskStatus = [
    { title: "Backlog", status: "backlog" },
    { title: "To Do", status: "todo" },
    { title: "In progress", status: "inProgress" },
    { title: "Done", status: "completed" },
];

const getOrdinalSuffix = (number) => {
  const suffixes = ["th", "st", "nd", "rd"];
  const v = number % 100;
  return suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0];
};

const getFormattedDate = () => {
  const currentDate = new Date();
  const numericDay = currentDate.getDate();
  const dayWithOrdinal = `${numericDay}${getOrdinalSuffix(numericDay)}`;
  const month = currentDate.toLocaleString("en-US", { month: "long" });
  const year = currentDate.getFullYear();
  return `${dayWithOrdinal} ${month} ${year}`;
};

function Board() {
  const userName = localStorage.getItem(nameStorageKey);

  return (
    <div className={styles.boardContainer}>
      <div className={styles.headingContainer}>
        <h1 className={styles.welcomeMessage}>Welcome! {userName}</h1>
        <div className={styles.currentDate}>{getFormattedDate()}</div>
      </div>

      <div className={styles.headingContainer}>
        <div className={styles.boardHeading}>Board</div>
        <div className={styles.collapseMenu}>Collapse menu ^</div>
      </div>

      <div className={styles.cardsContainer}>
        {taskStatus.map((statusType, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardTitleContainer}>
              <h1 className={styles.cardTitle}>{statusType.title}</h1>
              <img src={collapseIcon} alt="collapse icon" className={styles.collapseIcon} />
            </div>
            <div className={styles.taskContainer}>
              Component Here
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Board;
