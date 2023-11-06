import { useState, useEffect } from 'react'

// May want to change these hooks to use the Client Height property of the root <html> element.  
// I think that the window.innerHeight currently used is counting height I don't actually want. 
// document.documentElement.clientWidth & document.documentElement.clientHeight
export default function useColorTheme() {
    const [colorTheme, setColorTheme] = useState('light')

    const updateColorTheme = (event: any) => {
        event.matches ? setColorTheme('dark') : setColorTheme('light');
    }

    useEffect(() => {
        const mediaQueryPrefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)"
        );
    
        if (mediaQueryPrefersDark.matches) {
            setColorTheme('dark');
        }

        // This callback will fire if the perferred color scheme changes without a reload
        mediaQueryPrefersDark.addEventListener("changeColorTheme", (event) => updateColorTheme(event))
        
        return () => mediaQueryPrefersDark.removeEventListener('changeColorTheme', updateColorTheme)
    }, []);

    return colorTheme;
}

