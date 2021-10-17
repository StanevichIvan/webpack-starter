const webpack_development = require("./webpack.development")
// @ponicode
describe("webpack_development", () => {
    test("0", () => {
        let callFunction = () => {
            webpack_development({ mode: "pdf" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            webpack_development({ mode: "jpeg" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            webpack_development({ mode: "m2v" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            webpack_development({ mode: "mpe" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            webpack_development({ mode: undefined })
        }
    
        expect(callFunction).not.toThrow()
    })
})
