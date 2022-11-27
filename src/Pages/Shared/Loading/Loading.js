import React from 'react';
import { ThreeCircles } from 'react-loader-spinner';

const Loading = () => {
    return (
      
     <div className="my-20 flex justify-center">
          
          <ThreeCircles
            height="100"
            width="100"
            color="primary"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor=""
            innerCircleColor=""
            middleCircleColor=""
          />
        
      </div>
    );
};

export default Loading;