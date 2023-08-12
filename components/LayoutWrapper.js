import SectionContainer from './SectionContainer'
import Header from './Header'

const LayoutWrapper = ({ children }) => {
  return (
    <>
      <Header/>
      <SectionContainer>
        <div className="flex h-[calc(100vh_-_5rem)] flex-col justify-between">
          <main>{children}</main>
        </div>
      </SectionContainer>
    </>
  )
}

export default LayoutWrapper
