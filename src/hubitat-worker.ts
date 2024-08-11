self.onmessage = (event) => {

    const count = Math.floor(Math.random() * (10000 - 999) + 999);

    switch (event.data) {
        case 'start-hubitat-worker':
            console.log('Starting Hubitat Worker');
            break;
        case 'tickle':
            self.postMessage(`That Tickles! ${count}`)
            break;
        default:
            self.postMessage(`${event.data} ${count}`);
    }

};