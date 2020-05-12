import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../../context';
import Banner from '../../components/Banner';
import './index.scss';

const Settings = () => {

  const {settings, setSettings, setPreviewReady} = useContext(Context);

  const [isSubmit, setSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings({...settings, [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true)
    setPreviewReady(true)
  }

  useEffect(() => {
    console.log(settings)
  }, [settings])

  return (
    <div className="settings">
      <div className="container">
        <form className="settings__form" onSubmit={handleSubmit}>
          <ul className="settings__list">
            <li className="settings__item">
              <input className="settings__item-input" type="text" name="banner_name" value={settings.name} onChange={handleChange}/>
              <label className={settings['banner_name'] !== '' ? "settings__item-label settings__item-label--done" : "settings__item-label"} htmlFor="banner_name">Название баннера</label>
            </li>
            <li className="settings__item">
              <label className="settings__item-label-select" htmlFor="banner_type">Тип баннера</label>
              <select name="banner_type" defaultValue="Прямой" value={settings.name} onChange={handleChange} >
                <option value="Прямой">Прямой</option>
                <option value="Обратный">Обратный</option>
              </select>
            </li>
            <li className="settings__item">
              <input className="settings__item-input" type="text" name="banner_img_y" value={settings.name} onChange={handleChange}/>
              <label className={settings['banner_img_y'] !== '' ? "settings__item-label settings__item-label--done" : "settings__item-label"} htmlFor="banner_img_y">Вертикальное Изображение</label>
            </li>
            <li className="settings__item">
              <input className="settings__item-input" type="text" name="banner_img_h" value={settings.name} onChange={handleChange}/>
              <label className={settings['banner_img_h'] !== '' ? "settings__item-label settings__item-label--done" : "settings__item-label"} htmlFor="banner_img_h">Горизонтальное изображение</label>
            </li>
            <li className="settings__item">
              <input className="settings__item-input" type="text" name="banner_link" value={settings.name} onChange={handleChange}/>
              <label className={settings['banner_link'] !== '' ? "settings__item-label settings__item-label--done" : "settings__item-label"} htmlFor="banner_link">Целевая ссылка</label>
            </li>
            <li className="settings__item">
              <input 
                className="settings__submit btn" 
                type="submit" 
                value="Показать" 
              />
            </li>
          </ul>
        </form>
        { isSubmit ? <Banner {...settings} /> : null}
      </div>
    </div>
  )
}

export default Settings;