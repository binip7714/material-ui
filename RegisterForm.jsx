import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
    Alert,
    AlertTitle,
    Button,
    FormControl,
    Grid,
    IconButton,
    Input,
    InputAdornment,
    InputLabel,
    Stack,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const RegisterForm = ({ isRegistered, setIsRegistered }) => {
    const [userInfo, setUserInfo] = useState({
        username: '',
        password: '',
        confirmPassword: '',
    });
    const [hidden, setHidden] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [emptyError, setEmptyError] = useState(false);

    const { username, password, confirmPassword } = userInfo;

    // user handler function
    const handleUser = ({ target: { value } }) => {
        setUserInfo((prev) => {
            console.log(prev);
            return { ...prev, username: value };
        });
    };

    // password handler function
    const handlePassword = ({ target: { value } }) => {
        setUserInfo((prev) => {
            console.log(prev);
            return { ...prev, password: value };
        });
    };

    // confirm password handler function
    const handleConfirmPassword = ({ target: { value } }) => {
        setUserInfo((prev) => {
            console.log(prev);
            return { ...prev, confirmPassword: value };
        });
    };

    // register handle function
    const handleRegister = (e) => {
        e.preventDefault();
        if (username !== '' && password !== '') {
            if (password === confirmPassword) {
                setIsRegistered(true);
                setEmptyError(false);
                setPasswordError(false);
            } else {
                setPasswordError(true);
            }
        } else {
            setEmptyError(true);
        }
    };

    console.log(userInfo, 'userinfo');
    return (
        <>
            <Box
                component="form"
                py={5}
                sx={{
                    boxShadow: '2px 4px 20px -10px rgba(0,0,0,0.3)',
                    margin: '5rem auto',
                    width: '70%',
                }}
            >
                <Grid>
                    <FormControl sx={{ width: '20rem' }} variant="standard">
                        <InputLabel>Username:</InputLabel>
                        <Input
                            type="text"
                            required
                            value={username}
                            onChange={handleUser}
                        />
                    </FormControl>
                    {emptyError && username === '' && (
                        <Stack sx={{ width: '20rem', margin: 'auto' }}>
                            <Alert severity="error">
                                Field must not be empty!
                            </Alert>
                        </Stack>
                    )}
                </Grid>
                <Grid>
                    <FormControl sx={{ width: '20rem' }} variant="standard">
                        <InputLabel>Password:</InputLabel>
                        <Input
                            type="password"
                            value={password}
                            onChange={handlePassword}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton>
                                        {hidden ? (
                                            <VisibilityOffIcon />
                                        ) : (
                                            <VisibilityIcon />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    {emptyError && password === '' && (
                        <Stack sx={{ width: '20rem', margin: 'auto' }}>
                            <Alert severity="error">
                                Field must not be empty!
                            </Alert>
                        </Stack>
                    )}
                </Grid>
                <Grid>
                    <FormControl sx={{ width: '20rem' }} variant="standard">
                        <InputLabel>Confrim Password:</InputLabel>
                        <Input
                            type="password"
                            value={confirmPassword}
                            onChange={handleConfirmPassword}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton>
                                        {hidden ? (
                                            <VisibilityOffIcon />
                                        ) : (
                                            <VisibilityIcon />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    {emptyError && confirmPassword === '' && (
                        <Stack sx={{ width: '20rem', margin: 'auto' }}>
                            <Alert severity="error">
                                Field must not be empty!
                            </Alert>
                        </Stack>
                    )}
                    {passwordError && password !== confirmPassword && (
                        <Stack sx={{ width: '20rem', margin: 'auto' }}>
                            <Alert severity="error">
                                The two passwords do not match!
                            </Alert>
                        </Stack>
                    )}
                </Grid>
                <Grid mt={2}>
                    <Button
                        onClick={handleRegister}
                        variant="contained"
                        color="warning"
                    >
                        Register
                    </Button>
                </Grid>
                <Grid mt={3}>
                    {isRegistered ? (
                        <Stack sx={{ width: '20rem', margin: 'auto' }}>
                            <Alert severity="success">
                                <AlertTitle>Congratulations</AlertTitle>
                                {`Congratulations on registering ${username}`}
                            </Alert>
                        </Stack>
                    ) : (
                        ''
                    )}
                </Grid>
            </Box>
        </>
    );
};

export default RegisterForm;