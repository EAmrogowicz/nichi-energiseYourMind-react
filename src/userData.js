export default function UserDataGenerator() {
  // This script creates mock up data Nichi App

  // let now = new Date();
  // let yest = new Date(now.setDate(now.getDate() - 1));
  // let dayB4Yest = new Date(yest.setDate(yest.getDate() - 1));
  
  const userData = {
    username: "Beyoncé",
    mood: [
      {
        type: "Mood",
        description: "OK",
        time: "2023-03-19T11:11:18.640Z",
        notes: "Just ok. I can't believe I HAVE TO wait for my lunch.",
      },
      {
        type: "Mood",
        description: "Happy",
        time: "2023-03-22T13:04:19.640Z",
        notes: "I looked at my last crush and thought: Wait, you kinda ugly!",
      },
      {
        type: "Mood",
        description: "Happy",
        time: "2023-03-23T14:15:01.640Z",
        notes: "You know? Who needs a ring on one's finger?",
      },
      {
        type: "Mood",
        description: "Neutral",
        time: "2023-03-24T06:00:59.640Z",
        notes: "Underneath the pretty face is something complicated. I come with a side of trouble.",
      },
      {
        type: "Mood",
        description: "Sad",
        time: "2023-03-24T21:57:19.640Z",
        notes: "Six inch heels, she walked in the club like nobody's business. Damn! She murdered everybody and I was her witness.",
      },
      {
        type: "Mood",
        description: "Sad",
        time: "2023-03-25T19:39:24.640Z",
        notes: "I was served lemons, but I made lemonade.",
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
        notes: "Some call it 'arrogant.' I call it 'confident.'",
      },
      {
        type: "Mood",
        description: "Happy",
        time: "2023-03-27T15:04:15.640Z",
        notes: "I am the dragon breathing fire. Beautiful mane, I'm the lion.",
      },
      {
        type: "Mood",
        description: "Happy",
        time: "2023-03-28T08:11:49.640Z",
        notes: "I hop up out my bed and get my swag on. I look in the mirror, say, What's up?",
      },
      {
        type: "Mood",
        description: "Happy",
        time: "2023-03-28T13:48:01.640Z",
        notes: "Got diamonds on my neck, got diamonds on my records.",
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
