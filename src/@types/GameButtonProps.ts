// Font Awesome
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';


export type GameButtonProps = {
  label: string,
  icon?: IconDefinition,
  onClick?: Function,
  linkTo?: string,
  disabled?: boolean,
  selected?: boolean,
  hideLabel?: boolean,
  fullWidth?: boolean,
}