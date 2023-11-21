
export enum LinkTypeEnum {
  RouterLink = 'RouterLink',
  HashLink = 'HashLink'
}

// type LinkTypeEnum = 'RouterLink' | 'HashLink'


export interface PictureCardProps {
  title: string;
  imgUrl: string;
  cardWidth: string;
  linkTo: string;
  linkType?: LinkTypeEnum;
}

