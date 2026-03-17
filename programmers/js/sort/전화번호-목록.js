/*
    문제: 전화번호 목록
    출처: 프로그래머스 Level 2
    유형: 소트
    핵심 아이디어: 소트해서 인접한 수끼리 비교, startsWith() 함수 활용
    배운점: 2차원 배열 만드는 방법

    시간복잡도: O(n log n)
    - JS 정렬:
        O(n log n)
        n = length of phone_book
    - for-loop + startsWith:
        O(n * m)
        m = length of prefix
*/

function solution(phone_book) {
    phone_book.sort();
    
    for (let i = 1; i < phone_book.length; i++) {
        if (phone_book[i].startsWith(phone_book[i-1])) return false;
    }
    return true;
}
