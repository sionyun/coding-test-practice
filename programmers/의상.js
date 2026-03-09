/*
    문제: 의상
    출처: 프로그래머스 Level 2
    유형: 해시
    핵심 아이디어: 해싱으로 카테고리별 의상 분류, 경우의 수 계산
    배운점: 해싱까지는 수월했는데 경우의 수 계산에서 막힘. nCr 조합이랑 헷갈렸는데 알고 보니 곱셈 활용이었다. 

    시간복잡도: O(n)
    - for loop:
        O(n)
        n = length of clothes
    - m.values() reduce:
        O(k)
        m = number of categories in m
    - O(n) + O(k) => O(n)
*/

function solution(clothes) {
    let m = new Map();
    let count = 0;
    
    for (let cloth of clothes) {
        let category = cloth[1];
        m.set(category, (m.get(category) ?? 0) + 1);
    }
    
    // 카테고리 개수 * (옷 개수 + 안 입는 경우 1) - (아무것도 안입음 1)
    return  [...m.values()].reduce((a, c) => a*(c+1), 1) - 1;
}