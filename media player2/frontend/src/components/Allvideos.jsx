import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
import { getVideoApi, updateCategoryApi } from '../services/allApi'


function Allvideos({addStatus,setcategoryVDStatus}) {

  const [Video, setVideo] = useState([])
  const [deleteStatus,setDeleteStatus]=useState({})

  const getallVideo = async () => {
    const result = await getVideoApi()
    //console.log(result);
    setVideo(result.data)

  }

  console.log(Video);
  const dragOver = (e)=>{
    e.preventDefault()
  }
  const videoDrop = async(e)=>{
    const {videoDetails,categoryDetails}= JSON.parse(e.dataTransfer.getData("Details"))
    console.log(videoDetails , categoryDetails);

    let result = categoryDetails.allVideos.filter((item)=>item.id!=videoDetails.id)

    const reqBody ={
      category:categoryDetails.category,
      allVideos:result,
      id:categoryDetails.id

    }

    const response = await updateCategoryApi(categoryDetails.id , reqBody)
    console.log('inside function');
    

    console.log(response);
    if(response.status >=200 && response.status<300){
      setcategoryVDStatus(result)
    }
    

  
    
  }

  useEffect(() => {
    getallVideo()
  }, [addStatus,deleteStatus])
  return (
    <>
      <h4 className='mt-5'>All videos</h4>


      {Video?.length > 0 ?
      <div className="container-fluid mt-5" droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e)}>
      <div className="row">
        {Video?.map((item)=>(
          <div className='col-md-3 p-3'>
          <Videocard videoDetails={item} setDeleteStatus={setDeleteStatus}/>
        </div>

        ))
        }

      </div>

    </div>

:

    <div className='container-fluid mt-5'>
      <div className="row">
        <div className='col-md-4'></div>
        <div className="col-md-4">
          <img src="https://jrdsolar.com/templates/default-new/images/empty-cart.png" alt="no-image" />
          <h5 className='text-center text-danger'>No Video Added Yet....</h5>

        </div>
        <div className="col-md-4"></div>

      </div>

    </div>}

    </>
  )
}

export default Allvideos