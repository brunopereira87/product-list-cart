export type ModalState = {
  confirmOrderModal: {
    open: boolean
  };
}

export const initModalState: ModalState = {
  confirmOrderModal: {
    open: false
  }
}