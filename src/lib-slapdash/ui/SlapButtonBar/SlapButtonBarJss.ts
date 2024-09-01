import {
    createUseStyles
} from "react-jss";


export const useStyles = createUseStyles({
    noBullet: {

        // Glassmorphism
        backgroundColor: 'rgba( 255, 255, 255, 0.15 )',
        boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
        backdropFilter: 'blur( 4px )',
        border: '1px solid rgba( 255, 255, 255, 0.18 )',
        //

        display: 'flex',
        flexDirection: 'row',
        borderRadius: '0pt 0pt 7pt 7pt',
        justifyContent: 'space-evenly',
        minWidth: '30em'
    },
    inlineLi: {
        padding: '1ex'
    }
})