import styled from 'styled-components'
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'

function ProfileSidebar(propriedades) {
  console.log(propriedades)
  return (
    <Box>
      <img src={`https://github.com/${propriedades.githubUser}.png`} style={{borderRadius: '8px'}} />
    </Box>
  )
}

export default function Home() {

  const githubUser = 'candrade-ti';
  const pessoasFavoritas = ['billyjoe-ram', 'josee-fernandes', 'AndreSeoane', 'devMarcoAntonio', 'enzocsantos18', 'Eduardin-Dev', 
  // 'PedroReinaldoBastos', 'HenriqueMartimianoGomesSalgado', 'Tamiris-Siqueira'
  ];

  return (
    <>
    <AlurakutMenu/>
    <MainGrid>   
      <div className="profileArea" style={{ gridArea: 'profileArea'}}>
        <ProfileSidebar githubUser={githubUser}/>
      </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea'}}>
        <Box>
          <h1 className="title">
          Bem vindo(a)
          </h1>
         <OrkutNostalgicIconSet/>
        </Box>
      </div>
      <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea'}}>
        <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle">Pessoas ({pessoasFavoritas.length})</h2>
          
          <ul>
          {pessoasFavoritas.map((itemAtual) => {
            return (
              <li>
                 <a href={`/users/${itemAtual}`} key={itemAtual}>
                <img src={`https://github.com/${itemAtual}.png`} alt="foto de perfil do amigo" />
                <span>{itemAtual}</span>
              </a>
              </li>             
            )
          })}
          </ul>
        </ProfileRelationsBoxWrapper>
        {/* <Box>
          Comunidades
        </Box> */}
      </div>  
    </MainGrid>    
    </>
  )
}
