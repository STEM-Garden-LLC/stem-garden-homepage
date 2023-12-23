
import { ColorsEnum } from "./Colors";

import { LinkTypeEnum } from './Links'

import { PuzzleTag } from "@data/puzzlesData";

export interface PictureCardProps {
  title: string;
  imageUrl: string;
  linkTo?: string;
  linkType?: LinkTypeEnum;
  onClick?: Function;
  textColor?: ColorsEnum;
  bgColor?: string;
  cardWidth: string;
  cardHeight: string;
}


export interface PuzzleCardProps {
  title: string;
  tags: PuzzleTag[];
  imageUrl: string;
  googleDriveFileId: string;
  source?: string;
}

export interface GameCardProps {
  title: string;
  linkTo: string;
  imageUrl: string;
  description: string[];
  disabled?: boolean;
}
