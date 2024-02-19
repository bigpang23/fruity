// 定义题目列表和答案

var questionList = [
  {
    question: "世界上最大洲是？",

    options: ["亚洲", "非洲", "南美洲", "北美洲"],

    answer: "亚洲",
  },

  {
    question: "中国的国土面积排名世界第几？",

    options: ["第一", "第二", "第三", "第四"],

    answer: "第三",
  },

  {
    question: "JavaScript是哪种类型的编程语言？",

    options: ["解释型", "编译型", "中间型", "JAVA虚拟机型"],

    answer: "解释型",
  },

  {
    question: "WWW的意思是？",

    options: ["网站", "万维网", "网络", "无限制网络"],

    answer: "万维网",
  },

  {
    question: "WWW的意思是？",

    options: ["网站", "万维网", "网络", "无限制网络"],

    answer: "万维网",
  },

  {
    question: "WWW的意思是？",

    options: ["网站", "万维网", "网络", "无限制网络"],

    answer: "万维网",
  },

  {
    question: "当前全世界使用人数最多的操作系统是？",

    options: ["Windows", "Mac OS", "Linux", "Android"],

    answer: "Android",
  },
];

var quizIndex = 0,
  score = 0,
  timer = null,
  time = 60;

// 生成问题和选项并绑定点击事件

function generateQuiz() {
  var qTitle = document.querySelector(".q-title"),
    qContent = document.querySelector(".q-content"),
    optionContent = document.querySelectorAll(".option-content");

  qTitle.innerHTML = `问题${quizIndex + 1}：`;

  qContent.innerHTML = questionList[quizIndex].question;

  optionContent.forEach((opt, idx) => {
    opt.innerHTML = questionList[quizIndex].options[idx];
  });

  document.querySelectorAll(".options ul li").forEach((li) => {
    li.addEventListener("click", (e) => {
      checkAnswer(e.target);
    });
  });
}

// 校验答案是否正确

function checkAnswer(ele) {
  if (ele.innerHTML === questionList[quizIndex].answer) {
    alert("恭喜你，回答正确！");

    score += 10;

    document.querySelector(".score").innerHTML = `得分：${score}`;
  } else {
    alert("很遗憾，回答错误！");
  }

  if (quizIndex < questionList.length - 1) {
    quizIndex++;

    generateQuiz();
  } else {
    endQuiz();
  }
}

// 随机生成题目并打乱选项顺序

function randomQuestions(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}

// 计时器

function countDown() {
  timer = setInterval(() => {
    if (time >= 0) {
      document.querySelector(".timer").innerHTML = `${
        time < 10 ? "0" + time : time
      }:00`;

      time--;
    } else {
      endQuiz();
    }
  }, 1000);
}

// 结束答题

function endQuiz() {
  clearInterval(timer);

  document.querySelector(".timer").innerHTML = "00:00";

  alert(`答题结束，你的得分是${score}分！`);
}

// 按钮点击事件

document.querySelector(".submit-btn").addEventListener("click", () => {
  if (quizIndex === 0) {
    randomQuestions(questionList);

    countDown();
  }

  checkAnswer(document.querySelector(".options ul li a"));
});

// 生成问题

generateQuiz();
