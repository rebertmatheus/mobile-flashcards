import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Platform, TextInput } from 'react-native'
import TouchableButton from '../components/TouchableButton'
import { connect } from 'react-redux'
import { addDeck } from '../actions'
import { submitDecks, removeDecks } from '../utils/api'
import { blue, lightBlue, white, gray } from '../utils/colors'

class AddDeck extends Component {

    state = {
        deckName: ''
    }

    onSubmit = () => {
        console.log('Entrou onSubmit')

        const { deckName } = this.state
        const deck = {cards: [{
            question: 'Is this the best example ?',
            isTrue: true
        }], deckName}

        console.log('State: ', deckName)
        this.props.dispatch(addDeck({
            [deckName]: deck
        }))

        console.log('Chamando submit: ', deckName)
        submitDecks({ deckName, deck })

        console.log('Saiu do submit')
        this.setState(() => ({
            deckName: ''
        }))
    }

    render() {
        return(
            <View style={styles.center}>
                {/*<TextInput style={styles.inputsText} onChangeText={(deckName) => this.setState({deckName})} value={this.state.deckName}/>*/}
                <TextInput style={styles.inputsText} onChangeText={(deckName) => this.setState({deckName})} />
                <TouchableButton childrenText='Add New Deck' onPress={ this.onSubmit } />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    center: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 30,
      marginRight: 30
    },
    inputsText: {
      height: 40,
      width: 320,
      borderColor: gray,
      borderWidth:1,
      margin: 10,
      padding: 10,
      backgroundColor: white
    }
  })

function mapStateToProps(state) {
    const { key } = state
    return {
        state
    }
}

export default connect(mapStateToProps)(AddDeck)