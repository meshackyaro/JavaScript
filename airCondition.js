class airCondition {
    constructor() {
        this.acIsOn = false
        this.temp = 16;
    }
    isOn() {
        return this.acIsOn;
    }
    toggle() {
        this.acIsOn = !this.acIsOn;
    }
    increaseTemp() {
        if (this.isOn() && this.temp >= 16 && this.temp < 30) {
            this.temp += 1;
        }
    }
    getAcTemp() {
        return this.temp;
    }
    decreaseTemp() {
        if (this.isOn() && this.temp < 16 && this.temp >= 30) {
            this.temp -= 1;
        }
    }
}
module.exports = airCondition;