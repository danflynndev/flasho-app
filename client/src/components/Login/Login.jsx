import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Button, Container, Paper, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";

const initialState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
}

export const Login = (props) => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const { setToken } = props;
    const [isSignup, setIsSignup] = useState(false)
    const [form, setForm] = useState(initialState)

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
        const mode = isSignup ? 'signup' : 'signin';
        await fetch(`/user/${mode}`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
        .then(response => response.json())
        .then(data => setToken(data))
        .then(()=> navigate(state?.path || '/dashboard'))
    }

    const switchMode = () => {
        setForm(initialState)
        setIsSignup((prevIsSignup) =>  !prevIsSignup)
    }

    return (
        <Container
            component='main'
            sx={{
                display: 'flex',
                justifyContent:'center',
                alignItems: 'center',
            }}
        >
            <Paper
                elevation={5}
                sx={{
                    width: 800,
                    padding: 3
                }}
            >
                <form onSubmit={handleSubmit}>
                    <Stack
                        spacing={2}
                        sx={{
                            alignItems: 'center'
                        }}
                    >
                        <Typography component='h1' variant='h4'>{ isSignup ? 'Sign Up' : 'Sign In' }</Typography>
                        { isSignup && (
                            <TextField
                                fullWidth
                                label='First Name'
                                name='name'
                                onChange={handleChange}
                                required
                                type='text'
                                value={form.name}
                            />
                        )}
                        <TextField
                            fullWidth
                            label='Email'
                            name='email'
                            onChange={handleChange}
                            required
                            type='text'
                            value={form.email}
                        />
                        <TextField
                            fullWidth
                            label='Password'
                            name='password'
                            onChange={handleChange}
                            required
                            type='password'
                            value={form.password}
                        />
                        { isSignup && (
                            <TextField
                                fullWidth
                                label='Confirm password'
                                name='confirmPassword'
                                onChange={handleChange}
                                required
                                type='password'
                                value={form.confirmPassword}
                            />
                        )}
                        <Button variant='contained' type='submit' fullWidth>{ isSignup ? 'Sign Up' : 'Sign In' }</Button>
                        <Button onClick={handleClickGuest} value='guest' size='small' fullWidth>Guest Sign in</Button>
                        <Button variant='text' color='primary' onClick={switchMode} size='small'>{ isSignup ? "I already have an account" : "Don't have an account?"  }</Button>
                    </Stack>
                </form>
            </Paper>
        </Container>
    )
}