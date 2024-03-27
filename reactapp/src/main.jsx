import React from 'react'
import ReactDOM from 'react-dom/client'
import {Home} from './pages/Home' /* pelo fato do arquivo contido chamar index.jsx nao eh preciso chamar explicitatemente somente a pasta */
/*import './index.css'*/
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home /> {/* eh a chamada para uma funcao que no caso eh a pagina App.jsx que estah a implementacao e o retorno eh um HTML */}
  </React.StrictMode>,
)
