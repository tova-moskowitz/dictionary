import * as React from "react";

export default function UnstyledSelectControlled({
  onChangeFontSelect,
  theme,
}) {
  return (
    <div className="font-selection">
      <select className={`font-select ${theme}`} onChange={onChangeFontSelect}>
        <option className="sansSerif" value="sansSerif">
          Sans Serif
        </option>
        <option className="serif" value="serif">
          Serif
        </option>
        <option className="mono" value="mono">
          Mono
        </option>
      </select>
    </div>
  );
}
