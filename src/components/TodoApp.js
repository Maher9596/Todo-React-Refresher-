import {useState} from 'react'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import { Typography } from "@mui/material";
import { Paper } from "@mui/material";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Grid } from "@mui/material";

function TodoApp() {
    const initialValues = [
        {id: 1, task: "Write Code", completed: false},
        {id: 2, task: "Nap", completed: true},
        {id: 3, task: "Buy Coffee", completed: true}
    ]
    const [todos, setTodos] = useState(initialValues)

    const addTodo = (newTodoText) => {
        setTodos([...todos, {id: 4, task:newTodoText, completed: false}])
    }

    const removeTodo = (todoId) => {
      const updatedTodos = todos.filter(todo => todo.id !== todoId)
      setTodos(updatedTodos)       
    }

    const editTodo = (todoId) => {
        const editedTodos = todos.filter(todo => todo.id === todoId)
        setTodos(editedTodos)
    }

    return (
        <div>
            <Paper style={{
                padding:0,
                margin:0,
                height: "100vh",
                backgroundColor: "#fafafa"
            }}
                elevation={0}
            >
                <AppBar color="primary" position="static" style={{height: "64px"}}>
                    <Toolbar>
                        <Typography color="inherit">TODOS WITH HOOKS</Typography>
                    </Toolbar>
                </AppBar>
                <Grid container justify="center">
                    <Grid item xs={11} md={8} lg={4}>
                        <TodoForm addTodo={addTodo}/>
                        <TodoList todos={todos} removeTodo={removeTodo}/>
                    </Grid>                 
                </Grid>              
            </Paper>
        </div>
    );
}

export default TodoApp;