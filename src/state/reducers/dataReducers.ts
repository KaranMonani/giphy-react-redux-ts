import { ActionType } from "../action-type";
import { Action } from "../actions";

const initialState = 0;

const dataReducers = (state: number = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.ADD_DATA_LIST:
            return 0 
        case ActionType.UPDATE_DATA_LIST:
            return 0
        case ActionType.SELECT_GIF:
            return 0;
        default:
            return 0;
    }
}

export default dataReducers