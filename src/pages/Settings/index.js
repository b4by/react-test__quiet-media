import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../../context';
import Banner from '../../components/Banner';
import validate from './SettingsValidationRules';
import './index.scss';

const Settings = () => {

  const {settings, setSettings, previewReady, setPreviewReady} = useContext(Context);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings({...settings, [name]: value});
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      setPreviewReady(true);
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(settings))
    setIsSubmitting(true);
  }

  return (
    <div className="settings">
      <div className="container">
        <form className="settings__form" onSubmit={handleSubmit}>
          <ul className="settings__list">
            <li className="settings__item">
              <input className="settings__item-input" type="text" name="banner_name" value={settings.banner_name} onChange={handleChange}/>
              <label className={settings['banner_name'].trim() !== '' ? "settings__item-label settings__item-label--done" : "settings__item-label"} htmlFor="banner_name">Название баннера</label>
              <span className="settings__error">{errors.banner_name}</span>
            </li>
            <li className="settings__item">
              <label className="settings__item-label-select" htmlFor="banner_type">Тип баннера</label>
              <select name="banner_type" value={settings["banner_type"]} onChange={handleChange} >
                <option value="Прямой">Прямой</option>
                <option value="Обратный">Обратный</option>
              </select>
            </li>
            <li className="settings__item">
              <input className="settings__item-input" type="text" name="banner_img_y" value={settings.banner_img_y} onChange={handleChange}/>
              <label className={settings['banner_img_y'].trim() !== '' ? "settings__item-label settings__item-label--done" : "settings__item-label"} htmlFor="banner_img_y">Вертикальное изображение</label>
              <span className="settings__error">{errors.banner_img_y}</span>
            </li>
            <li className="settings__item">
              <input className="settings__item-input" type="text" name="banner_img_h" value={settings.banner_img_h} onChange={handleChange}/>
              <label className={settings['banner_img_h'].trim() !== '' ? "settings__item-label settings__item-label--done" : "settings__item-label"} htmlFor="banner_img_h">Горизонтальное изображение</label>
              <span className="settings__error">{errors.banner_img_h}</span>
            </li>
            <li className="settings__item">
              <input className="settings__item-input" type="text" name="banner_link" value={settings.banner_link} onChange={handleChange}/>
              <label className={settings['banner_link'].trim() !== '' ? "settings__item-label settings__item-label--done" : "settings__item-label"} htmlFor="banner_link">Целевая ссылка</label>
              <span className="settings__error">{errors.banner_link}</span>
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
        { previewReady ? <Banner {...settings} /> : null}
      </div>
    </div>
  )
}

export default Settings;