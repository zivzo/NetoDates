// days - 0 sunday...
//if start day is 6 and end day is 0 we return 1, we should return 0
//if full weeks is 0 and sdate is 6 and edate is 0 return 0
const saveTime = (startDate, endDate) => {
    const sDate = new Date(startDate.value);
    let sUtcDay = sDate.getUTCDay() === 0 ? 7 : sDate.getUTCDay();
    let eDate = new Date(endDate.value);
    let eUtcDay = eDate.getUTCDay() === 0 ? 7 : eDate.getUTCDay();
    let sub = 0;
    //NOTE: both on weekends so need to substruct 1 in the end, means saturday or sunday
    if(sUtcDay > 5 && eUtcDay > 5)
    {
        //both days are weekend
        sub = 1;
    }
    let startDateCounter = sUtcDay > 5 ? 5 : sUtcDay;
    let endDateCounter = eUtcDay> 5 ? 5 : eUtcDay;
    const newDateStemp = eDate.getTime() - sDate.getTime();//days between in milliseconds
    const diffWeek = Math.floor(newDateStemp/(1000*60*60*24*7))//weeks between two dates
    let calcBuisnessDays;

    if (sUtcDay <= eUtcDay) { //Equal to makes it reduce 5 days
        calcBuisnessDays = (diffWeek * 5) + (endDateCounter - startDateCounter)
      } 
      else {
        calcBuisnessDays = ((diffWeek + 1) * 5) - (startDateCounter - endDateCounter)
      }
      calcBuisnessDays -= sub;
    console.log(calcBuisnessDays+1);
    // //NOTE: looking at sunday as thursday
    // if(sUtcDay !== 0 && eUtcDay === 0){
    //     eDate.setDate(eDate.getDate() - 2);
    // }
    
    // //NOTE: looking at saturday as thursday
    // if(sUtcDay === 6 && eUtcDay === 6){

    // }else if(eUtcDay === 6){
    //     eDate.setDate(eDate.getDate() - 1);
    // }
    // const endMinusStartUtc = Math.abs(eUtcDay - sUtcDay);
    // const weeks = (diffDays - endMinusStartUtc) / 7;
    // const buisness =  diffDays - (weeks*2) + endMinusStartUtc;
    // console.log(`buisnesssss: ${buisness}`);
    // const fullWeeks = Math.floor((diffDays/7));

    // const buisnessNoEnds = diffDays - (fullWeeks*2)
    // const buisnessWithEnds = (sUtcDay === 6 ? 0 : sUtcDay) - (eUtcDay === 6 ? 5 : eUtcDay);
    // const daysFromStart = fullWeeks%7;
    
    // console.log(`buisnessNoEnds : ${buisnessNoEnds}`);
    // console.log(`buisnessWithEnds: ${buisnessWithEnds}`);
    // console.log(`diffDays: ${diffDays}`);
    // console.log(`fullweeks: ${fullWeeks}`);
    // console.log(`buisness: ${Math.abs(buisnessNoEnds-buisnessWithEnds)}`);
    // const fullWeeks = Math.floor(diffDays/7);
    // const diffMinusEndUtc = diffDays-(eUtcDay === 6 ? 5 : eUtcDay);
    // //let workingDay = diffDays - (fullWeeks*2);
    // const moduleSeven = diffMinusEndUtc%7;
    // const fullWeeksTimeTwo = Math.floor(diffMinusEndUtc/7)*2;
    // const workingDay = diffMinusEndUtc-fullWeeksTimeTwo;
    //NOTE: Tests ------
    
    

  //NOTE: if start date in saturday and end date is sunday, special occasion, working day 0 (algorithem says 1)
    // if(sUtcDay === 0 && eUtcDay === 6){
    //     workingDay--;
    // }
    
    //NOTE: if start date in sunday and end date is saturday, special occasion, working day 5 (algorithem says 6)

    
    //NOTE: this If checks if the starting day and the end day are the same and if its saturday or  sunday, if true we substruct one working day {because we include the start day and our algorithm}
    // if(sUtcDay === 6 || sUtcDay === 0 ||eUtcDay === 6 || eUtcDay === 0 ){
    //     workingDay--;
    // }

    // if(nDays < 7){
    //     const arr = [];
    //     let dayIterate = nDays;
    //     let isSundaySaturday = sUtcDay;
    //     while (dayIterate >= 0) {
    //         arr.push(isSundaySaturday > 6 ?  isSundaySaturday%7 : isSundaySaturday++);
    //         dayIterate--;
    //     }
    //     const arrDaysLestThanSeven = arr.filter(i => {
            
    //         if(!(i === 6 || i === 0)){
    //             return i;
    //         }
    //     })
    //     console.log(arrDaysLestThanSeven.length);
    // }
    // else{
        
    // }
    //console.log(nDays); 

}
const diffBusinessDays = function(startDate, endDate){
  const sDate = new Date(startDate.value);
  let eDate = new Date(endDate.value);
  let sUtcDay = sDate.getUTCDay()==0?7:sDate.getUTCDay();//number between 1-7
  let eUtcDay = eDate.getUTCDay()==0?7:eDate.getUTCDay();//number between 1-7
  let extraStart = sUtcDay < 6 ? 0 : sUtcDay === 6 ? 2: 1;
  let extraEnd = eUtcDay < 6 ? 0 : 1;
  const newDateStemp = eDate.getTime() - sDate.getTime();//days between in milliseconds
  const days = Math.floor(newDateStemp/(1000*60*60*24))+1;
  const diffWeek = Math.floor(newDateStemp/(1000*60*60*24*7))//weeks between two dates
  let sub = 0;
  if(eUtcDay === 7 && sUtcDay === 7){
    sub += 1;
    console.log('in first if');
  }
  if(sUtcDay == 6 && eUtcDay == 7){
    sub += 1
    console.log('in second if');
  }
  let businessDays;
  if(!(sUtcDay-eUtcDay > 0 && sUtcDay> 5 && eUtcDay !==6)){
    businessDays = days - ((diffWeek*2) + extraStart + extraEnd);
    console.log('Plus');
  }
  else{
    businessDays = days - (((diffWeek+1)*2) + extraStart + extraEnd);
    console.log('Minus');

  }
  businessDays += sub;
  console.log(businessDays);
  console.log(`sUtcDay: ${sUtcDay}`);
  console.log(`eUtcDay: ${eUtcDay}`);
  console.log(`days: ${days}`);
  console.log(`diffWeek: ${diffWeek}`);
}
//NOTE: if sutc - eutc < 0 its a different equation