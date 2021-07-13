import styled from 'styled-components'
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'

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

  return (
  <MainGrid>
    <div className="profileArea" style={{ gridArea: 'profileArea'}}>
      <ProfileSidebar githubUser={githubUser}/>
    </div>
    <div className="welcomeArea" style={{ gridArea: 'welcomeArea'}}>
    <Box>
      Bem vindo
    </Box>
    </div>
    <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea'}}>
    <Box>
      Pessoas
    </Box>
    <Box>
      Comunidades
    </Box>
    </div>  

  </MainGrid>

  )
}
