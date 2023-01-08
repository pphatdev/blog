import Image from 'next/image'
const goodbye2022 = () => {
  const laoding = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }

  const dataImg = [
    {
      title: 'Thy Thary and Kol Heang',
      img: '/static/images/2022/1.jpg',
    },
    {
      title: 'Developer Team',
      img: '/static/images/2022/2.jpg',
    },
    {
      title: 'Developer Team',
      img: '/static/images/2022/3.jpg',
    },
    {
      title: 'Nam Kopy, Leat Sophat, Soy Sreysor, Sokhom Sokdanin, Mean Navy, Kor Sokha',
      img: '/static/images/2022/4.jpg',
    },
    {
      title: 'Developer Team',
      img: '/static/images/2022/5.jpg',
    },
    {
      title: 'Team Sdach C',
      img: '/static/images/2022/6.jpg',
    },
    {
      title: 'Developer Team',
      img: '/static/images/2022/7.jpg',
    },
    {
      title: 'Team Developer, Team NOC, Team Finance',
      img: '/static/images/2022/8.jpg',
    },
    {
      title: 'Team Support, Team Developer',
      img: '/static/images/2022/9.jpg',
    },
    {
      title: 'Team Developer, Team NOC, Team Finance',
      img: '/static/images/2022/10.jpg',
    },
    {
      title: 'Developer Team',
      img: '/static/images/2022/11.jpg',
    },
    {
      title: 'TurboTech Family',
      img: '/static/images/2022/12.jpg',
    },
  ]

  return (
    <>
      {dataImg.map((data, key) => {
        return (
          <div key={key}>
            <Image
              loader={laoding}
              src={data.img}
              alt={data.title}
              width={672}
              className="h-auto object-cover"
              height={672}
            />
            {data.title ? (
              <p className="mt-0 text-center text-sm font-medium leading-7 text-slate-400">
                {data.title}
              </p>
            ) : (
              ''
            )}
          </div>
        )
      })}
    </>
  )
}

export default goodbye2022
