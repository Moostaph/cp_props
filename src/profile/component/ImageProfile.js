import React from "react";
import Img from "./img.jpeg"
const ImageProfile = props => {
console.log('props:',props)
return<>
 <img src= {Img} />
 </>
}
export default ImageProfile;