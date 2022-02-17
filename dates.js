// days - 0 sunday...
//if start day is 6 and end day is 0 we return 1, we should return 0
//if full weeks is 0 and sdate is 6 and edate is 0 return 0
const saveTime = (startDate, endDate) =>{
    const sDate = new Date(startDate.value);
    const sUtcDay = sDate.getUTCDay();
    const eDate = new Date(endDate.value);
    const eUtcDay = eDate.getUTCDay();
    // console.log(sUtcDay);
    // console.log(eUtcDay);
    const newDateStemp = eDate.getTime() - sDate.getTime();
    const nDays = (newDateStemp/(1000*60*60*24));//days between two dates
    const fullWeeks = Math.floor(nDays/7);
    let workingDay = nDays - (fullWeeks*2);//NOTE: (-1 in true not include /+1 in false include) to include the start date in the calculation, can remove it if we want to not include the start date
    //NOTE: if start date in saturday and end date is sunday, special occasion, working day 0 (algorithem says 1)
    if(sUtcDay === 6 && eUtcDay === 0)
    {
        workingDay--;
    }
    //NOTE: if start date in sunday and end date is saturday, special occasion, working day 5 (algorithem says 6)
    if (sUtcDay===0 &&eUtcDay === 6) {
        workingDay--;
    }
    //NOTE: this If checks if the starting day and the end day are the same and if its saturday or  sunday, if true we substruct one working day {because we include the start day and our algorithm}
    // if(sUtcDay === 6 || sUtcDay === 0 ||eUtcDay === 6 || eUtcDay === 0 ){
    //     workingDay--;
    // }
    
    
    console.log(`Days between dates ${nDays}`);
    console.log(`Full Weeks: ${fullWeeks}`);
    console.log(`working days: ${workingDay} from the ${sDate} Excluded`);
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
