import { Route, Routes } from 'react-router-dom';
import { LoginPage, MainPage, ReadContentPage, SignUpPage, WriteContentPage } from './pages';
import { RecoilRoot } from 'recoil';

const App = () => {
  return (
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path='/login/' element={<LoginPage/>}/>
        <Route path='/signup/' element={<SignUpPage/>}/>
        <Route path='/writeContent/' element={<WriteContentPage/>}/>
        <Route path='/readContent/' element={<ReadContentPage/>}/>
        {/*<Route path="/calendar" element={<CalendarPage />} />*/}
      </Routes>
    </RecoilRoot>
  );
};

export default App;
