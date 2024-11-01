
import React from "react";
import styles from "./Analytics.module.css";

const activityStatus = [
  { title: "Backlog Tasks"},
  { title: "To-Do Tasks" },
  { title: "In-Progress Tasks"  },
  { title: "Completed Tasks"  },
];

const prirorityStatus = [
  { title: "Low Priority"  },
  { title: "Moderate Priority"  },
  { title: "High Priority"  },
  { title: "Due Date Tasks"  },
];

function AnalyticsCard({ title, value }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardContent}>
        <span>●</span>
        <p>{title}</p>
      <p className={styles.value}>{value}</p>
      </div>
    </div>
  );
}

function Analytics() {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.heading}>Analytics</h1>
      </div>
      <div className={styles.cardsContainer}>
        <div className={styles.cards}>
          {activityStatus.map((data, index) => (
            <AnalyticsCard key={index} title={data.title} value={1} />
          ))}
        </div>
        <div className={styles.cards}>
          {prirorityStatus.map((data, index) => (
            <AnalyticsCard key={index} title={data.title} value={1} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Analytics;
