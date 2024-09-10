import './App.css'
import { MqttContext, MqttWebWorker } from './lib-mqtt/MqttContext.ts';
import { MqttMonitor } from "./lib-mqtt/MqttMonitor.tsx";
import {AnimatedBackground} from "./lib-background/AnimatedBackground.tsx";
import {useEffect, useState} from "react";

const App = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            setWindowHeight(window.innerHeight);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    },[]);



    return (<>
        <MqttContext.Provider value={MqttWebWorker}>
            <MqttMonitor/>
        </MqttContext.Provider>
        <AnimatedBackground width={windowWidth} height={windowHeight}/>
    </>)
}

export default App
