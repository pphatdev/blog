export default function Button({rel,url, text, className, disabled}) {
  
    if (disabled) {
        return (
            <button disabled
                type="button"
                className={`rounded-full bg-gradient-to-tl from-primary-300 to-purple-300 px-3 py-1 sm:px-4 sm:py-2 text-sm font-medium text-white shadow-sm disabled:cursor-not-allowed ${className ?? ''}`}
            >
                { text ?? ''}
            </button>
        )
    }
    else
    {
        return (
            <a 
                href={url ?? ''} 
                rel={rel ?? 'unfollow'}
                className={`rounded-full bg-gradient-to-tl from-primary-500 to-purple-400 px-3 py-1 sm:px-4 sm:py-2 text-sm font-medium text-white shadow-sm ${className ?? ''}`}
            >
                { text ?? ''}
            </a>
        )
    }
    
}