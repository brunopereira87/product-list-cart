import { createReducer, on } from "@ngrx/store";
import { modalInitialState } from "./modal.state";
import { modalActions } from "./modal.actions";

export const modalReducer = createReducer(
  modalInitialState,
  on(modalActions.openConfirmModal, state => {
    return {
      ...state,
      confirmOrderModal: {
        open: true
      }
    }
  }),

  on(modalActions.closeConfirmModal, state => ({
    ...state,
    confirmOrderModal: {
      open: false
    }
  })),
)