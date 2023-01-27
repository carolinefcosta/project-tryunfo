import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <fieldset>
        <legend>Adicione Nova Carta</legend>

        <label htmlFor="name">
          Nome
          <input id="name" type="text" data-testid="name-input" />
        </label>

        <label htmlFor="textArea">
          Descrição
          <textarea id="textArea" data-testid="description-input" />
        </label>

        <label htmlFor="atrib1">
          Atributo 01
          <input id="atrib1" data-testid="attr1-input" type="number" />
        </label>

        <label htmlFor="atrib2">
          Atributo 02
          <input id="atrib2" data-testid="attr2-input" type="number" />
        </label>

        <label htmlFor="atrib3">
          Atributo 03
          <input id="atrib3" data-testid="attr3-input" type="number" />
        </label>

        <label htmlFor="image">
          Imagem
          <input id="image" data-testid="image-input" type="text" />
        </label>

        <label htmlFor="select">
          <select id="select" data-testid="rare-input">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>

        <label htmlFor="checkbox">
          <input id="checbox" data-testid="trunfo-input" type="checkbox" />
          Super Trybe Trunfo
        </label>

        <button data-testid="save-button" type="button">Salvar</button>

      </fieldset>
    );
  }
}

export default Form;
