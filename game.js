import chalk, { backgroundColorNames, colorNames } from 'chalk';
import readlineSync from 'readline-sync';
import figlet from 'figlet';


function delay(ms,stage) {    
    return new Promise((resolve) => {
        for (let i = 0; i < 3; i++) {
            if(stage === 1) {
                setTimeout(() => {
                    switch (i) {
                        case 0:
                            console.log(`                                              
                        :@$!!!!!!!!!!!!!!!!!!!!!!!#;   #;::::=;................-#-                  
                       $@!!!!!!!!!!!!!!!!!!!!!!!!!!@~ ;=::::!$...................#,                 
                     :#=!!!!!!!!!!!!!!!!!!!!!!!!!!!*@~$:::::#-...................-=.                
                   .*#*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!=@!::::#=,....................,$,               
                  ,@$!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!@*:::;@=#-.....................$               
                 ~#=!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!@;::#~ .**....................-=              
                -#=!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!=#:==    -$~.       ...........:!             
               -@*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!@=@.      =*          .........!:            
              :#*!!!!!!!!!==!!!!!!!!!!!!!!!!!!!!!!!!!!!*@!        -=,          ........=-           
             ,#=!!!!!!!!!*=@@##$=**!!!!!!!!!!!!!!!!!!!!!#*         .=:          .......-=           
            .@*!!!!!!!!!#@=~.  ,~=@@=!!!!!!!!!!!!!!!!!!!!@.          ;=          .......~:          
            =$!!!!!!!!#$~.         ,;@$*!!!!!!!!!!!!!!!!!$=           ~=,         .......=,         
           :#!!!!!!!=#;               !#=!!!!!!!!!!!!!!!!!@.           ,=-         ......,!         
           $*!!!!!!$$.                 .#@!!!!!!!!!!!!!!!!=$             $.         ......*,        
          !#!!!!!*#;                     ;@*!!!!!!!!!!!!!!*@,             =~        ......,*        
         ,@*!!!!!#:                       ;@*!!!!!!!!!!!!!!#!              *~        ......!,       
         ;@!!!!!@;                         !@!!!!!!!!!!!!!!!@               *-       ......-#       
         $=!!!!$$                           $$!!!!!!!!!!!!!!#~               *~       ......$,      
        ,@!!!!*@.                            #=!!!!!!!!!!!!!$$                *-      ......-!      
        :#!!!!#*                             -@*!!!!!!!!!!!!*#.                =.     .......=      
        *$!!!*@-                              ;$!!!!!!!!!!!!!@,                .=,    .......:;     
        ==!!!##     ,~~.                      .#*!!!!!!!!!!!!$;                 .*.   ........=     
        $*!!*@;    ;@@@@.       $@$.           :$!!!!!!!!!!!!*@                  ,=    .......!     
        @!!!=@,   !@@@@@;      !@@@@!           $!!!!!!!!!!!!*@                   -!   .......:-    
        @!!!=@.  ~@@@@@@!      @@@@@@:          :$!!!!!!!!!!!*@                    ;: ........~!    
        @!!!$#   $@@@@@@:      @@@@@@@.          @!!!!!!!!!!!*@                     *-........~#    
        @!!!#=   @@@@@@$       !@@@@@@-          !*!!!!!!!!!!*@                     .*........-@    
        @!!!#!  ,@@@@@@,       ,@@@@@@=          .#!!!!!!!!!!=#                      ,!.......,@.   
        #*!!#!  ,@@@@@!         #@@@@@@          .@*!!!!!!!!!@,                       !-.....,,@.   
        $=!!#:  .@@@@!          ;@@@@@@          -@=!!!!!!!!=#                         *.....,,@.   
        *$!!$;   !@#;            =@@@@#          #@$!!!!!!!!#:                         ;;....,-@.   
        ,@!!==                    !@@@;         ;@@$!!!!!!!==                           =....,-@.   
         !$!*@                     .--          ###*!!!!!!!@-                           ~~..,,~@    
         ,@*!#-                                $#@*!!!!!!!$;                             #,.,,:=    
          ~#!*$                               ;@#@!!!!!!!=$                              !:,,,;:    
           =$!$;                             ;@$#!!!!!!!$#.                               =,,,*.    
           .$=!#:                           *@$@*!!!!!*#$,                                =-,,=     
            ,@=!@$.                       ,@@$@*!!!!!=@$                                  ;*,,=     
             ,#=!=#=-:                  ,*@#@$*!!!!$#@$@#=:                               .$,-=     
              -#=**$#$  ;        ,.   -*@@@#*!!!*$@#=!!!=#@@!-                             =,;;     
               .@@@@@@,.=  ;    .@@@@@@@=!!!!*$@@$!!!!!!!!!*@@#,                           :~=.     
                ;#*!!=@$@;.*;  .$=!****$#####$=*!!!!!!!!!!!!!=@@$:                         ,**      
               .@*!!!!!!*##$#=$#=!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!$@@#~                       .#:      
               :#!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!$@@~                       ~       
               
               `)
                            console.log("어서오시게");
                            break;
                        case 1:
                            console.log("이곳은 던전..");
                            break;
                        case 2:
                            console.log(`다음에 봤을땐 ${chalk.red('뼈다귀')}가 되어있지 않으면 좋겠군.`);
                            resolve();
                            break;
                    }
                }, ms * (i+1));
            }
            else if(stage % 5 === 0){
                setTimeout(() => {
                    switch (i) {
                        case 0:
                            console.log("여기까지 버티다니..");
                            break;
                        case 1:
                            console.log("그렇지만 여기는 주의해야 할 걸세");
                            break;
                        case 2:

                            console.log(`쉽지 않은 녀석이 살고 있거든`);
                            resolve();
                            break;
                    }
                }, ms * (i+1));
            }
            else {
                resolve();
            }
           
        }
    });

}



class Player {
    constructor(max_hp, hp, mp, str, def) {
        this.max_hp = max_hp; //최대 HP
        this.hp = hp; //현재 HP
        this.mp = mp; // MP
        this.str = str; //공격력
        this.def = def; //방어확률
    }

    attack(monster) {
        if (monster.def === true) {
            console.log(chalk.red(`몬스터가 방어에 성공하여 공격에 실패했습니다.`));
            monster.def = false;
        }
        else {
            let AtkPro = ((Math.random() * (1.5 - 0.5)) + 0.5).toFixed(1); //플레이어의 공격 증가율        
            console.log(chalk.yellow(`플레이어가 몬스터를 공격하여 ${Math.round(this.str * AtkPro)}의 데미지를 입혔습니다.`));
            monster.hp -= Math.round(this.str * AtkPro);
        }

    }

    defence() {
        console.log(chalk.gray("플레이어가 방어를 시전했다."));
        let defPro = Math.round((Math.random() * (10 - 1)) + 1);
        if (defPro % 2 === 0) {
            this.def = true;
            console.log(chalk.blue("플레이어가 방어 시전에 성공했다."));
        }
        else {
            this.def = false;
            console.log(chalk.red("방어 시전에 실패했습니다."));
        }
    }

    run() {
        let runPro = Math.round((Math.random() * (5 - 1)) + 1);
        if (runPro % 2 === 0) { //40%
            console.log(chalk.blue("당신은 발에 땀이 나도록 호다닥 도망갔습니다."));
            startGame();
        }
        else {
            console.log(chalk.red("도망에 실패했습니다."));
        }
    }

    conAtk(monster) {
        let conPro = Math.round((Math.random() * (7 - 0)) + 0); //최대 공격 횟수

        if (monster.def === true) {
            console.log(chalk.red(`몬스터가 방어에 성공하여 공격에 실패했습니다.`));
            monster.def = false;
        }
        else {
            if (conPro === 0) {
                console.log("당신은 연속 공격 사용에 실패했다.");
            }
            else {
                for (let i = 0; i < conPro; i++) {
                    let AtkPro = ((Math.random() * (1.5 - 0.5)) + 0.5).toFixed(1); //플레이어의 공격 증가율
                    //console.log(AtkPro);
                    console.log(chalk.yellow(`플레이어가 몬스터에게 연속 공격을 사용하여 ${Math.round(this.str * AtkPro)}의 데미지를 입혔습니다.`));
                    monster.hp -= (Math.round(this.str * AtkPro));
                }

            }
        }

    }

    async heal() {
        if (this.mp >= 5 && this.max_hp > this.hp) {
            console.log(chalk.blue(`플레이어가 체력을 ${Math.round((this.max_hp - this.hp) * 0.5)}만큼 회복하였습니다.`))
            this.hp += Math.round((this.max_hp - this.hp) * 0.5);
            this.mp -= 5;
        }
        else {
            console.log(chalk.red(`힐 발동에 실패하였습니다.`));
        }
    }

}
class Monster {
    constructor(hp, str, def, name) {
        this.hp = hp;
        this.str = str;
        this.def = def;
        this.name = name;
    }

    async attack(player) {
        if (player.def) {
            console.log(chalk.blue(`방어에 성공했습니다.`));
            player.def = false;
        }
        else {
            console.log(chalk.red(`몬스터가 플레이어를 공격하여 ${this.str}의 데미지를 입혔습니다.`))
            player.hp -= this.str;
        }

    }

    defence() {
        console.log(chalk.gray("몬스터가 방어를 시전했다."));
        let defPro = Math.round((Math.random() * (7 - 1)) + 1);
        if (defPro % 2 === 0) {
            this.def = true;
            console.log(chalk.red("몬스터가 방어 시전에 성공했다."));
        }
        else {
            this.def = false;
            console.log(chalk.blue("몬스터가 방어 시전에 실패했습니다."));
        }
    }

    superAttack(player) {
        if (player.def) {
            console.log(chalk.blue(`방어에 성공했습니다.`));
            player.def = false;
        }
        else {
            console.log(chalk.red(`몬스터가 플레이어에게 강타를 사용하여 ${(Math.round(player.max_hp * 0.3) + this.str)}의 데미지를 입혔습니다.`))
            player.hp -= (Math.round(player.max_hp * 0.3) + this.str);
        }
    }

}
class Dragon extends Monster {
    constructor(hp, str, def,name) {
        super(hp, str, def, name);
    }

    superAttack(player) {
        if (player.def) {
            console.log(chalk.blue(`방어에 성공했습니다.`));
            player.def = false;
        }
        else {
            console.log(chalk.red(`드래곤이 플레이어에게 불기둥을 사용하여 ${(Math.round(player.max_hp * 0.5) + this.str * 0.5)}의 데미지를 입혔습니다.`))
            player.hp -= (Math.round(player.max_hp * 0.5) + this.str * 0.5);
        }

    }
}

class Oak extends Monster {
    constructor(hp, str, def, name) {
        super(hp, str, def, name);
    }

    superAttack(player) {
        if (player.def) {
            console.log(chalk.blue(`방어에 성공했습니다.`));
            player.def = false;
        }
        else {
            console.log(chalk.red(`오크가 플레이어에게 몽둥이찜질 사용하여 ${(Math.round(player.max_hp * 0.4) + this.str)}의 데미지를 입히고
                                                           플레이어의 최대 체력을 감소시켰습니다.`))
            player.hp -= (Math.round(player.max_hp * 0.4) + this.str);
            player.max_hp -= this.str;
        }

    }
}
async function motion(choice, pattern, player, monster) {
    if (Number(choice) === 2) {
        if (pattern !== 2) {
            player.defence();
            switch (pattern) {
                case 1: //공격
                    monster.attack(player);
                    break;
                case 2: //방어하기
                    monster.defence();
                    break;
                case 3: //강타
                    monster.superAttack(player);
                    break;
            }
        }
        else {
            player.defence();
            monster.defence();
        }
    }
    else {
        if (pattern === 2) {
            monster.defence();
            switch (Number(choice)) {
                case 1: //공격
                    player.attack(monster);
                    break;
                case 2: //방어하기
                    player.defence();
                    break;
                case 3: //도망치기
                    player.run();
                    break;
                case 4: //연속 공격
                    player.conAtk(monster);
                    break;
                case 5: //회복
                    player.heal();
                    break;
            }
        }
        else { //서로 2가 아닐때
            switch (Number(choice)) {
                case 1: //공격
                    player.attack(monster);
                    break;
                case 2: //방어하기
                    player.defence();
                    break;
                case 3: //도망치기
                    player.run();
                    break;
                case 4: //연속 공격
                    player.conAtk(monster);
                    break;
                case 5: //회복
                    player.heal();
                    break;
            }

            switch (pattern) {
                case 1: //공격
                    monster.attack(player);
                    break;
                case 2: //방어하기
                    monster.defence();
                    break;
                case 3: //강타
                    monster.superAttack(player);
                    break;
            }
        }
    }
}


async function displayStatus(stage, player, monster, pattern) {
    let playerHPbar = "";
    for(let i = 0 ; i < player.hp / 10; i++) {
        playerHPbar += '=';
    }
    let playerMPbar = "";
    for(let i = 0 ; i < player.mp / 5; i++) {
        playerMPbar += '=';
    }

    let monsterHPbar = "";
    for(let i = 0 ; i < monster.hp / 10; i++) {
        monsterHPbar += '=';
    }

    console.log(chalk.magentaBright(`\n===================== Current Status =====================`));
    console.log(
        chalk.cyanBright(`| Stage: ${stage} | `) +
        chalk.blueBright(
            `
--플레이어-- 
HP:${playerHPbar}(${player.hp})
MP:${playerMPbar}(${player.mp})
공격력:${player.str * 0.5}~${player.str * 1.5} / 방어확률:50% `,
        ) +
        chalk.redBright(
            `
--몬스터--
Name:${monster.name} 
HP:${monsterHPbar}(${monster.hp})
공격력:${monster.str} `,
        ),
    );
    console.log(chalk.magentaBright(`==========================================================\n`));

  
    if (player.hp <= player.max_hp * 0.5) {
        console.log(`당신은 등줄기에 식은땀이 흐르는 것을 느낀다...
            `);
    }

    if (pattern === 3) {
        console.log(`몬스터에게 강한 힘이 느껴진다.... 큰 공격이 올 거 같다`);
    }

}

const battle = async (stage, player, monster) => {
    let logs = [];

    await delay(1500,stage);
    while (player.hp > 0 && monster.hp > 0) {
        let pattern = Math.round(Math.random() * (3 - 1) + 1); //MonsterPattern 1,2,3

        displayStatus(stage, player, monster, pattern);

        let choice = "";
        let battle_in = async function (stage, player, monster, pattern, logs) {
            if (logs.length > 12) {
                logs.shift();
            }
            logs.forEach((log) => console.log(log));

            console.log(
                chalk.green(
                    `\n1. 공격한다 2. 방어한다 3. 도망간다. 4. 연속 공격 5. 회복`,
                ),
            );
            choice = readlineSync.question('당신의 선택은?');

            switch (Number(choice)) {
                case 1: //공격
                    logs.push(chalk.green(`공격을 선택하셨습니다.`));
                    break;
                case 2: //방어하기
                    logs.push(chalk.green(`방어를 선택하셨습니다.`));
                    break;
                case 3: //도망치기
                    logs.push(chalk.green(`도망을 선택하셨습니다.`));
                    break;
                case 4: //연속 공격
                    logs.push(chalk.green(`연속 공격을 선택하셨습니다.`));
                    break;
                case 5: // 힐
                    logs.push(chalk.green(`회복을 선택하셨습니다.`));
                    break;
            }

            motion(choice, pattern, player, monster);// 플레이어의 동작 처리              

        }

        battle_in(stage, player, monster, pattern, logs);

        if (player.def === true || monster.def === true) {
            player.def = false;
            monster.def = false;
        }

    }

};

let stage = 1; //스테이지의 값은 도망가더라도 남아있게된다.

export async function startGame() {
    //console.clear();
    while (stage <= 10) {
        let hidden = Math.round(Math.random() * (2 - 1) + 1); //보스몹 출현 설정
        const player = new Player(stage * 150, stage * 150, stage * 10, stage * 30, false);
        let monster = new Monster(stage * 200, stage * 20, false, "Goblin");


        console.log(
            chalk.blueBright(
                figlet.textSync(`Stage : ${stage}  Start ! !`, {
                    font: 'Standard',
                    horizontalLayout: 'Standard',
                    verticalLayout: 'default'
                })
            )
        );
        if (stage % 5 === 0 && hidden === 1) {
            console.log(`히든 스테이지 출현!!!`);
            console.log(
                chalk.red(
                    figlet.textSync('Red-Dragon-King', {
                        font: 'Standard',
                        horizontalLayout: 'default',
                        verticalLayout: 'default'
                    })
                )
            );
            monster = new Dragon(stage * 300, stage * 60, false, 'Red-Dragon-King');
        }
        else if (stage % 5 === 0 && hidden === 2) {
            console.log(`히든 스테이지 출현!!!`);
            console.log(
                chalk.green(
                    figlet.textSync('Oak-King', {
                        font: 'Standard',
                        horizontalLayout: 'default',
                        verticalLayout: 'default'
                    })
                )
            );
            monster = new Oak(stage * 500, stage * 40, false, 'Oak-King');
        }
        await battle(stage, player, monster);

        if (player.hp <= 0) {
            console.log(chalk.red('당신은 패배하였습니다.'));
            process.exit(0);
        }

        if (monster.hp <= 0) {
            console.log(chalk.blue('당신은 승리하였습니다.'));
            stage++;
        }

    }

    // 스테이지 클리어 및 게임 종료 조건
    console.log("당신은 모든 스테이지를 클리어했습니다. 축하드립니다.");
    process.exit(0);
}