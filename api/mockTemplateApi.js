import delay from './delay';
const templates = [
        {
        "id": 1,
        "name": "Team - 4 Days until end of Sprint",
        "type": "Qualitative",
        "description": "issued to team 4 days before the end of sprint, due on last day of sprint",
        "createDate": null,
        "version": "v1.0",
        "questions": [
            {
                "id": 1,
                "questionText": "I am completely confident that my team will deliver its sprint commitment.",
                "responseType": {
                    "Likert": [
                        {
                            "id": 1,
                            "optionChoiceName": "Strongly Agree"
                        },
                        {
                            "id": 2,
                            "optionChoiceName": "Agree"
                        },
                        {
                            "id": 3,
                            "optionChoiceName": "Neutral"
                        },
                        {
                            "id": 4,
                            "optionChoiceName": "Disagree"
                        },
                        {
                            "id": 5,
                            "optionChoiceName": "Strongly Disagree"
                        }
                    ],
                    "responseValue": "3"
                }
            },
            {
                "id": 2,
                "questionText": "The issues, impediments and blockers that have come up during this sprint were managed effectively (or are being effectively managed).",
                "responseType": {
                    "Likert": [
                        {
                            "id": 1,
                            "optionChoiceName": "Strongly Agree"
                        },
                        {
                            "id": 2,
                            "optionChoiceName": "Agree"
                        },
                        {
                            "id": 3,
                            "optionChoiceName": "Neutral"
                        },
                        {
                            "id": 4,
                            "optionChoiceName": "Disagree"
                        },
                        {
                            "id": 5,
                            "optionChoiceName": "Strongly Disagree"
                        }
                    ],
                    "responseValue": "3"
                }
            },
            {
                "id": 3,
                "questionText": "I am completely confident that the client will be happy with sprint results/deliverables.",
                "responseType": {
                    "Likert": [
                        {
                            "id": 1,
                            "optionChoiceName": "Strongly Agree"
                        },
                        {
                            "id": 2,
                            "optionChoiceName": "Agree"
                        },
                        {
                            "id": 3,
                            "optionChoiceName": "Neutral"
                        },
                        {
                            "id": 4,
                            "optionChoiceName": "Disagree"
                        },
                        {
                            "id": 5,
                            "optionChoiceName": "Strongly Disagree"
                        }
                    ],
                    "responseValue": "3"
                }
            }
        ]

    },
        {
            "id": 2,
            "name": "Team - Sprint Planning Day",
            "type": "Qualitative",
            "description": "issued to team on their sprint planning day, due 3 days there after",
            "createDate": "null",
            "version": "v1.0",
            "questions": [
                {
                    "id": 1,
                    "questionText": "I am completely confident that my team will deliver its sprint commitment.",
                    "responseType": {
                        "Likert": [
                            {
                                "id": 1,
                                "optionChoiceName": "Strongly Agree"
                            },
                            {
                                "id": 2,
                                "optionChoiceName": "Agree"
                            },
                            {
                                "id": 3,
                                "optionChoiceName": "Neutral"
                            },
                            {
                                "id": 4,
                                "optionChoiceName": "Disagree"
                            },
                            {
                                "id": 5,
                                "optionChoiceName": "Strongly Disagree"
                            }
                        ]
                    }
                },
                {
                    "id": 4,
                    "questionText": "I am completely confident that the project is on track and will be successful.",
                    "responseType": {
                        "Likert": [
                            {
                                "id": 1,
                                "optionChoiceName": "Strongly Agree"
                            },
                            {
                                "id": 2,
                                "optionChoiceName": "Agree"
                            },
                            {
                                "id": 3,
                                "optionChoiceName": "Neutral"
                            },
                            {
                                "id": 4,
                                "optionChoiceName": "Disagree"
                            },
                            {
                                "id": 5,
                                "optionChoiceName": "Strongly Disagree"
                            }
                        ]
                    }
                },
                {
                    "id": 5,
                    "questionText": "I am completely confident that the client will be happy with project results.",
                    "responseType": {
                        "Likert": [
                            {
                                "id": 1,
                                "optionChoiceName": "Strongly Agree"
                            },
                            {
                                "id": 2,
                                "optionChoiceName": "Agree"
                            },
                            {
                                "id": 3,
                                "optionChoiceName": "Neutral"
                            },
                            {
                                "id": 4,
                                "optionChoiceName": "Disagree"
                            },
                            {
                                "id": 5,
                                "optionChoiceName": "Strongly Disagree"
                            }
                        ]
                    }
                },
                {
                    "id": 6,
                    "questionText": "My team\"s code is of exceptional quality.",
                    "responseType": {
                        "Likert": [
                            {
                                "id": 1,
                                "optionChoiceName": "Strongly Agree"
                            },
                            {
                                "id": 2,
                                "optionChoiceName": "Agree"
                            },
                            {
                                "id": 3,
                                "optionChoiceName": "Neutral"
                            },
                            {
                                "id": 4,
                                "optionChoiceName": "Disagree"
                            },
                            {
                                "id": 5,
                                "optionChoiceName": "Strongly Disagree"
                            }
                        ]
                    }
                },
                {
                    "id": 7,
                    "questionText": "My team is working together extremely well.",
                    "responseType": {
                        "Likert": [
                            {
                                "id": 1,
                                "optionChoiceName": "Strongly Agree"
                            },
                            {
                                "id": 2,
                                "optionChoiceName": "Agree"
                            },
                            {
                                "id": 3,
                                "optionChoiceName": "Neutral"
                            },
                            {
                                "id": 4,
                                "optionChoiceName": "Disagree"
                            },
                            {
                                "id": 5,
                                "optionChoiceName": "Strongly Disagree"
                            }
                        ]
                    }
                },
                {
                    "id": 8,
                    "questionText": "I have all of the tools and resources I need to complete my project.",
                    "responseType": {
                        "Likert": [
                            {
                                "id": 1,
                                "optionChoiceName": "Strongly Agree"
                            },
                            {
                                "id": 2,
                                "optionChoiceName": "Agree"
                            },
                            {
                                "id": 3,
                                "optionChoiceName": "Neutral"
                            },
                            {
                                "id": 4,
                                "optionChoiceName": "Disagree"
                            },
                            {
                                "id": 5,
                                "optionChoiceName": "Strongly Disagree"
                            }
                        ]
                    }
                },
                {
                    "id": 9,
                    "questionText": "The requirements in my cards are clear, complete and cohesive.",
                    "responseType": {
                        "Likert": [
                            {
                                "id": 1,
                                "optionChoiceName": "Strongly Agree"
                            },
                            {
                                "id": 2,
                                "optionChoiceName": "Agree"
                            },
                            {
                                "id": 3,
                                "optionChoiceName": "Neutral"
                            },
                            {
                                "id": 4,
                                "optionChoiceName": "Disagree"
                            },
                            {
                                "id": 5,
                                "optionChoiceName": "Strongly Disagree"
                            }
                        ]
                    }
                },
                {
                    "id": 10,
                    "questionText": "Client stakeholders are appropriately engaged to the level required for project success.",
                    "responseType": {
                        "Likert": [
                            {
                                "id": 1,
                                "optionChoiceName": "Strongly Agree"
                            },
                            {
                                "id": 2,
                                "optionChoiceName": "Agree"
                            },
                            {
                                "id": 3,
                                "optionChoiceName": "Neutral"
                            },
                            {
                                "id": 4,
                                "optionChoiceName": "Disagree"
                            },
                            {
                                "id": 5,
                                "optionChoiceName": "Strongly Disagree"
                            }
                        ]
                    }
                },
                {
                    "id": 11,
                    "questionText": "The client is not a hinderance to project success.",
                    "responseType": {
                        "Likert": [
                            {
                                "id": 1,
                                "optionChoiceName": "Strongly Agree"
                            },
                            {
                                "id": 2,
                                "optionChoiceName": "Agree"
                            },
                            {
                                "id": 3,
                                "optionChoiceName": "Neutral"
                            },
                            {
                                "id": 4,
                                "optionChoiceName": "Disagree"
                            },
                            {
                                "id": 5,
                                "optionChoiceName": "Strongly Disagree"
                            }
                        ]
                    }
                },
                {
                    "id": 12,
                    "questionText": "I have enough distraction-free time to complete my sprint commitments.",
                    "responseType": {
                        "Likert": [
                            {
                                "id": 1,
                                "optionChoiceName": "Strongly Agree"
                            },
                            {
                                "id": 2,
                                "optionChoiceName": "Agree"
                            },
                            {
                                "id": 3,
                                "optionChoiceName": "Neutral"
                            },
                            {
                                "id": 4,
                                "optionChoiceName": "Disagree"
                            },
                            {
                                "id": 5,
                                "optionChoiceName": "Strongly Disagree"
                            }
                        ]
                    }
                },
                {
                    "id": 13,
                    "questionText": "My Scrum Master/Delivery Manager does an excellent job managing client expectations.",
                    "responseType": {
                        "Likert": [
                            {
                                "id": 1,
                                "optionChoiceName": "Strongly Agree"
                            },
                            {
                                "id": 2,
                                "optionChoiceName": "Agree"
                            },
                            {
                                "id": 3,
                                "optionChoiceName": "Neutral"
                            },
                            {
                                "id": 4,
                                "optionChoiceName": "Disagree"
                            },
                            {
                                "id": 5,
                                "optionChoiceName": "Strongly Disagree"
                            }
                        ]
                    }
                },
                {
                    "id": 14,
                    "questionText": "My Scrum Master/Delivery Manager does an excellent job of facilitating our meetings and events.",
                    "responseType": {
                        "Likert": [
                            {
                                "id": 1,
                                "optionChoiceName": "Strongly Agree"
                            },
                            {
                                "id": 2,
                                "optionChoiceName": "Agree"
                            },
                            {
                                "id": 3,
                                "optionChoiceName": "Neutral"
                            },
                            {
                                "id": 4,
                                "optionChoiceName": "Disagree"
                            },
                            {
                                "id": 5,
                                "optionChoiceName": "Strongly Disagree"
                            }
                        ]
                    }
                },
                {
                    "id": 15,
                    "questionText": "My Scrum Master/Delivery Manager does an excellent job of resolving issues and removing blockers/impediments.",
                    "responseType": {
                        "Likert": [
                            {
                                "id": 1,
                                "optionChoiceName": "Strongly Agree"
                            },
                            {
                                "id": 2,
                                "optionChoiceName": "Agree"
                            },
                            {
                                "id": 3,
                                "optionChoiceName": "Neutral"
                            },
                            {
                                "id": 4,
                                "optionChoiceName": "Disagree"
                            },
                            {
                                "id": 5,
                                "optionChoiceName": "Strongly Disagree"
                            }
                        ]
                    }
                },
                {
                    "id": 16,
                    "questionText": "My Tech Lead is readily available to help resolve issues, answer questions and provide guidance/advice.",
                    "responseType": {
                        "Likert": [
                            {
                                "id": 1,
                                "optionChoiceName": "Strongly Agree"
                            },
                            {
                                "id": 2,
                                "optionChoiceName": "Agree"
                            },
                            {
                                "id": 3,
                                "optionChoiceName": "Neutral"
                            },
                            {
                                "id": 4,
                                "optionChoiceName": "Disagree"
                            },
                            {
                                "id": 5,
                                "optionChoiceName": "Strongly Disagree"
                            }
                        ]
                    }
                },
                {
                    "id": 17,
                    "questionText": "My Tech Lead does an excellent job of resolving issues and removing blockers/impediments.",
                    "responseType": {
                        "Likert": [
                            {
                                "id": 1,
                                "optionChoiceName": "Strongly Agree"
                            },
                            {
                                "id": 2,
                                "optionChoiceName": "Agree"
                            },
                            {
                                "id": 3,
                                "optionChoiceName": "Neutral"
                            },
                            {
                                "id": 4,
                                "optionChoiceName": "Disagree"
                            },
                            {
                                "id": 5,
                                "optionChoiceName": "Strongly Disagree"
                            }
                        ]
                    }
                }
            ]
        },
        {
            "id": 3,
            "name": "EM/TL - Sprint Planning Day",
            "type": "Qualitative",
            "description": "issued to Engagement manager and Tech Lead on their sprint planning day, due 3 days there after",
            "createDate": null,
            "version": "v1.0",
            "questions": [
                {
                    "id": 1,
                    "questionText": "I am completely confident that my team will deliver its sprint commitment.",
                    "responseType": {
                        "Likert": [
                            {
                                "id": 1,
                                "optionChoiceName": "Strongly Agree"
                            },
                            {
                                "id": 2,
                                "optionChoiceName": "Agree"
                            },
                            {
                                "id": 3,
                                "optionChoiceName": "Neutral"
                            },
                            {
                                "id": 4,
                                "optionChoiceName": "Disagree"
                            },
                            {
                                "id": 5,
                                "optionChoiceName": "Strongly Disagree"
                            }
                        ]
                    }
                },
                {
                    "id": 4,
                    "questionText": "I am completely confident that the project is on track and will be successful.",
                    "responseType": {
                        "Likert": [
                            {
                                "id": 1,
                                "optionChoiceName": "Strongly Agree"
                            },
                            {
                                "id": 2,
                                "optionChoiceName": "Agree"
                            },
                            {
                                "id": 3,
                                "optionChoiceName": "Neutral"
                            },
                            {
                                "id": 4,
                                "optionChoiceName": "Disagree"
                            },
                            {
                                "id": 5,
                                "optionChoiceName": "Strongly Disagree"
                            }
                        ]
                    }
                },
                {
                    "id": 5,
                    "questionText": "I am completely confident that the client will be happy with project results.",
                    "responseType": {
                        "Likert": [
                            {
                                "id": 1,
                                "optionChoiceName": "Strongly Agree"
                            },
                            {
                                "id": 2,
                                "optionChoiceName": "Agree"
                            },
                            {
                                "id": 3,
                                "optionChoiceName": "Neutral"
                            },
                            {
                                "id": 4,
                                "optionChoiceName": "Disagree"
                            },
                            {
                                "id": 5,
                                "optionChoiceName": "Strongly Disagree"
                            }
                        ]
                    }
                },
                {
                    "id": 6,
                    "questionText": "My team\"s code is of exceptional quality.",
                    "responseType": {
                        "Likert": [
                            {
                                "id": 1,
                                "optionChoiceName": "Strongly Agree"
                            },
                            {
                                "id": 2,
                                "optionChoiceName": "Agree"
                            },
                            {
                                "id": 3,
                                "optionChoiceName": "Neutral"
                            },
                            {
                                "id": 4,
                                "optionChoiceName": "Disagree"
                            },
                            {
                                "id": 5,
                                "optionChoiceName": "Strongly Disagree"
                            }
                        ]
                    }
                },
                {
                    "id": 7,
                    "questionText": "My team is working together extremely well.",
                    "responseType": {
                        "Likert": [
                            {
                                "id": 1,
                                "optionChoiceName": "Strongly Agree"
                            },
                            {
                                "id": 2,
                                "optionChoiceName": "Agree"
                            },
                            {
                                "id": 3,
                                "optionChoiceName": "Neutral"
                            },
                            {
                                "id": 4,
                                "optionChoiceName": "Disagree"
                            },
                            {
                                "id": 5,
                                "optionChoiceName": "Strongly Disagree"
                            }
                        ]
                    }
                },
                {
                    "id": 8,
                    "questionText": "I have all of the tools and resources I need to complete my project.",
                    "responseType": {
                        "Likert": [
                            {
                                "id": 1,
                                "optionChoiceName": "Strongly Agree"
                            },
                            {
                                "id": 2,
                                "optionChoiceName": "Agree"
                            },
                            {
                                "id": 3,
                                "optionChoiceName": "Neutral"
                            },
                            {
                                "id": 4,
                                "optionChoiceName": "Disagree"
                            },
                            {
                                "id": 5,
                                "optionChoiceName": "Strongly Disagree"
                            }
                        ]
                    }
                },
                {
                    "id": 9,
                    "questionText": "The requirements in my cards are clear, complete and cohesive.",
                    "responseType": {
                        "Likert": [
                            {
                                "id": 1,
                                "optionChoiceName": "Strongly Agree"
                            },
                            {
                                "id": 2,
                                "optionChoiceName": "Agree"
                            },
                            {
                                "id": 3,
                                "optionChoiceName": "Neutral"
                            },
                            {
                                "id": 4,
                                "optionChoiceName": "Disagree"
                            },
                            {
                                "id": 5,
                                "optionChoiceName": "Strongly Disagree"
                            }
                        ]
                    }
                },
                {
                    "id": 10,
                    "questionText": "Client stakeholders are appropriately engaged to the level required for project success.",
                    "responseType": {
                        "Likert": [
                            {
                                "id": 1,
                                "optionChoiceName": "Strongly Agree"
                            },
                            {
                                "id": 2,
                                "optionChoiceName": "Agree"
                            },
                            {
                                "id": 3,
                                "optionChoiceName": "Neutral"
                            },
                            {
                                "id": 4,
                                "optionChoiceName": "Disagree"
                            },
                            {
                                "id": 5,
                                "optionChoiceName": "Strongly Disagree"
                            }
                        ]
                    }
                },
                {
                    "id": 11,
                    "questionText": "The client is not a hinderance to project success.",
                    "responseType": {
                        "Likert": [
                            {
                                "id": 1,
                                "optionChoiceName": "Strongly Agree"
                            },
                            {
                                "id": 2,
                                "optionChoiceName": "Agree"
                            },
                            {
                                "id": 3,
                                "optionChoiceName": "Neutral"
                            },
                            {
                                "id": 4,
                                "optionChoiceName": "Disagree"
                            },
                            {
                                "id": 5,
                                "optionChoiceName": "Strongly Disagree"
                            }
                        ]
                    }
                },
                {
                    "id": 18,
                    "questionText": "My work is challenging and rewarding.",
                    "responseType": {
                        "Likert": [
                            {
                                "id": 1,
                                "optionChoiceName": "Strongly Agree"
                            },
                            {
                                "id": 2,
                                "optionChoiceName": "Agree"
                            },
                            {
                                "id": 3,
                                "optionChoiceName": "Neutral"
                            },
                            {
                                "id": 4,
                                "optionChoiceName": "Disagree"
                            },
                            {
                                "id": 5,
                                "optionChoiceName": "Strongly Disagree"
                            }
                        ]
                    }
                }
            ]
        },
        {
            "id": 4,
            "name": "EM - 4 Days until end of Sprint",
            "type": "Quantitative",
            "description": "issued to team 4 days before the end of sprint, due on last day of sprint",
            "createDate": null,
            "version": "v1.0",
            "questions": [
                {
                    "id": 19,
                    "questionText": "How many points were committed to at the start of the sprint ending today?",
                    "responseType": {
                        "Likert": [
                            {
                                "id": 1,
                                "optionChoiceName": "Strongly Agree"
                            },
                            {
                                "id": 2,
                                "optionChoiceName": "Agree"
                            },
                            {
                                "id": 3,
                                "optionChoiceName": "Neutral"
                            },
                            {
                                "id": 4,
                                "optionChoiceName": "Disagree"
                            },
                            {
                                "id": 5,
                                "optionChoiceName": "Strongly Disagree"
                            }
                        ]
                    }
                },
                {
                    "id": 20,
                    "questionText": "How many points were accepted today?",
                    "responseType": {
                        "Likert": [
                            {
                                "id": 1,
                                "optionChoiceName": "Strongly Agree"
                            },
                            {
                                "id": 2,
                                "optionChoiceName": "Agree"
                            },
                            {
                                "id": 3,
                                "optionChoiceName": "Neutral"
                            },
                            {
                                "id": 4,
                                "optionChoiceName": "Disagree"
                            },
                            {
                                "id": 5,
                                "optionChoiceName": "Strongly Disagree"
                            }
                        ]
                    }
                },
                {
                    "id": 21,
                    "questionText": "How many stories were added mid-sprint to the sprint ending today?",
                    "responseType": {
                        "Likert": [
                            {
                                "id": 1,
                                "optionChoiceName": "Strongly Agree"
                            },
                            {
                                "id": 2,
                                "optionChoiceName": "Agree"
                            },
                            {
                                "id": 3,
                                "optionChoiceName": "Neutral"
                            },
                            {
                                "id": 4,
                                "optionChoiceName": "Disagree"
                            },
                            {
                                "id": 5,
                                "optionChoiceName": "Strongly Disagree"
                            }
                        ]
                    }
                },
                {
                    "id": 22,
                    "questionText": "How many stories had their requirements changed mid-sprint?",
                    "responseType": {
                        "Likert": [
                            {
                                "id": 1,
                                "optionChoiceName": "Strongly Agree"
                            },
                            {
                                "id": 2,
                                "optionChoiceName": "Agree"
                            },
                            {
                                "id": 3,
                                "optionChoiceName": "Neutral"
                            },
                            {
                                "id": 4,
                                "optionChoiceName": "Disagree"
                            },
                            {
                                "id": 5,
                                "optionChoiceName": "Strongly Disagree"
                            }
                        ]
                    }
                },
                {
                    "id": 23,
                    "questionText": "Entering today's sprint planning, how many stories are in the backlog?",
                    "responseType": {
                        "Likert": [
                            {
                                "id": 1,
                                "optionChoiceName": "Strongly Agree"
                            },
                            {
                                "id": 2,
                                "optionChoiceName": "Agree"
                            },
                            {
                                "id": 3,
                                "optionChoiceName": "Neutral"
                            },
                            {
                                "id": 4,
                                "optionChoiceName": "Disagree"
                            },
                            {
                                "id": 5,
                                "optionChoiceName": "Strongly Disagree"
                            }
                        ]
                    }
                },
                {
                    "id": 24,
                    "questionText": "Of these, how many are dev-ready (meaning the requirements and acceptance criteria are complete and approved, and the story has been estimate/pointed)?",
                    "responseType": {
                        "Likert": [
                            {
                                "id": 1,
                                "optionChoiceName": "Strongly Agree"
                            },
                            {
                                "id": 2,
                                "optionChoiceName": "Agree"
                            },
                            {
                                "id": 3,
                                "optionChoiceName": "Neutral"
                            },
                            {
                                "id": 4,
                                "optionChoiceName": "Disagree"
                            },
                            {
                                "id": 5,
                                "optionChoiceName": "Strongly Disagree"
                            }
                        ]
                    }
                },
                {
                    "id": 25,
                    "questionText": "How many points worth of dev-ready stories are currently in there backlog?",
                    "responseType": {
                        "Likert": [
                            {
                                "id": 1,
                                "optionChoiceName": "Strongly Agree"
                            },
                            {
                                "id": 2,
                                "optionChoiceName": "Agree"
                            },
                            {
                                "id": 3,
                                "optionChoiceName": "Neutral"
                            },
                            {
                                "id": 4,
                                "optionChoiceName": "Disagree"
                            },
                            {
                                "id": 5,
                                "optionChoiceName": "Strongly Disagree"
                            }
                        ]
                    }
                },
                {
                    "id": 26,
                    "questionText": "For each team member, indicate the number of points delivered by that individual during the sprint.",
                    "responseType": {
                        "Likert": [
                            {
                                "id": 1,
                                "optionChoiceName": "Strongly Agree"
                            },
                            {
                                "id": 2,
                                "optionChoiceName": "Agree"
                            },
                            {
                                "id": 3,
                                "optionChoiceName": "Neutral"
                            },
                            {
                                "id": 4,
                                "optionChoiceName": "Disagree"
                            },
                            {
                                "id": 5,
                                "optionChoiceName": "Strongly Disagree"
                            }
                        ]
                    }
                },
                {
                    "id": 27,
                    "questionText": "Currently, how many bugs categorized as \"blocker\" exist in the backlog? (Critical, Major and Low priority)",
                    "responseType": {
                        "Likert": [
                            {
                                "id": 1,
                                "optionChoiceName": "Strongly Agree"
                            },
                            {
                                "id": 2,
                                "optionChoiceName": "Agree"
                            },
                            {
                                "id": 3,
                                "optionChoiceName": "Neutral"
                            },
                            {
                                "id": 4,
                                "optionChoiceName": "Disagree"
                            },
                            {
                                "id": 5,
                                "optionChoiceName": "Strongly Disagree"
                            }
                        ]
                    }
                },
                {
                    "id": 28,
                    "questionText": "Jenkins - how many builds were done over the course of the sprint that ends today?",
                    "responseType": {
                        "Likert": [
                            {
                                "id": 1,
                                "optionChoiceName": "Strongly Agree"
                            },
                            {
                                "id": 2,
                                "optionChoiceName": "Agree"
                            },
                            {
                                "id": 3,
                                "optionChoiceName": "Neutral"
                            },
                            {
                                "id": 4,
                                "optionChoiceName": "Disagree"
                            },
                            {
                                "id": 5,
                                "optionChoiceName": "Strongly Disagree"
                            }
                        ]
                    }
                },
                {
                    "id": 29,
                    "questionText": "Git/SCM - how many check-ins were done by the team over the sprint?",
                    "responseType": {
                        "Likert": [
                            {
                                "id": 1,
                                "optionChoiceName": "Strongly Agree"
                            },
                            {
                                "id": 2,
                                "optionChoiceName": "Agree"
                            },
                            {
                                "id": 3,
                                "optionChoiceName": "Neutral"
                            },
                            {
                                "id": 4,
                                "optionChoiceName": "Disagree"
                            },
                            {
                                "id": 5,
                                "optionChoiceName": "Strongly Disagree"
                            }
                        ]
                    }
                },
                {
                    "id": 30,
                    "questionText": "Jenkins or other code coverage tool - what is the level of unit test coverage on your most recent build?",
                    "responseType": {
                        "Likert": [
                            {
                                "id": 1,
                                "optionChoiceName": "Strongly Agree"
                            },
                            {
                                "id": 2,
                                "optionChoiceName": "Agree"
                            },
                            {
                                "id": 3,
                                "optionChoiceName": "Neutral"
                            },
                            {
                                "id": 4,
                                "optionChoiceName": "Disagree"
                            },
                            {
                                "id": 5,
                                "optionChoiceName": "Strongly Disagree"
                            }
                        ]
                    }
                }
            ]
        },
        {
            "id": 5,
            "name": "TL - Sprint Planning Day",
            "type": "Quantitative",
            "description": "issued to team on their sprint planning day, due 3 days there after",
            "createDate": null,
            "version": "v1.0",
            "questions": [
                {
                    "id": 31,
                    "questionText": "Jenkins - how many failed builds were there in the sprint ending today?",
                    "responseType": {
                        "Likert": [
                            {
                                "id": 1,
                                "optionChoiceName": "Strongly Agree"
                            },
                            {
                                "id": 2,
                                "optionChoiceName": "Agree"
                            },
                            {
                                "id": 3,
                                "optionChoiceName": "Neutral"
                            },
                            {
                                "id": 4,
                                "optionChoiceName": "Disagree"
                            },
                            {
                                "id": 5,
                                "optionChoiceName": "Strongly Disagree"
                            }
                        ]
                    }
                },
                {
                    "id": 32,
                    "questionText": "In build tool or IDE, how many automated test cases are there?",
                    "responseType": {
                        "Likert": [
                            {
                                "id": 1,
                                "optionChoiceName": "Strongly Agree"
                            },
                            {
                                "id": 2,
                                "optionChoiceName": "Agree"
                            },
                            {
                                "id": 3,
                                "optionChoiceName": "Neutral"
                            },
                            {
                                "id": 4,
                                "optionChoiceName": "Disagree"
                            },
                            {
                                "id": 5,
                                "optionChoiceName": "Strongly Disagree"
                            }
                        ]
                    }
                },
                {
                    "id": 33,
                    "questionText": "Jenkins or IDE - how many automated tests were run in the most recent build?",
                    "responseType": {
                        "Likert": [
                            {
                                "id": 1,
                                "optionChoiceName": "Strongly Agree"
                            },
                            {
                                "id": 2,
                                "optionChoiceName": "Agree"
                            },
                            {
                                "id": 3,
                                "optionChoiceName": "Neutral"
                            },
                            {
                                "id": 4,
                                "optionChoiceName": "Disagree"
                            },
                            {
                                "id": 5,
                                "optionChoiceName": "Strongly Disagree"
                            }
                        ]
                    }
                },
                {
                    "id": 34,
                    "questionText": "Jenkins/IDE - How many automated tests were quarantined/disabled in the most recent build?",
                    "responseType": {
                        "Likert": [
                            {
                                "id": 1,
                                "optionChoiceName": "Strongly Agree"
                            },
                            {
                                "id": 2,
                                "optionChoiceName": "Agree"
                            },
                            {
                                "id": 3,
                                "optionChoiceName": "Neutral"
                            },
                            {
                                "id": 4,
                                "optionChoiceName": "Disagree"
                            },
                            {
                                "id": 5,
                                "optionChoiceName": "Strongly Disagree"
                            }
                        ]
                    }
                },
                {
                    "id": 35,
                    "questionText": "Jenkins/IDE - How many automated tests failed in the most recent build?",
                    "responseType": {
                        "Likert": [
                            {
                                "id": 1,
                                "optionChoiceName": "Strongly Agree"
                            },
                            {
                                "id": 2,
                                "optionChoiceName": "Agree"
                            },
                            {
                                "id": 3,
                                "optionChoiceName": "Neutral"
                            },
                            {
                                "id": 4,
                                "optionChoiceName": "Disagree"
                            },
                            {
                                "id": 5,
                                "optionChoiceName": "Strongly Disagree"
                            }
                        ]
                    }
                },
                {
                    "id": 36,
                    "questionText": "Jenkins - what was the build duration (including running tests) for the latest build?",
                    "responseType": {
                        "Likert": [
                            {
                                "id": 1,
                                "optionChoiceName": "Strongly Agree"
                            },
                            {
                                "id": 2,
                                "optionChoiceName": "Agree"
                            },
                            {
                                "id": 3,
                                "optionChoiceName": "Neutral"
                            },
                            {
                                "id": 4,
                                "optionChoiceName": "Disagree"
                            },
                            {
                                "id": 5,
                                "optionChoiceName": "Strongly Disagree"
                            }
                        ]
                    }
                },
                {
                    "id": 37,
                    "questionText": "Jenkins/Sonar - what is your average cyclomatic complexity?Max cyclomatic complexity?",
                    "responseType": {
                        "Likert": [
                            {
                                "id": 1,
                                "optionChoiceName": "Strongly Agree"
                            },
                            {
                                "id": 2,
                                "optionChoiceName": "Agree"
                            },
                            {
                                "id": 3,
                                "optionChoiceName": "Neutral"
                            },
                            {
                                "id": 4,
                                "optionChoiceName": "Disagree"
                            },
                            {
                                "id": 5,
                                "optionChoiceName": "Strongly Disagree"
                            }
                        ]
                    }
                },
                {
                    "id": 38,
                    "questionText": "Jenkins/Lint tool - how many lint violations were in the most recent build?",
                    "responseType": {
                        "Likert": [
                            {
                                "id": 1,
                                "optionChoiceName": "Strongly Agree"
                            },
                            {
                                "id": 2,
                                "optionChoiceName": "Agree"
                            },
                            {
                                "id": 3,
                                "optionChoiceName": "Neutral"
                            },
                            {
                                "id": 4,
                                "optionChoiceName": "Disagree"
                            },
                            {
                                "id": 5,
                                "optionChoiceName": "Strongly Disagree"
                            }
                        ],
                        "responseValue": ""
                    }
                }
            ]
        }
];

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (template) => {
    return replaceAll(template.name, ' ', '-');
};

class TemplateApi {
    static getAllTemplates() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], templates));
            }, delay);
        });
    }

    static saveTemplate(template) {
        template = Object.assign({}, template); // to avoid manipulating object passed in.
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate server-side validation
                const minTemplateNameLength = 1;
                if (template.name.length < minTemplateNameLength) {
                    reject(`Name must be at least ${minTemplateNameLength} characters.`);
                }

                if (template.id) {
                    const existingTemplateIndex = templates.findIndex(a => a.id == template.id);
                    templates.splice(existingTemplateIndex, 1, template);
                } else {
                    //Just simulating creation here.
                    //The server would generate ids and watchHref's for new courses in a real app.
                    //Cloning so copy returned is passed by value rather than by reference.
                    template.id = generateId(template);
                    template.watchHref = `http://www.pluralsight.com/courses/${template.id}`;
                    template.push(template);
                }

                resolve(template);
            }, delay);
        });
    }

    /*static deleteTemplate(templateId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexOfTemplateToDelete = templates.findIndex(template => {
                    template.templateId == templateId;
                });
                templates.splice(indexOfTemplateToDelete, 1);
                resolve();
            }, delay);
        });
    }*/
}

export default  TemplateApi;
