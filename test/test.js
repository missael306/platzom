const expect    = require("chai").expect;
const platzom = require("..").default;

describe("#Platzom", function(){
    it("Si la palabra termina en 'ar', se le quitan esos dos caracteres", function(){
        const translation = platzom("programar");
        expect(translation).to.equal("program");
    })
    it("Si la palabra inicia con Z, se le añade 'pe' al final", function(){
        const translation = platzom("Zorro");
        expect(translation).to.equal("Zorrope");
    })
    it("Si la palabra traducida tiene 10 o más letras,se debe partir a la mitad y unir con un guión del medio", function(){
        const translation = platzom("Abecedario");
        expect(translation).to.equal("Abece-dario");
    })
    it("Si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve  la misma palabra intercalando mayúsculas y minúsculas", function(){
        const translation = platzom("sometemos");
        expect(translation).to.equal("SoMeTeMoS");
    })
})