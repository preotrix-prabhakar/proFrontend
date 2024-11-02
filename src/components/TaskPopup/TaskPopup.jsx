// import React from "react";
// import { AiOutlinePlus } from "react-icons/ai";
// import styles from "./TaskPopup.module.css";
// import Task from "../TaskCard/Task/Task";

// function TaskPopup() {
//   const priorityColors = {
//     low: "#63C05B",
//     medium: "#18B0FF",
//     high: "#FF2473",
//   };

//   return (
//     <div className={styles.overlay}>
//       <div className={styles.modal}>
//         <div className={styles.modalHeader}>
//           <p className={styles.fieldLabel}>
//             Title <span className={styles.requiredMarker}>*</span>
//           </p>
//           <div className={styles.inputWrapper}>
//             <input
//               className={styles.titleInput}
//               placeholder="Enter Task Title"
//               type="text"
//             />
//           </div>
//           <div className={styles.prioritySection}>
//             <p className={styles.fieldLabel}>
//               Select Priority <span className={styles.requiredMarker}>*</span>
//             </p>
//             <div className={styles.priorityButtons}>
//               <button className={styles.priorityButton}>
//                 <span
//                   className={styles.priorityDot}
//                   style={{ color: priorityColors["high"] }}
//                 >
//                   ●
//                 </span>
//                 HIGH PRIORITY
//               </button>
//               <button className={styles.priorityButton}>
//                 <span
//                   className={styles.priorityDot}
//                   style={{ color: priorityColors["medium"] }}
//                 >
//                   ●
//                 </span>
//                 MODERATE PRIORITY
//               </button>
//               <button className={styles.priorityButton}>
//                 <span
//                   className={styles.priorityDot}
//                   style={{ color: priorityColors["low"] }}
//                 >
//                   ●
//                 </span>
//                 LOW PRIORITY
//               </button>
//             </div>
//           </div>
//           <p className={styles.fieldLabel}>
//             Checklist(1/3) <span className={styles.requiredMarker}>*</span>
//           </p>
//           <div className={styles.checklistWrapper}>
//             {/* Task components would be added here */}
//             <div className={styles.taskItem}>
//               <Task isPopupView={true} />
//             </div>
//           </div>
//           <button className={styles.addTaskButton}>
//             <AiOutlinePlus className={styles.addIcon} />
//             <p>Add New</p>
//           </button>
//         </div>
//         <div className={styles.modalFooter}>
//           <button className={styles.selectDate}> Select Due Date</button>
//           <div className={styles.actionButtons}>
//             <button className={styles.cancelButton}> Cancel</button>
//             <button className={styles.saveButton}> Save</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TaskPopup;
import React, { useState } from "react";
import styles from "./TaskPopup.module.css";
import Task from "../TaskCard/Task/Task";
import { AiOutlinePlus } from "react-icons/ai";
import dayjs from "dayjs";

const priorityColorMap = {
  low: "#63C05B",
  medium: "#18B0FF",
  high: "#FF2473",
};

function EditCreatePopup() {
  const [pickDate, setPickDate] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    setPickDate(false);
  };

  return (
    <div className={styles.overlay}>
      {pickDate && (
        <div className={styles.datePickerContainer}>
          <input
            type="date"
            onChange={handleDateChange}
            className={styles.dateInput}
          />
        </div>
      )}
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <p className={styles.fieldLabel}>
            Title <span className={styles.requiredMarker}>*</span>
          </p>
          <div className={styles.inputWrapper}>
            <input
              className={styles.titleInput}
              placeholder="Enter Task Title"
              type="text"
            />
          </div>
          <div className={styles.prioritySection}>
            <p className={styles.fieldLabel}>
              Select Priority <span className={styles.requiredMarker}>*</span>
            </p>
            <div className={styles.priorityButtons}>
              <button className={styles.priorityButton}>
                <span
                  className={styles.priorityDot}
                  style={{ color: priorityColorMap.high }}
                >
                  ●
                </span>
                HIGH PRIORITY
              </button>
              <button className={styles.priorityButton}>
                <span
                  className={styles.priorityDot}
                  style={{ color: priorityColorMap.medium }}
                >
                  ●
                </span>
                MODERATE PRIORITY
              </button>
              <button className={styles.priorityButton}>
                <span
                  className={styles.priorityDot}
                  style={{ color: priorityColorMap.low }}
                >
                  ●
                </span>
                LOW PRIORITY
              </button>
            </div>
          </div>
          <p className={styles.fieldLabel}>
            Checklist(1/3) <span className={styles.requiredMarker}>*</span>
          </p>
          <div className={styles.checklistWrapper}>
            <div className={styles.taskItem}>
              <Task isPopupView={true} />
            </div>
          </div>
          <button className={styles.addTaskButton}>
            <AiOutlinePlus className={styles.addIcon} />
            <p>Add New</p>
          </button>
        </div>
        <div className={styles.modalFooter}>
          <button
            className={styles.selectDateButton}
            onClick={() => setPickDate(!pickDate)}
          >
            {selectedDate
              ? dayjs(selectedDate).format("DD/MM/YYYY")
              : "Select Date"}
          </button>
          <div className={styles.actionButtons}>
            <button className={styles.cancelButton}>Cancel</button>
            <button className={styles.saveButton}>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditCreatePopup;
