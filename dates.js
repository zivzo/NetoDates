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
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
=======
>>>>>>> Stashed changes
}
async function GetHebrewHoliday(){
    const moadim =await fetch('https://www.hebcal.com/hebcal?v=1&cfg=json&maj=on&min=on&mod=on&nx=on&year=now&month=x&ss=on&mf=on&c=on&geo=geoname&geonameid=3448439&M=on&s=on').then(res =>{
        return res.json()
    }).catch(err => {
        console.log(`something went wrong with the fetch request, error: ${err}`);
        return null;
    });
    const israeliHoliday = moadim.items.filter(moad =>{
        return moad.category == "holiday"// ? moad.country : null;
    });
    
    const mappedHoliday = israeliHoliday.map(holiday => {
        const ho = {
            name: holiday.title,
<<<<<<< Updated upstream
            date: holiday.date,
=======
            date: new Date(holiday.date),
>>>>>>> Stashed changes
            heb: holiday.hebrew
        }
        return ho;
    })
<<<<<<< Updated upstream
    console.log(mappedHoliday);
=======
    const sortedHolidays = mappedHoliday.sort((a,b) => {
        return a.date - b.date;
    })
    console.log(sortedHolidays);
>>>>>>> Stashed changes
>>>>>>> Stashed changes
}