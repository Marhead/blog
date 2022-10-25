---
title: '데이터베이스 - 관계(Relationship)'
date: 2022-09-03 12:00:00 +0900
tags: ['COMPUTER-SCIENCE', 'DATABASE']
draft: false
summary: 'SQLp 혹은 SQLd 학습내용 중에 등장하는 DataBase relationship에 관한 기초 내용들 정리'
---

# DB_Relationship

사전적 의미에서는, 상호 연관성이 있는 상태, 인스턴스Instance 간 논리적인 연관성. 존재의 형태로서나 행위로서 서로에게 연관성이 부여된 상태를 의미한다. 따라서, 관계는 Entity의 정의와 Attribute의 정의 및 관계에 따라 변경될 수 있다.

## Paring
각각의 Entity의 Instance들이 자신과 관련된 Instance들과의 관계를 Occurance로 참여하는 형태를 의미. 즉 Entity의 Instance들 간의 실질적인 관계 Occurance, 관계 구현체들을 관계 Paring이라고 하고, 관계 Paring의 집합을 관계라고 정의한다.

## 분류

### 연결 목적에 따른 분류
- 존재에 의한 관계 : 별도의 Event나 Action에 의해 생겨난 관계가 아닌, 해당 Entity가 정의 될 때 부터 가지는 Entity간의 관계. 예를들어, "환자" Entity와 "담당 의사" Entity간에 가지는 관계

- 행위에 의한 관계 : 하나의 Entity의 Instance가 특정 행위를 할 때, Data가 발생할 경우를 행위에 의한 관계로 정의. 예를들어, "고객" Entity와 "주문" Entity간의 관계를 생각해 볼 수 있다.

## Relationship Naming
관계 표기시 3가지 개념을 바탕으로 표현한다.

### 관계명 Membership
Entity가 관계에 참여하는 형태를 지칭. 먼저, 관계란 2개의 Entity 사이에서 발생되므로, 하나의 관계는 2개의 관계명을 가지게 된다. 하나의 관계가 두가지 관점으로 표현될 수 있다. 이때, Entity에서 관계가 시작되는 쪽을 "관계 시작점", 관계가 끝나는 쪽을 "관계끝점"이라고 한다. 다음의 명명규칙을 따른다.
- 애매한 동사를 피한다.
- 현재형으로 표현한다.

### 관계차수 Cardinality
관계에 참여하는 두 Entity의 참여자 수를 의미한다. 일반적으로 
- 1:1
- 1:M
- M:N
으로 나타낸다.

### 관계선택사양 Optionality
Entity가 항상 관계에 참여하는지, 선택적으로 관계에 참여할 수 있는 것인지를 구분하는 것을 의미한다. 두가지로 구분 되는데, 
- 필수 참여(Mandatory Membership)
- 선택 참여(Optional Membership)
으로 구분한다.

## 관계 Checkbox
Entity의 관계를 정의할 때, 다음과 같은 체크사항들을 바탕으로 판단하면 관계 성립에 도움이 된다.
- 두 개의 Entity 사이에 관심있는 연관 규칙이 존재하는가?
- 두 개의 Entity 사이에 정보의 조합이 발생되는가?
- 문제 상황에 관계 연결에 대한 규칙이 서술되어 있는가?
- 문제 상황에 관계 연결을 가능하게하는 동사가 있는가?

