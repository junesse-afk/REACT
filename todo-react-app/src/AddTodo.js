import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";

function AddTodo (props) {
    // 사용자의 입력을 저장할 오브젝트
    const [item, setItem] = useState({title: ""})
    const addItem = props.addItem; // App.js 에서 전달받은 addItem() 함수 저장

    const onButtonClick = () => {
        addItem(item);
        setItem({title: ""});
    }
    const onInputChage = (e) => {
        setItem({title: e.target.value}); 
    }
    const enterKeyEvent = (e) => {
        if (e.key === 'Enter') {
            onButtonClick();
        }
    }

    return (
        <Grid container style={{marginTop: 20}}>
            <Grid xs={11} md={11} item style={{paddingRight: 16}}>
                <TextField 
                    placeholder="추가할 내용 입력"
                    fullWidth
                    onChange={onInputChage}
                    onKeyDown={enterKeyEvent}
                    value={item.title}
                />
            </Grid>
            <Grid xs={1} md={1} item>
                <Button
                    fullWidth style={{height: '100%'}}
                    color="secondary"
                    variant="outlined"
                    onClick={onButtonClick}>
                    +
                </Button>
            </Grid>
        </Grid>
    );
}

export default AddTodo;