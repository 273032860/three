import React,{useMemo} from 'react'

function Hok({opts}) {

  const count = opts.count
  var positions
  var length
   useMemo(() => {
      
        positions = new Float32Array(count * 3)
     for (let i = 0; i < count * 3; i++) {
       positions[i] = (Math.random() - 0.5) * 10
     }
     length=positions.length/3
    //  console.log(length)
   }, [count])
 
 console.log(count)



  return (
    <div className='text-white'>{opts.count}</div>
  )
}

export default Hok