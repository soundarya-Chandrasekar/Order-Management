import React, { useState } from "react";
import styles from "../Component-Style/ColorSelector.module.css";


const ColorSelector = ({ onColorSelect }) => {
  const [selectedColor, setSelectedColor] = useState("");
  const [customColor, setCustomColor] = useState("#ffffff");

  // Predefined color categories with shades
  const colorOptions = {
    Red: ["#FFCDD2", "#EF9A9A", "#E57373", "#F44336", "#D32F2F"],
    Blue: ["#BBDEFB", "#64B5F6", "#2196F3", "#1976D2", "#0D47A1"],
    Green: ["#C8E6C9", "#81C784", "#4CAF50", "#388E3C", "#1B5E20"],
    Yellow: ["#FFF9C4", "#FFF176", "#FFEB3B", "#FBC02D", "#F57F17"],
    Purple: ["#E1BEE7", "#BA68C8", "#9C27B0", "#7B1FA2", "#4A148C"],
    Brown: ["#D7CCC8", "#A1887F", "#795548", "#5D4037", "#3E2723"],
    Black: ["#FAFAFA", "#BDBDBD", "#757575", "#424242", "#000000"],
  };

  // Dropdown color selection
  const handleDropdownChange = (e) => {
    const selected = e.target.value;
    setSelectedColor(selected);
    setCustomColor(selected);
    if (onColorSelect) onColorSelect(selected);
  };

  // Color picker selection
  const handleCustomColorChange = (e) => {
    const newColor = e.target.value;
    setCustomColor(newColor);
    setSelectedColor(newColor);
    if (onColorSelect) onColorSelect(newColor);
  };

  return (
    <div className={styles.colorSelector}>
      <label className={styles.colorLabel}>Select Color Shade</label>
      <select
        className={styles.colorDropdown}
        onChange={handleDropdownChange}
        value={selectedColor}
      >
        <option value="">Select Color</option>
        {Object.entries(colorOptions).map(([group, shades]) => (
          <optgroup key={group} label={group}>
            {shades.map((shade, index) => (
              <option key={index} value={shade}>
                {group} - {shade}
              </option>
            ))}
          </optgroup>
        ))}
      </select>

      <div className={styles.colorPickerContainer}>
        <label className={styles.colorLabel}>Or Choose Custom Color</label>
        <input
          type="color"
          value={customColor}
          onChange={handleCustomColorChange}
          className={styles.colorPicker}
        />
      </div>

      <div
        className={styles.colorPreview}
        style={{ backgroundColor: customColor }}
      >
        {customColor}
      </div>
    </div>
  );
};

export default ColorSelector;
