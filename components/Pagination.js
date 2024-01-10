import Link from '@/components/Link'
import Button from './Button';

export default function Pagination({ totalPages, currentPage, category }) {
  const prevPage = parseInt(currentPage) - 1 > 0
  const nextPage = parseInt(currentPage) + 1 <= parseInt(totalPages)

  console.log(prevPage, currentPage, category);
  return (
    <div className="space-y-2 pt-6 pb-8 md:space-y-5">
      <nav className="flex items-center justify-between">
        
        {!prevPage && (
          <Button 
            disabled={true}
            rel="previous"
            text={'← Previous'}
          />
        )}


        {prevPage && (
          <Button 
            url={currentPage - 1 === 1 ? `/${category}/` : `/${category}/page/${currentPage - 1}`}
            rel={'previous'} 
            text={'← Previous'}
            className={`hover:from-primary-600 transition-colors hover:to-purple-500`}
          />
        )}
        
        <span>
          {currentPage} of {totalPages}
        </span>

        {!nextPage && (
          <Button 
            disabled={true}
            rel="next"
            text={'Next →'}
          />
        )}

        {nextPage && (
          <Button 
            url={`/${category}/page/${currentPage + 1}`} 
            rel={'next'} 
            text={'Next →'}
            className={`hover:from-primary-600 transition-colors hover:to-purple-500`}
          />
        )}

      </nav>
    </div>
  )
}
