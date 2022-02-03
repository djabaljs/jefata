import { makeStyles } from "@material-ui/core";


export default makeStyles((theme) => ({
    container:{
        marginTop: theme.spacing(10)
    },
    first:{
        display: 'flex',
        [theme.breakpoints.down('sm')]:{
            maxWidth: 'auto'
        }
    },
    otherImgContainer: {
        [theme.breakpoints.down('sm')] :{
            height: 400,
            overflowY: 'scroll' 
        }
    },
    firstOtherImg: {
        width: 60,
        height: 50,
        margin: 3,
        cursor: 'pointer'
    },
    firstMainImg:{
        width: 400,
        height: 500,
        [theme.breakpoints.down('sm')]:{
            width: '80%',
            height: 400
        }
    }
}))