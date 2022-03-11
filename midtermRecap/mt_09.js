function digitalClock(secs)
{
    secs = Math.round(secs);
    var hours = Math.floor(secs / (60 * 60));
    if(hours >= 24)hours%=24

    var divisor_for_minutes = secs % (60 * 60);
    var minutes = Math.floor(divisor_for_minutes / 60);

    var divisor_for_seconds = divisor_for_minutes % 60;
    var seconds = Math.ceil(divisor_for_seconds);

    var obj = `"${hours}:${minutes}:${seconds}"`
    return obj;
}
console.log(digitalClock(5025))
console.log(digitalClock(61201))
console.log(digitalClock(87000))