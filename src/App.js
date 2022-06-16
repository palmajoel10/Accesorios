import { Component } from 'react';
import Productos from './components/Productos';


class App extends Component {
  state = {
    productos: [
    { name: 'Reloj', price: 1500, img: '/Productos/reloj.jpg' },
    { name: 'Visera', price: 2000, img: '/Productos/visera.jpg' },
    { name: 'Lentes', price: 5000, img: '/Productos/lentes.jpg' },
    ]
  }
  render() {
    return (
      <div>
        <Productos
        agregarAlCarro={() => console.log('No hace nada')}
        productos={this.state.productos}
        />
      </div>
    )
  }
}

export default App;
