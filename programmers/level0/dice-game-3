// 문제: 주사위 게임 3
// 출처: 프로그래머스 Level 0
// 유형: -
// 핵심 아이디어: 집합 사용해 같은 주사위값 개수 구하기
// 배운 점: 꺼진 엣지케이스도 다시 보자

function solution(a, b, c, d) {
    var set = new Set([a,b,c,d]);
    
    switch(set.size) {
//      pppp
        case 1:
            return 1111 * a;
            
//      ppqq / pppq
        case 2:
            let [p, q] = [...set];
            let count = [a,b,c,d].filter(num => num === p).length;
            
//             이거는 qppp일때 깨짐 두번째 조건을 나눠줘야함
            // return count === 2 ? (p+q) * Math.abs(p-q) :  (10*p + q) ** 2;
            
            if (count === 2) {
                return (p+q) * Math.abs(p-q);
            }
            else if (count === 3) {
                return (10 * p + q) ** 2;
            }
            else {
                return (10 * q + p) ** 2;
            }
            
//      ppqr
        case 3:
            let valueArr = [a, b, c, d].sort((x, y) => x - y);
            for (let i = 0; i < valueArr.length; i ++) {
                if (valueArr[i] == valueArr[i+1]){
                    valueArr[i] = -1
                    valueArr[i+1] = -1
                }
            }
            const qr = valueArr.sort((x, y) => x - y);
            return qr.pop() * qr.pop();
            
//      pqrs
        case 4:
            return Math.min(a,b,c,d); 
    }
}