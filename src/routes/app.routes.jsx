import { Routes, Route } from 'react-router-dom';

import { NewMovie } from '../pages/NewMovie';
import { Home } from '../pages/Home';
import { Perfil } from '../pages/Perfil';
import { Preview } from '../pages/Preview';

export function AppRoutes(){
return(
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/newmovie' element={<NewMovie />}/>
        <Route path='/perfil' element={<Perfil />}/>
        <Route path='/preview/:id' element={<Preview />}/>
    </Routes>
)
    
}
