import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HelloWorld from '../features/HelloWorld';

const RoutesCollection = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/hello-world" element={<HelloWorld />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesCollection;
