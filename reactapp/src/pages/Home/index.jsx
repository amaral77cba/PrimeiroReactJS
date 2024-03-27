
import './styles.css'

export function Home() {
  /*a funcao deve retornar o HTML em um unico elemento e pode ser utilizado o FRAGMENT <> </> ou uma div <div>  </div> */
  return (
    <div className='container'> 
      <h1>Lista de Presenca</h1>
      <input type="text" placeholder="Digite um nome: " />
      <button type="button"> Adicionar </button>
    </div>
  )
}


