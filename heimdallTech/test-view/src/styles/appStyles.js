import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles (theme => ({
    body: {
        height: '100vh',
        background: 'ghostwhite'
    },
    books: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '90%',
        height: theme.spacing (5),
        marginBottom: theme.spacing (4),
        padding: theme.spacing (4),
        background: 'lightBlue',
        listStyle: 'none'
    },
    buttons: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: theme.spacing (3),
        color: 'white',
        background: 'blue',
        width: theme.spacing (12),
        height: theme.spacing (5),
        borderRadius: theme.spacing (1),
        "&:hover": {
            background: 'white',
            color: 'blue', 
            transition: '0.3s ease-in-out',
            cursor: 'pointer'
        }
    },
    disabledButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: theme.spacing (3),
        color: 'white',
        background: 'grey',
        width: theme.spacing (12),
        height: theme.spacing (5),
        borderRadius: theme.spacing (1),
        "&:hover": {
            cursor: 'default'
        }
    }
}))

export default useStyles