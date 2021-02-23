import React, { Component } from 'react';
import api from '../../services/api.js';

import './style.css';

export default class DetailTitan extends Component {

  state = {
    id: "",
    name: "",
    age: "",
    last_name: "",
    titan: "",
    height: "",
    height_titan: "",
  };

constructor(props) {
  super(props);

  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleInputChange = this.handleInputChange.bind(this);
}

handleInputChange(event) {
  const target = event.target;
  const value = target.value;
  const name = target.name;

  this.setState({
    [name]:value
  });
}

handleSubmit(event) {
  event.preventDefault();
  console.log("state enviado ->" + this.state);
  this.updateTitan();
}

async componentDidMount() {
  const { id } = this.props.match.params;
  const response = await api.get(`/users/${id}`);
  console.log(`id: ${id}`);
  this.setState(
    {
     id: id, name: response.data.name,
     age: response.data.age,
     last_name: response.data.last_name,
     titan: response.data.titan,
     height: response.data.height,
     height_titan: response.data.height_titan
   }
 );
}

deleteTitan = async () => {
  const { id } = this.state;
  const response = await api.delete(`/users/${id}`);
  console.log(response);
  if(response.status === 200) {
    alert("titan excluido com sucesso!!");
    this.props.history.push('/list-titan');
  }
}

updateTitan = async () => {
   await api.put('/users', this.state)
  .then(response => {
    alert("Titan Alterado com sucesso");
    this.props.history.push('/list-titan');
  })
  .catch(error => {
    alert("erro ao alterar Titan");
  })
}

  render() {

    const { id, name, age, last_name, titan, height, height_titan } = this.state;

    return (
      <div className="detail-titan">
      <div className="details">
        <h2>Detalhe do Titan</h2>
        <h3> <span className="contrast"> {name} {last_name} </span> </h3>
        <p>
          Codigo:<span className="contrast"> {id} </span> <br />
          Idade: <span className="contrast"> {age} </span><br />
          Altura: <span className="contrast"> {height} </span><br />
          Titan: <span className="contrast"> {titan} </span><br />
          Altura do Titan: <span className="contrast"> {height_titan} </span> <br />
        </p>
        </div>
        <div className="form-details">
        <h2>Alterar Dados do Titan</h2>
        <form className="form-d" onSubmit={this.handleSubmit}>

          <div className="form-group">
            <label>Digite o seu Nome
              <input name="name" className="form-control" type="text" value={this.state.name} onChange={this.handleInputChange} />
            </label>
          </div>

          <div className="form-group">
            <label>Digite a Idade
              <input name="age" className="form-control" type="text" value={this.state.age} onChange={this.handleInputChange} />
            </label>
          </div>

          <div className="form-group">
            <label>Digite o seu Sobre Nome
              <input name="last_name" className="form-control" type="text" value={this.state.last_name} onChange={this.handleInputChange} />
            </label>
          </div>

          <div className="form-group">
            <label>Digite o seu Titan
              <input name="titan" className="form-control" type="text" value={this.state.titan} onChange={this.handleInputChange} />
            </label>
          </div>

          <div className="form-group">
            <label>Digite a sua altura
              <input name="height" className="form-control" type="text" value={this.state.height} onChange={this.handleInputChange} />
            </label>
          </div>

          <div className="form-group">
            <label>Digite a altura do titan
              <input name="height_titan" className="form-control" type="text" value={this.state.height_titan} onChange={this.handleInputChange} />
            </label>
          </div>

          <input type="submit" className="btn btn-warning" value="Alterar" />

        </form>

        <button className="btn btn-danger" onClick={() => this.deleteTitan()}>
          Excluir
        </button>
        </div>
      </div>
    );
  }
}
