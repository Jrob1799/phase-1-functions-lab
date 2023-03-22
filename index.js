function distanceFromHqInBlocks(someValue) {
    if (someValue >= 42) {
    return (someValue - 42);
    } else {
    return (42 - someValue);
    }
    }

function distanceFromHqInFeet(someValue) {
    let distanceInBlocks = distanceFromHqInBlocks(someValue);
    return (distanceInBlocks * 264);
}

  function distanceTravelledInFeet(start, destination) {
    let start1 = (start * 264);
    let destination1 = (destination * 264);
    if (start > destination) {
        return (start1 - destination1)
    } else {
        return (destination1 - start1)
    }
  }

  function calculatesFarePrice(start, destination) {
    let distanceInFeet = distanceTravelledInFeet(start, destination)
    if (distanceInFeet <= 400) {
        return 0
    } else if (distanceInFeet <= 2000) {
        return ((distanceInFeet - 400) * 0.02)
    }else if (distanceInFeet <= 2500) {
        return 25
    } else {
        return 'cannot travel that far'
    }
  }