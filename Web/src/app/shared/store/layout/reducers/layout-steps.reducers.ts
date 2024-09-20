import { createReducer, on } from "@ngrx/store";
import { DataUser, ProcessStatus, StepStatus, UserType } from "@Shared/models";
import { StoreActionsLayout } from "../actions";

export interface LayoutStatus {
    stepStatus: StepStatus,
    stepProcessStatus: ProcessStatus
    dataUser: DataUser
}

const initialState: LayoutStatus = {
    dataUser: {
        name: '',
        email: '',
        type: 'company' as UserType
    },
    stepStatus: {
        init: true,
        process: false,
        finaly: false
    },
    stepProcessStatus: ProcessStatus.first
}

export const dataUserReducer = createReducer(
    initialState,
    on(StoreActionsLayout.initStatus, (currentState, action) => ({
        ...currentState,
        dataUser: action.user,
        stepStatus: {
            init: false,
            process: true,
            finaly: false
        },
        stepProcessStatus: ProcessStatus.first,
    }))
);