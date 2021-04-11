import React from 'react';

const Select = (props) => {
  return (
    <select id="types" onChange={props.handlefilter} >
      <option value='option'>option</option>
      {props.types.map((type, index) => {
        return (
          <option value={type.type} key={index}  >{type.type}</option>
        )
      })}
    </select>
  )
}
export default Select;