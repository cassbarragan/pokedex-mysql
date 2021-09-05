import React from 'react';

var List = (props) => {
  // console.log(props)
  return (
    <div>
      {props.list.map((item) => {
          return (
            <div>
            <h3>{item.name}</h3>
            <img src={item.img} />
            </div>
            )}
      )}
      </div>
  )};


export default List;