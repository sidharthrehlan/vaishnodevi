
const notifier = require('node-notifier');

const {fetchDormatry, fetchRoom, fetchRopeway, fetchBatteryCar} = require('./api')
const REQUIRED_ROOM_DATES = ['2024-05-03'];
const REQUIRED_ROPEWAY_DATES = ['2024-05-04']
const REQUIRED_BATTERY_DATES = ['2024-05-03']


const isRoomAvailable = (dormatoryRoomList, roomList)=>{
  let isAvailable = false;
  if(dormatoryRoomList.length > 0){
    REQUIRED_ROOM_DATES.forEach((reqDate)=>{
        if(dormatoryRoomList.includes(reqDate)){
          isAvailable = true;
        }
    })
  }

  if(roomList.length > 0){
    REQUIRED_ROOM_DATES.forEach((reqDate)=>{
        if(roomList.includes(reqDate)){
          isAvailable = true;
        }
    })
  }

  return  isAvailable;
}

const isRopewayAvailable = (ropewayList) => {
  let isAvailable = false;
  if(ropewayList.length > 0){
    REQUIRED_ROPEWAY_DATES.forEach((reqDate)=>{
        if(ropewayList.includes(reqDate)){
          isAvailable = true;
        }
    })
  }
  return isAvailable;
}

const isBatteryCarAvailable = (batteryCarList) => {
  let isAvailable = false;
  if(batteryCarList.length > 0){
    REQUIRED_BATTERY_DATES.forEach((reqDate)=>{
        if(batteryCarList.includes(reqDate)){
          isAvailable = true;
        }
    })
  }
  return isAvailable;
}

// Function to trigger Windows notification based on the result
function triggerRoomNotification(dormatryAvailable, roomAvailable) {
    console.log('in nofitfy');
  // Example: Trigger a notification if the result meets a certain condition
 const msg = dormatryAvailable.length > 0? 'Doratry Available': 'Room Available';
 const roomDates = [...dormatryAvailable, ...roomAvailable];

    notifier.notify({
      title: 'Vaishno devi room tickets available',
      message: `${msg}-----${JSON.stringify(roomDates)}`,
      sound: true, // Play notification sound
      wait: true, // Wait for notification to be closed by user
    });
//  }
}

// Function to trigger Windows notification based on the result
function triggerRopewayNotification() {

  notifier.notify({
    title: 'Vaishno devi tickets available',
    message: `Ropeway available`,
    sound: true, // Play notification sound
    wait: true, // Wait for notification to be closed by user
  });
}

// Function to trigger Windows notification based on the result
function triggerBatteryCarNotification() {

  notifier.notify({
    title: 'Vaishno devi tickets available',
    message: `BatteryCar available on ${JSON.stringify(REQUIRED_BATTERY_DATES)}`,
    sound: true, // Play notification sound
    wait: true, // Wait for notification to be closed by user
  });
}

const fetchAndtriggerNotification = async ()=>{
    try {
        console.log('start execution')
        const dormatryData = await fetchDormatry();
        const roomData = await fetchRoom();
        const ropewayData = await fetchRopeway();
        const batteryCarData = await fetchBatteryCar();
        console.log('dormatryData resonse -----',dormatryData)
        console.log('roomData resonse -----',roomData)
        console.log('ropwway resonse -----',ropewayData)
        console.log('batteryCar resonse -----',batteryCarData)
        const endDate = data.startAndEndDates[1];
        const dormatryAvailable = dormatryData.availableDatesList;
        const roomAvailable = roomData.availableDatesList;
        const ropewayAvailable = ropewayData.availableDatesList;
        const batteryCarAvailable = batteryCarData.availableDatesList;
        console.log('---------dormatryAvailable-------', dormatryAvailable)
        console.log('---------roomAvailable-------', roomAvailable)
        console.log('---------ropewayAvailable-------', ropewayAvailable)
        console.log('---------batteryCarAvailable-------', batteryCarAvailable)
        if(isRoomAvailable(dormatryAvailable, roomAvailable)){
          triggerRoomNotification(dormatryAvailable, roomAvailable);
        }

        if(isRopewayAvailable(ropewayAvailable)){
          triggerRopewayNotification()
        }
       
        if(isBatteryCarAvailable(batteryCarAvailable)){
          triggerBatteryCarNotification()
        }
       
      } catch (error) {
        // Handle errors
      }
}

// Main function to fetch data and trigger notification
 function main() {
 // fetchAndtriggerNotification();
    setInterval(fetchAndtriggerNotification, 30000); 
 }

// Call the main function

main();


