
function speedmeasurement(speed)
{
   // speed measurement is 'OK' if speed is less than 70km/hr

    if (speed <= 70)
    {
        return 'OK';
    } 
    // give  demerit points  if it is less than 12 .

    else if (speed > 70 && (speed - 70) % 5 == 0 && (speed - 70) / 5 <= 12) 
    {
        const points =  (speed - 70) / 5
        return `Points: `+ points
    }
    // if demerits points are more than 12 it gives 'License suspended'
    else if ( (speed - 70) / 5 > 12) 
    {
        return 'License suspended'
    }
    else if (speed > 70 && (speed - 70) % 5 != 0) 
    {
        return 'Points will increase after 5km/hr speed increase'
    }
    
}
console.log(speedmeasurement(70))








