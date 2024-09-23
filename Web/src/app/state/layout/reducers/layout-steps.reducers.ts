import { createReducer, on } from "@ngrx/store";
import { ProcessStatus } from "@Shared/models";
import { UserType } from "@Shared/models";
import { LayoutStatus } from "@Layout/models";
import { initStatus, processStatus } from "@Store/layout/actions";


// LAYOUT
export const layoutStateFeatureKey = 'layoutState'

export const initialState: LayoutStatus = {
    stepStatus: {
        init: true,
        process: false,
        finaly: false
    },
    stepProcessStatus: ProcessStatus.first,
    dataUser: {
        name: '',
        email: '',
        type: 'company' as UserType
    },
}


export const layoutReducer = createReducer(
    initialState,
    on(initStatus, (currentState, { user }) => ({
        ...currentState,
        dataUser: user,
        stepStatus: {
            init: false,
            process: true,
            finaly: false
        },
        stepProcessStatus: ProcessStatus.first,
    })),
    on(processStatus, (currentState, {stepProccessStatus}) => ({
         ...currentState, stepProccessStatus: stepProccessStatus
        }))
);