import { useState } from 'react'
import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Image from 'next/image'

export default function Home() {
  const [imageSrc, setImageSrc] = useState()
  const [uploadData, setUploadData] = useState()

  function handleOnChange(changeEvent) {
    const reader = new FileReader()
    reader.onload = function (onLoadEvent) {
      setImageSrc(onLoadEvent.target.result)
      setUploadData(undefined)
    }

    reader.readAsDataURL(changeEvent.target.files[0])
  }

  async function handleOnSubmit(event) {
    event.preventDefault()

    const form = event.currentTarget
    const fileInput = Array.from(form.elements).find(({ name }) => name === 'file')

    const formData = new FormData()

    for (const file of fileInput.files) {
      formData.append('file', file)
      formData.append('upload_preset', 'leatsophat')
    }

    const data = await fetch('https://api.cloudinary.com/v1_1/dcqs4wzvs/image/upload', {
      method: 'POST',
      body: formData,
    }).then((r) => r.json())

    setImageSrc(data.secure_url)
    setUploadData(data)
  }
  const [copied, setCopied] = useState(false)

  return (
    <div>
      <PageSEO title={`Blog - ${siteMetadata.author}`} description={siteMetadata.description} />
      <main>
        <h1 className="text-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Upload Image
        </h1>
        <form
          method="post"
          className="flex flex-col items-center justify-center gap-3 py-10 text-center"
          onChange={handleOnChange}
          onSubmit={handleOnSubmit}
        >
          <p>
            <input type="file" hidden name="file" id="file" />
            <label
              htmlFor="file"
              className="cursor-pointer rounded-md border bg-slate-600 px-10 py-3 text-white"
            >
              Select File
            </label>
          </p>

          <Image
            src={imageSrc ?? '/static/images/placeholder/error.jpg'}
            width={512}
            height={512}
            alt={`Alt`}
            className="h-auto object-cover"
          />
          {imageSrc && !uploadData && (
            <p className="flex flex-col gap-4">
              <button className="cursor-pointer rounded-md border bg-slate-600 px-10 py-3 text-white">
                Upload File
              </button>
            </p>
          )}
          <div>
            {uploadData && (
              <div className="flex flex-col gap-5">
                <div className="max-w-md overflow-x-auto rounded-md border px-5 py-2.5 text-left">
                  <code>
                    <pre>{imageSrc}</pre>
                  </code>
                </div>
                <CopyToClipboard text={imageSrc} onCopy={() => setCopied(true)}>
                  <button className="cursor-pointer rounded-md border bg-slate-600 px-10 py-3 text-white">
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                </CopyToClipboard>
              </div>
            )}
            {/* {JSON.stringify(uploadData.secure_url, null, 2)} */}
          </div>
        </form>
      </main>
    </div>
  )
}
