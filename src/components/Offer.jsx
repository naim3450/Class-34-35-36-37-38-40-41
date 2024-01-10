import React from 'react'

const Offer = ({text,className}) => {

    let pattern = /#([^#]+)#/g;
    let naim = text.replace(pattern, "<h4 Class='one'>$1</h4>");
  return (
    <h3 className={`${className} text-[16px] text-offerColor font-dm font-normal w-[335px]`} dangerouslySetInnerHTML={{__html: naim}}></h3>
  )
}

export default Offer