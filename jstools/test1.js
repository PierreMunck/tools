
const isnombreprive = ( nombre) => {
    const div3 = nombre % 3 == 0;
    const div5 = nombre % 5 == 0;
    let output = div3 ? `Voyage` : ``;
    output += div3 && div5 ? `-` : ``;
    output += div5 ? `privée` : ``;
    return output;
}

const soupeLettre = (str) => {
    let output = ``;
    for(let i = 0; i < str.length ; i = i + 2){
        const lettre = str.slice(i,i+1);
        const nombre = str.slice(i+1,i+2);
        for(let j = 0; j < nombre; j++){
            output += lettre;
        }
    }
    return output;
}

String.prototype.vpg_replace = function(car){
    let output = ``;
    
    for(let i = 0; i < this.length ; i++){
        const lettre = this.slice(i,i+1);
        output += lettre.match(/[aeiou]/gi) ? car : lettre;
    }
    return output;
}




console.log("welcome on board".vpg_replace('u'));