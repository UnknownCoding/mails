import './App.css';
import Header from './components.js/Header';
import Sidebar from './components.js/Sidebar';
import { Routes , Route} from 'react-router-dom'
import EmailList from './components.js/EmailList';
import Mail from './components.js/Mail';
import { useRecoilState } from 'recoil';
import { modalState } from './atoms/modalAtoms';
import Modal from './components.js/Modal';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import Login from './components.js/Login';

function App() {
  const [open,setOpen] = useRecoilState(modalState)
  const [user, loading, error] = useAuthState(auth);

  return (

      <div className="App">
        {!user ? (
          <Login/>
        ):(
          <>
            <Header/>
            <div className='app-body'>
              <Sidebar/>
              <Routes>
                <Route path='/mail' element={<Mail/>}/>
                <Route path='/' element={<EmailList/>}/>
              </Routes>
            </div>
            {open && (<Modal/>)}
          </>

        )}
      </div>

  );
}

export default App;
