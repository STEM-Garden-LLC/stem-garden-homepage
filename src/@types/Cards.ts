
import { TextColorEnum } from "./TypographyProps";
import { LinkTypeEnum } from './Links'

export interface PictureCardProps {
  title: string;
  imageUrl: string;
  cardWidth: string;
  cardHeight: string;
  linkTo?: string;
  linkType?: LinkTypeEnum;
  onClick?: Function;
  textColor?: TextColorEnum;
  bgColor?: string;
}

