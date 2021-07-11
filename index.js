import { Device } from '@twilio/voice-sdk';

let token = 'eyJhbGciOiJIUzI1';

let device = new Device(token, {
    debug: true,
    answerOnBridge: true,
    codecPreferences: ["opus"],
});

