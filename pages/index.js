import ContentCard from '@/components/ContentCard'
import Example from '@/components/Example'
import Hero from '@/components/Hero'
import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import SectionContainer from '@/components/SectionContainer'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'


export async function getStaticProps() {
    const blogs             = await getAllFilesFrontMatter('blog')
    const tutorials         = await getAllFilesFrontMatter('tutorial')
    const entertainments    = await getAllFilesFrontMatter('entertainment')
    const memories          = await getAllFilesFrontMatter('memory')
    return { 
        props: { 
            blogs, 
            tutorials, 
            entertainments, 
            memories 
        } 
    }
}


export default function Home({ blogs, tutorials, entertainments, memories }) {
    const MAX_DISPLAY  = 8
    return (
        <>
            <PageSEO title={siteMetadata.title} description={siteMetadata.description} />

            {
                blogs.length > 0
                    ? <Hero announcing={blogs[0].title} url={`/blog/${blogs[0].slug}`}/>
                    : <Hero announcing={tutorials[0].title} url={`/tutorial/${tutorials[0].slug}`}/>
            }
            {
                blogs.length > 0
                    ? <ContentCard max={MAX_DISPLAY} posts={blogs} slug="blog" category={'Blog'}/>
                    : null
            }
            {   
                tutorials.length > 0
                    ? <ContentCard max={MAX_DISPLAY} posts={tutorials} className={'my-24'} slug="tutorial" category={'Tutorial'}/>
                    : null
            }
            {   
                memories.length > 0
                    ? <ContentCard max={MAX_DISPLAY} posts={memories} className={'my-24'} slug="memory" category={'Memories'}/>
                    : null
            }

            {   
                entertainments.length > 0
                    ? <ContentCard max={MAX_DISPLAY} posts={entertainments} className={'my-24'} slug="enterainment" category={'Enterainment'}/>
                    : null
            }
        </>
    )
}
