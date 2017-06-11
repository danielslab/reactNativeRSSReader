"use strict";
import { store } from '../assets/Services/reduxCreate.js';
import { INCREMENT_SKIP, DECREMENT_SKIP, RESET_SKIP} from '../assets/actions.js';

describe("Should paginate ", () => {
    
  it("from 0 to 10", () => {
    const skip = 100;
    store.dispatch({type: INCREMENT_SKIP, payload: skip});
    const state = store.getState();
    expect(state.reduceSkip.skip).toBe(skip);
  })

  it("decrement from 10 to 0", () => {
    const skip = 0;
    store.dispatch({type: DECREMENT_SKIP, payload: skip});
    const state = store.getState();
    expect(state.reduceSkip.skip).toBe(skip);
  })

  it("reset to 0", () => {
    store.dispatch({type: RESET_SKIP});
    const state = store.getState();
    expect(state.reduceSkip.skip).toBe(0);
  })

});
