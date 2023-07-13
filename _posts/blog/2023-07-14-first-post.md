---
title: '[Blog] 첫 게시글 작성해보기'
excerpt: '블로그 꾸미면서 첫 게시글 작성해보기'

categories:
  - Blog
tags:
  - [Blog]

toc: true
toc_sticky: true

date: 2023-07-14
last_modified_at: 2023-07-14
---

## 1. `깃허브아이디.github.io`의 폴더에 `_posts`폴더 생성
만약 `_posts` 폴더가 이미 존재한다면 해당 폴더를 사용하고, 앞으로 게시글을 작성할 때는 해당 폴더를 이용하면 됨.<br><br>

## 2. ```yyyy-mm-dd-title.md``` 형식의 파일 만들기
💡 게시글의 확장자 명은 항상 ```.md```이어야 한다.

> 계시글 파일 양식 예시 
>  - ```2023-01-01-first-post.md```

<u>title 부분은 url에 들어가니 신중하게 작성하기!</u><br><br>

## 3. 머릿말 작성하기
<div class="notice--primary" markdown="1">
밑의 코드를 게시글 상단에 작성해준다.
    
    ---
    title: '[Blog] 첫 게시글 작성해보기'
    excerpt: '블로그 꾸미면서 첫 게시글 작성해보기'

    categories:
    - Blog
    tags:
    - [Blog]

    toc: true
    toc_sticky: true

    date: 2023-07-14
    last_modified_at: 2023-07-14
    ---
</div>

```toc``` | true로 설정하면 h태그 등을 기준으로 게시글의 목차를 만들어준다.<br>
```toc_sticky``` |  true로 설정하면 toc로 생성된 목차가 스크롤 이벤트에 따라 해당하는 목차를 표시해준다. (다양한 속성이 있는 걸로 알고 있음!)<br><br>

## 4. 게시글 본문 작성하기
① 머릿말이 끝나는 부분인 ```---```의 다음에 게시글의 본문을 Markdown 문법로 작성한다.<br>
② 작성한 후 터미널에 ```bundle```명령어를 실행한다.<br>
③ 그 다음 ```bundle exec jekyll serve```를 실행하고, <localhost:4000>에 들어가서 작성한 게시글이 정상적으로 출력되는지 확인한다.<br><br>
(물론 vscode의 확장 기능을 이용하여 미리볼 수 있다!)

## 5. 깃허브에 올리기
완성된 코드를 해당 Repository에 올리면 끝!<br><br><br><br>


<p align="center">
  <img src="https://t1.daumcdn.net/news/202204/05/mydaily/20220405060006570vbeo.jpg" width="80%" height="80%" alt="박명수 소확행" /><br>
  <span>끝났다.. 이 길고 험한 길...</span><br>
  <span>앞으로 블로그를 위해 노력은 해보겠음</span>
</p><br><br>


> ### 참고 링크
> 덕분에 살았습니다..
> - [minimal-mistakes](https://github.com/mmistakes/minimal-mistakes)
> - [다크모드 여기요~](https://github.com/Gwan-Woo-Jeong/Gwan-Woo-Jeong.github.io)


