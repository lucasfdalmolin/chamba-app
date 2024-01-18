import { View, Text } from 'react-native'
import React from 'react'
import Layout from '../components/Layout'

const Home = () => {

  /**
   * Esta pagina va a ser la pagina principal, la cual va a estar compuesta por :
   * -Parte superior con el logo
   * -Filtros por botones
   * -Navbar inferior la cual va a tener los botones para moverse por la pagina (home, profile, log out)
   * 
   */

  return (
    <Layout>
      <Text>Home</Text>
    </Layout>
  )

}

export default Home