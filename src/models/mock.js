export const users = [
  {
    name: 'Radesh',
    department: 'MDTEAM'
  },
  {
    name: 'Aaqeel',
    department: 'MDTEAM'
  },
  {
    name: 'Chethani',
    department: 'MDTEAM'
  },
  {
    name: 'Sewwandi',
    department: 'MDTEAM'
  },
  {
    name: 'Tharindu',
    department: 'MDTEAM'
  },
  {
    name: 'Sanjaya',
    department: 'HC'
  },
  {
    name: 'Kapila',
    department: 'HC'
  },
  {
    name: 'Palinda',
    department: 'HC'
  },
  {
    name: 'Dilu',
    department: 'HC'
  },
  {
    name: 'Sanjeewa',
    department: 'MPG'
  },
  {
    name: 'Thushara',
    department: 'MPG'
  },
  {
    name: 'Lal',
    department: 'MPG'
  },
  {
    name: 'Lakshana',
    department: 'MPG'
  },
  {
    name: 'Thusitha',
    department: 'MPG'
  },
  {
    name: 'Ganga',
    department: 'CSC'
  },
  {
    name: 'Jayawanthi',
    department: 'CSC'
  },
  {
    name: 'sameera',
    department: 'CSC'
  },
  {
    name: 'Dilshan',
    department: 'CSC'
  },
  {
    name: 'Aruna',
    department: 'CSC'
  },
  {
    name: 'Deen',
    department: 'CSC'
  }, {
    name: 'Upul',
    department: 'CSC'
  },
  {
    name: 'Madushan',
    department: 'CSC'
  },
  {
    name: 'Pradeep',
    department: 'CSC'
  },
  {
    name: 'Nalin',
    department: 'HRPROCUREMENT'
  },
  {
    name: 'Nayomi',
    department: 'HRPROCUREMENT'
  },
  {
    name: 'Sonali',
    department: 'HRPROCUREMENT'
  },
  {
    name: 'Nimesh',
    department: 'HRPROCUREMENT'
  },
  {
    name: 'Chamil',
    department: 'HRPROCUREMENT'
  },
  {
    name: 'Wasana',
    department: 'HRPROCUREMENT'
  },
  {
    name: 'Subash',
    department: 'HRPROCUREMENT'
  },
  {
    name: 'Amal',
    department: 'OPS'
  },
  {
    name: 'Sajith',
    department: 'OPS'
  },
  {
    name: 'Thiloka',
    department: 'OPS'
  },
  {
    name: 'Nipuna',
    department: 'OPS'
  },
  {
    name: 'Isuru',
    department: 'OPS'
  },
  {
    name: 'Sagara',
    department: 'OPS'
  },
  {
    name: 'Chamara',
    department: 'OPS'
  },
  {
    name: 'Sankalpa',
    department: 'OPS'
  },
  {
    name: 'Raj',
    department: 'OPS'
  },
  {
    name: 'Nimal',
    department: 'OPS'
  },
  {
    name: 'Anura',
    department: 'DELIVERCMES'
  },
  {
    name: 'Thusitha',
    department: 'DELIVERCMES'
  },
  {
    name: 'Jayathissa',
    department: 'DELIVERCMES'
  },
  {
    name: 'Dinesh',
    department: 'DELIVERCMES'
  },
  {
    name: 'Ravindu',
    department: 'DELIVERCMES'
  },
  {
    name: 'Prasanna',
    department: 'DELIVERCMES'
  },
  {
    name: 'Chathura',
    department: 'ASU'
  },
  {
    name: 'Dilan',
    department: 'ASU'
  },
  {
    name: 'Sajeewa',
    department: 'ASU'
  },
  {
    department: 'FINANCE',
    name: 'Shiranthi'
  },
  {
    department: 'FINANCE',
    name: 'Thilan'
  },
  {
    department: 'FINANCE',
    name: 'Kaushi'
  },
  {
    department: 'FINANCE',
    name: 'Danushka'
  },
  {
    department: 'FINANCE',
    name: 'Kasun'
  },
  {
    department: 'FINANCE',
    name: 'Saumya'
  },
  {
    department: 'FINANCE',
    name: 'Milini'
  },
]

const getTotalUsers = (id) => users.filter(u => u.department === id).length;

export const departments = [
  {
    id: 'MDTEAM',
    label: 'MD & Team',
    score: 0,
    totalParticipated: 0,
    totalUsers: getTotalUsers('MDTEAM')
  },
  {
    id: 'HC',
    label: 'Healthcare',
    score: 0,
    totalParticipated: 0,
    totalUsers: getTotalUsers('HC')
  },
  {
    id: 'MPG',
    label: 'MPG',
    score: 0,
    totalParticipated: 0,
    totalUsers: getTotalUsers('MPG')
  }, {
    id: 'CSC',
    label: 'CSC',
    score: 0,
    totalParticipated: 0,
    totalUsers: getTotalUsers('CSC')
  }
  , {

    id: 'HRPROCUREMENT',
    label: 'HR & Procurement',
    score: 0,
    totalParticipated: 0,
    totalUsers: getTotalUsers('HRPROCUREMENT')
  }
  , {
    id: 'OPS',
    label: 'Operations',
    score: 0,
    totalParticipated: 0,
    totalUsers: getTotalUsers('OPS')
  },
  {
    id: 'DELIVERCMES',
    label: 'Deliver & CMES',
    score: 0,
    totalParticipated: 0,
    totalUsers: getTotalUsers('DELIVERCMES')
  }, {
    id: 'ASU',
    label: 'ASU',
    score: 0,
    totalParticipated: 0,
    totalUsers: getTotalUsers('ASU')
  }, {
    id: 'FINANCE',
    label: 'Finance',
    score: 0,
    totalParticipated: 0,
    totalUsers: getTotalUsers('FINANCE')
  }
]


export const finalQuestions = [
  {
    id: 1,
    label: "1) What is the “Goal “stated in our HSE Policy",
    correctAnswers: 12,
    choices: [
      {
        id: 11,
        label: "Safety and environmental responsibility are core values at Linde and integral in all that we do",

      },
      {
        id: 12,
        label: " At Linde we are driven to ensure no harm comes from our actions to people, the environment or the communities in which we operate",

      },
      {
        id: 13,
        label: "Compliance with applicable laws, regulations and Linde policies is a licence to operate for our employees, contractors, suppliers and partners",
      },
      {
        id: 14,
        label: "All above",

      }

    ]
  },
  {
    id: 2,
    label: "2) APAC Safety Goal is to reduce 50% (baseline 2018) incident by:",
    correctAnswers: 23,
    choices: [
      {
        id: 21,
        label: "2019",

      },
      {
        id: 22,
        label: "2020",

      },
      {
        id: 23,
        label: "2021",
      },
      {
        id: 24,
        label: "2022",

      }

    ]
  },
  {
    id: 3,
    label: "3) The HSE Policy consists of: ",
    correctAnswers: 31,
    choices: [
      {
        id: 31,
        label: "Our Goal, Our four Values and Commitments and Our seven Safety Principles, ",

      },
      {
        id: 32,
        label: "Our Goals, Our seven values and commitments and our four safety principles. ",

      },
      {
        id: 33,
        label: "Our Goals,  Our three values and commitments and our seven safety principles ",
      },
    ]
  },
  {
    id: 4,
    label: "4) 	Which one is not  the HSE values & commitment? ",
    correctAnswers: 45,
    choices: [
      {
        id: 41,
        label: "Safety and environmental responsibility are core values at Linde and integral in all that we do. ",

      },
      {
        id: 42,
        label: "Compliance with applicable laws, regulations, and Linde policies is a license to operate for our employees, contractors, suppliers and partners.",

      },
      {
        id: 43,
        label: "HSE Ownership through visible, demonstrated leadership across the organization.",
      },
      {
        id: 44,
        label: "Collaboration with the industry and other professional associations to continuously advance the safe management of our products and installations."
      },
      {
        id: 45,
        label: "Health, Safety and Environment is a line management accountability"
      }
    ]
  },
  {
    id: 5,
    label: "5) What is the 4th Safety Principle listed in the policy? ",
    correctAnswers: 53,
    choices: [
      {
        id: 51,
        label: "Our commitment to Safety will yield results",

      },
      {
        id: 52,
        label: "Acting safely is condition of employment and supplier contracts ",

      },
      {
        id: 53,
        label: "Our contractors are employees are obliged to stop a job or refuse to perform it if it cannot be performed safely",
      },
      {
        id: 54,
        label: "Operational disciplines is key to prevent incidents "
      },
    ]
  },
  {
    id: 6,
    label: "6) Which of the following are listed as Safety Principles in the HSE Policy?",
    type: 'PARA',
    subLabels: [
      {
        subLabel: "a)	All HSE Incidents need to be reported and learnings taken from them"
      },
      {
        subLabel: "b)	HSE Ownership through visible and demonstrated leadership needs to exist at all levels of the organization"
      },
      {
        subLabel: "c)	Safety and environmental responsibility are core values at Linde and integral in all that we do"
      },
      {
        subLabel: "d).	We are responsible for our own safety and that of the others.",
      }
    ],
    correctAnswers: 63,
    choices: [
      {
        id: 61,
        label: "All answers are correct",

      },
      {
        id: 62,
        label: "A & B are correct",

      },
      {
        id: 63,
        label: "A & D are correct ",
      },
      {
        id: 64,
        label: "B & C are correct "
      },
    ]
  },
  {
    id: 7,
    label: "7) Which of the following are not listed as Safety Principles in the HSE Policy?  ",
    type: 'PARA',
    subLabels: [
      {
        subLabel: "a)	HSE ownership through visible, demonstrated leadership across the organization"
      },
      {
        subLabel: "b)	Our employees and contractors are obliged to stop a job or refuse to perform it if cannot be performed safely"
      },
      {
        subLabel: "c) Acting safety is condition of our employment and supply contract."
      },
      {
        subLabel: "d) We are responsible for our own safety and that of the others.",
      }
    ],
    correctAnswers: 71,
    choices: [
      {
        id: 71,
        label: "a only",
      },
      {
        id: 72,
        label: " c Only",

      },
      {
        id: 73,
        label: "a & d ",
      },
      {
        id: 74,
        label: "d & c"
      },
    ]
  },
  {
    id: 8,
    label: "8) HSE policy need to be revise every………… years ",
    correctAnswers: 83,
    choices: [
      {
        id: 81,
        label: "1",
      },
      {
        id: 82,
        label: "2",

      },
      {
        id: 83,
        label: "3",
      },
      {
        id: 84,
        label: "4"
      },
    ]
  },
  {
    id: 9,
    label: "9) Which of the following statement is TRUE?",
    correctAnswers: 93,
    choices: [
      {
        id: 91,
        label: "Reporting of lower severity incidents is recommended but not mandatory",
      },
      {
        id: 92,
        label: "Near misses do not need to be reported because we cannot take any learning from them",

      },
      {
        id: 93,
        label: "All HSE incidents must be reported, and learnings taken from them",
      },
    ]
  },
  {
    id: 10,
    label: "10) Linde Manager’s rules & responsibility regarding HSE policy: ",
    type: 'PARA',
    subLabels: [
      {
        subLabel: "a)	Must ensure that their employees and contractors understand the requirements of the HSE Policy."
      },
      {
        subLabel: "b) Should demonstrate the importance of the HSE Policy by ensuring that their own behaviours actively promote and serve as a role-model for the desired HSE values and principles"
      },
      {
        subLabel: "c) Must ensure that the HSE Policy is communicated to our business partners and that they actively cooperate with Linde to achieve compliance with the policy."
      },
      {
        subLabel: "d) ..................................................",
      }
    ],
    correctAnswers: 104,
    choices: [
      {
        id: 101,
        label: "A only ",
      },
      {
        id: 102,
        label: " A & B Only",

      },
      {
        id: 103,
        label: "A & D  Only ",
      },
      {
        id: 104,
        label: "All above",
      },
    ]
  },
  {
    id: 11,
    label: "11) For which statement of HSE policy the below sentence best fixed into?",
    type: "PARA",
    subLabels: [
      {
        subLabel: "We want everyone think on HSE aspects in every decision they take while in work, travelling or at home and help others to do so: "
      }
    ],
    correctAnswers: 112,
    choices: [
      {
        id: 111,
        label: "HSE is line manager accountability ",
      },
      {
        id: 112,
        label: "Safety and Environments are core values at Linde and integral in all what we do ",

      },
      {
        id: 113,
        label: "Not an applicable to safety policy since it does not address what we do at home",
      },
      {
        id: 114,
        label: "Compliance with applicable laws and regulations and Linde policies ",
      },
    ]
  },
  {
    id: 12,
    label: "12) What  do you mean by the LWCR ",
    correctAnswers: 122,
    choices: [
      {
        id: 121,
        label: "Lost Work Case rate- Number of Lost work cases per 500,000  man hours ",
      },
      {
        id: 122,
        label: "Lost Work Case  Rate-  Number of Lost work cases per 200,000  man hours ",

      },
      {
        id: 123,
        label: "Lost Work Case  Rate-  Number of Lost work cases per 1,000,000  man hours",
      },
    ]
  },
  {
    id: 13,
    label: "13) For which statement of HSE policy the below sentence best fixed into     ",
    type: 'PARA',
    subLabels: [
      {
        subLabel: "We expect all people working for or with Linde to behave and conduct themselves in a manner which demonstrate the highest value for HSE  all of the  time ,in very task we perform ,  in every  activity we take part and in every recruitment and investment , every journey , every meeting, every site visit etc. "
      },
    ],
    correctAnswers: 134,
    choices: [
      {
        id: 131,
        label: "HSE is line manager accountability ",
      },
      {
        id: 132,
        label: "Safety and Environments are core values at Linde and integral in all what we do ",

      },
      {
        id: 133,
        label: "HSE Ownership through visible demonstrated leadership ",
      },
      {
        id: 134,
        label: "Acting safely is condition of our employment and supplier contract  ",
      },
    ]
  },
  {
    id: 14,
    label: "14) We shall use HSE policy  principles to challenge our decisions and action:  True  Or False ?",
    correctAnswers: 141,
    choices: [
      {
        id: 141,
        label: "True",
      },
      {
        id: 142,
        label: "False",

      },
    ]
  },
  {
    id: 15,
    label: "15) What  do you mean by the CVIR ?",
    correctAnswers: 152,
    choices: [
      {
        id: 151,
        label: "Number of  all vehicle incidents per 1,000,000 Km travel",
      },
      {
        id: 152,
        label: "Number of commercial vehicles travel per 1,000,000 Km travel",

      },
      {
        id: 153,
        label: "Number of commercial vehicle accidents per 500,000 Km travels",

      },
      {
        id: 154,
        label: "Number of all vehicle incidents per 500,000 km travel ",

      },
    ]
  },
]

export const questions = [
  {
    id: 1,
    label: "What is the “Goal “stated in our HSE Policy",
    correctAnswers: 11,
    choices: [
      {
        id: 11,
        label: "Safety and environmental responsibility are core values at Linde and integral in all that we do ",

      },
      {
        id: 12,
        label: "At Linde we are driven to ensure no harm comes from our actions to people, the environment or the communities in which we operate",

      },
      {
        id: 13,
        label: "Compliance with applicable laws, regulations and Linde policies is a licence to operate for our employees, contractors, suppliers and partners",
        isCorrect: true
      },
      {
        id: 14,
        label: "All above",

      }

    ]
  },
  {
    id: 2,
    label: "APAC Safety Goal is to reduce 50% (baseline 2018) incident by:",
    correctAnswers: 21,
    choices: [
      {
        id: 21,
        label: "2019",

      },
      {
        id: 22,
        label: "2020",
      },
      {
        id: 23,
        label: "2021",
      },
      {
        id: 24,
        label: "2022",
      }

    ]
  },
  {
    id: 3,
    label: "3.	The HSE {Policy consists of ",
    correctAnswers: 31,
    choices: [
      {
        id: 31,
        label: "Our Goal, Our four Values and Commitments and Our seven Safety Principles",

      },
      {
        id: 32,
        label: " Our Goals, Our seven values and commitments and our four safety principles",

      },
      {
        id: 33,
        label: "Our Goals,Our three values and commitments and our seven safety principles ",

      },

    ]
  }
]
