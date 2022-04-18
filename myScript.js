class DataPickerBuilder extends{
    //código
    constructor(){
        this.propA = "propA";
    }

    aFunction(){
        return true;
    }
}

=====> 

function DataPickerBuilder(){
    this.propA = "propA";
}

DataPickerBuilder.prototype.aFunction = () => {
    return true;
};
