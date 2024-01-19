
// Font Awesome
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'


export type ButtonWithIconProps = {
  text: string;
  href: string;
  textColor?: string;
  fontFamily?: string;
  align?: string;
  startIcon?: IconDefinition;
  endIcon?: IconDefinition;
  // iconSize?: string;
}