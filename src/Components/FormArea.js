import { Fab, Paper, TextField } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';

function FormArea({ addNote }) {
    const [note, setNote] = useState({
        title: "",
        content: "",
    }); // takes initialstate as argument and return array of two entries'

    function clickHandler() {
        addNote(note);
        setNote({
            title: "",
            content: "",
        })
    }

    function changeHandler(event) {
        const { name, value } = event.target
        setNote(preValues => {
            return {
                ...preValues,
                [name]: value
            }
        })
    }

    // console.log(note)
    return (
        <Paper style={{ margin: "10px 10%", padding: "25px 50px" }}>
            <form>
                <TextField
                    onChange={changeHandler}
                    name="title"
                    value={note.title}
                    style={{ margin: "10px 5px" }}
                    label="Title"
                    fullWidth autoComplete='off'
                />
                <TextField
                    onChange={changeHandler}
                    name="content"
                    value={note.content}
                    style={{ margin: "10px 5px" }}
                    label="Content"
                    multiline rows={4}
                    fullWidth autoComplete='off'
                />
                <Fab onClick={clickHandler}>
                    <AddIcon />
                </Fab>
            </form>
        </Paper>
    )
}

export default FormArea