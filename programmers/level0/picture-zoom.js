// 문제: 그림 확대
// 출처: 프로그래머스 Level 0
// 유형: -
// 핵심 아이디어: 순회하며 문자, 문자열 반복
// 배운점: 문자열.split() 말고 [...문자열] 이렇게 돌릴수도 있음, flatMap()

// 시간복잡도(공통): O(nmk), n = picture 줄 개수, m = 한 줄의 문자 수, k = 확대 배수

// forEach, 한 줄 만들고 k번 push (명령형)
// answer 직접 mutate (사이드이펙트), 메모리 굿
function solution(picture, k) {
    let answer = [];
    
    picture.forEach((pic) => {
        let line = pic.split('').map((p) => p.repeat(k)).join('');
        for (let i=0; i < k; i++) answer.push(line);
    });
    
    return answer;
};

// map, 가로 --> 세로, 함수형
// 사이드이펙트 없음, 메모리 사용량 증가
function solution(picture, k) {
    return picture
//     one line: repeat each char in string k times
        .map((pic) => pic.split('').map((p) => p.repeat(k)).join(''))
//     repeat each line in array k times
        .flatMap((line) => Array(k).fill(line));
};

// 위의 코드 좀 더 고친 버전
function solution(picture, k) {
    return picture.flatMap(pic => {
//         한번에
        const line = [...pic].map(c => c.repeat(k)).join('');
        return Array(k).fill(line);
    });
}