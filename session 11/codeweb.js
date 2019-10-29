question = [

    {
        content: 'Trong JavaScript sự kiện Onload xảy ra khi nào?',
        answers: [
            {
                noiDung: 'Khi kết thúc một chương trình',
                isRight: 'false'
            },
            {
                noiDung: 'Khi bắt đầu một chương trình',
                isRight: 'true'
            },
            {
                noiDung: 'Khi click chuột',
                isRight: 'false'
            },
            {
                noiDung: 'Khi di chuyển chuột qua',
                isRight: 'false'
            },
        ],
        isMultiAnswer1: 'false',
    },

    {
        content: 'Cách viết câu lệnh IF nào sau đây là đúng',
        answers: [
            {
                noiDung: 'if i = 5',
                isRight: 'false'
            },
            {
                noiDung: 'if i == 5 then',
                isRight: 'false'
            },
            {
                noiDung: 'if i = 5 then',
                isRight: 'false'
            },
            {
                noiDung: 'if (i == 5)',
                isRight: 'true'
            },
        ],
        isMultiAnswer: 'false',
    },

    {
        content: 'Có những cách nào viết code JavaScript để chạy trong trang web?',
        answers: [
            {
                noiDung: 'Không thuộc dạng nào',
                isRight: 'false'
            },
            {
                noiDung: 'Viết chung với HTML',
                isRight: 'false'
            },
            {
                noiDung: 'Cả hai dạng viết tệp riêng hoặc viết trong trang HTML',
                isRight: 'true'
            },
            {
                noiDung: 'Viết trên một tệp riêng',
                isRight: 'false'
            },
        ],
        isMultiAnswer: 'false'
    }
]


function submitAnswer(currentQuestion) {
    console.log(question)

    // Set i cho current question => So sanh content trong vong for ;
    for (let i = 0; i < question.length; i++) { // duyệt từng câu hỏi
        if (question[i].content === currentQuestion) {
            for (const key in quest) { //Duyệt từng key - value của câu hỏi
                if (key === 'answers') { // key bằng answers
                    const answers = quest[key];
                    for (let j = 0; j < answers.length; j++) {
                        // for (const khoa in answers) { // duyệt từng khóa trong answers
                        //     const giatri = answers[khoa]; // duyệt giá trị 
                        //     if (giatri === 'true') {
                        //         alert('done')
                        //     }
                        //     else {
                        //         alert('wrong')
                        //     }

                        // }
                        if (answers[j].isRight) {
                            alert("Dung")
                        }
                        else {
                            alert("Sai")
                        }

                    }
                }
            }

        }

    }
}


function nextQuestion() {
    alert("Next");
}

let arr = [1, 2, 3];
let arr1 = [1, 2, 3, 4];

function Shuffle(mang) {
    mang.sort(function () {
        return 0.5 - Math.random();
    });
}

Shuffle(arr)
document.write(arr[0]);

function getQuestion(question, i) {
    i--;
    var currentQuestion = question[i].content;
    for (let j = 0; j < question[i].answers.length; j++) {

        document.getElementById("cau-hoi").innerHTML = question[i].content;
        document.getElementById("1").innerHTML = "<input type= 'radio' name = 'answer' value = 'dapAn1' />" + question[i].answers[j].noiDung; j++
        document.getElementById("2").innerHTML = "<input type= 'radio' name = 'answer' value = 'dapAn2' />" + question[i].answers[j].noiDung; j++
        document.getElementById("3").innerHTML = "<input type= 'radio' name = 'answer' value = 'dapAn3' />" + question[i].answers[j].noiDung; j++
        document.getElementById("4").innerHTML = "<input type= 'radio' name = 'answer' value = 'dapAn4' />" + question[i].answers[j].noiDung;

    }

}
getQuestion(question, (arr[0]));

    // document.write(document.getElementsByName("answer").value)
    // document.write(question[0].answers[0].isRight)
    // document.getElementById("cau-hoi").innerHTML = question[0].content1;
    // document.getElementById("1").innerHTML = "<input type= 'radio' name = 'answer' value = 'dapAn1' />" + question[0].answers[0].noiDung;
    // document.getElementById("2").innerHTML = "<input type= 'radio' name = 'answer' value = 'dapAn2' />" + question[0].answers[1].noiDung;
    // document.getElementById("3").innerHTML = "<input type= 'radio' name = 'answer' value = 'dapAn3' />" + question[0].answers[2].noiDung;
    // document.getElementById("4").innerHTML = "<input type= 'radio' name = 'answer' value = 'dapAn4' />" + question[0].answers[3].noiDung;

    // function submitAnswer(){
    //     // for(let i = 0; i < question.length ; i++){
    //         for(let j = 0 ; j < answers.length; j++){
    //             if(question[0].answers[0].isRight === "true"){
    //                 alert("Chính xác.")
    //             }
    //             else{
    //                 alert("Sai mất rồi.");
    //             }
    //         }
    //     }

