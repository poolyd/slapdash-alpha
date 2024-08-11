import {ReactNode} from "react";
import {useStyles} from "./SlapButtonBarJss.ts";


export function SlapButtonBar({children}: {children: ReactNode[]}) {

    const classes = useStyles();

    return (
        <div className={classes.noBullet}>{children.map(node => (<div className={classes.inlineLi}>{node}</div>))}</div>
        );
}