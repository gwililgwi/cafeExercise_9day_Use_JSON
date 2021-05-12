const mname = document.getElementById('name')
const dis = document.getElementById('discription')

const m1 = document.getElementById('m1')
const m2 = document.getElementById('m2')
const m3 = document.getElementById('m3')

// 1번/가장 단순한 입력방법
// function changeM1(){
//     mname.innerHTML = "MOVIE#1"
//     dis.innerHTML = "DISCRIPTION#1"
// }
// function changeM2(){
//     mname.innerHTML = "MOVIE#2"
//     dis.innerHTML = "DISCRIPTION#2"
// }
// function changeM3(){
//     mname.innerHTML = "MOVIE#3"
//     dis.innerHTML = "DISCRIPTION#3"
// }

// 2번/onclick을 없애 html이 깔끔해지지만 js가 난잡
// m1.addEventListener('click',function(){
//     mname.innerHTML = "MOVIE#1"
//     dis.innerHTML = "DISCRIPTION#1"
// })
// m2.addEventListener('click',function(){
//     mname.innerHTML = "MOVIE#2"
//     dis.innerHTML = "DISCRIPTION#2"
// })
// m3.addEventListener('click',function(){
//     mname.innerHTML = "MOVIE#3"
//     dis.innerHTML = "DISCRIPTION#3"
// })

// 3번/JSON 활용 : 서버공부, 알고리즘 공부하며 중요하다 느낌
const movielist = [
    {
        "name" : "미나리",
        "discript" : "최근개봉"
    },
    {
        "name" : "기생충",
        "discript" : "과거개봉"
    },
    {
        "name" : "위대한쇼맨",
        "discript" : "2017년개봉"
    }
]

// 4번/JSON을 그대로 활용하나 여전히 너무 길다
// m1.addEventListener('click',function(){
//     mname.innerHTML = movielist[0].name;
//     dis.innerHTML = movielist[0].discript;
// })
// m2.addEventListener('click',function(){
//     mname.innerHTML = movielist[1].name;
//     dis.innerHTML = movielist[1].discript;
// })
// m3.addEventListener('click',function(){
//     mname.innerHTML = movielist[2].name;
//     dis.innerHTML = movielist[2].discript;
// })

// 5번/위단계에서 리팩토링을 거쳐 최종적으로 3줄로 변경
function clickB(b){
        mname.innerHTML = movielist[b].name;
        dis.innerHTML = movielist[b].discript;
}