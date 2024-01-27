import React from "react";

const Logo = ({ ...props }) => {
  return (
    <div>
      <img src="/logo.svg" {...props} width={96} alt="Logo" />
    </div>
  );
};

export default Logo;
