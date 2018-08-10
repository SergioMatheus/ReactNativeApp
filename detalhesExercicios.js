import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import exercicios from './exercicios.json'
 
export default class detalheExercicio extends Component {
  constructor () {
    super()
    this.state = {
      exercicio: undefined
    }
  }
 
  componentDidMount () {
    const idExercicio = parseInt(this.props.match.params.idExercicio, 10)
 
    this.setState({
      exercicio: exercicios
        .filter((exercicio, key) => idExercicio === key)
        .shift()
    })
  }
 
  render () {
    const { exercicio } = this.state
 
    if (!exercicio) {
      return (
        <View />
      )
    }
 
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{exercicio.nomeExercicio}</Text>
        <Text style={styles.text}>{exercicio.descricao}</Text>
        <Button title='Voltar' onPress={() => this.props.history.push('/')} />
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 10
  },
  text: {
    fontSize: 20,
    marginBottom: 10
  },
  date: {
    fontSize: 25
  }
})