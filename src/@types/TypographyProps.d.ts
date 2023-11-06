// enum TextColorEnum {
//     black = 'black',
//     white = 'white'
// }

// interface TypographyProps {
//     text: string;
//     textColor?: TextColorEnum;
//     gutterBottom: boolean;
// }

type TextColorEnum = 'black' | 'white'

type AlignEnum = 'center' | 'left'


type TypographyProps = {
    text: string;
    textColor?: TextColorEnum;
    align?: AlignEnum;
    gutterBottom: boolean;
}