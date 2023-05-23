import { TodoItem } from "./todoitem"

export function TodoList({ todos, toggleTodo, editTodo, deleteTodo }) {
    return (
        <ul className="list">
            {todos.length === 0 && "No Todos"}
            {todos.map( todo => {
                return <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} editTodo={editTodo} deleteTodo={deleteTodo}/>
        })} 
    </ul>
    )
}