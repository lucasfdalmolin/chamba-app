import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Logobar from './Logobar';
import Navbar from './Navbar';

const Layout = ( { children }: LayoutProps ) => {

  /**
   * Pagina que recibe como children un componente.
   * El proposito de este componente es envolver a una pagina y que se muestren en la parte superior el logo y en la inferior la navbar
   */

  return (
    <View>
      <Logobar/>
      { children }
      <Navbar/>
    </View>
  )
}

export default Layout;

const styles = StyleSheet.create({
  container : {

  }
})

interface LayoutProps {
  children: React.ReactNode
}