import React from 'react'
import Todo from './Todo'
import { Paper } from "@mui/material";
import { List } from "@mui/material";
import { ListItem } from "@mui/material";
import { Divider } from "@mui/material";
import { ListItemText } from "@mui/material";

function TodoList({todos, removeTodo, toggleTodo, editTodo}) {
    
    return (
        <Paper>
            <List>
                {todos.map(todo => {
                    return(
                    <React.Fragment key={todo.id}>
                        <ListItem>
                            <ListItemText>
                                <Todo 
                                    id={todo.id}
                                    task={todo.task} 
                                    completed={todo.completed} 
                                    removeTodo={removeTodo}
                                    toggleTodo={toggleTodo}
                                    editTodo={editTodo}
                                />
                                    
                            </ListItemText>
                        </ListItem>
                        <Divider/>
                    </React.Fragment>
                    )
                })}
            </List>
        </Paper>
    );
}

export default TodoList;