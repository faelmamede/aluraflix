import React from 'react';

function FormField({label, type, name, value, onChange}) {

    if(type==="textArea") return (
        <label>
          {label}
          <textArea
            type="text"
            name={name}
            value={value}
            onChange={onChange}
          />
        </label>
    )
    else return (
        <label>
          {label}
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
          />
        </label>
    )
}

export default FormField;