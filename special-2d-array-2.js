// 문제: 특별한 2차원 배열 2
// 출처: 프로그래머스 Level 0
// 유형: -
// 핵심 아이디어: 2차원 배열 순회
// 배운점: arr.every() 함수의 iterator에 다시 every() 적용해 답 구하기

function solution(arr) {
//     every() 이용한 풀이
    return +arr.every((ar, i) => ar.every((_, j) => arr[i][j] === arr[j][i]));
    
//     for 문 풀이
    for (let i = 0; i < arr.length; i++) {
//         모든 arr의 원소의 길이는 같습니다.
        for (let j = 0; j < arr[0].length; j++) {
            if (!(arr[i][j] === arr[j][i])) return 0;
        }
    }
    return 1;
}

