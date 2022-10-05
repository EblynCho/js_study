console.log("----- 함수 사용하기 -----");

function sum(num1, num2) {
    const a = 10;
    const b = 20;
    const result = a + b;
    console.log(`두 수의 덧셈은 ${result}`);
}

// sum();
sum(10, 20);


// 함수의 4가지 형태
// 1. 매개변수 X, 반환값 X
// 2. 매개변수 O, 반환값 X
// 3. 매개변수 X, 반환값 O
// 4. 매개변수 O, 반환값 O

function add1() {
    const a = 10;
    const b = 20;
    const c = a + b;
    console.log(`두 수의 덧셈은 ${c}`);
}

// 매개변수 데이터 타입 안써도 됨
function add2(a, b) {
    const c = a + b;
    console.log(`두 수의 덧셈은 ${c}`);
}

function add3() {
    const a = 10;
    const b = 20;
    const c = a + b;
    return c;
}

function add4(a, b) {
    const c = a + b;
    return c;
}

console.log("---------------------");

// 콜백 함수
// var btn = document.getElementById("aaa");
// btn.addEventListener("click", function () {
//     alert("aaaaa");
// });

// 익명 함수 : 호출(실행) 불가한 함수, 매개변수로 함수를 사용 시(콜백함수) 사용
// 변수에 익명 함수를 대입하여 변수명으로 익명 함수를 호출할 수 있음
const noname = function () {
    const a = 10;
    const b = 20;
    console.log(`두 수의 합은 ${a + b}`);
};

noname();

// 즉시 실행 함수 (일회용 함수) : 프로그램 실행 시 단 한번만 실행해야하는 부분을 실행하기 위해서 사용함
(function () {
    const a = 10;
    const b = 20;
    const c = a + b;
    console.log(c);
}());


// 문제 6) 문제 3의 소스코드를 함수를 사용하는 방식으로 수정하세요
// 1. 사용자 입력 부분을 함수로 생성, quiz6Input
// 2. 3의 배수를 계산하는 부분을 함수로 생성, quiz6Cal
function quiz6Input () {
    let userNum = prompt("몇 까지 3의 배수를 찾을까요?");
    userNum = Number(userNum);

    return userNum; // return 하거나 함수 밖에 전역변수로 지정
}

function quiz6Cal (userNum) {
    let count = 0;
    for (let i = 1; i <= userNum; i++) {
        if (i % 3 == 0) {
            console.log(i);
            count++;
        }
    }
    console.log(`${userNum}까지 3의 배수의 개수 : ${count}`);
}

let userNum = quiz6Input();
quiz6Cal(userNum);


// let inputNum = 0;  // 전역변수


