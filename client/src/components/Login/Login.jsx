import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Button, Container, Paper, TextField } from "@mui/material";
import { Stack } from "@mui/system";

export const Login = (props) => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const { setToken } = props;
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: ''
    })

    // enables one-click guest login
    useEffect(() => {
        if (form.email === 'guest@gmail.com') {
            const evt = new SubmitEvent('submit');
            handleSubmit(evt)
        }
    }, [form])

    const handleChange = (e) => {
        const value = e.target.value;
        setForm({...form, [e.target.name]: value});
    }

    const handleClickGuest = async (e) => {
        e.preventDefault();
        setForm({
            name: 'Guest',
            email: 'guest@gmail.com',
            password: 'guest'
        });

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('submit fired', form)
        await fetch('/user/signin', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
        .then(response => response.json())
        .then(data => {console.log(data, 'from fetch');setToken(data)})
        .then(()=> navigate(state?.path || '/dashboard'))
    }

    return (
        <Container 
            component='main'
            sx={{
                display: 'flex',
                justifyContent:'center',
                alignItems: 'center',
                height: '80vh',
            }}
        >
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