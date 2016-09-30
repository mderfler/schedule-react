/*
const tags = [
    {
        "id": 1,
        "name": "Team",
        "_links": {
            "self": {
                "href": "http://localhost:8090/tags/1"
            },
            "tag": {
                "href": "http://localhost:8090/tags/1"
            }
        }
    },
    {
        "id": 2,
        "name": "Tech_Lead",
        "_links": {
            "self": {
                "href": "http://localhost:8090/tags/2"
            },
            "tag": {
                "href": "http://localhost:8090/tags/2"
            }
        }
    },
    {
        "id": 3,
        "name": "Engagement Manager",
        "_links": {
            "self": {
                "href": "http://localhost:8090/tags/3"
            },
            "tag": {
                "href": "http://localhost:8090/tags/3"
            }
        }
    },
    {
        "id": 4,
        "name": "Client",
        "_links": {
            "self": {
                "href": "http://localhost:8090/tags/4"
            },
            "tag": {
                "href": "http://localhost:8090/tags/4"
            }
        }
    },
    {
        "id": 5,
        "name": "Project",
        "_links": {
            "self": {
                "href": "http://localhost:8090/tags/5"
            },
            "tag": {
                "href": "http://localhost:8090/tags/5"
            }
        }
    },
    {
        "id": 6,
        "name": "Issues",
        "_links": {
            "self": {
                "href": "http://localhost:8090/tags/6"
            },
            "tag": {
                "href": "http://localhost:8090/tags/6"
            }
        }
    },
    {
        "id": 7,
        "name": "Impediment",
        "_links": {
            "self": {
                "href": "http://localhost:8090/tags/7"
            },
            "tag": {
                "href": "http://localhost:8090/tags/7"
            }
        }
    },
    {
        "id": 8,
        "name": "Blocker",
        "_links": {
            "self": {
                "href": "http://localhost:8090/tags/8"
            },
            "tag": {
                "href": "http://localhost:8090/tags/8"
            }
        }
    },
    {
        "id": 9,
        "name": "Managed",
        "_links": {
            "self": {
                "href": "http://localhost:8090/tags/9"
            },
            "tag": {
                "href": "http://localhost:8090/tags/9"
            }
        }
    },
    {
        "id": 10,
        "name": "Confidence",
        "_links": {
            "self": {
                "href": "http://localhost:8090/tags/10"
            },
            "tag": {
                "href": "http://localhost:8090/tags/10"
            }
        }
    },
    {
        "id": 11,
        "name": "Deliverables",
        "_links": {
            "self": {
                "href": "http://localhost:8090/tags/11"
            },
            "tag": {
                "href": "http://localhost:8090/tags/11"
            }
        }
    },
    {
        "id": 12,
        "name": "Sprint",
        "_links": {
            "self": {
                "href": "http://localhost:8090/tags/12"
            },
            "tag": {
                "href": "http://localhost:8090/tags/12"
            }
        }
    },
    {
        "id": 13,
        "name": "Success",
        "_links": {
            "self": {
                "href": "http://localhost:8090/tags/13"
            },
            "tag": {
                "href": "http://localhost:8090/tags/13"
            }
        }
    }
];

class TagApi {
    static getAllTags() {
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

    /!*static deleteTemplate(templateId) {
     return new Promise((resolve, reject) => {
     setTimeout(() => {
     const indexOfTemplateToDelete = templates.findIndex(template => {
     template.templateId == templateId;
     });
     templates.splice(indexOfTemplateToDelete, 1);
     resolve();
     }, delay);
     });
     }*!/
}

export default TagApi;*/
