// מערך של שילובי משפטים נפוצים
let commonExtras = [
    {
        //0
        "text": "הכרת הרכב בלבד"
    },
    {
        //1
        "text": "שעת חניכה בכביש יום",
    },
    {
        //2
        genericSentences: [0, 1, 2, 5, 10]
    },
    {
        //3
        genericSentences: [9]
    },
    {
        //4
        genericSentences: [8]
    },
    {
        //5
        "text": 'במידה ונהג לוחם/בט"ש עבר קורס דויד בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
    },
    {
        //6
        "text": `במידה ונהג לוחם/בט"ש עבר קורס האמר בבא"פ/בלנ"ם יבצע מבחן שליטה בלבד`,
    },
    {
        //7
        "text": `במידה ונהג לוחם/בט"ש עבר קורס זאב בבא"פ/בלנ"ם יבצע מבחן שליטה בלבד`,
    },
    {
        //8
        "text": `במידה ונהג לוחם/בט"ש עבר קורס טיגריס בבא"פ/בלנ"ם יבצע מבחן שליטה בלבד`
    },
    {
        //9
        "text": "במידה ונדרשת לבצע הכשרה על דודג' 3500 אמבולנס לאחר החניכה יבוצע הכרת הרכב ומבחן שליטה"
    },
    {
        //10
        "text": "במידה ונדרשת לבצע הכשרה על פורד F-350 אמבולנס לאחר החניכה יבוצע הכרת הרכב ומבחן שליטה"
    },
    {
        //11
        "text": "4 שעות כביש יום, שעת כביש לילה<br> במידה ונדרש לנהוג על אוטובוס אחר תבוצע הכרת הרכב בלבד",
        genericSentences: [0, 1, 2, 4]
    },
    {
        //12
        genericSentences: [3]
    },
    {
        //13
        "text": "שעה חניכה בכביש  (שעה שניה יכולה להיות בלילה)",
        genericSentences: [0, 1, 2, 4]
    },
    {
        //14
        "text": "7 שעות כביש (יום/לילה)",
        genericSentences: [0, 1, 2, 4]
    },
    {
        //15
        "text": "4 שעות כביש (יום/לילה) ושעה שטח (יום/לילה)",
        genericSentences: [0, 1, 2, 4]
    },
    {
        //16
        "text": "שעתיים כביש (יום/לילה) ושעה שטח (יום/לילה)",
        genericSentences: [0, 1, 2, 4]
    }
]


//הפונקציה שמשלבת 2 או יותר איברים מcommonExtras
function combineExtras(...extras) {
    let obj = {text: "", genericSentences: []};
    for (let extra of extras) {
        if (extra.text) {
            obj.text += extra.text + "\n";
        }
        if (extra.genericSentences)
            obj.genericSentences.push(...extra.genericSentences);
    }
    return obj;
}

//המערך שמכניסים אליו את המשפטים שצריכים להתווסף. 
//יש דרגות של קלאסים לפי סדר הבחירה, צריך לגשת לכל קלאס ולשים בו את המשפטים שצריכים להיות בו. אם בקלאס ראשוני (למשל נוסעים) יש משפטים שמופיעים בכל התתי קלאסים שלה (כלומר אוטומט וידני) אפשר להוסיף את האקסטרה לקלאס הראשי במקום לכל תת קלאס בנפרד
let extras = {
    "nothing": {
        "initial": {
            "extra": {
                genericSentences: [0, 1, 2],
            },
            "passangener": {
                "extra": {
                    genericSentences: [4,5,8,10,12],
                    "text": "שעה כביש יום, שעה כביש לילה",
                }
            },
            "B": {
                "extra": {
                    "text": "שעתיים כביש יום, שעתיים כביש לילה, שעתיים שטח יום, שעה שטח לילה",
                    genericSentences: [3,5,6,11]
                },
                "TH4X4": {
                    "extra": {
                        genericSentences: [8]
                    }
                },
                "T4X4": {
                    "extra": {
                        genericSentences: [8]
                    }
                },
                "D4X4": {
                    "extra": {
                        genericSentences: [8]
                    }
                },
                "sunyang": {
                    "extra": {
                        genericSentences: [8]
                    }
                },
                "volkswagen": {
                    "extra": {
                        genericSentences: [8]
                    }
                },
                "davidAuto": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס דויד מבצעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "davidManual": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס דויד מבצעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "colorado4X4": {
                    "extra": {
                        genericSentences: [8]
                    }
                },
                "silveradoB4X4": {
                    "extra": {
                        genericSentences: [8]
                    }
                }
            },
            "multi-C1": {
                "extra": {
                    genericSentences: [3,5,6],
                    "text": "3 שעות כביש יום, 3 שעות כביש לילה, שעתיים שטח יום, שעתיים שטח לילה"
                },
                "dodge3500": {
                    "extra": {
                        genericSentences: [11],
                        "text": "במידה ונדרשת לבצע הכשרה על דודג' 3500 אמבולנס לאחר החניכה יבוצע הכרת הרכב ומבחן שליטה"
                    }
                },
                "hammer": {
                    "extra": {
                        genericSentences: [9,11],
                        // "text": "במידה ונדרשת לבצע הכשרה על פורד F-350 אמבולנס לאחר החניכה יבוצע הכרת הרכב ומבחן שליטה"
                        "text": "במידה ונהג לוחם/בטש עבר קורס האמר מבצעי בבאפ/בלנמ יבצע מבחן שליטה בלבד"

                    }
                },
                "ford350": {
                    "extra": {
                        genericSentences: [11],
                        "text": "במידה ונדרשת לבצע הכשרה על פורד F-350 אמבולנס לאחר החניכה יבוצע הכרת הרכב ומבחן שליטה"
                    }
                },
                "wolf1": {
                    "extra": {
                        genericSentences: [9,11],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס זאב מבצעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "wolf2": {
                    "extra": {
                        genericSentences: [9,11],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס זאב מבצעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "tigris": {
                    "extra": {
                        genericSentences: [9,11],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס טיגריס מבצעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "sprinter": {
                    "extra": {
                        genericSentences: [11],
                    }
                },
                "silverado": {
                    "extra": {
                        genericSentences: [11],
                    }
                },

            },
            "cargo-C1": {
                "extra": {
                    genericSentences: [3,5,6,10],
                    "text": "7 שעות כביש יום, 3 שעות כביש לילה"
                }
            },
            "heavyCargo": {
                "extra": {
                    genericSentences: [3,5,6],
                    "text": "37 שעות כביש יום, 3 שעות כביש לילה"
                },
                "oosh": {
                    "extra": {
                        genericSentences: [9,11],
                        "text": "במידה ונדרשת לבצע הכשרה על אושקוש מנוף/סולר/מים לאחר ההכשרה יש לבצע הכרת הרכב בלבד"
                    }
                },
                "rio": {
                    "extra": {
                        genericSentences: [9,11],
                    }
                },
                "tetra": {
                    "extra": {
                        genericSentences: [9,11],
                    }
                },
                "FMTV": {
                    "extra": {
                        genericSentences: [9,11],
                    }
                },
                "truk": {
                    "extra": {
                        genericSentences: [10],
                    }
                },
                "man+": {
                    "extra": {
                        genericSentences: [9,11],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס פנתר מבצעי בבא"פ/בלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "dragger ": {
                    "extra": {
                        genericSentences: [10],
                        "text": ' שעת חניכה תהיה לפחות 50 ק"מ'
                        
                 
                    }
                },
                
            },
            "bus": {
                "extra": {
                    genericSentences: [3,5,6,9,10],
                    "text": "4 שעות כביש יום, שעה כביש לילה<br> במידה ונדרש לאחר ההכשרה לנהוג באוטובוס אחר יבצע הכרת הרכב בלבד",
                    
                    
                }
            }
        }
    },
    "passangener": {
        // "extra": {
        //     genericSentences: [0, 1, 2, 5],
        // },
        "auto": {
            "passangener": {
                "auto": {
                    "extra": {
                      
                        "text": "הכרת הרכב בלבד"
                    }
                },
                "menual": {
                    "extra": {
                        genericSentences: [0, 1, 2, 5, 10],
                        "text": "שעת חניכה בכביש יום"
                    }
                }
            },
            "B": {
                "extra": {
                    genericSentences: [0, 1, 2, 3, 5, 11],
                    "text": "6 שעות כביש (יום/לילה), שעה שטח (יום/לילה)"
                },
                "TH4X4": {
                    "extra": {
                        genericSentences: [8]
                    }
                },
                "D4X4": {
                    "extra": {
                        genericSentences: [8]
                    }
                },
                "T4X4": {
                    "extra": {
                        genericSentences: [8]
                    }
                },
                "sunyang": {
                    "extra": {
                        genericSentences: [8]
                    }
                },
                "volkswagen": {
                    "extra": {
                        genericSentences: [8]
                    }
                },
                "davidAuto": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס דויד מבצעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "davidManual": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס דויד מבצעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "colorado4X4": {
                    "extra": {
                        genericSentences: [8]
                    }
                },
                "silveradoB4X4": {
                    "extra": {
                        genericSentences: [8]
                    }
                },
            },
            "multi-C1": {
                "extra": {
                    genericSentences: [0, 1, 2, 3, 5, 11],
                    "text": "9  שעות כביש (יום/לילה), שעה שטח (יום/לילה)"
                },
                "dodge3500": {
                    "extra": {
                        "text": "במידה ונדרשת לבצע הכשרה על דודג' 3500 אמבולנס לאחר החניכה יבוצע הכרת הרכב ומבחן שליטה"
                    }
                },
                "ford350": {
                    "extra": {
                        "text": 'במידה ונדרשת לבצע הכשרה על פורד F-350 אמבולנס לאחר החניכה יבוצע הכרת הרכב ומחבן שליטה'
                    }
                },
                "hammer": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס האמר מבצעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "wolf1": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס זאב מבצעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "wolf2": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס זאב מבצעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "tigris": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס טיגריס מבצעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
            },
            "cargo-C1": {
                "extra": {
                    genericSentences: [0, 1, 2, 3, 5, 10],
                    "text": "10 שעות כביש (יום/לילה)"
                },
            },
            "heavyCargo": {
                "extra": {
                    genericSentences: [0, 1, 2, 3, 5,],
                    "text": "50 שעות כביש יום/לילה"
                },
                "oosh": {
                    "extra": {
                        genericSentences: [9,11],
                        "text": 'במידה ונדרשת לבצע הכשרה על אושקוש מנוף/סולר/מים לאחר ההכשרה יש לבצע הכרת הרכב בלבד <br> 39 שעות כביש (יום/לילה), שעת שטח (יום/לילה)',
                    }
                },
                "rio": {
                    "extra": {
                        genericSentences: [9,11],
                        "text": "39 שעות כביש (יום/לילה), שעת שטח (יום/לילה)"
                    }
                },
                "tetra": {
                    "extra": {
                        genericSentences: [9,11],
                        "text": "39 שעות כביש (יום/לילה), שעת שטח (יום/לילה)"
                    }
                },
                "FMTV": {
                    "extra": {
                        genericSentences: [9,11],
                        "text": "39 שעות כביש (יום/לילה), שעת שטח (יום/לילה)"
                    }
                },
                "truk": {
                    "extra": {
                        genericSentences: [10],
                        "text": "40 שעות כביש (יום/לילה)"
                    }
                },
                "dragger": {
                    "extra": {
                        genericSentences: [10],
                        "text": "40 שעות כביש (יום/לילה)"
                    }
                },
                "man+": {
                    "extra": {
                        genericSentences: [9,11],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס פנתר מבצעי בבא"פ/בלנ"ם יבצע מבחן שליטה בלבד <br> 39 שעות כביש (יום/לילה), שעת שטח (יום/לילה)',
                    }
                },
            },
            "bus": {
                "extra": {
                    genericSentences: [0, 1, 2, 3, 5, 10],
                    "text": " במידה ונדרש לנהוג על אוטובוס אחר תבוצע הכרת הרכב בלבד <br> 4 שעות כביש יום, שעת כביש לילה",
                }
            }
        },
        "menual": {
            "passangener": {
                "auto": {
                    "extra": {
                        // genericSentences: [3,11],
                        "text": "הכרת הרכב בלבד"
                    }
                },
                "menual": {
                    "extra": {
                        "text": "הכרת הרכב בלבד"
                    }
                }
            },
            "B": {
                "extra": {
                    genericSentences: [0,1,2,3,5, 11],
                    "text": "6 שעות כביש (יום/לילה), שעה שטח (יום/לילה)"
                },
                "TH4X4": {
                    "extra": {
                        genericSentences: [8]
                    }
                },
                "D4X4": {
                    "extra": {
                        genericSentences: [8],
                    }
                },
                "T4X4": {
                    "extra": {
                        genericSentences: [8],
                    }
                },
                "sunyang": {
                    "extra": {
                        genericSentences: [8],
                    }
                },
                "volkswagen": {
                    "extra": {
                        genericSentences: [8],
                    }
                },
                "davidAuto": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס דויד מבצעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "davidManual": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס דויד מבצעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "colorado4X4": {
                    "extra": {
                        genericSentences: [8],
                    }
                },
                "silveradoB4X4": {
                    "extra": {
                        genericSentences: [8],
                    }
                },
            },
            "multi-C1": {
                "extra": {
                    genericSentences: [0, 1, 2, 3, 5, 11],
                    "text": "9 שעות כביש (יום/לילה), שעה שטח (יום/לילה)"
                },
                "dodge3500": {
                    "extra": {
                        "text": 'במידה ונדרשת לבצע הכשרה על דודג 3500 אמבולנס לאחר החניכה יבוצע הכרת הרכב ומבחן שליטה'
                    }
                },
                "ford350" : {
                    "extra": {
                        "text": ' במידה ונדרשת לבצע הכשרה על פורד F-350 אמבולנס לאחר החניכה יבוצע הכרת הרכב ומבחן שליטה '
                    }
                },
                "hammer": {
                    "extra": {
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס האמר מבצעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "wolf1": {
                    "extra": {
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס זאב מבצעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "wolf2": {
                    "extra": {
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס זאב מבצעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "tigris": {
                    "extra": {
                         "text": 'במידה ונהג לוחם/בט"ש עבר קורס טיגריס מבצעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                }
            },
            "cargo-C1": {
                "extra": {
                    genericSentences: [0,1,2,3,5, 10 ],
                    "text": "10 שעות כביש (יום/לילה)"
                }
            },
            "heavyCargo": {
                "extra": {
                    genericSentences: [3],
                },
                "oosh": {
                    "extra": {
                        genericSentences: [0,1,2,3,5,9,11],
                        "text": 'במידה ונדרשת לבצע הכשרה על אושקוש מנוף/סולר/מים לאחר ההכשרה יש לבצע הכרת הרכב בלבד <br> 39 שעות כביש (יום/לילה), שעת שטח (יום/לילה)',
                    }
                },
                "rio": {
                    "extra": {
                        genericSentences: [0,1,2,3,5,9,11],
                         "text": "39 שעות כביש (יום/לילה), שעת שטח (יום/לילה)"
                    }
                },
                "tetra": {
                    "extra": {
                          genericSentences: [0,1,2,3,5,9,11],
                         "text": "39 שעות כביש (יום/לילה), שעת שטח (יום/לילה)"
                    }
                },
                "FMTV": {
                    "extra": {
                          genericSentences: [0,1,2,3,5,9,11],
                         "text": "39 שעות כביש (יום/לילה), שעת שטח (יום/לילה)"
                    }
                },
                "truk": {
                    "extra": {
                         genericSentences: [0,1,2,3,5,10],
                         "text": "40 שעות כביש (יום/לילה)"
                    }
                },
                "dragger": {
                    "extra": {
                          genericSentences: [0,1,2,3,5,10],
                         "text": "40 שעות כביש (יום/לילה)"
                    }
                },
                "man+": {
                    "extra": {
                        genericSentences: [0,1,2,3,5,9,11],
                         "text": 'במידה ונהג לוחם/בט"ש עבר קורס פנתר מבצעי בבא"פ/בלנ"ם יבצע מבחן שליטה בלבד <br> 40 שעות כביש (יום/לילה)',
                    }
                },
            },
            "bus": {
                "extra": {
                    genericSentences: [0,1,2,3,5, 10],
                    "text": "4 שעות כביש יום, שעת כביש לילה<br> במידה ונדרש לנהוג על אוטובוס אחר תבוצע הכרת הרכב בלבד"
                }
            }
        }
    },
    "B": {
        "wrengler": {
            "passangener": {
                "auto": {
                    "extra": {
                        "text": "הכרת הרכב בלבד"
                    }
                },
                "menual": {
                    "extra": {
                        genericSentences: [0, 1, 2, 5, 10],
                        "text": "שעת חניכה בכביש יום"
                    } 
                }
            },
            "B": { 
                "rubikon": {
                    "extra": commonExtras[0]
                },
                "S4": {
                    "extra": commonExtras[0]
                },
                "S3": {
                    "extra": commonExtras[0]
                },
                "paj": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "TLK" : {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "rekston" : {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "TH4X4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "T4X4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "D4X4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "sunyang": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "volkswagen": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "ford150": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "dodge1500": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "defender": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "davidManual": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[3], commonExtras[5]),
                },
                "davidAuto": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[3], commonExtras[5]),
                },
                "colorado4X4": {
                   "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "silveradoB4X4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                }
            },
            "multi-C1": {
                "extra": {
                     genericSentences: [0, 1, 2, 5,10],
                     "text": "5 שעות כביש (יום/לילה)",
                },
                "dodge3500": {
                    "extra": {
                        "text": "במידה ונדרשת לבצע הכשרה על דודג' 3500 אמבולנס לאחר החניכה יבוצע הכרת הרכב ומבחן שליטה"
                    }
                },
                "ford350": {
                    "extra": {
                        "text": 'במידה ונדרשת לבצע הכשרה על פורד F-350 אמבולנס לאחר החניכה יבוצע הכרת הרכב ומחבן שליטה'
                    }
                },
                "hammer": {
                    "extra": {
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס האמר מצבעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "wolf1": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס זאב מצבעי בבא"פ/בבלנ"םיבצע מבחן שליטה בלבד'
                    }
                },
                "wolf2": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס זאב מצבעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "tigris": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס טיגריס מבצעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
            },
            "cargo-C1": {
                "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": "5 שעות כביש (יום/לילה)",
                }
            },
            "heavyCargo": {
               "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": "40 שעות כביש (יום/לילה)",
                },
                "oosh": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונדרשת לבצע הכשרה על אושקוש/מנוף/סולר/מים לאחר ההכשרה יש לבצע הכרת הרכב בלבד',
                    }
                },
                "rio": {
                    "extra": {
                        genericSentences: [9],
                    }
                },
                "tetra": {
                    "extra": {
                          genericSentences: [9],
                    }
                },
                "FMTV": {
                    "extra": {
                          genericSentences: [9],
                    }
                },
                "man+": {
                    "extra": {
                        genericSentences: [9],
                         "text": 'במידה ונהג לוחם/בט"ש עבר קורס פנתר מבצעי בבא"פ/בלנ"ם יבצע מבחן שליטה בלבד',
                    }
                },
            },
            "bus": {
                "extra": {
                    genericSentences: [0, 1, 2, 5, 10],
                    "text": "4 שעות כביש יום, שעה כביש לילה<br> במידה ונדרש לאחר ההכשרה לנהוג באוטובוס אחר יבצע הכרת הרכב בלבד"
                }
            }
        },
        "rubikon": {
            "passangener": {
                "auto": {
                    "extra": {
                        "text": "הכרת הרכב בלבד"
                    }
                },
                "menual": {
                    "extra": {
                        genericSentences: [0, 1, 2, 5, 10],
                        "text": "שעת חניכה בכביש יום"
                    } 
                }
            },
            "B": { 
                "wrengler": {
                    "extra": commonExtras[0]
                },
                "S4": {
                    "extra": commonExtras[0]
                },
                "S3": {
                    "extra": commonExtras[0]
                },
                "paj": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "TLK" : {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "rekston" : {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "TH4X4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "T4X4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "D4X4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "sunyang": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "volkswagen": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "ford150": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "dodge1500": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "defender": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "davidManual": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[3], commonExtras[5]),
                },
                "davidAuto": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[3], commonExtras[5]),
                },
                "colorado4X4": {
                   "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "silveradoB4X4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                }
            },
            "multi-C1": {
                "extra": {
                     genericSentences: [0, 1, 2, 5,10],
                     "text": "5 שעות כביש (יום/לילה)",
                },
                "dodge3500": {
                    "extra": {
                        "text": "במידה ונדרשת לבצע הכשרה על דודג' 3500 אמבולנס לאחר החניכה יבוצע הכרת הרכב ומבחן שליטה"
                    }
                },
                "ford350": {
                    "extra": {
                        "text": 'במידה ונדרשת לבצע הכשרה על פורד F-350 אמבולנס לאחר החניכה יבוצע הכרת הרכב ומחבן שליטה'
                    }
                },
                "hammer": {
                    "extra": {
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס האמר מצבעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "wolf1": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס זאב מצבעי בבא"פ/בבלנ"םיבצע מבחן שליטה בלבד'
                    }
                },
                "wolf2": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס זאב מצבעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "tigris": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס טיגריס מבצעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
            },
            "cargo-C1": {
                "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": "5 שעות כביש (יום/לילה)",
                }
            },
            "heavyCargo": {
               "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": "40 שעות כביש (יום/לילה)",
                },
                "oosh": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונדרשת לבצע הכשרה על אושקוש/מנוף/סולר/מים לאחר ההכשרה יש לבצע הכרת הרכב בלבד',
                    }
                },
                "rio": {
                    "extra": {
                        genericSentences: [9],
                    }
                },
                "tetra": {
                    "extra": {
                          genericSentences: [9],
                    }
                },
                "FMTV": {
                    "extra": {
                          genericSentences: [9],
                    }
                },
                "man+": {
                    "extra": {
                        genericSentences: [9],
                         "text": 'במידה ונהג לוחם/בט"ש עבר קורס פנתר מבצעי בבא"פ/בלנ"ם יבצע מבחן שליטה בלבד',
                    }
                },
            },
            "bus": {
                "extra": {
                    genericSentences: [0, 1, 2, 5, 10],
                    "text": "4 שעות כביש יום, שעה כביש לילה<br> במידה ונדרש לאחר ההכשרה לנהוג באוטובוס אחר יבצע הכרת הרכב בלבד"
                }
            }
        },
        "S4": {
            "passangener": {
                "auto": {
                    "extra": {
                        "text": "הכרת הרכב בלבד"
                    }
                },
                "menual": {
                    "extra": {
                        genericSentences: [0, 1, 2, 5, 10],
                        "text": "שעת חניכה בכביש יום"
                    } 
                }
            },
            "B": { 
                "wrengler": {
                    "extra": commonExtras[0]
                },
                "rubikon": {
                    "extra": commonExtras[0]
                },
                "S3": {
                    "extra": commonExtras[0]
                },
                "paj": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "TLK" : {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "rekston" : {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "TH4X4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "T4X4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "D4X4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "sunyang": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "volkswagen": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "ford150": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "dodge1500": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "defender": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "davidManual": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[3], commonExtras[5]),
                },
                "davidAuto": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[3], commonExtras[5]),
                },
                "colorado4X4": {
                   "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "silveradoB4X4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                }
            },
            "multi-C1": {
                "extra": {
                     genericSentences: [0, 1, 2, 5,10],
                     "text": "5 שעות כביש (יום/לילה)",
                },
                "dodge3500": {
                    "extra": {
                        "text": "במידה ונדרשת לבצע הכשרה על דודג' 3500 אמבולנס לאחר החניכה יבוצע הכרת הרכב ומבחן שליטה"
                    }
                },
                "ford350": {
                    "extra": {
                        "text": 'במידה ונדרשת לבצע הכשרה על פורד F-350 אמבולנס לאחר החניכה יבוצע הכרת הרכב ומחבן שליטה'
                    }
                },
                "hammer": {
                    "extra": {
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס האמר מצבעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "wolf1": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס זאב מצבעי בבא"פ/בבלנ"םיבצע מבחן שליטה בלבד'
                    }
                },
                "wolf2": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס זאב מצבעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "tigris": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס טיגריס מבצעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
            },
            "cargo-C1": {
                "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": "5 שעות כביש (יום/לילה)",
                }
            },
            "heavyCargo": {
               "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": "40 שעות כביש (יום/לילה)",
                },
                "oosh": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונדרשת לבצע הכשרה על אושקוש/מנוף/סולר/מים לאחר ההכשרה יש לבצע הכרת הרכב בלבד',
                    }
                },
                "rio": {
                    "extra": {
                        genericSentences: [9],
                    }
                },
                "tetra": {
                    "extra": {
                          genericSentences: [9],
                    }
                },
                "FMTV": {
                    "extra": {
                          genericSentences: [9],
                    }
                },
                "man+": {
                    "extra": {
                        genericSentences: [9],
                         "text": 'במידה ונהג לוחם/בט"ש עבר קורס פנתר מבצעי בבא"פ/בלנ"ם יבצע מבחן שליטה בלבד',
                    }
                },
            },
            "bus": {
                "extra": {
                    genericSentences: [0, 1, 2, 5, 10],
                    "text": "4 שעות כביש יום, שעה כביש לילה<br> במידה ונדרש לאחר ההכשרה לנהוג באוטובוס אחר יבצע הכרת הרכב בלבד"
                }
            }
        },
        "S3": {
            "passangener": {
                "auto": {
                    "extra": {
                        "text": "הכרת הרכב בלבד"
                    }
                },
                "menual": {
                    "extra": {
                        genericSentences: [0, 1, 2, 5, 10],
                        "text": "שעת חניכה בכביש יום"
                    } 
                }
            },
            "B": { 
                "wrengler": {
                    "extra": commonExtras[0]
                },
                "rubikon": {
                    "extra": commonExtras[0]
                },
                "S4": {
                    "extra": commonExtras[0]
                },
                "paj": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "TLK" : {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "rekston" : {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "TH4X4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "T4X4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "D4X4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "sunyang": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "volkswagen": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "ford150": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "dodge1500": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "defender": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "davidManual": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[3], commonExtras[5]),
                },
                "davidAuto": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[3], commonExtras[5]),
                },
                "colorado4X4": {
                   "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "silveradoB4X4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                }
            },
            "multi-C1": {
                "extra": {
                     genericSentences: [0, 1, 2, 5,10],
                     "text": "5 שעות כביש (יום/לילה)",
                },
                "dodge3500": {
                    "extra": {
                        "text": "במידה ונדרשת לבצע הכשרה על דודג' 3500 אמבולנס לאחר החניכה יבוצע הכרת הרכב ומבחן שליטה"
                    }
                },
                "ford350": {
                    "extra": {
                        "text": 'במידה ונדרשת לבצע הכשרה על פורד F-350 אמבולנס לאחר החניכה יבוצע הכרת הרכב ומחבן שליטה'
                    }
                },
                "hammer": {
                    "extra": {
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס האמר מצבעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "wolf1": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס זאב מצבעי בבא"פ/בבלנ"םיבצע מבחן שליטה בלבד'
                    }
                },
                "wolf2": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס זאב מצבעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "tigris": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס טיגריס מבצעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
            },
            "cargo-C1": {
                "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": "5 שעות כביש (יום/לילה)",
                }
            },
            "heavyCargo": {
               "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": "40 שעות כביש (יום/לילה)",
                },
                "oosh": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונדרשת לבצע הכשרה על אושקוש/מנוף/סולר/מים לאחר ההכשרה יש לבצע הכרת הרכב בלבד',
                    }
                },
                "rio": {
                    "extra": {
                        genericSentences: [9],
                    }
                },
                "tetra": {
                    "extra": {
                          genericSentences: [9],
                    }
                },
                "FMTV": {
                    "extra": {
                          genericSentences: [9],
                    }
                },
                "man+": {
                    "extra": {
                        genericSentences: [9],
                         "text": 'במידה ונהג לוחם/בט"ש עבר קורס פנתר מבצעי בבא"פ/בלנ"ם יבצע מבחן שליטה בלבד',
                    }
                },
            },
            "bus": {
                "extra": {
                    genericSentences: [0, 1, 2, 5, 10],
                    "text": "4 שעות כביש יום, שעה כביש לילה<br> במידה ונדרש לאחר ההכשרה לנהוג באוטובוס אחר יבצע הכרת הרכב בלבד"
                }
            }
        },
        "paj": {
            "passangener": {
                "auto": {
                    "extra": {
                        "text": "הכרת הרכב בלבד"
                    }
                },
                "menual": {
                    "extra": {
                        genericSentences: [0, 1, 2, 5, 10],
                        "text": "שעת חניכה בכביש יום"
                    } 
                }
            },
            "B": { 
                "wrengler": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "rubikon": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "S4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "S3": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "TLK" : {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "rekston" : {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "TH4X4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "T4X4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "D4X4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "sunyang": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "volkswagen": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "ford150": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "dodge1500": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "defender": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "davidManual": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[3], commonExtras[5]),
                },
                "davidAuto": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[3], commonExtras[5]),
                },
                "colorado4X4": {
                   "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "silveradoB4X4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                }
            },
            "multi-C1": {
                "extra": {
                     genericSentences: [0, 1, 2, 5,10],
                     "text": "5 שעות כביש (יום/לילה)",
                },
                "dodge3500": {
                    "extra": {
                        "text": "במידה ונדרשת לבצע הכשרה על דודג' 3500 אמבולנס לאחר החניכה יבוצע הכרת הרכב ומבחן שליטה"
                    }
                },
                "ford350": {
                    "extra": {
                        "text": 'במידה ונדרשת לבצע הכשרה על פורד F-350 אמבולנס לאחר החניכה יבוצע הכרת הרכב ומחבן שליטה'
                    }
                },
                "hammer": {
                    "extra": {
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס האמר מצבעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "wolf1": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס זאב מצבעי בבא"פ/בבלנ"םיבצע מבחן שליטה בלבד'
                    }
                },
                "wolf2": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס זאב מצבעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "tigris": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס טיגריס מבצעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
            },
            "cargo-C1": {
                "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": "5 שעות כביש (יום/לילה)",
                }
            },
            "heavyCargo": {
               "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": "40 שעות כביש (יום/לילה)",
                },
                "oosh": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונדרשת לבצע הכשרה על אושקוש/מנוף/סולר/מים לאחר ההכשרה יש לבצע הכרת הרכב בלבד',
                    }
                },
                "rio": {
                    "extra": {
                        genericSentences: [9],
                    }
                },
                "tetra": {
                    "extra": {
                          genericSentences: [9],
                    }
                },
                "FMTV": {
                    "extra": {
                          genericSentences: [9],
                    }
                },
                "man+": {
                    "extra": {
                        genericSentences: [9],
                         "text": 'במידה ונהג לוחם/בט"ש עבר קורס פנתר מבצעי בבא"פ/בלנ"ם יבצע מבחן שליטה בלבד',
                    }
                },
            },
            "bus": {
                "extra": {
                    genericSentences: [0, 1, 2, 5, 10],
                    "text": "4 שעות כביש יום, שעה כביש לילה<br> במידה ונדרש לאחר ההכשרה לנהוג באוטובוס אחר יבצע הכרת הרכב בלבד"
                }
            }
        },
        "TLK": {
            "passangener": {
                "auto": {
                    "extra": {
                        "text": "הכרת הרכב בלבד"
                    }
                },
                "menual": {
                    "extra": {
                        genericSentences: [0, 1, 2, 5, 10],
                        "text": "שעת חניכה בכביש יום"
                    } 
                }
            },
            "B": { 
                "wrengler": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "rubikon": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "S4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "S3": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "paj" : {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "rekston" : {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "TH4X4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "T4X4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "D4X4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "sunyang": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "volkswagen": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "ford150": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "dodge1500": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "defender": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "davidManual": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[3], commonExtras[5]),
                },
                "davidAuto": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[3], commonExtras[5]),
                },
                "colorado4X4": {
                   "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "silveradoB4X4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                }
            },
            "multi-C1": {
                "extra": {
                     genericSentences: [0, 1, 2, 5,10],
                     "text": "5 שעות כביש (יום/לילה)",
                },
                "dodge3500": {
                    "extra": {
                        "text": "במידה ונדרשת לבצע הכשרה על דודג' 3500 אמבולנס לאחר החניכה יבוצע הכרת הרכב ומבחן שליטה"
                    }
                },
                "ford350": {
                    "extra": {
                        "text": 'במידה ונדרשת לבצע הכשרה על פורד F-350 אמבולנס לאחר החניכה יבוצע הכרת הרכב ומחבן שליטה'
                    }
                },
                "hammer": {
                    "extra": {
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס האמר מצבעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "wolf1": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס זאב מצבעי בבא"פ/בבלנ"םיבצע מבחן שליטה בלבד'
                    }
                },
                "wolf2": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס זאב מצבעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "tigris": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס טיגריס מבצעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
            },
            "cargo-C1": {
                "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": "5 שעות כביש (יום/לילה)",
                }
            },
            "heavyCargo": {
               "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": "40 שעות כביש (יום/לילה)",
                },
                "oosh": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונדרשת לבצע הכשרה על אושקוש/מנוף/סולר/מים לאחר ההכשרה יש לבצע הכרת הרכב בלבד',
                    }
                },
                "rio": {
                    "extra": {
                        genericSentences: [9],
                    }
                },
                "tetra": {
                    "extra": {
                          genericSentences: [9],
                    }
                },
                "FMTV": {
                    "extra": {
                          genericSentences: [9],
                    }
                },
                "man+": {
                    "extra": {
                        genericSentences: [9],
                         "text": 'במידה ונהג לוחם/בט"ש עבר קורס פנתר מבצעי בבא"פ/בלנ"ם יבצע מבחן שליטה בלבד',
                    }
                },
            },
            "bus": {
                "extra": {
                    genericSentences: [0, 1, 2, 5, 10],
                    "text": "4 שעות כביש יום, שעה כביש לילה<br> במידה ונדרש לאחר ההכשרה לנהוג באוטובוס אחר יבצע הכרת הרכב בלבד"
                }
            }
        },
        "rekston": {
            "passangener": {
                "auto": {
                    "extra": {
                        "text": "הכרת הרכב בלבד"
                    }
                },
                "menual": {
                    "extra": {
                        genericSentences: [0, 1, 2, 5, 10],
                        "text": "שעת חניכה בכביש יום"
                    } 
                }
            },
            "B": { 
                "wrengler": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "rubikon": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "S4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "S3": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "paj" : {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "TLK" : {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "TH4X4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "T4X4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "D4X4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "sunyang": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "volkswagen": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "ford150": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "dodge1500": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "defender": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "davidManual": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[3], commonExtras[5]),
                },
                "davidAuto": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[3], commonExtras[5]),
                },
                "colorado4X4": {
                   "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "silveradoB4X4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                }
            },
            "multi-C1": {
                "extra": {
                     genericSentences: [0, 1, 2, 5,10],
                     "text": "5 שעות כביש (יום/לילה)",
                },
                "dodge3500": {
                    "extra": {
                        "text": "במידה ונדרשת לבצע הכשרה על דודג' 3500 אמבולנס לאחר החניכה יבוצע הכרת הרכב ומבחן שליטה"
                    }
                },
                "ford350": {
                    "extra": {
                        "text": 'במידה ונדרשת לבצע הכשרה על פורד F-350 אמבולנס לאחר החניכה יבוצע הכרת הרכב ומחבן שליטה'
                    }
                },
                "hammer": {
                    "extra": {
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס האמר מצבעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "wolf1": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס זאב מצבעי בבא"פ/בבלנ"םיבצע מבחן שליטה בלבד'
                    }
                },
                "wolf2": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס זאב מצבעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "tigris": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס טיגריס מבצעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
            },
            "cargo-C1": {
                "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": "5 שעות כביש (יום/לילה)",
                }
            },
            "heavyCargo": {
               "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": "40 שעות כביש (יום/לילה)",
                },
                "oosh": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונדרשת לבצע הכשרה על אושקוש/מנוף/סולר/מים לאחר ההכשרה יש לבצע הכרת הרכב בלבד',
                    }
                },
                "rio": {
                    "extra": {
                        genericSentences: [9],
                    }
                },
                "tetra": {
                    "extra": {
                          genericSentences: [9],
                    }
                },
                "FMTV": {
                    "extra": {
                          genericSentences: [9],
                    }
                },
                "man+": {
                    "extra": {
                        genericSentences: [9],
                         "text": 'במידה ונהג לוחם/בט"ש עבר קורס פנתר מבצעי בבא"פ/בלנ"ם יבצע מבחן שליטה בלבד',
                    }
                },
            },
            "bus": {
                "extra": {
                    genericSentences: [0, 1, 2, 5, 10],
                    "text": "4 שעות כביש יום, שעה כביש לילה<br> במידה ונדרש לאחר ההכשרה לנהוג באוטובוס אחר יבצע הכרת הרכב בלבד"
                }
            }
        },
        "TH4X4": {
            "passangener": {
                "auto": {
                    "extra": {
                        "text": "הכרת הרכב בלבד"
                    }
                },
                "menual": {
                    "extra": {
                        genericSentences: [0, 1, 2, 5, 10],
                        "text": "שעת חניכה בכביש יום"
                    } 
                }
            },
            "B": { 
                "wrengler": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "rubikon": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "S4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "S3": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "paj": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "TLK" : {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "rekston" : {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "T4X4": {
                    "extra" :  combineExtras(commonExtras[0], commonExtras[4]),
                },
                "D4X4": {
                    "extra" :  combineExtras(commonExtras[0], commonExtras[4]),
                },
                "sunyang": {
                    "extra" :  combineExtras(commonExtras[0], commonExtras[4]),
                },
                "volkswagen": {
                    "extra" :  combineExtras(commonExtras[0],  commonExtras[4]),
                },
                "ford150": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "dodge1500": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "defender": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "davidManual": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[3], commonExtras[5]),
                },
                "davidAuto": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[3], commonExtras[5]),
                },
                "colorado4X4": {
                   "extra" :  combineExtras(commonExtras[0], commonExtras[4]),
                },
                "silveradoB4X4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                }
            },
            "multi-C1": {
                "extra": {
                     genericSentences: [0, 1, 2, 5,10],
                     "text": "5 שעות כביש (יום/לילה)",
                },
                "dodge3500": {
                    "extra": {
                        "text": "במידה ונדרשת לבצע הכשרה על דודג' 3500 אמבולנס לאחר החניכה יבוצע הכרת הרכב ומבחן שליטה"
                    }
                },
                "ford350": {
                    "extra": {
                        "text": 'במידה ונדרשת לבצע הכשרה על פורד F-350 אמבולנס לאחר החניכה יבוצע הכרת הרכב ומחבן שליטה'
                    }
                },
                "hammer": {
                    "extra": {
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס האמר מצבעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "wolf1": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס זאב מצבעי בבא"פ/בבלנ"םיבצע מבחן שליטה בלבד'
                    }
                },
                "wolf2": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס זאב מצבעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "tigris": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס טיגריס מבצעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
            },
            "cargo-C1": {
                "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": "5 שעות כביש (יום/לילה)",
                }
            },
            "heavyCargo": {
               "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": "40 שעות כביש (יום/לילה)",
                },
                "oosh": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונדרשת לבצע הכשרה על אושקוש/מנוף/סולר/מים לאחר ההכשרה יש לבצע הכרת הרכב בלבד',
                    }
                },
                "rio": {
                    "extra": {
                        genericSentences: [9],
                    }
                },
                "tetra": {
                    "extra": {
                          genericSentences: [9],
                    }
                },
                "FMTV": {
                    "extra": {
                          genericSentences: [9],
                    }
                },
                "man+": {
                    "extra": {
                        genericSentences: [9],
                         "text": 'במידה ונהג לוחם/בט"ש עבר קורס פנתר מבצעי בבא"פ/בלנ"ם יבצע מבחן שליטה בלבד',
                    }
                },
            },
            "bus": {
                "extra": {
                    genericSentences: [0, 1, 2, 5, 10],
                    "text": "4 שעות כביש יום, שעה כביש לילה<br> במידה ונדרש לאחר ההכשרה לנהוג באוטובוס אחר יבצע הכרת הרכב בלבד"
                }
            }
        },
        "D4X4": {
            "passangener": {
                "auto": {
                    "extra": {
                        "text": "הכרת הרכב בלבד"
                    }
                },
                "menual": {
                    "extra": {
                        genericSentences: [0, 1, 2, 5, 10],
                        "text": "שעת חניכה בכביש יום"
                    } 
                }
            },
            "B": { 
                "wrengler": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "rubikon": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "S4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "S3": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "paj": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "TLK" : {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "rekston" : {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "TH4X4": {
                    "extra" :  combineExtras(commonExtras[0], commonExtras[4]),
                },
                "T4X4": {
                    "extra" :  combineExtras(commonExtras[0], commonExtras[4]),
                },
                "sunyang": {
                    "extra" :  combineExtras(commonExtras[0], commonExtras[4]),
                },
                "volkswagen": {
                    "extra" :  combineExtras(commonExtras[0],  commonExtras[4]),
                },
                "ford150": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "dodge1500": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "defender": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "davidManual": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[3], commonExtras[5]),
                },
                "davidAuto": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[3], commonExtras[5]),
                },
                "colorado4X4": {
                   "extra" :  combineExtras(commonExtras[0], commonExtras[4]),
                },
                "silveradoB4X4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                }
            },
            "multi-C1": {
                "extra": {
                     genericSentences: [0, 1, 2, 5,10],
                     "text": "5 שעות כביש (יום/לילה)",
                },
                "dodge3500": {
                    "extra": {
                        "text": "במידה ונדרשת לבצע הכשרה על דודג' 3500 אמבולנס לאחר החניכה יבוצע הכרת הרכב ומבחן שליטה"
                    }
                },
                "ford350": {
                    "extra": {
                        "text": 'במידה ונדרשת לבצע הכשרה על פורד F-350 אמבולנס לאחר החניכה יבוצע הכרת הרכב ומחבן שליטה'
                    }
                },
                "hammer": {
                    "extra": {
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס האמר מצבעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "wolf1": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס זאב מצבעי בבא"פ/בבלנ"םיבצע מבחן שליטה בלבד'
                    }
                },
                "wolf2": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס זאב מצבעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "tigris": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס טיגריס מבצעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
            },
            "cargo-C1": {
                "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": "5 שעות כביש (יום/לילה)",
                }
            },
            "heavyCargo": {
               "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": "40 שעות כביש (יום/לילה)",
                },
                "oosh": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונדרשת לבצע הכשרה על אושקוש/מנוף/סולר/מים לאחר ההכשרה יש לבצע הכרת הרכב בלבד',
                    }
                },
                "rio": {
                    "extra": {
                        genericSentences: [9],
                    }
                },
                "tetra": {
                    "extra": {
                          genericSentences: [9],
                    }
                },
                "FMTV": {
                    "extra": {
                          genericSentences: [9],
                    }
                },
                "man+": {
                    "extra": {
                        genericSentences: [9],
                         "text": 'במידה ונהג לוחם/בט"ש עבר קורס פנתר מבצעי בבא"פ/בלנ"ם יבצע מבחן שליטה בלבד',
                    }
                },
            },
            "bus": {
                "extra": {
                    genericSentences: [0, 1, 2, 5, 10],
                    "text": "4 שעות כביש יום, שעה כביש לילה<br> במידה ונדרש לאחר ההכשרה לנהוג באוטובוס אחר יבצע הכרת הרכב בלבד"
                }
            }
        },
        "T4X4": {
            "passangener": {
                "auto": {
                    "extra": {
                        "text": "הכרת הרכב בלבד"
                    }
                },
                "menual": {
                    "extra": {
                        genericSentences: [0, 1, 2, 5, 10],
                        "text": "שעת חניכה בכביש יום"
                    } 
                }
            },
            "B": { 
                "wrengler": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "rubikon": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "S4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "S3": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "paj": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "TLK" : {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "rekston" : {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "TH4X4": {
                    "extra" :  combineExtras(commonExtras[0], commonExtras[4]),
                },
                "D4X4": {
                    "extra" :  combineExtras(commonExtras[0], commonExtras[4]),
                },
                "sunyang": {
                    "extra" :  combineExtras(commonExtras[0], commonExtras[4]),
                },
                "volkswagen": {
                    "extra" :  combineExtras(commonExtras[0],  commonExtras[4]),
                },
                "ford150": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "dodge1500": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "defender": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "davidManual": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[3], commonExtras[5]),
                },
                "davidAuto": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[3], commonExtras[5]),
                },
                "colorado4X4": {
                   "extra" :  combineExtras(commonExtras[0], commonExtras[4]),
                },
                "silveradoB4X4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                }
            },
            "multi-C1": {
                "extra": {
                     genericSentences: [0, 1, 2, 5,10],
                     "text": "5 שעות כביש (יום/לילה)",
                },
                "dodge3500": {
                    "extra": {
                        "text": "במידה ונדרשת לבצע הכשרה על דודג' 3500 אמבולנס לאחר החניכה יבוצע הכרת הרכב ומבחן שליטה"
                    }
                },
                "ford350": {
                    "extra": {
                        "text": 'במידה ונדרשת לבצע הכשרה על פורד F-350 אמבולנס לאחר החניכה יבוצע הכרת הרכב ומחבן שליטה'
                    }
                },
                "hammer": {
                    "extra": {
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס האמר מצבעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "wolf1": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס זאב מצבעי בבא"פ/בבלנ"םיבצע מבחן שליטה בלבד'
                    }
                },
                "wolf2": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס זאב מצבעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "tigris": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס טיגריס מבצעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
            },
            "cargo-C1": {
                "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": "5 שעות כביש (יום/לילה)",
                }
            },
            "heavyCargo": {
               "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": "40 שעות כביש (יום/לילה)",
                },
                "oosh": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונדרשת לבצע הכשרה על אושקוש/מנוף/סולר/מים לאחר ההכשרה יש לבצע הכרת הרכב בלבד',
                    }
                },
                "rio": {
                    "extra": {
                        genericSentences: [9],
                    }
                },
                "tetra": {
                    "extra": {
                          genericSentences: [9],
                    }
                },
                "FMTV": {
                    "extra": {
                          genericSentences: [9],
                    }
                },
                "man+": {
                    "extra": {
                        genericSentences: [9],
                         "text": 'במידה ונהג לוחם/בט"ש עבר קורס פנתר מבצעי בבא"פ/בלנ"ם יבצע מבחן שליטה בלבד',
                    }
                },
            },
            "bus": {
                "extra": {
                    genericSentences: [0, 1, 2, 5, 10],
                    "text": "4 שעות כביש יום, שעה כביש לילה<br> במידה ונדרש לאחר ההכשרה לנהוג באוטובוס אחר יבצע הכרת הרכב בלבד"
                }
            }          
        },
        "sunyang": {
            "passangener": {
                "auto": {
                    "extra": {
                        "text": "הכרת הרכב בלבד"
                    }
                },
                "menual": {
                    "extra": {
                        genericSentences: [0, 1, 2, 5, 10],
                        "text": "שעת חניכה בכביש יום"
                    } 
                }
            },
            "B": { 
                "wrengler": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "rubikon": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "S4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "S3": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "paj": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "TLK" : {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "rekston" : {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "TH4X4": {
                    "extra" :  combineExtras(commonExtras[0], commonExtras[4]),
                },
                "D4X4": {
                    "extra" :  combineExtras(commonExtras[0], commonExtras[4]),
                },
                "T4X4": {
                    "extra" :  combineExtras(commonExtras[0], commonExtras[4]),
                },
                "volkswagen": {
                    "extra" :  combineExtras(commonExtras[0],  commonExtras[4]),
                },
                "ford150": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "dodge1500": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "defender": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "davidManual": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[3], commonExtras[5]),
                },
                "davidAuto": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[3], commonExtras[5]),
                },
                "colorado4X4": {
                   "extra" :  combineExtras(commonExtras[0], commonExtras[4]),
                },
                "silveradoB4X4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                }
            },
            "multi-C1": {
                "extra": {
                     genericSentences: [0, 1, 2, 5,10],
                     "text": "5 שעות כביש (יום/לילה)",
                },
                "dodge3500": {
                    "extra": {
                        "text": "במידה ונדרשת לבצע הכשרה על דודג' 3500 אמבולנס לאחר החניכה יבוצע הכרת הרכב ומבחן שליטה"
                    }
                },
                "ford350": {
                    "extra": {
                        "text": 'במידה ונדרשת לבצע הכשרה על פורד F-350 אמבולנס לאחר החניכה יבוצע הכרת הרכב ומחבן שליטה'
                    }
                },
                "hammer": {
                    "extra": {
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס האמר מצבעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "wolf1": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס זאב מצבעי בבא"פ/בבלנ"םיבצע מבחן שליטה בלבד'
                    }
                },
                "wolf2": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס זאב מצבעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "tigris": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס טיגריס מבצעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
            },
            "cargo-C1": {
                "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": "5 שעות כביש (יום/לילה)",
                }
            },
            "heavyCargo": {
               "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": "40 שעות כביש (יום/לילה)",
                },
                "oosh": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונדרשת לבצע הכשרה על אושקוש/מנוף/סולר/מים לאחר ההכשרה יש לבצע הכרת הרכב בלבד',
                    }
                },
                "rio": {
                    "extra": {
                        genericSentences: [9],
                    }
                },
                "tetra": {
                    "extra": {
                          genericSentences: [9],
                    }
                },
                "FMTV": {
                    "extra": {
                          genericSentences: [9],
                    }
                },
                "man+": {
                    "extra": {
                        genericSentences: [9],
                         "text": 'במידה ונהג לוחם/בט"ש עבר קורס פנתר מבצעי בבא"פ/בלנ"ם יבצע מבחן שליטה בלבד',
                    }
                },
            },
            "bus": {
                "extra": {
                    genericSentences: [0, 1, 2, 5, 10],
                    "text": "4 שעות כביש יום, שעה כביש לילה<br> במידה ונדרש לאחר ההכשרה לנהוג באוטובוס אחר יבצע הכרת הרכב בלבד"
                }
            }
        },
        "volkswagen": {
            "passangener": {
                "auto": {
                    "extra": {
                        "text": "הכרת הרכב בלבד"
                    }
                },
                "menual": {
                    "extra": {
                        genericSentences: [0, 1, 2, 5, 10],
                        "text": "שעת חניכה בכביש יום"
                    } 
                }
            },
            "B": { 
                "wrengler": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "rubikon": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "S4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "S3": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "paj": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "TLK" : {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "rekston" : {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "TH4X4": {
                    "extra" :  combineExtras(commonExtras[0], commonExtras[4]),
                },
                "T4X4": {
                    "extra" :  combineExtras(commonExtras[0], commonExtras[4]),
                },
                "D4X4": {
                    "extra" :  combineExtras(commonExtras[0], commonExtras[4]),
                },
                "sunyang": {
                    "extra" :  combineExtras(commonExtras[0],  commonExtras[4]),
                },
                "ford150": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "dodge1500": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "defender": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "davidManual": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[3], commonExtras[5]),
                },
                "davidAuto": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[3], commonExtras[5]),
                },
                "colorado4X4": {
                   "extra" :  combineExtras(commonExtras[0], commonExtras[4]),
                },
                "silveradoB4X4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                }
            },
            "multi-C1": {
                "extra": {
                     genericSentences: [0, 1, 2, 5,10],
                     "text": "5 שעות כביש (יום/לילה)",
                },
                "dodge3500": {
                    "extra": {
                        "text": "במידה ונדרשת לבצע הכשרה על דודג' 3500 אמבולנס לאחר החניכה יבוצע הכרת הרכב ומבחן שליטה"
                    }
                },
                "ford350": {
                    "extra": {
                        "text": 'במידה ונדרשת לבצע הכשרה על פורד F-350 אמבולנס לאחר החניכה יבוצע הכרת הרכב ומחבן שליטה'
                    }
                },
                "hammer": {
                    "extra": {
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס האמר מצבעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "wolf1": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס זאב מצבעי בבא"פ/בבלנ"םיבצע מבחן שליטה בלבד'
                    }
                },
                "wolf2": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס זאב מצבעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "tigris": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס טיגריס מבצעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
            },
            "cargo-C1": {
                "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": "5 שעות כביש (יום/לילה)",
                }
            },
            "heavyCargo": {
               "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": "40 שעות כביש (יום/לילה)",
                },
                "oosh": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונדרשת לבצע הכשרה על אושקוש/מנוף/סולר/מים לאחר ההכשרה יש לבצע הכרת הרכב בלבד',
                    }
                },
                "rio": {
                    "extra": {
                        genericSentences: [9],
                    }
                },
                "tetra": {
                    "extra": {
                          genericSentences: [9],
                    }
                },
                "FMTV": {
                    "extra": {
                          genericSentences: [9],
                    }
                },
                "man+": {
                    "extra": {
                        genericSentences: [9],
                         "text": 'במידה ונהג לוחם/בט"ש עבר קורס פנתר מבצעי בבא"פ/בלנ"ם יבצע מבחן שליטה בלבד',
                    }
                },
            },
            "bus": {
                "extra": {
                    genericSentences: [0, 1, 2, 5, 10],
                    "text": "4 שעות כביש יום, שעה כביש לילה<br> במידה ונדרש לאחר ההכשרה לנהוג באוטובוס אחר יבצע הכרת הרכב בלבד"
                }
            }
        },
        "ford150": {
            "passangener": {
                "auto": {
                    "extra": {
                        "text": "הכרת הרכב בלבד"
                    }
                },
                "menual": {
                    "extra": {
                        genericSentences: [0, 1, 2, 5, 10],
                        "text": "שעת חניכה בכביש יום"
                    } 
                }
            },
            "B": { 
                "wrengler": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "rubikon": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "S4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "S3": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "paj": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "TLK" : {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "rekston" : {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "TH4X4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "T4X4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "D4X4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "sunyang": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "volkswagen": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "dodge1500": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "defender": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "davidManual": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[3], commonExtras[5]),
                },
                "davidAuto": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[3], commonExtras[5]),
                },
                "colorado4X4": {
                   "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "silveradoB4X4": {
                    "extra": {
                        "text" :  `הכרת הרכב בלבד ומבחן שליטה למעט חייל בקבע/אע"צ הנדרשים בהכרת הרכב בלבד`
                    }
                    
                }
            },
            "multi-C1": {
                "extra": {
                     genericSentences: [0, 1, 2, 5,10],
                     "text": "5 שעות כביש (יום/לילה)",
                },
                "dodge3500": {
                    "extra": {
                        "text": "במידה ונדרשת לבצע הכשרה על דודג' 3500 אמבולנס לאחר החניכה יבוצע הכרת הרכב ומבחן שליטה"
                    }
                },
                "ford350": {
                    "extra": {
                        "text": 'במידה ונדרשת לבצע הכשרה על פורד F-350 אמבולנס לאחר החניכה יבוצע הכרת הרכב ומחבן שליטה'
                    }
                },
                "hammer": {
                    "extra": {
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס האמר מצבעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "wolf1": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס זאב מצבעי בבא"פ/בבלנ"םיבצע מבחן שליטה בלבד'
                    }
                },
                "wolf2": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס זאב מצבעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "tigris": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס טיגריס מבצעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
            },
            "cargo-C1": {
                "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": "5 שעות כביש (יום/לילה)",
                }
            },
            "heavyCargo": {
               "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": "40 שעות כביש (יום/לילה)",
                },
                "oosh": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונדרשת לבצע הכשרה על אושקוש/מנוף/סולר/מים לאחר ההכשרה יש לבצע הכרת הרכב בלבד',
                    }
                },
                "rio": {
                    "extra": {
                        genericSentences: [9],
                    }
                },
                "tetra": {
                    "extra": {
                          genericSentences: [9],
                    }
                },
                "FMTV": {
                    "extra": {
                          genericSentences: [9],
                    }
                },
                "man+": {
                    "extra": {
                        genericSentences: [9],
                         "text": 'במידה ונהג לוחם/בט"ש עבר קורס פנתר מבצעי בבא"פ/בלנ"ם יבצע מבחן שליטה בלבד',
                    }
                },
            },
            "bus": {
                "extra": {
                    genericSentences: [0, 1, 2, 5, 10],
                    "text": "4 שעות כביש יום, שעה כביש לילה<br> במידה ונדרש לאחר ההכשרה לנהוג באוטובוס אחר יבצע הכרת הרכב בלבד"
                }
            }
        },
        "dodge1500": {
            "passangener": {
                "auto": {
                    "extra": {
                        "text": "הכרת הרכב בלבד"
                    }
                },
                "menual": {
                    "extra": {
                        genericSentences: [0, 1, 2, 5, 10],
                        "text": "שעת חניכה בכביש יום"
                    } 
                }
            },
            "B": { 
                "wrengler": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "rubikon": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "S4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "S3": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "paj": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "TLK" : {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "rekston" : {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "TH4X4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "T4X4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "D4X4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "sunyang": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "volkswagen": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "ford150": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "defender": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "davidManual": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[3], commonExtras[5]),
                },
                "davidAuto": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[3], commonExtras[5]),
                },
                "colorado4X4": {
                   "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "silveradoB4X4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                }
            },
            "multi-C1": {
                "extra": {
                     genericSentences: [0, 1, 2, 5,10],
                     "text": "5 שעות כביש (יום/לילה)",
                },
                "dodge3500": {
                    "extra": {
                        "text": "במידה ונדרשת לבצע הכשרה על דודג' 3500 אמבולנס לאחר החניכה יבוצע הכרת הרכב ומבחן שליטה"
                    }
                },
                "ford350": {
                    "extra": {
                        "text": 'במידה ונדרשת לבצע הכשרה על פורד F-350 אמבולנס לאחר החניכה יבוצע הכרת הרכב ומחבן שליטה'
                    }
                },
                "hammer": {
                    "extra": {
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס האמר מצבעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "wolf1": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס זאב מצבעי בבא"פ/בבלנ"םיבצע מבחן שליטה בלבד'
                    }
                },
                "wolf2": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס זאב מצבעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "tigris": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס טיגריס מבצעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
            },
            "cargo-C1": {
                "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": "5 שעות כביש (יום/לילה)",
                }
            },
            "heavyCargo": {
               "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": "40 שעות כביש (יום/לילה)",
                },
                "oosh": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונדרשת לבצע הכשרה על אושקוש/מנוף/סולר/מים לאחר ההכשרה יש לבצע הכרת הרכב בלבד',
                    }
                },
                "rio": {
                    "extra": {
                        genericSentences: [9],
                    }
                },
                "tetra": {
                    "extra": {
                          genericSentences: [9],
                    }
                },
                "FMTV": {
                    "extra": {
                          genericSentences: [9],
                    }
                },
                "man+": {
                    "extra": {
                        genericSentences: [9],
                         "text": 'במידה ונהג לוחם/בט"ש עבר קורס פנתר מבצעי בבא"פ/בלנ"ם יבצע מבחן שליטה בלבד',
                    }
                },
            },
            "bus": {
                "extra": {
                    genericSentences: [0, 1, 2, 5, 10],
                    "text": "4 שעות כביש יום, שעה כביש לילה<br> במידה ונדרש לאחר ההכשרה לנהוג באוטובוס אחר יבצע הכרת הרכב בלבד"
                }
            }
        },
        "defender": {
            "passangener": {
                "auto": {
                    "extra": {
                        "text": "הכרת הרכב בלבד"
                    }
                },
                "menual": {
                    "extra": {
                        "text": "הכרת הרכב בלבד בתנאי שהדיפנדר ידני"
                    } 
                }
            },
            "B": { 
                "wrengler": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "rubikon": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "S4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "S3": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "paj": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "TLK" : {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "rekston" : {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "TH4X4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "T4X4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "D4X4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "sunyang": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "volkswagen": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "ford150": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "dodge1500": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "davidManual": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[3], commonExtras[5]),
                },
                "davidAuto": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[3], commonExtras[5]),
                },
                "colorado4X4": {
                   "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "silveradoB4X4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                }
            },
            "multi-C1": {
                "extra": {
                     genericSentences: [0, 1, 2, 5,10],
                     "text": "5 שעות כביש (יום/לילה)",
                },
                "dodge3500": {
                    "extra": {
                        "text": "במידה ונדרשת לבצע הכשרה על דודג' 3500 אמבולנס לאחר החניכה יבוצע הכרת הרכב ומבחן שליטה"
                    }
                },
                "ford350": {
                    "extra": {
                        "text": 'במידה ונדרשת לבצע הכשרה על פורד F-350 אמבולנס לאחר החניכה יבוצע הכרת הרכב ומחבן שליטה'
                    }
                },
                "hammer": {
                    "extra": {
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס האמר מצבעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "wolf1": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס זאב מצבעי בבא"פ/בבלנ"םיבצע מבחן שליטה בלבד'
                    }
                },
                "wolf2": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס זאב מצבעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "tigris": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס טיגריס מבצעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
            },
            "cargo-C1": {
                "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": "5 שעות כביש (יום/לילה)",
                }
            },
            "heavyCargo": {
               "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": "40 שעות כביש (יום/לילה)",
                },
                "oosh": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונדרשת לבצע הכשרה על אושקוש/מנוף/סולר/מים לאחר ההכשרה יש לבצע הכרת הרכב בלבד',
                    }
                },
                "rio": {
                    "extra": {
                        genericSentences: [9],
                    }
                },
                "tetra": {
                    "extra": {
                          genericSentences: [9],
                    }
                },
                "FMTV": {
                    "extra": {
                          genericSentences: [9],
                    }
                },
                "man+": {
                    "extra": {
                        genericSentences: [9],
                         "text": 'במידה ונהג לוחם/בט"ש עבר קורס פנתר מבצעי בבא"פ/בלנ"ם יבצע מבחן שליטה בלבד',
                    }
                },
            },
            "bus": {
                "extra": {
                    genericSentences: [0, 1, 2, 5, 10],
                    "text": "4 שעות כביש יום, שעה כביש לילה<br> במידה ונדרש לאחר ההכשרה לנהוג באוטובוס אחר יבצע הכרת הרכב בלבד"
                }
            }
        },
        "davidAuto": {
            "passangener": {
                "auto": {
                    "extra": {
                        "text": "הכרת הרכב בלבד"
                    }
                },
                "menual": {
                    "extra": {
                        // genericSentences: [0, 1, 2, 5, 10],
                        // "text": "שעת חניכה בכביש יום"
                        "text": "הכרת הרכב בלבד"

                    } 
                }
            },
            "B": {
                "wrengler": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "rubikon": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "S4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "S3": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "paj": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "TLK" : {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "rekston" : {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "TH4X4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "T4X4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "D4X4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "sunyang": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "volkswagen": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "ford150": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "dodge1500": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "defender": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "davidManual": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[3], commonExtras[5]),
                },
                "colorado4X4": {
                   "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "silveradoB4X4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                }
            },
            "multi-C1": {
                "extra": {
                     genericSentences: [0, 1, 2, 5,10],
                     "text": "5 שעות כביש (יום/לילה)",
                },
                "dodge3500": {
                    "extra": {
                        "text": "במידה ונדרשת לבצע הכשרה על דודג' 3500 אמבולנס לאחר החניכה יבוצע הכרת הרכב ומבחן שליטה"
                    }
                },
                "ford350": {
                    "extra": {
                        "text": 'במידה ונדרשת לבצע הכשרה על פורד F-350 אמבולנס לאחר החניכה יבוצע הכרת הרכב ומחבן שליטה'
                    }
                },
                "hammer": {
                    "extra": {
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס האמר מצבעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "wolf1": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס זאב מצבעי בבא"פ/בבלנ"םיבצע מבחן שליטה בלבד'
                    }
                },
                "wolf2": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס זאב מצבעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "tigris": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס טיגריס מבצעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
            },
            "cargo-C1": {
                "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": "5 שעות כביש (יום/לילה)",
                }
            },
            "heavyCargo": {
               "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": "40 שעות כביש (יום/לילה)",
                },
                "oosh": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונדרשת לבצע הכשרה על אושקוש/מנוף/סולר/מים לאחר ההכשרה יש לבצע הכרת הרכב בלבד',
                    }
                },
                "rio": {
                    "extra": {
                        genericSentences: [9],
                    }
                },
                "tetra": {
                    "extra": {
                          genericSentences: [9],
                    }
                },
                "FMTV": {
                    "extra": {
                          genericSentences: [9],
                    }
                },
                "man+": {
                    "extra": {
                        genericSentences: [9],
                         "text": 'במידה ונהג לוחם/בט"ש עבר קורס פנתר מבצעי בבא"פ/בלנ"ם יבצע מבחן שליטה בלבד',
                    }
                },
            },
            "bus": {
                "extra": {
                    genericSentences: [0, 1, 2, 5, 10],
                    "text": "4 שעות כביש יום, שעה כביש לילה<br> במידה ונדרש לאחר ההכשרה לנהוג באוטובוס אחר יבצע הכרת הרכב בלבד"
                }
            }
        },
        "davidManual": {
            "passangener": {
                "auto": {
                    "extra": {
                        "text": "הכרת הרכב בלבד"
                    }
                },
                "menual": {
                   "extra": {
                        genericSentences: [0, 1, 2, 5, 10],
                        "text": "שעת חניכה בכביש יום"
                    } 
                }
            },
            "B": {
                "wrengler": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "rubikon": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "S4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "S3": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "paj": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "TLK" : {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "rekston" : {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "TH4X4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "T4X4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "D4X4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "sunyang": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "volkswagen": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "ford150": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "dodge1500": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "defender": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "davidAuto": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[3], commonExtras[5]),
                },
                "colorado4X4": {
                   "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "silveradoB4X4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                }
            },
            "multi-C1": {
                "extra": {
                     genericSentences: [0, 1, 2, 5,10],
                     "text": "5 שעות כביש (יום/לילה)",
                },
                "dodge3500": {
                    "extra": {
                        "text": "במידה ונדרשת לבצע הכשרה על דודג' 3500 אמבולנס לאחר החניכה יבוצע הכרת הרכב ומבחן שליטה"
                    }
                },
                "ford350": {
                    "extra": {
                        "text": 'במידה ונדרשת לבצע הכשרה על פורד F-350 אמבולנס לאחר החניכה יבוצע הכרת הרכב ומחבן שליטה'
                    }
                },
                "hammer": {
                    "extra": {
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס האמר מצבעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "wolf1": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס זאב מצבעי בבא"פ/בבלנ"םיבצע מבחן שליטה בלבד'
                    }
                },
                "wolf2": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס זאב מצבעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "tigris": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס טיגריס מבצעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
            },
            "cargo-C1": {
                "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": "5 שעות כביש (יום/לילה)",
                }
            },
            "heavyCargo": {
               "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": "40 שעות כביש (יום/לילה)",
                },
                "oosh": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונדרשת לבצע הכשרה על אושקוש/מנוף/סולר/מים לאחר ההכשרה יש לבצע הכרת הרכב בלבד',
                    }
                },
                "rio": {
                    "extra": {
                        genericSentences: [9],
                    }
                },
                "tetra": {
                    "extra": {
                          genericSentences: [9],
                    }
                },
                "FMTV": {
                    "extra": {
                          genericSentences: [9],
                    }
                },
                "man+": {
                    "extra": {
                        genericSentences: [9],
                         "text": 'במידה ונהג לוחם/בט"ש עבר קורס פנתר מבצעי בבא"פ/בלנ"ם יבצע מבחן שליטה בלבד',
                    }
                },
            },
            "bus": {
                "extra": {
                    genericSentences: [0, 1, 2, 5, 10],
                    "text": "4 שעות כביש יום, שעה כביש לילה<br> במידה ונדרש לאחר ההכשרה לנהוג באוטובוס אחר יבצע הכרת הרכב בלבד"
                }
            }
        },
        "colorado4X4": {
            "passangener": {
                "auto": {
                    "extra": {
                        "text": "הכרת הרכב בלבד"
                    }
                },
                "menual": {
                   "extra": {
                        genericSentences: [0, 1, 2, 5, 10],
                        "text": "שעת חניכה בכביש יום"
                    } 
                }
            },
            "B": {
                "wrengler": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "rubikon": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "S4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "S3": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "paj": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "TLK" : {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "rekston" : {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "TH4X4": {
                    "extra" :  combineExtras(commonExtras[0], commonExtras[4]),
                },
                "T4X4": {
                    "extra" :  combineExtras(commonExtras[0], commonExtras[4]),
                },
                "D4X4": {
                    "extra" :  combineExtras(commonExtras[0], commonExtras[4]),
                },
                "sunyang": {
                    "extra" :  combineExtras(commonExtras[0], commonExtras[4]),
                },
                "volkswagen": {
                    "extra" :  combineExtras(commonExtras[0], commonExtras[4]),
                },
                "ford150": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "dodge1500": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "defender": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "davidAuto": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[3], commonExtras[5]),
                },
                "davidManual": {
                   "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[3], commonExtras[5]),
                },
                "silveradoB4X4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                }
            },
            "multi-C1": {
                "extra": {
                     genericSentences: [0, 1, 2, 5,10],
                     "text": "5 שעות כביש (יום/לילה)",
                },
                "dodge3500": {
                    "extra": {
                        "text": "במידה ונדרשת לבצע הכשרה על דודג' 3500 אמבולנס לאחר החניכה יבוצע הכרת הרכב ומבחן שליטה"
                    }
                },
                "ford350": {
                    "extra": {
                        "text": 'במידה ונדרשת לבצע הכשרה על פורד F-350 אמבולנס לאחר החניכה יבוצע הכרת הרכב ומחבן שליטה'
                    }
                },
                "hammer": {
                    "extra": {
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס האמר מצבעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "wolf1": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס זאב מצבעי בבא"פ/בבלנ"םיבצע מבחן שליטה בלבד'
                    }
                },
                "wolf2": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס זאב מצבעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "tigris": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס טיגריס מבצעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
            },
            "cargo-C1": {
                "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": "5 שעות כביש (יום/לילה)",
                }
            },
            "heavyCargo": {
               "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": "40 שעות כביש (יום/לילה)",
                },
                "oosh": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונדרשת לבצע הכשרה על אושקוש/מנוף/סולר/מים לאחר ההכשרה יש לבצע הכרת הרכב בלבד',
                    }
                },
                "rio": {
                    "extra": {
                        genericSentences: [9],
                    }
                },
                "tetra": {
                    "extra": {
                          genericSentences: [9],
                    }
                },
                "FMTV": {
                    "extra": {
                          genericSentences: [9],
                    }
                },
                "man+": {
                    "extra": {
                        genericSentences: [9],
                         "text": 'במידה ונהג לוחם/בט"ש עבר קורס פנתר מבצעי בבא"פ/בלנ"ם יבצע מבחן שליטה בלבד',
                    }
                },
            },
            "bus": {
                "extra": {
                    genericSentences: [0, 1, 2, 5, 10],
                    "text": "4 שעות כביש יום, שעה כביש לילה<br> במידה ונדרש לאחר ההכשרה לנהוג באוטובוס אחר יבצע הכרת הרכב בלבד"
                }
            }
        },
        "silveradoB4X4": {
            "passangener": {
                "auto": {
                    "extra": {
                        "text": "הכרת הרכב בלבד"
                    }
                },
                "menual": {
                   "extra": {
                        genericSentences: [0, 1, 2, 5, 10],
                        "text": "שעת חניכה בכביש יום"
                    } 
                }
            },
            "B": {
                "wrengler": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "rubikon": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "S4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "S3": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "paj": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "TLK" : {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "rekston" : {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "TH4X4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "T4X4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "D4X4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "sunyang": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                },
                "volkswagen": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "ford150": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "dodge1500": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "defender": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2]),
                },
                "davidAuto": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[3], commonExtras[5]),
                },
                "davidManual": {
                   "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[3], commonExtras[5]),
                },
                "colorado4X4": {
                    "extra" :  combineExtras(commonExtras[1], commonExtras[2], commonExtras[4]),
                }
            },
            "multi-C1": {
                "extra": {
                     genericSentences: [0, 1, 2, 5,10],
                     "text": "5 שעות כביש (יום/לילה)",
                },
                "dodge3500": {
                    "extra": {
                        "text": "במידה ונדרשת לבצע הכשרה על דודג' 3500 אמבולנס לאחר החניכה יבוצע הכרת הרכב ומבחן שליטה"
                    }
                },
                "ford350": {
                    "extra": {
                        "text": 'במידה ונדרשת לבצע הכשרה על פורד F-350 אמבולנס לאחר החניכה יבוצע הכרת הרכב ומחבן שליטה'
                    }
                },
                "hammer": {
                    "extra": {
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס האמר מצבעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "wolf1": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס זאב מצבעי בבא"פ/בבלנ"םיבצע מבחן שליטה בלבד'
                    }
                },
                "wolf2": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס זאב מצבעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "tigris": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס טיגריס מבצעי בבא"פ/בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
            },
            "cargo-C1": {
                "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": "5 שעות כביש (יום/לילה)",
                }
            },
            "heavyCargo": {
               "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": "40 שעות כביש (יום/לילה)",
                },
                "oosh": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונדרשת לבצע הכשרה על אושקוש/מנוף/סולר/מים לאחר ההכשרה יש לבצע הכרת הרכב בלבד',
                    }
                },
                "rio": {
                    "extra": {
                        genericSentences: [9],
                    }
                },
                "tetra": {
                    "extra": {
                          genericSentences: [9],
                    }
                },
                "FMTV": {
                    "extra": {
                          genericSentences: [9],
                    }
                },
                "man+": {
                    "extra": {
                        genericSentences: [9],
                         "text": 'במידה ונהג לוחם/בט"ש עבר קורס פנתר מבצעי בבא"פ/בלנ"ם יבצע מבחן שליטה בלבד',
                    }
                },
            },
            "bus": {
                "extra": {
                    genericSentences: [0, 1, 2, 5, 10],
                    "text": "4 שעות כביש יום, שעה כביש לילה<br> במידה ונדרש לאחר ההכשרה לנהוג באוטובוס אחר יבצע הכרת הרכב בלבד"
                }
            }
        }
    },
    "multi-C1": {
        "dodge3500": {
            "passangener": {
                "auto": {
                    "extra": {
                        "text": "הכרת הרכב ומבחן שליטה בלבד"
                    }
                },
                "menual": {
                    "extra": combineExtras(commonExtras[1], commonExtras[2]),
                }
            },
            "B": {
                "extra": combineExtras(commonExtras[1], commonExtras[2]),
                "rekston" : {
                    "extra" :  commonExtras[4],
                },
                "TH4X4": {
                    "extra" :  commonExtras[4],
                },
                "T4X4": {
                    "extra" :  commonExtras[4],
                },
                "D4X4": {
                    "extra" :  commonExtras[4],
                },
                "sunyang": {
                    "extra" :  commonExtras[4],
                },
                "davidManual": {
                    "extra" :  combineExtras(commonExtras[3], commonExtras[5]),
                },
                "davidAuto": {
                    "extra" :  combineExtras(commonExtras[3], commonExtras[5]),
                },
                "colorado4X4": {
                   "extra" :  commonExtras[4],
                },
                "silveradoB4X4": {
                    "extra" :  commonExtras[4],
                }
            },
            "multi-C1": {
                "ford350": {
                    "extra": {
                        "text": "הכרת הרכב ומבחן שליטה ביום בלבד."
                    }
                },
                "hammer": {
                    "extra": combineExtras(commonExtras[1], commonExtras[2], commonExtras[3], commonExtras[6])
                },
                "wolf1": {
                    "extra": combineExtras(commonExtras[1], commonExtras[2], commonExtras[3], commonExtras[7])
                },
                "wolf2": {
                    "extra": combineExtras(commonExtras[1], commonExtras[2], commonExtras[3], commonExtras[7])
                },
                "sprinter": {
                    "extra": combineExtras(commonExtras[1], commonExtras[2])
                },
                "silverado": {
                    "extra": combineExtras(commonExtras[1], commonExtras[2])
                },
                "tigris": {
                    "extra": combineExtras(commonExtras[1], commonExtras[2], commonExtras[3], commonExtras[8])
                }
            },
            "cargo-C1": {
                "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": " שעתיים כביש (יום/לילה)",
                }
            }, 
            "heavyCargo": {
               "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": "7 שעות כביש (יום/לילה)",
                },
                "oosh": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונדרשת לבצע הכשרה על אושקוש/מנוף/סולר/מים לאחר ההכשרה יש לבצע הכרת הרכב בלבד',
                    }
                },
                "rio": {
                    "extra": {
                        genericSentences: [9],
                    }
                },
                "tetra": {
                    "extra": {
                          genericSentences: [9],
                    }
                },
                "FMTV": {
                    "extra": {
                          genericSentences: [9],
                    }
                },
                "man+": {
                    "extra": {
                        genericSentences: [9],
                         "text": 'במידה ונהג לוחם/בט"ש עבר קורס פנתר מבצעי בבא"פ/בלנ"ם יבצע מבחן שליטה בלבד',
                    }
                },
            },
            "bus": {
                "extra": {
                    genericSentences: [0, 1, 2, 5, 10],
                    "text": "4 שעות כביש יום, שעה כביש לילה<br> במידה ונדרש לאחר ההכשרה לנהוג באוטובוס אחר יבצע הכרת הרכב בלבד"
                }
            }
        },
        "ford350": {
            "passangener": {
                "auto": {
                    "extra": {
                        "text": "הכרת הרכב ומבחן שליטה בלבד"
                    }
                },
                "menual": {
                    "extra": combineExtras(commonExtras[1], commonExtras[2]),
                }
            },
            "B": {
                "extra": combineExtras(commonExtras[1], commonExtras[2]),
                "rekston" : {
                    "extra" :  commonExtras[4],
                },
                "TH4X4": {
                    "extra" :  commonExtras[4],
                },
                "T4X4": {
                    "extra" :  commonExtras[4],
                },
                "D4X4": {
                    "extra" :  commonExtras[4],
                },
                "sunyang": {
                    "extra" :  commonExtras[4],
                },
                "davidManual": {
                    "extra" :  combineExtras(commonExtras[3], commonExtras[5]),
                },
                "davidAuto": {
                    "extra" :  combineExtras(commonExtras[3], commonExtras[5]),
                },
                "colorado4X4": {
                   "extra" :  commonExtras[4],
                },
                "silveradoB4X4": {
                    "extra" :  commonExtras[4],
                }
            },
            "multi-C1": {
                "ford350": {
                    "extra": {
                        "text": "הכרת הרכב ומבחן שליטה ביום בלבד."
                    }
                },
                "hammer": {
                    "extra": combineExtras(commonExtras[1], commonExtras[2], commonExtras[3], commonExtras[6])
                },
                "wolf1": {
                    "extra": combineExtras(commonExtras[1], commonExtras[2], commonExtras[3], commonExtras[7])
                },
                "wolf2": {
                    "extra": combineExtras(commonExtras[1], commonExtras[2], commonExtras[3], commonExtras[7])
                },
                "sprinter": {
                    "extra": combineExtras(commonExtras[1], commonExtras[2])
                },
                "silverado": { 
                    "extra": {
                        "text":  `הכרת הרכב בלבד ומבחן שליטה למעט חייל בקבע/אע"צ הנדרשים בהכרת הרכב בלבד`
                    }
                },
                "tigris": {
                    "extra": combineExtras(commonExtras[1], commonExtras[2], commonExtras[3], commonExtras[8])
                }
            },
            "cargo-C1": {
                "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": " שעתיים כביש (יום/לילה)",
                }
            }, 
            "heavyCargo": {
               "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": "7 שעות כביש (יום/לילה)",
                },
                "oosh": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונדרשת לבצע הכשרה על אושקוש/מנוף/סולר/מים לאחר ההכשרה יש לבצע הכרת הרכב בלבד',
                    }
                },
                "rio": {
                    "extra": {
                        genericSentences: [9],
                    }
                },
                "tetra": {
                    "extra": {
                          genericSentences: [9],
                    }
                },
                "FMTV": {
                    "extra": {
                          genericSentences: [9],
                    }
                },
                "man+": {
                    "extra": {
                        genericSentences: [9],
                         "text": 'במידה ונהג לוחם/בט"ש עבר קורס פנתר מבצעי בבא"פ/בלנ"ם יבצע מבחן שליטה בלבד',
                    }
                },
            },
            "bus": {
                "extra": {
                    genericSentences: [0, 1, 2, 5, 10],
                    "text": "4 שעות כביש יום, שעה כביש לילה<br> במידה ונדרש לאחר ההכשרה לנהוג באוטובוס אחר יבצע הכרת הרכב בלבד"
                }
            }
        },
        "hammer": {
            "passangener": {
                "auto": {
                    "extra": {
                        "text": "הכרת הרכב ומבחן שליטה בלבד"
                    }
                },
                "menual": {
                    "extra": combineExtras(commonExtras[1], commonExtras[2]),
                }
            },
            "B": {
                "extra": combineExtras(commonExtras[1], commonExtras[2]),
                "rekston" : {
                    "extra" :  commonExtras[4],
                },
                "TH4X4": {
                    "extra" :  commonExtras[4],
                },
                "T4X4": {
                    "extra" :  commonExtras[4],
                },
                "D4X4": {
                    "extra" :  commonExtras[4],
                },
                "sunyang": {
                    "extra" :  commonExtras[4],
                },
                "davidManual": {
                    "extra" :  combineExtras(commonExtras[3], commonExtras[5]),
                },
                "davidAuto": {
                    "extra" :  combineExtras(commonExtras[3], commonExtras[5]),
                },
                "colorado4X4": {
                   "extra" :  commonExtras[4],
                },
                "silveradoB4X4": {
                    "extra" :  commonExtras[4],
                }
            },
            "multi-C1": {
                "extra": combineExtras(commonExtras[1], commonExtras[2]),
                "dodge3500": {
                    "extra": commonExtras[9]
                },
                "ford350": {
                    "extra": commonExtras[10]
                },
                "wolf1": {
                    "extra": combineExtras(commonExtras[3], commonExtras[7])
                },
                "wolf2": {
                    "extra": combineExtras(commonExtras[3], commonExtras[7])
                },
                "tigris": {
                    "extra": combineExtras(commonExtras[3], commonExtras[8])
                }
            },
            "cargo-C1": {
                "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": " שעתיים כביש (יום/לילה)",
                }
            }, 
            "heavyCargo": {
               "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": "7 שעות כביש (יום/לילה)",
                },
                "oosh": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונדרשת לבצע הכשרה על אושקוש/מנוף/סולר/מים לאחר ההכשרה יש לבצע הכרת הרכב בלבד',
                    }
                },
                "rio": {
                    "extra": {
                        genericSentences: [9],
                    }
                },
                "tetra": {
                    "extra": {
                          genericSentences: [9],
                    }
                },
                "FMTV": {
                    "extra": {
                          genericSentences: [9],
                    }
                },
                "man+": {
                    "extra": {
                        genericSentences: [9],
                         "text": 'במידה ונהג לוחם/בט"ש עבר קורס פנתר מבצעי בבא"פ/בלנ"ם יבצע מבחן שליטה בלבד',
                    }
                },
            },
            "bus": {
                "extra": {
                    genericSentences: [0, 1, 2, 5, 10],
                    "text": "4 שעות כביש יום, שעה כביש לילה<br> במידה ונדרש לאחר ההכשרה לנהוג באוטובוס אחר יבצע הכרת הרכב בלבד"
                }
            }
        },
        "wolf1": {
            "passangener": {
                "auto": {
                    "extra": {
                        "text": "הכרת הרכב ומבחן שליטה בלבד"
                    }
                },
                "menual": {
                    "extra": combineExtras(commonExtras[1], commonExtras[2]),
                }
            },
            "B": {
                "extra": combineExtras(commonExtras[1], commonExtras[2]),
                "rekston" : {
                    "extra" :  commonExtras[4],
                },
                "TH4X4": {
                    "extra" :  commonExtras[4],
                },
                "T4X4": {
                    "extra" :  commonExtras[4],
                },
                "D4X4": {
                    "extra" :  commonExtras[4],
                },
                "sunyang": {
                    "extra" :  commonExtras[4],
                },
                "davidManual": {
                    "extra" :  combineExtras(commonExtras[3], commonExtras[5]),
                },
                "davidAuto": {
                    "extra" :  combineExtras(commonExtras[3], commonExtras[5]),
                },
                "colorado4X4": {
                   "extra" :  commonExtras[4],
                },
                "silveradoB4X4": {
                    "extra" :  commonExtras[4],
                }
            },
            "multi-C1": {
                "extra": combineExtras(commonExtras[1], commonExtras[2]),
                "dodge3500": {
                    "extra": commonExtras[9]
                },
                "ford350": {
                    "extra": commonExtras[10]
                },
                "hammer": {
                    "extra": combineExtras(commonExtras[3], commonExtras[6])
                },
                "wolf2": {
                    "extra": combineExtras(commonExtras[3], commonExtras[7])
                },
                "tigris": {
                    "extra": combineExtras(commonExtras[3], commonExtras[8])
                }
            },
            "cargo-C1": {
                "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": " שעתיים כביש (יום/לילה)",
                }
            }, 
            "heavyCargo": {
               "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": "7 שעות כביש (יום/לילה)",
                },
                "oosh": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונדרשת לבצע הכשרה על אושקוש/מנוף/סולר/מים לאחר ההכשרה יש לבצע הכרת הרכב בלבד',
                    }
                },
                "rio": {
                    "extra": {
                        genericSentences: [9],
                    }
                },
                "tetra": {
                    "extra": {
                          genericSentences: [9],
                    }
                },
                "FMTV": {
                    "extra": {
                          genericSentences: [9],
                    }
                },
                "man+": {
                    "extra": {
                        genericSentences: [9],
                         "text": 'במידה ונהג לוחם/בט"ש עבר קורס פנתר מבצעי בבא"פ/בלנ"ם יבצע מבחן שליטה בלבד',
                    }
                },
            },
            "bus": {
                "extra": {
                    genericSentences: [0, 1, 2, 5, 10],
                    "text": "4 שעות כביש יום, שעה כביש לילה<br> במידה ונדרש לאחר ההכשרה לנהוג באוטובוס אחר יבצע הכרת הרכב בלבד"
                }
            }
        },
        "wolf2": {
            "passangener": {
                "auto": {
                    "extra": {
                        "text": "הכרת הרכב ומבחן שליטה בלבד"
                    }
                },
                "menual": {
                    "extra": combineExtras(commonExtras[1], commonExtras[2]),
                }
            },
            "B": {
                "extra": combineExtras(commonExtras[1], commonExtras[2]),
                "rekston" : {
                    "extra" :  commonExtras[4],
                },
                "TH4X4": {
                    "extra" :  commonExtras[4],
                },
                "T4X4": {
                    "extra" :  commonExtras[4],
                },
                "D4X4": {
                    "extra" :  commonExtras[4],
                },
                "sunyang": {
                    "extra" :  commonExtras[4],
                },
                "davidManual": {
                    "extra" :  combineExtras(commonExtras[3], commonExtras[5]),
                },
                "davidAuto": {
                    "extra" :  combineExtras(commonExtras[3], commonExtras[5]),
                },
                "colorado4X4": {
                   "extra" :  commonExtras[4],
                },
                "silveradoB4X4": {
                    "extra" :  commonExtras[4],
                }
            },
            "multi-C1": {
                "extra": combineExtras(commonExtras[1], commonExtras[2]),
                "dodge3500": {
                    "extra": commonExtras[9]
                },
                "ford350": {
                    "extra": commonExtras[10]
                },
                "hammer": {
                    "extra": combineExtras(commonExtras[3], commonExtras[6])
                },
                "wolf1": {
                    "extra": combineExtras(commonExtras[3], commonExtras[7])
                },
                "tigris": {
                    "extra": combineExtras(commonExtras[3], commonExtras[8])
                }
            },
            "cargo-C1": {
                "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": " שעתיים כביש (יום/לילה)",
                }
            }, 
            "heavyCargo": {
               "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": "7 שעות כביש (יום/לילה)",
                },
                "oosh": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונדרשת לבצע הכשרה על אושקוש/מנוף/סולר/מים לאחר ההכשרה יש לבצע הכרת הרכב בלבד',
                    }
                },
                "rio": {
                    "extra": {
                        genericSentences: [9],
                    }
                },
                "tetra": {
                    "extra": {
                          genericSentences: [9],
                    }
                },
                "FMTV": {
                    "extra": {
                          genericSentences: [9],
                    }
                },
                "man+": {
                    "extra": {
                        genericSentences: [9],
                         "text": 'במידה ונהג לוחם/בט"ש עבר קורס פנתר מבצעי בבא"פ/בלנ"ם יבצע מבחן שליטה בלבד',
                    }
                },
            },
            "bus": {
                "extra": {
                    genericSentences: [0, 1, 2, 5, 10],
                    "text": "4 שעות כביש יום, שעה כביש לילה<br> במידה ונדרש לאחר ההכשרה לנהוג באוטובוס אחר יבצע הכרת הרכב בלבד"
                }
            }
        },
        "sprinter": {
            "passangener": {
                "auto": {
                    "extra": {
                        "text": "הכרת הרכב ומבחן שליטה בלבד"
                    }
                },
                "menual": {
                    "extra": combineExtras(commonExtras[1], commonExtras[2]),
                }
            },
            "B": {
                "extra": combineExtras(commonExtras[1], commonExtras[2]),
                "rekston" : {
                    "extra" :  commonExtras[4],
                },
                "TH4X4": {
                    "extra" :  commonExtras[4],
                },
                "T4X4": {
                    "extra" :  commonExtras[4],
                },
                "D4X4": {
                    "extra" :  commonExtras[4],
                },
                "sunyang": {
                    "extra" :  commonExtras[4],
                },
                "davidManual": {
                    "extra" :  combineExtras(commonExtras[3], commonExtras[5]),
                },
                "davidAuto": {
                    "extra" :  combineExtras(commonExtras[3], commonExtras[5]),
                },
                "colorado4X4": {
                   "extra" :  commonExtras[4],
                },
                "silveradoB4X4": {
                    "extra" :  commonExtras[4],
                }
            },
            "multi-C1": {
                "extra": combineExtras(commonExtras[1], commonExtras[2]),
                "dodge3500": {
                    "extra": commonExtras[9]
                },
                "ford350": {
                    "extra": commonExtras[10]
                },
                "hammer": {
                    "extra": combineExtras(commonExtras[3], commonExtras[6])
                },
                "wolf1": {
                    "extra": combineExtras(commonExtras[3], commonExtras[7])
                },
                "wolf2": {
                    "extra": combineExtras(commonExtras[3], commonExtras[7])
                },
                "tigris": {
                    "extra": combineExtras(commonExtras[3], commonExtras[8])
                }
            },
            "cargo-C1": {
                "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": " שעתיים כביש (יום/לילה)",
                }
            }, 
            "heavyCargo": {
               "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": "7 שעות כביש (יום/לילה)",
                },
                "oosh": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונדרשת לבצע הכשרה על אושקוש/מנוף/סולר/מים לאחר ההכשרה יש לבצע הכרת הרכב בלבד',
                    }
                },
                "rio": {
                    "extra": {
                        genericSentences: [9],
                    }
                },
                "tetra": {
                    "extra": {
                          genericSentences: [9],
                    }
                },
                "FMTV": {
                    "extra": {
                          genericSentences: [9],
                    }
                },
                "man+": {
                    "extra": {
                        genericSentences: [9],
                         "text": 'במידה ונהג לוחם/בט"ש עבר קורס פנתר מבצעי בבא"פ/בלנ"ם יבצע מבחן שליטה בלבד',
                    }
                },
            },
            "bus": {
                "extra": {
                    genericSentences: [0, 1, 2, 5, 10],
                    "text": "4 שעות כביש יום, שעה כביש לילה<br> במידה ונדרש לאחר ההכשרה לנהוג באוטובוס אחר יבצע הכרת הרכב בלבד"
                }
            }
        },
        "silverado": {
            "passangener": {
                "auto": {
                    "extra": {
                        "text": "הכרת הרכב ומבחן שליטה בלבד"
                    }
                },
                "menual": {
                    "extra": combineExtras(commonExtras[1], commonExtras[2]),
                }
            },
            "B": {
                "extra": combineExtras(commonExtras[1], commonExtras[2]),
                "rekston" : {
                    "extra" :  commonExtras[4],
                },
                "TH4X4": {
                    "extra" :  commonExtras[4],
                },
                "T4X4": {
                    "extra" :  commonExtras[4],
                },
                "D4X4": {
                    "extra" :  commonExtras[4],
                },
                "sunyang": {
                    "extra" :  commonExtras[4],
                },
                "davidManual": {
                    "extra" :  combineExtras(commonExtras[3], commonExtras[5]),
                },
                "davidAuto": {
                    "extra" :  combineExtras(commonExtras[3], commonExtras[5]),
                },
                "colorado4X4": {
                   "extra" :  commonExtras[4],
                },
                "silveradoB4X4": {
                    "extra" :  commonExtras[4],
                }
            },
            "multi-C1": {
                // "extra": combineExtras(commonExtras[1], commonExtras[2]),
                "dodge3500": {
                    "extra": combineExtras(commonExtras[1], commonExtras[2], commonExtras[9])
                },
                "ford350": {
                    extra: {
                         "text": `הכרת הרכב ומבחן שליטה למעט חייל בקבע/אע"צ הנדרשים בהכרת הרכב בלבד <br> במידה ונדרשת לבצע הכשרה על פורד -350F אמבולנס לאחר החניכה יבוצע הכרת הרכב ומבחן שליטה`
                    }
                },
                "hammer": {
                    "extra": combineExtras(commonExtras[1], commonExtras[2], commonExtras[3], commonExtras[6])
                },
                "wolf1": {
                    "extra": combineExtras(commonExtras[1], commonExtras[2], commonExtras[3], commonExtras[7])
                },
                "wolf2": {
                    "extra": combineExtras(commonExtras[1], commonExtras[2], commonExtras[3], commonExtras[7])
                },
                "sprinter": {
                    "extra": combineExtras(commonExtras[1], commonExtras[2])
                },
                "tigris": {
                    "extra": combineExtras(commonExtras[1], commonExtras[2], commonExtras[3], commonExtras[8])
                }
            },
            "cargo-C1": {
                "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": " שעתיים כביש (יום/לילה)",
                }
            }, 
            "heavyCargo": {
               "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": "7 שעות כביש (יום/לילה)",
                },
                "oosh": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונדרשת לבצע הכשרה על אושקוש/מנוף/סולר/מים לאחר ההכשרה יש לבצע הכרת הרכב בלבד',
                    }
                },
                "rio": {
                    "extra": {
                        genericSentences: [9],
                    }
                },
                "tetra": {
                    "extra": {
                          genericSentences: [9],
                    }
                },
                "FMTV": {
                    "extra": {
                          genericSentences: [9],
                    }
                },
                "man+": {
                    "extra": {
                        genericSentences: [9],
                         "text": 'במידה ונהג לוחם/בט"ש עבר קורס פנתר מבצעי בבא"פ/בלנ"ם יבצע מבחן שליטה בלבד',
                    }
                },
            },
            "bus": {
                "extra": {
                    genericSentences: [0, 1, 2, 5, 10],
                    "text": "4 שעות כביש יום, שעה כביש לילה<br> במידה ונדרש לאחר ההכשרה לנהוג באוטובוס אחר יבצע הכרת הרכב בלבד"
                }
            }
        },
        "tigris": {
            "passangener": { 
                "auto": {
                    "extra": {
                        "text": "הכרת הרכב ומבחן שליטה בלבד"
                    }
                },
                "menual": {
                    "extra": combineExtras(commonExtras[1], commonExtras[2]),
                }
            },
            "B": {
                "extra": combineExtras(commonExtras[1], commonExtras[2]),
                "rekston" : {
                    "extra" :  commonExtras[4],
                },
                "TH4X4": {
                    "extra" :  commonExtras[4],
                },
                "T4X4": {
                    "extra" :  commonExtras[4],
                },
                "D4X4": {
                    "extra" :  commonExtras[4],
                },
                "sunyang": {
                    "extra" :  commonExtras[4],
                },
                "davidManual": {
                    "extra" :  combineExtras(commonExtras[3], commonExtras[5]),
                },
                "davidAuto": {
                    "extra" :  combineExtras(commonExtras[3], commonExtras[5]),
                },
                "colorado4X4": {
                   "extra" :  commonExtras[4],
                },
                "silveradoB4X4": {
                    "extra" :  commonExtras[4],
                }
            },
            "multi-C1": {
                "dodge3500": {
                    "extra": combineExtras(commonExtras[1], commonExtras[2], commonExtras[9])
                },
                "ford350": {
                    extra: {
                         "text": `הכרת הרכב ומבחן שליטה למעט חייל בקבע/אע"צ הנדרשים בהכרת הרכב בלבד <br> במידה ונדרשת לבצע הכשרה על פורד -350F אמבולנס לאחר החניכה יבוצע הכרת הרכב ומבחן שליטה`
                    }
                },
                "hammer": {
                    "extra": combineExtras(commonExtras[1], commonExtras[2], commonExtras[3], commonExtras[6])
                },
                "wolf1": {
                    "extra": combineExtras(commonExtras[1], commonExtras[2], commonExtras[3], commonExtras[7])
                },
                "wolf2": {
                    "extra": combineExtras(commonExtras[1], commonExtras[2], commonExtras[3], commonExtras[7])
                },
                "sprinter": {
                    "extra": combineExtras(commonExtras[1], commonExtras[2])
                },
                "silverado": {
                    "extra": combineExtras(commonExtras[1], commonExtras[2])
                }
            },
            "cargo-C1": {
                "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": " שעתיים כביש (יום/לילה)",
                }
            }, 
            "heavyCargo": {
               "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": "7 שעות כביש (יום/לילה)",
                },
                "oosh": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונדרשת לבצע הכשרה על אושקוש/מנוף/סולר/מים לאחר ההכשרה יש לבצע הכרת הרכב בלבד',
                    }
                },
                "rio": {
                    "extra": {
                        genericSentences: [9],
                    }
                },
                "tetra": {
                    "extra": {
                          genericSentences: [9],
                    }
                },
                "FMTV": {
                    "extra": {
                          genericSentences: [9],
                    }
                },
                "man+": {
                    "extra": {
                        genericSentences: [9],
                         "text": 'במידה ונהג לוחם/בט"ש עבר קורס פנתר מבצעי בבא"פ/בלנ"ם יבצע מבחן שליטה בלבד',
                    }
                },
            },
            "bus": {
                "extra": {
                    genericSentences: [0, 1, 2, 5, 10],
                    "text": "4 שעות כביש יום, שעה כביש לילה<br> במידה ונדרש לאחר ההכשרה לנהוג באוטובוס אחר יבצע הכרת הרכב בלבד"
                }
            }
        }
    },
    "cargo-C1": {
        "inter": {
            "passangener": {
                "auto": {
                    "extra": {
                        "text": "הכרת הרכב ומבחן שליטה בלבד"
                    }
                },
                "menual": {
                    "extra": combineExtras(commonExtras[1], commonExtras[2]),
                }
            },
            "B": {
                "extra": {
                     genericSentences: [0, 1, 2, 5, 11],
                     "text": " שעת חניכה בכביש יום, שעת חניכה בשטח (יום/לילה)",
                },
                "TH4X4": {
                    "extra" :  commonExtras[4],
                },
                "T4X4": {
                    "extra" :  commonExtras[4],
                },
                "D4X4": {
                    "extra" :  commonExtras[4],
                },
                "sunyang": {
                    "extra" :  commonExtras[4],
                },
                "volkswagen":{
                    "extra" :  commonExtras[4],
                },
                "davidManual": {
                    "extra" :  combineExtras(commonExtras[3], commonExtras[5]),
                },
                "davidAuto": {
                    "extra" :  combineExtras(commonExtras[3], commonExtras[5]),
                },
                "colorado4X4": {
                   "extra" :  commonExtras[4],
                },
                "silveradoB4X4": {
                    "extra" :  commonExtras[4],
                }
            },
            "multi-C1": {
                "extra": {
                     genericSentences: [0, 1, 2, 5, 11],
                     "text": " שעת חניכה בכביש יום, שעת חניכה בשטח (יום/לילה)",
                },
                "dodge3500": {
                    "extra": commonExtras[9]
                },
                "ford350": {
                    "extra": commonExtras[10]
                },
                "hammer": {
                    "extra": combineExtras(commonExtras[3], commonExtras[6])
                },
                "wolf1": {
                    "extra": combineExtras(commonExtras[3], commonExtras[7])
                },
                "wolf2": {
                    "extra": combineExtras(commonExtras[3], commonExtras[7])
                },
                "silverado": {
                    "extra": commonExtras[3]
                },
                "tigris": {
                    "extra": combineExtras(commonExtras[3], commonExtras[8])
                }
            },
            "cargo-C1": {
                "fordInter": {
                    "extra": {
                        "text": "הכרת הרכב ומבחן שליטה"
                    }
                    
                },
                "man": {
                    "extra": combineExtras(commonExtras[1], commonExtras[2])
                },
                "daf": {
                    "extra": combineExtras(commonExtras[1], commonExtras[2])
                }
            }, 
            "heavyCargo": {
               "extra": {
                     genericSentences: [0, 1, 2, 5],
                },
                "oosh": {
                    "extra": {
                        genericSentences: [9, 11],
                        "text": '6 שעות כביש (יום/לילה), שעת שטח (יום/לילה) <br> במידה ונדרשת לבצע הכשרה על אושקוש/מנוף/סולר/מים לאחר ההכשרה יש לבצע הכרת הרכב בלבד',
                    }
                },
                "rio": {
                    "extra": {
                        genericSentences: [9, 11],
                        "text": "6 שעות כביש (יום/לילה), שעת שטח (יום/לילה) "
                    }
                },
                "tetra": {
                    "extra": {
                          genericSentences: [9, 11],
                          "text": "6 שעות כביש (יום/לילה), שעת שטח (יום/לילה)"
                    }
                },
                "FMTV": {
                    "extra": {
                          genericSentences: [9, 11],
                          "text": "6 שעות כביש (יום/לילה), שעת שטח (יום/לילה)"
                    }
                },
                "truk": {
                    "extra": {
                          genericSentences: [10],
                          "text": "7 שעות כביש (יום/לילה)"
                    }
                },
                "dragger": {
                    "extra": {
                          genericSentences: [10],
                          "text": "7 שעות כביש (יום/לילה)"
                    }
                },
                "man+": {
                    "extra": {
                        genericSentences: [9, 11],
                         "text": '6 שעות כביש (יום/לילה), שעת שטח (יום/לילה) <br>במידה ונהג לוחם/בט"ש עבר קורס פנתר מבצעי בבא"פ/בלנ"ם יבצע מבחן שליטה בלבד',
                    }
                },
            },
            "bus": {
                "extra": {
                    genericSentences: [0, 1, 2, 5, 10],
                    "text": "4 שעות כביש יום, שעה כביש לילה<br> במידה ונדרש לאחר ההכשרה לנהוג באוטובוס אחר יבצע הכרת הרכב בלבד"
                }
            }
        },
        "fordInter": {
           "passangener": {
                "auto": {
                    "extra": {
                        "text": "הכרת הרכב ומבחן שליטה בלבד"
                    }
                },
                "menual": {
                    "extra": combineExtras(commonExtras[1], commonExtras[2]),
                }
            },
            "B": {
                "extra": {
                     genericSentences: [0, 1, 2, 5, 11],
                     "text": " שעת חניכה בכביש יום, שעת חניכה בשטח (יום/לילה)",
                },
                "TH4X4": {
                    "extra" :  commonExtras[4],
                },
                "T4X4": {
                    "extra" :  commonExtras[4],
                },
                "D4X4": {
                    "extra" :  commonExtras[4],
                },
                "sunyang": {
                    "extra" :  commonExtras[4],
                },
                "sunyang":{
                    "extra" :  commonExtras[4],
                },
                "davidManual": {
                    "extra" :  combineExtras(commonExtras[3], commonExtras[5]),
                },
                "davidAuto": {
                    "extra" :  combineExtras(commonExtras[3], commonExtras[5]),
                },
                "colorado4X4": {
                   "extra" :  commonExtras[4],
                },
                "silveradoB4X4": {
                    "extra" :  commonExtras[4],
                }
            },
            "multi-C1": {
                "extra": {
                     genericSentences: [0, 1, 2, 5, 11],
                     "text": " שעת חניכה בכביש יום, שעת חניכה בשטח (יום/לילה)",
                },
                "dodge3500": {
                    "extra": commonExtras[9]
                },
                "ford350": {
                    "extra": commonExtras[10]
                },
                "hammer": {
                    "extra": combineExtras(commonExtras[3], commonExtras[6])
                },
                "wolf1": {
                    "extra": combineExtras(commonExtras[3], commonExtras[7])
                },
                "wolf2": {
                    "extra": combineExtras(commonExtras[3], commonExtras[7])
                },
                "silverado": {
                    "extra": commonExtras[3]
                },
                "tigris": {
                    "extra": combineExtras(commonExtras[3], commonExtras[8])
                }
            },
            "cargo-C1": {
                    "extra": combineExtras(commonExtras[1], commonExtras[2])
            }, 
            "heavyCargo": {
               "extra": {
                     genericSentences: [0, 1, 2, 5],
                },
                "oosh": {
                    "extra": {
                        genericSentences: [9, 11],
                        "text": '6 שעות כביש (יום/לילה), שעת שטח (יום/לילה) <br> במידה ונדרשת לבצע הכשרה על אושקוש/מנוף/סולר/מים לאחר ההכשרה יש לבצע הכרת הרכב בלבד',
                    }
                },
                "rio": {
                    "extra": {
                        genericSentences: [9, 11],
                        "text": "6 שעות כביש (יום/לילה), שעת שטח (יום/לילה) "
                    }
                },
                "tetra": {
                    "extra": {
                          genericSentences: [9, 11],
                          "text": "6 שעות כביש (יום/לילה), שעת שטח (יום/לילה)"
                    }
                },
                "FMTV": {
                    "extra": {
                          genericSentences: [9, 11],
                          "text": "6 שעות כביש (יום/לילה), שעת שטח (יום/לילה)"
                    }
                },
                "truk": {
                    "extra": {
                          genericSentences: [10],
                          "text": "7 שעות כביש (יום/לילה)"
                    }
                },
                "dragger": {
                    "extra": {
                          genericSentences: [10],
                          "text": "7 שעות כביש (יום/לילה)"
                    }
                },
                "man+": {
                    "extra": {
                        genericSentences: [9, 11],
                         "text": '6 שעות כביש (יום/לילה), שעת שטח (יום/לילה) <br>במידה ונהג לוחם/בט"ש עבר קורס פנתר מבצעי בבא"פ/בלנ"ם יבצע מבחן שליטה בלבד',
                    }
                },
            },
            "bus": {
                "extra": {
                    genericSentences: [0, 1, 2, 5, 10],
                    "text": "4 שעות כביש יום, שעה כביש לילה<br> במידה ונדרש לאחר ההכשרה לנהוג באוטובוס אחר יבצע הכרת הרכב בלבד"
                }
            }
        },
        "man": {
            "passangener": {
                "auto": {
                    "extra": {
                        "text": "הכרת הרכב ומבחן שליטה בלבד"
                    }
                },
                "menual": {
                    "extra": combineExtras(commonExtras[1], commonExtras[2]),
                }
            },
            "B": {
                "extra": {
                     genericSentences: [0, 1, 2, 5, 11],
                     "text": " שעת חניכה בכביש יום, שעת חניכה בשטח (יום/לילה)",
                },
                "TH4X4": {
                    "extra" :  commonExtras[4],
                },
                "T4X4": {
                    "extra" :  commonExtras[4],
                },
                "D4X4": {
                    "extra" :  commonExtras[4],
                },
                "sunyang": {
                    "extra" :  commonExtras[4],
                },
                "sunyang":{
                    "extra" :  commonExtras[4],
                },
                "davidManual": {
                    "extra" :  combineExtras(commonExtras[3], commonExtras[5]),
                },
                "davidAuto": {
                    "extra" :  combineExtras(commonExtras[3], commonExtras[5]),
                },
                "colorado4X4": {
                   "extra" :  commonExtras[4],
                },
                "silveradoB4X4": {
                    "extra" :  commonExtras[4],
                }
            },
            "multi-C1": {
                "extra": {
                     genericSentences: [0, 1, 2, 5, 11],
                     "text": " שעת חניכה בכביש יום, שעת חניכה בשטח (יום/לילה)",
                },
                "dodge3500": {
                    "extra": commonExtras[9]
                },
                "ford350": {
                    "extra": commonExtras[10]
                },
                "hammer": {
                    "extra": combineExtras(commonExtras[3], commonExtras[6])
                },
                "wolf1": {
                    "extra": combineExtras(commonExtras[3], commonExtras[7])
                },
                "wolf2": {
                    "extra": combineExtras(commonExtras[3], commonExtras[7])
                },
                "silverado": {
                    "extra": commonExtras[3]
                },
                "tigris": {
                    "extra": combineExtras(commonExtras[3], commonExtras[8])
                }
            },
            "cargo-C1": {
                    "extra": combineExtras(commonExtras[1], commonExtras[2])
            }, 
            "heavyCargo": {
               "extra": {
                     genericSentences: [0, 1, 2, 5],
                },
                "oosh": {
                    "extra": {
                        genericSentences: [9, 11],
                        "text": '6 שעות כביש (יום/לילה), שעת שטח (יום/לילה) <br> במידה ונדרשת לבצע הכשרה על אושקוש/מנוף/סולר/מים לאחר ההכשרה יש לבצע הכרת הרכב בלבד',
                    }
                },
                "rio": {
                    "extra": {
                        genericSentences: [9, 11],
                        "text": "6 שעות כביש (יום/לילה), שעת שטח (יום/לילה) "
                    }
                },
                "tetra": {
                    "extra": {
                          genericSentences: [9, 11],
                          "text": "6 שעות כביש (יום/לילה), שעת שטח (יום/לילה)"
                    }
                },
                "FMTV": {
                    "extra": {
                          genericSentences: [9, 11],
                          "text": "6 שעות כביש (יום/לילה), שעת שטח (יום/לילה)"
                    }
                },
                "truk": {
                    "extra": {
                          genericSentences: [10],
                          "text": "7 שעות כביש (יום/לילה)"
                    }
                },
                "dragger": {
                    "extra": {
                          genericSentences: [10],
                          "text": "7 שעות כביש (יום/לילה)"
                    }
                },
                "man+": {
                    "extra": {
                        genericSentences: [9, 11],
                         "text": '6 שעות כביש (יום/לילה), שעת שטח (יום/לילה) <br>במידה ונהג לוחם/בט"ש עבר קורס פנתר מבצעי בבא"פ/בלנ"ם יבצע מבחן שליטה בלבד',
                    }
                },
            },
            "bus": {
                "extra": {
                    genericSentences: [0, 1, 2, 5, 10],
                    "text": "4 שעות כביש יום, שעה כביש לילה<br> במידה ונדרש לאחר ההכשרה לנהוג באוטובוס אחר יבצע הכרת הרכב בלבד"
                }
            }
        },
        "daf": {
            "passangener": {
                "auto": {
                    "extra": {
                        "text": "הכרת הרכב ומבחן שליטה בלבד"
                    }
                },
                "menual": {
                    "extra": combineExtras(commonExtras[1], commonExtras[2]),
                }
            },
            "B": {
                "extra": {
                     genericSentences: [0, 1, 2, 5, 11],
                     "text": " שעת חניכה בכביש יום, שעת חניכה בשטח (יום/לילה)",
                },
                "TH4X4": {
                    "extra" :  commonExtras[4],
                },
                "T4X4": {
                    "extra" :  commonExtras[4],
                },
                "D4X4": {
                    "extra" :  commonExtras[4],
                },
                "sunyang": {
                    "extra" :  commonExtras[4],
                },
                "sunyang":{
                    "extra" :  commonExtras[4],
                },
                "davidManual": {
                    "extra" :  combineExtras(commonExtras[3], commonExtras[5]),
                },
                "davidAuto": {
                    "extra" :  combineExtras(commonExtras[3], commonExtras[5]),
                },
                "colorado4X4": {
                   "extra" :  commonExtras[4],
                },
                "silveradoB4X4": {
                    "extra" :  commonExtras[4],
                }
            },
            "multi-C1": {
                "extra": {
                     genericSentences: [0, 1, 2, 5, 11],
                     "text": " שעת חניכה בכביש יום, שעת חניכה בשטח (יום/לילה)",
                },
                "dodge3500": {
                    "extra": commonExtras[9]
                },
                "ford350": {
                    "extra": commonExtras[10]
                },
                "hammer": {
                    "extra": combineExtras(commonExtras[3], commonExtras[6])
                },
                "wolf1": {
                    "extra": combineExtras(commonExtras[3], commonExtras[7])
                },
                "wolf2": {
                    "extra": combineExtras(commonExtras[3], commonExtras[7])
                },
                "silverado": {
                    "extra": commonExtras[3]
                },
                "tigris": {
                    "extra": combineExtras(commonExtras[3], commonExtras[8])
                }
            },
            "cargo-C1": {
                    "extra": combineExtras(commonExtras[1], commonExtras[2])
            }, 
            "heavyCargo": {
               "extra": {
                     genericSentences: [0, 1, 2, 5],
                },
                "oosh": {
                    "extra": {
                        genericSentences: [9, 11],
                        "text": '6 שעות כביש (יום/לילה), שעת שטח (יום/לילה) <br> במידה ונדרשת לבצע הכשרה על אושקוש/מנוף/סולר/מים לאחר ההכשרה יש לבצע הכרת הרכב בלבד',
                    }
                },
                "rio": {
                    "extra": {
                        genericSentences: [9, 11],
                        "text": "6 שעות כביש (יום/לילה), שעת שטח (יום/לילה) "
                    }
                },
                "tetra": {
                    "extra": {
                          genericSentences: [9, 11],
                          "text": "6 שעות כביש (יום/לילה), שעת שטח (יום/לילה)"
                    }
                },
                "FMTV": {
                    "extra": {
                          genericSentences: [9, 11],
                          "text": "6 שעות כביש (יום/לילה), שעת שטח (יום/לילה)"
                    }
                },
                "truk": {
                    "extra": {
                          genericSentences: [10],
                          "text": "7 שעות כביש (יום/לילה)"
                    }
                },
                "dragger": {
                    "extra": {
                          genericSentences: [10],
                          "text": "7 שעות כביש (יום/לילה)"
                    }
                },
                "man+": {
                    "extra": {
                        genericSentences: [9, 11],
                         "text": '6 שעות כביש (יום/לילה), שעת שטח (יום/לילה) <br>במידה ונהג לוחם/בט"ש עבר קורס פנתר מבצעי בבא"פ/בלנ"ם יבצע מבחן שליטה בלבד',
                    }
                },
            },
            "bus": {
                "extra": {
                    genericSentences: [0, 1, 2, 5, 10],
                    "text": "4 שעות כביש יום, שעה כביש לילה<br> במידה ונדרש לאחר ההכשרה לנהוג באוטובוס אחר יבצע הכרת הרכב בלבד"
                }
            }
        }
    },
    "heavyCargo": {
        "oosh": {
            "passangener": {
                "auto": {
                    "extra": {
                        "text": "הכרת הרכב ומבחן שליטה בלבד"
                    }
                },
                "menual": {
                    "extra": combineExtras(commonExtras[1], commonExtras[2]),
                }
            },
            "B": {
                "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": " שעת חניכה בכביש יום",
                },
                "TH4X4": {
                    "extra" :  commonExtras[4],
                },
                "T4X4": {
                    "extra" :  commonExtras[4],
                },
                "D4X4": {
                    "extra" :  commonExtras[4],
                },
                "sunyang": {
                    "extra" :  commonExtras[4],
                },
                "volkswagen":{
                    "extra" :  commonExtras[4],
                },
                "davidManual": {
                    "extra" :  combineExtras(commonExtras[3], commonExtras[5]),
                },
                "davidAuto": {
                    "extra" :  combineExtras(commonExtras[3], commonExtras[5]),
                },
                "colorado4X4": {
                   "extra" :  commonExtras[4],
                },
                "silveradoB4X4": {
                    "extra" :  commonExtras[4],
                }
            },
            "multi-C1": {
                "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": " שעת חניכה בכביש יום",
                },
                "dodge3500": {
                    "extra": commonExtras[9]
                },
                "ford350": {
                    "extra": commonExtras[10]
                },
                "hammer": {
                    "extra": combineExtras(commonExtras[3], commonExtras[6])
                },
                "wolf1": {
                    "extra": combineExtras(commonExtras[3], commonExtras[7])
                },
                "wolf2": {
                    "extra": combineExtras(commonExtras[3], commonExtras[7])
                },
                "tigris": {
                    "extra": combineExtras(commonExtras[3], commonExtras[8])
                }
            },
            "cargo-C1": {
                "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": " שעה חניכה בכביש יום",
                }
            }, 
            "heavyCargo": {
               "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": " שעה חניכה בכביש יום",
                },
                "man+": {
                    "extra": {
                        genericSentences: [9],
                         "text": '6 שעות כביש (יום/לילה), שעת שטח (יום/לילה) <br>במידה ונהג לוחם/בט"ש עבר קורס פנתר מבצעי בבא"פ/בלנ"ם יבצע מבחן שליטה בלבד',
                    }
                },
            },
            "bus": {
                "extra": {
                    genericSentences: [0, 1, 2, 5, 10],
                    "text": "4 שעות כביש יום, שעה כביש לילה<br> במידה ונדרש לאחר ההכשרה לנהוג באוטובוס אחר יבצע הכרת הרכב בלבד"
                }
            }
        },
        "rio": {
            "passangener": {
                "extra": {
                    "text": "הכרת הרכב ומבחן שליטה בלבד"
                }
            },
            "B": {
                "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": " שעת חניכה בכביש יום",
                },
                "TH4X4": {
                    "extra" :  commonExtras[4],
                },
                "T4X4": {
                    "extra" :  commonExtras[4],
                },
                "D4X4": {
                    "extra" :  commonExtras[4],
                },
                "sunyang": {
                    "extra" :  commonExtras[4],
                },
                "volkswagen":{
                    "extra" :  commonExtras[4],
                },
                "davidManual": {
                    "extra" :  combineExtras(commonExtras[3], commonExtras[5]),
                },
                "davidAuto": {
                    "extra" :  combineExtras(commonExtras[3], commonExtras[5]),
                },
                "colorado4X4": {
                   "extra" :  commonExtras[4],
                },
                "silveradoB4X4": {
                    "extra" :  commonExtras[4],
                }
            },
            "multi-C1": {
                "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": " שעת חניכה בכביש יום",
                },
                "dodge3500": {
                    "extra": commonExtras[9]
                },
                "ford350": {
                    "extra": commonExtras[10]
                },
                "hammer": {
                    "extra": combineExtras(commonExtras[3], commonExtras[6])
                },
                "wolf1": {
                    "extra": combineExtras(commonExtras[3], commonExtras[7])
                },
                "wolf2": {
                    "extra": combineExtras(commonExtras[3], commonExtras[7])
                },
                "tigris": {
                    "extra": combineExtras(commonExtras[3], commonExtras[8])
                }
            },
            "cargo-C1": {
                "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": " שעה חניכה בכביש יום",
                }
            }, 
            "heavyCargo": {
               "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": " שעה חניכה בכביש יום",
                },
                "oosh": {
                    "extra": {
                        "text": '6 שעות כביש (יום/לילה), שעת שטח (יום/לילה) <br> במידה ונדרשת לבצע הכשרה על אושקוש/מנוף/סולר/מים לאחר ההכשרה יש לבצע הכרת הרכב בלבד',
                    }
                },
                "man+": {
                    "extra": {
                        genericSentences: [9],
                         "text": '6 שעות כביש (יום/לילה), שעת שטח (יום/לילה) <br>במידה ונהג לוחם/בט"ש עבר קורס פנתר מבצעי בבא"פ/בלנ"ם יבצע מבחן שליטה בלבד',
                    }
                },
            },
            "bus": {
                "extra": {
                    genericSentences: [0, 1, 2, 5, 10],
                    "text": "4 שעות כביש יום, שעה כביש לילה<br> במידה ונדרש לאחר ההכשרה לנהוג באוטובוס אחר יבצע הכרת הרכב בלבד"
                }
            }
        },
        "tetra": {
            "passangener": {
                "auto": {
                    "extra": {
                        "text": "הכרת הרכב ומבחן שליטה בלבד"
                    }
                },
                "menual": {
                    "extra": combineExtras(commonExtras[1], commonExtras[2]),
                }
            },
            "B": {
                "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": " שעת חניכה בכביש יום",
                },
                "TH4X4": {
                    "extra" :  commonExtras[4],
                },
                "T4X4": {
                    "extra" :  commonExtras[4],
                },
                "D4X4": {
                    "extra" :  commonExtras[4],
                },
                "sunyang": {
                    "extra" :  commonExtras[4],
                },
                "volkswagen":{
                    "extra" :  commonExtras[4],
                },
                "davidManual": {
                    "extra" :  combineExtras(commonExtras[3], commonExtras[5]),
                },
                "davidAuto": {
                    "extra" :  combineExtras(commonExtras[3], commonExtras[5]),
                },
                "colorado4X4": {
                   "extra" :  commonExtras[4],
                },
                "silveradoB4X4": {
                    "extra" :  commonExtras[4],
                }
            },
            "multi-C1": {
                "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": " שעת חניכה בכביש יום",
                },
                "dodge3500": {
                    "extra": commonExtras[9]
                },
                "ford350": {
                    "extra": commonExtras[10]
                },
                "hammer": {
                    "extra": combineExtras(commonExtras[3], commonExtras[6])
                },
                "wolf1": {
                    "extra": combineExtras(commonExtras[3], commonExtras[7])
                },
                "wolf2": {
                    "extra": combineExtras(commonExtras[3], commonExtras[7])
                },
                "tigris": {
                    "extra": combineExtras(commonExtras[3], commonExtras[8])
                }
            },
            "cargo-C1": {
                "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": " שעה חניכה בכביש יום",
                }
            }, 
            "heavyCargo": {
               "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": " שעה חניכה בכביש יום",
                },
                "oosh": {
                    "extra": {
                        genericSentences: [9],
                        "text": '6 שעות כביש (יום/לילה), שעת שטח (יום/לילה) <br> במידה ונדרשת לבצע הכשרה על אושקוש/מנוף/סולר/מים לאחר ההכשרה יש לבצע הכרת הרכב בלבד',
                    }
                },
                "rio": {
                    "extra": {
                        genericSentences: [9],
                    }
                },
                "FMTV": {
                    "extra": {
                        genericSentences: [9],
                    }
                },
                "man+": {
                    "extra": {
                        genericSentences: [9],
                         "text": '6 שעות כביש (יום/לילה), שעת שטח (יום/לילה) <br>במידה ונהג לוחם/בט"ש עבר קורס פנתר מבצעי בבא"פ/בלנ"ם יבצע מבחן שליטה בלבד',
                    }
                },
            },
            "bus": {
                "extra": {
                    genericSentences: [0, 1, 2, 5, 10],
                    "text": "4 שעות כביש יום, שעה כביש לילה<br> במידה ונדרש לאחר ההכשרה לנהוג באוטובוס אחר יבצע הכרת הרכב בלבד"
                }
            }
        },
        "FMTV": {
            "passangener": {
                "auto": {
                    "extra": {
                        "text": "הכרת הרכב ומבחן שליטה בלבד"
                    }
                },
                "menual": {
                    "extra": combineExtras(commonExtras[1], commonExtras[2]),
                }
            },
            "B": {
                "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": " שעת חניכה בכביש יום",
                },
                "TH4X4": {
                    "extra" :  commonExtras[4],
                },
                "T4X4": {
                    "extra" :  commonExtras[4],
                },
                "D4X4": {
                    "extra" :  commonExtras[4],
                },
                "sunyang": {
                    "extra" :  commonExtras[4],
                },
                "volkswagen":{
                    "extra" :  commonExtras[4],
                },
                "davidManual": {
                    "extra" :  combineExtras(commonExtras[3], commonExtras[5]),
                },
                "davidAuto": {
                    "extra" :  combineExtras(commonExtras[3], commonExtras[5]),
                },
                "colorado4X4": {
                   "extra" :  commonExtras[4],
                },
                "silveradoB4X4": {
                    "extra" :  commonExtras[4],
                }
            },
            "multi-C1": {
                "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": " שעת חניכה בכביש יום",
                },
                "dodge3500": {
                    "extra": commonExtras[9]
                },
                "ford350": {
                    "extra": commonExtras[10]
                },
                "hammer": {
                    "extra": combineExtras(commonExtras[3], commonExtras[6])
                },
                "wolf1": {
                    "extra": combineExtras(commonExtras[3], commonExtras[7])
                },
                "wolf2": {
                    "extra": combineExtras(commonExtras[3], commonExtras[7])
                },
                "tigris": {
                    "extra": combineExtras(commonExtras[3], commonExtras[8])
                }
            },
            "cargo-C1": {
                "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": " שעה חניכה בכביש יום",
                }
            }, 
            "heavyCargo": {
               "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": " שעה חניכה בכביש יום",
                },
                "oosh": {
                    "extra": {
                        genericSentences: [9],
                        "text": '6 שעות כביש (יום/לילה), שעת שטח (יום/לילה) <br> במידה ונדרשת לבצע הכשרה על אושקוש/מנוף/סולר/מים לאחר ההכשרה יש לבצע הכרת הרכב בלבד',
                    }
                },
                "rio": {
                    "extra": {
                        genericSentences: [9],
                    }
                },
                "FMTV": {
                    "extra": {
                        genericSentences: [9],
                    }
                },
                "man+": {
                    "extra": {
                        genericSentences: [9],
                         "text": '6 שעות כביש (יום/לילה), שעת שטח (יום/לילה) <br>במידה ונהג לוחם/בט"ש עבר קורס פנתר מבצעי בבא"פ/בלנ"ם יבצע מבחן שליטה בלבד',
                    }
                },
            },
            "bus": {
                "extra": {
                    genericSentences: [0, 1, 2, 5, 10],
                    "text": "4 שעות כביש יום, שעה כביש לילה<br> במידה ונדרש לאחר ההכשרה לנהוג באוטובוס אחר יבצע הכרת הרכב בלבד"
                }
            }
        },
        "truk": {
            "passangener": {
                "auto": {
                    "extra": {
                        "text": "הכרת הרכב ומבחן שליטה בלבד"
                    }
                },
                "menual": {
                    "extra": combineExtras(commonExtras[1], commonExtras[2]),
                }
            },
            "B": {
                "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": " שעת חניכה בכביש יום",
                },
                "TH4X4": {
                    "extra" :  commonExtras[4],
                },
                "T4X4": {
                    "extra" :  commonExtras[4],
                },
                "D4X4": {
                    "extra" :  commonExtras[4],
                },
                "sunyang": {
                    "extra" :  commonExtras[4],
                },
                "volkswagen":{
                    "extra" :  commonExtras[4],
                },
                "davidManual": {
                    "extra" :  combineExtras(commonExtras[3], commonExtras[5]),
                },
                "davidAuto": {
                    "extra" :  combineExtras(commonExtras[3], commonExtras[5]),
                },
                "colorado4X4": {
                   "extra" :  commonExtras[4],
                },
                "silveradoB4X4": {
                    "extra" :  commonExtras[4],
                }
            },
            "multi-C1": {
                "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": " שעת חניכה בכביש יום",
                },
                "dodge3500": {
                    "extra": commonExtras[9]
                },
                "ford350": {
                    "extra": commonExtras[10]
                },
                "hammer": {
                    "extra": combineExtras(commonExtras[3], commonExtras[6])
                },
                "wolf1": {
                    "extra": combineExtras(commonExtras[3], commonExtras[7])
                },
                "wolf2": {
                    "extra": combineExtras(commonExtras[3], commonExtras[7])
                },
                "tigris": {
                    "extra": combineExtras(commonExtras[3], commonExtras[8])
                }
            },
            "cargo-C1": {
                "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": " שעה חניכה בכביש יום",
                }
            }, 
            "heavyCargo": {
               "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": " שעה חניכה בכביש יום",
                },
                "oosh": {
                    "extra": {
                        "text": '6 שעות כביש (יום/לילה), שעת שטח (יום/לילה) <br> במידה ונדרשת לבצע הכשרה על אושקוש/מנוף/סולר/מים לאחר ההכשרה יש לבצע הכרת הרכב בלבד',
                    }
                },
                "man+": {
                    "extra": {
                        genericSentences: [9],
                         "text": '6 שעות כביש (יום/לילה), שעת שטח (יום/לילה) <br>במידה ונהג לוחם/בט"ש עבר קורס פנתר מבצעי בבא"פ/בלנ"ם יבצע מבחן שליטה בלבד',
                    }
                },
            },
            "bus": {
                "extra": {
                    genericSentences: [0, 1, 2, 5, 10],
                    "text": "4 שעות כביש יום, שעה כביש לילה<br> במידה ונדרש לאחר ההכשרה לנהוג באוטובוס אחר יבצע הכרת הרכב בלבד"
                }
            }
        },
        "dragger": {
            "passangener": {
                "auto": {
                    "extra": {
                        "text": "הכרת הרכב ומבחן שליטה בלבד"
                    }
                },
                "menual": {
                    "extra": combineExtras(commonExtras[1], commonExtras[2]),
                }
            },
            "B": {
                "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": " שעת חניכה בכביש יום",
                },
                "TH4X4": {
                    "extra" :  commonExtras[4],
                },
                "T4X4": {
                    "extra" :  commonExtras[4],
                },
                "D4X4": {
                    "extra" :  commonExtras[4],
                },
                "sunyang": {
                    "extra" :  commonExtras[4],
                },
                "volkswagen":{
                    "extra" :  commonExtras[4],
                },
                "davidManual": {
                    "extra" :  combineExtras(commonExtras[3], commonExtras[5]),
                },
                "davidAuto": {
                    "extra" :  combineExtras(commonExtras[3], commonExtras[5]),
                },
                "colorado4X4": {
                   "extra" :  commonExtras[4],
                },
                "silveradoB4X4": {
                    "extra" :  commonExtras[4],
                }
            },
            "multi-C1": {
                "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": " שעת חניכה בכביש יום",
                },
                "dodge3500": {
                    "extra": commonExtras[9]
                },
                "ford350": {
                    "extra": commonExtras[10]
                },
                "hammer": {
                    "extra": combineExtras(commonExtras[3], commonExtras[6])
                },
                "wolf1": {
                    "extra": combineExtras(commonExtras[3], commonExtras[7])
                },
                "wolf2": {
                    "extra": combineExtras(commonExtras[3], commonExtras[7])
                },
                "tigris": {
                    "extra": combineExtras(commonExtras[3], commonExtras[8])
                }
            },
            "cargo-C1": {
                "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": " שעה חניכה בכביש יום",
                }
            }, 
            "heavyCargo": {
               "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": " שעה חניכה בכביש יום",
                },
                "oosh": {
                    "extra": {
                        "text": '6 שעות כביש (יום/לילה), שעת שטח (יום/לילה) <br> במידה ונדרשת לבצע הכשרה על אושקוש/מנוף/סולר/מים לאחר ההכשרה יש לבצע הכרת הרכב בלבד',
                    }
                },
                "truk": {
                    "extra": {
                        genericSentences: [9],
                    }
                },
                "man+": {
                    "extra": {
                        genericSentences: [9],
                         "text": '6 שעות כביש (יום/לילה), שעת שטח (יום/לילה) <br>במידה ונהג לוחם/בט"ש עבר קורס פנתר מבצעי בבא"פ/בלנ"ם יבצע מבחן שליטה בלבד',
                    }
                },
            },
            "bus": {
                "extra": {
                    genericSentences: [0, 1, 2, 5, 10],
                    "text": "4 שעות כביש יום, שעה כביש לילה<br> במידה ונדרש לאחר ההכשרה לנהוג באוטובוס אחר יבצע הכרת הרכב בלבד"
                }
            }
        },
        "man+": {
            "passangener": {
                "auto": {
                    "extra": {
                        "text": "הכרת הרכב ומבחן שליטה בלבד"
                    }
                },
                "menual": {
                    "extra": combineExtras(commonExtras[1], commonExtras[2]),
                }
            },
            "B": {
                "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": " שעת חניכה בכביש יום",
                },
                "TH4X4": {
                    "extra" :  commonExtras[4],
                },
                "T4X4": {
                    "extra" :  commonExtras[4],
                },
                "D4X4": {
                    "extra" :  commonExtras[4],
                },
                "sunyang": {
                    "extra" :  commonExtras[4],
                },
                "volkswagen":{
                    "extra" :  commonExtras[4],
                },
                "davidManual": {
                    "extra" :  combineExtras(commonExtras[3], commonExtras[5]),
                },
                "davidAuto": {
                    "extra" :  combineExtras(commonExtras[3], commonExtras[5]),
                },
                "colorado4X4": {
                   "extra" :  commonExtras[4],
                },
                "silveradoB4X4": {
                    "extra" :  commonExtras[4],
                }
            },
            "multi-C1": {
                "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": " שעת חניכה בכביש יום",
                },
                "dodge3500": {
                    "extra": commonExtras[9]
                },
                "ford350": {
                    "extra": commonExtras[10]
                },
                "hammer": {
                    "extra": combineExtras(commonExtras[3], commonExtras[6])
                },
                "wolf1": {
                    "extra": combineExtras(commonExtras[3], commonExtras[7])
                },
                "wolf2": {
                    "extra": combineExtras(commonExtras[3], commonExtras[7])
                },
                "tigris": {
                    "extra": combineExtras(commonExtras[3], commonExtras[8])
                }
            },
            "cargo-C1": {
                "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": " שעה חניכה בכביש יום",
                }
            }, 
            "heavyCargo": {
               "extra": {
                     genericSentences: [0, 1, 2, 5, 10],
                     "text": " שעה חניכה בכביש יום",
                },
                "oosh": {
                    "extra": {
                        "text": '6 שעות כביש (יום/לילה), שעת שטח (יום/לילה) <br> במידה ונדרשת לבצע הכשרה על אושקוש/מנוף/סולר/מים לאחר ההכשרה יש לבצע הכרת הרכב בלבד',
                    }
                },
                "truk": {
                    "extra": {
                        genericSentences: [9],
                    }
                }
            },
            "bus": {
                "extra": {
                    genericSentences: [0, 1, 2, 5, 10],
                    "text": "4 שעות כביש יום, שעה כביש לילה<br> במידה ונדרש לאחר ההכשרה לנהוג באוטובוס אחר יבצע הכרת הרכב בלבד"
                }
            }
        }
    }
}
//מערך של משפטים שמופיעים הרבה
let genericSentences = [
    'נהג יבצע הכשרה שברשותו רישיון נהיגה צבאי בתוקף והיתר נהיגה מתאים לסוג הרכב',
    'החניכה תחל בנסיעה בת שעה לפחות בכביש יום בציר אספלט',
    'לאחר החניכה נדרש לבצע מבחן שליטה בטרם אישור הנהג לנהיגה עצמית',
    "ניתן לפצל את החניכה ל-2 רכבים מאותה קבוצה כאשר שעות החניכה יהיו לפחות 50% לכל כלי רכב לפחות. לדוגמה : הכשרה על האמר ודודג' 3500 יבוצע 5 שעות לכל רכב (שעה וחצי כביש יום, שעה וחצי כביש לילה, שעה שטח יום, שעה שטח לילה)",
    "ניתן לפצל את החניכה ל-2 רכבים מאותה הקבוצה כאשר שעות החניכה יהיו בחלוקה שתיקבע על ידי ק.הרכב ולא פחות משעה לכל כלי רכב.",
    'בשלב החניכה לא יסיע הנהג הנחנך יותר מנהג + חונך + נוסע עד להשלמת תהליך החניכה ואישור ק.הבב"ד לנהיגה באופן עצמאי למעט אם הנסיעה מנהלתית והחונך בשירות קבע.',
    'נהג בשירות קבע/מילואים תנאי קבע/אע"צ בגיל 24 ומעלה ובעל וותק ברישיון נהיגה אזרחי לאותה קבוצת רכב 5 שנים לפחות, יבצע מחצית משעות החניכה',
    'נהג בשירות קבע/מילואים תנאי קבע/אע"צ בגיל 24 ומעלה ובעל וותק ברישיון נהיגה אזרחי לאותה קבוצת רכב 5 שנים לפחות, יבצע שעת חניכה ביום.',
    "בהכשרה על רכב מוגבה יש לבצע בטרם החניכה לימוד לקחים מתאונות רכב מוגבה, חניכה של קצין הרכב להכרת מאפייני ומגבלות רכב מוגבה – מרכז הכובד, סוג ההנעה, מרחק בין הסרנים והתנהגות הרכב בנסיעה (שיפועי צד, ארגז עמוס/ריק, רוח צד וכו').",
    'בהכשרה על רכב ממוגן ירי יש לבצע בטרם החניכה לימוד לקחים מתאונות כלי רכב ממוגני ירי, תכנים הקשורים למגבלות הבטיחותיות של כלי הרכב וניתוח הנת"בים האופייניים לגזרת המשימה',
    'שעת חניכה תהיה לפחות  50 קילומטר',
    'שעת חניכה התהיה לפחות 50 קילומטר בכביש ולפחות 15 קילומטר בשטח',
    'לנהג שלא ביצע קורס ליין/קד"צ נהיגה בעל היתר נהיגה אזרחי - יבצע 9 שעות חניכה ביום ושלוש שעות חניכה בלילה'
]; 

let moreSentences = [
    'שעה כביש יום', 'שעה כביש לילה',"ש ","נ ","ב "," "," "," "," "," "," "," "," "," "," "," "," "
]

