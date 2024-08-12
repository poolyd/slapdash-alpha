import './App.css'
import {SlapButton} from "./lib-slapdash/ui/SlapButton.tsx";
import SlapButtonBar from "./lib-slapdash/ui/SlapButtonBar";
import  {
    useEffect,
    useState
} from "react";
import {
    useAppStyles
} from "./AppJss.ts";

// TODO: Data Source of Types
interface ButtonActionTypes
{
    uuid: string;
    title: string;
    type?: string;
    meta: ButtonMeta
}

interface ButtonMeta
{
    device: string
    action?: string,

}

const slapButtonProps: ButtonActionTypes[] = [
    {uuid: '00000000-0000-0000-0762-000000000001', title: 'Power', type: 'hubitat-api', meta: { action: 'toggle-power', device: 'lamp'} },
    {uuid: '00000000-0000-0000-0762-000000000005', title: 'Daylight', type: 'hubitat-api', meta: { action: 'set-daylight', device: 'lamp'} },
    {uuid: '00000000-0000-0000-0762-000000000009', title: 'Evening', type: 'hubitat-api', meta: { action: 'set-evening', device: 'lamp'} },
];

const App = () => {

    const [mqtt, setMqtt] = useState<Worker>();
    const [messages, setMessages] = useState<string[]>([]);

    const classes = useAppStyles();

    useEffect(() => {
        const mqttWorker: Worker = new Worker(new URL('./lib-slapdash/worker-context/mqtt-worker.ts', import.meta.url), { type: 'module' });
        setMqtt(mqttWorker);
    }, []);

    useEffect(() => {
        if (mqtt) {
            mqtt!.onmessage = (event: MessageEvent) => {
                console.log(event);
                setMessages([...messages, event.data]);
            };
        }
    }, [mqtt, messages]);

    const slapButtonHandler = (uuid: string): void  => {
        const uuidIndex = slapButtonProps.findIndex(btn => btn.uuid === uuid);
        if (uuidIndex >= 0 && uuidIndex <= slapButtonProps.length - 1) {
            const device = slapButtonProps[uuidIndex];
            mqtt?.postMessage(device.meta.action);
        }
    };

    return (
        <>
            <div>
                <div>Messages: {messages.length}</div>
                <div className={classes.scroller}>
                    { messages.map(m => (<div className={classes.listRow}><pre>{m}</pre></div>)) }
                </div>
                <div className={classes.lampCard}>
                    <div>Lamp</div>
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
