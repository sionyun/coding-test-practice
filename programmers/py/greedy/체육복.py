"""
    문제: 체육복
    출처: 프로그래머스 Level 1
    유형: 탐욕법
    핵심 아이디어: 제약이 있는 자원을, 선택지가 적은 대상부터 배분하는 문제
    배운점:
        - greedy: 지금 선택이 미래에도 영향 거의 없음
        - DP / 백트래킹: 지금 선택이 나중에 크게 영향 줌
    시간복잡도: O(n)
"""

def solution(n, lost, reserve):
#     잃어버린 사람 기준으로!
#     자기 비축분 스스로 입으면 되는 애 먼저 해결
    lost = set(lost)
    reserve = set(reserve)
    
    intersection = lost & reserve
    reserve -= intersection
    lost -= intersection
    
    for r in reserve:
        if r-1 in lost:
            lost.remove(r-1)
#       한명 빌려주면 다른 한명은 못빌려줌
        elif r+1 in lost:
            lost.remove(r+1)
    
    return n - len(lost)

"""
# 틀린 코드
def solution(n, lost, reserve):
    answer = n - len(lost)
    myset = set()
    
    for r in reserve:
        if not(r in lost):
            if r > 1:
                myset.add(r-1)
            if r < n:
                myset.add(r+1)
        else:
#             자기 비축분 스스로 입으면 됨 (해결)
            answer += 1    
    
    for l in lost:
        if l in myset:
#             남의 옷 입음 (해결)
            myset.remove(l)
#     문제: 한명 빌려주면 다른 애는 못빌려줌
            answer += 1
            
    return answer
"""

