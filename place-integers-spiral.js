// 문제: 정수를 나선형으로 배치하기
// 출처: 프로그래머스 Level 0
// 유형: -
// 핵심 아이디어: 경계 축소(boundary shrink) / 이차원 배열 상의 나선형 순회 (spiral traversal)
// 배운점: 

// Time: O(n²), n x n 배열 한번씩 다 방문해야함

// 경계를 점점 줄여가면서 4방향 순환
function solution(n) {
    let answer = Array.from({ length: n }, () => new Array(n).fill(0));
    
    let k = 1;
    let x_start = 0;
    let y_start = 0;
    let x_end = n-1;
    let y_end = n-1;

    while (x_start <= x_end && y_start <= y_end) {
//         right
        for (let i = x_start; i <= x_end; i++) {
            answer[y_start][i] = k++; 
        }
        y_start++;

//         down
        for (let i = y_start; i <= y_end; i++) {
            answer[i][x_end] = k++;
        }
        x_end --;

//         left
        for (let i = x_end; i >= x_start; i --) {
            answer[y_end][i] = k++;
        }
        y_end --;

//         up
        for (let i = y_end; i >= y_start; i --) {
            answer[i][x_start] = k++;
        }
        x_start ++;
    }
    return answer;
}


// 벽이나 이미 채워진 곳을 만나면 방향 전환
function solution(n) {
    const answer = Array.from({ length: n }, () => Array(n).fill(0));
    
//     right-down-left-up
    const dx = [1, 0, -1, 0];
    const dy = [0, 1, 0, -1];
    
    // 방향 전환용 (dx, dy와 사용)
    let dir = 0;

    // 현재 좌표
    let x = 0;
    let y = 0;
    
    for (let i = 1; i <= n * n; i++) {
        answer[y][x] = i; // 정수 값 채워넣기
        
//         다음 위치
        let nx = x + dx[dir];
        let ny = y + dy[dir];
        
        if (
            nx < 0 || ny < 0 || nx >= n || ny >= n // 벽
            || answer[ny][nx] !== 0 // 이미 채워짐
        ) {
            dir = (dir + 1) % 4; // 방향 전환
            nx = x + dx[dir];
            ny = y + dy[dir];
        }
        
//         좌표 변경
        x = nx;
        y = ny;
    }
    
    return answer;
}