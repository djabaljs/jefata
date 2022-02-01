import React from 'react';
import { Box, Button, Grid, Paper, Select, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './styles';



const SearchPanel = () => {

    const classes = useStyles();

    return (
        <div className={classes.searchPanelContainer}>
            <Paper elevation={3} className={classes.searchPanelPaper}>
               <Box className={classes.searchBox}>
                        <TextField
                            type='text'
                            variant='outlined'
                            label='Que recherchez-vous?'
                            className={classes.searchInput}
                        />
                        <TextField
                            type='select'
                            variant='outlined'
                            label='Que recherchez-vous?'
                            className={classes.searchInput}
                        />
                        <TextField
                            type='text'
                            variant='outlined'
                            label='Que recherchez-vous?'
                            className={classes.searchInput}
                        />
                      <Button color='primary' variant='contained' size='large' className={classes.searchBtn}><SearchIcon/></Button>
               </Box>
            </Paper>
        </div>
    )
}

export default SearchPanel;