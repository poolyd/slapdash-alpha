import {
    createUseStyles
} from "react-jss";


export const useAppStyles = createUseStyles({
    scroller: {
        backgroundColor: 'rgba(85, 95, 75, 0.2)',
        minHeight: '20ex',
        maxHeight: '20ex',
        height: '20ex',
        borderRadius: '5px',
        border: '1px solid black',
        overflowY: 'scroll',
        scrollbarWidth: 'thin',
        scrollbarGutter: 'stable both-edges',
        padding: '1ex',
        marginBottom: '1ex'
    },
    listRow: {
        borderRadius: '5px',
        padding: '1px',
        marginBottom: '3px',
        backgroundColor: 'rgba(55, 55, 95, 0.3)',

    },
    lampCard: {
        backgroundColor: 'rgba(155, 155, 195, 0.3)',
        borderRadius: '7pt 7pt 0pt 0pt',
        border: '1pt solid black',
        borderBottom: '0pt',
    }
})