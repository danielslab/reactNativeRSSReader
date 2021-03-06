/**
* const strings to use for dispatch types
*/

export const UPDATE_RSS = "UPDATE_RSS";
export const UPDATE_ITEMS = "UPDATE_ITEMS";
export const UPDATE_ITEMS_FAILED = "UPDATE_ITEMS_FAILED";
export const UPDATING_ITEMS = "UPDATING_ITEMS";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const SHOW_ITEM = "SHOW_ITEM";
export const REMOVE_ERROR = "REMOVE_ERROR";
export const TOGGLE_MODAL = "TOGGLE_MODAL";
export const ADD_FEED = "ADD_FEED";
export const UPDATE_SKIP = "UPDATE_SKIP";
export const INCREMENT_SKIP = "INCREMENT_SKIP";
export const DECREMENT_SKIP = "DECREMENT_SKIP";
export const RESET_SKIP = "RESET_SKIP";
export const SWITCH_MAIN = "SWITCH_MAIN";
/**
 * creates an RSS update object for the dispatcher
 * @param {JSON} payload
 */
export const RSS_UPDATE = (payload) => {
  return {
    type: UPDATE_RSS,
    payload: payload
  }
}

/**
 * selects an item from the list of latest news stories
 * @param {Object} item
 */
export const select_item = (item) => {
  return {
    type: SHOW_ITEM,
    payload: item
  }
}
