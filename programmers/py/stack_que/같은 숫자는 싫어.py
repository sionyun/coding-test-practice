"""
    문제: 같은 숫자는 싫어
    출처: 프로그래머스 Level 1
    유형: 스택
    핵심 아이디어: 스택 활용
    배운점: -
    시간복잡도: O(n)
"""
def solution(arr):
#     seen 을 활용해 직전 수 비교
    seen = -1
    answer = []
    for a in arr:
        if a != seen:
            answer.append(a)
            seen = a
    return answer

def solution(arr):
    answer = []
    for a in arr:
#         answer[-1]로 seen 없앰
        if len(answer) < 1 or a != answer[-1]:
            answer.append(a)
    return answer