function greeting(greetingHandler, name){
    greetingHandler(name);
}

function greetingHandler(name){
    console.log('Good Morning', name)
}
function greetingEvening(name){
    console.log('Good Evening', name)
}
function greetingNight(name){
    console.log('Good Night', name)
}



greeting(greetingHandler, 'Badhon')
greeting(greetingEvening, 'Tom Cruise')
greeting(greetingNight, 'Tom Brady')
function work(x, y = 4) {
    return x + y;
}

