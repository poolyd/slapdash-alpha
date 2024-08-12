import React from "react";

interface SlapButtonProps {
    type?: string;
    title: string;
    uuid: string;
    handlerCallback: (uuid: string) => void;
}

export const SlapButton = ({title, uuid, handlerCallback, type}: SlapButtonProps) => {
    const handleButtonClick = (e: React.MouseEvent<HTMLElement>): void => {
        e.preventDefault();
        handlerCallback(uuid);
    };
    if (type === 'link') return (
        <a key={uuid} onClick={handleButtonClick}>{title}</a>
    );
    return (<button key={uuid} onClick={handleButtonClick}>{title}</button> );
}