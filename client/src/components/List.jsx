import React from 'react';
import ListEntry from './ListEntry.jsx';

const List = (props) => {
  return (
    <div>
      {
        props.pokes.map((poke, index) => {
          return (
            <ListEntry poke={poke} key={index} handlegetAll={props.handlegetAll} />
          )
        })
      }
    </div>
  )
}

export default List;