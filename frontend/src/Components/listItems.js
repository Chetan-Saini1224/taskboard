import React from 'react';
import listStyles from "../styles/list.module.css";
import { useDrag } from 'react-dnd';



const ListItems = (props) => {
  const {itemData,deleteTask} = props;

  const [{ isDragging }, drag] = useDrag({
    type: 'div',
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });
  


  return (
       <div ref={drag} className={listStyles.listItem} >
              <input type='checkbox' onClick={() => deleteTask(itemData._id)} />
              <sub>{itemData.item_content}</sub> 
       </div>
  )
}

export default ListItems;