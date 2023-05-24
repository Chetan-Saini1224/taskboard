import React, { useState } from 'react'
import ListItems from './listItems';
import listStyles from "../styles/list.module.css"
import { addListItem } from '../api';
import { useDrop } from 'react-dnd';
import { deleteListItem } from '../api';

const List = (props) => {
  const {list_number,list_items} = props.list;

  const [listItems,setListItems] =  useState(list_items);
  const [task,setTask] = useState('');

  const [{ isOver }, drop] = useDrop({
    accept: 'div',
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });


  async function addItem(){
  
    if(task.length > 28){
       alert('Task Value Can not exced 28 char')
       return;
    }

    const data = await addListItem(list_number,task);
    setListItems([...listItems,data.data.item]);
  }
  
    async function deleteTask(id) {      
     await deleteListItem(id);
     setListItems([...listItems.filter((val) => val._id != id)]);
  }
  return (
    <>
  <div ref={drop} className={listStyles.card} id={`list_number_${list_number}`}>
    <p className={listStyles.heading}>List {list_number}</p>
    <div className={listStyles.listItem} >
        <input type='text' value={task} onChange={(e) => setTask(e.target.value)} placeholder='Enter Task' className={listStyles.addTaskInput} />
        <input type='button' onClick={addItem} className={listStyles.addBtn} value="ADD" />
    </div>
    <div>
    {listItems.map((item,idx) => (<ListItems key={idx} itemData={item} deleteTask={deleteTask} />) )}
    </div>
  </div>
    </>
  )
}

export default List;