let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
}

var total = 0;

for (const x in statistics){
    console.log(x);
    let num = statistics[x] % 2;

    if(x[0] == 'r' || num != 0){
        console.log('hit');
        total = total + statistics[x];
    }
}

console.log(total);
return total;