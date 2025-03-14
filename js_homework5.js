/*var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
    };
  
    function price (services){
      var sum = 0;
      for (let key in services){
        sum += Number.parseInt(services[key]);
      }
      return sum;
    };
    
    function minPrice(services){
      var sum = Infinity;
      for (let key in services){
        if (sum > Number.parseInt(services[key])){
          sum = Number.parseInt(services[key])
        }
      }
      return sum;
    };
  
    function maxPrice(services){
      var sum = -Infinity;
      for (let key in services){
        if (sum < Number.parseInt(services[key])){
          sum = Number.parseInt(services[key])
        }
      }
      return sum;
    };
    
    services['Розбити скло'] = "200 грн";
  
    console.log(price(services));
    console.log(minPrice(services));
    console.log(maxPrice(services)); */

    // Альтернативне вирішення задачі, якщо методи являються частиною об"єкту/класу
  var services = {
        "стрижка": "60 грн",
        "гоління": "80 грн",
        "Миття голови": "100 грн",
        price (){
      var sum = 0;
      for (let key in services){
        if (isNaN(Number.parseInt(services[key]))){
          continue
        } else {
        sum += Number.parseInt(services[key]);
        }
      }
      return sum;
    
  },
    minPrice (){
      var sum = Infinity;
      for (let key in services){
        if (isNaN(Number.parseInt(services[key]))){
          continue;
        } if 
         (sum > Number.parseInt(services[key])){
          sum = Number.parseInt(services[key])
        }
      
      }
      return sum;
  },
    maxPrice(){
      var sum = -Infinity;
      for (let key in services){
        if (isNaN(Number.parseInt(services[key]))){
          continue;
        } if
         (sum < Number.parseInt(services[key])){
          sum = Number.parseInt(services[key])
        }
    }
    return sum;
    }
  };
      
services['Розбити скло'] = "200 грн";
      
console.log(services.price());
console.log(services.maxPrice());
console.log(services.minPrice());
       