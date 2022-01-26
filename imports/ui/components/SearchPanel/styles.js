import { makeStyles  } from "@material-ui/core";


export default makeStyles((theme) => ({
    searchPanelContainer: {
      
    },
    searchPanelPaper: {
        width: '60%',
        position: 'relative', 
        top: -200,
        left: 240,
        padding: 10,
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            top: 10,
            left: 0
        }
    },
    searchBox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'row'
        }
    },
    searchInput: {
        marginRight: 5,
        [theme.breakpoints.down('sm')]: {
            marginBottom: 5,
            width: '100%'
        }
    },
    searchBtn: {
        [theme.breakpoints.down('sm')]:{
            width: '100%'
        },
        height: '56px'
    }
}))