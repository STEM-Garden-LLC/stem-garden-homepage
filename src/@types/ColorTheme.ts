// import { LinkTypeEnum } from './Links'

export enum ColorThemeEnum {
  light = 'light',
  dark = 'dark'
} 


export type ColorThemeContextType = {
  colorTheme: ColorThemeEnum,
  setColorTheme: React.Dispatch<React.SetStateAction<ColorThemeEnum>>
}