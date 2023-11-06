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


type TypographyProps = {
    text: string;
    textColor?: TextColorEnum;
    gutterBottom: boolean;
}