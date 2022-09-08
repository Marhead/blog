---
title: '🤔Naming Convention(네이밍 컨벤션)이란 무엇일까?'
date: 2021-04-13 06:00:00 +0900
tags: ['MISCELLANEOUS']
draft: false
summary: '코딩 중 마주하는 객체들에 대한 이름을 짓는 방법을 정의하는 관례에 대하여 정리한 문서. IT주변 용어/상식/정보 정리 문서'
---
# Naming Convention(네이밍 컨벤션) 이란?
프로그래밍을 하다보면 다양한 식별자가 사용되며, 해당 식별자들은 문자열 명칭으로 구분된다. 현대 사회 속 프로그램들은 규모와 복잡성이 비대해 졌고, 따라서 다양한 사람들과 함께 힘을 합쳐 프로그램을 작성하는 상황이 표준 상태이다. 이러한 개발 과정 중, 식별자의 성질에 따라 명칭에 규칙을 세우게 되었고, 해당 규칙을 *Naming Convention*, **네이밍 컨벤션** 이라고 부른다. 직역 하면 **명명 규칙, 명명 규약**으로 해석 할 수있다.

# Naming Convention(네이밍 컨벤션)의 장점
위키 문서에서는 다음의 3가지 사항을 가장 큰 장점으로 제시한다.
- 가독성 (legibility)  
    > 문자, 기호 또는 도형이 얼마나 쉽게 읽히는가 하는 능률의 정도. 색채의 경우 시인성 혹은 명시성이 높아 멀리서도 잘 보이는 정도를 말한다. 명시성을 높이려면 명도 차를 두어 배색하고, 명시성이 가장 높은 배색은 노란 배경에 검은 글씨이다.  
    [네이버 지식백과]
- 시인성 (Visibility
    > 대상물의 존재 또는 모양이 원거리에서도 식별이 쉬운 성질. 유목성 혹은 주목성과 구별되며, 명도 차가 클수록 시인성이 높다.  
    [네이버 지식백과]
- 효율성 (efficiency)
    > 들인 노력과 얻은 결과의 비율이 높은 특성.  [네이버 지식백과]

협업 환경 속 프로그램 소스코드 작성과 사후 관리에 능률과 편의성을 향상시킬 수 있다.

# Naming Convention(네이밍 컨벤션)의 예시
## 1. Camel case
프로그래밍에서 파일, 변수, 함수 등 대상의 이름을 띄어쓰기 없이 짓기 위하여 따르는 관례
- **Upper camel case(== Pascal case)**  
파스칼 케이스라고 많이 불리우는 네이밍 컨벤션. 첫 단어부터 각 단어의 시작 알파벳을 대문자로 작성하는 방법이다. 단어와 단어 사이는 모두 연결한다.
> 클래스명에 많이 사용된다.
```
원문 : infinite programming language
파스칼 케이스 : InfiniteProgrammingLanguage
```

- **Lower camel case(== Dromedary case)**  
카멜 케이스라고 많이 불리우는 네이밍 컨벤션. 낙타의 등 모양에서 따온 방법이다. 첫 단어는 소문자, 두번째 단어부터 대문자로 사용한다. 단어와 단어 사이는 모두 연결한다.
> 변수명, 함수명에 많이 사용된다.
```
원문 : infinite programming language
로우 케이스 : infinteProgrammingLanguage
```

## 2. Hungarian notation
컴퓨터 프로그래밍에서 변수나 함수의 이름에 그 종류, 곧 흔히 데이터 타입 따위를 명시하는 표기법으로, 명명규칙의 일종이다. 최근에는 디스플레이 화면도 커지고 IDE가 발전하여서 **많이 사용 되지 않는다.**
```
예시 : strName, nStudentnumber
```

## 3. Snake case
바닥을 기어다니는 뱀의 모습을 따온 네이밍 컨벤션. 단어와 단어 사이를 언더 바(_)를 사용하여 띄워서 표기한다.
> 파일명에 많이 쓰임
```
원문 : infinite programming language
스네이크 케이스 : infinite_programming_language
```

## 4. Kebab case
케밥이 꼬챙이게 꽂히 모습에서 생긴 방법. 모든 단어가 소문자 시작, 단어와 단어 사이 "-"로 연결
```
원문 : infinite programming language
케밥 케이스 : infinite-programming-language
```