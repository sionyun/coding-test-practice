// 문제: 정사각형으로 만들기
// 출처: 프로그래머스 Level 0
// 유형: -
// 핵심 아이디어: 2차원 순회, 0 / 0으로 이루어진배열 채워넣기
// 배운점: 새로운 배열이 필요 없다면 forEach() 쓰기 (map은 새로운 배열을 리턴함)

// 시간복잡도: O(n^2)

function solution(arr) {
//     arr의 모든 원소의 길이는 같습니다
    
//     n x n 미리 반환
    if (arr.length === arr[0].length) return arr;
    
//     차잇값 미리 계산, while문을 for문으로
    const diff = Math.abs(arr.length - arr[0].length);
    
//     행 추가  O(diff * cols)
    if (arr.length < arr[0].length) {
        for (let i = 0; i < diff; i++) {
            arr.push(new Array(arr[0].length).fill(0));
        }
    }
//     열 추가 O(diff × rows)
    else {
        arr.forEach((row) => {
            for (let i = 0; i < diff; i++) {
                row.push(0);
            }
        });
    }

    return arr;
}