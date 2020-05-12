export default function validate(settings) {
  let regexp_title = /^\s*[a-zA-Z,\s]+\s*$/;
  let regexp_url = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
  let errors = {};
  if (!settings.banner_name) {
    errors.banner_name = 'Введите название баннера'
  } else if (!regexp_title.test(settings.banner_name)) {
    errors.banner_name = "Название баннера некорректно"
  }
  if (!settings.banner_img_y) {
    errors.banner_img_y = 'Добавьте ссылку на изображение'
  } else if (!regexp_url.test(settings.banner_img_y)) {
    errors.banner_img_y = 'Ссылка на изображение некорректна'
  }
  if (!settings.banner_img_h) {
    errors.banner_img_h = 'Добавьте ссылку на изображение'
  } else if (!regexp_url.test(settings.banner_img_h)) {
    errors.banner_img_h = 'Ссылка на изображение некорректна'
  }
  if (!settings.banner_link) {
    errors.banner_link = 'Добавьте целевую ссылку'
  } else if (!regexp_url.test(settings.banner_link)) {
    errors.banner_link = 'Адрес целевой ссылки некорректен'
  }
  return errors
}