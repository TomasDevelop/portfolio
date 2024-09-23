import { createFeatureSelector, createSelector } from "@ngrx/store";
import { LayoutStatus } from "@Layout/models";
import { layoutStateFeatureKey } from "@Store/layout/reducers";

const layoutStatus = createFeatureSelector<LayoutStatus>(layoutStateFeatureKey);

export const changeState = createSelector(
    layoutStatus,
    (layoutStatus) => layoutStatus.stepStatus
);

export const stepProccess = createSelector(
    layoutStatus,
    (layoutStatus) => layoutStatus.stepProcessStatus
);