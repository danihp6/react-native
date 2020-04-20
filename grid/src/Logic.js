
export let doTurn = (game,index,updateGame)=>{
    game.getCard(index).setTurned = true
    game.getCard(index).setSelected = true
    if(game.state=='none'){
        game.setState = 'one'
    }
    else if(game.state=='one'){
        cardsSelected=game.getSelectedCards()
        if(cardsSelected[0].arePair(cardsSelected[1])){
            cardsSelected[0].setPaired = true
            cardsSelected[1].setPaired = true
        } else {
            cardsSelected[0].setTurned = false
            cardsSelected[1].setTurned = false
        }
        cardsSelected[0].setSelected = false
        cardsSelected[1].setSelected = false
        game.setState = 'none'
    }
    // game.setPaused=false
    updateGame(game)
}