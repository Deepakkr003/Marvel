const p = (slug) => `/posters/${slug}.jpg`;

const yearFromId = (id) => {
  const m = id.match(/-(\d{4})$/);
  return m ? Number(m[1]) : undefined;
};

// ------------------------------------------------------------
// Marvel Cinematic Multiverse Watch Order (from your screenshots)
// ------------------------------------------------------------

export const titles = [
  // -----------------------
  // Blade (Earth-26320)
  // -----------------------
  {
    id: "blade-1998",
    name: "Blade",
    type: "film",
    universe: "Earth-26320",
    saga: "Legacy",
    recommendedOrder: 1,
    posterSrc: p("blade-1998"),

    synopsis: "In a world where vampires secretly rule the night, one man stands between humanity and eternal darkness. Half-human, half-vampire, Blade possesses all their strengths and none of their weaknesses—except the thirst. Armed with silver weapons, martial skill, and an unrelenting drive, he hunts the creatures of the underworld while battling the curse within himself. When a powerful vampire named Deacon Frost threatens to awaken an ancient blood god, Blade must face his greatest challenge yet.",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/36647?server=zxcstream"},
    ],
    trailerUrl:"https://youtu.be/kaU2A7KyOu4?si=y_aNShv1R0jWjuHA",
  },
  {
    id: "blade-ii-2002",
    name: "Blade II",
    type: "film",
    universe: "Earth-26320",
    saga: "Legacy",
    recommendedOrder: 2,
    posterSrc: p("blade-ii-2002"),

    synopsis: "The hunt continues. When a new breed of vampires—faster, deadlier, and immune to Blade’s usual weapons—emerges, the Daywalker must forge an uneasy alliance with the very creatures he despises. Teaming up with a vampire strike force known as the Bloodpack, Blade faces a relentless enemy called the Reapers, whose hunger threatens both humans and vampires alike. In this brutal war for survival, Blade discovers that trust is as dangerous as the monsters he hunts.",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/36586?server=zxcstream"},
    ],
    trailerUrl:"https://youtu.be/vAUB7dcUn8o?si=DH57vdXvpkPni1SD",
  },
  {
    id: "blade-trinity-2004",
    name: "Blade: Trinity",
    type: "film",
    universe: "Earth-26320",
    saga: "Legacy",
    recommendedOrder: 3,
    posterSrc: p("blade-trinity-2004"),
    synopsis: "The war against vampires reaches its most dangerous chapter. Framed by his enemies and hunted by the FBI, Blade finds himself forced to join forces with a new team of human vampire hunters known as the Nightstalkers. Together, they face the ultimate threat: Dracula himself, resurrected by the vampire nation to ensure their dominance. As Blade confronts the original vampire, he must battle not only overwhelming odds but also his own inner darkness in a fight that will decide the fate of humanity",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/36648?server=zxcstream"},
    ],
    trailerUrl:"https://youtu.be/fPcNbsW69Eg?si=_-XNcOrBdkct7Vwj",
  },
  // -----------------------
  // X-Men: Part 1 (Earth-10005)
  // -----------------------
  {
    id: "x-men-2000",
    name: "X-Men",
    type: "film",
    universe: "Earth-10005",
    saga: "Legacy",
    recommendedOrder: 4,
    posterSrc: p("x-men-2000"),

    synopsis:"In a world divided by fear and prejudice, mutants—humans born with extraordinary powers—struggle for acceptance. Led by Professor Charles Xavier, the X-Men fight to protect both humanity and their own kind from those who would exploit or destroy them. But when Magneto, a powerful mutant with a dark vision of the future, sets a plan in motion that could change the fate of mankind, the X-Men must rise to stop him before war erupts between humans and mutants.",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/36657?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/VNxwlx6etXI?si=I_wmRPK1sRLuSDsu",
  },
  {
    id: "x2-2003",
    name: "X2",
    type: "film",
    universe: "Earth-10005",
    saga: "Legacy",
    recommendedOrder: 5,
    posterSrc: p("x2-2003"),

    synopsis:"Mutants face their greatest threat yet—not from Magneto, but from humanity itself. When a deadly attack on the President sparks fear and suspicion, the government authorizes a ruthless military strike against Xavier’s school. As Professor X and his students fight for survival, they are forced into an uneasy alliance with Magneto to stop William Stryker, a man whose twisted plan could wipe out every mutant on Earth. With loyalties tested and enemies united, the X-Men must risk everything to protect both their kind and the future of humanity.",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/36648?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/KNIdceH7XOw?si=E6YD1mSzJyHli-aB",
  },
  {
    id: "x-men-the-last-stand-2006",
    name: "X-Men: The Last Stand",
    type: "film",
    universe: "Earth-10005",
    saga: "Legacy",
    recommendedOrder: 6,
    posterSrc: p("x-men-the-last-stand-2006"),
    synopsis:"The battle for mutant survival reaches its breaking point. When a “cure” for mutation is discovered, the world is torn between hope and fear. As humans debate eradicating mutant powers, Magneto rallies his Brotherhood to wage war against humanity, while the X-Men struggle to protect both sides from destruction. At the same time, Jean Grey returns, consumed by the overwhelming force of the Phoenix, threatening to annihilate everything in her path. With loyalties fractured and the future of mutants hanging in the balance, the X-Men must make their final stand" ,
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/36668?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/ZQ0v5dXbw7M?si=wfnSWtsNnIB2x6mA",
  },
  {
    id: "spider-man-2002",
    name: "Spider-Man",
    type: "film",
    universe: "Earth-96283",
    saga: "Legacy",
    recommendedOrder: 7,
    posterSrc: p("spider-man-2002"),

    synopsis:"With great power comes great responsibility. After being bitten by a genetically altered spider, shy teenager Peter Parker discovers he has incredible abilities—superhuman strength, agility, and the ability to cling to walls. As he embraces his new identity as Spider-Man, Peter must balance the challenges of everyday life with the duty of protecting New York City. But when the ruthless Green Goblin emerges, threatening everything Peter holds dear, the young hero faces his ultimate test: to rise above fear and sacrifice for the greater good",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/557?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/t06RUxPbp_c?si=RtwHsKpNUdBC8NkI",
  },
  {
    id: "spider-man-2-2004",
    name: "Spider-Man 2",
    type: "film",
    universe: "Earth-96283",
    saga: "Legacy",
    recommendedOrder: 8,
    posterSrc: p("spider-man-2-2004"),

    synopsis:"The hero’s greatest battle is within. Two years after becoming Spider-Man, Peter Parker struggles to balance his double life—torn between his duty to protect New York and his desire for a normal existence with Mary Jane. Just as he considers leaving his mask behind, a brilliant scientist’s experiment goes horribly wrong, transforming Dr. Otto Octavius into the deadly Doctor Octopus. With mechanical arms and a thirst for vengeance, Doc Ock threatens everything Peter holds dear. To save the city and those he loves, Peter must rediscover the true meaning of sacrifice and embrace his destiny as Spider-Man.",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/558?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/1s9Yln0YwCw?si=T6PbtHmAD99AtWuo",
  },
  {
    id: "spider-man-3-2007",
    name: "Spider-Man 3",
    type: "film",
    universe: "Earth-96283",
    saga: "Legacy",
    recommendedOrder: 9,
    posterSrc: p("spider-man-3-2007"),
    synopsis:"Peter Parker finally feels like life is falling into place—his relationship with Mary Jane is strong, and the city embraces Spider-Man as its hero. But when a strange black symbiote bonds with him, Peter’s powers grow while his darker impulses begin to take control. As he battles his own inner demons, new enemies rise: Flint Marko, the Sandman, whose tragic past ties to Peter’s own, and Eddie Brock, who transforms into the vengeful Venom. With friendships tested and his soul at stake, Spider-Man must confront the darkness within to save the people he loves and the hero he’s meant to be.",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/559?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/e5wUilOeOmg?si=0Rwoi1n5Qjv-6ljY",
  },

  // -----------------------
  // Daredevil (Earth-701306)
  // -----------------------
  {
    id: "daredevil-2003",
    name: "Daredevil",
    type: "film",
    universe: "Earth-701306",
    saga: "Legacy",
    recommendedOrder: 10,
    posterSrc: p("daredevil-2003"),

    synopsis:"Justice is blind. Blinded as a child in a freak accident, Matt Murdock gains extraordinary senses that allow him to perceive the world in ways no one else can. By day, he is a lawyer fighting for justice in the courtroom. By night, he becomes Daredevil, a masked vigilante protecting Hell’s Kitchen from corruption and crime. When the ruthless Kingpin rises to power and unleashes the deadly assassin Bullseye, Daredevil must confront his greatest fears, risking everything to protect the city and the woman he loves.",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/9480?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/muPX9Oi7-EE?si=8PUTy0lnqo7tCaxa",
  },
  {
    id: "elektra-2005",
    name: "Elektra",
    type: "film",
    universe: "Earth-701306",
    saga: "Legacy",
    recommendedOrder: 11,
    posterSrc: p("elektra-2005"),
    synopsis:"Trained as a deadly assassin, Elektra Natchios walks the fine line between redemption and darkness. Haunted by her past and resurrected from death, she lives in isolation until fate draws her into protecting a father and daughter targeted by a mysterious order known as The Hand. As Elektra confronts her own inner demons, she must decide whether her skills will serve vengeance or salvation in a battle that could cost her everything.",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/9947?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/5U2k0lR65rA?si=1XinfsMlKsixtICq",
  },

  // -----------------------
  // Fantastic Four (Earth-121698)
  // -----------------------
  {
    id: "fantastic-four-2005",
    name: "Fantastic Four",
    type: "film",
    universe: "Earth-121698",
    saga: "Legacy",
    recommendedOrder: 12,
    posterSrc: p("fantastic-four-2005"),
    synopsis:"Four ordinary people are transformed into extraordinary heroes after a cosmic storm alters their DNA. Scientist Reed Richards gains the ability to stretch his body, Sue Storm becomes invisible and can generate force fields, Johnny Storm ignites into flame, and Ben Grimm is turned into the super-strong Thing. Together, they must learn to harness their powers and work as a team to stop Victor Von Doom, whose lust for power threatens the world. United by fate, they become the Fantastic Four—the world’s first family of superheroes.",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/9738?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/YP-UetX2qX0?si=d4jMxM-Pn0Ec4ArJ",
  },
  {
    id: "fantastic-four-rise-of-the-silver-surfer-2007",
    name: "Fantastic Four: Rise of the Silver Surfer",
    type: "film",
    universe: "Earth-121698",
    saga: "Legacy",
    recommendedOrder: 13,
    posterSrc: p("fantastic-four-rise-of-the-silver-surfer-2007"),
    synopsis:"The world’s first family of superheroes faces a cosmic threat unlike any they’ve ever known. As Reed Richards and Sue Storm prepare for their wedding, mysterious global disturbances signal the arrival of the Silver Surfer, a powerful being who heralds the destruction of worlds. With Earth’s fate hanging in the balance, the Fantastic Four must uncover the truth behind the Surfer’s mission and confront the ultimate danger—Galactus, the devourer of planets. United by courage and family bonds, they stand against forces that could end humanity itself.",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/1979?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/Wiu5eZ_7vSY?si=oGMrU5kx2y14MWsQ",
  },

  // =======================
  // The Infinity Saga
  // =======================

  // -----------------------
  // MCU Phase 1 (Earth-616)
  // -----------------------
  {
    id: "iron-man-2008",
    name: "Iron Man",
    type: "film",
    universe: "Earth-616",
    saga: "Infinity",
    phase: 1,
    recommendedOrder: 14,
    posterSrc: p("iron-man-2008"),
    synopsis:"Billionaire industrialist Tony Stark lives a life of luxury until a near-death experience changes everything. Captured by terrorists and forced to build weapons, Stark instead creates a powerful suit of armor to escape. Returning home, he refines the technology, transforming himself into Iron Man—a hero armed with genius, cutting-edge tech, and an unbreakable will. But when his own company’s weapons fall into the wrong hands, Stark must face a deadly enemy born of betrayal, proving that the man inside the suit is what truly makes the hero.",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/1726?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/8ugaeA-nMTc?si=VUbH2GUU5bjh4e2u",
  },
  {
    id: "the-incredible-hulk-2008",
    name: "The Incredible Hulk",
    type: "film",
    universe: "Earth-616",
    saga: "Infinity",
    phase: 1,
    recommendedOrder: 15,
    posterSrc: p("the-incredible-hulk-2008"),
    synopsis:"Haunted by the monster within, scientist Bruce Banner lives in exile, desperately searching for a cure to the gamma radiation that transformed him into the Hulk. But when the military closes in, determined to weaponize his power, Banner is forced out of hiding. As he struggles to control his rage, a new threat emerges—the Abomination, a creature even more powerful and destructive than the Hulk himself. To save the world and protect the woman he loves, Banner must embrace his identity and unleash the hero inside the beast.",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/1724?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/xbqNb2PFKKA?si=qUKly0Sn2saftvCy",
  },
  {
    id: "the-consultant",
    name: "The Consultant",
    type: "oneShot",
    universe: "Earth-616",
    saga: "Infinity",
    phase: 1,
    recommendedOrder: 16,
    posterSrc: p("the-consultant"),

    synopsis:"In the shadows of S.H.I.E.L.D., not every mission is about saving the world—some are about keeping it from falling apart. When the World Security Council insists on recruiting the Abomination into the Avengers Initiative, Agent Phil Coulson is dispatched to ensure that doesn’t happen. Using subtle manipulation and a bit of mischief, Coulson orchestrates events so that Tony Stark becomes “the consultant,” steering the Council’s decision away from disaster. Short, sharp, and sly, this Marvel One-Shot reveals the unseen moves that keep the Avengers’ future intact.",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/76122?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/TBJMq-isHU4?si=kptjckzJcW-C8bwZ",
  },
  {
    id: "iron-man-2-2010",
    name: "Iron Man 2",
    type: "film",
    universe: "Earth-616",
    saga: "Infinity",
    phase: 1,
    recommendedOrder: 17,
    posterSrc: p("iron-man-2-2010"),

    synopsis:"The world now knows Tony Stark is Iron Man. As he basks in fame and struggles with the responsibility of being both a billionaire and a hero, new dangers emerge. The U.S. government demands control of his technology, rivals seek to replicate his armor, and a mysterious enemy named Ivan Vanko—armed with electrified whips and a vendetta—threatens to destroy everything Stark has built. With his health deteriorating and his empire under siege, Tony must rely on allies old and new, including Pepper Potts, James Rhodes, and Natasha Romanoff, to prove that Iron Man is more than just the suit",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/10138?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/BoohRoVA9WQ?si=6Y8Lwp8f_8OsDJRY",
  },
  {
    id: "a-funny-thing-thor-hammer",
    name: "A Funny Thing That Happened on the Way to Thor's Hammer",
    type: "oneShot",
    universe: "Earth-616",
    saga: "Infinity",
    phase: 1,
    recommendedOrder: 18,
    posterSrc: p("a-funny-thing-thor-hammer"),
    synopsis:"On his way to investigate the mysterious hammer that has fallen to Earth, Agent Phil Coulson makes a quick stop at a gas station. What should have been a routine errand turns into a hilarious showcase of Coulson’s calm confidence and unexpected combat skills when a pair of robbers attempt a holdup. With dry wit and effortless precision, Coulson proves that even without superheroes around, S.H.I.E.L.D. agents can handle themselves—and sometimes save the day in the most unexpected places.",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/76535?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/AqcnUD468no?si=573IgsGNMiu3WaVa",
  },
  {
    id: "thor-2011",
    name: "Thor",
    type: "film",
    universe: "Earth-616",
    saga: "Infinity",
    phase: 1,
    recommendedOrder: 19,
    posterSrc: p("thor-2011"),
    synopsis:"From the shining realm of Asgard comes a warrior destined to learn humility. Thor, the mighty God of Thunder, is cast down to Earth after his reckless arrogance threatens the peace of the Nine Realms. Stripped of his powers and his hammer Mjolnir, he must discover what it truly means to be a hero. As dark forces rise and Asgard faces destruction, Thor must reclaim his strength, protect humanity, and prove himself worthy of the power he once took for granted.",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/10195?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/JOddp-nlNvQ?si=8r9XIdnOEhNFr-d7",
  },
  {
    id: "captain-america-the-first-avenger-2011",
    name: "Captain America: The First Avenger",
    type: "film",
    universe: "Earth-616",
    saga: "Infinity",
    phase: 1,
    recommendedOrder: 20,
    posterSrc: p("captain-america-the-first-avenger-2011"),
    synopsis:"In the darkest days of World War II, one man dares to dream of becoming a soldier. Frail but determined, Steve Rogers volunteers for a secret experiment that transforms him into the world’s first super-soldier: Captain America. Armed with courage, a shield, and an unbreakable spirit, he leads the fight against Hydra, a ruthless organization led by the sinister Red Skull. As the war rages and sacrifices mount, Rogers must prove that true strength lies not in muscle, but in heart—and that heroes are forged in the fire of selflessness",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/1771?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/W4DlMggBPvc?si=UtUdwFVG3xeR_zCE",
  },
  {
    id: "agent-carter-one-shot",
    name: "Agent Carter",
    type: "oneShot",
    universe: "Earth-616",
    saga: "Infinity",
    phase: 1,
    recommendedOrder: 21,
    posterSrc: p("agent-carter-one-shot"),
    synopsis:"A year after Captain America’s disappearance, Peggy Carter finds herself sidelined at the Strategic Scientific Reserve, dismissed by her male colleagues despite her wartime heroics. When a dangerous mission arises, Carter seizes the opportunity to prove her worth, defying orders and taking matters into her own hands. With sharp intelligence, fearless resolve, and unmatched combat skills, she uncovers a deadly conspiracy and secures her place as more than just “Captain America’s girl.” This Marvel One-Shot showcases Peggy’s rise as a founding force of S.H.I.E.L.D., reminding the world that true heroes don’t wait for permission.",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/211387?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/V13W9gQ_1GA?si=X2Of6C1ZH8aRSp1U",
  },
  {
    id: "the-avengers-2012",
    name: "The Avengers",
    type: "film",
    universe: "Earth-616",
    saga: "Infinity",
    phase: 1,
    recommendedOrder: 22,
    posterSrc: p("the-avengers-2012"),
    synopsis:"When Earth faces a threat too great for any single hero, the world’s mightiest must unite. Loki, armed with the Tesseract and a thirst for domination, unleashes chaos that could bring humanity to its knees. To stop him, Nick Fury assembles an unprecedented team: Iron Man, Captain America, Thor, Hulk, Black Widow, and Hawkeye. But before they can save the world, they must learn to trust one another—and themselves. In the ultimate battle for Earth’s survival, the Avengers rise, proving that together they are stronger than they could ever be apart.",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/24428?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/eOrNdBpGMv8?si=ohinNWdYJaSBR3jp",
  },
  {
    id: "item-47",
    name: "Item 47",
    type: "oneShot",
    universe: "Earth-616",
    saga: "Infinity",
    phase: 1,
    recommendedOrder: 23,
    posterSrc: p("item-47"),
    synopsis:"In the aftermath of the Battle of New York, not all of the alien Chitauri weapons were destroyed. When a down-on-their-luck couple discovers one of these powerful artifacts—known as Item 47—they decide to use it for a spree of high-tech bank robberies. But their actions draw the attention of S.H.I.E.L.D., who dispatches agents Sitwell and Blake to recover the weapon and deal with the thieves. What begins as reckless ambition turns into a dangerous game of cat and mouse, showing that even the smallest piece of alien tech can change lives forever.",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/119569?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/Gog0_GKYpIg?si=jHTZ57sRx1QhFZOG",
  },

  // -----------------------
  // MCU Phase 2 (Earth-616)
  // -----------------------
  {
    id: "iron-man-3-2013",
    name: "Iron Man 3",
    type: "film",
    universe: "Earth-616",
    saga: "Infinity",
    phase: 2,
    recommendedOrder: 24,
    posterSrc: p("iron-man-3-2013"),
    synopsis:"After the Battle of New York, Tony Stark is haunted by anxiety and doubt, questioning whether the man makes the suit or the suit makes the man. When a mysterious terrorist known as the Mandarin launches a wave of devastating attacks, Stark’s world is shattered, leaving him stripped of his armor and resources. Forced to rely on his ingenuity and courage, he embarks on a dangerous journey to uncover the truth behind the enemy’s power. As old enemies resurface and new threats emerge, Stark must confront his greatest fear—that without Iron Man, he is nothing—and prove once again that his true strength lies within.",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/68721?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/f_h95mEd4TI?si=NElCp1RRIp8n448P",
  },
  {
    id: "all-hail-the-king",
    name: "All Hail the King",
    type: "oneShot",
    universe: "Earth-616",
    saga: "Infinity",
    phase: 2,
    recommendedOrder: 25,
    posterSrc: p("all-hail-the-king"),
    synopsis:"",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/253980?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/4Udp8NtQKxU?si=gx-0YmR-_Y7IBQzF",
  },
  {
    id: "thor-the-dark-world-2013",
    name: "Thor: The Dark World",
    type: "film",
    universe: "Earth-616",
    saga: "Infinity",
    phase: 2,
    recommendedOrder: 26,
    posterSrc: p("thor-the-dark-world-2013"),
    synopsis:"Locked away in prison after the events of Iron Man 3, Trevor Slattery—the flamboyant actor who once posed as the Mandarin—has become an unlikely celebrity among inmates. While basking in his newfound fame, Trevor agrees to a documentary interview that quickly takes a darker turn. What begins as a humorous look at his eccentric persona soon reveals a deeper truth: the real Ten Rings organization is watching, and Trevor’s past deception may have deadly consequences. Equal parts comedy and intrigue, this Marvel One-Shot uncovers hidden layers of the Marvel universe, proving that even jokes can have serious repercussions.",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/76338?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/npvJ9FTgZbM?si=Gd7oDMdMdTOI9roY",
  },
  {
    id: "captain-america-the-winter-soldier-2014",
    name: "Captain America: The Winter Soldier",
    type: "film",
    universe: "Earth-616",
    saga: "Infinity",
    phase: 2,
    recommendedOrder: 27,
    posterSrc: p("captain-america-the-winter-soldier-2014"),
    synopsis:"Living in a modern world he barely understands, Steve Rogers struggles to find his place after the Battle of New York. But when S.H.I.E.L.D. itself comes under attack, Captain America uncovers a conspiracy that reaches the highest levels of power. With Black Widow at his side and a new ally, Falcon, by his wing, Rogers must confront a deadly assassin known only as the Winter Soldier—whose shocking identity forces him to face his past. In a fight for freedom and trust, Captain America learns that sometimes the greatest enemy comes from within.",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/100402?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/tbayiPxkUMM?si=8attAEA5i4X8S_SN",
  },
  {
    id: "guardians-of-the-galaxy-2014",
    name: "Guardians of the Galaxy",
    type: "film",
    universe: "Earth-616",
    saga: "Infinity",
    phase: 2,
    recommendedOrder: 28,
    posterSrc: p("guardians-of-the-galaxy-2014"),
    synopsis:"Across the far reaches of space, a ragtag band of misfits is thrown together by fate. Peter Quill, a daring outlaw with a love for old-school music, finds himself hunted after stealing a mysterious orb of immense power. To survive, he joins forces with the deadly assassin Gamora, the vengeful warrior Drax, and the unlikely duo of Rocket—a wisecracking raccoon—and Groot, a gentle giant with a single phrase. As they clash with ruthless enemies and cosmic forces, these unlikely allies discover that sometimes family is found in the most unexpected places. Together, they become the Guardians of the Galaxy.",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/118340?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/d96cjJhvlMA?si=Syto3S4jRA3f3Ug9",
  },
  {
    id: "daredevil-s1",
    name: "Daredevil: Season 1",
    type: "tv",
    universe: "Earth-616",
    saga: "Infinity",
    phase: 2,
    recommendedOrder: 29,
    posterSrc: p("daredevil-s1"),
    synopsis:"Blinded as a child but gifted with extraordinary senses, Matt Murdock grows up to fight for justice in two worlds. By day, he is a lawyer defending the innocent in Hell’s Kitchen. By night, he becomes Daredevil, a masked vigilante striking fear into criminals who prey on the weak. As he battles corruption and crime, Murdock faces his greatest challenge yet: Wilson Fisk, a ruthless kingpin whose vision for the city threatens everything Matt stands for. In a war for the soul of Hell’s Kitchen, Daredevil must decide how far he’s willing to go—and what kind of hero he truly is.",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/tv/61889?s=1&e=1&server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/jAy6NJ_D5vU?si=XlstFhA-uB2iGBGo",
  },
  {
    id: "avengers-age-of-ultron-2015",
    name: "Avengers: Age of Ultron",
    type: "film",
    universe: "Earth-616",
    saga: "Infinity",
    phase: 2,
    recommendedOrder: 30,
    posterSrc: p("avengers-age-of-ultron-2015"),
    synopsis:"When Tony Stark and Bruce Banner attempt to create a peacekeeping artificial intelligence, their plan backfires, giving birth to Ultron—a ruthless machine determined to eradicate humanity. As Ultron builds an army and threatens global annihilation, the Avengers must reunite to face their most dangerous foe yet. Along the way, they encounter powerful new allies and adversaries, including the twins Wanda and Pietro Maximoff, whose abilities challenge the team in unexpected ways. In a battle that spans the globe, the Avengers must confront their own fears, test their unity, and prove that even heroes are not invincible.",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/99861?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/tmeOjFno6Do?si=Qq2tGuUcj5dtBcAn",
  },
  {
    id: "ant-man-2015",
    name: "Ant-Man",
    type: "film",
    universe: "Earth-616",
    saga: "Infinity",
    phase: 2,
    recommendedOrder: 31,
    posterSrc: p("ant-man-2015"),
    synopsis:"Ex-con Scott Lang wants nothing more than to redeem himself and reconnect with his daughter. But when he’s recruited by scientist Hank Pym, he discovers a suit that can shrink him to the size of an ant while giving him incredible strength. As Lang trains to master his new abilities, he must embrace the unlikely role of hero to stop Darren Cross, whose twisted ambitions threaten to unleash chaos with his own shrinking technology. From high-stakes heists to microscopic battles, Ant-Man proves that even the smallest hero can make the biggest difference",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/102899?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/pWdKf3MneyI?si=XNqe6a0OvuqotzJ4",
  },
  {
    id: "jessica-jones-s1",
    name: "Jessica Jones: Season 1",
    type: "tv",
    universe: "Earth-616",
    saga: "Infinity",
    phase: 2,
    recommendedOrder: 32,
    posterSrc: p("jessica-jones-s1"),

    synopsis:"Haunted by a past she can’t escape, Jessica Jones tries to rebuild her life as a private investigator in New York City. Gifted with superhuman strength but burdened by trauma, she takes on cases that expose the city’s darkest secrets. When a sinister figure from her past—Kilgrave, a man with terrifying mind-control powers—resurfaces, Jessica is forced to confront the scars he left behind. As the battle becomes personal, she must face her demons, protect those she cares about, and prove that true heroism isn’t about saving the world—it’s about surviving it.",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/tv/38472?s=1&e=1&server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/nWHUjuJ8zxE?si=wO8FqvV9odJfyns0",
  },

  // -----------------------
  // MCU Phase 3 (Earth-616)
  // -----------------------
  {
    id: "daredevil-s2",
    name: "Daredevil: Season 2",
    type: "tv",
    universe: "Earth-616",
    saga: "Infinity",
    phase: 3,
    recommendedOrder: 33,
    posterSrc: p("daredevil-s2"),
    synopsis:"Hell’s Kitchen is never quiet, and Matt Murdock’s war on crime grows more complicated than ever. As Daredevil, he faces a brutal new vigilante—the Punisher—whose lethal methods force Matt to question the limits of justice. At the same time, old wounds resurface when Elektra Natchios, a dangerous figure from his past, returns to pull him into a shadow war against the mysterious ninja clan known as the Hand. Torn between his duty as a lawyer, his role as a protector, and the people he loves, Murdock must confront the fine line between hero and executioner, and decide what kind of man he truly wants to be.",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/tv/61889?s=1&e=1&server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/IMC7H23-sMs?si=mSHAEyxfljvVuDoi",
  },
  {
    id: "captain-america-civil-war-2016",
    name: "Captain America: Civil War",
    type: "film",
    universe: "Earth-616",
    saga: "Infinity",
    phase: 3,
    recommendedOrder: 34,
    posterSrc: p("captain-america-civil-war-2016"),
    synopsis:"After another mission ends in collateral damage, the world demands accountability from Earth’s mightiest heroes. The Sokovia Accords divide the Avengers, forcing them to choose between government oversight or personal freedom. At the heart of the conflict stand Captain America and Iron Man—once allies, now bitterly opposed. As friendships fracture and loyalties are tested, a shadowy figure manipulates events from behind the scenes, unleashing the deadly Winter Soldier and pushing the team toward all-out war. In a battle where heroes fight heroes, the greatest threat may not be the enemy outside, but the divisions within.",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/271110?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/dKrVegVI0Us?si=w1nyxYUMVpnwmN7X",
  },
  {
    id: "luke-cage-s1",
    name: "Luke Cage: Season 1",
    type: "tv",
    universe: "Earth-616",
    saga: "Infinity",
    phase: 3,
    recommendedOrder: 35,
    posterSrc: p("luke-cage-s1"),
    synopsis:"In the heart of Harlem, a man tries to live quietly, hiding from a past that gave him unbreakable skin and superhuman strength. But when crime and corruption threaten the community he loves, Luke Cage is forced to step out of the shadows. Facing ruthless enemies like Cottonmouth and Mariah Dillard, Cage becomes both a symbol of hope and a target for destruction. As bullets bounce off him and secrets rise to the surface, Luke must decide whether to embrace his destiny as Harlem’s protector—or risk losing everything he stands for.",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/tv/62126?s=1&e=1&server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/ORa4hPhGrpo?si=TfOO6Okyinv084oJ",
  },
  {
    id: "doctor-strange-2016",
    name: "Doctor Strange",
    type: "film",
    universe: "Earth-616",
    saga: "Infinity",
    phase: 3,
    recommendedOrder: 36,
    posterSrc: p("doctor-strange-2016"),
    synopsis:"Dr. Stephen Strange, a brilliant but arrogant neurosurgeon, sees his world shattered after a tragic accident destroys his hands. Desperate to heal, he journeys across the globe and discovers the hidden realm of the mystic arts. Under the guidance of the Ancient One, Strange learns to harness magic, bending reality, time, and space itself. But when a rogue sorcerer threatens to unleash dark forces upon the world, Strange must put aside his ego and embrace his destiny as Earth’s Sorcerer Supreme. In a battle where science meets sorcery, he learns that sometimes the greatest power is letting go.",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/tv/62127?s=1&e=1&server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/h7gvFravm4A?si=rIiTuGm1rykt30S6",
  },
  {
    id: "iron-fist-s1",
    name: "Iron Fist: Season 1",
    type: "tv",
    universe: "Earth-616",
    saga: "Infinity",
    phase: 3,
    recommendedOrder: 37,
    posterSrc: p("iron-fist-s1"),
    synopsis:"After disappearing for fifteen years, Danny Rand returns to New York City, presumed dead but very much alive. Trained in the mystical city of K’un-Lun, he has mastered martial arts and harnessed the power of the Iron Fist—a force that channels energy into his fists with devastating impact. But reclaiming his family’s company is only the beginning. As he battles corruption, criminal empires, and the shadowy Hand, Danny must prove himself worthy of his destiny. Torn between the modern world and his mystical training, he struggles to balance responsibility, identity, and the true meaning of power.",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/36648?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/f9OKL5no-S0?si=govWgoLL0MYWz9hn",
  },
  {
    id: "guardians-of-the-galaxy-vol-2-2017",
    name: "Guardians of the Galaxy Vol. 2",
    type: "film",
    universe: "Earth-616",
    saga: "Infinity",
    phase: 3,
    recommendedOrder: 38,
    posterSrc: p("guardians-of-the-galaxy-vol-2-2017"),
    synopsis:"The galaxy’s most unlikely heroes are back—and this time, family is at the heart of the fight. As Peter Quill, Gamora, Drax, Rocket, and Baby Groot continue their adventures, they encounter new allies and dangerous foes across the stars. When Quill finally meets his long-lost father, Ego, the reunion sparks questions of destiny, loyalty, and trust. But as secrets unravel and cosmic threats loom, the Guardians must rely on each other more than ever. With humor, heart, and high-octane action, they prove that saving the universe isn’t just about power—it’s about belonging.",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/283995?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/wUn05hdkhjM?si=eaHZTBMk0z5yuOrL",
  },
  {
    id: "spider-man-homecoming-2017",
    name: "Spider-Man: Homecoming",
    type: "film",
    universe: "Earth-616",
    saga: "Infinity",
    phase: 3,
    recommendedOrder: 39,
    posterSrc: p("spider-man-homecoming-2017"),
    synopsis:"Thrilled by his role in the Avengers’ battle, young Peter Parker returns to Queens eager to prove himself as more than just the “friendly neighborhood Spider-Man.” Under the watchful eye of Tony Stark, Peter struggles to balance high school life with his secret identity. But when a dangerous new villain, the Vulture, emerges with stolen alien technology, Peter must rise above his inexperience and reckless ambition. With his friends, his courage, and his heart on the line, Spider-Man learns that being a hero isn’t about fame—it’s about responsibility.",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/315635?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/rk-dF1lIbIg?si=o5VGav6jbUE_D7Wk",
  },
  {
    id: "the-defenders",
    name: "The Defenders",
    type: "tv",
    universe: "Earth-616",
    saga: "Infinity",
    phase: 3,
    recommendedOrder: 40,
    posterSrc: p("the-defenders"),
    synopsis:"Four heroes, four paths, one city in peril. Daredevil, Jessica Jones, Luke Cage, and Iron Fist each fight their own battles across New York, but when a shadowy organization known as the Hand threatens to consume the city, destiny brings them together. Reluctant allies at first, their differences in methods and personalities spark tension—but their shared mission for justice forces them to unite. As secrets unravel and the stakes rise, these street-level heroes must learn to trust one another, proving that sometimes the strongest defense is forged in unlikely alliances.",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/tv/62285?s=1&e=1&server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/jYvHxEEgrPA?si=jJeECWAJjoB3QiZt",
  },
  {
    id: "thor-ragnarok-2017",
    name: "Thor: Ragnarok",
    type: "film",
    universe: "Earth-616",
    saga: "Infinity",
    phase: 3,
    recommendedOrder: 41,
    posterSrc: p("thor-ragnarok-2017"),
    synopsis:"Imprisoned on the distant world of Sakaar, Thor finds himself stripped of his hammer and forced into gladiatorial combat against none other than the Hulk. Meanwhile, Asgard faces its greatest threat yet: Hela, the goddess of death, who seeks to bring about Ragnarok—the destruction of Thor’s home and the end of its people. To save Asgard, Thor must forge unlikely alliances, rediscover his true power, and embrace the hero he was always meant to be. With humor, heart, and cosmic spectacle, Ragnarok redefines the God of Thunder’s destiny in the Marvel universe.",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/284053?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/ue80QwXMRHg?si=OgOweQQxFyn7suxZ",
  },
  {
    id: "the-punisher-s1",
    name: "The Punisher: Season 1",
    type: "tv",
    universe: "Earth-616",
    saga: "Infinity",
    phase: 3,
    recommendedOrder: 42,
    posterSrc: p("the-punisher-s1"),
    synopsis:"After avenging the murder of his family, former Marine Frank Castle disappears into the shadows, presumed dead. But when a conspiracy tied to his past resurfaces, Castle is drawn back into the fight. Armed with relentless determination and an arsenal of weapons, he wages a one-man war against corruption and crime, earning the name that strikes fear into the underworld: The Punisher. As allies and enemies blur, Frank must confront the cost of his vengeance and decide whether justice and retribution can ever truly be the same.",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/tv/67178?s=1&e=1&server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/s4QV6OZdmWY?si=MER9DguONCTNdKd6",
  },
  {
    id: "black-panther-2018",
    name: "Black Panther",
    type: "film",
    universe: "Earth-616",
    saga: "Infinity",
    phase: 3,
    recommendedOrder: 43,
    posterSrc: p("black-panther-2018"),
    synopsis:"After the death of his father, T’Challa returns to Wakanda to claim his rightful place as king. But with the throne comes the mantle of the Black Panther, protector of a nation hidden from the world yet rich in power and tradition. As enemies rise from within and beyond Wakanda’s borders—most notably the vengeful Erik Killmonger—T’Challa must confront questions of legacy, justice, and responsibility. In a struggle that will determine the fate of his people and the world, the Black Panther learns that true strength lies not only in vibranium, but in the heart of a leader.",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/284054?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/xjDjIWPwcPU?si=oaCKcL7kaL2PMfAn",
  },
  {
    id: "jessica-jones-s2",
    name: "Jessica Jones: Season 2",
    type: "tv",
    universe: "Earth-616",
    saga: "Infinity",
    phase: 3,
    recommendedOrder: 44,
    posterSrc: p("jessica-jones-s2"),
    synopsis:"Still reeling from her battle with Kilgrave, Jessica Jones struggles to rebuild her life and reputation as a private investigator. But when a new case forces her to confront the mystery of her own past, she uncovers shocking truths about the experiments that gave her powers. As secrets unravel, Jessica faces dangerous adversaries, moral dilemmas, and the haunting question of identity. With allies like Trish Walker by her side—and enemies lurking in the shadows—Jessica must decide whether she’s defined by her trauma or by the strength she finds in overcoming it",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/tv/38472?s=1&e=1&server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/-u2AV8z_CX0?si=RrEofFy30fS5gt8G",
  },
  {
    id: "avengers-infinity-war-2018",
    name: "Avengers: Infinity War",
    type: "film",
    universe: "Earth-616",
    saga: "Infinity",
    phase: 3,
    recommendedOrder: 45,
    posterSrc: p("avengers-infinity-war-2018"),
    synopsis:"The Avengers, Guardians of the Galaxy, and Earth’s mightiest heroes face their greatest challenge yet: Thanos, the Mad Titan, who seeks to collect all six Infinity Stones and reshape the universe with a single snap. As battles rage across Earth and the cosmos, alliances are tested, sacrifices are made, and the line between victory and survival grows thin. With the fate of half of all life hanging in the balance, the heroes must unite like never before—yet even together, they may not be enough to stop destiny itself.",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/299536?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/6ZfuNTqbHE8?si=qhSkKaAsQEca0IX2",
  },
  {
    id: "luke-cage-s2",
    name: "Luke Cage: Season 2",
    type: "tv",
    universe: "Earth-616",
    saga: "Infinity",
    phase: 3,
    recommendedOrder: 46,
    posterSrc: p("luke-cage-s2"),
    synopsis:"After defeating Cottonmouth and Diamondback, Luke Cage has become a symbol of hope in Harlem. But fame brings new challenges, as the bulletproof hero struggles with the weight of being a public figure and protector. When John “Bushmaster” McIver arrives, wielding powers that rival Luke’s own, Harlem becomes the battleground for control, pride, and survival. As alliances shift and enemies grow stronger, Luke must confront not only external threats but also the personal cost of being invincible. In a season where power and responsibility collide, Harlem’s hero learns that even the unbreakable can be tested.",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/tv/62126?s=1&e=1&server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/5ogmCV2N9DA?si=s0AC9tZ9FHnopjRk",
  },
  {
    id: "ant-man-and-the-wasp-2018",
    name: "Ant-Man and the Wasp",
    type: "film",
    universe: "Earth-616",
    saga: "Infinity",
    phase: 3,
    recommendedOrder: 47,
    posterSrc: p("ant-man-and-the-wasp-2018"),
    synopsis:"After the events of Civil War, Scott Lang struggles to balance his responsibilities as a father with his duties as Ant-Man. But when Dr. Hank Pym and Hope van Dyne enlist his help, he’s drawn into a new mission that uncovers secrets from their past. As Hope steps into her own heroic role as the Wasp, the duo must learn to fight side by side against a mysterious new adversary, Ghost, whose powers threaten the fabric of reality itself. With the quantum realm offering both danger and discovery, Ant-Man and the Wasp prove that sometimes the smallest heroes face the biggest challenges.",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/363088?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/UUkn-enk2RU?si=Ryt_H2atT29tcPJr",
  },
  {
    id: "iron-fist-s2",
    name: "Iron Fist: Season 2",
    type: "tv",
    universe: "Earth-616",
    saga: "Infinity",
    phase: 3,
    recommendedOrder: 48,
    posterSrc: p("iron-fist-s2"),
    synopsis:"Danny Rand has embraced his role as the protector of New York, determined to honor his promise to defend the city in Daredevil’s absence. But peace is short-lived when new enemies rise, and old rivalries resurface. As Danny struggles to balance his personal life with the burden of the Iron Fist, he faces Davos—once his brother-in-arms, now a deadly adversary who seeks to claim the mystical power for himself. With Colleen Wing by his side, Danny must confront betrayal, responsibility, and the true meaning of being the Immortal Iron Fist. In a season of growth and conflict, his greatest challenge is not just wielding the power—but proving he deserves it.",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/tv/62127?s=1&e=1&server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/kvvWB0GwCek?si=PqaeP35tuRzKwrAj",
  },
  {
    id: "daredevil-s3",
    name: "Daredevil: Season 3",
    type: "tv",
    universe: "Earth-616",
    saga: "Infinity",
    phase: 3,
    recommendedOrder: 49,
    posterSrc: p("daredevil-s3"),
    synopsis:"After barely surviving the collapse of Midland Circle, Matt Murdock is broken in body and spirit, questioning his faith and his role as Daredevil. As he hides from the world, a familiar enemy rises stronger than ever—Wilson Fisk, the Kingpin, who manipulates the system to reclaim power and control over New York. With Fisk unleashing a deadly imposter to tarnish Daredevil’s name, Matt must confront his deepest fears, rediscover his strength, and embrace the darkness within to protect the city he loves. In a season of redemption and reckoning, Daredevil learns that sometimes the only way to fight evil is to walk dangerously close to it.",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/tv/61889?s=1&e=1&server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/n83s6NO1NE0?si=AiczL22SYgZ5OfMl",
  },
  {
    id: "the-punisher-s2",
    name: "The Punisher: Season 2",
    type: "tv",
    universe: "Earth-616",
    saga: "Infinity",
    phase: 3,
    recommendedOrder: 50,
    posterSrc: p("the-punisher-s2"),
    synopsis:"Frank Castle tries to leave his violent past behind, wandering the country in search of peace. But when he stumbles upon a young woman hunted by ruthless killers, he’s pulled back into the shadows of war. As conspiracies unfold and old enemies resurface—including Billy Russo, scarred and vengeful—Castle is forced to embrace the mantle of the Punisher once more. With his code of justice tested and his humanity on the line, Frank must decide whether he’s fighting for redemption—or simply feeding the endless cycle of blood and vengeance.",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/tv/67178?s=1&e=1&server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/jrLhP5sK2wI?si=UZONP_QErBhvX19N",
  },
  {
    id: "captain-marvel-2019",
    name: "Captain Marvel",
    type: "film",
    universe: "Earth-616",
    saga: "Infinity",
    phase: 3,
    recommendedOrder: 51,
    posterSrc: p("captain-marvel-2019"),
    synopsis:"Set in the 1990s, Captain Marvel tells the origin story of Carol Danvers, a former U.S. Air Force pilot who becomes one of the universe’s most powerful heroes. When she’s caught in the middle of a galactic war between the Kree and the Skrulls, Carol must uncover the truth about her mysterious past and the hidden potential within her. Guided by Nick Fury before the Avengers initiative was born, she discovers that her greatest strength isn’t just her cosmic powers—it’s her humanity. With blazing energy and unstoppable determination, Captain Marvel rises to become Earth’s mightiest defender.",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/299537?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/Z1BCujX3pw8?si=XGng2NSDjlM2GDz-",
  },
  {
    id: "jessica-jones-s3",
    name: "Jessica Jones: Season 3",
    type: "tv",
    universe: "Earth-616",
    saga: "Infinity",
    phase: 3,
    recommendedOrder: 52,
    posterSrc: p("jessica-jones-s3"),
    synopsis:"Haunted by the battles she’s already fought, Jessica Jones tries to rebuild her life as a private investigator. But when a new villain, Gregory Sallinger, emerges—an obsessive killer who targets “frauds” and sets his sights on Jessica—her world is thrown into chaos once again. As she struggles to protect her friends and confront her own vulnerabilities, Jessica must face the darkest corners of her psyche. With Trish Walker stepping into her own dangerous path, the line between hero and vigilante blurs. In a season of betrayal, justice, and reckoning, Jessica learns that sometimes the hardest enemy to fight is the one who knows your weaknesses best.",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/tv/38472?s=1&e=1&server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/7DBKS2qH51I?si=NXZ94qSpzKVx0I-W",
  },
  {
    id: "avengers-endgame-2019",
    name: "Avengers: Endgame",
    type: "film",
    universe: "Earth-616",
    saga: "Infinity",
    phase: 3,
    recommendedOrder: 53,
    posterSrc: p("avengers-endgame-2019"),
    synopsis:"After the devastating snap of Thanos, the universe lies in ruins. The surviving Avengers—broken, grieving, yet unyielding—must find a way to undo the unimaginable loss. With time itself as their battleground, they embark on a daring mission that tests their courage, loyalty, and sacrifice. As past and present collide, heroes rise to their greatest challenge, confronting destiny and the cost of hope. In a climactic showdown, the Avengers prove that even in the face of despair, unity and sacrifice can change the fate of the universe forever.",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/299534?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/TcMBFSGVi1c?si=POCFAavr1JXkRJeM",
  },
  {
    id: "spider-man-far-from-home-2019",
    name: "Spider-Man: Far From Home",
    type: "film",
    universe: "Earth-616",
    saga: "Infinity",
    phase: 3,
    recommendedOrder: 54,
    posterSrc: p("spider-man-far-from-home-2019"),
    synopsis:"Still mourning the loss of his mentor Tony Stark, Peter Parker seeks a break from heroics on a school trip across Europe. But when elemental creatures wreak havoc, Nick Fury recruits Spider-Man to join forces with the enigmatic Mysterio. As Peter struggles with the weight of responsibility and the desire for a normal life, he learns that appearances can be deceiving—and trust can be dangerous. In a journey that tests his courage, heart, and identity, Spider-Man must rise above illusions to protect both his friends and the world.",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/429617?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/Nt9L1jCKGnE?si=b4WGe2DTLV5Z3R0O",
  },

  // =======================
  // Legacy / X-Men continuation (Earth-10005)
  // =======================
  {
    id: "x-men-origins-wolverine-2009",
    name: "X-Men Origins: Wolverine",
    type: "film",
    universe: "Earth-10005",
    saga: "Legacy",
    recommendedOrder: 55,
    posterSrc: p("x-men-origins-wolverine-2009"),
    synopsis:"Before he was an X-Man, he was a soldier, a brother, and a weapon. X-Men Origins: Wolverine explores the untold story of Logan, tracing his journey from childhood tragedy to his time in the Weapon X program. Betrayed by those he trusted and haunted by his violent past, Wolverine faces enemies both old and new—including his ruthless half-brother, Victor Creed. As his claws and rage are sharpened by loss, Logan discovers the cost of vengeance and the painful truth behind his indestructible skeleton. This is the beginning of the legend, forged in blood, betrayal, and adamantium.",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/2080?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/8IxT7WFL6Ec?si=NIMhY86H9DhGW_h-",
  },
  {
    id: "x-men-first-class-2011",
    name: "X-Men: First Class",
    type: "film",
    universe: "Earth-10005",
    saga: "Legacy",
    recommendedOrder: 56,
    posterSrc: p("x-men-first-class-2011"),
    synopsis:"Before they were Professor X and Magneto, they were Charles Xavier and Erik Lehnsherr—two men bound by friendship, divided by ideology. Set against the backdrop of the Cold War, X-Men: First Class explores the origins of the mutant struggle, as Charles and Erik unite a team of young mutants to stop a global catastrophe. But as their powers grow and their philosophies clash, the seeds of the legendary conflict between the X-Men and the Brotherhood are sown. With loyalty, betrayal, and destiny colliding, this is the story of how heroes and villains are born.",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/49538?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/kyQKi5-k0UU?si=M3D1opAUCSewEFXR",
  },
  {
    id: "the-wolverine-2013",
    name: "The Wolverine",
    type: "film",
    universe: "Earth-10005",
    saga: "Legacy",
    recommendedOrder: 57,
    posterSrc: p("the-wolverine-2013"),
    synopsis:"Haunted by the ghosts of his past, Logan travels to Japan, where he is drawn into a world of honor, betrayal, and deadly conflict. When an old acquaintance offers him the chance to shed his immortality, Wolverine faces his most personal battle yet—one that pits his humanity against his rage. As he confronts powerful samurai, ruthless assassins, and the deadly Silver Samurai, Logan must decide whether the gift of mortality is worth the cost. In a story of sacrifice and redemption, The Wolverine strips the hero down to his core, revealing the man behind the claws.",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/76170?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/u1VCP3O8wG0?si=O0RNGeknucQL2_dz",
  },
  {
    id: "x-men-days-of-future-past-2014",
    name: "X-Men: Days of Future Past",
    type: "film",
    universe: "Earth-10005",
    saga: "Legacy",
    recommendedOrder: 58,
    posterSrc: p("x-men-days-of-future-past-2014"),
    synopsis:"In a dark future where mutants face extinction at the hands of unstoppable Sentinels, the X-Men make a desperate gamble. Wolverine is sent back to 1973, tasked with uniting the younger Charles Xavier and Erik Lehnsherr to change history and prevent annihilation. But fractured loyalties, personal demons, and the rise of Mystique’s rebellion threaten to derail the mission. As past and future collide, the fate of both timelines rests on fragile alliances and impossible choices. In a story of redemption, sacrifice, and survival, the X-Men fight not only for their lives—but for the very possibility of hope.",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/127585?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/pK2zYHWDZKo?si=Vh6DUJfuGIh0rt5F",
  },
  {
    id: "deadpool-2016",
    name: "Deadpool",
    type: "film",
    universe: "Earth-10005",
    saga: "Legacy",
    recommendedOrder: 59,
    posterSrc: p("deadpool-2016"),
    synopsis:"Wade Wilson, a former Special Forces operative turned mercenary, undergoes a rogue experiment that leaves him with accelerated healing powers—and a twisted sense of humor. Armed with his new abilities and a sharp tongue, he becomes Deadpool, the “Merc with a Mouth,” on a relentless mission to hunt down the man who nearly destroyed his life. Breaking the fourth wall, skewering superhero conventions, and delivering action with outrageous comedy, Deadpool redefines what it means to be a hero… or at least something close to one.",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/293660?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/Xithigfg7dA?si=zdb6I4bpROwRYkpD",
  },
  {
    id: "x-men-apocalypse-2016",
    name: "X-Men: Apocalypse",
    type: "film",
    universe: "Earth-10005",
    saga: "Legacy",
    recommendedOrder: 60,
    posterSrc: p("x-men-apocalypse-2016"),
    synopsis:"",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/246655?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/PfBVIHgQbYk?si=LTcEr1LqeBQuj6hn",
  },
  {
    id: "logan-2017",
    name: "Logan",
    type: "film",
    universe: "Earth-10005",
    saga: "Legacy",
    recommendedOrder: 61,
    posterSrc: p("logan-2017"),
    synopsis:"",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/263115?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/Div0iP65aZo?si=iLmpi-t11olExfbU",
  },
  {
    id: "deadpool-2-2018",
    name: "Deadpool 2",
    type: "film",
    universe: "Earth-10005",
    saga: "Legacy",
    recommendedOrder: 62,
    posterSrc: p("deadpool-2-2018"),
    synopsis:"",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/383498?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/D86RtevtfrA?si=t8UegJ18QDknu2_b",
  },
  {
    id: "x-men-dark-phoenix-2019",
    name: "X-Men: Dark Phoenix",
    type: "film",
    universe: "Earth-10005",
    saga: "Legacy",
    recommendedOrder: 63,
    posterSrc: p("x-men-dark-phoenix-2019"),
    synopsis:"",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/320288?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/1-q8C_c-nlM?si=zbgHEZWCkjyLNnbU",
  },
  {
    id: "the-new-mutants-2020",
    name: "The New Mutants",
    type: "film",
    universe: "Earth-10005",
    saga: "Legacy",
    recommendedOrder: 64,
    posterSrc: p("the-new-mutants-2020"),
    synopsis:"",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/340102?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/W_vJhUAOFpI?si=Yhsv7LMFv7RDzGIm",
  },

  // -----------------------
  // The Amazing Spider-Man (Earth-120703)
  // -----------------------
  {
    id: "the-amazing-spider-man-2012",
    name: "The Amazing Spider-Man",
    type: "film",
    universe: "Earth-120703",
    saga: "Legacy",
    recommendedOrder: 65,
    posterSrc: p("the-amazing-spider-man-2012"),
    synopsis:"",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/1930?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/-tnxzJ0SSOw?si=MHIdEkpHBJFLb2gZ",
  },
  {
    id: "the-amazing-spider-man-2-2014",
    name: "The Amazing Spider-Man 2",
    type: "film",
    universe: "Earth-120703",
    saga: "Legacy",
    recommendedOrder: 66,
    posterSrc: p("the-amazing-spider-man-2-2014"),
    synopsis:"",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/102382?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/nbp3Ra3Yp74?si=tbxO3DynueOkYWKj",
  },

  // =======================
  // The Multiverse Saga
  // =======================

  // -----------------------
  // Sony's Spider-Man Universe: Part 1 (Earth-688)
  // -----------------------
  {
    id: "venom-2018",
    name: "Venom",
    type: "film",
    universe: "Earth-688",
    saga: "Multiverse",
    recommendedOrder: 67,
    posterSrc: p("venom-2018"),

    synopsis:"",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/335983?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/u9Mv98Gr5pY?si=uiPAPnLs_g8KuMJw",
  },
  {
    id: "venom-let-there-be-carnage-2021",
    name: "Venom: Let There Be Carnage",
    type: "film",
    universe: "Earth-688",
    saga: "Multiverse",
    recommendedOrder: 68,
    posterSrc: p("venom-let-there-be-carnage-2021"),
    synopsis:"",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/580489?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/TiZSmW2PnRo?si=9LsQkSwR3RiSkqre",
  },

  // -----------------------
  // MCU Phase 4 (Earth-616/TVA)
  // -----------------------
  {
    id: "wandavision",
    name: "WandaVision",
    type: "tv",
    universe: "Earth-616/TVA",
    saga: "Multiverse",
    phase: 4,
    recommendedOrder: 69,
    posterSrc: p("wandavision"),
    synopsis:"",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/tv/85271?s=1&e=1&server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/sj9J2ecsSpo?si=-JFo0HevT0HmyN93",
  },
  {
    id: "the-falcon-and-the-winter-soldier",
    name: "The Falcon and the Winter Soldier",
    type: "tv",
    universe: "Earth-616/TVA",
    saga: "Multiverse",
    phase: 4,
    recommendedOrder: 70,
    posterSrc: p("the-falcon-and-the-winter-soldier"),
    synopsis:"",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/tv/88396?s=1&e=1&server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/IWBsDaFWyTE?si=wDadCs_MYqbGGNl4",
  },
  {
    id: "loki-s1",
    name: "Loki: Season 1",
    type: "tv",
    universe: "Earth-616/TVA",
    saga: "Multiverse",
    phase: 4,
    recommendedOrder: 71,
    posterSrc: p("loki-s1"),
    synopsis:"",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/tv/84958?s=1&e=1&server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/nW948Va-l10?si=FELi-CwyJdVtyS6U",
  },
  {
    id: "black-widow-2021",
    name: "Black Widow",
    type: "film",
    universe: "Earth-616/TVA",
    saga: "Multiverse",
    phase: 4,
    recommendedOrder: 72,
    posterSrc: p("black-widow-2021"),
    synopsis:"",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/497698?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/ybji16u608U?si=CgqBrxh4fSA1oHpw",
  },
  {
    id: "shang-chi-2021",
    name: "Shang-Chi and the Legend of the Ten Rings",
    type: "film",
    universe: "Earth-616/TVA",
    saga: "Multiverse",
    phase: 4,
    recommendedOrder: 73,
    posterSrc: p("shang-chi-2021"),
    synopsis:"",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/566525?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/8YjFbMbfXaQ?si=-lrAKkUECFR_xelW",
  },
  {
    id: "what-if-s1",
    name: "What If...?: Season 1",
    type: "tv",
    universe: "Earth-616/TVA",
    saga: "Multiverse",
    phase: 4,
    recommendedOrder: 74,
    posterSrc: p("what-if-s1"),
    synopsis:"",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/tv/91363?s=1&e=1&server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/x9D0uUKJ5KI?si=w-tiJ6-uPwiaFsGv",
  },
  {
    id: "eternals-2021",
    name: "The Eternals",
    type: "film",
    universe: "Earth-616/TVA",
    saga: "Multiverse",
    phase: 4,
    recommendedOrder: 75,
    posterSrc: p("eternals-2021"),
    synopsis:"",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/524434?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/x_me3xsvDgk?si=4rFsov6ShQfNAhuy",
  },
  {
    id: "hawkeye",
    name: "Hawkeye",
    type: "tv",
    universe: "Earth-616/TVA",
    saga: "Multiverse",
    phase: 4,
    recommendedOrder: 76,
    posterSrc: p("hawkeye"),
    synopsis:"",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/tv/88329?s=1&e=1&server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/5VYb3B1ETlk?si=6IRHkPthXvdsFHHN",
  },
  {
    id: "spider-man-no-way-home-2021",
    name: "Spider-Man: No Way Home",
    type: "film",
    universe: "Earth-616/TVA",
    saga: "Multiverse",
    phase: 4,
    recommendedOrder: 77,
    posterSrc: p("spider-man-no-way-home-2021"),
    synopsis:"",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/634649?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/JfVOs4VSpmA?si=ZG4TatGHpo2kNVmx",
  },
  {
    id: "moon-knight",
    name: "Moon Knight",
    type: "tv",
    universe: "Earth-616/TVA",
    saga: "Multiverse",
    phase: 4,
    recommendedOrder: 78,
    posterSrc: p("moon-knight"),
    synopsis:"",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/tv/92749?s=1&e=1&server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/x7Krla_UxRg?si=2fLRk2EuwId1Buoi",
  },
  {
    id: "doctor-strange-in-the-multiverse-of-madness-2022",
    name: "Doctor Strange in the Multiverse of Madness",
    type: "film",
    universe: "Earth-616/TVA",
    saga: "Multiverse",
    phase: 4,
    recommendedOrder: 79,
    posterSrc: p("doctor-strange-in-the-multiverse-of-madness-2022"),
    synopsis:"",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/453395?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/aWzlQ2N6qqg?si=3scnzXZkACUHY7Xk",
  },
  {
    id: "ms-marvel",
    name: "Ms. Marvel",
    type: "tv",
    universe: "Earth-616/TVA",
    saga: "Multiverse",
    phase: 4,
    recommendedOrder: 80,
    posterSrc: p("ms-marvel"),
    synopsis:"",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/tv/92782?s=1&e=1&server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/m9EX0f6V11Y?si=5eoKB7BzdgZrestd",
  },
  {
    id: "thor-love-and-thunder-2022",
    name: "Thor: Love and Thunder",
    type: "film",
    universe: "Earth-616/TVA",
    saga: "Multiverse",
    phase: 4,
    recommendedOrder: 81,
    posterSrc: p("thor-love-and-thunder-2022"),
    synopsis:"",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/616037?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/Go8nTmfrQd8?si=5ZNhBHNGAFy-acM2",
  },
  {
    id: "i-am-groot-s1",
    name: "I Am Groot: Season 1",
    type: "tv",
    universe: "Earth-616/TVA",
    saga: "Multiverse",
    phase: 4,
    recommendedOrder: 82,
    posterSrc: p("i-am-groot-s1"),
    synopsis:"",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/tv/232125?s=1&e=1&server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/D7eFpRf4tac?si=nHy3ervVzeZth2xi",
  },
  {
    id: "she-hulk-s1",
    name: "She-Hulk: Season 1",
    type: "tv",
    universe: "Earth-616/TVA",
    saga: "Multiverse",
    phase: 4,
    recommendedOrder: 83,
    posterSrc: p("she-hulk-s1"),
    synopsis:"",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/tv/92783?s=1&e=1&server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/u7JsKhI2An0?si=L4urX2qqDfIKnNGR",
  },
  {
    id: "werewolf-by-night-2022",
    name: "Werewolf by Night",
    type: "special",
    universe: "Earth-616/TVA",
    saga: "Multiverse",
    phase: 4,
    recommendedOrder: 84,
    posterSrc: p("werewolf-by-night-2022"),
    synopsis:"",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/894205?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/bLEFqhS5WmI?si=M5FopJR-kWVn-g3I",
  },
  {
    id: "black-panther-wakanda-forever-2022",
    name: "Black Panther: Wakanda Forever",
    type: "film",
    universe: "Earth-616/TVA",
    saga: "Multiverse",
    phase: 4,
    recommendedOrder: 85,
    posterSrc: p("black-panther-wakanda-forever-2022"),
    synopsis:"",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/505642?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/RlOB3UALvrQ?si=uI2eeiq4Nwl5WgbW",
  },
  {
    id: "spiderman-into-the-spider-verse-2-2023",
    name: "Spider-Man: Into the Spider-Verse 2",
    type: "film",
    universe: "Earth-1610",
    saga: "Multiverse",
    phase: 4,
    recommendedOrder: 86,
    posterSrc: p("spiderman-into-the-spider-verse-2-2023"),
    synopsis:"",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/324857?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/g4Hbz2jLxvQ?si=VM8YmtSTsChEGPPR",
  },
  {
    id: "spiderman-across-the-spider-verse-2023",
    name: "Spider-Man: Across the Spider-Verse",
    type: "film",
    universe: "Earth-1610",
    saga: "Multiverse",
    phase: 4,
    recommendedOrder: 87,
    posterSrc: p("spiderman-across-the-spider-verse-2023"),
    synopsis:"",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/569094?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/shW9i6k8cB0?si=SOJudCROfGmtOoYM",
  },
  {
    id: "morbius-2022",
    name: "Morbius",
    type: "film",
    universe: "Earth-688",
    saga: "Multiverse",
    phase: 4,
    recommendedOrder: 88,
    posterSrc: p("morbius-2022"),
    synopsis:"",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/526896?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/oZ6iiRrz1SY?si=-PuoNjYacz33hRlH",
  },
  {
    id: "madame-web-2024",
    name: "Madame Web",
    type: "film",
    universe: "Earth-688",
    saga: "Multiverse",
    phase: 4,
    recommendedOrder: 89,
    posterSrc: p("madame-web-2024"),
    synopsis:"",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/634492?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/s_76M4c4LTo?si=J5DxCru8H6Xu1Cmp",
  },
  {
    id: "venom-the-last-dance-2024",
    name: "Venom: The Last Dance",
    type: "film",
    universe: "Earth-688",
    saga: "Multiverse",
    phase: 4,
    recommendedOrder: 90,
    posterSrc: p("venom-the-last-dance-2024"),
    synopsis:"",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/912649?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/__2bjWbetsA?si=h9Ob40qWIIwj4dyr",
  },
  {
    id: "kraven-the-hunter-2024",
    name: "Kraven the Hunter",
    type: "film",
    universe: "Earth-688",
    saga: "Multiverse",
    phase: 4,
    recommendedOrder: 91,
    posterSrc: p("kraven-the-hunter-2024"),
    synopsis:"",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/539972?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/I8gFw4-2RBM?si=h-pUh9Kl5Uoo-4Xm",
  },
  {
    id: "ant-man-and-the-wasp-quantumania-2023",
    name: "Ant-Man and the Wasp: Quantumania",
    type: "film",
    universe: "Earth-616/Earth-10005/TVA",
    saga: "Multiverse",
    phase: 5,
    recommendedOrder: 92,
    posterSrc: p("ant-man-and-the-wasp-quantumania-2023"),
    synopsis:"",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/640146?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/ZlNFpri-Y40?si=_3OpjauNzg7__O0J",
  },
  {
    id: "guardians-of-the-galaxy-vol-3-2023",
    name: "Guardians of the Galaxy Vol. 3",
    type: "film",
    universe: "Earth-616/Earth-10005/TVA",
    saga: "Multiverse",
    phase: 5,
    recommendedOrder: 93,
    posterSrc: p("guardians-of-the-galaxy-vol-3-2023"),
    synopsis:"",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/447365?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/u3V5KDHRQvk?si=HnibXMy6JPTvRlJ9",
  },
  {
    id: "secret-invasion-2023",
    name: "Secret Invasion",
    type: "tv",
    universe: "Earth-616/Earth-10005/TVA",
    saga: "Multiverse",
    phase: 5,
    recommendedOrder: 94,
    posterSrc: p("secret-invasion-2023"),
    synopsis:"",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/tv/114472?s=1&e=1&server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/qZVTkn2NjS0?si=PiOKH-mqGDwGa3W1",
  },
  {
    id: "i-am-groot-s2",
    name: "I Am Groot: Season 2",
    type: "tv",
    universe: "Earth-616/Earth-10005/TVA",
    saga: "Multiverse",
    phase: 5,
    recommendedOrder: 95,
    posterSrc: p("i-am-groot-s2"),
    synopsis:"",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/tv/232125?s=1&e=1&server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/1k8H2CywVqg?si=NdTiAGgJkAewGX79",
  },
  {
    id: "loki-s2",
    name: "Loki: Season 2",
    type: "tv",
    universe: "Earth-616/Earth-10005/TVA",
    saga: "Multiverse",
    phase: 5,
    recommendedOrder: 96,
    posterSrc: p("loki-s2"),
    synopsis:"",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/tv/84958?s=1&e=1&server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/dug56u8NN7g?si=h2ke5q66U7NA8lf8",
  },
  {
    id: "the-marvels-2023",
    name: "The Marvels",
    type: "film",
    universe: "Earth-616/Earth-10005/TVA",
    saga: "Multiverse",
    phase: 5,
    recommendedOrder: 97,
    posterSrc: p("the-marvels-2023"),
    synopsis:"",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/609681?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/wS_qbDztgVY?si=SivzlqGTEyaKuRsM",
  },
  {
    id: "what-if-s2",
    name: "What If: Season 2",
    type: "tv",
    universe: "Earth-616/Earth-10005/TVA",
    saga: "Multiverse",
    phase: 5,
    recommendedOrder: 98,
    posterSrc: p("what-if-s2"),
    synopsis:"",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/tv/91363?s=1&e=1&server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/TiEVqZ2Bc_c?si=gVqmqeq_hMZKzkZl",
  },
  {
    id: "echo-2024",
    name: "Echo: Season 1",
    type: "tv",
    universe: "Earth-616/Earth-10005/TVA",
    saga: "Multiverse",
    phase: 5,
    recommendedOrder: 99,
    posterSrc: p("echo-2024"),
    synopsis:"",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/tv/122226?s=1&e=1&server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/AFUKnherhuw?si=sHG5ySv13m3dKMfN",
  },
  {
    id: "deadpool-and-wolverine-2024",
    name: "Deadpool & Wolverine",
    type: "film",
    universe: "Earth-616/Earth-10005/TVA",
    saga: "Multiverse",
    phase: 5,
    recommendedOrder: 100,
    posterSrc: p("deadpool-and-wolverine-2024"),
    synopsis:"",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/533535?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/73_1biulkYk?si=baLPFQztZPFgTaPf",
  },
  {
    id: "agatha-all-along-2024",
    name: "Agatha: All Along",
    type: "tv",
    universe: "Earth-616/Earth-10005/TVA",
    saga: "Multiverse",
    phase: 5,
    recommendedOrder: 101,
    posterSrc: p("agatha-all-along-2024"),
    synopsis:"",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/tv/138501?s=1&e=1&server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/R9pXbNz6Vbw?si=PV_L5YKkzC21R1a_",
  },
  {
    id: "what-if-s3",
    name: "What If: Season 3",
    type: "tv",
    universe: "Earth-616/Earth-10005/TVA",
    saga: "Multiverse",
    phase: 5,
    recommendedOrder: 102,
    posterSrc: p("what-if-s3"),
    synopsis:"",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/tv/91363?s=1&e=1&server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/umiKiW4En9g?si=35VGnBstUDnnfTih",
  },
  {
    id: "your-friendly-neighborhood-spider-man-2025",
    name: "Your Friendly Neighborhood Spider-Man",
    type: "tv",
    universe: "Earth-616/Earth-10005/TVA",
    saga: "Multiverse",
    phase: 5,
    recommendedOrder: 103,
    posterSrc: p("your-friendly-neighborhood-spider-man-2025"),
    synopsis:"",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/tv/138503?s=1&e=1&server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/N3J2JRQg040?si=C48Utn41re9qbd0t",
  },
  {
    id: "captain-america-brave-new-world-2025",
    name: "Captain America: Brave New World",
    type: "film",
    universe: "Earth-616/Earth-10005/TVA",
    saga: "Multiverse",
    phase: 5,
    recommendedOrder: 104,
    posterSrc: p("captain-america-brave-new-world-2025"),
    synopsis:"",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/822119?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/1pHDWnXmK7Y?si=ptL-rqmnDcHKSF3F",
  },
  {
    id: "daredevil-born-again-2025",
    name: "Daredevil: Born Again",
    type: "tv",
    universe: "Earth-616/Earth-10005/TVA",
    saga: "Multiverse",
    phase: 5,
    recommendedOrder: 105,
    posterSrc: p("daredevil-born-again-2025"),
    synopsis:"",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/tv/202555?s=1&e=1&server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/7xALolZzhSM?si=SweMqP64lldL6UKM",
  },
  {
    id: "thunderbolts-2025",
    name: "Thunderbolts",
    type: "film",
    universe: "Earth-616/Earth-10005/TVA",
    saga: "Multiverse",
    phase: 5,
    recommendedOrder: 106,
    posterSrc: p("thunderbolts-2025"),
    synopsis:"",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/986056?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/-sAOWhvheK8?si=z07-jn1FzBkNEDv7",
  },
  {
    id: "ironheart-2025",
    name: "Ironheart",
    type: "tv",
    universe: "Earth-616/Earth-10005/TVA",
    saga: "Multiverse",
    phase: 5,
    recommendedOrder: 107,
    posterSrc: p("ironheart-2025"),
    synopsis:"",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/tv/114471?s=1&e=1&server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/WpW36ldAqnM?si=YDMQKZ-0w7ydRrwZ",
  },
  {
    id: "fantastic-four-2025",
    name: "Fantastic Four: First Steps",
    type: "film",
    universe: "Earth-616/Earth-???",
    saga: "Multiverse",
    phase: 6,
    recommendedOrder: 108,
    posterSrc: p("fantastic-four-2025"),
    synopsis:"",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/movie/1516738?server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/18QQWa5MEcs?si=H3gH6Tm6fSH5Qgjy",
  },
  {
    id: "eyes-of-wakanda-2025",
    name: "Eyes of Wakanda",
    type: "tv",
    universe: "Earth-616/Earth-???",
    saga: "Multiverse",
    phase: 6,
    recommendedOrder: 109,
    posterSrc: p("eyes-of-wakanda-2025"),
    synopsis:"",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/tv/241388?s=1&e=1&server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/ODHh6oe4MlE?si=M6tlBywdwSCBTzB7",
  },
  {
    id: "marvel-zombies-2025",
    name: "Marvel Zombies",
    type: "tv",
    universe: "Earth-616/Earth-???",
    saga: "Multiverse",
    phase: 6,
    recommendedOrder: 110,
    posterSrc: p("marvel-zombies-2025"),
    synopsis:"",
    watchUrl:[
      {label:"streamX", url:"https://streamex.net/watch/tv/138505?s=1&e=1&server=zxcstream"},
      
    ],
    trailerUrl:"https://youtu.be/twHYF506-9Y?si=La6KwjuQIn7He1M3",
  },
];