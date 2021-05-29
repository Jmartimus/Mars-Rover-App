import React, { useState, useEffect } from 'react';
import { photo } from '../../recoil/atoms';
import { useRecoilValue } from 'recoil';
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
  const [clickedImage, setClickedImage] = useState();
  const marsPhoto = useRecoilValue(photo);
  const photoVar = marsPhoto.picArray.photos;
  const picsPerPage = 16;
  const pageCount = photoVar ? Math.ceil(photoVar.length / picsPerPage) : '';

  useEffect(() => {
    setCurrentPage(1);
  }, [marsPhoto]);

  const noPics = () => {
    if (photoVar) {
      if (photoVar.length === 0) {
        return (
          <div>
            <p id="noPics">Sorry, no pics for this day. Pick another date.</p>
          </div>
        );
      }
    }
  };

  const changePage = (event, value) => {
    setCurrentPage(value);
  };
  return (
    <div id="imgOutputContainer">
      {!photoVar ? (
        <p id="instructions">
          Pick a date above to see pictures of the Mars surface taken on that
          day.
        </p>
      ) : (
        <div id="imgContainer">
          {photoVar
            .slice((currentPage - 1) * picsPerPage, currentPage * picsPerPage)
            .map((currentPics) => {
              return (
                <img
                  id="pics"
                  src={currentPics.img_src}
                  alt="Pictures on mars"
                  key={currentPics.id}
                  onClick={() => setClickedImage(currentPics)}
                />
              );
            })}
        </div>
      )}
      {noPics()}
      {clickedImage ? (
        <Modal
          id="modal"
          open={Boolean(clickedImage)}
          onClick={() => setClickedImage(null)}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <img
            id="modalPic"
            src={clickedImage.img_src}
            alt="Pictures on Mars"
          ></img>
        </Modal>
      ) : (
        ''
      )}
      {photoVar && photoVar.length > 0 ? (
        <div id="paginationContainer">
          <Pagination
            id="pagination"
            color="secondary"
            count={pageCount}
            page={currentPage}
            onChange={changePage}
            size="large"
            variant="text"
            shape="rounded"
          />
        </div>
      ) : (
        ''
      )}
      {photoVar ? (
        <div id="resetBtnContainer">
          <Reset />
        </div>
      ) : (
        ''
      )}
      {/* {loadingSpin()} */}
    </div>
  );
};
