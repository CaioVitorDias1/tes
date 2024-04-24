

function somando(x, y){
    return x + y
}



describe("Testes do controller", () => {
    it("funcao somando", () => {
        let result = somando(5, 5)
        expect(result).toEqual(10)
    })

    it("funcao somando 2", () => {
        let result = somando(3, 2)
        expect(result).toEqual(5)
    })
})