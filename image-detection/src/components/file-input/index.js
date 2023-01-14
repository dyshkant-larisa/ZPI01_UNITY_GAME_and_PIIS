import React, {forwardRef} from "react";

const FileInput = forwardRef(({onChange}, ref) =>
  <input
    type="file"
    ref={ref}
    style={{display: 'none'}}
    onChange={onChange}
  />
)

export default FileInput;
