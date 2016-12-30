import { AsyncStorage } from 'react-native';


export async function setItem(key, value){
  try {
    await AsyncStorage.setItem(key, value);
    return true;
  } catch (error){
    console.error(error);
    return false;
  }
}

export async function getItem(key){
  try {
    let result = await AsyncStorage.getItem(key);
    return result;
  } catch (e){
    console.error(e);
    return false;
  }
}

export async function deleteItem(key){
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (e){
    console.error(e);
    return false;
  }
}

export async function mergeItem(key, value){
  try {
    await AsyncStorage.mergeItem(key, value);
    return true;
  } catch (e){
    console.error(e);
    return false;
  }
}

export async function getAllKeys(){
  try{
    let keys = await AsyncStorage.getAllKeys();
    return keys;
  } catch(e){
    console.error(e);
    return false;
  }
}

export async function deleteAll(){
  try {
    let keys = await getAllKeys();
    if(keys && keys.length > 0){
      await AsyncStorage.clear();
    }
    return true;
  } catch (e){
    console.error(e);
    return false;
  }
}

export async function flushRequest(){
  try{
    await AsyncStorage.flushGetRequests();
    return true;
  } catch(e){
    console.error(e);
    return false;
  }
}

export async function getMulti(keys){
  try{
    let results = await AsyncStorage.multiGet(keys);
    return results;

  } catch(e){
    console.error(e);
    return false;
  }
}


export async function setMulti(keyValue){
  try{
    await AsyncStorage.multiSet(keyValue);
    return true;

  } catch(e){
    console.error(e);
    return false;
  }
}

export async function removeMulti(keys){
  try{
    await AsyncStorage.multiRemove(keys);
    return true;
  } catch(e){
    console.error(e);
    return false;
  }
}

export async function mergeMulti(keyValue){
  try{
    await AsyncStorage.multiMerge(keyValue);
    return true;
  } catch(e){
    console.error(e);
    return false;
  }
}

