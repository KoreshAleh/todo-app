import { createContext, useState, useEffect, useContext } from "react";

 const  ToDoContext = createContext()

    export function ToDoProvider({children})  {
            const [part, setPart] = useState(() => {
            const save = localStorage.getItem('todo')
            return save ? JSON.parse(save) : []
     })

     


      useEffect(() => {
            localStorage.setItem("todo", JSON.stringify(part));
        }, [part]);


         const addPart = (title) => {
            
            const now = new Date();
             const formatted = now.toLocaleString('ru-RU');
            if (title.trim() === "") return;
            const newPart = {
            id: Date.now(),
            title,
            completed: false,
            createdAt: formatted
        };
            setPart((prev) => [...prev, newPart]);


        
    };


     const deletePart = (id) => {
        setPart((prev) => prev.filter((t) => t.id !== id));
    };



      

  

    return(
        <ToDoContext.Provider value={{part, addPart, deletePart,setPart}}>
            {children}
        </ToDoContext.Provider>
    )

    }



export function useToDo() {
  return useContext(ToDoContext);
}