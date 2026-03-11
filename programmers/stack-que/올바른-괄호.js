/*
    문제: 올바른 괄호
    출처: 프로그래머스 Level 2
    유형: 스택
    핵심 아이디어: s는 '(', ')' 로만 구성되어있다. 클래식한 문제.
    배운점:
        - JS LIFO
    시간복잡도: O(n), n = |s|
*/

function solution(s){    
    let stack = [];

    for (let c of s) {
        if (c === '(') stack.push(c);
        else {
            if (stack.length === 0) return false;
            stack.pop();
        }
    }

    return stack.length === 0;
}