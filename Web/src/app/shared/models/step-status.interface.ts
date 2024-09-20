export interface StepStatus {
    init: boolean,
    process: boolean,
    finaly: boolean
}

export enum ProcessStatus {
    First = 'first',
    InProgress = 'inProgress',
    Completed = 'completed'
  }