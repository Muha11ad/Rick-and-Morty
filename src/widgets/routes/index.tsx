import { Route, Routes } from 'react-router-dom';
import { Characters } from '../../pages/charachters/index.js';
import { Episode } from '../../pages/episode/index.js';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Characters/>}/>
      <Route path="/episode" element={<Episode/>}/>
    </Routes>
  )
}
