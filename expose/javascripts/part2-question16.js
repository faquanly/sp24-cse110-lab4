let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};
for (property in statistics) {
    if(property.startsWith('r') == true || statistics[property]% 2 == 1) //if the property starts with 'r' or the value is an odd number.
    console.log(`${property}: ${statistics[property]}`);
}