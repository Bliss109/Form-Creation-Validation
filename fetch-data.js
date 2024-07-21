document.addEventListener('DOMContentLoaded', function(){
    //Step 1: Initializing the async function
    async function fetchUserData(){
      const apiUrl= 'https://jsonplaceholder.typicode.com/users';
      const dataContainer= document.getElementById ('api-data');

      try{
        const response=await fetch(apiUrl);
        const users= await response.json();

        dataContainer.innerHTML='';

        const userList= document.createElement('ul');

        users.forEach(user => {
            const listItem= document.createElement('li');
            listItem.textContent=user.name;
            userList.appendChild(listItem);
        });
        dataContainer.appendChild(userList);
      } catch (error) {
        dataContainer.innerHTML='';
        dataContainer.textContent='Failed to load user data.';
      }
    }

    fetchUserData();
});