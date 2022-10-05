console.log("----- while 문 사용하기 -----");


let count = 1;

while (count < 11) {
    console.log(count);
    count++;
}

let dan = 5;
count = 1;

while (count < 10) {
    console.log(`${dan} * ${count} = ${dan * count}`);

    count++;
}

// 문제 1) 구구단 전체 출력을 while 문을 사용하여 출력하세요

let i = 2;

while (i < 10) {
    console.log(`\n----- ${i}단 -----`);

    let j = 1;
    while (j < 10) {
        console.log(`${i} * ${j} = ${i * j}`);
        j++;
    }
    i++;
}

console.log("\n----- for 문 사용하기 -----\n")

let sum = 0;

for (let i = 0; i <= 5; i++) {
    sum = i + sum;
    console.log(sum);
}

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}


console.log();
// 문제 2) 배열 arr1을 사용하여 1 ~ 10까지의 총합을 구하는 프로그램을 for 문을 사용하여 작성하세요

let total = 0;

for (let i = 0; i < arr1.length; i++) {
    total += arr1[i];
}
console.log(total);


for (let i = 0; i < 10; i++) {
    if (i == 5) {
        break;
    }
    else {
        console.log(`현재 i의 값 : ${i}`);
    }
}

console.log();
for (let i = 0; i < 10; i++) {
    if (i == 5) {
        continue;
    }
    else {
        console.log(`현재 i의 값 : ${i}`);
    }
}

console.log();

for (let i = 2; i < 10; i++) {
    if (i == 5) {
        break;
    }
    for (let j = 1; j < 10; j++) {
        if (j == 5) {
            break;
        }
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

