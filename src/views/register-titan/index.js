import React, { Component } from 'react';
import api from '../../services/api';
import './style.css';

export default class RegisterTitan extends Component {

constructor(props) {
  super(props);
  /*{
    "name":"dffhg",
    "age": 23,
    "last_name":"fjjjbbbnj",
    "titan":"encouraçado",
    "height": 1.90,
    "height_titan": 17

  }*/

  this.state = {
    name: "",
    age: "",
    last_name: "",
    titan: "",
    height: "",
    height_titan: ""
  };
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
  this.registerTitan();
}

registerTitan = async () => {

  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');
  headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
  headers.append('GET', 'POST', 'PUT', 'DELETE', 'OPTIONS');

  await api.post('/users', this.state, headers)
  .then(response =>{
    console.log(response);
    alert("Cadastrado com sucesso!!!!!!");
  })
  .catch(error => {
    console.log(error);
    alert("Erro ao cadastrar!!!!!!");
  });
};

  render() {
    return (
      <div className="register-titan">
        <h2>Cadastro de Titans</h2>

        <form className="form-register" onSubmit={this.handleSubmit}>

          <div className="form-group">
            <label>Digite o seu Nome
              <input className="form-control" name="name" type="text" value={this.state.name} onChange={this.handleInputChange} />
            </label>
          </div>

          <div className="form-group">
            <label>Digite a Idade
              <input className="form-control" name="age" type="text" value={this.state.age} onChange={this.handleInputChange} />
            </label>
          </div>

          <div className="form-group">
            <label>Digite o seu Sobre Nome
              <input className="form-control" name="last_name" type="text" value={this.state.last_name} onChange={this.handleInputChange} />
            </label>
          </div>

          <div className="form-group">
            <label>Digite o seu Titan
              <input className="form-control" name="titan" type="text" value={this.state.titan} onChange={this.handleInputChange} />
            </label>
          </div>

          <div className="form-group">
            <label>Digite a sua altura
              <input className="form-control" name="height" type="text" value={this.state.height} onChange={this.handleInputChange} />
            </label>
          </div>

          <div className="form-group">
            <label>Digite a altura do titan
              <input className="form-control" name="height_titan" type="text" value={this.state.height_titan} onChange={this.handleInputChange} />
            </label>
          </div>

          <input className="btn btn-success" type="submit" value="cadastrar" />

        </form>
      </div>
    );
  }
}
