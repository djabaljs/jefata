import { makeStyles  } from "@material-ui/core";


export default makeStyles((theme) => ({
    paper:{
        padding: theme.spacing(1),
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    }
}))