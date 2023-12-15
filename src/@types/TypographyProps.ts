
// TODO
// Phase out the following TextColorEnum in 
// favor of the single ColorsEnum.
export enum TextColorEnum {
    black = 'black',
    white = 'white',
    green = '#2e6b12'
}



type AlignEnum = 'center' | 'left' | 'right'

export enum FontWeightEnum {
    light = '300',
    normal = '400',
    bold = '500',
    extraBold = '700'
}

export interface TypographyProps {
    text: string;
    textColor?: TextColorEnum;
    align?: AlignEnum;
    fontWeight?: FontWeightEnum;
    gutterBottom?: boolean;
}