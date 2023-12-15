import { ColorsEnum } from "./Colors";

type AlignEnum = 'center' | 'left' | 'right'

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
    gutterBottom?: boolean;
}