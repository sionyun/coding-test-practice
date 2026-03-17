// 문제: ㅣ로 만들기
// 출처: 프로그래머스 Level 0
// 유형: -
// 핵심 아이디어: 순회, 문자열 비교
// 배운점: JS 문자열 비교는 사전 순서이다. 처음에는 I 로 잘못 읽었는데 l 이었다. 문제에서 복사해 쓰자.

// 시간복잡도: O(n)

function solution(myString) {
//    하드코딩
    return [...myString]
        .map((s) => s.charCodeAt(0) < 108 ? 'l' : s)
        .join('');
    
//    하드코딩 아님
    const limit = 'l'.charCodeAt(0);
    return [...myString]
        .map((s) => s.charCodeAt(0) < limit ? 'l' : s)
        .join('');

//      문자열 비교 (JS 문자열은 사전식 비교)
    return [...myString]
        .map(s => s < 'l' ? 'l' : s)
        .join('');

}