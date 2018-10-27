import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import moment from 'moment';


const StyledHeader = styled.header`
  width: 100%;
  height: 100vh;
  color: #fff;
  background-color: #000000;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: url('../assets/bitmap.jpg');
  text-transform: uppercase;
`;

const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const H1 = styled.h1`
  margin: 17px 0;
  font-size: 36px;
  font-weight: bold;
`;

const H3 = styled.h3`
  margin: 0;
  font-size: 11px;
  opacity: 0.81;
  font-weight: 500;
`;

const AddNews = styled(H3)`
  display: block;
`;

const textRotate = keyframes`
  from {
    margin-top: -150px;
  }
  to {
    margin-top: 0;
  }
`;

const Hr = styled.hr`
  position: absolute;
  bottom: 0;
  margin: 0;
  left: 0;
  width: 0px;
  border: 0;
  border-bottom: 3px solid #4286f4;
`;

const HrW = styled(Hr)`
  width: 100%;
  border-bottom: 3px solid #fff;
`;

const Button = styled.button`
  &:hover ${Hr} {
    width: 100%;
    transition: 0.6s;
  }
  &:hover ${AddNews}{
    animation: ${textRotate} 0.3s;
  }
  left: 0;
  right: 0;
  margin: auto;
  position: absolute;
  bottom: 164px;
  left: 0;
  overflow: hidden;
  border: 0;
  width: 189px;
  background-color: transparent;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Modal = styled.div`
  z-index: 900;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: url(../assets/modalbg.jpg);
`;

const Form = styled.form`
  z-index: 999;
  width: 400px;
  height: 520px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: #fff;
  text-align: center;
  color: #000;
`;

const Close = styled.div`
  text-align: right;
  margin-top: 16px;
  margin-right: 16px;
  margin-bottom: 40px;
`;

const ButtonClose = styled.button`
  background-color: transparent;
  border: 0;
`;

const ModalTitle = styled(H1)`
  margin-top: 40px;
  margin-bottom: 60px;
`;

const Block = styled.div`
  margin: auto;
  width: 340px;
`;

const InputBlock = styled.div`
  width: inherit;
  position: relative;
  height: 50px;
  margin: 20px 0;
  border: 1px solid #d8d8d8;
`;

const Select = styled.select`
  width: inherit;
  height: inherit;
  padding-left: 23px;
  box-sizing: border-box;
  font-size: 11px;
  color: #d8d8d8;
  background-image: url(../assets/expand-button.svg);
  background-repeat: no-repeat;
  background-position:
    calc(100% - 20px) 22px;
  appearance:none;
  cursor: pointer;
  border: 0;
`;

const ButtonRemove = styled(ButtonClose)`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 50px;
`;

const Img = styled.img`
  height: 11px;
  width: 11px;
`;

const Input = styled.input`
  width: inherit;
  height: inherit;
  padding-left: 23px;
  box-sizing: border-box;
  font-size: 11px;
  border: 0;
`;

const Upload = styled(Input)`
  color: #d8d8d8;
`;

const InputFake = styled(Input)`
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
`;

const ButtonSend = styled(ButtonClose)`
  color: #d8d8d8;
  margin: 5px;
  font-size: 16px;
`;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      name: '',
      text: '',
      category: '',
      file: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      display: false,
      name: '',
      text: '',
      category: '',
      file: null,
    });
  }
  handleClick() {
    this.setState({
      display: !this.state.display,
    });
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
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
      <StyledHeader>
        <section className="container">
          <Wrapper>
            <H1>Мировые новости</H1>
            <H3>{moment().locale('ru').format('DD MMMM YYYY, dddd, hh:mm')}</H3>
          </Wrapper>
          <Button onClick={this.handleClick}>
            <AddNews>Добавить новость</AddNews>
            <p>+</p>
            <HrW />
            <Hr />
          </Button>
        </section>
        {this.state.display &&
        <Modal id='Modal'>
          <Form onSubmit={this.handleSubmit}>
            <Close>
              <ButtonClose onClick={this.handleClick}>
                <img src='../assets/close.svg'/>
              </ButtonClose>
            </Close>
            <ModalTitle>Title</ModalTitle>
            <Block>
              <InputBlock className={this.state.name ? 'input--active' : ''}>
                <Input type='text'
                  value={this.state.name}
                  name='name'
                  onChange={this.handleChange}
                  placeholder='Название'
                  required
                />
              </InputBlock>
              <InputBlock  className={this.state.text ? 'input--active' : ''}>
                <Input type='text'
                  value={this.state.text}
                  name='text'
                  onChange={this.handleChange}
                  placeholder='Текст'
                  required
                />
              </InputBlock>
              <InputBlock className={this.state.category ? 'input--active' : ''}>
                <Select
                  className={this.state.category ? 'input--active' : ''}
                  value={this.state.category || "Категория"}
                  name='category'
                  onChange={this.handleChange}
                  required
                >
                  <option value="0" hidden>Категория</option>
                  <option value="politics">Политика</option>
                  <option value="sports">Спорт</option>
                  <option value="accidents">Происшествия</option>
                  <option value="science">Наука</option>
                  <option value="business">Бизнес</option>
                </Select>
              </InputBlock>
              <InputBlock className={this.state.file ? 'input--active' : ''}>
                  <Upload className={this.state.file ? 'input--active' : ''} value={this.state.file ? this.state.file.name : 'Upload file'} readOnly/>
                  <InputFake type='file' name='file' onChange={this.handleFile} required/>
                  {this.state.file &&
                    <ButtonRemove onClick={this.handleRemove}>
                      <Img src='../assets/close.svg'/>
                    </ButtonRemove>
                  }
              </InputBlock>
            </Block>
             <ButtonSend className={(this.state.name && this.state.text && this.state.category && this.state.file) ? 'input--active' : ''}>ОТПРАВИТЬ</ButtonSend>
          </Form>
        </Modal>}
      </StyledHeader>
    );
  }
}

export default Header;
