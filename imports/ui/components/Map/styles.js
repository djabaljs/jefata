import { makeStyles  } from "@material-ui/core";


export default makeStyles((theme) => ({
    mapContainer:{
        height: '50vh',
        width: '100%',
    },
    markerContainer: {
        position: 'absolute',
        transform: 'translate(-50%, -50%)',
        zIndex: 1,
        '&:hover': { zIndex: 2}
    }
}))