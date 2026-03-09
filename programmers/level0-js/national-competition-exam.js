// 문제: 전국 대회 선발 고사
// 출처: 프로그래머스 Level 0
// 유형: -
// 핵심 아이디어: 인덱스가 번호, 저장값이 등수이기 때문에 최솟값 (1,2,3등)을 찾으면서도 출석 여부를 따지기 위해 인덱스를 잃어서는 안됨!
// 배운점: map()으로 저장값과 인덱스를 배열 형태로 저장해 값 기준으로 정렬 후 기존 인덱스 찾기

// 상위 3개만 킵
// 시간 O(n)
// 공간 O(1)
function solution(rank, attendance) {
    let first = -1, second = -1, third = -1;

    for (let i = 0; i < rank.length; i++) {
        if (!attendance[i]) continue;

        if (first === -1 || rank[i] < rank[first]) {
            third = second;
            second = first;
            first = i;
        } 
        else if (second === -1 || rank[i] < rank[second]) {
            third = second;
            second = i;
        } 
        else if (third === -1 || rank[i] < rank[third]) {
            third = i;
        }
    }

    return 10000 * first + 100 * second + third;
}

// 번호랑 랭크 같이 저장해서 돌린 버전
// 시간 O(n log n), map/for: n, sort: n log n
// 공간 O(n)
function solution(rank, attendance) {
    let answer = [];
    let students = rank
        .map((r, i) => [r, i])
        .sort((a, b) => a[0] - b[0]);

    for (let [r, i] of students) {
        if (attendance[i]) answer.push(i);
        if (selected.length === 3) break;
    }
    
    return (10000*answer[0] + 100*answer[1] + answer[2]);
}

// 랭크대로 소트하고 나중에 indexOf로 찾는 방식
// 시간 O(n^2), 공간 O(n)
function solution(rank, attendance) {
    let answer = [];
    
//     문제점 - 원본 배열을 직접 변경(in-place)
    // let sortedRank = rank.sort((a, b) => a-b);
    
//     배열을 복사해서 정렬하면 해결
    let sortedRank = [...rank].sort((a, b) => a-b);

    for (let i = 0; i < rank.length; i++) {
    //     등수니까 안겹침. 학생 번호는 인덱스오브로 찾아도 됨
        if (answer.length === 3) break;
//         복잡도 증가 O(n^2)
        let num = rank.indexOf(sortedRank[i]);
        if (attendance[num]) answer.push(num);
    }    
    return (10000*answer[0] + 100*answer[1] + answer[2]);
}