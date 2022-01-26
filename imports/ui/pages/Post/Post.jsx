import { Box, Container, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@material-ui/core';
import React from 'react'

import useStyles from './styles';

const Post = () => {

    const classes = useStyles();

    return (
        <Container maxWidth='sm' className={classes.postContainer}>
                <Paper elevation={3} classes={classes.postPaper}>
                    <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column' pt={5}>
                        <Typography variant='h5' color='textSecondary'>
                            Créer votre annonce gratuitement
                        </Typography>
                         <TextField 
                            type='text'
                            variant='outlined'
                            label='Nom'
                            className={classes.postTextField}
                        />
                        <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Age</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Age"
                            variant='outlined'
                            className={classes.postInput}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                        </FormControl>
                         <TextField 
                            type='text'
                            variant='outlined'
                            label='Nom'
                            className={classes.postTextField}
                        />
                    </Box>
                </Paper>
        </Container>
    )
}
export default Post;