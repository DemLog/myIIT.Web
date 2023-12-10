import { MantineSize } from "@mantine/core";
import { MitSize } from "@styles/core";
import { ReactNode } from "react";

export interface KeyboardNumberElement {
    index: number;
    value: ReactNode;
}

export interface KeyboardNumberProps {
    size?: MitSize;
    spacingCol?: MantineSize;
    spacingRow?: MantineSize;
    onChange: React.Dispatch<React.SetStateAction<string>>;
}