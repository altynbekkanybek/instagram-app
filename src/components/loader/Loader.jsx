import React from 'react'
import { Components } from '..';


import Logo from "../../assets/images/logo/Instagram-Logo.wine.png"

export default function Loader({fullHeight}) {
  return (
    <div className="loader" style={{height: fullHeight}}>
      <Components.Image src={Logo} />
    </div>
  )
}
