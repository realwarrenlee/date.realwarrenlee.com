import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Pics from './components/Pics';
import Form from './components/Form';
import ScrollToTop from './components/ScrollToTop';

const HomeRoute = () => {
  const navigate = useNavigate();
  const handleNavigate = (section: string) => {
    navigate(`/${section}`);
  };
  return <Hero onNavigate={handleNavigate} />;
};

const ProfileRoute = () => {
  const navigate = useNavigate();
  const handleBack = () => navigate('/');
  return <Profile onBack={handleBack} />;
};

const PicsRoute = () => {
  const navigate = useNavigate();
  const handleBack = () => navigate('/');
  return <Pics onBack={handleBack} />;
};

const FormRoute = () => {
  const navigate = useNavigate();
  const handleBack = () => navigate('/');
  return <Form onBack={handleBack} />;
};

function App() {
  return (
    <div className="min-h-screen w-full font-inter bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-300 via-purple-300 to-blue-300 overflow-hidden flex items-center justify-center p-4 sm:p-6 md:p-8">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomeRoute />} />
        <Route path="/profile" element={<ProfileRoute />} />
        <Route path="/pics" element={<PicsRoute />} />
        <Route path="/form" element={<FormRoute />} />
      </Routes>
    </div>
  );
}

export default App;