//מערך של שילובי משפטים נפוצים
let commonExtras = [
    {
        //0
        "text": "הכרת הרכב בלבד"
    },
    {
        //1
        genericSentences: [7]
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
        "text": "5 שעות כביש (יום/לילה)"
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
        "text": "שעתיים חניכה בכביש  (שעה שניה יכולה להיות בלילה)",
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
                genericSentences: [0, 1, 2, 3, 4],
            },
            "passangener": {
                "auto": {
                    "extra": {
                        genericSentences: [6,7],
                        "text": "במידה ולאחר ההכשרה נדרש לנהוג על רכב נוסעים אוטומטי נוסף יש לבצע הכרת הרכב בלבד"
                    }
                },
                "menual": {
                    "extra": {
                        genericSentences: [6]
                    }
                },
                "extra": {
                    "text": "4 שעות יום, שעה לילה",
                    "text": 'במידה ונדרש להכשיר נהג עם "היתר נהיגה" (רישיון אזרחי המחייב ליווי) לנהג שלא ביצע ליין נהיגה/מרכז הובלה, יבוצע לנהג 9 שעות חניכה ביום ו-3 שעות חניכה בלילה בטרם ביצוע מבחן שליטה לאישור הנהג לנהיגה עצמית'
                }
            },
            "B": {
                "extra": {
                    "text": "שעתיים כביש יום, שעתיים כביש לילה, שעתיים שטח יום, שעה שטח לילה",
                },
                "wrengler": {
                    "extra": {
                        genericSentences: [5]
                    }
                },
                "S4": {
                    "extra": {
                        genericSentences: [5]
                    }
                },
                "S3": {
                    "extra": {
                        genericSentences: [5]
                    }
                },
                "paj": {
                    "extra": {
                        genericSentences: [5]
                    }
                },
                "T4X4": {
                    "extra": {
                        genericSentences: [5]
                    }
                },
                "D4X4": {
                    "extra": {
                        genericSentences: [5]
                    }
                },
                "ford150": {
                    "extra": {
                        genericSentences: [5]
                    }
                },
                "dodge1500": {
                    "extra": {
                        genericSentences: [5]
                    }
                },
                "defender": {
                    "extra": {
                        genericSentences: [5, 8],
                    }
                },
                "David": {
                    "extra": {
                        genericSentences: [5, 8],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס דויד בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "colorado4X4": {
                    "extra": {
                        genericSentences: [5]
                    }
                }
            },
            "multi-C1": {
                "extra": {
                    genericSentences: [5],
                    "text": "3 שעות כביש יום, 3 שעות כביש לילה, שעתיים שטח יום, שעתיים שטח לילה"
                },
                "dodge3500": {
                    "extra": {
                        "text": "במידה ונדרשת לבצע הכשרה על דודג' 3500 אמבולנס לאחר החניכה יבוצע הכרת הרכב ומבחן שליטה"
                    }
                },
                "ford350": {
                    "extra": {
                        "text": "במידה ונדרשת לבצע הכשרה על פורד F-350 אמבולנס לאחר החניכה יבוצע הכרת הרכב ומבחן שליטה"
                    }
                },
                "wolf1": {
                    "extra": {
                        genericSentences: [8],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס זאב בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "wolf2": {
                    "extra": {
                        genericSentences: [8],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס זאב בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                }
            },
            "cargo-C1": {
                "extra": {
                    genericSentences: [5],
                    "text": "7 שעות כביש יום, 3 שעות כביש לילה"
                }
            },
            "heavyCargo": {
                "extra": {
                    genericSentences: [5],
                    "text": "40 שעות כביש יום, 10 שעות כביש לילה"
                },
                "oosh": {
                    "extra": {
                        "text": "במידה ונדרשת לבצע הכשרה על אושקוש מנוף/סולר/מים לאחר ההכשרה יש לבצע הכרת הרכב בלבד"
                    }
                }
            },
            "bus": {
                "extra": {
                    genericSentences: [5],
                    "text": "4 שעות כביש יום, שעה כביש לילה<br> במידה ונדרש לאחר ההכשרה לנהוג באוטובוס אחר יבצע הכרת הרכב בלבד"
                }
            }
        }
    },
    "passangener": {
        "auto": {
            "passangener": {
                "auto": {
                    "extra": {
                        genericSentences: [7],
                        "text": "הכרת הרכב בלבד"
                    }
                },
                "menual": {
                    "extra": {
                        genericSentences: [0, 2, 4],
                        "text": "שעת חניכה בכביש יום"
                    }
                }
            },
            "B": {
                "extra": {
                    genericSentences: [1, 3, 5, 0, 2, 4],
                    "text": "6 שעות כביש (יום/לילה), שעה שטח (יום/לילה)"
                },
                "defender": {
                    "extra": {
                        genericSentences: [8]
                    }
                },
                "David": {
                    "extra": {
                        genericSentences: [8]
                    }
                },
            },
            "multi-C1": {
                "extra": {
                    genericSentences: [1, 3, 5, 0, 2, 4],
                    "text": "9  שעות כביש (יום/לילה), שעה שטח (יום/לילה)"
                },
                "hammer": {
                    "extra": {
                        genericSentences: [8],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס האמר בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "wolf1": {
                    "extra": {
                        genericSentences: [8],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס זאב בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "wolf2": {
                    "extra": {
                        genericSentences: [8],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס זאב בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                }
            },
            "cargo-C1": {
                "extra": {
                    genericSentences: [1, 3, 5, 0, 2, 4],
                    "text": "10 שעות כביש (יום/לילה)"
                }
            },
            "heavyCargo": {
                "extra": {
                    genericSentences: [1, 3, 5, 0, 2, 4],
                    "text": "50 שעות כביש יום/לילה"
                }
            },
            "bus": {
                "extra": {
                    genericSentences: [1, 0, 2, 4],
                    "text": "4 שעות כביש יום, שעת כביש לילה<br> במידה ונדרש לנהוג על אוטובוס אחר תבוצע הכרת הרכב בלבד"
                }
            }
        },
        "menual": {
            "passangener": {
                "auto": {
                    "extra": {
                        genericSentences: [7],
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
                    genericSentences: [0, 1, 2, 3, 4, 5],
                    "text": "6 שעות כביש (יום/לילה), שעה שטח (יום/לילה)"
                },
                "defender": {
                    "extra": {
                        genericSentences: [8]
                    }
                },
                "David": {
                    "extra": {
                        genericSentences: [8],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס דויד בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                }
            },
            "multi-C1": {
                "extra": {
                    genericSentences: [0, 1, 2, 3, 4, 5],
                    "text": "9 שעות כביש (יום/לילה), שעה שטח (יום/לילה)"
                },
                "hammer": {
                    "extra": {
                        genericSentences: [8],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס האמר בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "wolf1": {
                    "extra": {
                        genericSentences: [8],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס זאב בבלנ"ם יבצע מבחן שליטה בלבד'
                    }
                },
                "wolf2": {
                    "extra": {
                        genericSentences: [8]
                    }
                }
            },
            "cargo-C1": {
                "extra": {
                    genericSentences: [0, 1, 2, 3, 4, 5],
                    "text": "10 שעות כביש (יום/לילה)"
                }
            },
            "heavyCargo": {
                "extra": {
                    genericSentences: [0, 1, 2, 3, 4, 5],
                    "text": "50 שעות כביש יום/לילה"
                }
            },
            "bus": {
                "extra": {
                    genericSentences: [0, 1, 2, 3, 4, 5],
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
                        "text": "הכרת הרכב ומבחן שליטה"
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
                        "text": "הכרת הרכב ומבחן שליטה"
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
                        genericSentences: [1,8]                        
                    }
                },
                "defender": {
                    "extra": {
                        genericSentences: [1,3,8],
                        "text": 'במידה ונהג לוחם/בט"ש עבר קורס דויד בבלנ"ם יבצע מבחן שליטה בלבד'
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
                        "text": 'שעת חניכה ביום/בלילה עפ"י החלטת קצין הרכב'
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
                "extra": commonExtras[2]
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
    'נהג יבצע הכשרה שברשותו רישיון נהיגה אזרחי ורישיון נהיגה צבאי (זמני/קבוע) החתום ע"י ק. הבב"ד המתאים לסוג הרכב עליו עתיד לבצע חניכה1',
    'החניכה תחל בנסיעה בת שעה לפחות בכביש יום (ציר אספלט)2',
    'לאחר החניכה נדרש לבצע מבחן שליטה בשעות היום בטרם אישור הנהג לנהיגה עצמית3',
    "4ניתן לפצל את החניכה ל-2 רכבים מאותה קבוצה כאשר שעות החניכה יהיו לפחות 50% לכל כלי רכב לפחות. לדוגמה : הכשרה על האמר ודודג' 3500 יבוצע 5 שעות לכל רכב (שעה וחצי כביש יום, שעה וחצי כביש לילה, שעה שטח יום, שעה שטח לילה)",
    '5בשלב החניכה לא יסיע הנהג הנחנך יותר מנהג + חונך + נוסע עד להשלמת תהליך החניכה ואישור ק. הבב"ד לנהיגה באופן עצמאי',
    '6נהג בשירות קבע/מילואים תנאי קבע/אע"צ בגיל 24 ומעלה ובעל וותק ברישיון נהיגה אזרחי לאותה קבוצת רכב 5 שנים לפחות, יבצע מחצית משעות החניכה',
    '7נהג בשירות קבע/מילואים תנאי קבע/אע"צ בגיל 24 ומעלה ובעל וותק ברישיון נהיגה אזרחי לאותה קבוצת רכב 5 שנים לפחות, יבצע שעת חניכה ביום.',
    "8בהכשרה על רכב מוגבה יש לבצע בטרם החניכה לימוד לקחים מתאונות רכב מוגבה, חניכה של קצין הרכב להכרת מאפייני ומגבלות רכב מוגבה – מרכז הכובד, סוג ההנעה, מרחק בין הסרנים והתנהגות הרכב בנסיעה (שיפועי צד, ארגז עמוס/ריק, רוח צד וכו').",
    '9בהכשרה על רכב ממוגן ירי יש לבצע בטרם החניכה לימוד לקחים מתאונות כלי רכב ממוגני ירי, תכנים הקשורים למגבלות הבטיחותיות של כלי הרכב וניתוח הנת"בים האופייניים לגזרת המשימה'
];

