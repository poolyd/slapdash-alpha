import {
    createUseStyles
} from "react-jss";


export const useAppStyles = createUseStyles({
    scroller: {
        // Glassmorphism
        backgroundColor: 'rgba( 255, 255, 255, 0.25 )',
        boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
        backdropFilter: 'blur( 4px )',
        borderRadius: '7px',
        border: '1px solid rgba( 255, 255, 255, 0.18 )',
        //


        minHeight: '69vh',
        maxHeight: '69vh',
        height: '69vh',
        minWidth: '69vw',
        maxWidth: '69vw',
        width: '69vw',
        overflowY: 'scroll',
        scrollbarWidth: 'thin',
        scrollbarGutter: 'stable both-edges',
        scrollbarColor: 'rgba( 255, 255, 255, 0.5 ) rgba( 255, 255, 255, 0.1 )',

        padding: '1ex',
        marginBottom: '1ex'
    },
    listRow: {
        fontFamily: 'OCR A, monospace',
        color: 'rgba( 255, 255, 255, 0.8 )',
        textShadow: '0px 0px 5px rgba( 75, 75, 75, 0.7 )',
        // Glassmorphism
        backgroundColor: 'rgba( 255, 255, 255, 0.01)',
        boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
        backdropFilter: 'blur( 4px )',
        borderRadius: '7px',
        border: '1px solid rgba( 255, 255, 255, 0.18 )',
        //
        padding: '1ex',
        marginBottom: '7px',

    },
    lampCard: {
        fontSize: 'large',
        // Glassmorphism
        backgroundColor: 'rgba( 255, 255, 255, 0.15 )',
        boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
        backdropFilter: 'blur( 4px )',
        border: '1px solid rgba( 255, 255, 255, 0.18 )',
        //
        borderRadius: '7pt 7pt 0pt 0pt',
        borderBottom: '0pt',
    }
})