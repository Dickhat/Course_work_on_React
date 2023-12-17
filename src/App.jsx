import maiLogo from './assets/MAI.svg'
import matiLogo from './assets/MATI.svg'
import './App.css'

function App() {
  return (
    <>
      <div>
        {/*������ ������ �� ���� � ��������� �������� ���� */}
        <a href="https://www.mati-rgtu.org/" target="_blank">
        <img src={matiLogo} className="logo" alt="MATI logo" />
        </a>
        {/*������ ������ �� ��� � ��������� �������� ��� */}
        <a href="https://mai.ru/" target="_blank">
        <img src={maiLogo} className="logo mai" alt="MAI logo" />
        </a>
      </div>
      <h1>MATI + MAI</h1>
      {/*����� ������� � ��������� ���������� �� ���������� */}
      <p className="read-the-docs">
        Click on the MATI or MAI logos to learn more about universities
      </p>

    </>
  )
}

{/* export default - ��������, ��� �������������� ������� �������� �������� */ }
export default App