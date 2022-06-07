import React from "react";
import loadingImg from "./loading.gif";

const Loading = () => {
  return (
    <div className='loading'>
      {/* <div class="loader"></div> */}
      <img src={loadingImg} alt="Loading..." width={200} />
    </div>
  );
};

export default Loading;
