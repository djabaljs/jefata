import React from 'react';
import { Box, Button, Card, Grid, Paper, TextField, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './styles';

const LeftPanel = () => {
    const classes = useStyles();

    return(
        <Paper elevation={2} color='primary' my={5} className={classes.paper}>
            <Typography variant='h6' color='textSecondary'>
                Recherche par prix
            </Typography>
            <Box >
            <Grid container spacing={1}>
                   <Grid item xs={12} md={4} >
                        <TextField
                            type='number'
                            variant='outlined'
                            label='Min'
                            size='small'
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField
                            type='number'
                            variant='outlined'
                            label='Max'
                            size='small'
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Button color='primary' variant='contained' size='small' style={{ height: '100%', width: '100%'}}><SearchIcon/></Button>
                    </Grid>
               </Grid>
            </Box>
            <Typography variant='h6' color='textSecondary'>
                Recherche par période
            </Typography>
            <Box display='flex' alignItems='center' justifyContent='space-between' >
                    <Typography variant='body1'>
                        24 heures
                    </Typography>
                    <TextField 
                       type='number'
                       variant='outlined'
                       label='Valeur'
                       size='small'
                    />
            </Box>
            <Box mt={1} display='flex' alignItems='center' justifyContent='space-between' >
                    <Typography variant='body2'>
                        Semaines
                    </Typography>
                    <TextField 
                       type='number'
                       variant='outlined'
                       label='Valeur'
                       size='small'
                    />
            </Box>
            <Box mt={1} display='flex' alignItems='center' justifyContent='space-between' >
                    <Typography variant='body2'>
                        Mois
                    </Typography>
                    <TextField 
                       type='number'
                       variant='outlined'
                       label='Valeur'
                       size='small'
                    />
            </Box>
            <Button  color='primary' variant='contained' size='large' style={{ width: '100%', marginTop: 5}}>
                <SearchIcon/>
            </Button>
        </Paper>
    )
}

export default LeftPanel;