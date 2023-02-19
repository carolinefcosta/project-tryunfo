import React from 'react';
import PropTypes from 'prop-types';
import '../styles/App.css';

class Card extends React.Component {
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
    } = this.props;

    return (
      <main className="main">
        <div>
          <h1 data-testid="name-card" className="h1">{cardName}</h1>
        </div>
        <div>
          <img
            src={ cardImage }
            alt={ cardName }
            data-testid="image-card"
            className="img"
          />
        </div>
        <div>
          <span data-testid="description-card" className="span">{cardDescription}</span>
        </div>
        <p data-testid="attr1-card" className="atributos">{cardAttr1}</p>
        <p data-testid="attr2-card" className="atributos">{cardAttr2}</p>
        <p data-testid="attr3-card" className="atributos">{cardAttr3}</p>
        <div>
          <span data-testid="rare-card" className="select">{cardRare}</span>
        </div>
        { cardTrunfo === true ? <p data-testid="trunfo-card">Super Trunfo</p> : '' }
      </main>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
