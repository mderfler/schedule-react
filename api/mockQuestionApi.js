import delay from './delay';
const questions =  [
        {
            "id": 1,
            "text": "I am completely confident that my team will deliver its sprint commitment.",
            "_links": {
                "self": {
                    "href": "http://localhost:8090/questions/1"
                },
                "question": {
                    "href": "http://localhost:8090/questions/1{?projection}",
                    "templated": true
                },
                "tags": {
                    "href": "http://localhost:8090/questions/1/tags"
                },
                "responseType": {
                    "href": "http://localhost:8090/questions/1/responseType"
                }
            }
        },
        {
            "id": 2,
            "text": "The issues, impediments and blockers that have come up during this sprint were managed effectively (or are being effectively managed).",
            "_links": {
                "self": {
                    "href": "http://localhost:8090/questions/2"
                },
                "question": {
                    "href": "http://localhost:8090/questions/2{?projection}",
                    "templated": true
                },
                "tags": {
                    "href": "http://localhost:8090/questions/2/tags"
                },
                "responseType": {
                    "href": "http://localhost:8090/questions/2/responseType"
                }
            }
        },
        {
            "id": 3,
            "text": "I am completely confident that the client will be happy with sprint results/deliverables.",
            "_links": {
                "self": {
                    "href": "http://localhost:8090/questions/3"
                },
                "question": {
                    "href": "http://localhost:8090/questions/3{?projection}",
                    "templated": true
                },
                "tags": {
                    "href": "http://localhost:8090/questions/3/tags"
                },
                "responseType": {
                    "href": "http://localhost:8090/questions/3/responseType"
                }
            }
        },
        {
            "id": 4,
            "text": "I am completely confident that the project is on track and will be successful.",
            "_links": {
                "self": {
                    "href": "http://localhost:8090/questions/4"
                },
                "question": {
                    "href": "http://localhost:8090/questions/4{?projection}",
                    "templated": true
                },
                "tags": {
                    "href": "http://localhost:8090/questions/4/tags"
                },
                "responseType": {
                    "href": "http://localhost:8090/questions/4/responseType"
                }
            }
        },
        {
            "id": 5,
            "text": "I am completely confident that the client will be happy with project results.",
            "_links": {
                "self": {
                    "href": "http://localhost:8090/questions/5"
                },
                "question": {
                    "href": "http://localhost:8090/questions/5{?projection}",
                    "templated": true
                },
                "tags": {
                    "href": "http://localhost:8090/questions/5/tags"
                },
                "responseType": {
                    "href": "http://localhost:8090/questions/5/responseType"
                }
            }
        },
        {
            "id": 6,
            "text": "My team\"s code is of exceptional quality.",
            "_links": {
                "self": {
                    "href": "http://localhost:8090/questions/6"
                },
                "question": {
                    "href": "http://localhost:8090/questions/6{?projection}",
                    "templated": true
                },
                "tags": {
                    "href": "http://localhost:8090/questions/6/tags"
                },
                "responseType": {
                    "href": "http://localhost:8090/questions/6/responseType"
                }
            }
        },
        {
            "id": 7,
            "text": "My team is working together extremely well.",
            "_links": {
                "self": {
                    "href": "http://localhost:8090/questions/7"
                },
                "question": {
                    "href": "http://localhost:8090/questions/7{?projection}",
                    "templated": true
                },
                "tags": {
                    "href": "http://localhost:8090/questions/7/tags"
                },
                "responseType": {
                    "href": "http://localhost:8090/questions/7/responseType"
                }
            }
        },
        {
            "id": 8,
            "text": "I have all of the tools and resources I need to complete my project.",
            "_links": {
                "self": {
                    "href": "http://localhost:8090/questions/8"
                },
                "question": {
                    "href": "http://localhost:8090/questions/8{?projection}",
                    "templated": true
                },
                "tags": {
                    "href": "http://localhost:8090/questions/8/tags"
                },
                "responseType": {
                    "href": "http://localhost:8090/questions/8/responseType"
                }
            }
        },
        {
            "id": 9,
            "text": "The requirements in my cards are clear, complete and cohesive.",
            "_links": {
                "self": {
                    "href": "http://localhost:8090/questions/9"
                },
                "question": {
                    "href": "http://localhost:8090/questions/9{?projection}",
                    "templated": true
                },
                "tags": {
                    "href": "http://localhost:8090/questions/9/tags"
                },
                "responseType": {
                    "href": "http://localhost:8090/questions/9/responseType"
                }
            }
        },
        {
            "id": 10,
            "text": "Client stakeholders are appropriately engaged to the level required for project success.",
            "_links": {
                "self": {
                    "href": "http://localhost:8090/questions/10"
                },
                "question": {
                    "href": "http://localhost:8090/questions/10{?projection}",
                    "templated": true
                },
                "tags": {
                    "href": "http://localhost:8090/questions/10/tags"
                },
                "responseType": {
                    "href": "http://localhost:8090/questions/10/responseType"
                }
            }
        },
        {
            "id": 11,
            "text": "The client is not a hinderance to project success.",
            "_links": {
                "self": {
                    "href": "http://localhost:8090/questions/11"
                },
                "question": {
                    "href": "http://localhost:8090/questions/11{?projection}",
                    "templated": true
                },
                "tags": {
                    "href": "http://localhost:8090/questions/11/tags"
                },
                "responseType": {
                    "href": "http://localhost:8090/questions/11/responseType"
                }
            }
        },
        {
            "id": 12,
            "text": "I have enough distraction-free time to complete my sprint commitments.",
            "_links": {
                "self": {
                    "href": "http://localhost:8090/questions/12"
                },
                "question": {
                    "href": "http://localhost:8090/questions/12{?projection}",
                    "templated": true
                },
                "tags": {
                    "href": "http://localhost:8090/questions/12/tags"
                },
                "responseType": {
                    "href": "http://localhost:8090/questions/12/responseType"
                }
            }
        },
        {
            "id": 13,
            "text": "My Scrum Master/Delivery Manager does an excellent job managing client expectations.",
            "_links": {
                "self": {
                    "href": "http://localhost:8090/questions/13"
                },
                "question": {
                    "href": "http://localhost:8090/questions/13{?projection}",
                    "templated": true
                },
                "tags": {
                    "href": "http://localhost:8090/questions/13/tags"
                },
                "responseType": {
                    "href": "http://localhost:8090/questions/13/responseType"
                }
            }
        },
        {
            "id": 14,
            "text": "My Scrum Master/Delivery Manager does an excellent job of facilitating our meetings and events.",
            "_links": {
                "self": {
                    "href": "http://localhost:8090/questions/14"
                },
                "question": {
                    "href": "http://localhost:8090/questions/14{?projection}",
                    "templated": true
                },
                "tags": {
                    "href": "http://localhost:8090/questions/14/tags"
                },
                "responseType": {
                    "href": "http://localhost:8090/questions/14/responseType"
                }
            }
        },
        {
            "id": 15,
            "text": "My Scrum Master/Delivery Manager does an excellent job of resolving issues and removing blockers/impediments.",
            "_links": {
                "self": {
                    "href": "http://localhost:8090/questions/15"
                },
                "question": {
                    "href": "http://localhost:8090/questions/15{?projection}",
                    "templated": true
                },
                "tags": {
                    "href": "http://localhost:8090/questions/15/tags"
                },
                "responseType": {
                    "href": "http://localhost:8090/questions/15/responseType"
                }
            }
        },
        {
            "id": 16,
            "text": "My Tech Lead is readily available to help resolve issues, answer questions and provide guidance/advice.",
            "_links": {
                "self": {
                    "href": "http://localhost:8090/questions/16"
                },
                "question": {
                    "href": "http://localhost:8090/questions/16{?projection}",
                    "templated": true
                },
                "tags": {
                    "href": "http://localhost:8090/questions/16/tags"
                },
                "responseType": {
                    "href": "http://localhost:8090/questions/16/responseType"
                }
            }
        },
        {
            "id": 17,
            "text": "My Tech Lead does an excellent job of resolving issues and removing blockers/impediments.",
            "_links": {
                "self": {
                    "href": "http://localhost:8090/questions/17"
                },
                "question": {
                    "href": "http://localhost:8090/questions/17{?projection}",
                    "templated": true
                },
                "tags": {
                    "href": "http://localhost:8090/questions/17/tags"
                },
                "responseType": {
                    "href": "http://localhost:8090/questions/17/responseType"
                }
            }
        },
        {
            "id": 18,
            "text": "My work is challenging and rewarding.",
            "_links": {
                "self": {
                    "href": "http://localhost:8090/questions/18"
                },
                "question": {
                    "href": "http://localhost:8090/questions/18{?projection}",
                    "templated": true
                },
                "tags": {
                    "href": "http://localhost:8090/questions/18/tags"
                },
                "responseType": {
                    "href": "http://localhost:8090/questions/18/responseType"
                }
            }
        },
        {
            "id": 19,
            "text": "How many points were committed to at the start of the sprint ending today?",
            "_links": {
                "self": {
                    "href": "http://localhost:8090/questions/19"
                },
                "question": {
                    "href": "http://localhost:8090/questions/19{?projection}",
                    "templated": true
                },
                "tags": {
                    "href": "http://localhost:8090/questions/19/tags"
                },
                "responseType": {
                    "href": "http://localhost:8090/questions/19/responseType"
                }
            }
        },
        {
            "id": 20,
            "text": "How many points were accepted today?",
            "_links": {
                "self": {
                    "href": "http://localhost:8090/questions/20"
                },
                "question": {
                    "href": "http://localhost:8090/questions/20{?projection}",
                    "templated": true
                },
                "tags": {
                    "href": "http://localhost:8090/questions/20/tags"
                },
                "responseType": {
                    "href": "http://localhost:8090/questions/20/responseType"
                }
            }
        }
    ];

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (question) => {
    return replaceAll(question.name, ' ', '-');
};

class QuestionApi {
    static getAllQuestions() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], questions));
            }, delay);
        });
    }

    static saveQuestion(question) {
        question = Object.assign({}, question); // to avoid manipulating object passed in.
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate server-side validation
                const minQuestionNameLength = 1;
                if (question.name.length < minQuestionNameLength) {
                    reject(`Name must be at least ${minQuestionNameLength} characters.`);
                }

                if (question.id) {
                    const existingQuestionIndex = questions.findIndex(a => a.id == question.id);
                   // questions.splice(existingCourseIndex, 1, course);
                    return "Error Finding Question";
                } else {
                    //Just simulating creation here.
                    //The server would generate ids and watchHref's for new courses in a real app.
                    //Cloning so copy returned is passed by value rather than by reference.
                    question.id = generateId(question);
                    question.watchHref = `localhost:8090/profile/questions/${question.id}`;
                    questions.push(question);
                }

                resolve(question);
            }, delay);
        });
    }

    static deleteQuestion(questionId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexOfQuestionToDelete = questions.findIndex(question => {
                    question.questionId == questionId;
                });
                questions.splice(indexOfQuestionToDelete, 1);
                resolve();
            }, delay);
        });
    }
}

export default QuestionApi;