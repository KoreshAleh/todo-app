
import ToDoInput from "./ToDoInput";
import ToDoList from "./ToDoList";
import { useToDo } from "../Context/ToDoContext";
import { useState } from "react";
import ToDoEdit from "./ToDoEdit";


function Home() {


    const [isText, setText] = useState('')
    const [viss, setViss] = useState(false)
     const [editText, setEditText] = useState('')
     const [editID, setEditId] = useState(null)

    const {part, addPart,  setPart} = useToDo()

       const handelAdd = () => {
        addPart(isText)
        setText('')
        

    }

    const handelChek = (id) => {
      setPart((prev) =>
         prev.map((item) =>
           item.id === id  ? {...item, completed: !item.completed} : item))


      

      }

      const Done = part.filter((p) => p.completed).length
      const NotDone = part.filter((p) => !p.completed).length
  
    const handelInput = (e) => {
        setText(e.target.value)
    }

       const handelEditInput = (e) => {
        setEditText(e.target.value)
    }


       


    const handelEditID = (id) => {
        const item = part.find(p => p.id === id);
        if (!item) return;
        setEditId(id);
        setEditText(item.title);
        setViss(true);
  };

    const saveEdit = () => {
    setPart(prev =>
      prev.map(item => item.id === editID ? { ...item, title: editText } : item)
    );
    setViss(false);
    setEditId(null);
    setEditText('');
  };
   


 

    return ( 
        <>
        <div className="container">
            <div className="wrapper">
               {viss ? <ToDoEdit  saveEdit={saveEdit} handelEditInput={handelEditInput} editText={editText}/> :  (<>
               <ToDoInput isText={isText}  handelInput={handelInput} addPart={handelAdd}/>
                <ToDoList  handelEditID={handelEditID} handelChek={handelChek} />
               </>)}
                <div className="lineal"></div>
                <div className="done">
                  <h4>Completed: {Done} | Uncomleted: {NotDone}</h4>
                </div>
            </div>
        </div>
       
        </>
     );
}

export default Home;


 