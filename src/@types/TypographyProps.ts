import { ColorsEnum } from "./Colors";

export enum AlignEnum {
    center = 'center',
    left = 'left',
    right = 'right'
}

export enum FontWeightEnum {
    light = '300',
    normal = '400',
    bold = '500',
    extraBold = '700'
}

export interface TypographyProps {
    text: string;
    textColor?: ColorsEnum;
    align?: AlignEnum;
    fontWeight?: FontWeightEnum;
    textWrap?: boolean;
    gutterBottom?: boolean;
}