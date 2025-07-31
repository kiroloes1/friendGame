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
     answer: "",
    
  },
  {
    question: "إيه أكتر أكلة بيحبها التاتي؟",
    options: ["محشي", "بيتزا", "مكرونة", "كشري"],
     answer: "",
  },
  {
  
    question: "إمتى بيحب ينام التاتي؟",
    options: ["قبل 10 مساءً", "بعد 12 صباحًا", "في العصر", "مش بينام"],
     answer: "",
  },
  {
    question: "لو فاضي، هايحب يعمل إيه؟",
    options: ["يتفرج على فيلم", "ينام", "يخرج", "يلعب بلايستيشن"],
     answer: "",
  },
  {
    question: "إيه نوع الموبايل اللي بيستخدمه التاتي؟",
    options: ["iPhone", "Samsung", "Huawei", "Xiaomi"],
     answer: "",
  },
  {
    question: "إيه أكتر مادة كان بيحبها في المدرسة؟",
    options: ["رياضة", "علوم", "عربي", "إنجليزي"],
     answer: "",
  },
  {
    question: "لو طلب أكلة سريعة، هايطلب إيه؟",
    options: ["برجر", "شاورما", "فراخ بانيه", "فلافل"],
     answer: "",
  },
  {
    question: "مين أكتر شخص بيكلمه في اليوم؟",
    options: ["أمه", "صاحبه", "زميله في الشغل", "حد تاني"],
     answer: "",
  },
  {
    question: "إيه هو برج التاتي؟",
    options: ["الجدي", "السرطان", "الأسد", "الدلو"],
     answer: "",
  },
  {
    question: "إيه أكتر حاجة بتخوف التاتي؟",
    options: ["الظلمة", "الفشل", "المرتفعات", "الكلاب"],
     answer: "",
  },
  {
    question: "إيه أول حاجة بيعملها لما يصحى؟",
    options: ["يفتح الموبايل", "يغسل وشه", "يفطر", "يرجع ينام"],
     answer: "",
  },
  {
    question: "إيه أكتر صفة الناس بتشوفها فيه؟",
    options: ["طيب", "مضحك", "عصبي", "غريب"],
     answer: "",
  },
  {
    question: "إيه الرياضة المفضلة عنده؟",
    options: ["كرة قدم", "سباحة", "جيم", "جري"],
     answer: "",
  },
  {
    question: "إيه البلد اللي بيتمنى يسافر ليها؟",
    options: ["تركيا", "إيطاليا", "اليابان", "فرنسا"],
     answer: "",
  },
  {
    question: "إيه أكتر حاجة بيعملها لما يزعل؟",
    options: ["يسكت", "يتكلم", "يخرج", "يأكل"],
     answer: "",
  },
  {
    question: "إيه نوع الأفلام اللي بيحبها؟",
    options: ["أكشن", "رومانسي", "كوميدي", "رعب"],
     answer: "",
  },
  {
    question: "لو عنده يوم أجازة، هايعمل إيه؟",
    options: ["يخرج مع أصحابه", "ينام", "يسافر", "يتفرج على نتفليكس"],
     answer: "",
  },
  {
    question: "إيه الحاجة اللي مش بيستغنى عنها؟",
    options: ["سماعات", "موبايل", "سلسلة", "ساعة"],
     answer: "",
  },
  {
    question: "مين أكتر مغني بيحبه؟",
    options: ["عمرو دياب", "ويجز", "محمد حماقي", "تامر حسني"],
     answer: "",
  },
  {
    question: "إيه هو مشروبه المفضل؟",
    options: ["قهوة", "شاي", "بيبسي", "عصير برتقال"],
     answer: "",
  }
];
  
    // to select from user number of Question

    // if user not selected number of question ,default =5
    let numberQuestion;

localStorage.setItem("ConfirmSelected",JSON.stringify(0)) 
    // method for select
    function selectNumber(value){
        //   to select number of question 
         numberQuestion=parseInt(value);
              
        function shuffle(array) {
          return array.sort(() => Math.random() - 0.5);
        }

        let shuffled = shuffle(questions);
        let SelectedQuestion = shuffled.slice(0, numberQuestion);

        localStorage.setItem("SelectedQuestion",JSON.stringify(SelectedQuestion))
        


        
let currentUser=JSON.parse(localStorage.getItem("currentUser"))||[]

currentUser.forEach(user=>{
user.Allquestion = [...SelectedQuestion];
})

 localStorage.setItem("currentUser", JSON.stringify(currentUser));
  console.log(JSON.parse(localStorage.getItem("currentUser")));

        //  change selectd button and remove old selected background
        const buttons = document.querySelectorAll("button");
        buttons.forEach(btn => btn.classList.remove("bg-green-600"));
        event.target.classList.add("bg-green-600");
        // to confirm that user selected number of question
        localStorage.setItem("ConfirmSelected",JSON.stringify(1))   
    }


  







    