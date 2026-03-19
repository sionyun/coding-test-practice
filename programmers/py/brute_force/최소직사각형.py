"""
    문제: 최소직사각형
    출처: 프로그래머스 Level 2
    유형: 완전탐색
    핵심 아이디어: 사이즈 튜플 안에서 한번 정렬해주기! (가로-세로 돌릴 수 있다)
    배운점:
        - zip(*sizes)
    시간복잡도: O(n)

"""
def solution(sizes):
    for size in sizes:
        size.sort(reverse=True)
        # w, h 안에서 정렬 (돌리는 경우 상정)

    # w, h 끼리 모아 배열
    w,h = map(list, zip(*sizes))
    return max(w) * max(h)