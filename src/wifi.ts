import * as wifi from 'wifi-control';

export function setup() {
    wifi.init({ debug: true });

    wifi.scanForWiFi((err: string, resp: string) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(resp);
        }
    });

    wifi.findInterface();
}

export function connect(){
    let ap = {
        ssid: "HeavyMeta",
        password: "targaryan"
    };

    console.log('connecting');
    let results = wifi.connectToAP(ap, (err: string, resp: string) => {
        if(err){
            console.log('bad');
            console.log(err);
        }
        else
        {
            console.log('yay');
            console.log(resp);
        }
    })
}