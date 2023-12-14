import { useState, useEffect } from 'react'

import { ColorThemeEnum } from '../@types/ColorTheme'

// May want to change these hooks to use the Client Height property of the root <html> element.  
// I think that the window.innerHeight currently used is counting height I don't actually want. 
// document.documentElement.clientWidth & document.documentElement.clientHeight
export default function useColorTheme() {
    const mediaQueryPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
    );

    const [colorTheme, setColorTheme] = useState(mediaQueryPrefersDark.matches ? ColorThemeEnum.dark : ColorThemeEnum.light)

    const updateColorTheme = (event: any) => {
        event.matches ? setColorTheme(ColorThemeEnum.dark) : setColorTheme(ColorThemeEnum.light);
    }

    useEffect(() => {
        if (mediaQueryPrefersDark.matches) {
            setColorTheme(ColorThemeEnum.dark);
        }

        // This callback will fire if the preferred color scheme changes without a reload
        mediaQueryPrefersDark.addEventListener("changeColorTheme", (event) => updateColorTheme(event))
        
        return () => mediaQueryPrefersDark.removeEventListener('changeColorTheme', updateColorTheme)
    }, []);

    return colorTheme;
}

