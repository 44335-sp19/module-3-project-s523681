      /* The script is placed inside an immediately invoked function expression
   which helps protect the scope of variables */

//PART ONE: GENERATE A RANDOM ROOM RATE. Write a function called genRand() that has no paremeters that will return a room rate between 100 and 400. HINT: You should hit a number within this range within 10 tries.
var numrounded;

  function genRand()
{
    var minNum = 100;
    var maxNum = 400;
    
    var num = (Math.random() * (maxNum-minNum) + minNum);
                      numrounded = Math.round(num);
    return numrounded;
}




  // PART TWO: CALCULATE AND RETURN THE EXPIRY DETAILS FOR THE OFFER. Write a function called offerExpires that has one parameter a Date object. The function should return a string in the format "OFFER EXPIRES NEXT "WeekDay" (Date Month Year)". The date should be one week from today's date

    //initializing variables
    var month;
    var datenum;
    var day;
    var year;
          
function offerExpires(thedate)
{
    var month = thedate.getMonth();
    var datenum = thedate.getDate();
    var day = thedate.getDay();
    var year = thedate.getFullYear();
    //if the month has 31 days
    if (thedate.getMonth() == 0 || thedate.getMonth() == 2 || thedate.getMonth() == 4 || thedate.getMonth() == 6 || thedate.getMonth() == 7 || thedate.getMonth() == 9 || thedate.getMonth() == 11)
    {
        if (thedate.getDate() > 24)
            {
            datenum = (datenum - 24);
                month += 1;
            }
        else
            {
                datenum +=7;
            }
    }
    //if the month has 30 days
    else if (thedate.getMonth() == 3 || thedate.getMonth() == 5 || thedate.getMonth() == 8 || thedate.getMonth() == 10)
    {
           if (thedate.getDate() > 23)
            {
                datenum = (datenum - 23);
                month += 1;
            }
        else 
            {
                datenum +=7;
            }
        
    }
    //if the month is February
    else 
        {
              if (thedate.getDate() > 21)
            {
                datenum = (datenum - 21);
                month += 1;
            }
             else 
            {
                datenum +=7;
            }
        }
    
    // if the value stored in day is greater than 6, restart at 0
    if (thedate.getDay() > 6)
            {
                day = 0;
            }
    /* if the value stored in month is greater than 11, restart at 0 and add a year*/
    if (month > 11)
        {
            year += 1;
            month = 0;
        }
    
    switch(day)
    {
        case 0: day = "SUNDAY"; break;
            case 1: day = "MONDAY"; break;
            case 2: day = "TUESDAY"; break;
            case 3: day = "WEDNESDAY"; break;
            case 4: day = "THURSDAY"; break;
            case 5: day = "FRIDAY"; break;
            case 6: day = "SATURDAY"; break;
    }
    
    switch(month)
    {
        case 0: month = "JANUARY"; break;
        case 1: month = "FEBRUARY"; break;
        case 2: month = "MARCH"; break;
        case 3: month = "APRIL"; break;
        case 4: month = "MAY"; break;
        case 5: month = "JUNE"; break;
        case 6: month = "JULY"; break;
        case 7: month = "AUGUST"; break;
        case 8: month = "SEPTEMBER"; break;
        case 9: month = "OCTOBER"; break;
        case 10: month = "NOVEMBER"; break;
        case 11: month = "DECEMBER"; break;
    }

    return "OFFER EXPIRES NEXT " + day + " (" + datenum + " " + month + " " + year + ")";
}
//PART THREE: CALL THE FUNCTIONS AND WRITE INFO TO WEBPAGE

//create a new Date object
var today = new Date();


//Call getRand() function to get random room rate and write it to the special rate section on the webpage
var elRandNum = document.getElementById("specialRate");
elRandNum.innerHTML = genRand();


//Call the function passing the date object to it and write it to the offer ends section on the webpage
var elDate = document.getElementById("offerEnds");
elDate.innerHTML = offerExpires(today);

