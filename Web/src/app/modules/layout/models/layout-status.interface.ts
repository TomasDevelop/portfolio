import { DataUser, ProcessStatus, StepStatus } from "@Shared/models"

export interface LayoutStatus {
    stepStatus: StepStatus,
    stepProcessStatus: ProcessStatus
    dataUser: DataUser
}