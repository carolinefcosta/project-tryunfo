import React from 'react';
import PropTypes from 'prop-types';
import '../styles/App.css';

class Form extends React.Component {
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
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <fieldset>
        <section>
          <legend className="legend">🃏 Adicione Nova Carta 🃏</legend>

          <label htmlFor="name">
            Nome:
            {' '}

            <input
              name="cardName"
              id="name"
              type="text"
              data-testid="name-input"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="textArea" className="text-area">
            Descrição:
            {' '}

            <textarea
              name="cardDescription"
              id="textArea"
              data-testid="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
        </section>

        <section>
          <div>
            <label htmlFor="atrib1">
              Força:
              {' '}

              <input
                name="cardAttr1"
                id="atrib1"
                data-testid="attr1-input"
                type="number"
                value={ cardAttr1 }
                onChange={ onInputChange }
              />
            </label>
          </div>
          <div>
            <label htmlFor="atrib2">
              Ataque:
              {' '}

              <input
                name="cardAttr2"
                id="atrib2"
                data-testid="attr2-input"
                type="number"
                value={ cardAttr2 }
                onChange={ onInputChange }
              />
            </label>
          </div>
          <div>
            <label htmlFor="atrib3">
              Defesa:
              {' '}

              <input
                name="cardAttr3"
                id="atrib3"
                data-testid="attr3-input"
                type="number"
                value={ cardAttr3 }
                onChange={ onInputChange }
              />
            </label>
          </div>
        </section>

        <section>
          <label htmlFor="image">
            Imagem:
            {' '}

            <input
              name="cardImage"
              id="image"
              data-testid="image-input"
              type="text"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
        </section>

        <section>
          <label htmlFor="select">
            <select
              name="cardRare"
              id="select"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
        </section>

        <section>
          <div>
            <label htmlFor="checkbox">
              { hasTrunfo ? 'Você já tem um Super Trunfo em seu baralho'
                : (
                  <>
                    <input
                      name="cardTrunfo"
                      id="checbox"
                      data-testid="trunfo-input"
                      type="checkbox"
                      checked={ cardTrunfo }
                      onChange={ onInputChange }
                    />
                    Super Trybe Trunfo
                  </>
                )}
            </label>
          </div>

          <div>
            <button
              id="button-form"
              data-testid="save-button"
              type="button"
              disabled={ isSaveButtonDisabled }
              onClick={ onSaveButtonClick }
            >
              Salvar

            </button>
          </div>
        </section>
      </fieldset>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
