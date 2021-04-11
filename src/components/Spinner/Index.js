import React from 'react';
import { loading } from '../../recoil/atoms';
import { useRecoilValue } from 'recoil';
import { useNasa } from '../../apis/useNasa';

export const Spinner = () => {
  useNasa();
  const currentlyLoading = useRecoilValue(loading);

  return (
    <div id="picContainer">
      {currentlyLoading ? (''
      ) : (
        <div class="ui active dimmer">
        <div class="ui small text loader">loading</div>
      </div>
      )}
    </div>
  );
};

// export const Spinner = () => {
//   const currentlyLoading = useRecoilValue(loading);
//   return (
//     <div id="picContainer">
//       {currentlyLoading
//         ? <div class="ui active dimmer">
//           <div class="ui small text loader">loading
//     </div>
//         </div>
//         : ""}
//     </div>);
// }