import { useState } from "react";
import './Checkbox.css'
import { OptionObj } from "../types";



interface checkProps {
    option: OptionObj,
    setFilterOption: (arg0: OptionObj) => void,
}
const Checkbox =  ({ option, setFilterOption }: checkProps) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="checkbox-wrapper">
      <label className='label'>
        <input 
        type="radio" 
        name="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked((prev) => !prev)}
        onClick={() => {setFilterOption(option); }}
        className={isChecked ? "checked" : ""}
        />
        <div className='checkmark'></div>
        <span>{option.label}</span>
      </label>
    </div>
  );
};
export default Checkbox;