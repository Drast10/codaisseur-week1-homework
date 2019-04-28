    // Write your JS here

    //sction -1 : Hero Object
    let hero = {
        name: 'batman',
        heroic: true,
        inventory:[],
        health:10, 
        weapon:{
            type:' ',
            damage:2
        }   
    };

    let enemy ={
        name: 'Joker',
        heroic: false,
        inventory:[],
        health:10, 
        weapon:{
            type:'Gun',
            damage:2
        }  
    };
    //onload call for enemy and hero
    window.onload=function(){
        displayStats(hero);
        displayStats(enemy);
        }
    //Section -2: Implementing the basic game logic and UI

    //rest after loosing health
    const rest = (hero) => {
        if(hero&&hero.health===10){
            alert('you alrady have health 10');
        }else{
        hero.health=10;
        }
        displayStats(hero);
        return hero;
    }
    //pick a weapon for fight
    const pickUpItem =(hero , wapons) =>{
        //gameStatus('You Picked a '+wapons.type +'!!');
        hero.inventory.push(wapons);
        console.log(hero);
        displayStats(hero)
    }
    // equip weapon from inventory or bag 
    const equipWeapon = (hero) =>{
        
        if(hero && hero.inventory.length == 0){
            gameStatus('You have no weapons in Inventory...');
        }
        else{
            
        console.log(hero);
        hero.weapon = hero.inventory[0];
        console.log(hero.inventory);
        gameStatus('You are equipped with a '+hero.weapon.type +'!!');
        }
        displayStats(hero);
        //hero.inventory.update(weapon);
    }

    // drop the weapon from hero hand
    const dropWeapon = () => {
        hero.weapon.type = '';
        hero.weapon.damage = 0;
        hero.inventory=[];
        displayStats(hero);
        gameStatus('You Dropped the weapon');
    }
    // Section -4: DIY

    // display status of hero or enemy
    const displayStats = (fighter) => {
        let heroDiv;
        if(fighter.heroic)
        heroDiv =  document.querySelector('div.hero-status');
    else
        heroDiv =  document.querySelector('div.enemy-status');
    heroDiv.innerHTML='';

    let heroName = document.createElement('p');
    heroName.innerText = 'Name: ' + fighter.name;
    heroDiv.appendChild(heroName);

    let heroHealth = document.createElement('p');
        heroHealth.innerText  = 'Health: ' + fighter.health;;
        heroDiv.appendChild(heroHealth);

    let weaponType = document.createElement('p');
    if(fighter.weapon)
    weaponType.innerText= 'Weapon Type: ' + fighter.weapon.type;
    heroDiv.appendChild(weaponType);

    let weaponDamage = document.createElement('p');
    if(fighter.weapon)
    weaponDamage.innerText = 'Weapon Damge :' + fighter.weapon.damage;
    heroDiv.appendChild(weaponDamage);

    }
    //hero name changed after enter
    const nameChanged =() =>{
        let heroName = document.getElementById('name').value;
        console.log(heroName);
        hero.name = heroName;
        displayStats(hero);
    }
    //fight with enmey and enmey with hero 
    const fight = (fighter) => {
        if(enemy.health === 0 ){
            gameStatus('you have defeated the enmey');
            return;
        }
        if(hero.health === 0 )
        {
            gameStatus('you have lost the fight');
            return;
        }

        if(fighter.weapon.type===' '){
            gameStatus('Please pickup a weapon to fight');
        }else{
            if(fighter.heroic){
                enemy.health -= fighter.weapon.damage; 
                fighter.health --;
            }else{
                hero.health -= fighter.weapon.damage; 
                fighter.health --;
            }
            displayStats(hero);
            displayStats(enemy);
        }
        
        
    }
    //generic game status 
    const gameStatus = (message) =>{
        let statusDiv = document.getElementById('game-status');
        statusDiv.innerHTML='';
    let msg= document.createElement('p');
    msg.innerText =message;
    statusDiv.appendChild(msg);
    }


