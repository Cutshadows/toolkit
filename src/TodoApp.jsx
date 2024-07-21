import React from 'react';
import { useGetTodosQuery } from './api/todosApi';

const TodoApp = () => {
    const {data: todos, isLoading, isFetching, refetch} = useGetTodosQuery();
    return (
        <React.Fragment>
            <h1>Todo App</h1>
            <hr />
            {isLoading && <p>Loading...</p>}
            <prev>....	</prev>

            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
            <button disabled={isFetching} onClick={refetch}>
				Next todo
            </button>
        </React.Fragment>  
    )
}

export default TodoApp;
