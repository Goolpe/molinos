import React from 'react';
import '../styles/footer.scss';

function Footer(props) {
  return (
    <footer className='footer'>
      <section className='container container__flex'>
        <div className='container__flex container__flex--block'>
          <label for='search'>
            <input name='search' id='search' className='container__flex--search__input' placeholder='Поиск' />
          </label>
          <img className='container__flex--apple-icon' alt='appstore' src='/assets/appstore.png' />
        </div>
        <div className='container__flex container__flex--block'>
          <nav><h4>Редакция  Реклама  Пресс-релизы  Техподдержка  Спецпроекты  Вакансии  RSS</h4></nav>
          <h4>© 1999–2018 ООО «Мировые новости»</h4>
        </div>
      </section>
    </footer>
  );
}

export default Footer;