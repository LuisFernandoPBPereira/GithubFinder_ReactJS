import * as S from './styled'
import { Header } from "./Components/Header/Header";
import { Input } from './Components/Input/Input';
import { Button } from './Components/Button/Button';
import { Repositories } from './Components/Repositories/Repositories';
import { useState } from 'react';

function App() {

  const [user, setUser] = useState("")
  const [currentUser, setCurrentUser] = useState(null)
  const [repos, setRepos] = useState(null)

  const handleGetData = async () => {
    // Acessamos a API do github de forma assíncrona
    const userData = await fetch(`https://api.github.com/users/${user}`)
    const newUser = await userData.json();
    
    //Se tivermos o nome do github
    if(newUser.name){
      // Pegamos a foto, nome, bio e nome do @
      const {avatar_url, name, bio, login} = newUser
      setCurrentUser({avatar_url, name, bio, login})
      //Acessamos os repositórios
      const reposData = await fetch(`https://api.github.com/users/${user}/repos`)
      //Recebemos em formato de JSON
      const newRepos = await reposData.json();

      //Se tivermos repositórios
      if(newRepos.length){
        setRepos(newRepos)
      }
    }
  }

  return (
    <S.App>
      <Header/>
      <div className="content">
        <div className="info">
          <div className='data'>
            <h2>Encontre seu Github!</h2>
            <Input name="usuario"
                   value={user} 
                   placeholder={"@username"}
                   onChange={event => setUser(event.target.value)}/>
            
            <Button label={"Buscar"}
                    onClick={handleGetData}/>
          </div>
          {currentUser?.name ? (
            <div className='profile'>
              <img className='profileIcon'
                  src={currentUser.avatar_url} 
                  alt="Imagem de Perfil"/>
              <div>
                <h3>{currentUser.name}</h3>
                <span>{currentUser.login}</span>
                <p>{currentUser.bio}</p>
              </div>
            </div>

          ) : null}
          {repos?.length ? (
            <div>
            <hr/>
              <h2>Repositórios</h2>
              {repos.map((repo, index) => (
                <Repositories key={index} href={`https://github.com/${currentUser.login}/${repo.name}`} title={repo.name} description={repo.description}/>
              ))}
            </div>
          ): null}
        </div>
      </div>
    </S.App>
  );
}

export default App;
