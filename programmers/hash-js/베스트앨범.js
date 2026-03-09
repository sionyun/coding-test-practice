/*
    문제: 베스트앨범
    출처: 프로그래머스 Level 3
    유형: 해시 + 소트
    핵심 아이디어: hash map (grouping + aggregation) -> 장르 정렬 → 상위 2곡 선택
    배운점:
    - for loop 한 번으로 장르별 총 조회수 집계(aggregation)와 곡 그룹화(grouping) 동시 처리
    - Map에서 더해줄 때 has()가 아니라 get() + nullish coalescing(??) (실수)
    - 정렬 후 slice(0,2)로 top k 선택하는 패턴은 코딩테스트에서 자주 사용된다 (gpt 피셜)

    시간복잡도: O(n log n)
    - Map 생성 및 데이터 집계: O(n)
    - 장르 정렬: O(g log g) (g = 장르 개수)
    - 각 장르별 곡 정렬: Σ O(k log k) ≈ O(n log n)
    - 전체 시간복잡도: O(n log n)

    공간복잡도: 
    - 장르별 곡 저장 Map: O(n)
    - 장르별 조회수 Map: O(g)
*/

function solution(genres, plays) {
    let playMap = new Map();
    let genreMap = new Map();
    let answer = [];
    
    for (let i = 0; i < plays.length; i++) {
        let g = genres[i];
        let p = plays[i];
        
        // 장르별 조회수 더해주기
        genreMap.set(g, (genreMap.get(g) ?? 0) + p);
        
        // 장르별로 곡 정리
        // 배열을 덮어쓰지 않고 추가하는 방법
        if (!playMap.has(g)) playMap.set(g, []);
        playMap.get(g).push([i, p]);
    }
    
    // 조회수 많은 장르 (key) 정렬
    let sortedGenres = [...genreMap.keys()].sort((a, b) => genreMap.get(b) - genreMap.get(a));
    
    
    // 장르별로 2곡 뽑기
    for (let genre of sortedGenres) {
        // 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록
        let songs = playMap
        .get(genre)
        .sort((a, b) => b[1] === a[1] ? a[0] - b[0] : b[1] - a[1])
        .slice(0,2);
        
        answer.push(songs[0][0]);
        if (songs[1]) answer.push(songs[1][0]);
    }

    return answer;
}