// 문제 7) 문제 4의 소스코드를 함수를 사용하는 방식으로 수정하세요
// 1. money, coffee, price 에 초기값을 설정하는 함수 생성, quiz7Setup
// 2. 커피 판매 부분을 함수로 생성, quiz7CoffeeSale

// 함수의 반환값은 1개의 데이터만 반환이 가능함
function quiz7Setup () {
    let userMoney = prompt("소지하고 있는 금액을 입력하세요 : ");
    let coffee = prompt("커피의 재고량을 입력하세요 : ");
    let price = prompt("커피의 가격을 설정하세요 : ");

    // return [userMoney, coffee, price];  // 배열로 리턴
    return {'money': userMoney, 'coffee': coffee, 'price': price};  // object 방식으로 리턴
}

function quiz7CoffeeSale (userMoney, coffee, price) {
    while (true) {
        console.log('커피를 주문합니다.');

        if (userMoney >= price) {
            if (coffee > 0) {
                coffee--;
                userMoney -= price;
                console.log('커피를 한 잔 판매합니다.');
                console.log(`현재 남은 커피량 : ${coffee}`);
            }
            else {
                console.log('커피가 다 팔렸습니다.');
                console.log('영업을 종료합니다.');
                break;
            }
        }
        else {
            console.log('돈이 부족합니다.');
            break;
        }
    }
}

let obj = {};
obj = quiz7Setup();

console.log(`현재 소지금액은 ${obj.money}원 입니다.`);
console.log(`현재 커피의 재고량은 ${obj.coffee}개 입니다.`);
console.log(`현재 커피 1잔의 가격은 ${obj.price}원 입니다.`);

quiz7CoffeeSale(obj.userMoney, obj.coffee, obj.price);

// let [userMoney, coffee, price] = quiz7Setup();
// quiz7CoffeeSale(userMoney, coffee, price);


// 문제 8) 문제 5의 소스코드를 함수를 사용하는 방식으로 수정하세요
// 1. 입금 부분을 함수로 생성, quiz8InputMoney
// 2. 예금 확인 부분을 함수로 생성, quiz8CheckMoney
// 3. 출금 부분을 함수로 생성, quiz8OutputMoney



function quiz8InputMoney (userAccount) {
    let userDeposit = prompt("입금 금액을 입력하세요 : ");

    if (isNaN(userDeposit)) {
        console.log('잘못된 입력입니다. \n메뉴로 돌아갑니다.');
        return 0;
    }
    else {
        userDeposit = Number(userDeposit);
        userAccount += userDeposit;
        console.log(`${userDeposit} 원을 입금합니다.
        예금 잔액은 ${userAccount} 원 입니다.`);
        return userAccount;
    }
}

function quiz8CheckMoney (userAccount) {
    console.log(`현재 잔액은 ${userAccount} 원 입니다.`);
}

function quiz8OutputMoney (userAccount) {
    let userWithdraw = Number(prompt("출금 금액을 입력하세요"));
    if (userWithdraw > userAccount) {
        console.log(`출금 금액이 예금 금액보다 많습니다. /n모든 예금 금액을 출금합니다.`)
        console.log(`${userAccount} 원을 출금합니다.`);
        return 0;
        // 예금 금액 0원 처리
        // userAccount = 0;
    }
    else {
        userAccount -= userWithdraw;
        console.log(`${userWithdraw} 원을 출금합니다.
        예금 잔액은 ${userAccount} 원 입니다.`);
        return userAccount;
    }
}

// let userAccount = quiz8InputMoney();
// quiz8CheckMoney(userAccount);
// quiz8OutputMoney(userAccount);

let userAccount = 0;  // 은행에 저금한 액수 -> 전역변수로 지정해야함

while (true) {
    console.log(`안녕하세요 java505 은행입니다.
    1: 입금, 2: 예금확인, 3: 출금, 0: 종료`);

    let userSelect = Number(prompt(`메뉴를 선택하세요
    1: 입금, 2: 예금확인, 3: 출금, 0: 종료`));


    if (userSelect == 0) {
        console.log("프로그램을 종료합니다.")
        break;
    }

    else if (userSelect == 1) {
        let userDeposit = quiz8InputMoney(userAccount);
        if (userDeposit != 0) {
            userAccount = userDeposit;
        }
    }

    else if (userSelect == 2) {
        quiz8CheckMoney(userAccount);
    }

    else if (userSelect == 3) {
        userAccount = quiz8OutputMoney(userAccount);
    }
}