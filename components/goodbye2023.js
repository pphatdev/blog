import Image from 'next/image'
const goodbye2023 = () => {
  const laoding = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }

  const dataImg = [
    {
      title: '',
      img: '/static/images/2023/1.jpg',
    },
    {
      title: '',
      img: '/static/images/2023/2.jpg',
    },
    {
      title: '',
      img: '/static/images/2023/3.jpg',
    },
    {
      title: '',
      img: '/static/images/2023/4.jpg',
    },
    {
      title: '',
      img: '/static/images/2023/5.jpg',
    },
    {
      title: 'Team Sdach C',
      img: '/static/images/2023/6.jpg',
    },
    {
      title: '',
      img: '/static/images/2023/7.jpg',
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
              className="object-cover h-auto"
              height={672}
            />
            {data.title ? (
              <p className="mt-0 text-sm font-medium leading-7 text-center text-slate-400">
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

export default goodbye2023
