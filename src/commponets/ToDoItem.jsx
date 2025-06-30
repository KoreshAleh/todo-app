import { useToDo } from "../Context/ToDoContext";

function ToDoItem({parts, handelEditID, handelChek}) {
    const {deletePart} =  useToDo()
    return ( 
          <div className="part" key={parts.id}>
            <input type="checkbox"  onChange={() => handelChek(parts.id) } checked={parts.completed} />
                <h3  style={{
                        textDecoration: parts.completed ? "line-through" : "none",
                        color: parts.completed ? "black" : "white",
                        opacity: parts.completed ? 0.4 : 1,
  }}>{parts.title}</h3>
               
                <div className="buttons">
                     <p>{parts.createdAt}</p>
                    <button onClick={() => handelEditID(parts.id)}>Edit</button>
                    <button onClick={() => deletePart(parts.id)}>Delete</button>
                </div>
            </div>
     );
}

export default ToDoItem;