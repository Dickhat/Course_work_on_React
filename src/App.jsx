import maiLogo from './assets/MAI.svg'
import matiLogo from './assets/MATI.svg'
import './App.css'

function App() {
  return (
    <>
      <div>
        {/*Взятие ссылки на МАТИ и получение логотипа МАТИ */}
        <a href="https://www.mati-rgtu.org/" target="_blank">
        <img src={matiLogo} className="logo" alt="MATI logo" />
        </a>
        {/*Взятие ссылки на МАИ и получение логотипа МАИ */}
        <a href="https://mai.ru/" target="_blank">
        <img src={maiLogo} className="logo mai" alt="MAI logo" />
        </a>
      </div>
      <h1>MATI + MAI</h1>
      {/*Вывод надписи о получении информации об институтах */}
      <p className="read-the-docs">
        Click on the MATI or MAI logos to learn more about universities
      </p>

    </>
  )
}

{/* export default - означает, что экспортируемая функция является основной */ }
export default App