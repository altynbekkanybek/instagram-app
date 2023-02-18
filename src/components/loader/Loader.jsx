import React from 'react'
import { Components } from '..';


import Logo from "../../assets/images/logo/Instagram-Logo.wine.png"

export default function Loader() {
  return (
    <div className="loader">
      <Components.Image src={Logo} />
    </div>
  )
}
