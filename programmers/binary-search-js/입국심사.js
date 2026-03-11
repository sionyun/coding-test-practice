/*
    문제: 입국심사
    출처: 프로그래머스 Level 4
    유형: 이분탐색
    핵심 아이디어: '시간' 기준 이분 탐색 -> mid (시간) 동안 처리 가능한 사람 수 계산
    배운점:
        - 이분 탐색 전반
        - 다루는 숫자가 커지면 중간에 멈추는것이 중요 (count 계산할 때)

    시간복잡도: TODO
*/
function solution(n, times) {
    let answer = 0;
    
    let left = 1; // 최솟값
    let right = Math.max(...times) * n; // 최댓값, 가장 느린 카운터에서 모두 처리
    let count = 0; // mid 동안 처리 가능한 인원 수 (조건)

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        for (let i = 0; i < times.length; i++) {
            count += Math.floor(mid/times[i]); // 한 카운터당 인원
            if (count > n) break; // count n명 넘으면 계산 끝
        }

        // 처리 가능한 인원이 n보다 많으면 시간을 줄이고, 부족하면 시간을 늘림
        if (count === n) {
            if (right-left <= 1) return mid; // 범위가 좁아졌음, 이분탐색 완료
            right = mid - 1;
        }
        if (count < n) {
            left = mid + 1;
        } 
        else {
            right = mid - 1;
            answer = mid;
        }
        count = 0;
    }
    return answer;
}