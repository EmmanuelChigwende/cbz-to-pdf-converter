import React from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import JSZip from 'jszip'

const Home = () => {

  const [cbz,setCbz] = useState(null)

  function HandleUpload(e){
    const file = e.target.files[0]

    if(!file){
      toast.error("Invalid file maybe")
    }
    else{
      setCbz(file)
      toast.success("file uploaded sucessfully")
    }
  }

  async function HandleFile(e) {
    if(!cbz){
      toast.error("Please Upload File First")
    }
    else{
      try{  
        const zipfile = await JSZip.loadAsync(cbz)
        const imagefiles = Object.keys(zipfile.files).filter(name => name.match(/\.(jpg|jpeg|png|webp)$/i))

        if(imagefiles.length === 0){
          toast.error("No Images In Uploaded Cbz File")
        }
        else{
          console.log(imagefiles)

          for(let pages = 0; pages < imagefiles.length; pages++){
             console.log(imagefiles[pages])
          }

          toast.success("Cbz File Parsed Successfully")
          toast.success(`This document has ${imagefiles.length} pages`)
        }
      }
      catch(err){
        toast.error("Failed To Parse Cbz File")
      }
    }
  }


  return (
    <div className='h-[100vh] grid justify-center items-center'>
      <div className='h-[200px] w-[500px] p-2 bg-white rounded-lg'>
        <h1 className='text-[1.5rem] font-bold mb-[20px]'>
          Convert cbz to pdf
        </h1>
        <div className='grid gap-3'>
          <input className='text-[1.5rem]' onChange={HandleUpload} accept='.cbz' type="file" name="" id="" />
          <button onClick={HandleFile} className='bg-green-500 text-white text-[1.5rem] rounded-md p-1'>Convert</button>
        </div>
      </div>
    </div>

)
}

export default Home
