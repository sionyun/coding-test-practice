/*
    문제: 완주하지 못한 선수
    출처: 프로그래머스 Level 2
    유형: 해시
    핵심 아이디어: 선수 이름을 키로, 빈도수를 저장값으로, 이후 완주한 선수는 카운트에서 삭제
    배운점: 맵(자료구조)활용해 해시하는 방법

    시간복잡도: O(n)
    - for-loop
        - O(n)
    - map -> array
        - O(n)
    - filter
        - O(n)
    - O(n + n + n) = O(n)
*/

function solution(participant, completion) {
//  [3] 순회 한번으로 줄인 Map 풀이
    
    let m = new Map();

    for (let i = 0; i < participant.length; i ++) {
        let p = participant[i];
        let c = completion[i];
        // (m.get(p) ?? 0)  m.get(p) 값이 null, undefined면 0으로 대체
        m.set(p, (m.get(p) ?? 0) + 1); // 이름 카운트
        m.set(c, (m.get(c) ?? 0) - 1); // 카운트에서 삭제 (완주)
    }
    
    // return [...m.entries()].filter((e) => e[1] === 1)[0][0];

    // for early completion
    for (let [key, value] of m) {
        if (value === 1) return key;
    }
}

    /*
//  [2] Map이용한 풀이
    
    let m = new Map();
    
    for (p of participant) {
        // (m.get(p) ?? 0)  m.get(p) 값이 null, undefined면 0으로 대체
        m.set(p, (m.get(p) ?? 0) + 1); // 이름 카운트
    }
    
    for (c of completion) {
        m.set(c, (m.get(c) ?? 0) - 1); // 카운트에서 삭제 (완주)
    }
    
    return [...m.entries()].filter((e) => e[1] === 1)[0][0];

//  [1] 문제는 풀지만 indexOf, has 등 순회로 인해 효율성 실패
    
    const temp = new Set([]);
    
    for (p of participant) {
        let index = completion.indexOf(p);
        if (index === -1) return p;
        else if (temp.has(p)) return p;
        else temp.add(p);
    };
    */