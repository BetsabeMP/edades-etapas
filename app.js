var age = parseInt(prompt('How old are you?'));

if (age > 21) {
    alert('You are a adult!');
} else if (age >=18 && age <=21) {
    alert ('You are a young adult!');
}  else if (age >=12 && age <=18) {
    alert ('You are a teen :) !');
} else if (age >=5 && age <=12) {
    alert ('You are a gradeschooler!');
} else if (age >=3 && age <=5) {
    alert ('You are a preschool!');
} else if (age >=1 && age <=3) {
    alert ('You are a toodler <3');
} else {
    alert ('Error, debe volver a ingresar su edad');
}