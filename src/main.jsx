import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Game from './KrestikiNoliki.jsx'
import './index.css'

{/*���������� ��� ����� ���� � ��������� �������� ������� � index.html*/ }
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Game />
  </React.StrictMode>,
)
