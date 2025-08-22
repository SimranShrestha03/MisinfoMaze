export interface ScenarioQuestion {
  id: number;
  scenario: string;
  message: string;
  image?: string; // Optional image path for scenarios that need visual context
  options: string[];
  correctOption: number; // Index of the correct option (0-based)
  feedback: string[]; // Array of feedback strings, one for each option
}

export const scenarioQuestions: ScenarioQuestion[] = [
  {
    id: 1,
    scenario: "You hear a ding on your phone. You look down and see it is your aunt Kathy (she and her husband are what some might call conspiracy theorists).",
    message: "Hate to break this to all of the morons who call themselves Journalists. COVID literally stands for 'Chinese Originated Viral Infectious Disease' and the number 19 is due to this being the 19th virus to come out of China.",
    image: "/images/aunt_kathy.jpg",
    options: [
      "Reply 'That's interesting, I'll look into it' and share it with your friends",
      "Say nothing and move on", 
      "Google it and see if the post is accurate"
    ],
    correctOption: 2,
    feedback: [
      "You know this image is misnformation however, you don't want to start anything, so you just ignore the message.\n\nLater that day, your cousin texts you the same meme.\n\nYou wonder how far it will spread.",
      "You reply: \"Wow, that makes sense.\"\n\nKathy replies: \"Right?! The media doesn't want you to know this!\"\n\nThe image continues to circulate around with your aunt sending it to evryone in your family spreading this harmful misinformation.",
      "You do a quick Google search and find out it's completely false.\n\nCOVID-19 stands for Coronavirus Disease 2019, and has nothing to do with where it came from.\n\nYou send her a fact-check link from WHO.\n\nKathy replies with \"Huh. I didn't know that. Thanks.\"\n\nYour actions helped prevent this misinformation from spreading."
    ]
  },
  {
    id: 2,
    scenario: "Later that day you are scrolling Twitter when you come across this post.",
    message: "",
    image: "/images/WHO.jpg",
    options: [
      "Look into the information and find out whether or not it is reliable",
      "Believe it blindly"
    ],
    correctOption: 0,
    feedback: [
      "You reverse image search and see that the image is from the World Health Organization. It's been shared to combat the myth that cold weather can kill COVID-19.\n\n✅ This is a verified and accurate health fact.\n\nYou like the tweet and reply:\n> \"Glad to see people sharing helpful info from the WHO.\"",
      "You scroll past it without reading. It was accurate, but you missed a chance to learn something."
    ]
  },
  {
    id: 3,
    scenario: "You start getting ready for work when you start to cough. You check your fever and see you're running a little hot. Just to be safe, you take a COVID test. It's positive. You call into work and explain to your boss. She thanks you for letting you know.",
    message: "",
    options: [
      "Go to work anyway since you feel okay and don't want to use sick days",
      "Rest and get better",
      "Go out to run errands while you're off work since you're already home"
    ],
    correctOption: 1,
    feedback: [
      "You go to work despite testing positive, potentially exposing your coworkers to COVID-19. Several people become sick as a result, and you face disciplinary action for putting others at risk.",
      "You stay home and rest, following proper isolation guidelines. You protect your coworkers and community from potential exposure. Your boss appreciates your responsible decision and you recover fully without spreading the virus.",
      "You go out to run errands while off work, potentially exposing others in the community to COVID-19. You could spread the virus to vulnerable people at stores or other public places."
    ]
  },
  {
    id: 4,
    scenario: "You rest two days and all your symptoms are gone. You do some research online to see if it is safe to go to work. This is one of the first images to pop up.",
    message: "",
    image: "/images/maxresdefault.jpg",
    options: [
      "Blindly believe the image",
      "Call your doctor to make sure you can go to work"
    ],
    correctOption: 1,
    feedback: [
      "When you get to work your boss looks confused to see you. She informs you that you must wait five days since your last positive test, and sends you home.",
      "You call the doctor and he tells you that you must wait five days since your last COVID test.\n\nYou decide to stay home and rest some more."
    ]
  },
  {
    id: 5,
    scenario: "Your cousin sends you a video about COVID-19 vaccines.",
    message: "Watch this video! It proves that COVID vaccines contain microchips and will track everyone. The government is trying to control us through these shots!",
    options: [
      "Share the video widely to warn others",
      "Ignore it completely",
      "Fact-check the claims and share reliable information"
    ],
    correctOption: 2,
    explanation: "COVID-19 vaccines do not contain microchips or tracking devices. This is a common conspiracy theory. Vaccines contain only the ingredients needed to trigger an immune response. Fact-checking and sharing accurate information helps combat misinformation.",
    feedback: {
      correct: "You fact-check the claims and find they are completely false. You share reliable information about vaccine ingredients and explain why microchips in vaccines are impossible. Your cousin appreciates your thoughtful response.",
      incorrect: "You share the video widely, causing panic and fear among your friends and family. Several people become hesitant about vaccination, potentially putting themselves and others at risk of serious illness."
    }
  },
  {
    id: 6,
    scenario: "You start getting ready for work when you start to cough. You check your fever and see you're running a little hot. Just to be safe, you take a COVID test. It's positive. You call into work and explain to your boss. She thanks you for letting her know.",
    message: "What do you do next?",
    options: [
      "Go to work anyway since you feel okay and don't want to use sick days",
      "Rest and get better",
      "Go out to run errands while you're off work since you're already home"
    ],
    correctOption: 1,
    explanation: "When you test positive for COVID-19, you should isolate yourself to prevent spreading the virus to others. Resting and staying home is the responsible action that protects your coworkers and community. Even if you feel okay, you can still spread the virus to others.",
    feedback: {
      correct: "You stay home and rest, following proper isolation guidelines. You protect your coworkers and community from potential exposure. Your boss appreciates your responsible decision and you recover fully without spreading the virus.",
      incorrect: "You go to work despite testing positive, potentially exposing your coworkers to COVID-19. Several people become sick as a result, and you face disciplinary action for putting others at risk."
    }
  },
  {
    id: 7,
    scenario: "Your colleague shares a post claiming that 5G networks caused the COVID-19 pandemic.",
    message: "This explains everything! 5G towers emit radiation that weakens our immune systems and created the virus. That's why they're installing them everywhere!",
    options: [
      "Reply 'That makes so much sense! I knew there was something fishy about 5G'",
      "Share the post with your tech-savvy friends to get their opinion",
      "Politely explain that viruses and radio waves are completely different things"
    ],
    correctOption: 2,
    explanation: "5G networks use radio waves that cannot create or spread viruses. Viruses are biological entities that require specific conditions to survive and spread. This conspiracy theory has been thoroughly debunked by scientists worldwide.",
    feedback: {
      correct: "You politely explain the difference between radio waves and biological viruses, sharing reliable scientific sources. Your colleague appreciates your respectful approach and learns something new about how technology and biology work.",
      incorrect: "You agree with the conspiracy theory and share it with others, contributing to the spread of misinformation. Several people become fearful of 5G technology and may avoid beneficial technological advances."
    }
  },
  {
    id: 8,
    scenario: "Your friend tells you they won't get vaccinated because they heard it changes your DNA.",
    message: "I read that the mRNA vaccines actually alter your genetic code permanently. I don't want to risk my DNA being changed!",
    options: [
      "Agree and say 'You're right to be cautious about your DNA'",
      "Tell them 'I heard that too, it's scary what they're doing to us'",
      "Explain that mRNA vaccines don't enter the cell nucleus or affect DNA"
    ],
    correctOption: 2,
    explanation: "mRNA vaccines work by providing instructions to cells to make a protein that triggers an immune response. The mRNA never enters the cell nucleus where DNA is located, and it breaks down quickly after use. It cannot alter your genetic code.",
    feedback: {
      correct: "You explain how mRNA vaccines work and that they cannot alter DNA. Your friend appreciates your clear explanation and decides to get vaccinated, protecting themselves and others from serious illness.",
      incorrect: "You reinforce the misinformation about DNA changes, causing your friend to remain unvaccinated. They remain at risk of serious illness and may spread the virus to vulnerable people in their community."
    }
  },
  {
    id: 9,
    scenario: "Your sister sends you a message about a 'natural immunity' claim.",
    message: "I read that if you've already had COVID, you have natural immunity and don't need the vaccine. The vaccine might actually make your natural immunity weaker!",
    options: [
      "Reply 'You're absolutely right, natural immunity is always better'",
      "Tell her 'I heard that too, vaccines can interfere with natural protection'",
      "Explain that vaccination provides additional protection even after infection"
    ],
    correctOption: 2,
    explanation: "While natural immunity provides some protection, vaccination offers additional and more consistent protection. The vaccine does not weaken natural immunity and can provide longer-lasting protection against variants.",
    feedback: {
      correct: "You explain that vaccination provides additional protection even after infection and doesn't weaken natural immunity. Your sister gets vaccinated and has better protection against future variants and reinfection.",
      incorrect: "You agree that natural immunity is sufficient, causing your sister to skip vaccination. She remains vulnerable to reinfection and may spread the virus to others, especially as new variants emerge."
    }
  },
  {
    id: 10,
    scenario: "Your neighbor claims that masks cause oxygen deprivation.",
    message: "I can't wear masks because they reduce oxygen levels and cause carbon dioxide poisoning. I read that doctors are seeing patients with low oxygen from mask use!",
    options: [
      "Agree and say 'You're right, I feel dizzy when I wear them too'",
      "Tell them 'I heard that too, it's dangerous for people with breathing issues'",
      "Explain that properly fitted masks don't cause oxygen deprivation"
    ],
    correctOption: 2,
    explanation: "Properly fitted masks do not cause oxygen deprivation or carbon dioxide poisoning. Medical masks are designed to allow normal breathing while filtering particles. The claims about oxygen deprivation are not supported by scientific evidence.",
    feedback: {
      correct: "You explain that properly fitted masks don't cause oxygen deprivation and share reliable sources. Your neighbor learns the truth and starts wearing masks properly, protecting themselves and others from virus transmission.",
      incorrect: "You reinforce the false claim about oxygen deprivation, causing your neighbor to continue avoiding masks. They remain at higher risk of infection and may spread the virus to others in their community."
    }
  }
];
