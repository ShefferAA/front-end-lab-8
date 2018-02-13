var play = confirm('Do you want to play a game');

while (play) {
    var range = 6,
        games = 0,
        attemptsUsed = 0,
        attemptsLeft = 3,
        nextRage = true,
        totalPrize = 0,
        maxPrize = 10,
        currentPrize = 10,
        luckyNumber = Math.floor(Math.random() * range);

    while (attemptsUsed < 3 && nextRage) {
        var userNumber = prompt(`Enter a number from 0 to ${range - 1}\nAttempts left: ${attemptsLeft}\nTotal prize: ${totalPrize}$\nPossible prize on current attempt: ${currentPrize}$`);

        if (!isNaN(parseFloat(userNumber)) && isFinite(userNumber) && Number(userNumber) === luckyNumber) {
            totalPrize += currentPrize;
            attemptsUsed = 0;
            attemptsLeft = 3;
            range = range * 2 - 1;
            maxPrize *= 3;
            currentPrize = maxPrize;
            luckyNumber = Math.floor(Math.random() * range);
            nextRage = confirm('Do you want to continue a game?');
        } else {
            attemptsLeft--;
            attemptsUsed++;
            currentPrize = Math.floor(maxPrize / (attemptsUsed * 2));
        }
    }

    console.log(`Thank you for a game. Your prize is ${totalPrize}`);
    play = confirm('Do you want to try again?');
    games++;
}

if (!games) {
    console.log('You did not become a millionaire');
}