import React, { FC } from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from "./Component/Layout/Layout";
import Home from "./Pages/Home";
import PopularCars from './Pages/PopularCars';
import VideoGallery from './Pages/VideoGallery';
import ImageGallery from './Pages/ImageGallery';
import Contact from './Pages/Contact';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout></Layout>}>
        <Route index element={<Home></Home>} />
        <Route path="popularCars" element={<PopularCars></PopularCars>} />
        <Route path="videoGallery" element={<VideoGallery></VideoGallery>} />
        <Route path="imageGallery" element={<ImageGallery></ImageGallery>} />
        <Route path="contact" element={<Contact></Contact>} />
      </Route>
    </Routes>
  );
}

export default App;
