// 문제 3) 책 511 페이지의 마무리 문제 2번 풀기
// let userNum = prompt("몇 까지 3의 배수를 찾을까요?");
// let count = 0
//
// for (let i = 1; i <= userNum; i++) {
//     if (i % 3 == 0) {
//
//         count++;
//         console.log(i);
//     }
// }
// console.log(`${userNum}까지 3의 배수의 개수 : ${count}`);

//document.write("<h1>3의 배수 찾기</h1>");
//
//let userNum = prompt("몇 까지 3의 배수를 찾을까요?");
//userNum = Number(userNum);
//let count = 0;
//
//for (let i = 1; i <= userNum; i++) {
//    if (i % 3 == 0) {
//        document.write(`${i}, `);  // 화면 출력
//        console.log(i);  // 콘솔창 출력
//        count++;
//    }
//}
//document.write(`<p>${userNum}까지 3의 배수의 개수 : ${count}<p>`);  // 화면 출력
//console.log(`${userNum}까지 3의 배수의 개수 : ${count}`);  // 콘솔 출력


// 문제 4) 커피 자판 프로그램을 작성하세요
// 1. 사용자가 가지고 있는 금액을 입력 받기
// 2. 커피 1잔의 금액은 300원
// 3. 자판기에 들어있는 커피의 양은 10개
// 4. 커피를 판매할 때마다 1개의 커피가 소비됨
// 5. 소지 금액이 부족 시 '돈이 부족합니다' 를 출력
// 6. 커피가 부족할 경우 '커피가 다 팔렸습니다' 를 출력
// 7. 커피 판매 시 '커피를 한 잔 판매 합니다.' 와 커피 재고량을 출력
//     ex) 커피를 한 잔 판매합니다.
//         남은 커피 00 잔


    let userMoney = prompt("커피를 구매할 금액을 입력하세요");
    let coffee = 10;

    while (true) {
        console.log('커피를 주문합니다.');

        if (userMoney < 300) {
            console.log("돈이 부족합니다.");
            break;
        }
        else if (userMoney >= 300) {
            if (coffee > 0) {
            coffee--;
            userMoney -= 300;
            console.log(`커피를 한 잔 판매합니다.
                남은 커피 ${coffee} 잔`);
            }
            else {
            console.log("커피가 다 팔렸습니다.");
            break;
        }
    }
}


// let coffee = 10;
//
// while (true) {
//     console.log('커피를 주문합니다.');
//
//     if (userMoney >= 300) {
//         if (coffee > 0) {
//             coffee--;
//             userMoney -= 300;
//             console.log('커피를 한 잔 판매합니다.');
//             console.log(`현재 남은 커피량 : ${coffee}`);
//         }
//         else {
//             console.log('커피가 다 팔렸습니다.');
//             console.log('영업을 종료합니다.');
//             break;
//         }
//     }
// }


// for 문의 무한반복
// for (;;) {
//
// }



// 문제 5) 은행 프로그램을 작성하세요 (무한반복, else if, prompt)
// 1. 프로그램 시작 시 안내 메시지와 메뉴가 출력
//     ex) 안녕하세요 java505 은행입니다
//     ex) 1: 입금, 2: 예금확인, 3: 출금, 0: 종료
// 2. 메뉴를 선택하면 해당 기능을 실행
// 3. 메뉴는 기능을 실행 후 계속 출력
// 4. 0 실행 시 '프로그램을 종료합니다.' 출력 후 프로그램 종료
// 5. 1 실행 시 사용자 입력을 통해 금액을 입력 받고 기존 금액에 추가
// 6. 2 실행 시 기존에 저장된 금액을 출력
// 7. 3 실행 시 사용자 입력을 통해 금액을 입력 받고 기존 금액에서 차감
// 8. 기존 금액보다 큰 금액을 출금 시 기존 금액을 0으로 만들고 모든 금액을 출금

let userAccount = 0;

while (true) {
    console.log(`안녕하세요 java505 은행입니다.
    1: 입금, 2: 예금확인, 3: 출금, 0: 종료`);

    let userSelect = prompt(`메뉴를 선택하세요
    1: 입금, 2: 예금확인, 3: 출금, 0: 종료`);

    if (userSelect == 0) {
        console.log("프로그램을 종료합니다.")
        break;
    }

    else if (userSelect == 1) {
        let userDeposit = prompt("입금 금액을 입력하세요");
        if (isNaN(userDeposit)) {
            console.log('잘못된 입력입니다. \n메뉴로 돌아갑니다.')
        }
        else {
            userDeposit = Number(userDeposit);
            userAccount += userDeposit;
            console.log(`${userDeposit} 원을 입금합니다.
        예금 잔액은 ${userAccount} 원 입니다.`);
        }

    }

    else if (userSelect == 2) {
        console.log(`현재 잔액은 ${userAccount} 원 입니다.`);
    }


    else if (userSelect == 3) {
        let userWithdraw = Number(prompt("출금 금액을 입력하세요"));
        if (userWithdraw > userAccount) {
            console.log(`${userAccount} 원을 출금합니다.`);
            userAccount = 0;
            continue;
        }
        userAccount = userAccount - userWithdraw;
        console.log(`${userWithdraw} 원을 출금합니다.
        예금 잔액은 ${userAccount} 원 입니다.`);
    }
}
