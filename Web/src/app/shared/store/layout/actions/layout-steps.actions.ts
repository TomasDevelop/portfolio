import { createAction, props } from "@ngrx/store";
import { DataUser, StepStatus } from "@Shared/models";

// --- LAYOUT PAGE ---
// STEP STATUS
export const initStatus = createAction('[Layout Page] Init', props<{user: DataUser}>());
export const processStatus = createAction('[Layout Page] Process', props<{stepStatus: StepStatus }>());
export const finalyStatus = createAction('[Layout Page] Finaly', props<{stepStatus: StepStatus }>());

// STEP STATUS - PROCESS STATUS
export const firstStep = createAction('[Layout Page] First Step Process', props<{stepStatus: StepStatus }>());
export const secondStep = createAction('[Layout Page] Second Step Process', props<{stepStatus: StepStatus }>());
export const thirdStep = createAction('[Layout Page] Third Step Process', props<{stepStatus: StepStatus }>());  