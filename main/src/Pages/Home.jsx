import React from 'react'
import { useState } from 'react'
import {toast} from 'react-hot-toast'
import JSZip from 'jszip'

const Home = () => {

  const {cbzFile,setCbzFile} = useState(null)
  const form = new FormData()


  function HandleCbz(e) {
    setCbzFile(cbzFile.files[0])
    form.append("cbz",cbzFile)
  }

  async function HandleCbzParsing(e) {
    try{
      const zip =  await JSZip.loadAsync(form)
      if(zip){
        toast.success("first step complete")
      }
    }
    catch(err){
      toast.error(err)
    }
  }



  return (
    <div className='p-4 font-sarif flex justify-center items-center h-[100vh]'>
      <div className='h-[500px] w-[500px] bg-white rounded-lg p-2'>
        <div className='grid gap-3'>
          <h1 className='font-bold text-[2rem]'>
          Cbz To Pdf Converter 
          </h1>
          <p className='text-[0.8rem] font-bold'>
            convert your cbz files to pdf and read them anywhere anytime.....
          </p>
        </div>
        <div className='mt-[30px]'>
          <h2>
            Please upload cbz file😊
          </h2>
          <div className='mt-[20px]' onChange={HandleCbz}>
            <input type="file" accept='.cbz' name="" id="" />
          </div>
          <div className='mt-[10px]'>
            <button onClick={HandleCbzParsing} className='bg-green-500 text-[1.5rem] p-1 rounded-lg text-white'>
              convert
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
