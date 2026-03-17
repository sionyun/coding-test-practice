"""
    문제: 더 맵게
    출처: 프로그래머스 Level 2
    유형: 힙
    핵심 아이디어: Min Heap 활용하기
    배운점:
        - 처음 풀때 실수한 부분:
            - 배열 길이 체크해서 힙에 2개 이상 있을 때만 pop
        - 맵지 않은 음식을 섞어 K 값보다 맵게 만들 수 없다면, -1 리턴
    

    시간복잡도: O(n log n)
"""

# 
import heapq

def solution(scoville, K):
    heapq.heapify(scoville)
    answer = 0
    
    while scoville[0] < K:
        # 만들 수 없다면 리턴 -1
        if len(scoville) < 2:
            return -1
        
        # 가장 맵지 않은 음식 두개 minheap 에서 꺼내기
        first = heapq.heappop(scoville)
        second = heapq.heappop(scoville)
        
        # 새로운 음식 넣어주기
        heapq.heappush(scoville, first + second * 2)
        answer += 1
    
    return answer