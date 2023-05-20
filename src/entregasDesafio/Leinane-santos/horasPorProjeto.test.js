
const { calcularHorasDeProjeto } = require("./horasPorProjeto")

describe("Calcular Horas de Projeto", ()=>{
    test("se a lista contendo 3 funcionalidades terá 24 horas", ()=>{
        const listaDeFuncionalidades = ["setup", "construcao_1_pagina","ssr"]
        
        expect(calcularHorasDeProjeto(listaDeFuncionalidades)).toBe(24)
 })
    
 test("Calculçar horas quando não existe a funcionalidade", () =>{

        const listaFuncionalidadesInexistente = ["testes"]
        expect(calcularHorasDeProjeto(listaFuncionalidadesInexistente)).toBeNaN()
 })

   
 test("Todas as Funcionalidades retornam 104 horas de projeto", ()=>{  

 const listaTodas = [

  "setup",
  "formulario",
  "responsividade",
  "otimizacao_seo",
  "construcao_1_pagina",
  "integracao_mailchimp",
  "ssr",
  "integracao_api_propria" 

]

expect(calcularHorasDeProjeto(listaTodas)).toBe(104)

    })
})