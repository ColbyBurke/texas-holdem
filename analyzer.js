var count = 0

let hand = []

function analyzeHand(code) {
    document.getElementById('advice').innerHTML = 'Advice: ';
    if (hand.length >= 5) {
        return
    } else {
        hand.push(code)
        document.getElementById('hand').innerHTML += document.getElementById(code).innerHTML + '&nbsp&nbsp&nbsp&nbsp'

        if(code.match(/[2-6]/g) !== null) count += 1
        else if(code.match(/[10|J|Q|K|A]/g) !== null) count -= 1
        if (count > 0) {
            document.getElementById('advice').innerHTML += count + " Bet";
        } else {
            document.getElementById('advice').innerHTML += count + " Hold";
        }
        // Only change code above this line
    }
}

function reset(){
    document.getElementById('advice').innerHTML = 'Advice: ';
    document.getElementById('hand').innerHTML = 'Current hand: ';
    count = 0
    hand = []
}


