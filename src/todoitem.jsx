import { useState } from "react"

export function TodoItem({completed, id, title, toggleTodo, editTodo, deleteTodo }){
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState("");

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        setIsEditing(false);
        editTodo(editedTitle, id, completed);
    };

    const handleTitleChange = e => {
        setEditedTitle(e.target.value);
    };
    
    return (  
        <li>
            <label>
                <input 
                    type="checkbox" 
                    checked= {completed} 
                    onChange={e => toggleTodo(id, e.target.checked)}
                    className="check"
                />
            </label>
            {isEditing ? (
                <>
                <input
                type="text"
                value= {editedTitle}
                onChange={handleTitleChange}
                className="ipt"
                />
                <button onClick={handleSave} className="btn btn-edit">Save</button>
                </>
                ) : (
                <>
                <span>{title}</span>
                <button onClick={handleEdit} className="btn btn-edit">Edit</button>
                </>
            )}
            <button onClick={() => deleteTodo(id)} className="btn btn-danger">Delete</button>      
        </li>
    ) 
}