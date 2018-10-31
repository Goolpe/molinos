import React, { Component } from 'react';
import '../styles/footer.scss';

class Footer extends Component{
  render(){
    return (
      <footer className='footer'>
        <section className='container container__flex'>
          <div className='container__flex--block container__flex--block--first'>
            <label for='search'>
              <input name='search' value={this.props.search} onChange={this.props.handleChange} id='search' className='container__flex--search__input' placeholder='Поиск' />
            </label>
            <img className='container__flex--apple-icon' alt='appstore' src='/assets/appstore.png' />
          </div>
          <div className='container__flex--block'>
            <nav><h4>Редакция  Реклама  Пресс-релизы  Техподдержка  Спецпроекты  Вакансии  RSS</h4></nav>
            <h4>© 1999–2018 ООО «Мировые новости»</h4>
          </div>
        </section>
      </footer>
    );
  }
}

export default Footer;