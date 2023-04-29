
import { useContexto } from "../hooks";
import Rota from "../routes";
import Rotas from "../routes/rotas/rotas";


export default function Principal() {
  const { megasena } = useContexto()
  return (
    <>
      {
        megasena.numeroDoConcurso ?
          <div>
            <Rotas />
          </div>
          :
          <div className="carregando">
            <h1>carregando....</h1>
          </div>
      }

    </>
  )
}

