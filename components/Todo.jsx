/* eslint-disable react/prop-types */

function Todo({todo , index , delTodo}) {
return (
    <div className="todo">
        <p>{todo}</p>
        <div className="action-elements">
            <input type="checkbox" />
            <button onClick={()=> delTodo(index)}>Delete</button>
        </div>
    </div>
);
}

export default Todo
