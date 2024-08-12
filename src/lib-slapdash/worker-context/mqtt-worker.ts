import mqtt from 'mqtt';
const clientId = `slapdash-alpha-${ Math.floor(Math.random() * (999999 - 100000) + 100000)}`;
const clientQueue = `poolyd/${clientId}`;
const client = mqtt.connect('wss://your-mqtt-host:websocket-port-number', {clientId});

self.postMessage('Connecting to the MQTT Broker...');

client.on('connect', () => {
    client.subscribe([clientQueue, '$SYS/#'], (err) => {
        if (!err) {
            self.postMessage(`Subscribed to ${clientQueue} and $SYS/#`);
        }
        else {
            self.postMessage(`Failed to Subscribe to ${clientQueue} and $SYS/#`);
        }
    });
});

client.on('error', (err) => {
    self.postMessage(err.message);
})

client.on('message', (topic, message) => {
    if (topic === clientQueue) {
        self.postMessage(`Slapdash: ${message}`);
    }
    else {
        if (!topic.match(/\$SYS/i)) {
            self.postMessage(`${topic}: {message}`);
        }
    }
});

self.onmessage = (event) => {
    client.publish(clientQueue, event.data);
};