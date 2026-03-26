"""
    문제: 모의고사
    출처: 프로그래머스 Level 1
    유형: 완전탐색
    핵심 아이디어: 패턴들을 배열로 저장해 정답과 한번에 비교하기
    배운점: -
    시간복잡도: O(n)
"""

def solution(answers):
    supoja1 = [1,2,3,4,5]
    supoja2 = [2,1,2,3,2,4,2,5]
    supoja3 = [3,3,1,1,2,2,4,4,5,5]
    scores = [0, 0, 0]
    answer = []
    
    for i in range(len(answers)):
        if answers[i] == supoja1[i%len(supoja1)]:
            scores[0] += 1
        if answers[i] == supoja2[i%len(supoja2)]:
            scores[1] += 1
        if answers[i] == supoja3[i%len(supoja3)]:
            scores[2] += 1
    
    max_score = max(scores)
    
    for s in range(len(scores)):
        if scores[s] == max_score:
            answer.append(s + 1)
    
    return answer

# 확장성 고려한 풀이
def solution(answers):
    patterns = [
        [1,2,3,4,5],
        [2,1,2,3,2,4,2,5],
        [3,3,1,1,2,2,4,4,5,5]
    ]
    scores = [0] * len(patterns)
    
    for i in range(len(answers)):
        for j in range(len(patterns)):
            if answers[i] == patterns[j][i%len(patterns[j])]:
                scores[j] += 1
    
    max_score = max(scores)
    return [idx+1 for idx, s in enumerate(scores) if s == max_score]