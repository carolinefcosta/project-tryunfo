import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.verifyInputsText = this.verifyInputsText.bind(this);
    this.verifyCardAttr = this.verifyCardAttr.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      saveCards: [],
    };
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => {
      if (this.verifyCardAttr() && this.verifyInputsText()) {
        this.setState({
          isSaveButtonDisabled: false,
        });
      } else {
        this.setState({
          isSaveButtonDisabled: true,
        });
      }
    });
  };

  onSaveButtonClick() {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
    } = this.state;
    const saveCards = {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
    };
    this.setState((estadoAnterior) => ({
      saveCards: [...estadoAnterior.saveCards, saveCards],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      hasTrunfo: cardTrunfo,
      cardTrunfo: false,
    }));
  }

  verifyCardAttr() {
    const {
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;
    const total = 210;
    const number = 90;
    return ((Number(cardAttr1) >= 0 && Number(cardAttr1) <= number)
      && (Number(cardAttr2) >= 0 && Number(cardAttr2) <= number)
      && (Number(cardAttr3) >= 0 && Number(cardAttr3) <= number)
      && (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= total));
  }

  verifyInputsText() {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
    } = this.state;
    return (cardName !== ''
    && cardDescription !== '' && cardImage !== '' && cardRare !== '');
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      saveCards,
    } = this.state;
    return (
      <div>
        <section>
          <h1>Tryunfo</h1>
          <Form
            onInputChange={ this.onInputChange }
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <Card
            onInputChange={ this.onInputChange }
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
          />
        </section>
      </div>
    );
  }
}

export default App;
