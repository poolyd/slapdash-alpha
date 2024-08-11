import './App.css'
import {SlapButton} from "./lib-slapdash/ui/SlapButton.tsx";
import SlapButtonBar from "./lib-slapdash/ui/SlapButtonBar";
import {
    useEffect,
    useMemo,
    useState
} from "react";

// TODO: Data Source of Types
interface ButtonActionTypes
{
    uuid: string;
    title: string;
    type?: string;
    meta: unknown;
}
const slapButtonProps: ButtonActionTypes[] = [
    {uuid: '00000000-0000-0000-0762-000000000001', title: 'Slap Me!', type: 'hubitat-api', meta: { action: 'toggle'} },
    {uuid: '00000000-0000-0000-0762-000000000005', title: 'Boop.', type: 'mqtt-mesage', meta: { action: 'set-rgb'} },
    {uuid: '00000000-0000-0000-0762-000000000009', title: 'Tickle', type: 'atari-cart', meta: { action: 'phone-home'} },
];

const App = () => {

    const [message, setMessage] = useState('');

    const hubitat: Worker = useMemo(() => new Worker(new URL('./hubitat-worker.ts', import.meta.url)),[]);

    useEffect(() => {
        hubitat.postMessage('start-hubitat-worker');
    }, [hubitat]);

    useEffect(() => {
        hubitat.onmessage = (e: MessageEvent<string>) => {
            setMessage(e.data);
        }
    }, [hubitat]);

    const slapButtonHandler = (uuid: string): void  => {
        let funnyMessage = 'Tickle Tickle!\nThis many times:';
        switch(uuid) {
            case '00000000-0000-0000-0762-000000000001':
                funnyMessage = 'Slap Me!\nRando:';
                break;
            case '00000000-0000-0000-0762-000000000005':
                funnyMessage = 'Archer says, "Boop".\nLucky Number:';
                break;
            default:
        }
        hubitat.postMessage(funnyMessage);
    };

    return (
        <>
            <div>
                <div>
                    <pre>{message}</pre>
                </div>
                <SlapButtonBar>
                    {slapButtonProps.map(act => (
                        <SlapButton
                            title={act.title}
                            uuid={act.uuid}
                            handlerCallback={slapButtonHandler}/>))}
                </SlapButtonBar>
            </div>
        </>
    )
}

export default App
