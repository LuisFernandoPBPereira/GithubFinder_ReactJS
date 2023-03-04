import * as S from './styled'
import { Header } from "./Components/Header/Header";
import { Input } from './Components/Input/Input';
import { Button } from './Components/Button/Button';
import { Repositories } from './Components/Repositories/Repositories';

function App() {
  return (
    <S.App>
      <Header/>
      <div className="content">
        <div className="info">
          <div className='data'>
            <Input placeholder={"@username"}/>
            <Button label={"Buscar"}/>
          </div>
          <div className='profile'>
            <img className='profileIcon'
                 src="https://github.com/LuisFernandoPBPereira.png" 
                 alt="Imagem de Perfil"/>
            <div>
              <h3>Luis Fernando</h3>
              <span>@Luis Fernando</span>
              <p>Descrição</p>
            </div>
          </div>
          <div>
          <hr/>
            <h4>Repositórios</h4>
            <Repositories title="CRUD-JS" description={"Um Crud feito em JS"}/>
          </div>
        </div>
      </div>
    </S.App>
  );
}

export default App;
