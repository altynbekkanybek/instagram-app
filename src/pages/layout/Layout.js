

import React from 'react';
import {Routes as Switch, Route} from "react-router-dom";
import { Components } from '../../components';
import { Layout } from '../../services/path';
import { LayoutPages } from '../Lazy';


export default function Layouts() {
  return (
    <React.Fragment>
      <section className='layout_row'>
        <div className='layout_sidebar'>
         <Components.Sidebar />
        </div>
        <div className='layout_routes'>
          <Switch> 
              <Route path={Layout.home} element={<LayoutPages.Home />}/>
          </Switch>
        </div>
      </section>
    </React.Fragment>
  )
};
