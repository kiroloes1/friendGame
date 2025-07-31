  function openModal() {
    document.getElementById("gameModal").classList.remove("hidden");
  }

  function closeModal() {
    document.getElementById("gameModal").classList.add("hidden");
  }


      // dataBase for all question
    const questions = [
  {
    question: "إيه هو اللون المفضل عند التاتي؟",
    options: ["أحمر", "أزرق", "أسود", "أخضر"],
     answer: "",userAnswer :""
    
  },
  {
    question: "إيه أكتر أكلة بيحبها التاتي؟",
    options: ["محشي", "بيتزا", "مكرونة", "كشري"],
     answer: "",userAnswer :""
  },
  {
  
    question: "إمتى بيحب ينام التاتي؟",
    options: ["قبل 10 مساءً", "بعد 12 صباحًا", "في العصر", "مش بينام"],
     answer: "",userAnswer :""
  },
  {
    question: "لو فاضي، هايحب يعمل إيه؟",
    options: ["يتفرج على فيلم", "ينام", "يخرج", "يلعب بلايستيشن"],
     answer: "",userAnswer :""
  },
  {
    question: "إيه نوع الموبايل اللي بيستخدمه التاتي؟",
    options: ["iPhone", "Samsung", "Huawei", "Xiaomi"],
     answer: "",userAnswer :""
  },
  {
    question: "إيه أكتر مادة كان بيحبها في المدرسة؟",
    options: ["رياضة", "علوم", "عربي", "إنجليزي"],
     answer: "",userAnswer :""
  },
  {
    question: "لو طلب أكلة سريعة، هايطلب إيه؟",
    options: ["برجر", "شاورما", "فراخ بانيه", "فلافل"],
     answer: "",userAnswer :""
  },
  {
    question: "مين أكتر شخص بيكلمه في اليوم؟",
    options: ["أمه", "صاحبه", "زميله في الشغل", "حد تاني"],
     answer: "",userAnswer :""
  },
  {
    question: "إيه هو برج التاتي؟",
    options: ["الجدي", "السرطان", "الأسد", "الدلو"],
     answer: "",userAnswer :""
  },
  {
    question: "إيه أكتر حاجة بتخوف التاتي؟",
    options: ["الظلمة", "الفشل", "المرتفعات", "الكلاب"],
     answer: "",userAnswer :""
  },
  {
    question: "إيه أول حاجة بيعملها لما يصحى؟",
    options: ["يفتح الموبايل", "يغسل وشه", "يفطر", "يرجع ينام"],
     answer: "",userAnswer :""
  },
  {
    question: "إيه أكتر صفة الناس بتشوفها فيه؟",
    options: ["طيب", "مضحك", "عصبي", "غريب"],
     answer: "",userAnswer :""
  },
  {
    question: "إيه الرياضة المفضلة عنده؟",
    options: ["كرة قدم", "سباحة", "جيم", "جري"],
     answer: "",userAnswer :""
  },
  {
    question: "إيه البلد اللي بيتمنى يسافر ليها؟",
    options: ["تركيا", "إيطاليا", "اليابان", "فرنسا"],
     answer: "",userAnswer :""
  },
  {
    question: "إيه أكتر حاجة بيعملها لما يزعل؟",
    options: ["يسكت", "يتكلم", "يخرج", "يأكل"],
     answer: "",userAnswer :""
  },
  {
    question: "إيه نوع الأفلام اللي بيحبها؟",
    options: ["أكشن", "رومانسي", "كوميدي", "رعب"],
     answer: "",userAnswer :""
  },
  {
    question: "لو عنده يوم أجازة، هايعمل إيه؟",
    options: ["يخرج مع أصحابه", "ينام", "يسافر", "يتفرج على نتفليكس"],
     answer: "",userAnswer :""
  },
  {
    question: "إيه الحاجة اللي مش بيستغنى عنها؟",
    options: ["سماعات", "موبايل", "سلسلة", "ساعة"],
     answer: "",userAnswer :""
  },
  {
    question: "مين أكتر مغني بيحبه؟",
    options: ["عمرو دياب", "ويجز", "محمد حماقي", "تامر حسني"],
     answer: "",userAnswer :""
  },
  {
    question: "إيه هو مشروبه المفضل؟",
    options: ["قهوة", "شاي", "بيبسي", "عصير برتقال"],
     answer: "",userAnswer :""
  }
];
  
  let currentUser=JSON.parse(localStorage.getItem("currentUser")) || []
    // to select from user number of Question

    // if user not selected number of question ,default =5
    let numberQuestion;

localStorage.setItem("ConfirmSelected",JSON.stringify(0)) 
    // method for select
function selectNumber(value, targetButton) {

UsersName()
  
  let numberQuestion = parseInt(value);

  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  let shuffled = shuffle(questions);
  let SelectedQuestion = shuffled.slice(0, numberQuestion);

  localStorage.setItem("SelectedQuestion", JSON.stringify(SelectedQuestion));

   currentUser = JSON.parse(localStorage.getItem("currentUser")) || [];

  currentUser.forEach(user => {
    user.Allquestion = [...SelectedQuestion]; // ✅ تم التعديل هنا
  });

  localStorage.setItem("currentUser2", JSON.stringify(currentUser));
  console.log("✅ Allquestion saved:", currentUser);

  // تحديث الزر المختار
  const buttons = document.querySelectorAll("button");
  buttons.forEach(btn => btn.classList.remove("bg-green-600"));

  if (targetButton) {
    targetButton.classList.add("bg-green-600");
  }

  localStorage.setItem("ConfirmSelected", JSON.stringify(1));

  
}


// method for config all data 
function UsersName() {
  const userInput = document.querySelectorAll("input");

  const currentUser = []; 
     
  userInput.forEach(e => {
    const userPlayerObject = {
      name: e.value,
      score:0,
      numberQuestionRight:0,
      numberQuestionFalse:0,
      Allquestion:[],
    };
    currentUser.push(userPlayerObject);

  });

 history.push(currentUser)
  localStorage.setItem("currentUser", JSON.stringify(currentUser));
  localStorage.setItem("History",JSON.stringify(history));


  


}









    