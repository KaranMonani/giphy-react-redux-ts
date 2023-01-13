import { ActionType } from "../action-type";
import { Action } from "../actions";
import { Dispatch } from "redux";

export const addGifData = (data: Array<string | number>) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.ADD_DATA_LIST,
            payload: data
        })
    }
}

export const updateGifData = (data: Array<string | number>) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.UPDATE_DATA_LIST,
            payload: data
        })
    }
}

export const selectGif = (id: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SELECT_GIF,
            payload: id
        })
    }
}