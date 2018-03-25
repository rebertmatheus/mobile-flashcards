import React, { Component } from 'react'
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'
import AddDeck from './screens/AddDeck'
import ListDecks from './screens/ListDecks'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { lightBlue, white, blue } from './utils/colors'
import { Constants } from 'expo'

function CardsStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const CardTabs = TabNavigator(
  {
    List: {
      screen: ListDecks,
      navigationOptions: {
        tabBarLabel: 'Decks',
        tabBarIcon: ({tintColor}) => <MaterialCommunityIcons name='cards' size={30} color={tintColor} />
      }
    },
    Add: {
      screen: AddDeck,
      navigationOptions: {
        tabBarLabel: 'Add Decks',
        tabBarIcon: ({tintColor}) => <Ionicons name='ios-add-circle' size={30} color={tintColor} />
      }
    }
  },
  {
    navigationOptions: {header: null},
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? blue : white,
      style: {
        height: 56,
        backgroundColor: Platform.OS === 'ios' ? white : blue,
        shadowColor: 'rgba(0,0,0,0.24)',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius:6,
        shadowOpacity:1
      }
    }
  }
)

const CardsStackNavigator = StackNavigator({
  Home: {
    screen: CardTabs
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: { backgroundColor: lightBlue }
    }
  }
})

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={styles.container}>
          <CardsStatusBar backgroundColor={lightBlue} barStyle='light-content' />
          <CardsStackNavigator />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})
