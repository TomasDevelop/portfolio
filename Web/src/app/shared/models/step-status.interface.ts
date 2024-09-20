export interface StepStatus {
    init: boolean,
    process: boolean,
    finaly: boolean
}

export enum ProcessStatus {
    first = 'first',
    inProgress = 'inProgress',
    completed = 'completed'
  }