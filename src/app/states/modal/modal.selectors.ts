import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ModalState } from "./modal.state";

const getModalState = createFeatureSelector<ModalState>("confirmOrderModal");

export const getConfirmOrderModalIsOpen = createSelector(
  getModalState,
  (state: ModalState) => {
    return state.confirmOrderModal.open
  }
)