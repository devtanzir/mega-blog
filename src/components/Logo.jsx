
import React from 'react';

const Logo = ({...props}) => {
    return (
        <div>
            <img src="../../public/my logo.png" {...props} width={96} alt="" />
        </div>
    );
};

export default Logo;