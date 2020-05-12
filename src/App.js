import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Router from './Router';
import { Context } from './context';
import './App.scss';

const App = () => {
  const [previewReady, setPreviewReady] = useState(false);
  const [settings, setSettings] = useState({
    banner_name: '',
    banner_type: 'Прямой',
    banner_img_y: '',
    banner_img_h: '',
    banner_link: ''
  });

  return (
    <Context.Provider value={{
      settings, setSettings,
      previewReady, setPreviewReady
    }}>
      <div className="app">
        <Sidebar />
        <div className="app__main">
          <Router/>
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;