import mqtt from 'mqtt';
(function(){

    const clientId = `slapdash-alpha-${ Math.floor(Math.random() * (999999 - 100000) + 100000)}`;
    console.info(`Instance: ${clientId}`);
    const clientQueue = `poolyd/${clientId}`;
    const client = mqtt.connect('wss://poolyd.stuntware.net:8883', {clientId});

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
            if (topic.match(/\$SYS/i)) {
                self.postMessage(`${topic}: ${message}`);
            }
        }
    });

    self.onmessage = (event) => {
        if (event.data.match(/^_/)) {
            switch (event.data) {
                case '_clientId': self.postMessage(JSON.stringify({ clientId })); break;
                case '_clientQueue': self.postMessage(JSON.stringify({ clientQueue })); break;
                default: break;
            }
        }
        else client.publish(clientQueue, event.data);
    };
})();