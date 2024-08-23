import chalk from 'chalk';
import figlet from 'figlet';
import readlineSync from 'readline-sync';
import {startGame} from "./game.js";

// 로비 화면을 출력하는 함수
function displayLobby() {
    //console.clear();

    // 타이틀 텍스트
    console.log(
        chalk.blackBright(
            figlet.textSync('Shadow - Dungeon', {
                font: 'Standard',
                horizontalLayout: 'default',
                verticalLayout: 'default'
            })
        )
    );

    // 상단 경계선
    const line = chalk.magentaBright('='.repeat(50));
    console.log(line);

    // 게임 이름
    console.log(chalk.yellowBright.bold('Shadow Dungeon에 오신걸 환영합니다!'));

    // 옵션들
    console.log(chalk.black('1.') + chalk.black(' 게임을 시작하지'));
    console.log(chalk.black('2.') + chalk.black(' 도망칠텐가?'));

    // 하단 경계선
    console.log(line);

    // 하단 설명
    console.log(chalk.gray('둘 중 하나만 고르게..'));
}

// 유저 입력을 받아 처리하는 함수
function handleUserInput() {
    const choice = readlineSync.question('입력: ');

    switch (choice) {
        case '1':
            console.log(chalk.red('자.. 시작해보도록 하지'));
            // 여기에서 새로운 게임 시작 로직을 구현
            startGame();
            break;
        case '2':
            console.log(chalk.red('벌벌 떨면서 도망가도록 하게나'));
            // 게임 종료 로직을 구현
            process.exit(0); // 게임 종료
            break;
        default:
            console.log(chalk.red('그런 선택지는 없다네'));
            handleUserInput(); // 유효하지 않은 입력일 경우 다시 입력 받음
    }
}

// 게임 시작 함수
export function start() {
    displayLobby();
    handleUserInput();
}

// 게임 실행
start();