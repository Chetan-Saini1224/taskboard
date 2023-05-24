import { useEffect, useState,useContext } from 'react';
import styles from "../styles/board.module.css"
import listStyles from "../styles/list.module.css"
import List from '../Components/List';
import {boarddata,addNewList} from "../api"; 
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { UserContext } from '../contexts/userContext';
import { useNavigate } from 'react-router-dom';

function Home() {

  const [boardData,setBoardData] = useState([]);
  const navigate = useNavigate();
  const loggedInUser = localStorage.getItem('uid');
 
  
  useEffect(() => {
      async function getData() {
      const data = await boarddata();
      setBoardData(data.data);
     }
      if(!loggedInUser){
        navigate("/login");
     }
     else getData();
  },[])

   async function addList() {
     let listNumber = boardData.length + 1;
     setBoardData([...boardData,{
          list_number : listNumber,
          list_items  : []         
     }]);
     await addNewList(listNumber,loggedInUser);
   }

  return (
    <div className={styles.board}>
     <DndProvider backend={HTML5Backend}>  
      {boardData.map( (list,idx) => (<List list={list} key={idx} />) )} 
      </DndProvider>  
      <div className={listStyles.cardAddItem}>
          <p  className={listStyles.heading}>Create New List</p>
          <div className={listStyles.addIcon} onClick={addList}>
          <img src='https://t4.ftcdn.net/jpg/01/07/62/07/240_F_107620769_UwNVSoXnKS4VNcOKoZjPohlEPn83oE38.jpg' />
          </div>
      </div>
    </div>
  );
}

export default Home;
