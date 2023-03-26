import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/mainPage/MainPage';
import AboutPage from './pages/aboutPage/AboutPage';
import NavBar from './components/navBar/NavBar';
import { Post } from './components/Post/Post';
import ContactsPage from './pages/contactsPage/ContactsPage';
import { Data } from './components/Data/Data';



function App() {
  return (
    <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route index element={<MainPage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/contact" element={<ContactsPage/>}/>
          <Route path="/posts/:id" element={<Post/>}/>
          <Route path="/datas/:id" element={<Data/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
