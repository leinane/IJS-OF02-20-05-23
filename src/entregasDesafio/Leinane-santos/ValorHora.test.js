const{calcularValorPorHora}= require("../../dominio/calculadora/Hora/valorHora")

describe("Calcular Valor por Hora", ()=>{
    const SalarioMinimo = 1300
    const valorPorHoraCalculado = calcularValorPorHora(SalarioMinimo)
    const valorPorHoraEsperado = 8 

 test("Salário mínimo de 1300 reais", ()=> {
    expect(valorPorHoraCalculado).toBe(valorPorHoraEsperado)    
 })

 test(" Valor por hora do salário mínimo seja maior que zero", ()=>{
    const zero = 0
    expect(valorPorHoraCalculado).toBeGreaterThan(zero)

 })

})