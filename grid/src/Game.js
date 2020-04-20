import { perro1, perro2, gato1, gato2, elefante1, elefante2, girafa1, girafa2, tortuga1, tortuga2, hormiga1, hormiga2 } from './CardData'

class Game {
    constructor(cards) {
        this.cards = cards
        this.state = 'none'
        //this.paused = false
    }

    set setState(state) { this.state = state }

    get getState() { return this.state }

    set setCards(cards) { this.cards = cards }

    get getCards() { return this.cards }

    getCard(index) { return this.cards[index] }

    //get getPaused(){return this.paused}

    //set setPaused(paused){this.paused = paused}

    getSelectedCards() {
        let selectedCards = []
        this.cards.forEach(card => {
            if (card.getSelected) selectedCards.push(card)
        })
        return selectedCards
    }
}

export let defaultGame = new Game([perro1, perro2, gato1, gato2, elefante1, elefante2, girafa1, girafa2, tortuga1, tortuga2, hormiga1, hormiga2])