import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import ListaExercicios from './ListaExercicios'
import detalhesExercicios from './detalhesExercicios'
import { NativeRouter as Router, Switch, Route } from 'react-router-native'
 
export default class App extends Component {
  render () {
    return (
      <Router>
        <View style={styles.container}>
          <Switch>
            <Route path='/:idExercicio' component={detalhesExercicios} />
            <Route component={ListaExercicios} />
          </Switch>
        </View>
      </Router>
    )
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})