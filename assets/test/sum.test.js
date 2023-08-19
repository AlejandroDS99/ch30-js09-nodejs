// importar el archivoa probar
const { suma } = require("../test/sum");

// test("Prueba de 1 + 3 = 4", ()=>{});
test("Prueba de 1 + 3 = 4", ()=>{
    expect( sum(1,3) ).tobe(4);
});
