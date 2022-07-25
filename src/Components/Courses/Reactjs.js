import React from 'react'
import CourseHoc from '../HOC/CourseHoc'

function Reactjs({title,incressePrice,price}) {

  return (
    <div>
        <h3>Course Title : {title}</h3>
        <button onClick={incressePrice}>Incress Course Price (Price = {price})</button>
    </div>
  )
}

export default CourseHoc(Reactjs , 'Recat js' , 2_500_000)