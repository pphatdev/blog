import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'
import Border from './Border'

const Tag = ({ text }) => {
    return (
        <Link href={`/tags/${kebabCase(text)}`}>
            <a className="text-xs font-medium ring-1 relative ring-black/10 py-1 bg-white/5 backdrop-blur-sm px-2 rounded-full text-primary-500 hover:text-primary-800 dark:hover:text-primary-400">
                {text.split(' ').join('-')}
                <Border/>
            </a>
        </Link>
    )
}

export default Tag
