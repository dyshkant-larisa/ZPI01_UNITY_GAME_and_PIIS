import React, { forwardRef } from "react";

const Image = forwardRef(({src}, ref) => <img src={src} alt="Image" ref={ref} style={{ height: '100%' }} />)

export default Image;
