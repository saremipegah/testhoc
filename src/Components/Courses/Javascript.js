import React , {useState} from 'react'
import CourseHoc from '../HOC/CourseHoc'

function Javascript({title,incressePrice,price}) {
   

  return (
    <div>
        <h3>Course Title : {title}</h3>
        <button onClick={incressePrice}>Incress Course Price (Price = {price})</button>
    </div>
  )
}


 
export default CourseHoc(Javascript, 'JavaScript Export', 1_800_00)