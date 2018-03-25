import { AsyncStorage } from 'react-native'
import { DECKS_STORAGE_KEY } from './constants'

export function submitDecks ({ deckName, deck }) {
    console.log('submit key: ', deckName)
    console.log('submit deck: ', deck)
    return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
        [deckName]:deck,
    }))
}

export function fetchDecks () {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
        .then(formatDeckResults)
}

export function removeDecks(deckName) {
    AsyncStorage.removeItem(DECKS_STORAGE_KEY)
}

function formatDeckResults ( results ) {
    console.log('result: ', results)
    return results === null ? getDefaultDeck() : JSON.parse(results)
}

function getDefaultDeck () {
    
    let key = 'Example Deck'
    let deck = {cards: [{
        question: 'Is this the best example ?',
        isTrue: true
    }], key}
    
    console.log('deck exemplo: ', deck)

    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(deck))

    return deck
}