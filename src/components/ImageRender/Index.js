import React, { useState } from 'react';
import { photo} from '../../recoil/atoms';
import { useRecoilValue } from 'recoil';
import { Pagination } from '../Pagination/Index.js';
import { useNasa } from '../../apis/useNasa';
import './Index.css';

export const ImageRender = () => {
  useNasa();
  const marsPhoto = useRecoilValue(photo);
  const [currentPage, setCurrentPage] = useState(1);
  const [picsPerPage] = useState(9);
  const indexOfLastPic = currentPage * picsPerPage;
  const indexOfFirstPic = indexOfLastPic - picsPerPage;
  const currentPics = marsPhoto.picArray.photos
    ? marsPhoto.picArray.photos.slice(indexOfFirstPic, indexOfLastPic)
    : '';
  const totalPics = marsPhoto.picArray.photos
    ? marsPhoto.picArray.photos.length
    : '';
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div id="container">
      {currentPics
        ? currentPics.map((currentPics) => {
            return (
              <img
                id="pics"
                src={currentPics.img_src}
                alt="Pictures on mars"
                key={currentPics.id}
              />
            );
          })
        : ''}
      <Pagination
        picsPerPage={picsPerPage}
        totalPics={totalPics}
        paginate={paginate}
      />
    </div>
  );
};