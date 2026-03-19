"""
    문제: 기능개발
    출처: 프로그래머스 Level 2
    유형: 큐 / Grouping
    핵심 아이디어: deque써서 시뮬레이션 or 한번에 며칠 걸리는지 계산
    배운점: -
    시간복잡도:
        - deque: O(n^2)
        - 날짜 계산: O(n)
"""
from collections import deque

# deque 사용
def solution(progresses, speeds):
    p = deque(progresses)
    s = deque(speeds)
    answer = []
    
    while p:
        for i in range(len(p)):
            p[i] += s[i]
            
        c = 0
        while p and p[0] >= 100:
            p.popleft()
            s.popleft()
            c += 1
            
        if c > 0:
            answer.append(c)

    return answer

def solution(progresses, speeds):
#     날짜 계산
    days = []
    for p, s in zip(progresses, speeds):
        days.append(math.ceil((100 - p)/s))
    
#     기능 개발 완료되는 시점 묶기
    answer = []
    current = days[0]
    count = 1
    
    for i in range(1, len(days)):
        if days[i] <= current:
            count += 1
        else:
            answer.append(count)
            current = days[i]
            count = 1
    answer.append(count)
    
    return answer