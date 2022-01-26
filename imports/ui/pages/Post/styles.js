import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    postContainer: {
        padding: 10
    },
    postPaper: {
        padding: 10,
        marginBottom: 10
    },
    postForm : {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%'
    },
    postTextField: {
        width: '70%',
        marginTop: 10
    },
    placeIcon: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: '40px'
    },
    postImageUploadingContainer: {
        marginTop: theme.spacing(1),
        [theme.breakpoints.down('sm')] :{
            marginLeft: theme.spacing(6.3),
            marginTop: theme.spacing(1)
        }
    }
}))