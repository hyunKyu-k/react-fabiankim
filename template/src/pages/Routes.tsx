import { Suspense } from 'react';
import { Route, Routes as ReactRouterRoutes, Navigate } from 'react-router-dom';


export const Routes = ()=> {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ReactRouterRoutes>
        <Route path='/' element={<div>main</div>} />
        <Route path='*' element={<Navigate replace to='/' />} />
      </ReactRouterRoutes>
    </Suspense>
  )
}