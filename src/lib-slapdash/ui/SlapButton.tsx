import React, { useState } from "react";

export function SlapButton({title, identity, handlerCallback}: {title: string, identity: string, handlerCallback: (title: string) => void}) {
    const handleButtonClick = (e: React.MouseEvent<HTMLElement>): void => {
        e.preventDefault();
        handlerCallback(buttonIdentity);
    };
    const [buttonIdentity] = useState(identity);
    return (
        <>
            <button onClick={handleButtonClick}>{title}</button>
        </>
    );
}