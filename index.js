function distanceFromHqInBlocks(passengerLocation){
    return Math.max(passengerLocation,42)-Math.min(passengerLocation,42)
}

function distanceFromHqInFeet(passengerLocation){
    return distanceFromHqInBlocks(passengerLocation)*264
}
