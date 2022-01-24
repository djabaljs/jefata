import { Button, Grid, Paper, Select, TextField } from '@material-ui/core';
import React from 'react';

import useStyles from './styles';



const SearchPanel = () => {

    const classes = useStyles();

    return (
        <div className={classes.searchPanelContainer}>
            <Paper elevation={3} style={{ position: 'relative', top: -200, padding: 10}}>
               <Grid container spacing={1}>
                   <Grid item xs={12} sm={3}>
                        <TextField
                            type='text'
                            variant='outlined'
                            label='Que recherchez-vous?'
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <TextField
                            type='select'
                            variant='outlined'
                            label='Que recherchez-vous?'
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <TextField
                            type='text'
                            variant='outlined'
                            label='Que recherchez-vous?'
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <Button color='primary' variant='contained' size='large' style={{ height: '100%', width: '100%' }}>Rechercher</Button>
                    </Grid>
               </Grid>
            </Paper>
        </div>
    )
}

export default SearchPanel;