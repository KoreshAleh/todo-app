import { useToDo } from "../Context/ToDoContext";
import ToDoitem from "./ToDoItem";

function ToDoList({handelEdit, handelEditID, trueCheck , handelChek}) {
    const {part, deletePart} = useToDo()
    return ( 
         <div className="down-side">
             {part.map(parts => (
                <ToDoitem parts={parts} key={parts.id} handelEditID={handelEditID}  deletePart={deletePart} handelEdit={handelEdit} trueCheck={trueCheck} handelChek={handelChek}/>
             ))}
        </div>
     );
}

export default ToDoList;