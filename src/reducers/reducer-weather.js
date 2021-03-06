import { FETCH_WEATHER } from '../actions';

export default (state = [], action) => {
	// console.log('Action received', action);
	switch(action.type) {
		case FETCH_WEATHER:
			// return state.concat([action.payload.data]);
			return [ action.payload.data, ...state ];
		default:
			return state;
	}
}
