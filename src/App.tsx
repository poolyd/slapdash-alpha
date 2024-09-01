import './App.css'
import { MqttContext, MqttWebWorker } from './lib-mqtt/MqttContext.ts';
import { MqttMonitor } from "./lib-mqtt/MqttMonitor.tsx";

const App = () => {
    return (<>
        <MqttContext.Provider value={MqttWebWorker}>
            <MqttMonitor/>
        </MqttContext.Provider>
    </>)
}

export default App
