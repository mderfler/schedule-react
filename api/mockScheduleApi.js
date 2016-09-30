import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const schedules = [
  {
    id: "1",
    days: ["Monday", "Wednesday"],
    frequency: "ONE_WEEK",
    interval: "null",
    startDate: "2016-04-30",
    endDate: "2016-05-15",
    survey: "surveyURL1",
    respondents: [
         {
           "allowedAttributes": [
             {
               "value": "DEV",
               "attributeTypes": {
                 "name": "ROLE"
               }
             },
             {
               "value": "BALTIMORE",
               "attributeTypes": {
                 "name": "OFFICE"
               }
             },
             {
               "value": "CHOICE",
               "attributeTypes": {
                 "name": "CLIENT"
               }
             },
             {
               "value": "PMSI",
               "attributeTypes": {
                 "name": "PROJECT"
               }
             }
           ],
           "user": {
             "email": "user1@test.com",
             "firstName": "Test1",
             "lastName": "User1"
           }
         }
       ]
  },
  {
    id: "2",
    days: ["Monday"],
    frequency: "MONTHLY",
    interval: "null",
    startDate: "2016-05-25",
    endDate: "2016-12-25",
    survey: "surveyURL2",
    respondents: [
         {
           "allowedAttributes": [
             {
               "value": "TECH LEAD",
               "attributeTypes": {
                 "name": "ROLE"
               }
             },
             {
               "value": "BEAVERTON",
               "attributeTypes": {
                 "name": "OFFICE"
               }
             },
             {
               "value": "CHOICE",
               "attributeTypes": {
                 "name": "CLIENT"
               }
             },
             {
               "value": "DB1",
               "attributeTypes": {
                 "name": "PROJECT"
               }
             }
           ],
           "user": {
             "email": "user2@test.com",
             "firstName": "Test2",
             "lastName": "User2"
           }
         }
       ]
  }];
    

  class ScheduleApi {
    static getAllSchedules() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], schedules));
            }, delay);
        });
    }

    static getScheduleById(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let schedule = schedules.find((theSchedule) => {
                    return schedule.id === id;
                });
                if (schedule) {
                    resolve(Object.assign({}, schedule));
                } else {
                    reject(`No schedule with id of ${id} found.`);
                }

            }, delay);
        });
    }

    static saveSchedule(schedule) {
      return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (schedule.id) {
          const existingScheduleIndex = schedules.findIndex(a => a.id == schedule.id);
          schedules.splice(existingScheduleIndex, 1, schedule);
        } else {
          schedule.id = schedules.length + 1;
          schedules.push(schedule);
        }

        resolve(Object.assign({}, schedule));
      }, delay);
    });
  }
}

export default ScheduleApi;
