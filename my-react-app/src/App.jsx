import React, {useState} from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';

function MUIToDoList () {
    const [list, setList] = useState([])
    const [inputtext, setInputtext] = useState("")
    const handleSubmit = (evt) => {
        evt.preventDefault()
        setList([...list, inputtext])
        setInputtext("")
    }
    const handleDeleteClick = (i) => {
        list.splice(i, 1)
        setList([...list])
    }

    return (
        <Box>
            <Box>
                <Box component="form" onSubmit={handleSubmit} display="flex" alignContent='center'>
                    <TextField type="text" label="Job" autoFocus="true" value={inputtext} onChange={(evt) => { setInputtext(evt.target.value) }}></TextField>
                    <Button  variant="contained" color="primary" onClick={handleSubmit} type="submit">add</Button>
                </Box>
            </Box>
            <Table>
                <TableBody>
                    {list.map((x, i) => { return (<TableRow key={i}><TableCell>{x}</TableCell><TableCell><Button variant="contained" color="error" onClick={() => handleDeleteClick(i)}>X</Button></TableCell></TableRow>) })}
                </TableBody>
            </Table>
        </Box>
    )
}

export default MUIToDoList