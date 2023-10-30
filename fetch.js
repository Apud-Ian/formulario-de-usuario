document.addEventListener('DOMContentLoaded', () => {
   const pushInfoButton = document.getElementById('pushInfo');
   const registrationForm = document.getElementById('registrationForm');

   pushInfoButton.addEventListener('click', () => {
     const firstName = registrationForm.elements.firstName.value;
     const lastName = registrationForm.elements.lastName.value;
     const edad = registrationForm.elements.edad.value;

     const userData = [
        firstName,
        lastName,
        edad,
   ];

     fetch('https://jsonplaceholder.typicode.com/users', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify(userData),
     })
       .then(response => response.json())
       .then(data => {
         console.log('Mensaje del servidor:', data.message);
         console.log('Usuario agregado:', data.usuario);
       })
       .catch(error => {
         console.error('Error en la solicitud:', error);
       });
   });
 });