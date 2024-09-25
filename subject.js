let words = 
    `사과
    딸기
    수영복
    생크림
    삼각김밥
    단추
    마카롱
    책
    양말
    노인
    책방
    월드컵`;

words = words.split(/\n\s+/g);

window.addEventListener('load', (event) => {
    let subject = document.querySelector("subject");
    
    subject.textContent = "주제: "
        + words[Math.floor(Math.random() * 10) % words.length];

    console.log(words);
});