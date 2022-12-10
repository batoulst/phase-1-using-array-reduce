const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

const totalBatteries=  batteryBatches.reduce(countBat,0)
    
function countBat(accu,current){
    return accu+current;
}