let airCondition = require("./airCondition.js");

decribe('airCondition', () => {
    let airCondition;
    beforeEach(( )=> {
        airCondition = new airCondition();
    })

    test("Turn Ac On", () =>{
        airCondition.toggle();
        let result = airCondition.isOn();
        expect(result).toBe(true);
    })

    test("Turn Ac Off", () => {
        airCondition.toggle();
        let result = airCondition.isOn();
        expect(result).toBe(true);
        airCondition.toggle();
        expect(airCondition.isOn()).toBe(false);
    })

    test("Temperature increase Test", ()=>{
        airCondition.toggle();
        let result = airCondition.isPowerOn();
        expect(result).toBe(true);
        let result1 = airCondition.getAcTemp();
        expect(result1).toBe(16)
        airCondition.increaseTemp();
        expect(airCondition.getAcTemp()).toBe(17);
    })

    test("Temperature decrease Test", ()=>{
        airCondition.toggle();
        let result = airCondition.isPowerOn();
        expect(result).toBe(true);
        let result1 = airCondition.getAcTemp();
        expect(result1).toBe(16)
        airCondition.decreaseTemp();
        expect(airCondition.getAcTemp()).toBe(16);
    })

    test("Temperature decrease test", ()=>{
        airCondition.toggle();
        let result = airCondition.isPowerOn();
        expect(result).toBe(true);
        let result1 = airCondition.getAcTemp();
        expect(result1).toBe(16)
        airCondition.increaseTemp();
        for (let index = 0; index < 16; index++) {
            airCondition.increaseTemp();
        }
        expect(airCondition.getAcTemp()).toBe(30);
    })



    
})