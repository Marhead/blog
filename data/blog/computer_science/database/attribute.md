---
title: '🗄️데이터베이스 - 어트리뷰트(Attribute)'
date: 2022-09-02 12:00:00 +0900
tags: ['COMPUTER-SCIENCE', 'DATABASE']
draft: false
summary: 'SQLp 혹은 SQLd 학습내용 중에 등장하는 DataBase attribute에 대한 기초 내용 정리'
image: 'bank-safe-1.jpg'
---

# DB_Attribute

**데이터 베이스 속성값**

익숙한 표현으로 **데이터 타입Data Type**, 의미상 더 이상 분리되지 않는 최소의 데이터 단위이다.
- 엔티티와 마찬가지로, 작업에 필요하고 관리하고자 하는 정보여야한다.
- 정규화 이론에 근거하여 정해진 주 식별자에 함수적 종속성을 가져야한다.
- 하나의 속성에는 하나의 값만 있어야한다.

## Entity - Instance - Attribute의 관계
- 1 개의 Entity - n 개의 Instance
- 1 개의 entity - n 개의 Attribute
- 1 개의 Attribute - n 개의 Attribute Values

## 분류
속성의 특성과 엔티티의 구성 방식, 세부 의미에 따라 분류 된다.

### 특성에 따른 분류
- 기본 속성(Basic Attribute) : 업무 분석 중 바로 정의한, 처음 정의한 기본 속성. 가장 일반적이고 많은 속성을 차지. 그러나, 코드성 데이터, Entity 식별 일련 번호, 다른 속성 계산의 영향을 받아 생성된 속성은 기본 속성이 아니다.
- 설계 속성(Designed Attribute) : 작업에 바로 필요한 데이터가 아니라, 데이터 모델링을 위해, 혹은 작업을 규칙화 하기 위해 새로 만들어지거나 변형된 속성. 일반적으로는 코드성 데이터등이 여기 속한다.
- 파생 속성(Derived Attribute) : 다른 속성의 영향을 받아 발생하는 속성. 일반적으로 계산된 값들이 여기 속한다.

### 엔티티 구성방식에 따른 분류
- PK(Primary Key) 속성 : Entity를 유일하게 구분 할 수 있는 속성
- FK(Foreign Key) 속성 : 다른 Entity와의 관계에 있어서 포함된 속성
- 일반 속성 : PK 또는 FK에 포함되지 않은, 나머지 속성들

### 세부 의미에 따른 분류
- 단순 속성(Simple Attribute) : 나이, 성별등과 같이 다른 속성들로 구성 될 수 없는 단순한 속성
- 복합 속성(Composite Attribute) : 주소에 따라 여러 세부 속성 들로 구성 될 수 있는 속성. 예를들어) 주소 속성 아래 시, 구, 동등의 세부 속성을 분류 할 수 있을 경우.

## 도메인Domain
각 속성이 가지는 값은 범위가 있다. 속성값이 가질 수 있는 범위를 그 속성의 도메인이라고 한다. 단순히 데이터 타입만을 의미하는 것이 아니라, 크기 및 추가적인 제약사항이 있을 수 있다.

## Attribute Naming
 - 작업에 사용되는 이름
 - 서술식 Naming은 X
 - 약어 사용 지양
 - 유일성을 확보하는 것이 좋다.