import { ActionType } from "../action-type";

interface addGifData{
    type : ActionType.ADD_DATA_LIST
    payload: Array<string | number>
}

interface updateGifData {
    type: ActionType.UPDATE_DATA_LIST
    payload: Array<string | number>
}

interface selectGif {
    type: ActionType.SELECT_GIF
    payload: number
}

export type Action = addGifData | updateGifData | selectGif