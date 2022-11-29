import { NativeModules } from 'react-native';
import Reactotron from 'reactotron-react-native';
import sagaPlugin from 'reactotron-redux-saga'

import storage from './storage';

const { scriptURL } = NativeModules.SourceCode;
const scriptHostname = scriptURL.split('://')[1].split(':')[0];

// @ts-ignore
const reactotron = Reactotron.setAsyncStorageHandler({
    getItem: storage.getString,
    setItem: storage.setString,
})
    .configure({
        host: scriptHostname,
        onConnect: () => {
            if (reactotron) {
                reactotron.clear();

                console.log('Reactotron Configured');

                console.log = reactotron.log;
                console.error = reactotron.error;
            }
        },
    })
    .use(sagaPlugin())
    .useReactNative()
    .connect();

export default reactotron;