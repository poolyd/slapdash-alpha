import {ReactNode} from "react";
import {useStyles} from "./SlapButtonBarJss.ts";


export function SlapButtonBar({children}: {children: ReactNode[]}) {

    const classes = useStyles();
    let key =-1 ;

    return (
        <div className={classes.noBullet}>{children.map(node => (<div key={key++} className={classes.inlineLi}>{node}</div>))}</div>
        );
}