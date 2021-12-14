// code your solution here
function saturdayFun(arg = "roller-skate"){
        return `This Saturday, I want to ${arg}!`;

}
function mondayWork(monday = "go to the office"){
    return `This Monday, I will ${monday}.`;
    
}
function wrapAdjective(wrap = "*"){

    return function (msg = 'special'){
        return `You are ${wrap}${msg}${wrap}!`
    }
}