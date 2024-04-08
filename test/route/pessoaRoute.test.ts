

function somando(x, y){
    return x + y
}



describe("Testes do controller", () => {
    it("funcao somando", () => {
        let result = somando(5, 5)
        expect(result).toEqual(10)
    })
})