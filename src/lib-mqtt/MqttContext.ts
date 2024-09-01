import {
    createContext
} from "react";

export const MqttWebWorker: Worker = new Worker(new URL('mqtt-worker.ts', import.meta.url), { type: 'module' });

export const MqttContext = createContext<Worker>(MqttWebWorker);