import React, { Component } from 'react'
import { StyleSheet, View, Button } from 'react-native'
import exercicios from './exercicios.json'
 
export default class ListaExercicios extends Component {
  render () {
    return (
      <View style={styles.container}>
        {exercicios.map((exercicio, key) => (
          <Button
            key={key}
            title={exercicio.nome}
            onPress={() => this.props.history.push('/' + key)} />
        ))}
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})