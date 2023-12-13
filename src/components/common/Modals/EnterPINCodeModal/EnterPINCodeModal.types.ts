export interface EnterPINCodeModalProps {
    opened: boolean;
    onClose: () => void;
    callback: (status: boolean) => void;
}