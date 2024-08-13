import {
    createContext
} from "react";

export const MqttWorkerContext = createContext(new Worker(new URL('./mqtt-worker.js', import.meta.url), {type: 'module'}));