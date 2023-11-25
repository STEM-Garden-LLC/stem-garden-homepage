
export enum LinkTypeEnum {
  NotALink = 'NotALink',
  RouterLink = 'RouterLink',
  HashLink = 'HashLink'
}

// type LinkTypeEnum = 'RouterLink' | 'HashLink'


export interface PictureCardProps {
  title: string;
  imageUrl: string;
  cardWidth: string;
  cardHeight: string;
  linkTo?: string;
  linkType?: LinkTypeEnum;
  onClick?: Function;
  textColor?: string;
  bgColor?: string;
}

