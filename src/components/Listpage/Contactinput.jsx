import React from 'react'
import Input from '../Input'

const Contactinput = ({placeholderr,typee}) => {
  return (
    <div>
        <Input type={typee} placeholder={placeholderr} className={`w-[780px]`}/>
    </div>
  )
}

export default Contactinput