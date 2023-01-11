import { AppBar, Grid, TextField, Toolbar, Typography } from '@mui/material';
import React from 'react';
import NoteIcon from '@mui/icons-material/Note';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { Container } from '@mui/system';

const Header = () => {
    return (
        <>
            <AppBar position="fixed">
                <Toolbar>
                    <Container>
                        <Grid
                            container
                            justifyContent="space-around"
                            alignItems="center"
                        >
                            <Grid item>
                                <Grid container spacing={2}>
                                    <Grid item>
                                        <NoteIcon />
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="h6">
                                            Posts
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item ml={2}>
                                <Grid container spacing={2}>
                                    <Grid item>
                                        <Typography
                                            variant="subtitle1"
                                            component={Link}
                                            to="/"
                                            underline="hover"
                                            color="#fff"
                                        >
                                            Home
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography
                                            variant="subtitle1"
                                            component={Link}
                                            to="about-us"
                                            color="#fff"
                                        >
                                            About
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item p={0}>
                                <TextField
                                    variant="standard"
                                    color="warning"
                                    size="small"
                                    placeholder="Search"
                                />
                                <SearchIcon />
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Header;