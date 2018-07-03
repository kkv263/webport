import { CHANGE_PANEL } from './types';

export const changePanel  = (value) => dispatch => {
   dispatch({
     type: CHANGE_PANEL,
     payload: value
   });
}