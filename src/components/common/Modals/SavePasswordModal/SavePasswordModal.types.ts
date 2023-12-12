export interface SavePasswordModalProps {
    opened: boolean;
    onClose: () => void;
    callback: (status: boolean) => void;
}