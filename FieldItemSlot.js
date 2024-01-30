module.exports = class FieldItemSlot {
    constructor(fieldItem){
        this.fieldItem = fieldItem
    }

    getFieldItem(){
        return this.fieldItem
    }

    setFieldItem(fieldItem){
        this.fieldItem = fieldItem
    }
}
