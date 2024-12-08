import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addVideoApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  



function Add({setAddStatus}) {
  const [show, setShow] = useState(false);

  const [videoDetails, setVideoDetails] = useState({
    caption: "",
    Imgurl: "",
    emdedLink: ""

  })
  console.log(videoDetails);


  const handleClose = () => {
    setShow(false);
    handleCancel()
  }

  const handleShow = () => setShow(true);

  const handleCancel = () => {
    setVideoDetails({
      caption: "",
      Imgurl: "",
      emdedLink: ""

    })

  }


  const handleAdd = async () => {
    const { caption, Imgurl, emdedLink } = videoDetails
    if (!caption || !Imgurl || !emdedLink) {
      toast.info('please fill the form completely')
    }
    else {
      if (emdedLink.startsWith('https://youtu.be/')) {
        //https://youtu.be/284Ov7ysmfA?si=Y_7u-7DDaBmqLMH2
        //https://youtu.be/284Ov7ysmfA?si=ED2ec7h-shpsb0zH
        let link = `https://www.youtube.com/embed/${emdedLink.slice(17, 28)}`
        console.log(link);
        
      const result = await addVideoApi({caption, Imgurl , emdedLink:link})
      console.log(result);


      if(result.status>=200 && result.status<300){
        toast.success('video added sucessfully')
        handleClose()
        setAddStatus(result)
      }
      else{
        toast.error('something went wrong')
        handleCancel()
      }


      }
      else {
        //https://www.youtube.com/watch?v=284Ov7ysmfA
        let link =`https://www.youtube.com/embed/${emdedLink.slice(-11)}` 
        console.log(link);
        
       const result = await addVideoApi({caption, Imgurl , emdedLink:link})
       console.log(result);
      if(result.status>=200 && result.status<300){
        toast.success('video added successfull')
        handleClose()
        setAddStatus(result)
      }
      else{
        toast.error('something went wrong')
        handleCancel()
      }

      }



    }


  }
  return (
    <>

      <h5><span className='d-md-inline d-none'>Upload New Video</span> <FontAwesomeIcon onClick={handleShow} icon={faCloudArrowUp} className='ms-3' /> </h5>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'><FontAwesomeIcon icon={faFilm} className='me-2' />Upload Videos </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className='text-dark'>Please fill the following details</p>
          <form className='border border-secondary p-3 rounded'>
            <div className="mb-3">
              <input type="text" value={videoDetails.caption} placeholder='video Caption' className='form-control' onChange={(e) => setVideoDetails({ ...videoDetails, caption: e.target.value })} />
            </div>

            <div className="mb-3">
              <input type="text" value={videoDetails.Imgurl} placeholder='video Image' className='form-control' onChange={(e) => setVideoDetails({ ...videoDetails, Imgurl: e.target.value })} />
            </div>

            <div className="mb-3">
              <input type="text" value={videoDetails.emdedLink} placeholder='video Url' className='form-control' onChange={(e) => setVideoDetails({ ...videoDetails, emdedLink: e.target.value })} />
            </div>

          </form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleAdd}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer position='top-center' theme="colored" autoClose={2000} />



    </>
  )
}

export default Add