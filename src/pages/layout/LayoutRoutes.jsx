import React from 'react'
import {Routes as Switch, Route} from "react-router-dom"
import { Layout } from '../../services/path'
import { LayoutPages } from '../Lazy'

export default function LayoutRoutes() {
  return (
    <React.Fragment>
      <Switch> 
        <Route path={Layout.home} element={<LayoutPages.Home />}/>
      </Switch>
    </React.Fragment>
  )
}
