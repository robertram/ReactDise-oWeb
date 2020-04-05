import React, { Component } from "react";
import { render } from "react-dom";
import Bienvenido from './components/Bienvenido';
import DropDown from './components/DropDown';

import "./style.css";


class Formulario extends Component {
  constructor() {
    super();
    this.state = {
      nombre: '',
      correo: '',
      password: '',
      direccion: '',
      prioridad: ''
    }
  }
  //sincronizarNombre(nombre){
  //console.log(nombre.value)
  //}
  //sincronizarCorreo(corre){
  //console.log(correo.value)
  //}
  //sincronizarPassword(password){
  //console.log(password.value)
  //}
  sincronizarCambios(control) {
    const { name, value } = control;
    const state = {};
    state[name] = value;
    this.setState(state)
  }
  enviarFormulario = (e) => {
    e.preventDefault();
    console.log(this.state)
  }
  render() {
    return (<div>
      <form>
        <div>
          <input
            id="nombre"
            name="nombre"
            type="text"
            placeholder="Nombre"
            onChange={(ev) => { this.sincronizarCambios(ev.target) }}
          />
        </div>
        <div>
          <input
            id="correo"
            name="correo"
            type="text"
            placeholder="Correo"
            onChange={(ev) => { this.sincronizarCambios(ev.target) }}
          /></div>

        <div>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Contraseña"
            onChange={(ev) => { this.sincronizarCambios(ev.target) }}
          />
        </div>

        <div>
          <input
            id="direccion"
            name="direccion"
            type="text"
            placeholder="Direccion"
            onChange={(ev) => { this.sincronizarCambios(ev.target) }}
          />
        </div>
        <div className="dropdown">
          <DropDown />
        </div>
        <button
          type="submit"
          onClick={this.enviarFormulario}>Enviar</button>
        <button type="reset">Limpiar</button>
      </form>
    </div>)
  }
}


// TODO: Switch to https://github.com/palmerhq/the-platform#stylesheet when it will be stable
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Robert Ramírez"
    };
  }

  render() {
    return (
      <div>
      <Bienvenido />
        <h1>Fomulario</h1>
        <Formulario />
        <p>Hecho por: {this.state.name}</p>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
