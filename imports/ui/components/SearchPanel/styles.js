import { makeStyles  } from "@material-ui/core";


export default makeStyles((theme) => ({
    paper:{
        width: '20%'
    },
    searchPanelContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchPanelPaper: {
        width: '54.1%', 
        position: 'relative', 
        top: -200
    }
}))