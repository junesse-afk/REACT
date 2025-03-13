import { DeleteOutlined } from "@mui/icons-material";
import { Checkbox, IconButton, InputBase, ListItem, ListItemSecondaryAction, ListItemText } from "@mui/material";
import { useState } from "react";

function Todo (props) {

    const [item, setItem] = useState(props.item);
    const [readOnly, setReadOnly] = useState(true);

    // material-ui 적용 전
    // return (
    //     <div className="Todo">
    //         <input type="checkbox" id={item.id} name={item.id} checked={item.done} />
    //         <label id={item.id}>{item.title}</label>
    //     </div>
    // );

    // InputBase 더블클릭 시 readOnly 해제
    const turnOffReadOnly = () => {
        setReadOnly(false);
    }
    // 수정 후 Enter 입력 시 readOnly 설정
    const turnOnReadOnly = (e) => {
        if (e.key === 'Enter') {
            setReadOnly(true);
            editItem(item);
        }
    }

    const editItem = props.editItem;
    const editEvent = (e) => {
        setItem({...item, title: e.target.value});
        // item.title = e.target.value;
        // editItem(item);
    }
    const checkboxEvent = (e) => {
        // setItem({...item, done: e.target.checked});
        item.done = e.target.checked;
        editItem(item);
    }
    const deleteItem = props.deleteItem;
    const deleteEvent = () => {
        deleteItem(item);
    }
    return (
        <ListItem>
            <Checkbox checked={item.done} onChange={checkboxEvent} />
            <ListItemText>
                <InputBase 
                    inputProps={{"aria-label":"naked", "readOnly": readOnly}}
                    type="text"
                    onDoubleClick={turnOffReadOnly}
                    onKeyDown={turnOnReadOnly}
                    onChange={editEvent}
                    id={item.id}
                    name={item.id}
                    value={item.title}
                    multiline={true}
                    fullWidth={true}
                />
            </ListItemText>

            <ListItemSecondaryAction>
                <IconButton aria-label="할일 삭제" onClick={deleteEvent}>
                    <DeleteOutlined />
                </IconButton>
            </ListItemSecondaryAction>

        </ListItem>
    );
}

export default Todo;
