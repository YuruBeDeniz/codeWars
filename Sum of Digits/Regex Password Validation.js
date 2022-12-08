/* 
DESCRIPTION:
You need to write regex that will validate a password to make sure it meets the following criteria:

At least six characters long
contains a lowercase letter
contains an uppercase letter
contains a digit
only contains alphanumeric characters (note that '_' is not alphanumeric)
good practices: https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
https://www.codewars.com/kata/52e1476c8147a7547a000811/javascript
5kyu*/

const REGEXP = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])[A-Za-z0-9]{6,}$/;


class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }

attack() {
    return 'attack with ' + this.weapon;
}   
}


class Elf extends Character {
    constructor(name, weapon, type){
        super(name, weapon);
        console.log(this);
        this.type = type;
    }
}

class Ogre extends Character {
    constructor(name, weapon, color){
        super(name, weapon);
        this.color = color;
    }
    makeFort(){
        return "strongest fort in the world made";
    }
}

const shrek = new Ogre('Shrek', 'club', 'green');
shrek.attack();
shrek.makeFort();

const dolby = new Elf('Dolby' , 'cloth', 'house');
dolby.attack();

/* console:
Elf {
  name: 'Dolby',
  weapon: 'cloth',
  __proto__: { constructor: ƒ Elf() }
}

'attack with cloth' */

const fiona = new Elf('Fiona', 'ninja stars');
console.log(fiona)
/* console:

Elf {
  name: 'Fiona',
  weapon: 'ninja stars',
  __proto__: { constructor: ƒ Elf() }

} */