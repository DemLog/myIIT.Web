import { MitSize } from "@styles/core";

export interface InputPINCodeProps {
    size?: MitSize;
    value: string;
    onChange: React.Dispatch<React.SetStateAction<string>>;
}