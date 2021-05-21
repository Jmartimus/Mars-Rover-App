import React, { useState, useRef } from 'react';
import { photo } from '../../recoil/atoms';
import { useRecoilValue} from 'recoil';
import Pagination from '@material-ui/lab/Pagination';
import Modal from '@material-ui/core/Modal';
// import { Spinner } from '../Spinner/spinner';
import { useNasa } from '../../apis/useNasa';
import './image-render.scss';
import { Reset } from '../Reset/reset';

export const ImageRender = () => {
  useNasa();

  // const currentlyLoading = useRecoilValue(loading);
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [clickedImage, setClickedImage] = useState();
  const imgRefs = useRef([]);
  const marsPhoto = useRecoilValue(photo);
  const photoVar = marsPhoto.picArray.photos;
  const picsPerPage = 9;
  const pageCount = photoVar ? Math.ceil(photoVar.length / picsPerPage) : '';

  const noPics = () => {
    if (photoVar) {
      if (photoVar.length === 0) {
        return (
          <div><p id="noPics">Sorry, no pics for this day. Pick another date.</p></div>
        );
      }
    }
  };
const body = (<div>hello</div>)
const modalPic = ( photoVar ? <img src={clickedImage.src} alt={clickedImage.alt} key={clickedImage.key}></img> : '')
  const changePage = (event, value) => {
    setCurrentPage(value);
  };
  const addToRefs = (el) => {
    imgRefs.current.push(el);
    console.log(imgRefs.current);
    }
  

  const handleOpen = (src) => {
    // setClickedImage(element);
    setOpen(true);
    console.log(src)
    // setClickedImage(imgRef);
  };

  const handleClose = () => {
    setOpen(false);
  };
  console.log(clickedImage)
  return (
    <div id="biggerContainer">
      <div id="container">
        {!photoVar ? (
          <p id="instructions">
            Pick a date above to see pictures of the Mars surface taken on that
            day.
          </p>
        ) : (
            <div>{
                photoVar
                  .slice((currentPage - 1) * picsPerPage, currentPage * picsPerPage)
                  .map((currentPics) => {
                return (
                  <img
                    id="pics"
                    src={currentPics.img_src}
                    alt="Pictures on mars"
                    key={currentPics.id}
                    onClick={(e) => setClickedImage(e.target.src, e.target.alt, e.target.key)}
                    ref={addToRefs}
                  />
                  //figure out Modal here with Images.
                  //maybe try and link up the clickedImage with the ref somehow.
                );
              })
            }
        </div>)}
        {noPics()}<Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
       {modalPic}
      </Modal>
        {photoVar ? <Pagination
          id="pagination"
            count={pageCount}
            page={currentPage}
          onChange={changePage}
          variant="text"
          size="large"
          /> : ''}
        {photoVar ? <Reset /> : ''}
        {/* {loadingSpin()} */}
        
      </div></div>
  );
};
