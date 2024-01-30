module.exports = class Card {
    //all data types are named from the Pokemon TCG API
    constructor(id, name, supertype, hp, attacks, weaknesses, retreatCost, images){
        //string ""xy1-1""
        this.id = id
        //string "Venusaur"
        this.name = name
        //string "Pokemon"
        this.supertype = supertype
        //int "180"
        this.hp = hp
        //multidimensional array
        //[[name, cost[], damage, text], [name, cost[], damage, text]]
        this.attacks = attacks
        //array - [type, value]
        this.weaknesses = weaknesses
        //array - ["colorless", "colorless"]
        this.retreatCost = retreatCost
        //array - [small png, large png]
        this.images = images
    }

    //Get Card Values

    getCardId(){
        return this.id;
    }
    getCardName(){
        return this.name;
    }
    getCardSupertype(){
        return this.supertype;
    }
    getCardHp(){
        return this.hp;
    }
    getCardAttacks(){
        return this.attacks;
    }
    getCardWeaknesses(){
        return this.weaknesses;
    }
    getCardRetreatCost(){
        return this.retreatCost;
    }
    getCardImages(){
        return this.images;
    }

    //Set Card Values... should not be needed as cards are not intended to be changed by gameplay

    setCardId(id){
        this.id = id
    }

    setCardName(name){
        this.name = name
    }

    setCardSupertype(supertype){
        this.supertype = supertype
    }

    setCardHp(hp){
        this.hp = hp
    }

    setCardAttacks(attacks){
        this.attacks = attacks
    }

    setCardWeaknesses(weaknesses){
        this.weaknesses = weaknesses
    }

    setCardRetreatCost(retreatCost){
        this.retreatCost = retreatCost
    }

    setCardImages(images){
        this.images = images
    }

}
