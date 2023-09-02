---
title: '🛠️[프로그래머스]-방금 그 곡'
date: 2021-01-30 03:00:00 +0900
tags: ['PROBLEM-SOLVING', 'C++', 'PROGRAMMERS', 'KAKAO']
draft: false
summary: '프로그래머스 2018 카카오 블라인드 [방금 그 곡] 문제 해결'
---

## 📖문제 설명
---
라디오를 자주 듣는 네오는 라디오에서 방금 나왔던 음악이 무슨 음악인지 궁금해질 때가 많다. 그럴 때 네오는 다음 포털의 '방금그곡' 서비스를 이용하곤 한다. 방금그곡에서는 TV, 라디오 등에서 나온 음악에 관해 제목 등의 정보를 제공하는 서비스이다.

네오는 자신이 기억한 멜로디를 가지고 방금그곡을 이용해 음악을 찾는다. 그런데 라디오 방송에서는 한 음악을 반복해서 재생할 때도 있어서 네오가 기억하고 있는 멜로디는 음악 끝부분과 처음 부분이 이어서 재생된 멜로디일 수도 있다. 반대로, 한 음악을 중간에 끊을 경우 원본 음악에는 네오가 기억한 멜로디가 들어있다 해도 그 곡이 네오가 들은 곡이 아닐 수도 있다. 그렇기 때문에 네오는 기억한 멜로디를 재생 시간과 제공된 악보를 직접 보면서 비교하려고 한다. 다음과 같은 가정을 할 때 네오가 찾으려는 음악의 제목을 구하여라.

방금그곡 서비스에서는 음악 제목, 재생이 시작되고 끝난 시각, 악보를 제공한다.
네오가 기억한 멜로디와 악보에 사용되는 음은 C, C#, D, D#, E, F, F#, G, G#, A, A#, B 12개이다.
각 음은 1분에 1개씩 재생된다. 음악은 반드시 처음부터 재생되며 음악 길이보다 재생된 시간이 길 때는 음악이 끊김 없이 처음부터 반복해서 재생된다. 음악 길이보다 재생된 시간이 짧을 때는 처음부터 재생 시간만큼만 재생된다.
음악이 00:00를 넘겨서까지 재생되는 일은 없다.
조건이 일치하는 음악이 여러 개일 때에는 라디오에서 재생된 시간이 제일 긴 음악 제목을 반환한다. 재생된 시간도 같을 경우 먼저 입력된 음악 제목을 반환한다.
조건이 일치하는 음악이 없을 때에는 “(None)”을 반환한다.

## ✏️문제 풀이
___
구조체를 활용하여 문제를 풀었다. 그러나 사실 구조체 사용이 풀이법이 되기보다는 몇몇 주의사항을 염두에 두고 푸는것이 중요하다. 풀이중 마주한 몇몇 특이 고려사항을 작성하자면 다음과 같다.
- 주어진 매개변수 ```musicinfos```에서 값을 추출할 때 문제가 있다.
- 주어진 코드들 중 반음 올림 ```#```을 처리할 때 주의가 필요하다.
- 개인적으로 맞닥트린 골치아팠던 문제사항
  - 문자열을 잘라 구조체에 대입하기전에 ```temp```에 잠시 보관한 뒤 초기화 시켜줘야한다.
  - 일치하는 목록이 없을경우 잊지 않고 ```(None)```을 리턴 시켜야 한다.

## ⌨️풀이 코드
---
```cpp
#include <string>
#include <algorithm>
#include <vector>

using namespace std;

struct song
{
    int time;
    string name;
    string code;
    bool answer = false;
};

string solution(string m, vector<string> musicinfos) {
    string answer = "(None)";

    song *list = new song[musicinfos.size()];

    string nowm = "";
    for(int i = 0; i < m.size(); i++) {
        if(m[i+1] == '#'){
            nowm += tolower(m[i]);
            i++;
        }
        else {
            nowm += m[i];
        }
    }
    string temp;

    for(int i = 0; i < musicinfos.size(); i++){
        temp = "";

        int starthour = stoi(musicinfos[i].substr(0, 2));
        int endhour = stoi(musicinfos[i].substr(6, 2));
        int startmin = stoi(musicinfos[i].substr(3, 2));
        int endmin = stoi(musicinfos[i].substr(9, 2));

        list[i].time = (endhour - starthour) * 60 + (endmin - startmin);
        int current = musicinfos[i].std::string::find(",",6)+1;
        int namelast = musicinfos[i].std::string::find(",",12);
        int namelength = namelast - current;
        list[i].name = musicinfos[i].substr(musicinfos[i].std::string::find(",",6)+1, namelength);
        list[i].code = musicinfos[i].substr(musicinfos[i].std::string::find(",",12)+1);

        int cycle = list[i].time;

        for(int j = 0; j < cycle; j++){
            if(list[i].code[(j%list[i].code.size())+1] == '#'){
                temp += tolower(list[i].code[j % list[i].code.size()]);
                j++;
                cycle++;
            }
            else {
                temp += list[i].code[j % list[i].code.size()];
            }
        }
        list[i].code = temp;

        if(list[i].code.find(nowm) != string::npos) {
            list[i].answer = true;
        }

    }
    int maxtime = 0;
    int answerindex = 0;

    for (int i = 0; i < musicinfos.size(); i++){
        if(list[i].time > maxtime && list[i].answer == true) {
            maxtime = list[i].time;
            answerindex = i;
            answer = list[answerindex].name;
        }
    }

    return answer;
}
```
-----
출처 : [프로그래머스 2018 카카오 방금 그 곡 추천 문제](https://programmers.co.kr/learn/courses/30/lessons/17683)