// days - 0 sunday...

const saveTime = (startDate, endDate) =>{
    const sDate = new Date(startDate.value);
    const sUtcDay = sDate.getUTCDay();
    const eDate = new Date(endDate.value);
    const eUtcDay = eDate.getUTCDay();
    // console.log(sUtcDay);
    // console.log(eUtcDay);
    const newDateStemp = eDate.getTime() - sDate.getTime();
    const nDays = (newDateStemp/(1000*60*60*24)+1);//days between two dates
    const fullWeeks = Math.floor(nDays/7);

    const workingDay = nDays >= 7 ? nDays - (fullWeeks*2) : eUtcDay-sUtcDay+1;//NOTE: (-1 in true not include /+1 in false include) to include the start date in the calculation, can remove it if we want to not include the start date
    
    console.log(`Days between dates ${nDays}`);
    console.log(`Full Weeks: ${fullWeeks}`);
    console.log(`working days: ${workingDay} from the ${sDate} Included`);
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
