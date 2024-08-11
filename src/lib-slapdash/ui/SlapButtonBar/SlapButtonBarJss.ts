import {
    createUseStyles
} from "react-jss";


export const useStyles = createUseStyles({
    noBullet: {
        display: 'flex',
        flexDirection: 'row',
        border: '1px solid black',
        borderRadius: '5px',
        justifyContent: 'space-evenly',
        backgroundColor: 'rgba(35, 35, 95, 0.3)'
    },
    inlineLi: {
        padding: '1ex'
    }
})