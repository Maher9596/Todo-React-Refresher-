import { Checkbox, IconButton, ListItem, ListItemSecondaryAction, ListItemText } from "@mui/material";
import useToggle from '../hooks/useToggle'
import EditTodoForm from "./EditTodoForm";
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

function Todo({task, completed, removeTodo, id, toggleTodo, editTodo}) {
    const [isEditting, toggle] = useToggle(false)
    return (
        <div>
            <ListItem>
                {isEditting ? (<EditTodoForm id={id}  editTodo={editTodo} task={task} toggleEditForm={toggle}/>) : (
                <>
                <Checkbox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)}/>
                <ListItemText style={{textDecoration: completed? "line-through": "none"}} >{task}</ListItemText>
                <ListItemSecondaryAction>
                   <IconButton>
                       <DeleteIcon aria-label="Delete" onClick={() => removeTodo(id)}/>
                   </IconButton>
                   <IconButton>
                       <EditIcon aria-label="Edit" onClick={toggle}/>
                   </IconButton>
                </ListItemSecondaryAction>
                </>
                )}
            </ListItem>
        </div>
    );
}

export default Todo;