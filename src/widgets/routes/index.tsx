import { Route, Routes } from 'react-router-dom';
import { Characters } from '../../pages/charachters/index.js';
import { Character } from '../../pages/character/index.js';
import { Episode } from '../../pages/episode/index.js';
import { Location } from '../../pages/location/index.js';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Characters/>}/>
      <Route path="/episode" element={<Episode/>}/>
      <Route path="/location" element={<Location/>}/>
      <Route path="/character/:id" element={<Character/>}/>
    </Routes>
  )
}
