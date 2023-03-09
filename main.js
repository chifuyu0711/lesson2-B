// JavaScript 2 dz B



 let time = +prompt('Введите время');


 switch(time){
     case 0:
     case 1:
     case 2:
     case 3:
     case 4:
     case 5:
     case 6:
         alert(time + ' часа ночи')
         break

     case 7:
     case 8:
     case 9:
     case 10:
         alert(time + ' часов утра')
         break

     case 11:
     case 12:
     case 13:
         alert('1 часа дня')
         break

     case 14:
         alert('2 часа дня')
         break
        
     case 15:
         alert('3 часа дня')
         break

     case 16:
         alert('4 часа дня')
         break

     case 17:
         alert('5 часа дня')
         break

     case 18:
         alert('6 часов вечера')
         break

     case 19:
         alert('7 часов вечера')
         break
    
     case 20: 
         alert('8 часов вечера')
         break

     case 21:
         alert('9 часов вечера')
         break

     case 22:
         alert('10 часов вечера')
         break

     case 23:
         alert('11 часов вечера')
         break

     default:
         alert('Что-то пошло не так')
         break
 }