import { CHANGE_PANEL } from '../actions/types';

const initialState = {
  panel: -1
};

export default function(state = initialState, action) {
  switch(action.type){
    case CHANGE_PANEL:
      return {
        ...state,
        panel: action.payload
      };
    default:
      return state;
  }
}