import { Route, Routes } from 'react-router-dom';
import { CalendarPage, MainPage } from './pages';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/calendar" element={<CalendarPage />} />
    </Routes>
  );
};

export default App;
