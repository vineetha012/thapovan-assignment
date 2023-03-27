import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import {LogIn} from './components/loginAndRegister/login'
import {Register} from './components/loginAndRegister/register'
import { EditProfileAuthentication, ViewAuthentication, UploadProfileAuthentication } from './components/auth';
import { RegLogcontextProvider } from './components/context';
import './components/profile/profile.css'
function App() {
  return (
    <div className="App ">
      <BrowserRouter>
      <RegLogcontextProvider>
          <Routes>
            <Route path='/' element={<LogIn />} />
            <Route path='/register' element={<Register />} />
            <Route path='/ViewProfilehome' element={<ViewAuthentication/>} />
            <Route path='/uploadProfile' element={<UploadProfileAuthentication/>} />
            <Route path='/EditProfile' element={<EditProfileAuthentication/>} />

          </Routes>
          </RegLogcontextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
