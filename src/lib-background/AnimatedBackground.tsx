import {useEffect, useId} from 'react';
import { visualisation } from "./CoolAnimation.ts";
import {createUseStyles} from "react-jss";

const useStyles = createUseStyles({
    animationDiv: {
        zindex: 0,
    }
});

export const AnimatedBackground = ({ width, height }: { width: number, height: number }) => {
    const id = useId();
    const classes = useStyles();
    useEffect(() => {
        const { cleanup } = visualisation({
            width,
            height,
        });

        return cleanup; // This removes the canvas when the component is rerendered.
    }, [width, height]);

    return <></>;
};