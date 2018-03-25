import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { addDeck, receiveDecks } from '../actions'
import { fetchDecks } from '../utils/api'
import { AppLoading } from 'expo'

class ListDecks extends Component {
    state = {
        ready: false
      }

    componentDidMount() {
        const { dispatch } = this.props

        fetchDecks()
        .then(( decks ) => dispatch(receiveDecks(decks)))
        .then(() => this.setState(() => ({ready: true})))
    }
    render() {
        const { decks } = this.props
        const { ready } = this.state
    
        if(ready === false) {
          return <AppLoading/>
        }
    
        return (
          <View>
            <Text>{JSON.stringify(this.props)}</Text>
          </View>
        )
      }
}

function mapStateToProps (decks) {
    return {
        decks
    }
}

export default connect(mapStateToProps)(ListDecks)