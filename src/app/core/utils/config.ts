export const firebaseConfig: any = {
  serverkey: ""
};
export const currency: string = '₦ '
export const url: string = '/api/'
// export const url: string = 'https://online.radixpension.com/RadixWebAPI/api/'

export const STORAGE_REQ_KEY: string =  "radixstorage"
export const secretKey: string = 'MIICXAIBAAKBgQDfmlc2EgrdhvakQApmLCDOgP0nNERInBheMh7J/r5aU8PUAIpGXET/8';

export const paystack = {
  "secret_key"  : "sk_test_a0d0acba6cec362f3db8bac0985e37ba2a482e8d",
  "public_key" : "pk_test_168b9a3d26c300225684aa04a01160a700ff9510"
}

export const pages = [
  {
    url: "/overview",
    title: "Account Summary",
    icon: "file-tray-full"
  },
  {
    url: "/transactions",
    title: "Account Transactions",
    icon: "card"
  },
  {
    url: "/calculator",
    title: "Pension Calculator",
    icon: "calculator"
  }
]

export const micropensionpages = [
  {
    url: "/micropension",
    title: "Information",
  },
  {
    url: "/micropension/faqs",
    title: "Micropension Faqs",
  },
  {
    url: "/micropension/payments",
    title: "Payment Options",
  },
  {
    url: "/micropension/contribution",
    title: "Make Your Contribution",
  },
]

export const subpages = [
  {
    url: "/investment-options",
    title: "Investment Options",
    icon: "options"
  },
  {
    icon: "help-circle",
    url: "/supports/faqs",
    title: "Frequently Asked Questions",
  },
  {
    icon: "receipt",
    url: "/supports/terms",
    title: "Terms & Conditions",
  },
  {
    icon: "document-attach",
    url: "/supports/privacy",
    title: "Privacy Policy",
  },
  {
    icon: "people",
    url: "/supports/chat-with-us",
    title: "Chat with Us",
  }
]

export const faqs = {
  "micropension": [
      {
          "name": "What is Micro Pension Plan? ",
          "children": [
              {
                  "name": "Micro Pension Plan is an arrangement under the Contributory Pension Scheme (CPS) that allows the self-employed and persons working in organisations with less than three (3) employees to save towards retirement.",
                  "children": [
                      {
                          "name": "Micro Pension Plan is an arrangement under the Contributory Pension Scheme (CPS) that allows the self-employed and persons working in organisations with less than three (3) employees to save towards retirement.",
                          "information": "Micro Pension Plan is an arrangement under the Contributory Pension Scheme (CPS) that allows the self-employed and persons working in organisations with less than three (3) employees to save towards retirement.",
                          "price": "10"
                      }
                  ]
              }

          ]
      },
      {
          "name": "How do I register with Cardinalstone Pension for Micro Pension Plan? ",
          "children": [
              {
                  "name": "An eligible contributor can register with Cardinalstone Pension by completing the registration form either physically or electronically. A Personal Identification Number (PIN) would be issued within 24 hours of registration.",
                  "children": [
                      {
                          "name": "How do I register with Cardinalstone Pension for Micro Pension Plan?",
                          "information": "An eligible contributor can register with Cardinalstone Pension by completing the registration form either physically or electronically. A Personal Identification Number (PIN) would be issued within 24 hours of registration.",
                          "price": "10"
                      }
                  ]
              }

          ]
      },
      {
          "name": "How often can one contribute under the Micro Pension Plan?",
          "children": [
              {
                  "name": "Contributions can be made daily, weekly, monthly or as may be convenient to the contributor.",
                  "children": [
                      {
                          "name": "Contributions can be made daily, weekly, monthly or as may be convenient to the contributor.",
                          "information": "Contributions can be made daily, weekly, monthly or as may be convenient to the contributor.",
                          "price": "10"
                      }
                  ]
              }

          ]
      },
      {
          "name": "How can I make contributions under the Micro Pension Plan? ",
          "children": [
              {
                  "name": "Contributions can be made by cash deposit or electronic transfer through any payment platform, or other financial service agents approved by CBN. ",
                  "children": [
                      {
                          "name": "Contributions can be made by cash deposit or electronic transfer through any payment platform, or other financial service agents approved by CBN. ",
                          "information": "Contributions can be made daily, weekly, monthly or as may be convenient to the contributor.",
                          "price": "10"
                      }
                  ]
              }

          ]
      },
      {
          "name": "How do I access my RSA under the Micro Pension Plan?",
          "children": [
              {
                  "name": "Every contribution received is divided into two portions. The contingent portion (40%) and the Retirement Benefit portion (60%).",
                  "children": [
                      {
                          "name": "Every contribution received is divided into two portions. The contingent portion (40%) and the Retirement Benefit portion (60%). ",
                          "information": "Every contribution received is divided into two portions. The contingent portion (40%) and the Retirement Benefit portion (60%).",
                          "price": "10"
                      }
                  ]
              }

          ]
      },
      {
          "name": "How do I withdraw my contingent portion? ",
          "children": [
              {
                  "name": "The contingent portion can be withdrawn totally or partially only after three (3) months of initial contribution. Subsequently, it could be made weekly. Contributors my decide to convert their contingent portion to retirement benefit portion either partially or in full at the end of each year.",
                  "children": [
                      {
                          "name": "The contingent portion can be withdrawn totally or partially only after three (3) months of initial contribution. Subsequently, it could be made weekly. Contributors my decide to convert their contingent portion to retirement benefit portion either partially or in full at the end of each year. ",
                          "information": "The contingent portion can be withdrawn totally or partially only after three (3) months of initial contribution. Subsequently, it could be made weekly. Contributors my decide to convert their contingent portion to retirement benefit portion either partially or in full at the end of each year.",
                          "price": "10"
                      }
                  ]
              }

          ]
      }
  ],
  "rsa": [
      {
          "name": "What is the new Pension scheme in Nigeria about? ",
          "children": [
              {
                  "name": "The new Pension scheme is a contributory privately managed scheme. Every eligible Employee shall maintain a Retirement Savings Account in his name with the Pension Fund Administrator (PFA) of his choice. The employee shall notify his employer of the PFA chosen and the identity of the Retirement Savings Account (RSA) opened.The employee and employer contribute a minimum statutory percentage of the employee’s monthly emoluments (comprising basic salary, housing allowance and transport allowance) into the Retirement Savings Account of the employee.The contributions would be managed and administered by professional Fund Administrators and held in custody by licensed Pension Fund Custodians(PFC).At retirement, the amount in the employee’s Retirement Savings Account would be the total contributions plus income and capital gain earned on the contributions made.",
              "children": [
                      {
                          "name": "The new Pension scheme is a contributory privately managed scheme. Every eligible Employee shall maintain a Retirement Savings Account in his name with the Pension Fund Administrator (PFA) of his choice. The employee shall notify his employer of the PFA chosen and the identity of the Retirement Savings Account (RSA) opened.The employee and employer contribute a minimum statutory percentage of the employee’s monthly emoluments(comprising basic salary, housing allowance and transport allowance) into the Retirement Savings Account of the employee.The contributions would be managed and administered by professional Fund Administrators and held in custody by licensed Pension Fund Custodians(PFC).At retirement, the amount in the employee’s Retirement Savings Account would be the total contributions plus income and capital gain earned on the contributions made.",
                      "information": `The new Pension scheme is a contributory privately managed scheme. Every eligible Employee shall maintain a Retirement Savings Account in his name with the Pension Fund Administrator (PFA) of his choice. The employee shall notify his employer of the PFA chosen and the identity of the Retirement Savings Account (RSA) opened.

              The employee and employer contribute a minimum statutory percentage of the employee’s monthly emoluments(comprising basic salary, housing allowance and transport allowance) into the Retirement Savings Account of the employee.
              
              The contributions would be managed and administered by professional Fund Administrators and held in custody by licensed Pension Fund Custodians(PFC).At retirement, the amount in the employee’s Retirement Savings Account would be the total contributions plus income and capital gain earned on the contributions made.`,
                      "price": "10"
                  }
                  ]
          }

          ]
      },
      {
          "name": "Will the new Pension scheme affect every worker?",
          "children": [
              {
                  "name": "The scheme will not affect existing pensioners and those who as at the commencement of the Act had 3 years or less to retire as well as persons under S.291 of the Constitution of Federal Republic of Nigeria, that is, Judicial Officers of the Supreme Court and Appeal Court and any other Court as specified in the Constitution. However, all other employees in the Federal Public Service, the Federal Capital Territory (FCT) and the private sector (where there are three or more employees) are affected by the new scheme.",
                  "children": [
                      {
                          "name": "The scheme will not affect existing pensioners and those who as at the commencement of the Act had 3 years or less to retire as well as persons under S.291 of the Constitution of Federal Republic of Nigeria, that is, Judicial Officers of the Supreme Court and Appeal Court and any other Court as specified in the Constitution. However, all other employees in the Federal Public Service, the Federal Capital Territory (FCT) and the private sector (where there are three or more employees) are affected by the new scheme.",
                          "information": "The scheme will not affect existing pensioners and those who as at the commencement of the Act had 3 years or less to retire as well as persons under S.291 of the Constitution of Federal Republic of Nigeria, that is, Judicial Officers of the Supreme Court and Appeal Court and any other Court as specified in the Constitution. However, all other employees in the Federal Public Service, the Federal Capital Territory (FCT) and the private sector (where there are three or more employees) are affected by the new scheme.",
                          "price": "10"
                      }
                  ]
              }

          ]
      },
      {
          "name": "What are the objectives of the new Pension scheme in Nigeria?",
          "children": [
              {
                  "name": `The objectives are:

             1. To ensure that every eligible person who has worked in either the public or private sector receives his retirement benefits as and when due;
                  2. To assist employees by ensuring that they save to cater for their livelihood during old age; and,
                  3.To establish a uniform set of rules and regulations for the administration and payment of retirement benefits in both the public and private sectors
          `,
              "children": [
                      {
                          "name": `The objectives are:

                      1. To ensure that every eligible person who has worked in either the public or private sector receives his retirement benefits as and when due;
                          2. To assist employees by ensuring that they save to cater for their livelihood during old age; and,
                          3.To establish a uniform set of rules and regulations for the administration and payment of retirement benefits in both the public and private sectors`,
                      "information": `The objectives are:

                      1. To ensure that every eligible person who has worked in either the public or private sector receives his retirement benefits as and when due;
                          2. To assist employees by ensuring that they save to cater for their livelihood during old age; and,
                          3.To establish a uniform set of rules and regulations for the administration and payment of retirement benefits in both the public and private sectors.`,
                      "price": "10"
                  }
                  ]
          }

          ]
      },
      {
          "name": "How much will the employer and the employee need to contribute under the new Pension Scheme and what happens to the contributions?",
          "children": [
              {
                  "name": `
              An employee contributes a percentage of his monthly emolument that is, the sum of basic salary, transportation, and housing allowance and the employer also contributes a percentage of the employee’s monthly emolument towards the retirement benefits of the employee.
              
              For workers in the public and private sectors, the employee contributes a minimum of Eight percent of his monthly emolument
              
              Employers in the public and private sectors are required to contribute a minimum of Ten percent of the Employee’s monthly emolument.An employer may, however, elect to bear the full burden of the scheme provided that the total contribution is not less than Eighteen percent of the Employee’s monthly emolument.
              
              The total contribution(employee’s and employers) will be paid out by the employer directly to the Pension Fund Custodian(PFC) and the funds will be managed and invested by a Pension Fund Administrator(PFA) of the employee’s choice.
              `,
              "children": [
                      {
                          "name": `
                      An employee contributes a percentage of his monthly emolument that is, the sum of basic salary, transportation, and housing allowance and the employer also contributes a percentage of the employee’s monthly emolument towards the retirement benefits of the employee.
                      
                      For workers in the public and private sectors, the employee contributes a minimum of Eight percent of his monthly emolument
                      
                      Employers in the public and private sectors are required to contribute a minimum of Ten percent of the Employee’s monthly emolument.An employer may, however, elect to bear the full burden of the scheme provided that the total contribution is not less than Eighteen percent of the Employee’s monthly emolument.
                      
                      The total contribution(employee’s and employers) will be paid out by the employer directly to the Pension Fund Custodian(PFC) and the funds will be managed and invested by a Pension Fund Administrator(PFA) of the employee’s choice.
                      `,
                      "information": `An employee contributes a percentage of his monthly emolument that is, the sum of basic salary, transportation, and housing allowance and the employer also contributes a percentage of the employee’s monthly emolument towards the retirement benefits of the employee.
                      
                      For workers in the public and private sectors, the employee contributes a minimum of Eight percent of his monthly emolument
                      
                      Employers in the public and private sectors are required to contribute a minimum of Ten percent of the Employee’s monthly emolument.An employer may, however, elect to bear the full burden of the scheme provided that the total contribution is not less than Eighteen percent of the Employee’s monthly emolument.
                      
                      The total contribution(employee’s and employers) will be paid out by the employer directly to the Pension Fund Custodian(PFC) and the funds will be managed and invested by a Pension Fund Administrator(PFA) of the employee’s choice.
                      `,
                      "price": "10"
                  }
                  ]
          }

          ]
      },
      {
          "name": "What are the functions of a Pension Fund Administrator (PFA)",
          "children": [
              {
                  "name": `A Pension Fund Administrator(PFA) is charged with the responsibility of managing and investing the pension funds and assets.It is the responsibility of the PFA to;

                  Open a Retirement Savings Account(RSA) for all employees who choose it
                  Invest and manage pension funds and assets
                  Maintain books of account on all transactions relating to pension funds managed
                  Provide regular information on investment strategy
                  Market returns and other performance indicators to the RSA holders
                  Provide customer service support to RSA holders
                  Ensure that retirement benefits are paid to employees and be responsible for all calculations in relation to retirement benefits.
              
              `,
              "children": [
                      {
                          "name": `A Pension Fund Administrator(PFA) is charged with the responsibility of managing and investing the pension funds and assets.It is the responsibility of the PFA to;

                          Open a Retirement Savings Account(RSA) for all employees who choose it
                          Invest and manage pension funds and assets
                          Maintain books of account on all transactions relating to pension funds managed
                          Provide regular information on investment strategy
                          Market returns and other performance indicators to the RSA holders
                          Provide customer service support to RSA holders
                          Ensure that retirement benefits are paid to employees and be responsible for all calculations in relation to retirement benefits.
                       `,
                      "information": `A Pension Fund Administrator(PFA) is charged with the responsibility of managing and investing the pension funds and assets.It is the responsibility of the PFA to;

                          Open a Retirement Savings Account(RSA) for all employees who choose it
                          Invest and manage pension funds and assets
                          Maintain books of account on all transactions relating to pension funds managed
                          Provide regular information on investment strategy
                          Market returns and other performance indicators to the RSA holders
                          Provide customer service support to RSA holders
                          Ensure that retirement benefits are paid to employees and be responsible for all calculations in relation to retirement benefits.
                      `,
                      "price": "10"
                  }
                  ]
          }

          ]
      },
      {
          "name": "What are the functions of a Pension Fund Custodian (PFC)",
          "children": [
              {
                  "name": "The Pension Fund Custodian (PFC) is charged with holding contributions and investment instruments on behalf of the Pension Fund Administrator. Within seven (7) days of the payment of salaries, the employer remits the contributions to the PFC, who receives it on behalf of the PFA and within 24 hours notifies the PFA of receipt of the contributions. The PFC’s functions also include holding all the pension fund and assets in safe custody and settling transactions and undertaking activities relating to the administration (such as a collection of dividends) on behalf of the PFA.",
                  "children": [
                      {
                          "name": "The Pension Fund Custodian (PFC) is charged with holding contributions and investment instruments on behalf of the Pension Fund Administrator. Within seven (7) days of the payment of salaries, the employer remits the contributions to the PFC, who receives it on behalf of the PFA and within 24 hours notifies the PFA of receipt of the contributions. The PFC’s functions also include holding all the pension fund and assets in safe custody and settling transactions and undertaking activities relating to the administration (such as a collection of dividends) on behalf of the PFA. ",
                          "information": "The Pension Fund Custodian (PFC) is charged with holding contributions and investment instruments on behalf of the Pension Fund Administrator. Within seven (7) days of the payment of salaries, the employer remits the contributions to the PFC, who receives it on behalf of the PFA and within 24 hours notifies the PFA of receipt of the contributions. The PFC’s functions also include holding all the pension fund and assets in safe custody and settling transactions and undertaking activities relating to the administration (such as a collection of dividends) on behalf of the PFA.",
                          "price": "10"
                      }
                  ]
              }

          ]
      },
      {
          "name": "What is the main difference between PFA and PFC?",
          "children": [
              {
                  "name": "The main difference between the PFA and the PFC is that the PFA manages the pension funds and decides which kind of investments to make while the PFC holds the pension funds and assets and acts on the order of the PFA.",
                  "children": [
                      {
                          "name": "The main difference between the PFA and the PFC is that the PFA manages the pension funds and decides which kind of investments to make while the PFC holds the pension funds and assets and acts on the order of the PFA. ",
                          "information": "The main difference between the PFA and the PFC is that the PFA manages the pension funds and decides which kind of investments to make while the PFC holds the pension funds and assets and acts on the order of the PFA.",
                          "price": "10"
                      }
                  ]
              }

          ]
      },
      {
          "name": "Who is the regulator and what is its role? ",
          "children": [
              {
                  "name": "The National Pension Commission (PenCom) is charged with the regulation and supervision of the pension schemes and has powers to formulate, direct and oversee the overall policy on pension matters in Nigeria.",
                  "children": [
                      {
                          "name": "The National Pension Commission (PenCom) is charged with the regulation and supervision of the pension schemes and has powers to formulate, direct and oversee the overall policy on pension matters in Nigeria.",
                          "information": "The National Pension Commission (PenCom) is charged with the regulation and supervision of the pension schemes and has powers to formulate, direct and oversee the overall policy on pension matters in Nigeria.",
                          "price": "10"
                      }
                  ]
              }

          ]
      },
      {
          "name": "Are pension contributions paid to PFA? ",
          "children": [
              {
                  "name": "No. The employer sends his contribution as well as the employees, directly to the PFC who collects it on behalf of the PFA.",
                  "children": [
                      {
                          "name": "No. The employer sends his contribution as well as the employees, directly to the PFC who collects it on behalf of the PFA. ",
                          "information": "No. The employer sends his contribution as well as the employees, directly to the PFC who collects it on behalf of the PFA.",
                          "price": "10"
                      }
                  ]
              }

          ]
      },
      {
          "name": "How do I know the status of my contributions?",
          "children": [
              {
                  "name": "Once you open a Retirement Savings Account (RSA) with a Pension Fund Administrator (PFA) of choice, your PFA will issue periodic statements of account showing how much has been contributed and returns on the contributions to date.",
                  "children": [
                      {
                          "name": "Once you open a Retirement Savings Account (RSA) with a Pension Fund Administrator (PFA) of choice, your PFA will issue periodic statements of account showing how much has been contributed and returns on the contributions to date.",
                          "information": "Once you open a Retirement Savings Account (RSA) with a Pension Fund Administrator (PFA) of choice, your PFA will issue periodic statements of account showing how much has been contributed and returns on the contributions to date.",
                          "price": "10"
                      }
                  ]
              }

          ]
      },
      {
          "name": "Can I change my PFA? ",
          "children": [
              {
                  "name": "Yes, you have the freedom to transfer your Retirement Savings Account from one PFA to another once a year without adducing the reason for such transfer. This will be subject to the Commission’s implementation of the transfer window.",
                  "children": [
                      {
                          "name": "Yes, you have the freedom to transfer your Retirement Savings Account from one PFA to another once a year without adducing the reason for such transfer. This will be subject to the Commission’s implementation of the transfer window. ",
                          "information": "Yes, you have the freedom to transfer your Retirement Savings Account from one PFA to another once a year without adducing the reason for such transfer. This will be subject to the Commission’s implementation of the transfer window.",
                          "price": "10"
                      }
                  ]
              }

          ]
      },
      {
          "name": "Can I make extra or voluntary Contributions to my Retirement Savings Account under the Scheme?",
          "children": [
              {
                  "name": `Yes, you can make voluntary contributions to your RSA in addition to the contributions made by yourself and your employer. Also, people exempt from the scheme who wish to save towards their retirement may open a Retirement Savings Account and make Voluntary contributions to their RSA.
              
              Note: Voluntary contributions may be withdrawn from the RSA at any time but the Income generated will be liable to tax if withdrawn within 5 years of the date the voluntary contribution is made. `,
              "children": [
                      {
                          "name": `Yes, you can make voluntary contributions to your RSA in addition to the contributions made by yourself and your employer. Also, people exempt from the scheme who wish to save towards their retirement may open a Retirement Savings Account and make Voluntary contributions to their RSA.
              
                      Note: Voluntary contributions may be withdrawn from the RSA at any time but the Income generated will be liable to tax if withdrawn within 5 years of the date the voluntary contribution is made. `,
                      "information": `Yes, you can make voluntary contributions to your RSA in addition to the contributions made by yourself and your employer. Also, people exempt from the scheme who wish to save towards their retirement may open a Retirement Savings Account and make Voluntary contributions to their RSA.
              
                      Note: Voluntary contributions may be withdrawn from the RSA at any time but the Income generated will be liable to tax if withdrawn within 5 years of the date the voluntary contribution is made. `,
                      "price": "10"
                  }
                  ]
          }

          ]
      },
      {
          "name": "When and how will I have access to the funds in my Retirement Savings Account?",
          "children": [
              {
                  "name": `At your retirement or upon attaining the age of 50, whichever comes later, you may utilize the balance standing to the credit of your Retirement Savings Account (RSA) for;
              
              Programmed or monthly withdrawals calculated on the basis of an expected life span or
              
              You may purchase an annuity for life from a life insurance company with monthly or quarterly payments or
              
              You may withdraw a lump sum provided that the amount left will be enough to procure an annuity or fund programmed withdrawals that will produce an amount not less than 50% of your annual remuneration as at the date of retirement.`,
              "children": [
                      {
                          "name": `At your retirement or upon attaining the age of 50, whichever comes later, you may utilize the balance standing to the credit of your Retirement Savings Account (RSA) for;
              
                      Programmed or monthly withdrawals calculated on the basis of an expected life span or
                      
                      You may purchase an annuity for life from a life insurance company with monthly or quarterly payments or
                      
                      You may withdraw a lump sum provided that the amount left will be enough to procure an annuity or fund programmed withdrawals that will produce an amount not less than 50% of your annual remuneration as at the date of retirement.`,
                      "information": `At your retirement or upon attaining the age of 50, whichever comes later, you may utilize the balance standing to the credit of your Retirement Savings Account (RSA) for;
              
                      Programmed or monthly withdrawals calculated on the basis of an expected life span or
                      
                      You may purchase an annuity for life from a life insurance company with monthly or quarterly payments or
                      
                      You may withdraw a lump sum provided that the amount left will be enough to procure an annuity or fund programmed withdrawals that will produce an amount not less than 50% of your annual remuneration as at the date of retirement.`,
                      "price": "10"
                  }
                  ]
          }

          ]
      },
      {
          "name": "Can I withdraw any portion of it before age 50? ",
          "children": [
              {
                  "name": `If an employee retires before the age of 50 years in accordance with the terms and conditions of his employment, or as a result of physical or mental disability, he may withdraw a lump sum of money of not more than 25% of the amount in his Retirement Savings Account (RSA), provided that such withdrawals shall only be made after four months of retirement and the retired employee does not secure another employment.
              
              The balance of 75% will be used to purchase an annuity from a life insurance company or to fund programmed withdrawals from the RSA upon the attainment of age 50. On the other hand, the balance is paid EnBloc provided that it is less than or equal to N550, 000.00 `,
              "children": [
                      {
                          "name": `If an employee retires before the age of 50 years in accordance with the terms and conditions of his employment, or as a result of physical or mental disability, he may withdraw a lump sum of money of not more than 25% of the amount in his Retirement Savings Account (RSA), provided that such withdrawals shall only be made after four months of retirement and the retired employee does not secure another employment.
              
                      The balance of 75% will be used to purchase an annuity from a life insurance company or to fund programmed withdrawals from the RSA upon the attainment of age 50. On the other hand, the balance is paid EnBloc provided that it is less than or equal to N550, 000.00 `,
                      "information": `If an employee retires before the age of 50 years in accordance with the terms and conditions of his employment, or as a result of physical or mental disability, he may withdraw a lump sum of money of not more than 25% of the amount in his Retirement Savings Account (RSA), provided that such withdrawals shall only be made after four months of retirement and the retired employee does not secure another employment.
              
                      The balance of 75% will be used to purchase an annuity from a life insurance company or to fund programmed withdrawals from the RSA upon the attainment of age 50. On the other hand, the balance is paid EnBloc provided that it is less than or equal to N550, 000.00 `,
                      "price": "10"
                  }
                  ]
          }

          ]
      },
      {
          "name": "Who decides how my PFA invests my funds?",
          "children": [
              {
                  "name": `Your PFA shall invest the pension funds strictly within the guidelines provided by the National Pension Commission (PenCom). Every PFA is mandated to have both an Investment Strategy Committee and a Risk Management Committee.
              
              The functions of these committees include the formulation of strategies for complying with the investment guidelines issued by PenCom and determining the risk profile of any such Investment.`,
              "children": [
                      {
                          "name": `Your PFA shall invest the pension funds strictly within the guidelines provided by the National Pension Commission (PenCom). Every PFA is mandated to have both an Investment Strategy Committee and a Risk Management Committee.
              
                      The functions of these committees include the formulation of strategies for complying with the investment guidelines issued by PenCom and determining the risk profile of any such Investment.`,
                      "information": `Your PFA shall invest the pension funds strictly within the guidelines provided by the National Pension Commission (PenCom). Every PFA is mandated to have both an Investment Strategy Committee and a Risk Management Committee.
              
                      The functions of these committees include the formulation of strategies for complying with the investment guidelines issued by PenCom and determining the risk profile of any such Investment.`,
                      "price": "10"
                  }
                  ]
          }

          ]
      },
      {
          "name": "What happens to the amount in an employee’s Retirement Savings Account in the event of the employee’s Death? ",
          "children": [
              {
                  "name": `In the event of the employee’s death, the amount in an employee’s Retirement Savings Account (RSA) would be paid out by the Pension Fund Administrator (PFA) as follows:
              
                  To a beneficiary under a will or
                  To the spouse and children of the deceased; or in the absence of spouse and children or
                  To the recorded next- of kin / any person designated by the deceased when he was alive or(in the absence of such designation)
                  To any person appointed by the probate registry as administrator of the estate of the deceased `,
              "children": [
                  {
                      "name": `In the event of the employee’s death, the amount in an employee’s Retirement Savings Account (RSA) would be paid out by the Pension Fund Administrator (PFA) as follows:
              
                      To a beneficiary under a will or
                      To the spouse and children of the deceased; or in the absence of spouse and children or
                      To the recorded next- of kin / any person designated by the deceased when he was alive or(in the absence of such designation)
                      To any person appointed by the probate registry as administrator of the estate of the deceased  `,
                      "information": `In the event of the employee’s death, the amount in an employee’s Retirement Savings Account (RSA) would be paid out by the Pension Fund Administrator (PFA) as follows:
              
                      To a beneficiary under a will or
                      To the spouse and children of the deceased; or in the absence of spouse and children or
                      To the recorded next- of kin / any person designated by the deceased when he was alive or(in the absence of such designation)
                      To any person appointed by the probate registry as administrator of the estate of the deceased `,
                      "price": "10"
                  }
              ]
          }          

      ]
  },
{
  "name": "Are my contributions and retirement benefits taxed? ",
      "children": [
          {
              "name": "All contributions are tax-deductible in the computation of tax payable by an employee and his employer and all retirement benefits are tax exempt. Where a contributor, however, wishes to withdraw a voluntary contribution within 5 years of making such voluntary contribution, then the Income generated on the Voluntary Contribution shall be taxed at the point of the withdrawal.",
              "children": [
                  {
                      "name": "All contributions are tax-deductible in the computation of tax payable by an employee and his employer and all retirement benefits are tax exempt. Where a contributor, however, wishes to withdraw a voluntary contribution within 5 years of making such voluntary contribution, then the Income generated on the Voluntary Contribution shall be taxed at the point of the withdrawal. ",
                      "information": "All contributions are tax-deductible in the computation of tax payable by an employee and his employer and all retirement benefits are tax exempt. Where a contributor, however, wishes to withdraw a voluntary contribution within 5 years of making such voluntary contribution, then the Income generated on the Voluntary Contribution shall be taxed at the point of the withdrawal.",
                      "price": "10"
                  }
              ]
          }

      ]
},
{
  "name": "Can the funds in an RSA be used as Security for Borrowing? ",
      "children": [
          {
              "name": "No, the funds in an RSA cannot be used as security for borrowing.",
              "children": [
                  {
                      "name": "No, the funds in an RSA cannot be used as security for borrowing. ",
                      "information": "No, the funds in an RSA cannot be used as security for borrowing.",
                      "price": "10"
                  }
              ]
          }

      ]
},
{
  "name": "What Effect would inflation have on my Contributions? ",
      "children": [
          {
              "name": "Yes, all charges are strictly in accordance with the National Pension Commission’s guidelines on administrative and management fees and the PFA cannot charge any fees outside those stipulated by the Commission.",
              "children": [
                  {
                      "name": "Yes, all charges are strictly in accordance with the National Pension Commission’s guidelines on administrative and management fees and the PFA cannot charge any fees outside those stipulated by the Commission. ",
                      "information": "Yes, all charges are strictly in accordance with the National Pension Commission’s guidelines on administrative and management fees and the PFA cannot charge any fees outside those stipulated by the Commission.",
                      "price": "10"
                  }
              ]
          }

      ]
},
{
  "name": "What about my contributions to NSITF? ",
      "children": [
          {
              "name": "As of the commencement of the Pension Reform Act, all contributions to NSITF should have ceased. Contributions already held by NSITF may be retained by NSITF for 5years from the commencement of the Act, after which every employee is at liberty to transfer such funds to his/her RSA opened with his chosen PFA.",
              "children": [
                  {
                      "name": "As of the commencement of the Pension Reform Act, all contributions to NSITF should have ceased. Contributions already held by NSITF may be retained by NSITF for 5years from the commencement of the Act, after which every employee is at liberty to transfer such funds to his/her RSA opened with his chosen PFA.",
                      "information": "As of the commencement of the Pension Reform Act, all contributions to NSITF should have ceased. Contributions already held by NSITF may be retained by NSITF for 5years from the commencement of the Act, after which every employee is at liberty to transfer such funds to his/her RSA opened with his chosen PFA.",
                      "price": "10"
                  }
              ]
          }

      ]
},
{
  "name": "What happens to the retirement benefits under the pension scheme existing before the commencement of the Pension Act? ",
      "children": [
          {
              "name": `What happens to the retirement benefits under the pension scheme existing before the commencement of the Pension Act?
              
                  1.In the case of the Federal Public Service and the FCT where the previous scheme was unfunded, the government will calculate the amount due to each employee and issue a Federal Government Retirement Bond to the employee.The employee shall hold this bond as evidence of government liability.Upon retirement the bond shall be redeemed by the Central Bank of Nigeria(CBN).The proceeds shall be transferred to the credit of the Retirement Savings Account of the employee.
                  2.For employees in self - funded Agencies, the employer shall credit their RSA with any funds to which the employee is entitled from prior schemes.If the funds are not sufficient to meet the accrued liabilities to the employee, the employer shall issue to the employee a written obligation on the liabilities, and the obligation shall have the same priority as salary.The terms of repayment of such obligations shall be agreed with the employee.
                  3.For private sector employees, the employer shall credit their RSAs with any funds to which the employee is entitled.In the event that the funds are not sufficient to meet the accrued liabilities, a written obligation to that effect shall be issued to the concerned employee and the terms of such obligation shall be agreed with the employee.`,
              "children": [
                  {
                      "name": `What happens to the retirement benefits under the pension scheme existing before the commencement of the Pension Act?
              
                      1.In the case of the Federal Public Service and the FCT where the previous scheme was unfunded, the government will calculate the amount due to each employee and issue a Federal Government Retirement Bond to the employee.The employee shall hold this bond as evidence of government liability.Upon retirement the bond shall be redeemed by the Central Bank of Nigeria(CBN).The proceeds shall be transferred to the credit of the Retirement Savings Account of the employee.
                      2.For employees in self - funded Agencies, the employer shall credit their RSA with any funds to which the employee is entitled from prior schemes.If the funds are not sufficient to meet the accrued liabilities to the employee, the employer shall issue to the employee a written obligation on the liabilities, and the obligation shall have the same priority as salary.The terms of repayment of such obligations shall be agreed with the employee.
                      3.For private sector employees, the employer shall credit their RSAs with any funds to which the employee is entitled.In the event that the funds are not sufficient to meet the accrued liabilities, a written obligation to that effect shall be issued to the concerned employee and the terms of such obligation shall be agreed with the employee.`,
                      "information": `What happens to the retirement benefits under the pension scheme existing before the commencement of the Pension Act?
              
                      1.In the case of the Federal Public Service and the FCT where the previous scheme was unfunded, the government will calculate the amount due to each employee and issue a Federal Government Retirement Bond to the employee.The employee shall hold this bond as evidence of government liability.Upon retirement the bond shall be redeemed by the Central Bank of Nigeria(CBN).The proceeds shall be transferred to the credit of the Retirement Savings Account of the employee.
                      2.For employees in self - funded Agencies, the employer shall credit their RSA with any funds to which the employee is entitled from prior schemes.If the funds are not sufficient to meet the accrued liabilities to the employee, the employer shall issue to the employee a written obligation on the liabilities, and the obligation shall have the same priority as salary.The terms of repayment of such obligations shall be agreed with the employee.
                      3.For private sector employees, the employer shall credit their RSAs with any funds to which the employee is entitled.In the event that the funds are not sufficient to meet the accrued liabilities, a written obligation to that effect shall be issued to the concerned employee and the terms of such obligation shall be agreed with the employee.`,
                      "price": "10"
                  }
              ]
          }

      ]
},
{
  "name": "How will the Federal Government fund its Redemption Bond? ",
      "children": [
          {
              "name": "The Federal Government shall pay into Redemption Funds Account with the Central Bank, an amount equal to 5% of the total monthly wage bill payable to employees in the public service of the Federation and FCT. The amount paid into the CBN shall be used to redeem any Retirement Bonds issued.",
              "children": [
                  {
                      "name": "The Federal Government shall pay into Redemption Funds Account with the Central Bank, an amount equal to 5% of the total monthly wage bill payable to employees in the public service of the Federation and FCT. The amount paid into the CBN shall be used to redeem any Retirement Bonds issued. ",
                      "information": "The Federal Government shall pay into Redemption Funds Account with the Central Bank, an amount equal to 5% of the total monthly wage bill payable to employees in the public service of the Federation and FCT. The amount paid into the CBN shall be used to redeem any Retirement Bonds issued.",
                      "price": "10"
                  }
              ]
          }

      ]
},
{
  "name": "Who would be responsible for managing the affairs of current pensioners and those not affected by the new Pension Act? ",
      "children": [
          {
              "name": "In the Federal Public Service and FCT, a Pension Transitional Arrangement Department would be established. This Department will be made up of existing pension boards/offices and it shall carry out the existing functions of the relevant pension boards or offices. Among this function is the payment of gratuity and pension to existing pensioners and those exempted by the Act.",
              "children": [
                  {
                      "name": "In the Federal Public Service and FCT, a Pension Transitional Arrangement Department would be established. This Department will be made up of existing pension boards/offices and it shall carry out the existing functions of the relevant pension boards or offices. Among this function is the payment of gratuity and pension to existing pensioners and those exempted by the Act. ",
                      "information": "In the Federal Public Service and FCT, a Pension Transitional Arrangement Department would be established. This Department will be made up of existing pension boards/offices and it shall carry out the existing functions of the relevant pension boards or offices. Among this function is the payment of gratuity and pension to existing pensioners and those exempted by the Act.",
                      "price": "10"
                  }
              ]
          }

      ]
},
{
  "name": "How does the scheme ensure that my funds are not mismanaged or squandered? ",
      "children": [
          {
              "name": "The Pension Reform Act, 2014 correctly spells out operational independence of the Pension Fund Administrator (PFA) from the Pension Fund Custodian (PFC) .The PFA invests and manages the funds while the PFC has custody of the funds. The National Pension Commission (PenCom) strictly and effectively supervises and regulates the pension funds and all operators involved in the management and custody of pension funds.",
              "children": [
                  {
                      "name": "The Pension Reform Act, 2014 correctly spells out operational independence of the Pension Fund Administrator (PFA) from the Pension Fund Custodian (PFC) .The PFA invests and manages the funds while the PFC has custody of the funds. The National Pension Commission (PenCom) strictly and effectively supervises and regulates the pension funds and all operators involved in the management and custody of pension funds.",
                      "information": "The Pension Reform Act, 2014 correctly spells out operational independence of the Pension Fund Administrator (PFA) from the Pension Fund Custodian (PFC) .The PFA invests and manages the funds while the PFC has custody of the funds. The National Pension Commission (PenCom) strictly and effectively supervises and regulates the pension funds and all operators involved in the management and custody of pension funds.",
                      "price": "10"
                  }
              ]
          }

      ]
},
{
  "name": "What if my employer imposes its preferred PFA on me and refuses to pay to my PFA? ",
      "children": [
          {
              "name": "If after 7 days of the payment of salaries, any employer refuses or fails (for whatever reason) to remit the pension contributions of his employee to the PFA where such employee has opened a Retirement Saving Account (“RSA”) , the PFA is obligated to report the employer to the National Pension Commission if the funds are not received by the 14th day from the payment of salaries. Such an employer will be liable to a penalty in addition to the funds due.",
              "children": [
                  {
                      "name": "If after 7 days of the payment of salaries, any employer refuses or fails (for whatever reason) to remit the pension contributions of his employee to the PFA where such employee has opened a Retirement Saving Account (“RSA”) , the PFA is obligated to report the employer to the National Pension Commission if the funds are not received by the 14th day from the payment of salaries. Such an employer will be liable to a penalty in addition to the funds due.",
                      "information": "If after 7 days of the payment of salaries, any employer refuses or fails (for whatever reason) to remit the pension contributions of his employee to the PFA where such employee has opened a Retirement Saving Account (“RSA”) , the PFA is obligated to report the employer to the National Pension Commission if the funds are not received by the 14th day from the payment of salaries. Such an employer will be liable to a penalty in addition to the funds due.",
                      "price": "10"
                  }
              ]
          }

      ]
},
{
  "name": "What if my employer places conditions on the making of contributions, (e.g. minimum duration of service)?",
      "children": [
          {
              "name": "Yes, all charges are strictly in accordance with the National Pension Commission’s guidelines on administrative and management fees and the PFA cannot charge any fees outside those stipulated by the Commission.",
              "children": [
                  {
                      "name": "Yes, all charges are strictly in accordance with the National Pension Commission’s guidelines on administrative and management fees and the PFA cannot charge any fees outside those stipulated by the Commission. ",
                      "information": "Yes, all charges are strictly in accordance with the National Pension Commission’s guidelines on administrative and management fees and the PFA cannot charge any fees outside those stipulated by the Commission.",
                      "price": "10"
                  }
              ]
          }

      ]
},
{
  "name": "What Happens in the event of liquidation by the PFA or the PFC?",
      "children": [
          {
              "name": "In the event of the liquidation of the Pension Fund Administrator (PFA) or Pension Fund Custodian (PFC), do remember that the management and custody of the funds are held by separate and unrelated entities. The funds are managed by the PFA while custody is in the PFC. Where a PFA is liquidated, the funds are in the custody of the PFC and so the employee appoints another PFA to manage and administer his pension fund. If on the other hand, it is the PFC that becomes liquidated, the Act provides that the pension fund assets are completely exempt from the assets of the PFC and cannot be used to meet the claims of any of the PFC’s creditors. The Pension Fund Assets in the custody of such liquidated PFA will be transferred to another PFC under the strict supervision of the National Pension Commission.",
              "children": [
                  {
                      "name": "In the event of the liquidation of the Pension Fund Administrator (PFA) or Pension Fund Custodian (PFC), do remember that the management and custody of the funds are held by separate and unrelated entities. The funds are managed by the PFA while custody is in the PFC. Where a PFA is liquidated, the funds are in the custody of the PFC and so the employee appoints another PFA to manage and administer his pension fund. If on the other hand, it is the PFC that becomes liquidated, the Act provides that the pension fund assets are completely exempt from the assets of the PFC and cannot be used to meet the claims of any of the PFC’s creditors. The Pension Fund Assets in the custody of such liquidated PFA will be transferred to another PFC under the strict supervision of the National Pension Commission. ",
                      "information": "In the event of the liquidation of the Pension Fund Administrator (PFA) or Pension Fund Custodian (PFC), do remember that the management and custody of the funds are held by separate and unrelated entities. The funds are managed by the PFA while custody is in the PFC. Where a PFA is liquidated, the funds are in the custody of the PFC and so the employee appoints another PFA to manage and administer his pension fund. If on the other hand, it is the PFC that becomes liquidated, the Act provides that the pension fund assets are completely exempt from the assets of the PFC and cannot be used to meet the claims of any of the PFC’s creditors. The Pension Fund Assets in the custody of such liquidated PFA will be transferred to another PFC under the strict supervision of the National Pension Commission.",
                      "price": "10"
                  }
              ]
          }

      ]
},
{
  "name": "Am I charged by my PFA of choice? ",
      "children": [
          {
              "name": "Yes, all charges are strictly in accordance with the National Pension Commission’s guidelines on administrative and management fees and the PFA cannot charge any fees outside those stipulated by the Commission.",
              "children": [
                  {
                      "name": "Yes, all charges are strictly in accordance with the National Pension Commission’s guidelines on administrative and management fees and the PFA cannot charge any fees outside those stipulated by the Commission. ",
                      "information": "Yes, all charges are strictly in accordance with the National Pension Commission’s guidelines on administrative and management fees and the PFA cannot charge any fees outside those stipulated by the Commission.",
                      "price": "10"
                  }
              ]
          }

      ]
}

  ]
}


export const branches = [
    {
        name: "HEAD OFFICE",
        address: "12A, Adeola Hopewell Street, Victoria Island, Lagos",
        staff: "Oluwatosin Erukubami",
        phone: "0802 860 3506",
        email: "oerukubami@radixpension.com"
    },
    {
        name: "ABUJA OFFICE",
        address: "Israel Plaza, Adetokunbo Ademola Crescent, Plot 1077, Nitel Junction. Wuse II, Abuja",
        staff: "Rosemary Edogbanya",
        phone: "09050508469",
        email: "redogbanya@radixpension.com"
    },
    {
        name: "AKURE OFFICE",
        address: "1st Floor, Bank of Industry, Alagbaka, Akure",
        staff: "Ekundayo Oluwatimehin",
        phone: "0817 5855 934",
        email: "eolutimehin@radixpension.com"
    },
    {
        name: "AKWA IBOM OFFICE",
        address: "UBA, Plot 15 block 1, Abak Road, Uyo.",
        staff: "Emmanuel Ilechie",
        phone: "0703 498 7868",
        email: "eilechie@radixpension.com"
    },
    {
        name: "ASABA OFFICE",
        address: "10 Maryam Babangidas Way, Off Okpanam Road, Asaba",
        staff: "Emmanuel Nwaofunne",
        phone: "0817 5856 989",
        email: "enwaofunne@radixpension.com"
    },
    {
        name: "IBADAN OFFICE",
        address: "Mutual House, Plot 47/49, Onireke GRA, Ibadan, Oyo",
        staff: "Stephen Kayode",
        phone: "0817 5856 327",
        email: "skayode@radixpension.com"
    },
    {
        name: "CROSS RIVER OFFICE",
        address: "",
        staff: "Wilfred Ikpi",
        phone: "0803 599 9141",
        email: "wikpi@radixpension.com"
    },
    {
        name: "KANO OFFICE",
        address: "100 Amsalco Plaza, Zoo road, Kano",
        staff: "Mustapha Aliyu-Ahmad",
        phone: "07035873317",
        email: "maliyuahmad@radixpension.com"
    },
    {
        name: "KADUNA OFFICE",
        address: "Nissan Building (Beside ASD Motors) Constitution Road, Kaduna",
        staff: "Opeyemi Adeleye",
        phone: "0817 5855 705",
        email: "oadeleye@radixpension.com"
    },
    {
        name: "IKEJA OFFICE",
        address: "89, Allen Avenue, Ikeja, Lagos",
        staff: "Olisa Okosi",
        phone: "0817 5856 659",
        email: "ookosi@radixpension.com"
    },
    {
        name: "OTA OFFICE",
        address: "61 Lagos - Abeokuta Expressway, Sango Ota.",
        staff: "Oyedele Khadijat",
        phone: "0816 930 4034",
        email: "koyedele@radixpension.com"
    },
    {
        name: "PORT HARCOURT OFFICE",
        address: "UBA Branch, 137 Olu Obasanjo Road, Port Harcourt, Rivers State.",
        staff: "Ojaemor Progress",
        phone: "0817 5856 016",
        email: "pojaemor@radixpension.com"
    },
]