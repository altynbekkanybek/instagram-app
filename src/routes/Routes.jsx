import Aos from 'aos';
import React from 'react';
import { Routes as Switch, Route} from "react-router-dom";
import { Routers } from '../pages';
import { Apps } from '../services/path';
import "aos/dist/aos.css"
import { Components } from '../components';

export default function Routes() {

  React.useEffect(() => {
    Aos.init({
      duration: 1000
    })
  }, [])
  
  return (
    <React.Fragment>
      <React.Suspense fallback={<Components.Loader fullHeight={"100vh"} />}>
        <Switch>
          <Route  path={Apps.accounts} element={<Routers.AuthRoutes />} />
          <Route path={Apps.layout} element={<Routers.LayoutRoutes />} />
        </Switch>
      </React.Suspense>
    </React.Fragment>
  )
}
