import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HelloWorld from '../features/HelloWorld';
import OctoCat from '../features/Octocat';

const RoutesCollection = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/hello-world" element={<HelloWorld />} />
        <Route path="/octocat" element={<OctoCat />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesCollection;
