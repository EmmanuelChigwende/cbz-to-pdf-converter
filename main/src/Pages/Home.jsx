import React, { useState,useEffect,useRef} from 'react'
import toast from 'react-hot-toast'
import JSZip from 'jszip'
import { PDFDocument } from 'pdf-lib'
import gsap from 'gsap'
const Home = () => {
  const [cbz, setCbz] = useState(null)
  const [loading,setloading] = useState(false)
  const animate = useRef()

  useEffect(()=>{
    gsap.fromTo(animate.current,{
      scale:1,
      delay:1.5,
      yoyoEase:true
    },{
      scale:1.2,
      repeat:-1
    })
  })

  function HandleUpload(e) {
    const file = e.target.files[0]
    if (!file) {
      toast.error("Invalid file maybe")
    } else {
      setCbz(file)
      toast.success("File uploaded successfully")
    }
  }

  async function HandleFile() {
    if (!cbz) {
      toast.error("Please upload a file first")
      return
    }

    try {
      setloading(true)
      const zip = await JSZip.loadAsync(cbz)
      const imageFiles = Object.keys(zip.files).filter(name =>
        name.match(/\.(jpg|jpeg|png|webp)$/i)
      )

      if (imageFiles.length === 0) {
        toast.error("No images in uploaded CBZ file")
        return
      }

      const pdfDoc = await PDFDocument.create()

      for (let i = 0; i < imageFiles.length; i++) {
        const fileName = imageFiles[i]
        const fileData = await zip.files[fileName].async('uint8array')
        console.log(imageFiles[1])
        let image

        if (fileName.toLowerCase().endsWith('.png')) {
          image = await pdfDoc.embedPng(fileData)
        } else {
          image = await pdfDoc.embedJpg(fileData)
        }

        const page = pdfDoc.addPage([image.width, image.height])
        page.drawImage(image, { x: 0, y: 0, width: image.width, height: image.height })
      }

      const pdfBytes = await pdfDoc.save()
      console.log(pdfDoc.getTitle())
      const blob = new Blob([pdfBytes], { type: 'application/pdf' })
      const link = document.createElement('a')
      setloading(false)
      link.href = URL.createObjectURL(blob)
      link.download = 'output.pdf'
      link.click()

      toast.success(`CBZ file converted successfully! Total pages: ${imageFiles.length}`)
    } catch (err) {
      console.error(err)
      toast.error("Failed to parse CBZ file")
    }
  }

  return (
    <div className=' h-[100vh] w-[100vw] grid justify-center items-center'>
      <div className='relative h-[200px] w-[500px] p-2 bg-white rounded-lg'>
        <h1 className='text-[1.5rem] font-bold mb-[20px]'>Convert CBZ to PDF</h1>
        <div className='grid gap-3'>
          <input
            className='text-[1.5rem]'
            onChange={HandleUpload}
            accept='.cbz'
            type="file"
          />
          <button
            onClick={HandleFile}
            className='bg-green-500 text-white text-[1.5rem] rounded-md p-1'
          >
            Convert
          </button>
        </div>
       {
        !loading ? (<></>) : (
           <div className='absolute left-28 top-0 z-3 p-1 grid justify-center items-center font-bold  text-center bg-white border-[2px] border-green-500 h-[200px] w-[250px] rounded-lg shadow-2xl'> 
           <div className='w-full grid justify-center items-center'>
            <p ref={animate} className=' h-[50px] w-[50px] grid  justify-center items-center bg-green-500 rounded-full'>
            <p className='bg-white h-[25px] w-[25px] rounded-full'>
            </p>
           </p>
           </div>
          <p>
            Give Me A Second I'm woking on it
          </p>
          </div>
        )
       }
      </div>
    </div>
  )
}

export default Home
