import React from 'react';


export const Spinner = () => {
  return (
    <div id="picContainer">
    <div class="ui active inline dimmer">
    <div class="ui small text loader">loading
    </div>
        </div>
    </div>);
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