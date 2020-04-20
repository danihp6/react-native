class CardData{
    constructor(name){
        this.name=name
        this.index=0
        this.turned=false
        this.selected=false
        this.paired=false
    }

    arePair(card){
        return this.name==card.name && this.index!=card.index
    }

    get getName(){return this.name}

    set setName(name){this.name=name}

    get getIndex(){return this.index}

    set setIndex(index){this.index=index}

    get getTurned(){return this.turned}

    set setTurned(turned){this.turned=turned}

    get getPaired(){return this.paired}

    set setPaired(paired){this.paired=paired}

    get getSelected(){return this.selected}

    set setSelected(selected){this.selected=selected}
}

export let perro1 = new CardData('perro')
export let gato1 = new CardData('gato')
export let elefante1 = new CardData('elefante')
export let girafa1 = new CardData('girafa')
export let tortuga1 = new CardData('tortuga')
export let hormiga1 = new CardData('hormiga')
export let perro2 = new CardData('perro')
export let gato2 = new CardData('gato')
export let elefante2 = new CardData('elefante')
export let girafa2 = new CardData('girafa')
export let tortuga2 = new CardData('tortuga')
export let hormiga2 = new CardData('hormiga')