import { Puff } from "react-loader-spinner";

import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-[#130f40]">
      <Puff
        height="80"
        width="80"
        radius={1}
        color="#fff"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
