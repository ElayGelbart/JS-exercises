function guessCity(capital, coastal, famous, ancient) {
    if (capital === true && famous === true && ancient == true) { return 'Jerusalem'; }
    else if (capital === false) {
        if (coastal === true) {
            if (famous === true) { return 'Tel Aviv'; }
            else if (ancient === true) { return 'Acre'; }
            return 'Zikim';
        }
        else if (coastal === false && famous === false && ancient === true) {
            return 'Katzrin';
        }
    }
    else {
        return 'Musmus';
    }
}
console.log(guessCity(true, false, false, false));