import MMKVStorage from 'react-native-mmkv-storage';

const MMKV = new MMKVStorage.Loader().initialize(); // Returns an MMKV Instance

const getString = (key: string) => MMKV.getStringAsync(key);

const setString = (key: string, value: any) => MMKV.setStringAsync(key, value);

const getBool = async (key: string, defaultValue: boolean = false) => {
    const result = await MMKV.getBoolAsync(key);
    if (result !== undefined && result !== null) {
        return result;
    }
    return defaultValue;
};

const setBool = (key: string, value: boolean) => MMKV.setBoolAsync(key, value);

const getMap = (key: string) => MMKV.getMapAsync(key);

const setMap = (key: string, value: any) => MMKV.setMapAsync(key, value);

const removeItem = (key: string) => MMKV.removeItem(key);

export default {
    getString,
    setString,
    getBool,
    setBool,
    getMap,
    setMap,
    removeItem,

    instance: MMKV,
};