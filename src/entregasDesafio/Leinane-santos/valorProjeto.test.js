const {calcularValorTotalProjeto} = require ("../../dominio/calculadora/Projeto/valorProjeto")

describe(" Calcular Valor Total do Projeto", ()=>{
    
    test(" total de horas por Projeto ", () => {
        const totalDeHorasPorProjeto = ["setup",
        "formulario",
        "responsividade",
        "otimizacao_seo",
        "construcao_1_pagina",
        "integracao_mailchimp",
        "ssr",
        "integracao_api_propria"]
        
        expect(calcularHorasDeProjeto(totalDeHorasPorProjeto)).toBe(104)
 })

})