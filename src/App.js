import { Route, Routes } from 'react-router-dom';
import { LoginPage, MainPage, SignUpPage } from './pages';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path='/login/' element={<LoginPage/>}/>
      <Route path='/signup/' element={<SignUpPage/>}/>
      {/*<Route path="/calendar" element={<CalendarPage />} />*/}
    </Routes>
  );
};

export default App;
