function ToDoInput({handelInput, addPart, isText}) {
    return ( 
         <div className="up-side">
            <h1>TO-DO List</h1>
            <div className="input-button-wrapper">
                 <input type="text" placeholder='Enter text' onChange={handelInput} value={isText} />
                <button onClick={addPart}>Add</button>
            </div>
           
             <h2>Task List</h2>
          </div>
     );
}

export default ToDoInput;



