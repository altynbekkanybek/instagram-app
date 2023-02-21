

import React from 'react';
import {Routes as Switch, Route} from "react-router-dom";
import { Components } from '../../components';
import { Hooks } from '../../hooks';
import { Providers } from '../../provider';
import { Layout } from '../../services/path';
import { LayoutPages } from '../Lazy';


export default function Layouts() {
  const  { token } = Providers.useAuth();
  const { goToLogin} = Hooks.useLocations()

  React.useEffect(() => {
    if(!token) {
      goToLogin()
    }
  }, [token])

  return (
    <React.Fragment>
      <section className='layout_row'>
        <div className='layout_sidebar'>
         <Components.Sidebar />
        </div>
        <div className='layout_routes'>
          <Switch> 
              <Route path={Layout.home} element={<LayoutPages.Home />}/>
              <Route path={Layout.users} element={<LayoutPages.Users />}/>
              <Route path={Layout.profile} element={<LayoutPages.Profile />}/>
              <Route path={Layout.profileID} element={<LayoutPages.Profile />}/>
          </Switch>
        </div>
      </section>
    </React.Fragment>
  )
};
