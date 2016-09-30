import delay from './delay';
const surveys =
    [
        {
            "id": 1,
            "suid": "S12345DE",
            "surveyTemplate": {
                "templateName": "SPD",
                "templateDescription": "Team: This is a survey to assess project health as we approach end of sprint.",
                "templateInstruction": "This is to be done 4 days before a sprint end. Please fill out the following to the best of your ability.",
                "project": {
                    "id": 1,
                    "name": "Choice Vacation Rentals",
                    "engagementManager": {
                        "id": 1,
                        "engagementManagerName": "David Bernal"
                    }
                },
                "questions": [
                    {
                        "id": 1,
                        "quid": "ABCDEF123",
                        "questionLabel": "Personal EoS-4 Confidence Deliverable",
                        "questionText": "I am completely confident that my team will deliver its sprint commitment.",
                        "questionRequired": true,
                        "questionCategory": "deliverable",
                        "questionType": "qualitative",
                        "optionCategory": {
                            "id": 1,
                            "optionCategoryName": "Agree-Disagree"
                        },
                        "optionChoices": [
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
                    },
                    {
                        "id": 2,
                        "quid": "Q123487",
                        "questionLabel": "Team Sprint Day Question",
                        "questionText": "I am completely confident that the project is on track and will be successful.",
                        "questionRequired": true,
                        "questionCategory": "blockers",
                        "questionType": "qualitative",
                        "optionCategory": {
                            "id": 1,
                            "optionCategoryName": "Agree-Disagree"
                        },
                        "optionChoices": [
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
                    },
                    {
                        "id": 3,
                        "quid": "Q123487",
                        "questionLabel": "Team Sprint Day Question",
                        "questionText": "I am completely confident that the client will be happy with project results.",
                        "questionRequired": true,
                        "questionCategory": "blockers",
                        "questionType": "qualitative",
                        "optionCategory": {
                            "id": 1,
                            "optionCategoryName": "Agree-Disagree"
                        },
                        "optionChoices": [
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
                    },
                    {
                        "id": 4,
                        "quid": "Q123487",
                        "questionLabel": "Team Sprint Day Question",
                        "questionText": "My team's code is of exceptional quality.",
                        "questionRequired": true,
                        "questionCategory": "blockers",
                        "questionType": "qualitative",
                        "optionCategory": {
                            "id": 1,
                            "optionCategoryName": "Agree-Disagree"
                        },
                        "optionChoices": [
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
                    },
                    {
                        "id": 5,
                        "quid": "Q123487",
                        "questionLabel": "Team Sprint Day Question",
                        "questionText": "My team is working together extremely well.",
                        "questionRequired": true,
                        "questionCategory": "blockers",
                        "questionType": "qualitative",
                        "optionCategory": {
                            "id": 1,
                            "optionCategoryName": "Agree-Disagree"
                        },
                        "optionChoices": [
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
                    },
                    {
                        "id": 6,
                        "quid": "Q123487",
                        "questionLabel": "Team Sprint Day Question",
                        "questionText": "I have all of the tools and resources I need to complete my project.",
                        "questionRequired": true,
                        "questionCategory": "blockers",
                        "questionType": "qualitative",
                        "optionCategory": {
                            "id": 1,
                            "optionCategoryName": "Agree-Disagree"
                        },
                        "optionChoices": [
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
                    },
                    {
                        "id": 7,
                        "quid": "Q123487",
                        "questionLabel": "Team Sprint Day Question",
                        "questionText": "The requirements in my cards are clear, complete and cohesive.",
                        "questionRequired": true,
                        "questionCategory": "blockers",
                        "questionType": "qualitative",
                        "optionCategory": {
                            "id": 1,
                            "optionCategoryName": "Agree-Disagree"
                        },
                        "optionChoices": [
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
                    },
                    {
                        "id": 8,
                        "quid": "Q123487",
                        "questionLabel": "Team Sprint Day Question",
                        "questionText": "Client stakeholders are appropriately engaged to the level required for project success.",
                        "questionRequired": true,
                        "questionCategory": "blockers",
                        "questionType": "qualitative",
                        "optionCategory": {
                            "id": 1,
                            "optionCategoryName": "Agree-Disagree"
                        },
                        "optionChoices": [
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
                    },
                    {
                        "id": 9,
                        "quid": "Q123487",
                        "questionLabel": "Team Sprint Day Question",
                        "questionText": "The client is not a hinderance to project success.",
                        "questionRequired": true,
                        "questionCategory": "blockers",
                        "questionType": "qualitative",
                        "optionCategory": {
                            "id": 1,
                            "optionCategoryName": "Agree-Disagree"
                        },
                        "optionChoices": [
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
                    },
                    {
                        "id": 10,
                        "quid": "Q123487",
                        "questionLabel": "Team Sprint Day Question",
                        "questionText": "I have enough distraction-free time to complete my sprint commitments.",
                        "questionRequired": true,
                        "questionCategory": "blockers",
                        "questionType": "qualitative",
                        "optionCategory": {
                            "id": 1,
                            "optionCategoryName": "Agree-Disagree"
                        },
                        "optionChoices": [
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
                    },
                    {
                        "id": 11,
                        "quid": "Q123487",
                        "questionLabel": "Team Sprint Day Question",
                        "questionText": "My Scrum Master/Delivery Manager does an excellent job managing client expectations.",
                        "questionRequired": true,
                        "questionCategory": "blockers",
                        "questionType": "qualitative",
                        "optionCategory": {
                            "id": 1,
                            "optionCategoryName": "Agree-Disagree"
                        },
                        "optionChoices": [
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
                    },
                    {
                        "id": 12,
                        "quid": "Q123487",
                        "questionLabel": "Team Sprint Day Question",
                        "questionText": "My Scrum Master/Delivery Manager does an excellent job of facilitating our meetings and events.",
                        "questionRequired": true,
                        "questionCategory": "blockers",
                        "questionType": "qualitative",
                        "optionCategory": {
                            "id": 1,
                            "optionCategoryName": "Agree-Disagree"
                        },
                        "optionChoices": [
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
                    },
                    {
                        "id": 13,
                        "quid": "Q123487",
                        "questionLabel": "Team Sprint Day Question",
                        "questionText": "My Scrum Master/Delivery Manager does an excellent job of resolving issues and removing blockers/impediments.",
                        "questionRequired": true,
                        "questionCategory": "blockers",
                        "questionType": "qualitative",
                        "optionCategory": {
                            "id": 1,
                            "optionCategoryName": "Agree-Disagree"
                        },
                        "optionChoices": [
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
                    },
                    {
                        "id": 14,
                        "quid": "Q123487",
                        "questionLabel": "Team Sprint Day Question",
                        "questionText": "My Tech Lead is readily available to help resolve issues, answer questions and provide guidance/advice.",
                        "questionRequired": true,
                        "questionCategory": "blockers",
                        "questionType": "qualitative",
                        "optionCategory": {
                            "id": 1,
                            "optionCategoryName": "Agree-Disagree"
                        },
                        "optionChoices": [
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
                    },
                    {
                        "id": 15,
                        "quid": "Q123487",
                        "questionLabel": "Team Sprint Day Question",
                        "questionText": "My Tech Lead does an excellent job of resolving issues and removing blockers/impediments.",
                        "questionRequired": true,
                        "questionCategory": "blockers",
                        "questionType": "qualitative",
                        "optionCategory": {
                            "id": 1,
                            "optionCategoryName": "Agree-Disagree"
                        },
                        "optionChoices": [
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

                ]
            }
        },
        {
            "id": 2,
            "suid": "S12345DE",
            "surveyTemplate": {
                "templateName": "SPD",
                "templateDescription": "Lead/EM: This is a survey to assess project health as we approach end of sprint.",
                "templateInstruction": "Lead/EM: This is to be done 4 days before a sprint end. Please fill out the following to the best of your ability.",
                "project": {
                    "id": 1,
                    "name": "Choice Vacation Rentals",
                    "engagementManager": {
                        "id": 1,
                        "engagementManagerName": "David Bernal"
                    }
                },
                "questions": [
                    {
                        "id": 1,
                        "quid": "ABCDEF123",
                        "questionLabel": "Personal EoS-4 Confidence Deliverable",
                        "questionText": "I am completely confident that my team will deliver its sprint commitment.",
                        "questionRequired": true,
                        "questionCategory": "deliverable",
                        "questionType": "qualitative",
                        "optionCategory": {
                            "id": 1,
                            "optionCategoryName": "Agree-Disagree"
                        },
                        "optionChoices": [
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
                    },
                    {
                        "id": 2,
                        "quid": "Q123487",
                        "questionLabel": "Team Sprint Day Question",
                        "questionText": "I am completely confident that the project is on track and will be successful.",
                        "questionRequired": true,
                        "questionCategory": "blockers",
                        "questionType": "qualitative",
                        "optionCategory": {
                            "id": 1,
                            "optionCategoryName": "Agree-Disagree"
                        },
                        "optionChoices": [
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
                    },

                    {
                        "id": 3,
                        "quid": "Q123487",
                        "questionLabel": "Team Sprint Day Question",
                        "questionText": "I am completely confident that the client will be happy with project results.",
                        "questionRequired": true,
                        "questionCategory": "blockers",
                        "questionType": "qualitative",
                        "optionCategory": {
                            "id": 1,
                            "optionCategoryName": "Agree-Disagree"
                        },
                        "optionChoices": [
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
                    },

                    {
                        "id": 4,
                        "quid": "Q123487",
                        "questionLabel": "Team Sprint Day Question",
                        "questionText": "My team's code is of exceptional quality.",
                        "questionRequired": true,
                        "questionCategory": "blockers",
                        "questionType": "qualitative",
                        "optionCategory": {
                            "id": 1,
                            "optionCategoryName": "Agree-Disagree"
                        },
                        "optionChoices": [
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
                    },
                    {
                        "id": 5,
                        "quid": "Q123487",
                        "questionLabel": "Team Sprint Day Question",
                        "questionText": "My team is working together extremely well.",
                        "questionRequired": true,
                        "questionCategory": "blockers",
                        "questionType": "qualitative",
                        "optionCategory": {
                            "id": 1,
                            "optionCategoryName": "Agree-Disagree"
                        },
                        "optionChoices": [
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
                    },
                    {
                        "id": 6,
                        "quid": "Q123487",
                        "questionLabel": "Team Sprint Day Question",
                        "questionText": "I have all of the tools and resources I need to complete my project.",
                        "questionRequired": true,
                        "questionCategory": "blockers",
                        "questionType": "qualitative",
                        "optionCategory": {
                            "id": 1,
                            "optionCategoryName": "Agree-Disagree"
                        },
                        "optionChoices": [
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
                    },
                    {
                        "id": 7,
                        "quid": "Q123487",
                        "questionLabel": "Team Sprint Day Question",
                        "questionText": "The requirements in my cards are clear, complete and cohesive.",
                        "questionRequired": true,
                        "questionCategory": "blockers",
                        "questionType": "qualitative",
                        "optionCategory": {
                            "id": 1,
                            "optionCategoryName": "Agree-Disagree"
                        },
                        "optionChoices": [
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
                    },
                    {
                        "id": 8,
                        "quid": "Q123487",
                        "questionLabel": "Team Sprint Day Question",
                        "questionText": "Client stakeholders are appropriately engaged to the level required for project success",
                        "questionRequired": true,
                        "questionCategory": "blockers",
                        "questionType": "qualitative",
                        "optionCategory": {
                            "id": 1,
                            "optionCategoryName": "Agree-Disagree"
                        },
                        "optionChoices": [
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
                    },
                    {
                        "id": 9,
                        "quid": "Q123487",
                        "questionLabel": "Team Sprint Day Question",
                        "questionText": "The client is not a hinderance to project success.",
                        "questionRequired": true,
                        "questionCategory": "blockers",
                        "questionType": "qualitative",
                        "optionCategory": {
                            "id": 1,
                            "optionCategoryName": "Agree-Disagree"
                        },
                        "optionChoices": [
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
                    },
                    {
                        "id": 10,
                        "quid": "Q123487",
                        "questionLabel": "Team Sprint Day Question",
                        "questionText": "My work is challenging and rewarding.",
                        "questionRequired": true,
                        "questionCategory": "blockers",
                        "questionType": "qualitative",
                        "optionCategory": {
                            "id": 1,
                            "optionCategoryName": "Agree-Disagree"
                        },
                        "optionChoices": [
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

                ]
            }
        },
        {
            "id": 3,
            "suid": "S12345DE",
            "surveyTemplate": {
                "templateName": "EoS-4",
                "templateDescription": "Entire Team: This is a survey to assess project health as we approach end of sprint.",
                "templateInstruction": "Entire Team: This is to be done 4 days before a sprint end. Please fill out the following to the best of your ability.",
                "project": {
                    "id": 1,
                    "name": "Choice Vacation Rentals",
                    "engagementManager": {
                        "id": 1,
                        "engagementManagerName": "David Bernal"
                    }
                },
                "questions": [
                    {
                        "id": 1,
                        "quid": "ABCDEF123",
                        "questionLabel": "Personal EoS-4 Confidence Deliverable",
                        "questionText": "I am completely confident that my team will deliver its sprint commitment.",
                        "questionRequired": true,
                        "questionCategory": "deliverable",
                        "questionType": "qualitative",
                        "optionCategory": {
                            "id": 1,
                            "optionCategoryName": "Agree-Disagree"
                        },
                        "optionChoices": [
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
                    },
                    {
                        "id": 2,
                        "quid": "Q123487",
                        "questionLabel": "Team Sprint Day Question",
                        "questionText": "The issues, impediments and blockers that have come up during this sprint were managed effectively (or are being effectively managed).",
                        "questionRequired": true,
                        "questionCategory": "blockers",
                        "questionType": "qualitative",
                        "optionCategory": {
                            "id": 1,
                            "optionCategoryName": "Agree-Disagree"
                        },
                        "optionChoices": [
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
                    },
                    {
                        "id": 3,
                        "quid": "Q123487",
                        "questionLabel": "Team Sprint Day Question",
                        "questionText": "I am completely confident that the client will be happy with sprint results/deliverables.",
                        "questionRequired": true,
                        "questionCategory": "blockers",
                        "questionType": "qualitative",
                        "optionCategory": {
                            "id": 1,
                            "optionCategoryName": "Agree-Disagree"
                        },
                        "optionChoices": [
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

                ]
            }
        },
        {
            "id": 4,
            "suid": "S12345DE",
            "surveyTemplate": {
                "templateName": "Lead Project Data",
                "templateDescription": "This is a survey to assess project health as we approach end of sprint.",
                "templateInstruction": "This is to be done 4 days before a sprint end. Please fill out the following to the best of your ability.",
                "project": {
                    "id": 1,
                    "name": "Choice Vacation Rentals",
                    "engagementManager": {
                        "id": 1,
                        "engagementManagerName": "David Bernal"
                    }
                },
                "questions": [
                    {
                        "id": 1,
                        "quid": "ABCDEF123",
                        "questionLabel": "Personal EoS-4 Confidence Deliverable",
                        "questionText": "Currently, how many bugs categorized as 'blocker' exist in the backlog? (Critical, Major and Low priority)",
                        "questionRequired": true,
                        "questionCategory": "deliverable",
                        "questionType": "quantitative"
                    },
                    {
                        "id": 2,
                        "quid": "Q123487",
                        "questionLabel": "Team Sprint Day Question",
                        "questionText": "Jenkins - how many builds were done over the course of the sprint that ends today?",
                        "questionRequired": true,
                        "questionCategory": "blockers",
                        "questionType": "quantitative"
                    },

                    {
                        "id": 3,
                        "quid": "Q123487",
                        "questionLabel": "Team Sprint Day Question",
                        "questionText": "Git/SCM - how many check-ins were done by the team over the sprint?",
                        "questionRequired": true,
                        "questionCategory": "blockers",
                        "questionType": "quantitative"
                    },

                    {
                        "id": 4,
                        "quid": "Q123487",
                        "questionLabel": "Team Sprint Day Question",
                        "questionText": "Jenkins or other code coverage tool - what is the level of unit test coverage on your most recent build?",
                        "questionRequired": true,
                        "questionCategory": "blockers",
                        "questionType": "quantitative"
                    },
                    {
                        "id": 5,
                        "quid": "Q123487",
                        "questionLabel": "Team Sprint Day Question",
                        "questionText": "Jenkins - how many failed builds were there in the sprint ending today?",
                        "questionRequired": true,
                        "questionCategory": "blockers",
                        "questionType": "quantitative"
                    },
                    {
                        "id": 6,
                        "quid": "Q123487",
                        "questionLabel": "Team Sprint Day Question",
                        "questionText": "In build tool or IDE, how many automated test cases are there?",
                        "questionRequired": true,
                        "questionCategory": "blockers",
                        "questionType": "quantitative"
                    },
                    {
                        "id": 7,
                        "quid": "Q123487",
                        "questionLabel": "Team Sprint Day Question",
                        "questionText": "Jenkins or IDE - how many automated tests were run in the most recent build?",
                        "questionRequired": true,
                        "questionCategory": "blockers",
                        "questionType": "quantitative"
                    },
                    {
                        "id": 8,
                        "quid": "Q123487",
                        "questionLabel": "Team Sprint Day Question",
                        "questionText": "Jenkins/IDE - How many automated tests were quarantined/disabled in the most recent build?",
                        "questionRequired": true,
                        "questionCategory": "blockers",
                        "questionType": "quantitative"
                    },{
                        "id": 9,
                        "quid": "Q123487",
                        "questionLabel": "Team Sprint Day Question",
                        "questionText": "Jenkins/IDE - How many automated tests failed in the most recent build?",
                        "questionRequired": true,
                        "questionCategory": "blockers",
                        "questionType": "quantitative"
                    },{
                        "id": 10,
                        "quid": "Q123487",
                        "questionLabel": "Team Sprint Day Question",
                        "questionText": "Jenkins - what was the build duration (including running tests) for the latest build?",
                        "questionRequired": true,
                        "questionCategory": "blockers",
                        "questionType": "quantitative"
                    },
                    {
                        "id": 11,
                        "quid": "Q123487",
                        "questionLabel": "Team Sprint Day Question",
                        "questionText": "Jenkins/Sonar - what is your average cyclomatic complexity?Max cyclomatic complexity?",
                        "questionRequired": true,
                        "questionCategory": "blockers",
                        "questionType": "quantitative"
                    },
                    {
                        "id": 12,
                        "quid": "Q123487",
                        "questionLabel": "Team Sprint Day Question",
                        "questionText": "Jenkins/Lint tool - how many lint violations were in the most recent build?",
                        "questionRequired": true,
                        "questionCategory": "blockers",
                        "questionType": "quantitative"
                    }

                ]
            }
        },
        {
            "id": 5,
            "suid": "S12345DE",
            "surveyTemplate": {
                "templateName": "EM Project Data",
                "templateDescription": "This is a survey to assess project health as we approach end of sprint.",
                "templateInstruction": "This is to be done 4 days before a sprint end. Please fill out the following to the best of your ability.",
                "project": {
                    "id": 1,
                    "name": "Choice Vacation Rentals",
                    "engagementManager": {
                        "id": 1,
                        "engagementManagerName": "David Bernal"
                    }
                },
                "questions": [
                    {
                        "id": 1,
                        "quid": "ABCDEF123",
                        "questionLabel": "Personal EoS-4 Confidence Deliverable",
                        "questionText": "How many points were committed to at the start of the sprint ending today?",
                        "questionRequired": true,
                        "questionCategory": "deliverable",
                        "questionType": "quantitative"
                    },
                    {
                        "id": 2,
                        "quid": "Q123487",
                        "questionLabel": "Team Sprint Day Question",
                        "questionText": "How many points were accepted today?",
                        "questionRequired": true,
                        "questionCategory": "blockers",
                        "questionType": "quantitative"
                    },

                    {
                        "id": 3,
                        "quid": "Q123487",
                        "questionLabel": "Team Sprint Day Question",
                        "questionText": "How many stories were added mid-sprint to the sprint ending today?",
                        "questionRequired": true,
                        "questionCategory": "blockers",
                        "questionType": "quantitative"
                    },

                    {
                        "id": 4,
                        "quid": "Q123487",
                        "questionLabel": "Team Sprint Day Question",
                        "questionText": "How many stories had their requirements changed mid-sprint?",
                        "questionRequired": true,
                        "questionCategory": "blockers",
                        "questionType": "quantitative"
                    },
                    {
                        "id": 5,
                        "quid": "Q123487",
                        "questionLabel": "Team Sprint Day Question",
                        "questionText": "Of these, how many are dev-ready (meaning the requirements and acceptance criteria are complete and approved, and the story has been estimate/pointed)?",
                        "questionRequired": true,
                        "questionCategory": "blockers",
                        "questionType": "quantitative"
                    },
                    {
                        "id": 6,
                        "quid": "Q123487",
                        "questionLabel": "Team Sprint Day Question",
                        "questionText": "How many points worth of dev-ready stories are currently in there backlog?",
                        "questionRequired": true,
                        "questionCategory": "blockers",
                        "questionType": "quantitative"
                    },
                    {
                        "id": 7,
                        "quid": "Q123487",
                        "questionLabel": "Team Sprint Day Question",
                        "questionText": "For each team member, indicate the number of points delivered by that individual during the sprint.",
                        "questionRequired": true,
                        "questionCategory": "blockers",
                        "questionType": "quantitative"
                    },
                    {
                        "id": 8,
                        "quid": "Q123487",
                        "questionLabel": "Team Sprint Day Question",
                        "questionText": "Entering today's sprint planning, how many stories are in the backlog?",
                        "questionRequired": true,
                        "questionCategory": "blockers",
                        "questionType": "quantitative"
                    }

                ]
            }
        }

    ];

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (survey) => {
    return replaceAll(survey.name, ' ', '-');
};

class SurveyApi {
    static getAllSurveys() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], surveys));
            }, delay);
        });
    }

    static saveSurvey(survey) {
        survey = Object.assign({}, survey); // to avoid manipulating object passed in.
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate server-side validation
                const minSurveyNameLength = 1;
                if (survey.name.length < minSurveyNameLength) {
                    reject(`Name must be at least ${minSurveyNameLength} characters.`);
                }

                if (survey.id) {
                    const existingSurveyIndex = surveys.findIndex(a => a.id == survey.id);
                    surveys.splice(existingSurveyIndex, 1, survey);
                } else {
                    //Just simulating creation here.
                    //The server would generate ids and watchHref's for new courses in a real app.
                    //Cloning so copy returned is passed by value rather than by reference.
                    survey.id = generateId(survey);
                    survey.watchHref = `http://www.pluralsight.com/courses/${survey.id}`;
                    survey.push(survey);
                }

                resolve(survey);
            }, delay);
        });
    }

    /*static deleteSurvey(surveyId) {
     return new Promise((resolve, reject) => {
     setTimeout(() => {
     const indexOfSurveyToDelete = surveys.findIndex(survey => {
     survey.surveyId == surveyId;
     });
     surveys.splice(indexOfSurveyToDelete, 1);
     resolve();
     }, delay);
     });
     }*/
}

export default  SurveyApi;
