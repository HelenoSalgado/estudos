import React, { useContext } from "react";
import { TodoContext } from "../contexts/todoContext";
import { TodoContextType } from "../contexts/totoContextType";
import TodoListItem from "./todoListItem";

const TodoList = () => {
    
    const {todos} = useContext<TodoContextType>(TodoContext);

    return(
        <table className="uk-table">
            <caption>Lista de tarefas</caption>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Tarefa</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    todos?.map(
                        todo => (<TodoListItem key={todo.id} todo={todo}></TodoListItem>)
                    )
                }
            </tbody>
        </table>
    );
}

export default TodoList;