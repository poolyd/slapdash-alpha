import {
    useContext,
    useEffect,
    useState
} from "react";
import {
    useAppStyles
} from "../AppJss.ts";
import SlapButtonBar
    from "../lib-slapdash/ui/SlapButtonBar";
import {
    SlapButton
} from "../lib-slapdash/ui/SlapButton.tsx";
import {MqttContext} from "./MqttContext.ts";

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
    {uuid: '00000000-0000-0000-0762-000000000001', title: 'Toggle Power', type: 'hubitat-api', meta: { action: 'toggle-power', device: 'gonzo'} },
    {uuid: '00000000-0000-0000-0762-000000000005', title: 'MQTT ClientId', type: 'hubitat-api', meta: { action: '_clientId', device: 'mqttClient'} },
    {uuid: '00000000-0000-0000-0762-000000000009', title: 'MQTT ClientQueue', type: 'hubitat-api', meta: { action: '_clientQueue', device: 'mqttClient'} },
];
export const MqttMonitor = () => {

    const mqtt = useContext<Worker>(MqttContext);

    const [messages, setMessages] = useState<string[]>([]);

    const classes = useAppStyles();

    useEffect(() => {
    }, []);

    useEffect(() => {
        if (mqtt) {
            mqtt!.onmessage = (event: MessageEvent) => {
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
                    { messages.map((m, idx) => (<div key={idx} className={classes.listRow}>{m}</div>)) }
                </div>
                <div className={classes.lampCard}>
                    <div>Actions</div>
                </div>
                <SlapButtonBar>
                    {slapButtonProps.map(act => (
                        <SlapButton
                            key={act.uuid}
                            title={act.title}
                            uuid={act.uuid}
                            handlerCallback={slapButtonHandler}/>))}
                </SlapButtonBar>
            </div>
        </>
    )
};