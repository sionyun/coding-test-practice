"""
    문제: 베스트앨범
    출처: 프로그래머스 Level 3
    유형: 해시 + 소트
    핵심 아이디어: 장르별 grouping → top k
    배운점:
    - 실수: 정렬을 과하게 사용 (heap 가능)

    시간복잡도:
    - 최적화 전: O(n log n)
        - 데이터 집계: O(n)
        - 장르 정렬: O(g log g) (g = 장르 개수)
        - 각 장르별 곡 정렬: O(n log n)
    - 최적화 후: O(n)
        - 각 장르별 곡 정렬: O(n)

"""

# 최적화 버전
from collections import defaultdict
import heapq

def solution(genres, plays):
    # dict 초기화 생략
    songs = defaultdict(list)
    ps = defaultdict(int)
    answer = []

    # zip 사용, 인덱스, 장르, 플레이 같이 돌기
    for i, (g, p) in enumerate(zip(genres, plays)):
        songs[g].append((i, p))
        ps[g] += p

    # 장르 정렬
    sorted_genres = sorted(ps.keys(), key=lambda g: ps[g], reverse=True)

    # 각 장르별 top 2 (힙 사용)
    for g in sorted_genres:
        top2 = heapq.nlargest(2, songs[g], key=lambda x: x[1])
        answer.extend([i for i, _ in top2])

    return answer

def solution(genres, plays):
    songs = {g:[] for g in genres}
    ps = {g:0 for g in genres}
    answer = []
    
    # (1) 장르별 인덱스, 재생 수 매핑, (2) 장르별 재생 수 합산
    for i in range(len(genres)):
        songs[genres[i]].append([i, plays[i]])
        ps[genres[i]] += plays[i]
        
    #  많이 재생된 장르 정렬 
    ps = dict(sorted(ps.items(), key=lambda item: item[1], reverse=True))
    
    # 장르 내에서 많이 재생된 노래 2곡 선정
    for g in ps.keys():
        temp = sorted(songs[g], key=lambda item: item[1], reverse=True)
        
        answer.append(temp[0][0])
        if len(temp) > 1:
            answer.append(temp[1][0])
        
    return answer