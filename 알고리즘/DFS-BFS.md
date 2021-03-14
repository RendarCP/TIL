### 들어가기전 필요한 자료구조 기초

1. 스택(Stack)
    - 선입후출 또는 선입 선출 구조 (First In Last Out / Last In First Out)

        ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/eb38b0bc-6d6d-4420-b0b3-5fa774d05f2c/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/eb38b0bc-6d6d-4420-b0b3-5fa774d05f2c/Untitled.png)

    - 스택의 코드(Python)

        ```python
        # 삽입(5) - 삽입(2) - 삽입(3) - 삽입(7) - 삭제() - 삽입(1) - 삽입(4) - 삭제()

        stack = []

        # append() -> push 개념 / pop() -> pop 개념
        stack.append(5) 
        stack.append(2)
        stack.append(3)
        stack.append(7)
        stack.pop()
        stack.append(1)
        stack.append(4)
        stack.pop()

        print(stack) # 최하단 부터 출력 
        print(stack[::-1]) # 최상단부터 출력

        # [5, 2, 3 ,1]
        # [1, 3, 2, 5]
        ```

1. 큐(Queue)
    - 대기 줄에 비유가 가능
    - 선입 선출 구조 (First In First Out)

        ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e0988a5a-655c-4620-89b2-d5b8e5d432ab/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e0988a5a-655c-4620-89b2-d5b8e5d432ab/Untitled.png)

    - 큐의 코드

        ```python
        # 삽입(5) - 삽입(2) - 삽입(3) - 삽입(7) - 삭제() - 삽입(1) - 삽입(4) - 삭제()

        from collection import deque 
        # 큐 구현을 위해 deque 라이브러리 사용
        # -> collection 모듈에서 제공하는 deque라이브러리 
        # -> 코딩테스트에서는 기본라이브러리 사용을 허용 

        queue = deque() 

        queue.append(5)
        queue.append(2)
        queue.append(3)
        queue.append(7)
        queue.popleft()
        queue.append(1)
        queue.append(4)
        queue.popleft()

        print(queue) # 먼저 들어온 순서
        queue.reverse()
        print(queue) # 나중에 들어온 순서
        # -> 리스트형으로 변환시 list(queue) 

        # deque([3, 7, 1, 4])
        # deque([4, 1, 7, 3])
        ```

2. 재귀 함수
    - 재귀함수란?
        - 자기 자신을 다시 호출하는 함수
    - 재귀함수 예 (구현)

        ```python
        def recursive_function():
        	print('재귀 함수를 호출합시다.')
        	recursive_function()

        recursive_function()

        # '재귀 함수를 호출합시다.' 무한출력 
        ```

    - 재귀함수 종료조건
        - 재귀함수를 문제 풀이에 이용시 재귀함수 종료조건을 꼭 명시해야된다
        - 구현 예

            ```python
            def recursive_function(i):
            	# i가 100일때 함수 종료 (종료조건 
            	if i == 100
            		return

            print(i, '번째 재귀 함수에서', i + 1, '번째 재귀 함수를 호출합니다.')
            recursive_function(i+1)
            print(i,'번째 재귀 함수를 종료합니다.')
            recursive_function(1)
            ```

            ```python
            # 팩토리얼을 이용한 2가지 구현방법

            # 1. 반복문으로 구현한 n!
            def factorial_iterative(n):
            	result = 1
            	for i in range(1, n+1):
            		result *= i
            	return result 

            def factorial_recursive(n):
            	if n <= 1: 
            		return 1
            	return n * fatorial_recursive(n-1)

            print('반복적으로 구현: ', factorial_iterative(5))
            print('재귀적으로 구현: ', factorial_recursive(5))

            # 반복적으로 구현: 120
            # 재귀적으로 구현: 120
            ```

            - 위 결과는 동일하지만 반복문보다 재귀함수 코드가 더 간결하다.

### DFS

1. DFS(Depth-First Search)란?
    - 시간 복잡도는 O(n)→ 인접리스트, O(n^2) → 인접행렬
    - 깊이 우선 탐색이라고도 부르며, 그래프에서 깊은 부분을 우선적으로 탐색하는 알고리즘
    - 그래프란 무엇인가?

        ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ded6c42c-6ab8-4b0d-9a33-30aee5810f63/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ded6c42c-6ab8-4b0d-9a33-30aee5810f63/Untitled.png)

        - 노드(정점)와 엣지(간선)으로 표현되는것을 말한다.
        - 두 노드가 서로 연결되어 있다면 '인접하다(Adjacent)' 라고 표현
        - 인접행렬 방식

            ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5bb5879a-c0c8-4219-a2b1-331b23eac9e5/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5bb5879a-c0c8-4219-a2b1-331b23eac9e5/Untitled.png)

            ```python
            # 인접 행렬 방식 예제
            INF = 9999999999 # 무한의 비용

            graph = [
            	[0, 7, 5],
            	[7, 0 , INF],
            	[5, INF, 0]
            ]

            print(graph)

            # [[0, 7, 5], [7, 0, 9999999999], [5, 9999999999, 0]]
            ```

        - 인접리스트

            ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/800662dd-e19b-4105-8fd8-358131103200/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/800662dd-e19b-4105-8fd8-358131103200/Untitled.png)

            ```python
            graph = [[] for _ in rang(3)]

            # 노드0에 연결된 노드 정보 저장 (노드,거리)
            graph[0].append((1,7))
            graph[0].append((2,5))

            # 노드1에 연결된 노드 정보 
            graph[1].append((0,7))

            # 노드2에 연결된 노드 정보 
            graph[2].append((0,5))

            print(graph)

            # [[(1,7), (2,5)], [(0, 7)], [(0, 5)]]
            ```

    - DFS의 자세한 내용은 [이 곳](https://gmlwjd9405.github.io/2018/08/14/algorithm-dfs.html) 내용 참고
2. DFS 구현 예

    ```python
    def dfs(graph, v, visited):
    	# 현재 노드를 방문 처리
    	visited[v] = True
    	print(v, end= ' ')
    	# 현재 노드와 연결된 다른 노드를 재귀적으로 방문
    	for i in graph[v]:
    		if not visited[i]:
    			dfs(graph, i, visited)

    # 각 노드가 연결된 정보를 리스트 자료형으로 표현(2차원 리스트)
    graph =[
    	[],
    	[2, 3, 8],
    	[1, 7],
    	[1, 4, 5],
    	[3, 5],
    	[3, 4],
    	[7],
    	[2, 6, 8],
    	[1, 7]
    ]

    # 각 노드가 방문된 정보를 리스트 장료형으로 표현(1차원 리스트)
    visited = [False] * 9

    # 정의된 DFS 함수 호출
    dfs(graph, 1, visited)

    # 1 2 7 6 8 3 4 5
    ```

### BFS

1. BFS(Breath First Search)란?
    - 시간 복잡도는 인접리스트(n), 인접 행렬(n^2)
    - 너비 우선 탐색이라고 부르며, 가까운 노드부터 탐색하는 알고리즘
    - 큐 자료구조를 이용하는 것이 정석
    - 동작 원리
        1. 탐색 시작 노드를 큐에 삽입하고 방문처리를 한다.
        2. 큐에서 노드를 꺼내 해당 노드의 인접 노드중에서 방문하지 않은 노드를 모두 큐에 삽입하고
        방문처리 한다.
        3. 2번 과정을 더 이상 수행할 수 없을 때 까지 반복한다. 

    - 자세한 BFS 내용은 [이 곳](https://gmlwjd9405.github.io/2018/08/15/algorithm-bfs.html) 참조

2. BFS 구현 예

    ```python
    from collections import deque

    def bfs(graph, start, visited):
    	# 큐(Queue) 구현을 위해 deque라이브러리 사용
    	queue = deque([start])
    	# 현재 노드 방문 처리
    	visited([start]) = True 
    	# 큐가 빌 때까지 반복
    	while queue:
    		# 큐에서 하나의 원소를 뽐아 출력
    		v = queue.popleft()
    		print(v, end = ' ')
    		# 해당 원소와 연결된, 아직 방문하지 않은 원소들을 큐에 삽입
    		for i in graph[v]:
    			if not visited[i]:
    				queue.append(i)
    				visited[i] = True

    # 각 노드가 연결된 정보를 리스트 자료형으로 표현(2차원 리스트)
    graph = [
    	[],
    	[2, 3, 8],
    	[1, 7],
    	[1, 4, 5],
    	[3, 5],
    	[3, 4],
    	[7],
    	[2, 6, 8],
    	[1, 7]
    ]

    # 각 노드가 방문된 정보를 리스트 자료형으로 표현(1차원 리스트)
    visited = [False] * 9

    bfs(graph, 1, visited)

    # 1 2 3 8 7 4 5 6
    ```

### DFS/BFS 간단 비교

- DFS
    1. 동작원리 : 스택
    2. 구현방법 : 재귀 함수 이용
- BFS
    1. 동작원리 : 큐
    2. 구현방법 : 큐 자료구조 이용
- → 코딩테스트에서 2차원 배열 탐색시 그래프형태로 바꿔서 생각

### DFS/BFS 문제 예시

1. 음료수 얼려 먹기

    ```
    입력조건
    1. 첫 번째 줄에 얼음 틀의 세로 길이 N과 가로길이 M이 주어진다(1<=N, M<=1,000)
    2. 두 번째 줄부터 N+1번째 줄까지 얼음 틀의 형태가 주어진다.
    3. 이때 구멍이 뚫려있는 부분은 0, 그렇지 않은 부분은 1 이다.

    출력 조건
    1. 한 번에 만들 수 있는 아이스크림 개수를 출력한다

    입력 예시
    00000111100000
    11111101111110
    11011101101110
    11011101100000
    11011111111111
    11011111111100
    11000000011111
    01111111111111
    00000000011111
    01111111111000
    00011111111000
    00000001111000
    11111111110011
    11100011111111
    11100011111111

    출력 예시
    8
    ```

    >DFS로 해결할 수있는 문제 (노드의 묶음을 찾아주는 프로그램 작성)

    ```python
    # N, M을 공백으로 구분하여 입력
    n, m = map(int, input().split())

    # 2차원 리스트의 맵 정보 입력
    graph = []
    for i in range(n):
      graph.append(list(map(int, input())))

    # DFS를 이용하여 노드 방문후 연결된 모든 노드를 방문
    def dfs(x,y):
    	# 범위를 넘어갈시 종료
    	if x <= -1 or x >= n or y <= -1 or y >= m:
    		return False
    	
    	# 현재 노드를 방문하지 않았으면 
    	if graph[x][y] == 0:
    		graph[x][y] = 1
    		
    		# 상, 하, 좌, 우의 위치도 모두 재귀적으로 호출
    		dfs(x -1 , y) # 좌
    		dfs(x , y -1) # 하
    		dfs(x + 1, y) # 우
    		dfs(x, y + 1) # 상
    		return True
    	return False

    result = 0
    for i in range(n):
    	for j in range(m):
    		if dfs(i,j) == True:
    			result += 1

    print(result)
    ```

2. 미로 탈출

    ```
    입력 조건
    1. 첫 째줄에 두 정수 N,M(4<=N, M<=200)이 주어집니다. 다음 N개의 줄에는 각각 M개의 정수 (0 혹은 1)
    	 로 미로의 정보가 주어진다. 각각의 수들은 공백 없이 붙어서 입력으로 제시된다. 또한 시작칸과 마지막 칸은 항상 1이다.

    출력 조건
    1. 첫 째줄에 최소 이동 칸의 개수를 출력한다.

    입력예시
    5 6
    101010
    111111
    000001
    111111
    111111

    출력 예시 
    10
    ```

    >BFS를 이용해서 매우 효과적으로 해결 가능 
    ⇒ 시작 지점에서 가까운 노드부터 차례대로 탐색 

    ```python
    from collections import deque

    # n, m 을 공백으로 구분하여 입력
    n, m = map(int, input().split())

    # 2차원 리스트의 맵 정보 입력
    graph = []
    for i in range(n):
    	graph.append(list(map(int, input())))

    # 이동할 네 방향 정의(상,하,좌,우)
    dx = [-1, 1, 0, 0]
    dy = [0, 0, -1, 1]

    def bfs(x,y):
    	# 큐 구현을 위한 라이브러리 사용
    	queue = deque()
    	queue.append((x,y))
    	# 큐가 빌때까지 반복
    	while queue:
    		x,y = queue.popleft()
    		
    		# 현재 위치에서 네방향으로 위치 확인
    		for i in range(4):
    			nx = x + dx[i]
    			ny = y + dy[i]
    			# 공간을 벗어난 경우 무시
    			if nx < 0 or ny < 0 or nx >= n or ny >= m:
    				continue
    			# 벽인 경우 무시
    			if graph[nx][ny] == 0:
    				continue
    			# 해당 노드를 처음 방문하는 경우에만 최단 거리 기록
    			if graph[nx][ny] == 1:
    				graph[nx][ny] = graph[x][y] + 1
    				queue.append((nx,ny))
    	# 가장 오른쪽 아래까지의 최단 거리 반환
    	return graph[n-1][m-1]

    print(bfs(0,0))
    ```