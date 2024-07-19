/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import Todo from './Todo';

function TodoContainer({todos , delTodo}) {
return (
    <div className="item-container">
        {todos.map((todo , index) =>{
            return (
                <Todo todo={todo} index={index} delTodo={delTodo}/>
            )
        })}
    </div>
);
}

export default TodoContainer
