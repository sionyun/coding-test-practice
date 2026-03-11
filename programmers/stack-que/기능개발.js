/*
    문제: 기능개발
    출처: 프로그래머스 Level 2
    유형: 스택
    핵심 아이디어: 작업량 더해가며 가장 앞/뒤부터 배포 가능성 확인
    배운점:
        - JS LIFO
    시간복잡도: TODO
*/

// pop 안쓰기
function solution(progresses, speeds) {
    var answer = [];
    
    while (progresses.length > 0) {
        progresses = progresses.map((p, i) => p + speeds[i]);
        let count = 0;
        
        while (progresses[0] >= 100) {
            count ++;
        }
        
//         배포 가능한 프로그램 수만큼 앞에서부터 슬라이스
        if (count > 0) {
            progresses.slice(0, count);
            answer.push(count);
        };
    }
    
    return answer;
}

// reverse 해서 pop 쓴 것 JS stack 이라서 pop 씀 (LIFO)
function solution(progresses, speeds) {
    var answer = [];
    
    progresses.reverse();
    speeds.reverse();
    
    while (progresses.length > 0) {
        // 진행도 더해주고, 프로그램 수 초기화
        progresses = progresses.map((p, i) => p + speeds[i]);
        let count = 0;
        
        // 진행도가 채워지면 pop, 완료한 프로그램만큼 세주기
        while (progresses[progresses.length-1] >= 100) {
            progresses.pop();
            count ++;
        }
        // 정답 배열에 완료한 프로그램 수 넣어주기
        if (count > 0) answer.push(count);
    }
    
    return answer;
}