import { makeStyles  } from "@material-ui/core/styles";

export default makeStyles(theme => ({
    advertPricePaper: {
        backgroundColor: theme.palette.primary.blue,
        padding: 10
    },
    advertPrice:{
        fontWeight: 'bold',
        fontSize: '16px',
        color: 'white'
    }
}))