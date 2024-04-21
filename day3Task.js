obj1 = {
    name: "vec",
    population: 100,
    temp: 20,
    currency: "pounds",
}

obj2 = {
    name: "big-job island",
    population: 120,
    temp: 45,
    currency: "dollars",
}

obj3 = {
    name: "cadence",
    population: 75,
    temp: 15,
    currency: "dollars",
}
obj4 = {
    name: "vimless",
    population: 70,
    temp: 37,
    currency: "cedi",
}
obj5 = {
    name: "doomland",
    population: 100,
    temp: 25,
    currency: "francs",
}
obj6 = {
    name: "new-island",
    population: 89,
    temp: 23,
    currency: "dollars",
}
obj7 = {
    name: "cleopatra's lamp",
    population: 110,
    temp: 29,
    currency: "cleos",
}
obj8 = {
    name: "boyce",
    population: 60,
    temp: 23,
    currency: "boyce",
}
obj9 = {
    name: "glentoran",
    population: 75,
    temp: 27,
    currency: "pounds",
}

let raw_array = [[null, obj1, obj2, obj3], [obj4, obj5, obj6, null], [obj7, null, obj8, obj9]];
let totalPopulation = 0

for (const index of raw_array) {
    for (const inner_index in index) {
        if (index[inner_index] != null && index[inner_index].temp >= 10){
        totalPopulation += index[inner_index].population;
        }

    }
}
console.log(totalPopulation)


