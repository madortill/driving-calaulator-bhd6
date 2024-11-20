//מערך של שילובי משפטים נפוצים
// let commonExtras = [
//     {
//         //0
//         "text": "הכרת הרכב בלבד"
//     },
//     {
//         //1
//         genericSentences: [7]
//     },
//     {
//         //2
//         "text": "שעת חניכה בכביש יום",
//         genericSentences: [0, 2, 4]
//     },
//     {
//         //3
//         "text": "שעת חניכה בכביש יום",
//         genericSentences: [0, 1, 2, 4, 8]
//     },
//     {
//         //4
//         "text": " שעות כביש (יום/לילה)"
//     },
//     {
//         //5
//         "text": 'במידה ונהג לוחם/בט"ש עבר קורס דויד בבלנ"ם יבצע מבחן שליטה בלבד'
//     },
//     {
//         //6
//         "text": "5 שעות כביש (יום/לילה)",
//         genericSentences: [0, 1, 2, 4]
//     },
//     {
//         //7
//         genericSentences: [8]
//     },
//     {
//         //8
//         "text": 'במידה ונהג לוחם/בט"ש עבר קורס זאב בבלנ"ם יבצע מבחן שליטה בלבד'
//     },
//     {
//         //9
//         "text": 'במידה ונהג לוחם/בט"ש עבר קורס האמר בבלנ"ם יבצע מבחן שליטה בלבד'
//     },
//     {
//         //10
//         "text": "50 שעות כביש (יום/לילה)",
//         genericSentences: [0, 1, 2, 4]
//     },
//     {
//         //11
//         "text": "4 שעות כביש יום, שעת כביש לילה<br> במידה ונדרש לנהוג על אוטובוס אחר תבוצע הכרת הרכב בלבד",
//         genericSentences: [0, 1, 2, 4]
//     },
//     {
//         //12
//         genericSentences: [3]
//     },
//     {
//         //13
//         "text": "שעה חניכה בכביש  (שעה שניה יכולה להיות בלילה)",
//         genericSentences: [0, 1, 2, 4]
//     },
//     {
//         //14
//         "text": "7 שעות כביש (יום/לילה)",
//         genericSentences: [0, 1, 2, 4]
//     },
//     {
//         //15
//         "text": "4 שעות כביש (יום/לילה) ושעה שטח (יום/לילה)",
//         genericSentences: [0, 1, 2, 4]
//     },
//     {
//         //16
//         "text": "שעתיים כביש (יום/לילה) ושעה שטח (יום/לילה)",
//         genericSentences: [0, 1, 2, 4]
//     }
// ]

let commonExtras = [
        {
            //0
            "text": "שעה כביש יום"
        },
        {
            //1
            "text": "שעה כביש לילה"
        },
        {
            //2
            "text": "שעת חניכה בכביש יום",
            genericSentences: [0, 2, 4]
        },
        {
            //3
            "text": "שעת חניכה בכביש יום",
            genericSentences: [0, 1, 2, 4, 8]
        },
        {
            //4
            "text": " שעות כביש (יום/לילה)"
        },
        {
            //5
            "text": 'במידה ונהג לוחם/בט"ש עבר קורס דויד בבלנ"ם יבצע מבחן שליטה בלבד'
        },
        {
            //6
            "text": "5 שעות כביש (יום/לילה)",
            genericSentences: [0, 1, 2, 4]
        },
        {
            //7
            genericSentences: [8]
        },
        {
            //8
            "text": 'במידה ונהג לוחם/בט"ש עבר קורס זאב בבלנ"ם יבצע מבחן שליטה בלבד'
        },
        {
            //9
            "text": 'במידה ונהג לוחם/בט"ש עבר קורס האמר בבלנ"ם יבצע מבחן שליטה בלבד'
        },
        {
            //10
            "text": "50 שעות כביש (יום/לילה)",
            genericSentences: [0, 1, 2, 4]
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
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס דויד בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "davidManual": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס דויד בבלנ"ם יבצע מבחן שליטה בלבד'
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
                        "text": "במידה ונדרשת לבצע הכשרה על פורד F-350 אמבולנס לאחר החניכה יבוצע הכרת הרכב ומבחן שליטה"
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
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס זאב בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "wolf2": {
                    "extra": {
                        genericSentences: [9,11],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס זאב בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "tigris": {
                    "extra": {
                        genericSentences: [9,11],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס זאב בבלנ"ם יבצע מבחן שליטה בלבד'
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
                    genericSentences: [3,5,6,11],
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
                    }
                },
                
            },
            "bus": {
                "extra": {
                    genericSentences: [3,5,6,9,10],
                    "text": "4 שעות כביש יום, שעה כביש לילה<br> במידה ונדרש לאחר ההכשרה לנהוג באוטובוס אחר יבצע הכרת הרכב בלבד"
                }
            }
        }
    },
    "passangener": {
        "extra": {
            genericSentences: [0, 1, 2, 5],
        },
        "auto": {
            "passangener": {
                "auto": {
                    "extra": {
                        "text": "הכרת הרכב בלבד"
                    }
                },
                "menual": {
                    "extra": {
                        genericSentences: [10],
                        "text": "שעת חניכה בכביש יום"
                    }
                }
            },
            "B": {
                "extra": {
                    genericSentences: [3,11],
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
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס דויד בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "davidManual": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס דויד בבלנ"ם יבצע מבחן שליטה בלבד'
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
                    genericSentences: [3,11],
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
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס האמר בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "wolf1": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס זאב בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "wolf2": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס זאב בבלנ"ם יבצע מבחן שליטה בלבד'
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
                    genericSentences: [3, 10],
                    "text": "10 שעות כביש (יום/לילה)"
                },
            },
            "heavyCargo": {
                "extra": {
                    genericSentences: [3],
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
                    genericSentences: [3, 10],
                    "text": " במידה ונדרש לנהוג על אוטובוס אחר תבוצע הכרת הרכב בלבד <br> 4 שעות כביש יום, שעת כביש לילה",
                }
            }
        },
        "menual": {
            "passangener": {
                "auto": {
                    "extra": {
                        genericSentences: [3,11],
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
                    genericSentences: [3, 11],
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
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס דויד בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "davidManual": {
                    "extra": {
                        genericSentences: [9],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס דויד בבלנ"ם יבצע מבחן שליטה בלבד'
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
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס האמר בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "ford350" : {
                    "extra": {
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס האמר בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "hammer": {
                    "extra": {
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס האמר בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "wolf1": {
                    "extra": {
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס זאב בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "wolf2": {
                    "extra": {
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס זאב בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "tigris": {
                    "extra": {
                         "text": 'במידה ונהג לוחם/בט"ש עבר קורס זאב בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                }
            },
            "cargo-C1": {
                "extra": {
                    genericSentences: [3, 10 ],
                    "text": "10 שעות כביש (יום/לילה)"
                }
            },
            "heavyCargo": {
                "extra": {
                    genericSentences: [3],
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
                         "text": 'במידה ונהג לוחם/בט"ש עבר קורס פנתר מבצעי בבא"פ/בלנ"ם יבצע מבחן שליטה בלבד <br> 40 שעות כביש (יום/לילה)',
                    }
                },
            },
            "bus": {
                "extra": {
                    genericSentences: [3, 10],
                    "text": "4 שעות כביש יום, שעת כביש לילה<br> במידה ונדרש לנהוג על אוטובוס אחר תבוצע הכרת הרכב בלבד"
                }
            }
        }
    },
    "B": {
        "wrengler": {
            "passangener": {
                "auto": {
                    "extra": combineExtras(commonExtras[0], commonExtras[1])
                },
                "menual": {
                    "extra": commonExtras[2]
                }
            },
            "B": {
                "S4": {
                    "extra": commonExtras[0]
                },
                "S3": {
                    "extra": commonExtras[0]
                },
                "paj": {
                    "extra": commonExtras[2]
                },
                "T4X4": {
                    "extra": commonExtras[2]
                },
                "D4X4": {
                    "extra": commonExtras[2]
                },
                "ford150": {
                    "extra": commonExtras[2]
                },
                "dodge1500": {
                    "extra": commonExtras[2]
                },
                "defender": {
                    "extra": combineExtras(commonExtras[3], commonExtras[12])
                },
                "David": {
                    "extra": combineExtras(commonExtras[3], commonExtras[12], commonExtras[5])
                },
                "colorado4X4": {
                    "extra": commonExtras[2]
                }
            },
            "multi-C1": {
                "extra": commonExtras[6],
                "hammer": {
                    "extra": commonExtras[9]
                },
                "wolf1": {
                    "extra": combineExtras(commonExtras[7], commonExtras[8])
                },
                "wolf2": {
                    "extra": commonExtras[7]
                }
            },
            "cargo-C1": {
                "extra": commonExtras[6]
            },
            "heavyCargo": {
                "extra": commonExtras[10]
            },
            "bus": {
                "extra": commonExtras[11]
            }
        },
        "S4": {
            "passangener": {
                "auto": {
                    "extra": combineExtras(commonExtras[0], commonExtras[1])
                },
                "menual": {
                    "extra": commonExtras[2]

                }
            },
            "B": {
                "wrengler": {
                    "extra": commonExtras[0]
                },
                "S3": {
                    "extra": commonExtras[0]
                },
                "paj": {
                    "extra": commonExtras[2]
                },
                "T4X4": {
                    "extra": commonExtras[2]
                },
                "D4X4": {
                    "extra": commonExtras[2]
                },
                "ford150": {
                    "extra": commonExtras[2]
                },
                "dodge1500": {
                    "extra": commonExtras[2]
                },
                "defender": {
                    "extra":combineExtras(commonExtras[2], commonExtras[7])
                },
                "David": {
                    "extra": combineExtras(commonExtras[2], commonExtras[12], commonExtras[7], commonExtras[5])
                },
                "colorado4X4": {
                    "extra": commonExtras[2]
                }
            },
            "multi-C1": {
                "extra": commonExtras[6],
                "hammer": {
                    "extra": commonExtras[9]
                },
                "wolf1": {
                    "extra": combineExtras(commonExtras[7], commonExtras[8])
                },
                "wolf2": {
                    "extra": commonExtras[7]
                }
            },
            "cargo-C1": {
                "extra": commonExtras[6]
            },
            "heavyCargo": {
                "extra": commonExtras[10]
            },
            "bus": {
                "extra": commonExtras[11]
            }
        },
        "S3": {
            "passangener": {
                "auto": {
                    "extra": combineExtras(commonExtras[0], commonExtras[1])
                },
                "menual": {
                    "extra": commonExtras[2]
                }
            },
            "B": {
                "wrengler": {
                    "extra": commonExtras[0]
                },
                "S4": {
                    "extra": commonExtras[0]
                },
                "paj": {
                    "extra": commonExtras[2]
                },
                "T4X4": {
                    "extra": commonExtras[2]
                },
                "D4X4": {
                    "extra": commonExtras[2]
                },
                "ford150": {
                    "extra": commonExtras[2]
                },
                "dodge1500": {
                    "extra": commonExtras[2]
                },
                "defender": {
                    "extra": combineExtras(commonExtras[2], commonExtras[7])
                },
                "David": {
                    "extra": combineExtras(commonExtras[2], commonExtras[7], commonExtras[5])
                },
                "colorado4X4": {
                    "extra": commonExtras[2]
                }
            },
            "multi-C1": {
                "extra": commonExtras[6],
                "hammer": {
                    "extra": commonExtras[9]
                },
                "wolf1": {
                    "extra": combineExtras(commonExtras[7], commonExtras[8])
                },
                "wolf2": {
                    "extra": commonExtras[7]
                }
            },
            "cargo-C1": {
                "extra": commonExtras[6]
            },
            "heavyCargo": {
                "extra": commonExtras[10]
            },
            "bus": {
                "extra": commonExtras[11]
            }
        },
        "paj": {
            "passangener": {
                "auto": {
                    "extra": combineExtras(commonExtras[0], commonExtras[1])
                },
                "menual": {
                    "extra": commonExtras[2]
                }
            },
            "B": {
                "wrengler": {
                    "extra": commonExtras[2]
                },
                "S4": {
                    "extra": commonExtras[2]
                },
                "S3": {
                    "extra": commonExtras[2]
                },
                "T4X4": {
                    "extra": commonExtras[2]
                },
                "D4X4": {
                    "extra": commonExtras[2]
                },
                "ford150": {
                    "extra": commonExtras[2]
                },
                "dodge1500": {
                    "extra": commonExtras[2]
                },
                "defender": {
                    "extra": combineExtras(commonExtras[2], commonExtras[7])
                },
                "David": {
                    "extra": combineExtras(commonExtras[2], commonExtras[7], commonExtras[5])
                },
                "colorado4X4": {
                    "extra": commonExtras[2]
                }
            },
            "multi-C1": {
                "extra": commonExtras[6],
                "hammer": {
                    "extra": commonExtras[9]
                },
                "wolf1": {
                    "extra": combineExtras(commonExtras[7], commonExtras[8])
                },
                "wolf2": {
                    "extra": commonExtras[7]
                }
            },
            "cargo-C1": {
                "extra": commonExtras[6]
            },
            "heavyCargo": {
                "extra": commonExtras[10]
            },
            "bus": {
                "extra": commonExtras[11]
            }
        },
        "T4X4": {
            "passangener": {
                "auto": {
                    "extra": combineExtras(commonExtras[0], commonExtras[1])
                },
                "menual": {
                    "extra": commonExtras[2]
                }
            },
            "B": {
                "wrengler": {
                    "extra": commonExtras[2]
                },
                "S4": {
                    "extra": commonExtras[2]
                },
                "paj": {
                    "extra": commonExtras[2]
                },
                "S3": {
                    "extra": commonExtras[2]
                },
                "D4X4": {
                    "extra": commonExtras[0]
                },
                "ford150": {
                    "extra": commonExtras[2]
                },
                "dodge1500": {
                    "extra": commonExtras[2]
                },
                "defender": {
                    "extra": commonExtras[3]
                },
                "David": {
                    "extra": combineExtras(commonExtras[3], commonExtras[12], commonExtras[5])
                },
                "colorado4X4": {
                    "extra": {
                        "text": "מבחן שליטה בלבד"
                    }
                }
            },
            "multi-C1": {
                "extra": commonExtras[6],
                "hammer": {
                    "extra": commonExtras[9]
                },
                "wolf1": {
                    "extra": combineExtras(commonExtras[7], commonExtras[8])
                },
                "wolf2": {
                    "extra": commonExtras[7]
                }
            },
            "cargo-C1": {
                "extra": commonExtras[6]
            },
            "heavyCargo": {
                "extra": combineExtras(commonExtras[10], commonExtras[12])
            },
            "bus": {
                "extra": commonExtras[11]
            }
        },
        "D4X4": {
            "passangener": {
                "auto": {
                    "extra": combineExtras(commonExtras[0], commonExtras[1])
                },
                "menual": {
                    "extra": commonExtras[2]
                }
            },
            "B": {
                "wrengler": {
                    "extra": commonExtras[2]
                },
                "S4": {
                    "extra": commonExtras[2]
                },
                "paj": {
                    "extra": commonExtras[2]
                },
                "S3": {
                    "extra": commonExtras[2]
                },
                "T4X4": {
                    "extra": commonExtras[0]
                },
                "ford150": {
                    "extra": commonExtras[2]
                },
                "dodge1500": {
                    "extra": commonExtras[2]
                },
                "defender": {
                    "extra": commonExtras[3]
                },
                "David": {
                    "extra": combineExtras(commonExtras[3], commonExtras[12], commonExtras[5])
                },
                "colorado4X4": {
                    "extra": {
                        "text": "מבחן שליטה בלבד"
                    }
                }
            },
            "multi-C1": {
                "extra": commonExtras[6],
                "hammer": {
                    "extra": commonExtras[9]
                },
                "wolf1": {
                    "extra": combineExtras(commonExtras[7], commonExtras[8])
                },
                "wolf2": {
                    "extra": commonExtras[7]
                }
            },
            "cargo-C1": {
                "extra": commonExtras[6]
            },
            "heavyCargo": {
                "extra": combineExtras(commonExtras[10], commonExtras[12])
            },
            "bus": {
                "extra": commonExtras[11]
            }
        },
        "ford150": {
            "passangener": {
                "auto": {
                    "extra": combineExtras(commonExtras[0], commonExtras[1])
                },
                "menual": {
                    "extra": commonExtras[2]
                }
            },
            "B": {
                "wrengler": {
                    "extra": commonExtras[2]
                },
                "S4": {
                    "extra": commonExtras[2]
                },
                "paj": {
                    "extra": commonExtras[2]
                },
                "S3": {
                    "extra": commonExtras[2]
                },
                "T4X4": {
                    "extra": commonExtras[2]
                },
                "D4X4": {
                    "extra": commonExtras[2]
                },
                "dodge1500": {
                    "extra": commonExtras[2]
                },
                "defender": {
                    "extra": commonExtras[3]
                },
                "David": {
                    "extra": combineExtras(commonExtras[3], commonExtras[12], commonExtras[5])
                },
                "colorado4X4": {
                    "extra": commonExtras[2]
                }
            },
            "multi-C1": {
                "extra": commonExtras[6],
                "hammer": {
                    "extra": commonExtras[9]
                },
                "wolf1": {
                    "extra": combineExtras(commonExtras[7], commonExtras[8])
                },
                "wolf2": {
                    "extra": commonExtras[7]
                }
            },
            "cargo-C1": {
                "extra": commonExtras[6]
            },
            "heavyCargo": {
                "extra": combineExtras(commonExtras[10], commonExtras[12])
            },
            "bus": {
                "extra": commonExtras[11]
            }
        },
        "dodge1500": {
            "passangener": {
                "auto": {
                    "extra": combineExtras(commonExtras[0], commonExtras[1])
                },
                "menual": {
                    "extra": commonExtras[2]
                }
            },
            "B": {
                "wrengler": {
                    "extra": commonExtras[2]
                },
                "S4": {
                    "extra": commonExtras[2]
                },
                "paj": {
                    "extra": commonExtras[2]
                },
                "S3": {
                    "extra": commonExtras[2]
                },
                "T4X4": {
                    "extra": commonExtras[2]
                },
                "D4X4": {
                    "extra": commonExtras[2]
                },
                "ford150": {
                    "extra": commonExtras[2]
                },
                "defender": {
                    "extra": commonExtras[3]
                },
                "David": {
                    "extra": combineExtras(commonExtras[3], commonExtras[12], commonExtras[5])
                },
                "colorado4X4": {
                    "extra": commonExtras[2]
                }
            },
            "multi-C1": {
                "extra": commonExtras[6],
                "hammer": {
                    "extra": commonExtras[9]
                },
                "wolf1": {
                    "extra": combineExtras(commonExtras[7], commonExtras[8])
                },
                "wolf2": {
                    "extra": commonExtras[7]
                }
            },
            "cargo-C1": {
                "extra": commonExtras[6]
            },
            "heavyCargo": {
                "extra": combineExtras(commonExtras[10], commonExtras[12])
            },
            "bus": {
                "extra": commonExtras[11]
            }
        },
        "defender": {
            "passangener": {
                "extra": combineExtras(commonExtras[0], commonExtras[1])
            },
            "B": {
                "extra": commonExtras[2],
                "David": {
                    "extra": combineExtras(commonExtras[7], commonExtras[5])
                }
            },
            "multi-C1": {
                "extra": commonExtras[6],
                "hammer": {
                    "extra": commonExtras[9]
                },
                "wolf1": {
                    "extra": combineExtras(commonExtras[7], commonExtras[8])
                },
                "wolf2": {
                    "extra": commonExtras[7]
                }
            },
            "cargo-C1": {
                "extra": commonExtras[6]
            },
            "heavyCargo": {
                "extra": combineExtras(commonExtras[10], commonExtras[12])
            },
            "bus": {
                "extra": commonExtras[11]
            }
        },
        "David": {
            "passangener": {
                "extra": combineExtras(commonExtras[0], commonExtras[1]),
                "menual": {
                    "extra": {
                        "text": "במידה וביצע הכשרה בעבר על דויד אוטומט יבצע שעת חניכה כביש יום"                        
                    }
                }
            },
            "B": {
                "extra": commonExtras[2]
            },
            "multi-C1": {
                "extra": commonExtras[6],
                "hammer": {
                    "extra": commonExtras[9]
                },
                "wolf1": {
                    "extra": combineExtras(commonExtras[7], commonExtras[8])
                },
                "wolf2": {
                    "extra": commonExtras[7]
                }
            },
            "cargo-C1": {
                "extra": commonExtras[6]
            },
            "heavyCargo": {
                "extra": combineExtras(commonExtras[10], commonExtras[12])
            },
            "bus": {
                "extra": commonExtras[11]
            }
        },
        "colorado4X4": {
            "passangener": {
                "auto": {
                    "extra": combineExtras(commonExtras[0], commonExtras[1])
                },
                "menual": {
                    "extra": commonExtras[2]
                }
            },
            "B": {
                "extra": commonExtras[2],
                "dodge1500": {
                    "extra": {
                        genericSentences: [1,8,0, 2, 4],
                        "text": "שעת חניכה בכביש יום"           
                    }
                },
                "defender": {
                    "extra": {
                        genericSentences: [1,3,8,0, 2, 4],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס דויד בבלנ"ם יבצע מבחן שליטה בלבד',
                        "text": "שעת חניכה בכביש יום" 
                    }
                },
                "wrengler": {
                    "extra": commonExtras[2]
                },
                "S4": {
                    "extra": commonExtras[2]
                },
                "S3": {
                    "extra": commonExtras[2]
                },
                "paj": {
                    "extra": commonExtras[2]
                },
                "wrengler": {
                    "extra": commonExtras[2]
                },
                "T4X4": {
                    "extra": {
                        "text": "מבחן שליטה בלבד"
                    }
                },
                "D4X4": {
                    "extra": {
                        "text": "מבחן שליטה בלבד"
                    }
                },
                "ford150": {
                    "extra": commonExtras[2]
                },
                "dodge1500": {
                    "extra": commonExtras[2]
                },
                "defender": {
                    "extra": commonExtras[2]
                },
                "David": {
                    "extra": commonExtras[2]
                }
            },
            "multi-C1": {
                "extra": commonExtras[6],
                "hammer": {
                    "extra": commonExtras[9]
                },
                "wolf1": {
                    "extra": combineExtras(commonExtras[7], commonExtras[8])
                },
                "wolf2": {
                    "extra": commonExtras[7]
                }
            },
            "cargo-C1": {
                "extra": commonExtras[6]
            },
            "heavyCargo": {
                "extra": combineExtras(commonExtras[10], commonExtras[12])
            },
            "bus": {
                "extra": commonExtras[11]
            }
        }
    },
    "multi-C1": {
        "dodge3500": {
            "passangener": {
                "auto": {
                    "extra": combineExtras(commonExtras[0], commonExtras[1])
                },
                "menual": {
                    "extra": commonExtras[2]
                }
            },
            "B": {
                "extra": commonExtras[2],
                "defender": {
                    "extra": commonExtras[7]
                },
                "David": {
                    "extra": combineExtras(commonExtras[7], commonExtras[5])
                }
            },
            "multi-C1": {
                "ford350": {
                    "extra": {
                        "text": "הכרת הרכב ומבחן שליטה ביום בלבד."
                    }
                },
                "hammer": {
                    "extra": {
                        "text": 'שעת חניכה ביום <br> במידה ונהג לוחם/בט"ש עבר קורס האמר בבלנ"ם יבצע מבחן שליטה בלבד',
                        genericSentences: [0,2,4,8]
                    }
                },
                "wolf1": {
                    "extra": combineExtras(commonExtras[2], commonExtras[7], commonExtras[8])
                },
                "wolf2": {
                    "extra": combineExtras(commonExtras[2], commonExtras[7])
                },
                "sprinter": {
                    "extra": commonExtras[2]
                }
            },
            "cargo-C1": {
                "extra": commonExtras[13]
            },
            "heavyCargo": {
                "extra": commonExtras[14]
            },
            "bus": {
                "extra": commonExtras[11]
            }
        },
        "ford350": {
            "passangener": {
                "auto": {
                    "extra": combineExtras(commonExtras[0], commonExtras[1])
                },
                "menual": {
                    "extra": commonExtras[2]
                }
            },
            "B": {
                "extra": commonExtras[2],
                "defender": {
                    "extra": commonExtras[7]
                },
                "David": {
                    "extra": combineExtras(commonExtras[7], commonExtras[5])
                }
            },
            "multi-C1": {
                "dodge3500": {
                    "extra": {
                        "text": "הכרת הרכב ומבחן שליטה ביום בלבד."
                    }
                },
                "hammer": {
                    "extra": {
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס האמר בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "wolf1": {
                    "extra": combineExtras(commonExtras[2], commonExtras[7], commonExtras[8])
                },
                "wolf2": {
                    "extra": combineExtras(commonExtras[2], commonExtras[7])
                },
                "sprinter": {
                    "extra": commonExtras[2]
                }
            },
            "cargo-C1": {
                "extra": commonExtras[13]
            },
            "heavyCargo": {
                "extra": commonExtras[14]
            },
            "bus": {
                "extra": commonExtras[11]
            }
        },
        "hammer": {
            "passangener": {
                "auto": {
                    "extra": combineExtras(commonExtras[0], commonExtras[1])
                },
                "menual": {
                    "extra": commonExtras[2]
                }
            },
            "B": {
                "extra": commonExtras[2],
                "defender": {
                    "extra": commonExtras[7]
                },
                "David": {
                    "extra": combineExtras(commonExtras[7], commonExtras[5])
                }
            },
            "multi-C1": {
                "extra": commonExtras[2],
                "wolf1": {
                    "extra": combineExtras(commonExtras[7], commonExtras[8])
                },
                "wolf2": {
                    "extra": commonExtras[7]
                }
            },
            "cargo-C1": {
                "extra": commonExtras[13]
            },
            "heavyCargo": {
                "extra": commonExtras[14]
            },
            "bus": {
                "extra": commonExtras[11]
            }
        },
        "wolf1": {
            "passangener": {
                "auto": {
                    "extra": combineExtras(commonExtras[0], commonExtras[1])
                },
                "menual": {
                    "extra": commonExtras[2]
                }
            },
            "B": {
                "extra": commonExtras[2],
                "defender": {
                    "extra": commonExtras[7]
                },
                "David": {
                    "extra": combineExtras(commonExtras[7], commonExtras[5])
                }
            },
            "multi-C1": {
                "extra": commonExtras[2],
                "hammer": {
                    "extra": combineExtras(commonExtras[7], commonExtras[9])
                },
                "wolf1": {
                    "extra": combineExtras(commonExtras[7], commonExtras[8])
                },
                "wolf2": {
                    "extra": commonExtras[7]
                }
            },
            "cargo-C1": {
                "extra": commonExtras[13]
            },
            "heavyCargo": {
                "extra": commonExtras[14]
            },
            "bus": {
                "extra": commonExtras[11]
            }
        },
        "wolf2": {
            "passangener": {
                "auto": {
                    "extra": combineExtras(commonExtras[0], commonExtras[1])
                },
                "menual": {
                    "extra": commonExtras[2]
                }
            },
            "B": {
                "extra": commonExtras[2],
                "defender": {
                    "extra": commonExtras[7]
                },
                "David": {
                    "extra": combineExtras(commonExtras[7], commonExtras[5])
                }
            },
            "multi-C1": {
                "extra": commonExtras[2],
                "hammer": {
                    "extra": combineExtras(commonExtras[7], commonExtras[9])
                },
                "wolf1": {
                    "extra": commonExtras[7]
                }
            },
            "cargo-C1": {
                "extra": commonExtras[13]
            },
            "heavyCargo": {
                "extra": commonExtras[14]
            },
            "bus": {
                "extra": commonExtras[11]
            }
        },
        "sprinter": {
            "passangener": {
                "auto": {
                    "extra": combineExtras(commonExtras[0], commonExtras[1])
                },
                "menual": {
                    "extra": commonExtras[2]
                }
            },
            "B": {
                "extra": commonExtras[2],
                "defender": {
                    "extra": commonExtras[7]
                },
                "David": {
                    "extra": combineExtras(commonExtras[7], commonExtras[5])
                }
            },
            "multi-C1": {
                "extra": commonExtras[2],
                "hammer": {
                    "extra": combineExtras(commonExtras[7], commonExtras[8])
                },
                "wolf2": {
                    "extra": commonExtras[7]
                },
                "wolf1": {
                    "extra": combineExtras(commonExtras[7], commonExtras[8])
                }
            },
            "cargo-C1": {
                "extra": commonExtras[13]
            },
            "heavyCargo": {
                "extra": commonExtras[14]
            },
            "bus": {
                "extra": commonExtras[11]
            }
        }
    },
    "cargo-C1": {
        "inter": {
            "passangener": {
                "auto": {
                    "extra": {
                        genericSentences: [7],
                        "text": "הכרת הרכב ומבחן שליטה"
                    }
                },
                "menual": {
                    "extra": commonExtras[2]
                }
            },
            "B": {
                "extra": commonExtras[15],
                "David": {
                    "extra": combineExtras(commonExtras[7], commonExtras[5])
                }
            },
            "multi-C1": {
                "dodge3500": {
                    "extra": commonExtras[15]
                },
                "ford350": {
                    "extra": commonExtras[15]
                },
                "hammer": {
                    "extra": combineExtras(commonExtras[15], commonExtras[7], commonExtras[9])
                },
                "wolf2": {
                    "extra": combineExtras(commonExtras[2], commonExtras[7])
                },
                "wolf1": {
                    "extra": combineExtras(commonExtras[15], commonExtras[7], commonExtras[8])
                },
                "sprinter": {
                    "extra":  commonExtras[13]
                }
            },
            "cargo-C1": {
                "fordInter": {
                    "extra": {
                        "text": "הכרת הרכב ומבחן שליטה"
                    }
                },
                "man": {
                    "extra": commonExtras[13]
                },
                "daf": {
                    "extra": commonExtras[13]
                }
            },
            "heavyCargo": {
                "extra": commonExtras[14]
            },
            "bus": {
                "extra": commonExtras[11]
            }
        },
        "fordInter": {
            "passangener": {
                "auto": {
                    "extra": {
                        genericSentences: [7],
                        "text": "הכרת הרכב ומבחן שליטה"
                    }
                },
                "menual": {
                    "extra": commonExtras[2]
                }
            },
            "B": {
                "extra": commonExtras[15],
                "David": {
                    "extra": combineExtras(commonExtras[7], commonExtras[5])
                }
            },
            "multi-C1": {
                "dodge3500": {
                    "extra": commonExtras[15]
                },
                "ford350": {
                    "extra": commonExtras[15]
                },
                "hammer": {
                    "extra": combineExtras(commonExtras[15], commonExtras[7], commonExtras[9])
                },
                "wolf1": {
                    "extra": combineExtras(commonExtras[15], commonExtras[7], commonExtras[8])
                },
                "wolf2": {
                    "extra": combineExtras(commonExtras[2], commonExtras[7])
                },
                "sprinter": {
                    "extra": commonExtras[13]
                }
            },
            "cargo-C1": {
                "inter": {
                    "extra": {
                        genericSentences: [0, 2, 4],
                        "text": 'שעת חניכה ביום עפ"י החלטת קצין הרכב'
                    }
                },
                "man": {
                    "extra": commonExtras[13]
                },
                "daf": {
                    "extra": commonExtras[13]
                }
            },
            "heavyCargo": {
                "extra": commonExtras[14]
            },
            "bus": {
                "extra": commonExtras[11]
            }
        },
        "man": {
            "passangener": {
                "auto": {
                    "extra": {
                        genericSentences: [7],
                        "text": "הכרת הרכב ומבחן שליטה"
                    }
                },
                "menual": {
                    "extra": commonExtras[2]
                }
            },
            "B": {
                "extra": commonExtras[15],
                "David": {
                    "extra": combineExtras(commonExtras[7], commonExtras[5])
                }
            },
            "multi-C1": {
                "dodge3500": {
                    "extra": commonExtras[15]
                },
                "ford350": {
                    "extra": commonExtras[15]
                },
                "hammer": {
                    "extra": combineExtras(commonExtras[15], commonExtras[7], commonExtras[9])
                },
                "wolf1": {
                    "extra": combineExtras(commonExtras[15], commonExtras[7], commonExtras[8])
                },
                "wolf2": {
                    "extra": combineExtras(commonExtras[2], commonExtras[7])
                },
                "sprinter": {
                    "extra": commonExtras[13]
                }
            },
            "cargo-C1": {
                "extra": commonExtras[13]
            },
            "heavyCargo": {
                "extra": commonExtras[14]
            },
            "bus": {
                "extra": commonExtras[11]
            }
        }
    },
    "heavyCargo": {
        "oosh": {
            "passangener": {
                "auto": {
                    "extra": {
                        genericSentences: [7],
                        "text": "הכרת הרכב ומבחן שליטה"
                    }
                },
                "menual": {
                    "extra": commonExtras[2]
                }
            },
            "B": {
                "extra": commonExtras[15],
                "David": {
                    "extra": combineExtras(commonExtras[7], commonExtras[5])
                }
            },
            "multi-C1": {
                "extra": commonExtras[16]
            },
            "cargo-C1": {
                "extra": commonExtras[2]
            },
            "heavyCargo": {
                "oosh": {
                    "extra": commonExtras[0]
                },
                "rio": {
                    "extra": commonExtras[2]
                },
                "tetra": {
                    "extra": commonExtras[2]
                },
                "FMTV": {
                    "extra": commonExtras[2]
                },
                "truk": {
                    "extra": commonExtras[2]
                },
                "dragger": {
                    "extra": commonExtras[2]
                },
                "man+": {
                    "extra": commonExtras[2]
                }
            },
            "bus": {
                "extra": commonExtras[11]
            }
        },
        "rio": {
            "passangener": {
                "extra": {
                    "text": "הכרת הרכב ומבחן שליטה"
                },
                "auto": {
                    "extra": commonExtras[1]
                }
            },
            "B": {
                "extra": commonExtras[15],
                "David": {
                    "extra": combineExtras(commonExtras[7], commonExtras[5])
                }
            },
            "multi-C1": {
                "extra": commonExtras[16]
            },
            "cargo-C1": {
                "extra": commonExtras[2]
            },
            "heavyCargo": {
                "extra": commonExtras[2]
            },
            "bus": {
                "extra": commonExtras[11]
            }
        },
        "tetra": {
            "passangener": {
                "auto": {
                    "extra": {
                        genericSentences: [7],
                        "text": "הכרת הרכב ומבחן שליטה"
                    }
                },
                "menual": {
                    "extra": commonExtras[2]
                }
            },
            "B": {
                "extra": commonExtras[15],
                "David": {
                    "extra": combineExtras(commonExtras[7], commonExtras[5])
                }
            },
            "multi-C1": {
                "extra": commonExtras[16]
            },
            "cargo-C1": {
                "extra": commonExtras[2]
            },
            "heavyCargo": {
                "extra": commonExtras[2]
            },
            "bus": {
                "extra": commonExtras[11]
            }
        },
        "FMTV": {
            "passangener": {
                "auto": {
                    "extra": {
                        genericSentences: [7],
                        "text": "הכרת הרכב ומבחן שליטה"
                    }
                },
                "menual": {
                    "extra": commonExtras[2]
                }
            },
            "B": {
                "extra": commonExtras[15],
                "David": {
                    "extra": combineExtras(commonExtras[7], commonExtras[5])
                }
            },
            "multi-C1": {
                "extra": commonExtras[16]
            },
            "cargo-C1": {
                "extra": commonExtras[2]
            },
            "heavyCargo": {
                "extra": commonExtras[2]
            },
            "bus": {
                "extra": commonExtras[11]
            }
        },
        "truk": {
            "passangener": {
                "auto": {
                    "extra": {
                        genericSentences: [7],
                        "text": "הכרת הרכב ומבחן שליטה"
                    }
                },
                "menual": {
                    "extra": commonExtras[2]
                }
            },
            "B": {
                "extra": commonExtras[15],
                "David": {
                    "extra": combineExtras(commonExtras[7], commonExtras[5])
                }
            },
            "multi-C1": {
                "extra": commonExtras[16]
            },
            "cargo-C1": {
                "extra": commonExtras[2]
            },
            "heavyCargo": {
                "extra": commonExtras[2]
            },
            "bus": {
                "extra": commonExtras[11]
            }
        },
        "dragger": {
            "passangener": {
                "auto": {
                    "extra": {
                        genericSentences: [7],
                        "text": "הכרת הרכב ומבחן שליטה"
                    }
                },
                "menual": {
                    "extra": commonExtras[2]
                }
            },
            "B": {
                "extra": commonExtras[15],
                "David": {
                    "extra": combineExtras(commonExtras[7], commonExtras[5])
                }
            },
            "multi-C1": {
                "extra": commonExtras[16]
            },
            "cargo-C1": {
                "extra": commonExtras[2]
            },
            "heavyCargo": {
                "extra": commonExtras[2]
            },
            "bus": {
                "extra": commonExtras[11]
            }
        }
    }
}
//מערך של משפטים שמופיעים הרבה
let genericSentences = [
    'נהג יבצע הכשרה שברשותו רישיון נהיגה צבאי בתוקף והיתר נהיגה מתאים לסוג הרכב',
    'החניכה תחל בנסיעה בת שעה לפחות בכביש יום בציר אספלט)',
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

