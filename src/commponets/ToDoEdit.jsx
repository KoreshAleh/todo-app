




function ToDoEdit({editText, handelEditInput, saveEdit}) {


   
    return ( 
        <>
            <div className="up-side">
            <h1>TO-DO App</h1>
            <h2 id="save-text">Create a new text</h2>
            <input type="text" placeholder='Введите текст' onChange={handelEditInput} value={editText} />
             <button id="save" onClick={saveEdit}>Save</button>
          </div> 
        </>
     );
}

export default ToDoEdit;