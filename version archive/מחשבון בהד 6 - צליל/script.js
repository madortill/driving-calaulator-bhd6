var myVar = setInterval(myTimer, 3000);
// var background;

function myTimer() {
  // document.getElementById("open").style.display = "none";
  document.getElementById("info").style.display = 'block';
  var id = setInterval(() => {
    if (this.frame == 30) {
      clearInterval(id);
      document.getElementById("open").style.display = "none";
      return;
    }
    if (!this.frame) this.frame = 0;
    document.getElementById("open").style.opacity = 1 - this.frame / 30;
    this.frame++;
  }, 1000 / 30);
}

var ans = ""; //final answer

//The array of the group above half a year
var above = [
  [" ", "נוסעים B", "רב הינע B", "רב הינע C-1", "משא C-1", "משא כבד/ C משא כבד רב הינע", "גורר תומך C+E"],

  ["נוסעים B", "שעה (רק במידה של מעבר בין גיר אוטומט לגיר רגיל או להיפך).", "12 שעות יום (מתוכן 3 שעות שטח) 3 שעות לילה (מתוכן 2 שטח). ניתן לשלב שני כלי רכב מאותה קבוצה.", "12 שעות יום (מתוכן 3 שעות שטח) 3 שעות לילה (מתוכן 2שעות שטח) ניתן לשלב שני כלי רכב מאותה קבוצה.", "9 שעות יום  3 שעות לילה. ניתן לשלב שני כלי רכב מאותה קבוצה.", "47 שעות יום 3 שעות לילה. ניתן לשלב שני כלי רכב מאותה קבוצה.", "יבצע נוהל קליטה עפ סעיף 3.6.4.17."],

  ["רב הינע B", "שעה (רק במידה של מעבר בין גיר אוטומט לגיר רגיל או להיפך).", "שעה (ברכב ממוגן שעתיים).", "8 שעות יום (מתוכן שעתיים שטח שעתיים לילה (מתוכן שעה שטח). ניתן לשלב שני כלי רכב מאותה קבוצה.", "9 שעות יום 3 שעות לילה. ניתן לשלב שני כלי רכב מאותה קבוצה.", "47 שעות יום 3 שעות לילה. ניתן לשלב שני כלי רכב מאותה קבוצה.", "יבצע נוהל קליטה מלא עפ סעיף 3.6.4.17."],

  ["רב הינע C-1", "שעה.", "שעה (ברכב ממוגן שעתיים).", "שעה (ברכב ממוגן שעתיים).", "6 שעות יום שעתיים לילה. ", "9 שעות יום 3 שעות לילה. ניתן לשלב שני כלי רכב מאותה קבוצה.", "45 שעות יום 5 שעות לילה. ניתן לשלב שני כלי רכב מאותה קבוצה."],

  ["משא C-1", "שעה.", "3 שעות יום (מתוכן שעתיים שטח) שעתיים לילה (מתוכן שעה שטח).", "3 שעות יום (מתוכן שעתיים שטח) שעתיים לילה (מתוכן שעה שטח).", "שעה (ברכב ממוגן שעתיים.)", "9 שעות יום 3 שעות לילה ניתן לשלב שני כלי רכב מאותה קבוצה.", "45 שעות יום 5 שעות לילה. ניתן לשלב שני כלי רכב מאותה קבוצה."],

  ["משא כבד/ C משא כבד רב הינע", "שעה.", "3 שעות יום (מתוכן שעתיים שטח) שעתיים לילה (מתוכן שעה שטח). ניתן לשלב שני כלי רכב מאותה קבוצה.", "3 שעות יום (מתוכן שעתיים שטח) שעתיים לילה (מתוכן שעה שטח). ניתן לשלב שני כלי רכב מאותה קבוצה.", "שעה.", "שעה.", "שעה."],

  ["גורר תומך C+E", "שעה.", "3 שעות יום (מתוכן שעתיים שטח) שעתיים לילה (מתוכן שעה שטח) שעתיים לילה (מתוכן שעה שטח). ניתן לשלב שני כלי רכב מאותה קבוצה.", "3 שעות יום (מתוכן שעתיים שטח) שעתיים לילה (מתוכן שעה שטח). ניתן לשלב שני כלי רכב מאותה קבוצה.", "שעה.", "שעה.", "שעה."]
];

//The array of the group below half a year
var below = [
  ["נוסעים B", "4 שעות ביום ושעה בלילה."],

  ["רב הינע B", "12 שעות ביום מתוכן 3 שעות בדרכי עפר ו3 שעות בלילה ומתוכן 2 בדרכי עפר."],

  ["רב הינע C-1", "12 שעות ביום מתוכן 3 שעות בדרכי עפר ו3 שעות בלילה מתוכן 2 בדרכי עפר."],

  ["משא C-1", "9 שעות ביום 3 שעות בלילה."],

  ["משא כבד/ C משא כבד רב הינע", "40 שעות נהיגה ביום מתוכן 3 שעות בדרכי עפר ו10 שעות בלילה ומתוכן 2 שעות בדרכי עפר ברב הינע נדרשות 5 שעות שטח מסך השעות. לנהגי מרכז הובלה יחולו הוראות מפקד מרכז הובלה (הוצאת רישיון משא כבד ללא ותק במשא)."],

  ["אוטובוס", "5 שעות ביום ו3 שעות בלילה. "],

  ["גורר תומך C+E", "35 שעות נהיגה ביום 15 שעות נהיגה בלילה. לנהגי מרכז הובלה יחולו הוראות מפקד מרכז הובלה."]
];

//The array of cars and their special treatment
var cars = [
  ["טנדר", "טויוטה", "איסוזו דימקס", "מגנום", "מזדה 2X4", "היילקס", "ניסן ווינר"],

  ["\nנהיגה בכלי רכב אלה תאושר בתנאים המצטברים הבאים:\nא. בעל רישיון נהיגה B ומעלה, הנושא את אחד מהיתרי נהיגת השטח 4*4, או בעל רישיון נהיגה B, שאינו נושא את אחד מהיתרי נהיגת השטח 4*4 ובתנאי שהינו בוותק רישיון אזרחי מעל חצי שנה.\nב. צפייה בסרטון בטיחות - 'טיוטה 2*4 משנת 2007', הוצאת מבק\"א.\nג. הכרת מאפייני ומגבלות רכב מסוג טנדר, בחניכת קצין הרכב:\n 1. מרכז הכובד.\n 2. סוג ההנעה.\n 3. מרחק בין הסרנים.\n 4. התנהגות הרכב בנסיעה (שיפועי צד, עמוס/ריק, רוח צד וכד').\nד. לימוד לקחים מתאונות של כלי רכב דומים.\nה. בסיום מעבר התכנים המפורטים, הנ\"ל יצוין בכרטיס הנהג (נספח ב') סעיף 3 \"קורסים והשתלמויות בנהיגה\".\n"],

  ["ג'יפ סופה ממוגן 4X4", "דויד 4X4", "דיפנדר ממוגן 4X4", "ניסן ווינר ממוגן 4X4", "זאב", "אביר ממוגן", "האמר ממוגן"],

  ["\nנהיגה מעשית בחניכת נהג חונך על רכב ממוגן ירי ביחידה תבוצע לאחר ביצוע היתר מתאים לרכב ממוגן הנלמד בבסיס הדרכת נהיגה/ בא\"פ והשלמת התכנים הבאים:\n 1. צפייה בסרט בנושא כלי רכב ממוגן בהתאם לסוג הרכב הנלמד (\"דויד\", \"סופה\" ממוגנת וכדו').\n 2. לימוד לקחים מתאונות של כלי רכב ממוגנים בגזרה הרלוונטית.\n 3. לימוד תכנים הקשורים למגבלות הבטיחותיות של הרכב.\n 4. הדגשת חובת חגירת חגורות בטיחות וקסדות (במידת הצורך) במהלך הנסיעה.\n 5. ניתוח נת\"בים אופייניים בגזרת המשימה.\nלמרות האמור בסעיף הקודם במידה והרכב הממוגן הינו מעל 12 טון, ולא הוגדר היתר מיוחד לנהיגת הרכב, (דוגמא - ריאו ממוגן) - יש לבצע אחד מהיתרי הנהיגה הממוגנים (היתר 36, 42, 47) טרם ביצוע הכשרה ביחידה.\n"],

  ["גרור 1.8 עד 5 טון", "גרור עד 1.8 טון"],

  ["גרירת גרור במשקל עד 1.8 טון תבוצע לאחר ביצוע השלמת התכנים הבאים:\n 1. ק. הרכב יגדיר נהגים הרשאים לנהוג עם גרור ביחידה.\n 2. נהגים אלו יקבלו הדרכה ע\"י קצין הרכב (סוגי נגררים ביחידה, גרירה מותרת וכו').\n 3. הנהגים יתרגלו מעשית חיבור וניתוק נגרר.\n 4. נהגים אלו מחויבים בנסיעה עם גרור במהלך חניכתם - לפחות 30 דק'. במהלך הנסיעה תתורגל נסיעה ברוורס.\n 5. הגרירה תתבצע בהתאם לרישיון הרכב ורישיון הגרור. \n 6. ההכשרה תצוין בתיק נהג.\n 7. תנאים נוספים לגרירת גרור מעל 1.8 טון ראה הוראת קל\"ר 13.01.19\n"],

  ["ג'יפ סופה ממוגן 4X4", "דויד 4X4", "דיפנדר ממוגן 4X4", "ניסן ווינר ממוגן 4X4"],

  ["נדרש היתר 35 והיתר 36 אך רב סרן ומעלה, אע\"צ, מילואים פטורים מהיתר 35 אך לא מהיתר 36 - רכב ממוגן."],

  ["פורד F 150 4X4"],

  ["חייל בשירות חובה בעל רישיון B חייב בוותק מינימום של שישה חודשים, ברישיון צבאי או אזרחי. (חייל מילואים פטור מהיתר זה)."],

  ["טנדר 4X4 - טויוטה/ דימקס/ ווינר"],

  ["נדרש היתר 35 אך אנשי קבע אע \"צ וחיילי מילואים פטורים מהיתר 35."],

  ["אביר", "אביר בטש\"ית"],

  ["נדרש היתר 38/41 אך חיילי מילואים פטורים מהיתרים אלו ."],

  ["אביר ממוגן", "זאב"],

  ["נדרש היתר בסיסי 38/41 והיתר ממוגן 36/42/47 אך חיילי מילואים פטורים מההיתר הבסיסי."],

  ["האמר"],

  ["נדרש היתר 41/43/44 (היתר 44 הוא ללוחמים בעלי רישיון B)."],

  ["האמר ממוגן"],

  ["נדרש היתר בסיסי 41/43/44 והיתר ממוגן 36/42/45/47 (היתרים 44/45 הינם ללחומים בעלי רישיון B)."],

  ["האמר/ אקונוליין/ F 350 - אמבולנס"],

  [" נדרש היתר 52."],

  ["פורד F 350/ דודג' 3500"],

  ["נדרש היתר 35/38/41/16/96 אך איש מילואים פטור מהיתר."],

  ["כבאית עד 12 טון", "כבאית"],

  [" נדרש היתר 62."],

  ["טטרה"],

  ["נדרש היתר 16(בעלי היתר 95/96 פטורים מהיתר)."],

  ["אושקוש", "FMTV"],

  [" נדרש היתר 96."],

  ["משאית תובלתית (מרצדס/מאן/פרייט/אינטר)", "ספארי/ספארון"],

  ["נדרשת הכשרה מטעם מפקד מרכז הובלה. "],

  ["רכב חילוץ וגרירה"],

  [" נדרש היתר 71."],

  ["גרור 1.8 עד 5 טון"],

  [" נדרש היתר 58."],

  ["פולאריס/ מיול - לא כולל רכב סבל חי\"ר"],

  ["נדרשת הכשרה ביחידה. חייל חובה חייב בהיתר רכב שטח."],

  ["סבל חי\"ר/ \"יגי\""],

  ["נדרש היתר 39 ללוחמים בלבד."],

  ["סבל חי\"ר לאחזקה"],

  [" נדרש היתר 31."]
];

/*
 * This function populates the answers of the second questions "דרגת רישיון קיימת".
 * input: s1 - the chosen answer to the first question.
 * -----  s2 - the answers of the added question.
 * output: new options to the second question.
 * ------
 */
function secondQuestion(s1, s2) {
  var optionArr;
  s1 = document.getElementById(s1);
  s2 = document.getElementById(s2);

  s2.innerHTML = "";
  if (s1.value == "מעל לחצי שנה") {
    optionArr = ["", "נוסעים B", "רב הינע B", "רב הינע C-1", "משא C-1", "משא כבד/ C משא כבד רב הינע", "גורר תומך C+E"];
  } else if (s1.value == "מתחת לחצי שנה") {
    optionArr = ["", "נוסעים B", "רב הינע B", "רב הינע C-1", "משא C-1", "משא כבד/ C משא כבד רב הינע", "גורר תומך C+E"];
  }
  //Adding dropdown options to the question
  for (var option in optionArr) {
    var newOption = document.createElement("option");
    newOption.value = optionArr[option];
    newOption.innerHTML = optionArr[option];
    s2.options.add(newOption);
  }
}

/*
 * This function populates the answers of the third questions "סוג ההכשרה עליו נדרשת החניכה".
 * input: s1 - the chosen answer to the first question.
 * ------ s2 - the chosen answer to the second question.
 *        s3 - the answers of the added question.
 * output: new options to the third question.
 * ------
 */
function thirdQuestion(s2, s1, s3) {
  s1 = document.getElementById(s1);
  s2 = document.getElementById(s2);
  s3 = document.getElementById(s3);
  var optionArr;
  s3.innerHTML = "";
  if (s1.value == "מעל לחצי שנה") {
    optionArr = ["", "נוסעים B", "רב הינע B", "רב הינע C-1", "משא C-1", "משא כבד/ C משא כבד רב הינע", "גורר תומך C+E", "אחרים"];
  } else if (s1.value == "מתחת לחצי שנה") {
    optionArr = ["", "נוסעים B", "רב הינע B", "רב הינע C-1", "משא C-1", "משא כבד/ C משא כבד רב הינע", "אוטובוס", "גורר תומך C+E", "אחרים"];
  }
  var indexOfS2 = optionArr.indexOf(s2.value);
  //optionArr.splice(indexOfS2, 0, "");
  for (var option in optionArr) {
    var newOption = document.createElement("option");
    newOption.value = optionArr[option];
    newOption.innerHTML = optionArr[option];
    s3.options.add(newOption);
  }
}

/*
 * This function populates the answers of the forth questions "סוג רכב".
 * input: s1 - the chosen answer to the first question.
 * -----  s2 - the chosen answer to the second question.
 *        s3 - the chosen answer to the third question.
 *        s4 - the answers of the added question.
 * output: new options to the third question.
 * ------
 */
function forthQuestion(s3, s1, s2, s4) {
  s1 = document.getElementById(s1);
  s2 = document.getElementById(s2);
  s3 = document.getElementById(s3);
  s4 = document.getElementById(s4);

  s4.innerHTML = "";
  //Adding diffrent dropdown values to the chosen answer  
  if (s3.value == "אוטובוס" || s3.value == "גורר תומך C+E") {
    (document.getElementById('select4')).style.display = 'none';
    (document.getElementById('kind')).style.display = 'none';
  } else {
    (document.getElementById('select4')).style.display = 'inline-block';
    (document.getElementById('kind')).style.display = 'block';
    var optionArr;
    if (s3.value == "רב הינע B") {
      optionArr = ["", "ג'יפ סופה 4X4", "ג'יפ סופה ממוגן 4X4", "דויד 4X4", "דיפנדר ממוגן 4X4", "ניסן ווינר ממוגן 4X4", "פורד F 150 4X4", "טנדר 4X4 - טויוטה/ דימקס/ ווינר"];
    } else if (s3.value == "רב הינע C-1") {
      optionArr = ["", "אביר", 'אביר בטשי"ת', "אביר ממוגן", "האמר", "האמר ממוגן", "האמר/ אקונוליין/ F 350 - אמבולנס", "זאב", "פורד F 350/ דודג' 3500", 'נ"נ 4X', "רכב מסחרי להסעת נוסעים - סוואנה/ אקונוליין"];
    } else if (s3.value == "נוסעים B") {
      optionArr = ["", "פרטי/ ליסינג", "טנדר", "טויוטה", "איסוזו דימקס", "מגנום", "מזדה 2X4", "היילקס", "ניסן ווינר"];
    } else if (s3.value == "משא C-1") {
      optionArr = ["", "אינטר/ פורד F 550 עד 12 טון", "כבאית עד 12 טון"];
    } else if (s3.value == "משא כבד/ C משא כבד רב הינע") {
      optionArr = ["", "טטרה", "אושקוש", "משאית תובלתית (מרצדס/מאן/פרייט/אינטר)", "ריאו", "ספארי", "ספארון", "כבאית", "רכב חילוץ וגרירה", "FMTV"];
    } else if (s3.value == "אחרים") {
      optionArr = ["", "גרור עד 1.8 טון", "גרור 1.8 עד 5 טון", "פולאריס/ מיול - לא כולל רכב סבל חי\"ר", "סבל חי\"ר/ \"יגי\"", "סבל חי\"ר לאחזקה"];
    }
    for (var option in optionArr) {
      var newOption = document.createElement("option");
      newOption.value = optionArr[option];
      newOption.innerHTML = optionArr[option];
      s4.options.add(newOption);
    }
  }
}

/*
 * This function pulls the answer from the arrays 'below' and 'above' 
 * according to the answer of the first question.
 * input: s1 - the chosen answer to the first question.
 * -----  s2 - the chosen answer to the second question.
 *        s3 - the chosen answer to the third question.
 *        s4 - the answers of the added question.
 * output: calling a function.
 * ------
 */
function answerFromTable(s2, s3, s1, s4) {
  s2 = document.getElementById(s2);
  s3 = document.getElementById(s3);
  s1 = document.getElementById(s1);
  s4 = document.getElementById(s4);
  ans = "";
  if (s2.value && s1.value && s3.value) {
    // var background = document.getElementsByClassName("onBackground")[0];

    // if (background)
    if (main)
      main.className = "questions";
    // background.className = "questions";

    document.getElementById("answer").innerHTML = "";

    if (s3.value != "אחרים") {
      if (s1.value == "מעל לחצי שנה") {
        for (var i = 0; i < above.length; i++) {
          if (above[i][0] == s3.value) {
            break;
          }
        }
        for (var j = 0; j < above[0].length; j++) {
          if (above[0][j] == s2.value) {
            break;
          }
        }
        ans = above[j][i];
      } else {
        for (var i = 0; i < below.length; i++) {
          if (below[i][0] == s3.value) {
            break;
          }
        }
        ans = below[i][1];
      }
    }
    addtionOfaSpecificCar(s4, s3, s1);
  } else {
    window.alert("יש למלא את כל השדות לפני הלחיצה על כפתור 'חשב'")
  }
}

/*
 * This function pulls the answer from the array 'cars' 
 * according to the answer of the forth question.
 * input: s4 - the answers of the added question.
 * -----
 * output: putting an answer in the final answer spot.
 * ------
 */
function addtionOfaSpecificCar(s4, s3, s1) {
  var title = document.getElementsByClassName("title-wrapper")[0];
  var answers = document.getElementsByClassName("answerStyle");
  for (var i = 0; i < cars.length; i++) {
    for (var j = 0; j < cars[i].length; j++) {
      if (cars[i][j] == s4.value) {
        ans += cars[i + 1][0];
      }
    }
    i++;
  }
  if (s3.value == "נוסעים B" && s1.value == "מתחת לחצי שנה") {
    ans += '\n**ברכב נוסעים במעבר בין תיה"ל אוטומטית לידנית (או להיפך), יבוצעו מחצית מהשעות המפורטות לעיל (כלומר שעתיים וחצי נהיגה מעשית מתוכן חצי שעה בלילה).\n'
  }
  document.getElementById("answer").innerHTML += ans;

  for (var p in answers) {
    if (answers[p] instanceof HTMLElement)
      // answers[p].style.display = "inline-block";
      answers[p].style.display = "flex";
  }
  document.getElementById("second-title").style.display = "block";
  var data = window.matchMedia("only screen and (max-width: 780px)");
  if (!data.matches) {
    title.style.display = "none";
  } else
    document.querySelector(".questions").scrollTop = document.querySelector(".questions").clientHeight;
  // background.style.overflow = "auto";
  main.style.overflow = "auto";
}

function info() {
  var title = document.getElementsByClassName("title-wrapper")[0];
  var infoPage = document.getElementsByClassName("info-page")[0];
  if (infoPage.style.display === "none") //is closed 
  {
    // background.id = "infoPage";//open
    // background.style.display = "none";
    main.style.display = "none";
    infoPage.style.display = "block";
    title.style.display = "block";
    //hide the current background
    //add the title
  } else //is open
  {
    // background.style.display = "block";
    main.style.display = "block";
    infoPage.style.display = "none";
    var data = window.matchMedia("only screen and (max-width: 780px)");
    if (!data.matches && main.className !== "onBackground")
      title.style.display = "none";
  }
}