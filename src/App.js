import React from 'react';
import './App.css';

const jsonData = [
  { id: 1, name: 'Genta Pradana Putra Agya' },
  { id: 1, name: 'A11.2021.13499' },
];

function App() {
  return (
    <div>
      <div className="App">
      <h1>TUGAS REACT JS</h1>
      {jsonData.map(item => (
        <p>{item.name}</p>
      ))
      }
    </div>

    <div className="App container">
          <h1 className="text-danger">BootStrap</h1>
            <button className="btn btn-primary">Submit</button>
        </div>

        <Deskripsi
          judul="Latihan Reactjs - props"
          penulis="mahasiswa mahasiswi"
          deskripsisingkat="cerita mahasiswa"
        />
      </div>
    );
}

function Deskripsi({judul, penulis, deskripsisingkat}){
  return(
    <div>
      <h1>{judul}</h1>
        <div>
          <b>{penulis}</b>
        </div>
        <div>
          {deskripsisingkat}
        </div>
    </div>
  )
}

export default App;

