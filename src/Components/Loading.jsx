import React from 'react'
import { Vortex} from 'react-loader-spinner'

export default function Loading() {
  return <>
  
 <div className='flex items-center justify-center h-screen'>
 <Vortex
  visible={true}
  height="80"
  width="80"
  ariaLabel="vortex-loading"
  wrapperStyle={{}}
  wrapperClass="vortex-wrapper"
  colors={['purple', 'purple', 'purple', 'purple', 'purple', 'purple']}
  />
 </div>
  </>
}
