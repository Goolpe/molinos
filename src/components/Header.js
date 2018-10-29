import React, { Component } from 'react';
import moment from 'moment';
import newsItems from './news.json';
import '../styles/header.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createArticle } from './actions/actionNews';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      title: '',
      text: '',
      category: '',
      tag: '',
      file: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }
  componentDidMount(){
    if (!localStorage.news) {
      localStorage.setItem('news', JSON.stringify(newsItems));
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    const newsData = {
      'title': this.state.title,
      'text': this.state.text,
      'category': this.state.category,
      'tag': this.state.tag,
      'file': this.state.file.name,
      'date': new Date(),
    };
    this.props.createArticle(newsData);
    this.setState({
      display: false,
      title: '',
      text: '',
      category: '',
      tag: '',
      file: null,
    });
    document.body.style.overflow = 'auto';
  }

  handleClick() {
    if(!this.state.display){
      document.body.style.overflow = 'hidden';
    }
    else{
      this.setState({
        display: false,
        title: '',
        text: '',
        category: '',
        tag: '',
        file: null,
      });
      document.body.style.overflow = 'auto';
    }
    this.setState({
      display: !this.state.display,
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleChangeSelect(e) {
    this.setState({
      category: JSON.parse(e.target.value).category,
      tag: JSON.parse(e.target.value).tag,
    });
  }

  handleFile(e) {
    this.setState({
      [e.target.name]: e.target.files[0],
    });
  }

  handleRemove() {
    this.setState({
      file: null,
    });
  }

  render() {
    return (
      <header className='header'>
        <section className="container">
          <section className='header__wrapper'>
            <h1 className='wrapper__title'>Мировые новости</h1>
            <h4 className='wrapper__subtitle'>{moment().locale('ru').format('DD MMMM YYYY, dddd, HH:mm')}</h4>
          </section>
          <button className='wrapper__addNews' onClick={this.handleClick}>
            <h4 className='addNews__title'>Добавить новость</h4>
            <p>+</p>
            <hr className='addNews__hr--white' />
            <hr className='addNews__hr--blue' />
          </button>
        </section>
        {this.state.display &&
        <section className='modal-window' id='Modal'>
          <form className='modal-window__form' onSubmit={this.handleSubmit}>
            <div className='form__close'>
              <button className='form__button' onClick={this.handleClick}>
                <img alt='close' src='/assets/close.svg'/>
              </button>
            </div>
            <h1 className='form__title'>Title</h1>
            <div className='form__block'>
              <div className={`form__input-block ${this.state.title ? 'input--active' : ''}`}>
                <input type='text'
                  className='form__input'
                  value={this.state.title}
                  name='title'
                  onChange={this.handleChange}
                  placeholder='Название'
                  required
                />
              </div>
              <div  className={`form__input-block ${this.state.text ? 'input--active' : ''}`}>
                <textarea type='text'
                  className='form__textarea'
                  value={this.state.text}
                  name='text'
                  onChange={this.handleChange}
                  placeholder='Текст'
                  required
                />
              </div>
              <div className={`form__input-block ${this.state.category ? 'input--active' : ''}`}>
                <select
                  className={`form__select ${this.state.category ? 'input--active' : ''}`}
                  name='category'
                  onChange={this.handleChangeSelect}
                  required
                >
                  <option value='{"category":"Категория","tag":"category"}' hidden>Категория</option>
                  <option value='{"category":"Политика","tag":"politics"}'>Политика</option>
                  <option value='{"category":"Спорт","tag":"sports"}'>Спорт</option>
                  <option value='{"category":"Происшествия", "tag":"accidents"}'>Происшествия</option>
                  <option value='{"category":"Наука","tag":"science"}'>Наука</option>
                  <option value='{"category":"Бизнес","tag":"business"}'>Бизнес</option>
                </select>
              </div>
              <div className={`form__input-block ${this.state.file ? 'input--active' : ''}`}>
                  <input className={`form__input form__input--upload ${this.state.file ? 'input--active' : ''}`}
                    value={this.state.file ? this.state.file.name : 'Upload file'}
                    readOnly
                  />
                  <input type='file' className='form__input form__input--fake' name='file' onChange={this.handleFile} required/>
                  {this.state.file &&
                    <button className='form__button form__remove-button' onClick={this.handleRemove}>
                      <img alt='close' className='form__icon' src='/assets/close.svg'/>
                    </button>
                  }
              </div>
            </div>
             <button
              className={`form__button form__send-button ${
                this.state.title &&
                this.state.text &&
                this.state.category &&
                this.state.file ? 'input--active' : ''}`}
              >
                ОТПРАВИТЬ
              </button>
          </form>
        </section>}
      </header>
    );
  }
}

Header.propTypes = {
  createArticles: PropTypes.func,
};

const mapStateToProps = state => ({
  articles: state.articles.items,
});

export default connect(mapStateToProps, { createArticle })(Header);
