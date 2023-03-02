const { response, request } = require('express');
const { validationResult } = require('express-validator');

const existeMunicip = async(ubicacio = '',res = response, next)=>{
    const municipios = [
        "amatitlán",
        "chinautla",
        "chuarrancho",
        "fraijanes",
        "guatemala",
        "mixco",
        "palencia",
        "san josé del golfo",
        "san josé pinula",
        "san juan sacatepéquez",
        "san miguel petapa",
        "san pedro ayampuc",
        "san pedro sacatepéquez",
        "san raymundo",
        "santa catarina pinula",
        "villa canales",
        "villa nueva"
    ];
  for(let i = 0; i < municipios.length; i++){
    console.log("municipos"+municipios[i])
    console.log("entrada"+ubicacio)
    if(municipios[i]===ubicacio){
        next();
    }else{
        console.log("entramos")
        res.json({
            msg:`El Municipo ${ubicacio} no esta en Guatemala jeje`
        })
    }
  }
    
    
    
    
    
}



module.exports = {
    existeMunicip
}