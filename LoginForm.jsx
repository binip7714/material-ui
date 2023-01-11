import {
    Alert,
    Button,
    FormControl,
    Grid,
    Input,
    InputLabel,
    Stack,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const LoginForm = ({ setIsLoggedIn }) => {
    const [userDetail, setUserDetail] = useState({
        username: '',
        password: '',
    });

    const [userData, setuserData] = useState({
        username: 'Sam',
        password: '1234',
    });

    const [error, setError] = useState(false);

    const { username, password } = userDetail;

    // user handler
    const userHandle = ({ target: { value } }) => {
        setUserDetail((prev) => {
            console.log(prev);
            return { ...prev, username: value };
        });
    };

    // password handle
    const passwordHandle = ({ target: { value } }) => {
        setUserDetail((prev) => {
            console.log(prev);
            return { ...prev, password: value };
        });
    };

    // handle login
    const handleLogin = (e) => {
        e.preventDefault();
        if (username === userData.username && password === userData.password) {
            setIsLoggedIn(true);
            setError(false);
        } else {
            setError(true);
            setIsLoggedIn(false);
        }
    };

    return (
        <>
            <Box
                component="form"
                sx={{
                    margin: '5rem auto',
                    padding: '5rem',
                }}
            >
                <Grid>
                    <FormControl sx={{ width: '20rem' }} variant="standard">
                        <InputLabel>Username:</InputLabel>
                        <Input
                            type="text"
                            value={username}
                            onChange={userHandle}
                        />
                    </FormControl>
                </Grid>
                <Grid>
                    <FormControl sx={{ width: '20rem' }} variant="standard">
                        <InputLabel>Password:</InputLabel>
                        <Input
                            type="password"
                            value={password}
                            onChange={passwordHandle}
                        />
                    </FormControl>
                </Grid>
                <Grid mt={2}>
                    <Button
                        onClick={handleLogin}
                        variant="contained"
                        color="secondary"
                    >
                        Login
                    </Button>
                </Grid>

                <Grid>
                    {error &&
                        username !== userData.username &&
                        password !== userData.password && (
                            <Stack>
                                <Alert>
                                    No such username or password is wrong
                                </Alert>
                            </Stack>
                        )}
                </Grid>
            </Box>
        </>
    );
};

export default LoginForm;