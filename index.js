const TOP_SELECTIONS = [{
        firstSelection: "",
        secondSelectionOptions: [""]
    },
    {
        firstSelection: "לא ביצע הכשרה בעבר",
        secondSelectionOptions: [
            "",
            "הכשרה ראשונית"
        ], classes: [
            "nothing",
            "",
            "initial"
        ] 
    },
    {
        firstSelection: "נוסעים",
        secondSelectionOptions: [
            "",
            "רכב נוסעים אוטומט (לרבות רכב מוגבה)",
            "רכב נוסעים ידני"
        ], classes: [
            "passangener",            
            "",
            "auto",
            "menual"
        ] 
    },
    {
        firstSelection: "רב הינע B",
        secondSelectionOptions: [
            "",
            "רנגלר",
            "סופה 4",
            "סופה 3",
            "פאג'רו",
            "טויוטה 4X4",
            "דימקס 4X4",
            "פורד F-150",
            "דודג 1500",
            "דיפנדר",
            "דויד",
            "קולורדו 4X4"
        ], classes: [
            "B",
            "",
            "wrengler",
            "S4",
            "S3",
            "paj",
            "T4X4",
            "D4X4",
            "ford150",
            "dodge1500",
            "defender",
            "David",
            "colorado4X4",
        ] 
    },
    {
        firstSelection: "רב הינע C1",
        secondSelectionOptions: [
            "",
            "דודג' 3500",
            "פורד F-350",
            "האמר",
            "זאב 1",
            "זאב 2",
            "מרצדס ספרינטר"
        ], classes: [
            "mulyi-C1",
            "",
            "dodge3500",
            "ford350",
            "hammer",
            "wolf1",
            "wolf2",
            "sprinter"
        ] 
    },
    {
        firstSelection: "משא קל",
        secondSelectionOptions: [
            "",
            "אינטר 4700",
            "פורד אינטר 550",
            "מאן עד 12 טון",
            "משאית דאף"
        ], classes: [
            "cargo-C1",
            "",
            "inter",
            "fordInter",
            "man",
            "daf"
        ] 
    },
    {
        firstSelection: "משא כבד / משא כבד רב הינע / גרור תומך",
        secondSelectionOptions: [
            "",
            "אושקוש",
            "ריאו",
            "טטרה",
            "FMTV",
            "משאית תובלתית כבדה מעל 12 טון (פריטליינר וכו')",
            "גרור - תומך",
            "מאן מעל 12 טון"
        ], classes: [
            "heavyCargo",
            "",
            "oosh",
            "rio",
            "tetra",
            "FMTV",
            "truk",
            "dragger",
            "man+"
        ] 
    },
    {
        firstSelection: "אוטובוס",
        secondSelectionOptions: [
            "",
            "אוטובוס"
        ], classes: [
            "bus",
            "",
            "bus"
        ] 
    }
];

const BOTTOM_SELECTIONS = [{
        thirdSelection: "",
        fourthSelectionOptions: [""], classes: [""]
    },
    {
        thirdSelection: "נוסעים",
        fourthSelectionOptions: [
            "",
            "רכב נוסעים אוטומט (לרבות רכב מוגבה)",
            "רכב נוסעים ידני"
        ], classes: [
            "passangener",
            "",
            "auto",
            "menual"
        ]
    },
    {
        thirdSelection: "רב הינע B",
        fourthSelectionOptions: [
            "",
            "רנגלר",
            "סופה 4",
            "סופה 3",
            "פאג'רו",
            "טויוטה 4X4",
            "דימקס 4X4",
            "פורד F-150",
            "דודג 1500",
            "דיפנדר",
            "דויד",
            "קולורדו 4X4"
        ], classes: [
            "B",
            "",
            "wrengler",
            "S4",
            "S3",
            "paj",
            "T4X4",
            "D4X4",
            "ford150",
            "dodge1500",
            "defender",
            "David",
            "colorado4X4",
        ] 
    },
    {
        thirdSelection: "רב הינע C1",
        fourthSelectionOptions: [
            "",
            "דודג' 3500",
            "פורד F-350",
            "האמר",
            "זאב 1",
            "זאב 2",
            "מרצדס ספרינטר"
        ], classes: [
            "multi-C1",
            "",
            "dodge3500",
            "ford350",
            "hammer",
            "wolf1",
            "wolf2",
            "sprinter"
        ] 
    },
    {
        thirdSelection: "משא קל",
        fourthSelectionOptions: [
            "",
            "אינטר 4700",
            "פורד אינטר 550",
            "מאן עד 12 טון",
            "משאית דאף"
        ], classes: [
            "cargo-C1",
            "",
            "inter",
            "fordInter",
            "man",
            "daf"
        ] 
    },
    {
        thirdSelection: "משא כבד/משא כבד רב הינע/גרור תומך",
        fourthSelectionOptions: [
            "",
            "אושקוש",
            "ריאו",
            "טטרה",
            "FMTV",
            "משאית תובלתית כבדה מעל 12 טון (פריטליינר וכו')",
            "גרור - תומך",
            "מאן מעל 12 טון"
        ], classes: [
            "heavyCargo",
            "",
            "oosh",
            "rio",
            "tetra",
            "FMTV",
            "truk",
            "dragger",
            "man+"
        ] 
    },
    {
        thirdSelection: "אוטובוס",
        fourthSelectionOptions: [
            "",
            "אוטובוס"
        ], classes: [
            "bus",
            "",
            "bus"
        ]
    }
];

const COICES_IN_FIRST_SELECTION = TOP_SELECTIONS.length; //Number of choices avalible in first selection box
const COICES_IN_THIRD_SELECTION = BOTTOM_SELECTIONS.length; //Number of choices avalible in third selection box
var isAboutDisplayed = false;
var option; //Var for an option in a selection box

// The html from the content div
const CONTENT_ELEMENT = '<div id="infoEnteringArea"><div class="content-title">מלא על פי נתוני הנהג</div><div id="questions-container"><div class="question-container"><div class="catagory">קבוצת הרכב עליו ביצע הכשרה בעבר</div><select class="selection" id="selectionOne"><option></option><option>לא ביצע הכשרה בעבר</option><option>נוסעים</option><option>רב הינע B</option><option>רב הינע C1</option><option>משא קל</option><option>משא כבד / משא כבד רב הינע / גרור תומך</option><option>אוטובוס</option></select></div><div class="question-container"><div class="catagory">סוג הרכב עליו ביצע הכשרה בעבר</div><select class="selection" id="selectionTwo"></select></div><div class="question-container"><div class="catagory">קבוצת הרכב עליו עתיד לבצע הכשרה</div><select class="selection" id="selectionThree"></select></div><div class="question-container"><div class="catagory">סוג הרכב עליו עתיד לבצע הכשרה</div><select class="selection" id="selectionFour"></select></div><div class="line"></div><div id="calculateBtn">חשב</div></div></div><div id="resultArea" class=""><div class="content-title">סדר פעולות בחניכת נהג</div><div class="result-line"><img src="assests/images/wheel.png" alt="wheel" class="result-wheel"></div><div class="result-line"><img src="assests/images/wheel.png" alt="wheel" class="result-wheel"></div></div>'
var resultLine = '<div class="result-line"><img src="assests/images/wheel.png" alt="wheel" class="result-wheel"><div class="result-info"></div></div>';

$(function () {
    // Making opening screen fade out
    document.querySelector("#confirm-btn").addEventListener ("click", function() {
        $("#openingScreenBody").fadeOut(800);
    });

    //Adding listener to the butttons
    $("#infoBtn").on("click", onInfoClick);
    $("#calculateBtn").on("click", onCalculateBtnClick);

    //Adding listeners to selection boxes
    $("#selectionOne").on("change", onFirstSelectionChange);
    $("#selectionTwo").on("change", onSecondSelectionChange);
    $("#selectionThree").on("change", onThirdSelectionChange);
});

/*
 * This function switches between the About screen and the main screen
 * input: -   
 * output: -
 * 15.10.2020
 */
function onInfoClick() {

    // Making screen go back to original form if the ifo btn was pressed after the calculate btn
    $("#resultArea").removeClass("show-result");
    $(".line").removeClass("show-result");
    $(".title-new-driver").removeClass("show-result");
    $("#content").removeClass("show-result");

    // If main screen is visible
    if (!isAboutDisplayed) {
        // Changes content to about
        $("#content").html('<div class="content-title">אודות</div><div class="line about"></div> <div id="about-text"><p><b>רמ"ד טי"ל</b> : רס"ן מיגל לויתן.</p><p><b>ניהול ובקרת התהליך</b>: רס"ר שרי חזי.</p><p><b>אפיון</b>: רב"ט רוני מיליקובסקי.</p><p><b>הפקה</b>: טוראי צליל עמר.</p><p><b>עיצוב</b>: רב"ט דנה בן שימול, סמ"ר אלדר פריג, טוראי צליל עמר וטוראי פלג ברנדוין.</p><p><b>תכנות</b>: טוראי צליל עמר.</p><p><b>תיקוף התוצר: </b>רב"ט גלי חיימוביץ`, רב"ט דרור אברמסון</p><p><b>מומחה תוכן בה"ד </b>6: רס"ם יוסי אלוני.</p><p><b>גרסה</b>: 1.0 2021</p><p><b>מעודכן לתאריך: 07.02.2021 </b></p></div>');
        $("#content").css("flex-direction", "column");
        isAboutDisplayed = !isAboutDisplayed;
    } else {
        // Changes content back to main screen
        $("#content").html(CONTENT_ELEMENT);
        isAboutDisplayed = !isAboutDisplayed;

        //Adding listener to the clac btn
        $("#calculateBtn").on("click", onCalculateBtnClick);

        //Adding listeners to selection boxes
        $("#selectionOne").on("change", onFirstSelectionChange);
        $("#selectionTwo").on("change", onSecondSelectionChange);
        $("#selectionThree").on("change", onThirdSelectionChange);
    }
}

/*
 * This function adds options to the second selection box
 * input: -   
 * output: -
 * 15.10.2020
 */
function onFirstSelectionChange() {
    //Removing any options from the other selection boxes
    $("#selectionTwo").empty();
    $("#selectionThree").empty();
    $("#selectionFour").empty();

    // i = number of first choice
    for (let i = 0; i < COICES_IN_FIRST_SELECTION; i++) {
        // finding the selected option from first selection box
        if ($("#selectionOne option:selected").text() === TOP_SELECTIONS[i].firstSelection) {
            // j = option number on second selection box
            for (let j = 0; j < TOP_SELECTIONS[i].secondSelectionOptions.length; j++) {
                // adding options to second selection box
                option = `<option class="${TOP_SELECTIONS[i].classes[j+1]}">` + TOP_SELECTIONS[i].secondSelectionOptions[j] + "</option>";
                $("#selectionTwo").append(option);
            }
        }
    }
}

/*
 * This function adds options to the third selection box
 * input: -   
 * output: -
 * 15.10.2020
 */
function onSecondSelectionChange() {
    $("#selectionThree").empty();
    $("#selectionFour").empty();
    for (let i = 0; i < COICES_IN_THIRD_SELECTION; i++) {
        option = `<option class="${BOTTOM_SELECTIONS[i].classes[0]}">` + BOTTOM_SELECTIONS[i].thirdSelection + "</option>";
        $("#selectionThree").append(option);
    }
}

/*
 * This function adds options to the fourth selection box
 * input: -   
 * output: -
 * 15.10.2020
 */
function onThirdSelectionChange() {
    // removing any options from fourth selection box
    $("#selectionFour").empty();

    // i = number of third choice
    for (let i = 0; i < COICES_IN_THIRD_SELECTION; i++) {
        // finding the selected option from third selection box
        if ($("#selectionThree option:selected").text() === BOTTOM_SELECTIONS[i].thirdSelection) {
            // j = option number on fourth selection box
            for (let j = 0; j < BOTTOM_SELECTIONS[i].fourthSelectionOptions.length; j++) {
                // adding options to second selection box
                option = `<option class="${BOTTOM_SELECTIONS[i].classes[j+1]}">` + BOTTOM_SELECTIONS[i].fourthSelectionOptions[j] + "</option>";
                $("#selectionFour").append(option);
            }
        }
    }
}

function onCalculateBtnClick() {
    //clears the resaults board for if user has changed the answers
    $(".results").html("");
    // If the user didnt fill out all of the questions
    if ($("#selectionOne option:selected").text() === "" || $("#selectionTwo option:selected").text() === "" || $("#selectionThree option:selected").text() === "" || $("#selectionFour option:selected").text() === "") {
        alert("יש למלא את כל השדות לפני הלחיצה על כפתור 'חשב'");
    } else {
        // making the result area visible
        $("#resultArea").addClass("show-result");
        $(".line").addClass("show-result");
        $(".title-new-driver").addClass("show-result");
        $("#content").addClass("show-result");
        $("#content").css("flex-direction", "row");
        let lines =  getSentences(...Array.from($("option:selected")).map(el => el.className));
        //adds an element for each line that needs to appear to the resaults board
        for(let i = 0; i < lines.length; i++) {
            $(".results").append('<div class="result-line"><img src="assests/images/wheel.png" alt="wheel" class="result-wheel"> <div class="result-info"> '+lines[i]+'</div></div>');
        }
    }
    //Calculating and displaying the results
}

//הפונקציות שמוצאות את המשפטים שצריכים להופיע
function getSentences(...answers) {
    let extraSentences = [];
    let extrasObject = extras;
    for (let answer of answers) {
        if (extrasObject[answer] && extrasObject[answer].extra)
            extraSentences.push(extrasObject[answer].extra)
        extrasObject = extrasObject[answer];
    }

    let answer = [];

    for (let extra of extraSentences) {
        if (extra.text) answer.push(...extra.text.split("\n").filter(e => e));
        if (extra.genericSentences)
            for (let genericSentence of extra.genericSentences) {
                answer.push(genericSentences[genericSentence]);
            }
       
    }
    return answer;
}