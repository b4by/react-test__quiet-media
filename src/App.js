import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Router from './Router';
import './App.scss';

const App = () => {
  // Если форма со страницы "Параметры" отправлена, то previewReady = true
  // Ссылка "Предпросмотр" становится активной
  const [previewReady, setPreviewReady] = useState(false);
  
  // Информация по баннеру для рендеринга компонента <Banner /> на странице "Предпросмотр"
  const [banner, setBanner] = useState('');

  return (
    <div className="app">
      <Sidebar previewReady={previewReady} />
      <div className="app__main">
        <Router setPreviewReady={setPreviewReady} banner={banner} setBanner={setBanner}/>
      </div>
    </div>
  );
}

export default App;