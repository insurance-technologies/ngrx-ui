import { DialogActions } from './dialog-actions';
import * as Actions from './dialog-actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MatDialogConfig } from '@angular/material';

export interface State {   
   isDialogOpen: boolean;
   dialogInfo: DialogInfo;
   dialogResult: any;
   dialogError: any;
}

export interface DialogInfo{
    dialogName: string;
    config: MatDialogConfig;
    dialogUniqueId: string;
}

const initialState: State = {
    isDialogOpen: false,
    dialogInfo: null,
    dialogResult: null,
    dialogError: null
}

export function reducer(state = initialState, action: DialogActions) : State
{
    switch(action.type)
    {
        case Actions.ActionTypes.OpenDialog:
          if(!state.isDialogOpen)
            return { ...state, isDialogOpen: true, dialogInfo: { dialogName: action.name, config: action.configuration, dialogUniqueId: action.uniqueId } }
          else
            return state;

        case Actions.ActionTypes.CloseDialogWithResult:
          if(state.isDialogOpen)
            return { ...state, isDialogOpen: false, dialogInfo: null, dialogResult: action.result }
          else
            return state;

        case Actions.ActionTypes.CloseDialogWithError:
          if(state.isDialogOpen)
            return { ...state, isDialogOpen: false, dialogInfo: null, dialogError: action.error }
          else
            return state;
    }
}

//selectors
const isDialogOpen = (state: State) => state.isDialogOpen;
const dialogInfo = (state: State) => state.dialogInfo;
const dialogResult = (state: State) => state.dialogResult;
const dialogError = (state: State) => state.dialogError;

export const getDialogState = createFeatureSelector('dialogState');

export const getIsDialogOpen = createSelector(getDialogState, isDialogOpen);
export const getDialogInfo = createSelector(getDialogState, dialogInfo);
export const getDialogResult = createSelector(getDialogState, dialogResult);
export const getDialogError = createSelector(getDialogState, dialogError);