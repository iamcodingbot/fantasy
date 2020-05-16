class Constraint{
    constructor(id, text, assetMobile, assetWeb, maxValue, displayOrder){
        this.id = id;
        this.text = text;
        this.assetMobile = assetMobile;
        this.assetWeb = assetWeb;
        this.maxValue = maxValue;
        this.displayOrder = displayOrder;
    }
}

export default Constraint;