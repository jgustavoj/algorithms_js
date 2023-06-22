function weeklySalary(h){
    // Pay Rates
    const regularRate = 10
    const OTrate = 15
  
    // Pay Counter
    let normalPay = 0
    let OTpay = 0
    
    for(let i=0; i<h.length; i++){
      // Weekly pay
      if (i <= 4){
        // regular
        if(h[i] <= 8){
          normalPay += h[i] * regularRate;
        }
       // OT
        else {
          normalPay += 8 * regularRate;
          OTpay += (h[i] - 8) * OTrate; 
      };
    }
      // Weekend pay   
      else {
        // regular
        if (h[i] <= 8){
          normalPay += (h[i] * regularRate) * 2 
          // OT
        } else {
          normalPay += (8 * regularRate) * 2 
          OTpay += ((h[i] - 8) * OTrate) * 2;
          
        };
      };
    };
     // Pay checker 
    //console.log("normalPay:", normalPay, "OTPay:", OTpay)
    return normalPay + OTpay
    
  };
  
  console.log(weeklySalary([8,8,8,8,8,0,0])) // 400
  console.log(weeklySalary([10,10,10,0,8,0,0])) // 410
  console.log(weeklySalary([0,0,0,0,0,12,0])) // 280
  
  
  