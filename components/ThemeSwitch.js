import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'

const ThemeSwitch = () => {
    const [ mounted, setMounted ] = useState(false)
    const { theme, setTheme, resolvedTheme } = useTheme()

    // When mounted on client, now we can show the UI
    useEffect(() => setMounted(true), [])

    return (
        <button 
            aria-label="Toggle Dark Mode" 
            type="button" 
            className="ml-1 mr-1 h-7 w-7 bg-white/10 dark:bg-white/10 backdrop-blur-sm flex items-center justify-center rounded p-1 sm:ml-4 ring-1 ring-black/10 dark:ring-white/10" 
            onClick={ () => setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark') }
        >
            { 
                mounted && (theme === 'dark' || resolvedTheme === 'dark') 
                    ? (<SunIcon className="h-5 w-5"/>) 
                    : (<MoonIcon className="h-4 w-4"/>)
            }
        </button>
    )
}

export default ThemeSwitch
