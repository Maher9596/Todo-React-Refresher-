import { Checkbox, IconButton, ListItem, ListItemSecondaryAction, ListItemText } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

function Todo({task, completed, removeTodo, id, toggleTodo}) {
    return (
        <div>
            <ListItem>
                <Checkbox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)}/>
                <ListItemText style={{textDecoration: completed? "line-through": "none"}} >{task}</ListItemText>
                <ListItemSecondaryAction>
                   <IconButton>
                       <DeleteIcon aria-label="Delete" onClick={() => removeTodo(id)}/>
                   </IconButton>
                   <IconButton>
                       <EditIcon aria-label="Edit" />
                   </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        </div>
    );
}

export default Todo;