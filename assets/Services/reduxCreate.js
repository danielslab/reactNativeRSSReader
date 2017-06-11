import { createStore, combineReducers } from 'redux';
import * as Actions from '../actions.js';

var initialState = {item: null, network_update: false, rss: {}, errors: []};

function reduceSkip(state = {skip: 0}, action){
  if(typeof state === 'undefined') return initialState;
  switch(action.type){
    case Actions.RESET_SKIP:
      state.skip = 0;
      return Object.assign({}, state);
    case Actions.INCREMENT_SKIP:
      state.skip = action.payload;
      return Object.assign({}, state);
    case Actions.DECREMENT_SKIP:
      if(state.skip != action.payload){
        state.skip = action.payload;
        return Object.assign({}, state);
      } else {
        return state;
      }
    default:
      return state;
  }
}

function reduceItems(state = {
	item: null, 
	network_update: false, 
	rss: {}, 
	errors: []}, action){
  if(typeof state === 'undefined') return initialState;
  switch (action.type) {
    case Actions.UPDATING_ITEMS:
      state.network_update = true;
      return Object.assign({}, state);
    case Actions.UPDATE_RSS:
      state.rss = action.payload;
      state.network_update = false;
      return Object.assign({}, state);
    case Actions.UPDATE_ITEMS_FAILED:
      console.error(action.payload);
      state.errors.push(action.payload);
      return Object.assign({}, state);
    case Actions.REMOVE_ITEM:
      state.item = null;
      return Object.assign({}, state);
    case Actions.SHOW_ITEM:
      state.item = action.payload;
      return Object.assign({}, state);
    case Actions.REMOVE_ERROR:
      state.errors = state.errors.filter((e) =>{ if(e != action.payload) return e; });
      return Object.assign({}, state);
    default:
      return state;
  }
}

function reduceDisplay(state = { menu: false, section: "" }, action){
  if(typeof state === 'undefined') return initialState;
  switch (action.type) {
    case Actions.TOGGLE_MODAL:
      if(action.name == state.section){
        state.menu = !state.menu;
        state.section = action.name;
      }
      else{
        state.menu = true;
        state.section = action.name;
      }
      return Object.assign({}, state);
    default:
      return state;
  }
}

function toStorage(state = {urls: []}, action){
  switch(action.type){
    case Actions.ADD_FEED:
      state.urls.push(action.url);
      return Object.assign({}, state);
  }
}

let allReducers = combineReducers({ reduceSkip, reduceItems, reduceDisplay })

export const store = createStore(allReducers);
