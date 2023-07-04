// Стоврити форму з трьома полями для name,surname,age та кнопкою. При натисканні на кнопку зчитати данні з полів,
// та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
// ==========================
 let action = document.forms.action;
 action.addEventListener('submit', function(e){
  e.preventDefault();
  let obj = {
   name: this.name.value,
   surname: this.surname.value,
   age: this.age.value
  }
  console.log(obj);
 })





