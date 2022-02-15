function weekend(date) { 

      let d = new Date(date); 
    
      if (d.getDay() == 0 || d.getDay() == 6) { 
    
        return "weekend"; 
    
      } 
    
    } 

    //script for get the month name from a particular date
    function month_name(date) { 

          let month_name = date.toLocaleString("default", { month: "long" }); 
        
          return month_name; 
        
        } 
        
         