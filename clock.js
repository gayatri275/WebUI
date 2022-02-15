function clock() { 

      setInterval(() => { 
    
        const now = new Date(); 
    
        console.log(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`); 
    
      }, 1000); 
    
    } 
    
    clock(); 