import {
    createUseStyles
} from "react-jss";


export const useStyles = createUseStyles({
    noBullet: {
        display: 'flex',
        flexDirection: 'row',
        border: '1pt solid black',
        borderRadius: '0pt 0pt 7pt 7pt',
        justifyContent: 'space-evenly',
        backgroundColor: 'rgba(35, 35, 95, 0.3)',
        minWidth: '30em'
    },
    inlineLi: {
        padding: '1ex'
    }
})