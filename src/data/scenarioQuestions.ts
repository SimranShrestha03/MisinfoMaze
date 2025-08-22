export interface ScenarioQuestion {
  id: number;
  scenario: string;
  message: string;
  image?: string; // Optional image path for scenarios that need visual context
  options: string[];
  correctOption: number; // Index of the correct option (0-based)
  explanation: string;
}

export const scenarioQuestions: ScenarioQuestion[] = [
  {
    id: 1,
    scenario: "You hear a ding on your phone. You look down and see it is your aunt Kathy (she and her husband are what some might call conspiracy theorists).",
    message: "Hate to break this to all of the morons who call themselves Journalists. COVID literally stands for 'Chinese Originated Viral Infectious Disease' and the number 19 is due to this being the 19th virus to come out of China.",
    image: "/images/covid_misinfo_chinese_originated.jpg",
    options: [
      "Reply 'That's interesting, I'll look into it' and share it with your friends",
      "Say nothing and move on",
      "Google it and see if the post is accurate"
    ],
    correctOption: 2,
    explanation: "The best response is to fact-check the information. COVID-19 stands for 'Coronavirus Disease 2019' - the '19' refers to the year it was first identified, not the 19th virus from China. Always verify claims before sharing or agreeing with them."
  },
  {
    id: 2,
    scenario: "Your friend Sarah sends you a message in your group chat about a 'miracle cure' for COVID-19.",
    message: "Guys, I just read about this amazing natural remedy! Drinking hot water with lemon and ginger every hour can completely cure COVID-19 in 24 hours. No need for vaccines or masks!",
    options: [
      "Reply 'Thanks for sharing, I'll try it!' and forward to family",
      "Ask for the source and fact-check the claim",
      "Comment 'I heard vitamin D and zinc work too, let's combine them all!'"
    ],
    correctOption: 1,
    explanation: "Always verify health claims before sharing them. There is no natural cure for COVID-19, and such claims can be dangerous if they prevent people from seeking proper medical care or following proven prevention methods."
  },
  {
    id: 3,
    scenario: "Your coworker Mike forwards you an article about COVID-19 testing.",
    message: "This article says that COVID tests are unreliable and give false positives 80% of the time. They're just trying to scare us into getting tested so they can control us!",
    options: [
      "Forward it to your family group chat to warn them",
      "Research the claim and discuss it calmly with facts",
      "Tell Mike 'You're right, I'm not getting tested either'"
    ],
    correctOption: 1,
    explanation: "While it's important to address misinformation, doing so respectfully and with facts is more effective than confrontation. COVID-19 tests are generally reliable when used properly, and false positive rates are much lower than claimed."
  },
  {
    id: 4,
    scenario: "Your neighbor posts on social media about COVID-19 prevention.",
    message: "I heard that taking hot baths and using a hairdryer to blow hot air up your nose can kill the coronavirus. Much better than wearing those uncomfortable masks!",
    options: [
      "Comment 'Interesting, thanks for the tip!' and try it yourself",
      "Share reliable information about proper prevention methods",
      "Reply 'I read that gargling salt water works too, let's try both!'"
    ],
    correctOption: 1,
    explanation: "Hot baths and hairdryers cannot kill the coronavirus and may be dangerous. The best prevention methods are wearing masks, social distancing, hand hygiene, and vaccination. Sharing accurate information helps protect your community."
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
    explanation: "COVID-19 vaccines do not contain microchips or tracking devices. This is a common conspiracy theory. Vaccines contain only the ingredients needed to trigger an immune response. Fact-checking and sharing accurate information helps combat misinformation."
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
    explanation: "When you test positive for COVID-19, you should isolate yourself to prevent spreading the virus to others. Resting and staying home is the responsible action that protects your coworkers and community. Even if you feel okay, you can still spread the virus to others."
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
    explanation: "5G networks use radio waves that cannot create or spread viruses. Viruses are biological entities that require specific conditions to survive and spread. This conspiracy theory has been thoroughly debunked by scientists worldwide."
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
    explanation: "mRNA vaccines work by providing instructions to cells to make a protein that triggers an immune response. The mRNA never enters the cell nucleus where DNA is located, and it breaks down quickly after use. It cannot alter your genetic code."
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
    explanation: "While natural immunity provides some protection, vaccination offers additional and more consistent protection. The vaccine does not weaken natural immunity and can provide longer-lasting protection against variants."
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
    explanation: "Properly fitted masks do not cause oxygen deprivation or carbon dioxide poisoning. Medical masks are designed to allow normal breathing while filtering particles. The claims about oxygen deprivation are not supported by scientific evidence."
  },
  {
    id: 11,
    scenario: "Your coworker shares an article about vaccine side effects.",
    message: "This study shows that vaccines cause infertility in women. The government is trying to control population growth through vaccination!",
    options: [
      "Forward the article to your female colleagues to warn them",
      "Share it on social media to raise awareness",
      "Research the claim and find reliable information about vaccine safety"
    ],
    correctOption: 2,
    explanation: "There is no scientific evidence that COVID-19 vaccines cause infertility. These claims have been thoroughly debunked. Vaccines work by stimulating the immune system and do not affect reproductive health."
  },
  {
    id: 12,
    scenario: "Your friend posts about a 'miracle supplement' for COVID prevention.",
    message: "This supplement boosts your immune system so much that you can't get COVID. It's 100% natural and has no side effects. Much better than vaccines!",
    options: [
      "Order the supplement immediately and share the link",
      "Comment 'I heard that too, natural is always better than synthetic'",
      "Ask for scientific evidence and research the claims"
    ],
    correctOption: 2,
    explanation: "No supplement can provide 100% protection against COVID-19. While some supplements may support immune health, they are not a substitute for proven prevention methods like vaccination and proper hygiene."
  },
  {
    id: 13,
    scenario: "Your relative claims that the flu shot gives you the flu.",
    message: "I got the flu shot last year and immediately got sick. The vaccine actually gives you the flu virus. I'm never getting vaccinated again!",
    options: [
      "Agree and say 'That happened to me too, vaccines are dangerous'",
      "Tell them 'I heard that too, it's because they inject live virus'",
      "Explain that flu vaccines cannot cause the flu"
    ],
    correctOption: 2,
    explanation: "Flu vaccines cannot cause the flu. The injectable flu vaccine contains inactivated virus or virus proteins, not live virus. Any mild symptoms after vaccination are the body's immune response, not the flu itself."
  },
  {
    id: 14,
    scenario: "Your colleague refuses to get tested because of privacy concerns.",
    message: "I won't get tested because the government will use my DNA to track me. They're building a database of everyone's genetic information!",
    options: [
      "Agree and say 'You're right, they're collecting our DNA secretly'",
      "Tell them 'I heard that too, it's a privacy violation'",
      "Explain that COVID tests don't collect or store DNA"
    ],
    correctOption: 2,
    explanation: "COVID-19 tests detect viral RNA, not human DNA. They do not collect, store, or analyze your genetic information. The tests are designed to identify the presence of the virus, not to gather personal genetic data."
  },
  {
    id: 15,
    scenario: "Your neighbor claims that children can't spread COVID-19.",
    message: "Kids don't get COVID and can't spread it to adults. That's why schools should stay open. The virus only affects old people!",
    options: [
      "Agree and say 'You're right, kids are immune to it'",
      "Tell them 'I heard that too, it's only dangerous for elderly'",
      "Explain that children can contract and spread COVID-19"
    ],
    correctOption: 2,
    explanation: "Children can contract and spread COVID-19, though they may have milder symptoms. While they are generally at lower risk for severe illness, they can still transmit the virus to others, including vulnerable adults."
  },
  {
    id: 16,
    scenario: "Your friend shares a post about 'herd immunity' through natural infection.",
    message: "We should let everyone get COVID naturally to build herd immunity. It's better than vaccines and will end the pandemic faster!",
    options: [
      "Agree and say 'You're right, natural herd immunity is the way to go'",
      "Tell them 'I heard that too, vaccines are unnecessary'",
      "Explain that natural herd immunity would cause unnecessary deaths"
    ],
    correctOption: 2,
    explanation: "Achieving herd immunity through natural infection would result in millions of preventable deaths and severe illness. Vaccination is the safe and effective way to build herd immunity while protecting vulnerable populations."
  },
  {
    id: 17,
    scenario: "Your coworker claims that hand sanitizer is dangerous.",
    message: "Hand sanitizer kills good bacteria and makes your immune system weaker. It's better to just wash with soap and water occasionally.",
    options: [
      "Agree and say 'You're right, I avoid sanitizer too'",
      "Tell them 'I heard that too, it's bad for your skin'",
      "Explain that hand sanitizer is safe when used properly"
    ],
    correctOption: 2,
    explanation: "Hand sanitizer is safe when used properly and does not weaken the immune system. It kills harmful germs while preserving the skin's natural microbiome. It's an effective alternative when soap and water aren't available."
  },
  {
    id: 18,
    scenario: "Your relative claims that the vaccine contains tracking devices.",
    message: "I read that the vaccine has tiny microchips that can track your location. That's why they want everyone vaccinated - to monitor us!",
    options: [
      "Agree and say 'You're right, I saw that article too'",
      "Tell them 'I heard that too, it's scary technology'",
      "Explain that vaccines cannot contain tracking devices"
    ],
    correctOption: 2,
    explanation: "Vaccines cannot contain tracking devices. The ingredients in vaccines are carefully regulated and documented. Microchips would be visible under a microscope and would not survive the injection process."
  },
  {
    id: 19,
    scenario: "Your friend claims that COVID-19 is just a bad flu.",
    message: "COVID is just like the flu. The media is exaggerating everything. People die from the flu every year and we don't shut down for that!",
    options: [
      "Agree and say 'You're right, it's just the flu with better PR'",
      "Tell them 'I heard that too, the media is overreacting'",
      "Explain that COVID-19 is more severe than seasonal flu"
    ],
    correctOption: 2,
    explanation: "COVID-19 is more severe than seasonal flu, with higher mortality rates, more severe complications, and longer recovery times. It also spreads more easily and can cause long-term health effects in some people."
  },
  {
    id: 20,
    scenario: "Your neighbor refuses to wear a mask because of 'freedom'.",
    message: "Masks are a violation of my constitutional rights. The government can't force me to wear anything. This is about freedom, not health!",
    options: [
      "Agree and say 'You're right, it's government overreach'",
      "Tell them 'I heard that too, it's unconstitutional'",
      "Explain that mask mandates are public health measures, not rights violations"
    ],
    correctOption: 2,
    explanation: "Mask mandates are public health measures designed to protect the community, not violations of constitutional rights. Courts have consistently upheld public health measures during emergencies."
  },
  {
    id: 21,
    scenario: "Your colleague claims that the vaccine causes autism.",
    message: "I read that the COVID vaccine can cause autism in children. That's why I won't let my kids get vaccinated. Autism is worse than COVID!",
    options: [
      "Agree and say 'You're right, autism is a serious concern'",
      "Tell them 'I heard that too, vaccines are linked to autism'",
      "Explain that there is no link between vaccines and autism"
    ],
    correctOption: 2,
    explanation: "There is no scientific evidence linking vaccines to autism. This myth originated from a fraudulent study that has been thoroughly debunked. Multiple large studies have confirmed that vaccines do not cause autism."
  },
  {
    id: 22,
    scenario: "Your friend claims that the vaccine was developed too quickly.",
    message: "The vaccine was rushed and not properly tested. They skipped safety trials to make money. I won't be a guinea pig for Big Pharma!",
    options: [
      "Agree and say 'You're right, it was rushed for profit'",
      "Tell them 'I heard that too, they cut corners on safety'",
      "Explain that the vaccine went through proper safety testing"
    ],
    correctOption: 2,
    explanation: "COVID-19 vaccines went through the same rigorous safety testing as other vaccines. The development was faster due to unprecedented global cooperation and funding, not by skipping safety protocols."
  },
  {
    id: 23,
    scenario: "Your relative claims that the vaccine changes your personality.",
    message: "I heard that the vaccine can change your personality and make you more aggressive. That's why vaccinated people are acting differently!",
    options: [
      "Agree and say 'You're right, I've noticed people acting strange'",
      "Tell them 'I heard that too, it affects the brain'",
      "Explain that vaccines cannot change personality or behavior"
    ],
    correctOption: 2,
    explanation: "Vaccines cannot change personality or behavior. They work by stimulating the immune system to produce antibodies. There is no mechanism by which vaccines could affect personality or cognitive function."
  },
  {
    id: 24,
    scenario: "Your coworker claims that the vaccine contains fetal tissue.",
    message: "The vaccine is made from aborted fetal cells. I won't support that morally. They're using dead babies to make vaccines!",
    options: [
      "Agree and say 'You're right, that's morally wrong'",
      "Tell them 'I heard that too, it's unethical'",
      "Explain that COVID vaccines do not contain fetal tissue"
    ],
    correctOption: 2,
    explanation: "COVID-19 vaccines do not contain fetal tissue. Some vaccines use cell lines derived from fetal cells from the 1960s for testing, but the vaccines themselves contain no fetal material."
  },
  {
    id: 25,
    scenario: "Your friend claims that the vaccine causes magnetic attraction.",
    message: "I saw a video where magnets stick to vaccinated people's arms. The vaccine contains metal that makes you magnetic!",
    options: [
      "Agree and say 'You're right, I saw that video too'",
      "Tell them 'I heard that too, it's scary technology'",
      "Explain that vaccines cannot make you magnetic"
    ],
    correctOption: 2,
    explanation: "Vaccines cannot make you magnetic. The ingredients in vaccines do not contain magnetic materials. The videos showing magnets sticking to arms are hoaxes or demonstrations of natural skin properties."
  }
];
