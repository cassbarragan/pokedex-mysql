import React from 'react';

var List = (props) => {
  console.log(props)
  return (
    <div>
      {props.list.map((item) => {
        // console.log("item in List.js",item)
        console.log('itemimage', item.img);
          return (
            <div>
            <h3>{item.name}</h3>
            <img src={`${item.img}`} />
            </div>
            )}
      )}
      </div>
  )};


export default List;