function distanceFromHqInBlocks(passengerLocation){
    return Math.abs(passengerLocation-42)
}

function distanceFromHqInFeet(passengerLocation){
    return distanceFromHqInBlocks(passengerLocation)*264
}

function distanceTravelledInFeet(start,destination){
    let distance = (destination-start)*264
    return distance<0 ? -distance : distance
}

function calculatesFarePrice(start,destination){
    let distance = distanceTravelledInFeet(start,destination);
    if(distance <= 400) return 0
    else if (distance >400 && distance<=2000) return (distance-400)*0.02
    else if (distance > 2000 && distance <= 2500) return 25
    else return 'cannot travel that far'
}