import React, {useState} from "react";
import styles from "./RadioMenu.module.css";

const RadioMenu = ({ elements, setCategory }) => {
    const [active, setActive] = useState("ALL");
  return (
    <div className={styles.radioButtonWrapper}>
      {elements.map((item) => (
        <button key={item.value}  className={active == item.value ? styles.radioButtonActive : styles.radioButton}
          onClick={() => {
            setCategory(item.value);
            setActive(item.value);
          }}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default RadioMenu;
