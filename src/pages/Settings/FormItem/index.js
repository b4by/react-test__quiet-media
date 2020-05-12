import React from 'react';

const InputItem = ({type, name, label, value, pattern, error, handler}) => {

  return (
    <>
      <input 
        className="settings__item-input" 
        type={type}
        id={name}
        name={name} 
        value={value}
        onChange={handler}
        pattern={pattern}
        required
      />
      <label 
        className={ value.trim() ? "settings__item-label settings__item-label--done" : "settings__item-label"} 
        htmlFor={name}>
      {label}
      </label>
    </>
  )
}

const SelectItem = ({name, label, options, handler}) => {
  return (
    <>
      <label
        className="settings__item-label-select"
        htmlFor={name}>
        {label}
      </label>
      <select name={name} onChange={handler}>
        {options.map((option, key) => <option key={key} value={option}>{option}</option>)}
      </select>
    </>
  )
}

const FormItem = (props) => {
   if (props.tag === 'input') {
     return (
      <li className="settings__item">
        <InputItem {...props} />
      </li>
     )
   } else {
     return (
      <li className="settings__item">
        <SelectItem {...props} />
      </li>
     )
   }
}

export default FormItem;