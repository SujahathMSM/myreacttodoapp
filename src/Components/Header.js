import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

function Header() {
    return (
        <div>
            <Paper style={{ padding: "5px", display: "flex" }} square elevation={3}>
                <img style={{ width: '50px' }} src="https://seojunyoo.gallerycdn.vsassets.io/extensions/seojunyoo/react-component-preview/1.0.5/1645227049614/Microsoft.VisualStudio.Services.Icons.Default" alt="" />
                <h1 style={{ margin: "0", fontFamily: 'cursive' }} className='site-name'>Todo App</h1>
            </Paper>
        </div>
    )
}

export default Header