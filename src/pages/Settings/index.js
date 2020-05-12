import React, { useState, useEffect } from 'react';
import FormItem from './FormItem';
import Banner from '../../components/Banner';
import './index.scss';

const Settings = (props) => {
  // Настройки полей формы
  const [settings, setSettings] = useState([
    {
      tag: 'input',
      type: 'text',
      name: 'banner_name',
      label: 'Название баннера',
      value: '',
      pattern: "[A-Za-z0-9]{3,30}"
    },
    {
      tag: 'select',
      name: 'banner_type',
      label: 'Тип баннера',
      options: ['Прямой', 'Обратный'],
      value: 'Прямой'
    },
    {
      tag: 'input',
      type: 'text',
      name: 'banner_img_y',
      label: 'Вертикальное изображение',
      value: '',
      pattern: "https?://.*"
    },
    {
      tag: 'input',
      type: 'text',
      name: 'banner_img_h',
      label: 'Горизонтальное изображение',
      value: '',
      pattern: "https?://.*"
    },
    {
      tag: 'input',
      type: 'text',
      name: 'banner_link',
      label: 'Целевая ссылка',
      value: '',
      pattern: "https?://.*"
    }
  ])

  // Данные для рендеринга компонента <Banner />
  const [banner, setBanner] = useState(getFormValues(settings, 'name'));

  const [isSubmit, setSubmit] = useState(false);

  const onInputChange = (e, key) => {
    const { value } = e.target
    const newSettings = settings;
    newSettings[key].value = value;
    setSettings([...newSettings])
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // При сабмите формы вызываем функции из компонента <App />
    props.setPreviewReady(true);
    props.setBanner(banner);
    setSubmit(true)
  }

  function getFormValues(obj, property) {
    const data = {};
    
    obj.forEach(el => {
      data[el[property]] = el.value
    });

    return data;
  }

  // Если обновляется settings, то обновляем banner
  useEffect(() => {
    const bannerInfo = getFormValues(settings, 'name');
    setBanner(bannerInfo);
  }, [settings])

  return (
    <div className="settings">
      <div className="container">
        <form className="settings__form" onSubmit={handleSubmit}>
          <ul className="settings__list">
            {settings.map((setting, key) => <FormItem key={key} handler={(e) => onInputChange(e, key)} {...setting} />)}
            <li className="settings__item">
              <input 
                className="settings__submit btn" 
                type="submit" 
                value="Показать" 
              />
            </li>
          </ul>
        </form>
        { (isSubmit && Object.keys(banner).length !== 0) ? <Banner {...banner} /> : null}
      </div>
    </div>
  )
}


export default Settings;