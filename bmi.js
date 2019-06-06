<script>
      var users = [];
      const users = [];
      
      
        const healthyCountries = ["Chad", "Sierra Leone", "Mali", "Gambia",
                                 "Uganda", "Ghana", "Senegal", "Somalia", "Ivory Coast",
                                 "Israel" ];
        
      const computeBMI = ({weight, height, country}) =>{
        const userObj = {
          
          weight : weight,
          height : height,
          country : country
        };
       
        const heightInMeters = height * 0.3048;
        let BMI = weight / Math.pow(heightInMeters, 2);
        
        if (healthyCountries.includes(country))
          BMI *= 0.82;
        
        return Math.floor(BMI,2);
      };
      
      const getSelectedUser = (userId) => {
        return users.find(({id})=> id == userId );
      };
      document.getElementById("outcome") = bmi;
     
      
      const displaySelectedUser = ({target}) =>{
        const user = getSelectedUser(target.value);
        const properties = Object.keys(user);
        
        properties.forEach(property => {
          const span = document.querySelector(`span[data-${property}-value]`);
          
          if(span){
            span.textContent = user[property];
          }
        })
      }
      
      const letsCalculateBMI = () =>{
        const value = document.querySelector('.select-text').value;
        const user = getSelectedUser(target.value);
        
        const bmi = computeBMI(user);
        document.querySelector('.bmi-text').innerHTML = bmi
      };
      
      const powerupTheUI = () =>{
        var selectElement = document.querySelector('select');
        selectElement.addEventListener('change', displaySelectedUser);
        
        var button =document.querySelector('#oracle');
        button.addEventListener('click', letsCalculateBMI);
      }
      
      const displayUsers = (users) =>{
        var parent = document.querySelector('select');
        
        users.forEach((user) =>{
          var option = document.createElement('option');
          
          option.textContent = user.name;
          option.setAttribute("value", user.id);
          
          parent.appendChild(option);
        })
        }
      
      
      const fetchAndDisplayUsers = () => {
        users.push({
          age: 40,
          weight: 75,
          height: 6,
          country: 'Nigeria',
          name: 'Charles Odili',
          id: 'dfhb454768DghtF'
        },
          {
          age: 25 + "yrs",
          weight: 84 + "kg",
          height: 6.2 + "ft",
          gender: 'Male',
          country: 'Nigeria',
          name: 'Ayim Valentine',
          id:'dfhb4564ju45hdg'
        });
        displayUsers(users);
      };
      
      const startApp = () => {
        powerupTheUI();
        fetchAndDisplayUsers();
      };
      startApp();
    </script>
