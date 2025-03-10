
function checkProbabilityTheory (count){
    var even = 0; // парні
    var odd = 0; //не парні
    for ( var i = 0; i < count; i++){
        var rnd = Math.floor(Math.random() * (1000 - 100 + 1)) + 100; // визначення діапазону від 100 до 1000
        if (rnd % 2){ // парне чи не парне число
            even++;
        } else{
            odd++
        }
    }
    var evenPersentage = (even / count) * 100;
    var oddPersentage = (odd / count) * 100; 
    var abs = Math.abs(evenPersentage - oddPersentage) <= 5 ? "Близько до 50/50" : "Не близько до 50/50";
    console.log("Парних чисел: " + even + ",\nНе парних чисел: " + odd + ",\n" + abs)
}

checkProbabilityTheory(100);



