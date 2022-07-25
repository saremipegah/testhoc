import React ,{useState} from 'react'

function CourseHoc(OriginComponents , courseTitle, coursePrice) {
    function NewComponent(){
        const [title,setTitle]=useState(courseTitle)
        const [ price , setprice]=useState(coursePrice)

        const incressePrice= ()=>{
            setprice(prevPrice => prevPrice *2)
         };
      
         return <OriginComponents title={title} incressePrice={incressePrice} price={price}/>;
    }

    return NewComponent;
  
}

export default CourseHoc;