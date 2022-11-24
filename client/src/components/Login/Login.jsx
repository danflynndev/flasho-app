import { Box, Button, Container, Paper, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import useToken from "../../hooks/useToken";


export const Login = (props) => {
    const { setToken } = props;
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const value = e.target.value;
        setForm({...form, [e.target.name]: value});
    }

    const handleClickGuest = (e) => {
        e.preventDefault();
        setForm({
            name: 'Guest',
            email: 'guest@gmail.com',
            password: 'guest'
        });
    }
        

    const handleSubmit = async (e) => {
        e.preventDefault();

        const result = await fetch('/user/signin', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
        .then(response => response.json())
        .then(data => {console.log(data, 'from fetch');setToken(data)})
    }

    return (
        <Container component='main'>
            <Paper elevation={5}>
                <form onSubmit={handleSubmit}>
                    <Stack spacing={2}>
                        <TextField
                            id='name'
                            label='First Name'
                            name='name'
                            onChange={handleChange}
                            required
                            value={form.name}
                        />
                        <TextField 
                            id='email'
                            label='Email'
                            name='email'
                            onChange={handleChange}
                            required
                            value={form.email}
                        />
                        <TextField
                            id='password'
                            label='Password'
                            name='password'
                            onChange={handleChange}
                            required
                            value={form.password}
                        />
                        <Button variant='outlined' type='submit'>Sign-In</Button>
                        <Button variant='outlined' onClick={handleClickGuest} value='guest'>Use Guest Credentials</Button>
                    </Stack>
                </form>

            </Paper>
        </Container>
    )
}