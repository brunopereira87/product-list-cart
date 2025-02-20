import { createAction } from "@ngrx/store"

const openConfirmModal = createAction(
  '[Modal] Open Corfirm Modal'
)

const closeConfirmModal = createAction(
  '[Modal] Close Corfirm Modal'
)

export const modalActions = {
  openConfirmModal,
  closeConfirmModal
}