export default function UserDataGenerator() {
  // This script creates mock up data Nichi App

  // let now = new Date();
  // let yest = new Date(now.setDate(now.getDate() - 1));
  // let dayB4Yest = new Date(yest.setDate(yest.getDate() - 1));

  const userData = {
    username: "Pikachu",
    mood: [
      {
        type: "Mood",
        description: "OK",
        time: "2023-03-19T11:11:18.640Z",
        notes: "Just ok, waiting for someone who is late.",
      },
      {
        type: "Mood",
        description: "Happy",
        time: "2023-03-22T13:04:19.640Z",
        notes: "Had a great time with my friends!",
      },
      {
        type: "Mood",
        description: "Happy",
        time: "2023-03-23T14:15:01.640Z",
        notes: "It is so good to hear the good news from my best friend!",
      },
      {
        type: "Mood",
        description: "Neutral",
        time: "2023-03-24T06:00:59.640Z",
        notes: "Feeling slightly disconnected now.",
      },
      {
        type: "Mood",
        description: "Sad",
        time: "2023-03-24T21:57:19.640Z",
        notes: "Just can't get rid of this blah feeling.",
      },
      {
        type: "Mood",
        description: "OK",
        time: "2023-03-25T23:53:49.640Z",
        notes: "Ate a whole tub of ice-cream so feeling slightly better.",
      },
      {
        type: "Mood",
        description: "Neutral",
        time: "2023-03-26T09:13:01.640Z",
        notes: "Feeling tired because of the time change.",
      },
      {
        type: "Mood",
        description: "Happy",
        time: "2023-03-27T15:04:15.640Z",
        notes: "There is a new leaf bud on my bonsai!",
      },
      {
        type: "Mood",
        description: "Happy",
        time: "2023-03-28T08:11:49.640Z",
        notes: "Looking forward to meet with my best friend tomorrow!",
      },
      {
        type: "Mood",
        description: "Happy",
        time: "2023-03-28T13:48:01.640Z",
        notes: "My partner cooked my favourite food for dinner! Yummy!",
      },
    ],
    meditation: [
      {
        type: "Meditation",
        description: "Spotlighting",
        time: "2023-03-24T06:02:10.640Z",
      },
      {
        type: "Meditation",
        description: "Breathing",
        time: "2023-03-24T22:00:01.640Z",
      },
      {
        type: "Meditation",
        description: "Reflection",
        time: "2023-03-26T10:02:59.640Z",
      },
      {
        type: "Meditation",
        description: "Reflection",
        time: "2023-03-26T10:15:55.640Z",
      },
      {
        type: "Meditation",
        description: "Breathing",
        time: "2023-03-27T17:29:10.640Z",
      },
      {
        type: "Meditation",
        description: "Spotlighting",
        time: "2023-03-28T09:25:39.640Z",
      },
      {
        type: "Meditation",
        description: "Breathing",
        time: "2023-03-29T08:38:16.640Z",
      },
    ],
    theme: "light",
  };

  localStorage.setItem("userData", JSON.stringify(userData));
}
