db.BlogPosts.deleteMany({});

db.BlogPosts.aggregate([{
    $lookup: {
        from: "Comments",
        localField: "title",
        foreignField: "post_id",
        as: "comments"
    }
}
])

// Define sample data
const posts = [
    {
        author_id: "100105303031333661985",
        url: "https://th.bing.com/th/id/OIP.v7mhiBa7_bhbv7Ncsw6BSQHaHa?pid=ImgDet&rs=1",
        title: " Some Netflix Services Officially Shutting Down",
        content: "Netflix is officially sunsetting part of its business model, the entertainment company announced on Tuesday. Starting as a DVD rental service in 1998, Netflix became an early streaming titan. Originals like Emily in Paris, Stranger Things, and Mindhunter changed the television industry. The company has struggled financially in recent years, surpassed by Disney+ as the most popular streaming service worldwide. Many loyal subscribers abandoned Netflix after it ended password sharing, something it previously encouraged online. After announcing layoffs in March, Netflix has ended another part of its service to cut costs: its iconic DVD-by-mail rentals via DVD.com. Its final DVDs will ship on September 29. “Our goal has always been to provide the best service for our members but as the business continues to shrink that’s going to become increasingly difficult,” Netflix wrote.“Those iconic red envelopes changed the way people watched shows and movies at home — and they paved the way for the shift to streaming. From the beginning, our members loved the choice and control that direct-to-consumer entertainment offered: the wide variety of the titles and the ability to binge watch entire series. DVDs also led to our first foray into original programming — with Red Envelope Entertainment titles including Sherrybaby and Zach Galifianakis Live at the Purple Onion.” “We feel so privileged to have been able to share movie nights with our DVD members for so long, so proud of what our employees achieved and excited to continue pleasing entertainment fans for many more decades to come.” To commemorate the service, Netflix shared statistics from the last 25 years. The first DVD rented was Beetlejuice (1988) on March 10, 1998, and the most popular rental was The Blind Side (2009). Over nearly three decades, the company shipped over 5.2 billion DVDs to 40 million unique subscribers. Will you miss the Netflix DVD service? Share your thoughts with Inside the Magic in the comments section. The post Netflix Service Officially Shutting Down appeared first on Inside the Magic.",
        post_id: 1,
        category: "Entertainment",
        publication_date: "2023-04-11",
        featured: true,
        views: 100,
        likes: 20,
        dislikes: 0
    },
    {
        author_id: "104928675914176513026",
        url: "https://media.comicbook.com/2018/05/james-gunn-kill-batman-1108150-640x320.jpeg",
        title: "James Gunn Gives Update On Casting New Batman Actor For The DC Universe",
        content: "DC Studios boss and filmmaker James Gunn gives updates on the search for the new Bruce Wayne in the DC Universe's upcoming Batman: The Brave and the Bold. Warner Bros. Discovery is starting over with their cinematic universe based on the DC Comics properties. As the DCEU ends this summer with The Flash movie, Gunn and Peter Safran are crafting a new DC Universe, which will have more interconnectivity across TV and film. DC Studios are currently working on Chapter 1, Gods and Monsters, which will properly begin with Superman: Legacy. One of the projects that is in the works is Batman: The Brave and The Bold, which will feature a new iteration of the Caped Crusader. As Gunn has been providing updates about various DC Universe TV shows and movies on social media, one fan inquired about how old Bruce Wayne will be in this particular franchise. Gunn responded that they have not even cast Batman yet, meaning they don't know yet what age he will be in the DC Universe. It is unclear if they have even started casting for Batman yet or have any actors in mind for who they want to tap as the new Dark Knight. Gunn didn't specify when they are actually going to start casting for Batman: The Brave and The Bold.",
        post_id: 2,
        category: "Entertainment",
        publication_date: "2023-05-14",
        featured: false,
        views: 5,
        likes: 2,
        dislikes: 1
    },
    {
        author_id: "100105303031333661985",
        url: "https://th.bing.com/th/id/R.0e9b1699aaa8282bb8cc0a395b39c428?rik=TK5TlZwg%2fsy9%2bQ&pid=ImgRaw&r=0",
        title: "Disney Entertainment Sees Major Shakeup",
        content: "In early February, Disney CEO Bob Iger held his first earnings call since once again becoming CEO after the firing of Bob Chapek. During that call, Iger shared that one of his main focuses was giving creative power back to the very talented Disney creatives. As part of that, he was making Dana Walden and Alan Bergman the co-chairs of Disney Entertainment. Walden had been serving as the head of Disney General Entertainment Content after Chapek’s abrupt firing of Peter Rice. Just weeks into her tenure, Walden is making some big changes at Disney Entertainment. According to The Hollywood Reporter, Walden has appointed FX creative John Landgraf to oversee Onyx and Nat Geo. Freeform’s programming now be will be overseen by Simran Sethi, the Executive Vice President of Scripted Programming and Content Strategy of ABC Entertainment. In the new structure, which comes after returning CEO Bob Iger’s swift dismantling of Disney Media and Entertainment Distribution, National Geographic head Courteney Monroe and Duncan will report to Landgraf, who will continue to be one of Walden’s direct reports. Monroe, whose brand just earned its third Oscar nomination for Fire of Love, will now oversee all aspects of the Nat Geo brand, including its magazine, digital efforts and original content strategy. For Sethi, now executive vp programming and content strategy for ABC and Freeform, the additional purview marks a return to a younger-skewing brand that she helped to launch. She will continue reporting to Disney TV Group president Craig Erwich, who also counts Disney Branded TV president Ayo Davis as one of his direct reports. Onyx Collective remains a huge priority, and as its impressive roster of creators and series continues to grow, Tara Duncan will now focus exclusively on Onyx. National Geographic Content recently earned its third Oscar nomination and has attracted some of the biggest stars to its impressive slate of series and doc films. Courteney Monroe will now oversee all aspects of the brand, including its digital footprint and iconic magazine, along with its original content strategy. Great stories are the lifeblood of our company, and I will remain deeply connected to the creative side of our business. As we begin our new chapter together, I have the utmost confidence in this team of proven and formidable leaders. I am very grateful to Bob for reuniting and realigning our company in such a meaningful way.",
        post_id: 1,
        category: "Entertainment",
        publication_date: "2023-04-11",
        featured: false,
        views: 156,
        likes: 100,
        dislikes: 0
    },
    {
        author_id: "104928675914176513026",
        url: "https://www.jsonline.com/gcdn/presto/2022/04/19/PMJS/042b4f01-18fd-4c7d-8c51-a7b41e931dd7-T.rex_Final.jpg?width=1200&disable=upscale&format=pjpg&auto=webp",
        title: "More than 24 dinosaurs of 'Jurassic World' movies roaring into Resch Center for 6 arena shows in October",
        content: "ASHWAUBENON - It’s all the dinosaurs without Chris Pratt. “Jurassic World Live Tour” will stomp its way into the Resch Center for six performances Oct. 26-28. The family show from Feld Entertainment, the same producers behind Disney on Ice, will bring the thrills of the “Jurassic World” movie franchise to the arena. Familiar dinosaurs from the big screen, including Velociraptor Blue and a mighty Tyrannosaurus rex that stretches more than 40 feet, are among the stars. The show boasts more than 24 film-accurate, life-sized dinosaurs in scale, speed and ferocity that are operated by animatronics and performers. The cast also includes Bumpy, the friendly, food-motivated and fast-growing herbivore from the popular Netflix animated series “Jurassic World: Camp Cretaceous The show, which is set between the first Jurassic World film in 2015 and 2018's Jurassic World: Fallen Kingdom, takes audience to the jungles of Isla Nublar, where an Indominus rex escapes and causes chaos in the park. A team of scientists must unravel a corrupt plan and save Jeanie, a Troodon dinosaur. Performances are at 7 p.m. Oct. 26, 3 and 7 p.m. Oct. 27 and 10:30 a.m., 2:30 and 6:30 p.m. OctTickets go on sale at 10 a.m. May 23 at ticketstaronline.com, 800-895-0071 and the Resch Center box office. Prices start at $23 and are subject to change based on market demand. Ages 2 and older are required to have a tickeGet access to a presale code to purchase tickets beginning Tuesday by signing up as a preferred guest at jurassicworldlivetour. All tickets include a preshow experience one hour prior that offers a chance to see the dinosaurs and vehicles up close and get a photo with Triceratops, Stegosaurus, Bumpy and the “Jurassic World” Jeep and Gyrosphere.",
        post_id: 3,
        category: "Entertainment",
        publication_date: "2023-05-14",
        featured: false,
        views: 5,
        likes: 2,
        dislikes: 1
    },
    {
        author_id: "100105303031333661985",
        url: "https://vignette.wikia.nocookie.net/marvelcrossroads/images/a/a0/Thanos_(Earth-1600).png/revision/latest?cb=20180427203217",
        title: "Meet The Powerful Marvel Characters That Would Give Thanos A Run For His Money",
        content: "Deadpool is such an intriguing character. He likes doing things just for fun, and he has a slew of powers that would prove extremely helpful in a battle against Thanos. One of his abilities is that he is effectively immortal. That sounds like something that could help against the villain. One of his most head-scratching but useful powers is how he can break the 4th wall. That means he knows he's a comic book character and talks to the audience and can read old copies to find out someone's weakness. In the comics, he defeats all of the Marvel Universe just for giggles. Scarlet Witch is definitely one of the more powerful Marvel characters. She has powers such as mind control, healing factor, control of elements, chaos magic, and much more.She can also do something that many of the other heroes can accomplish-- destroying infinity stones. Member of the otherworldly and virtually immortal Asgardian race, mastery over the elements of thunder and lightning, and resistance to injury are only a few perks that come with Thor. The powers of Drax range from superior power to telepathic abilities. He is also capable of destroying a planet with only his strength. Out of all the X-Men members, Jean Grey with the Phoenix Force is possibly the most powerful character there is. We've seen her portrayed briefly in X-Men: Apocalypse and more so in X-Men: The Last Stand, but those versions of her showcase nowhere near her full potential. After watching The Hulk get beat mercilessly by Thanos in Infinity War, some might find this entry surprising. We don't blame you because that fight was one-sided and it looked like the green beast couldn't hold a candle to the Mad Titan.",
        post_id: 4,
        category: "Entertainment",
        publication_date: "2023-05-14",
        featured: false,
        views: 5,
        likes: 2,
        dislikes: 1
    },
    {
        author_id: "104928675914176513026",
        url: "https://th.bing.com/th/id/R.4d3c974b297b6b78b4c4f8710404e726?rik=LYbHq2yolh2DUA&pid=ImgRaw&r=0",
        title: "NASA’s moon astronauts are ready to start training",
        content: "Training is about to get underway for the first lunar-bound crewed mission in 50 yNASA astronauts Christina Koch, Victor Glover, and Reid Wiseman, together with Canadian Space Agency astronaut Jeremy Hansen, will begin preparing for the Artemis II mission in June, NASA said this weekThe training program for the 10-day mission is expected to last 18 months. Most of it will take place at the Johnson Space Center in Houston, Texas, where NASA has a mockup of the Orion crew module, and also at the Kennedy Space Center in Florida, the mission’s launch location.Currently slated for November 2024, Artemis II has been made possible by the successful Artemis I mission, which last year tested NASA’s new Space Launch System (SLS) rocket and Orion spacecraft in a trip around the moon that will be closely followed by the Artemis II crew. The upcoming mission will bring the astronauts to within around 80 miles of the lunar surface and take them further from Earth than any crewed mission has gone befoThe training will include detailed lessons on the Orion spacecraft and SLS rocket systems, including how to operate and monitor systems for the ascent, orbit and coast, and entry phases of the mission, and how to respond to any emergency situations that arise, NASA sai“We’re building a robust training plan for the crew to ensure they’re ready for every aspect of this first mission to the moon under Artemis on our newest spacecraft and rocket,” said Jacki Mahaffey, lead training officer for the Artemis II crew. “Since this is the first time we’ll train crew for Artemis missions, Reid, Victor, Christina, and Jeremy are going to be integral to helping us refine future training requirements, as wThe four crew members for NASA’s Artemis II mission were introduced to the public at a special event last month. All except Hansen have traveled to space before, staying aboard the International Space Station in low-Earth oA successful mission will pave the way for the highly anticipated Artemis III mission — possibly in 2025 — which will perform the first crewed lunar landing since the last Apollo mission in 19NASA’s Artemis program will use new technologies to explore moreof the lunar surface than ever before. The ultimate aim is to establish the first long-term presence on the moon and potentially use the celestial body as a launch pad for the first crewed mission to Mars.",
        post_id: 2,
        category: "Education",
        publication_date: "2023-05-14",
        featured: true,
        views: 5,
        likes: 2,
        dislikes: 1
    },
    {
        author_id: "104928675914176513026",
        url: "https://th.bing.com/th/id/OIP.tCzLb0GAGSKxXa3SlhtzaQHaD4?pid=ImgDet&rs=1",
        title: "This Bionic Eye Could Restore Vision (and Put Humans in the Matrix)",
        content: "Inside the front door at Science Corp. in Alameda, California, lies a brightly lit room with large, transparent windows. On a late November afternoon, three gowned surgeons carefully circle a New Zealand white rabbit laid out on an ocean-blue cloth. About a month prior, the rabbit — named Leela, after Futurama's one-eyed heroine — received an injection through the white of her eyebalJust outside the surgery room, Max Hodak, the CEO of Science Corp., stands in jeans and a black hoodie, cradling a laptop in the crook of his arm. The presentation on his screen shows a small device, about the size of a penny, attached to a thin tail of wiring. It's a device he hopes can restore a critical sense and help the blind see again. It doesn't look like much — a miniature city of electronics attached to a microLED display just 2mm square — but it doesn't have toThe prosthesis he's showing off is known as the Science Eye, and once it's been proved safe and effective, it'll be implanted on top of, and inside, the eyeballs of human patients suffering from diseases where the eye's light-sensing cells have died. The idea is to coax other cells within the eye to receive and translate light signals. The device was unveiled as the biotech exited stealth on Nov. 21 last yeIt had been a busy morning for Hodak, but an air of quiet optimism suffused the Science facility during my visit. In the months since, the company's first scientific paper was uploaded to bioRxiv, a repository for preprint scientific articles, describing the extensive foundational work Science Corp. has undertaken, including demonstrating how its technology works in rabbits like Leela, and readying it for future trials to test its vision-restoring capabilit As I stand with Hodak outside the surgery, he runs through images on his laptop, pointing out the form factor of the Science Eye and how many pixels the team has been able to jam into the device's wafer-thin microLED. The number stands at of the kind o someone with a Science Eye might have. Red pixels dance around a screen, recapitulating a view of a street and a human waving their hands",
        post_id: 1,
        category: "Education",
        publication_date: "2023-05-14",
        featured: false,
        views: 5,
        likes: 2,
        dislikes: 1
    },
    {
        author_id: "100105303031333661985",
        url: "https://th.bing.com/th/id/R.35299cb86175563d42cacffbf5f88e3e?rik=%2bKMTofiIwr%2fxwQ&pid=ImgRaw&r=0",
        title: "Scientists discovered a surprising new brain circuit in mice that's making them rethink how humans may manage extreme stress",
        content: "Think about a time when you had to suddenly slam on the car brakes or got a long email from your boss first thing Monday morning.That sense of panic or feeling of overwhelm eventually dissipates, at which point you begin to see the situation more clearly — the construction down the road that brought traffic to a stop or the list of tasks in your boss's email you can start tackling one by one.In the past, focusing in a high-stress situation may have meant the difference between life or death — the ability to outsmart and escape a charging predator, for example. But scientists haven't had a strong grasp on what triggers that key transition from panic to focus. They thought the brain just needed some time for the neurotransmitter called noradrenaline — basically adrenaline for the brain — to dissipate.Then, a new study of stressed-out mouse brains revealed something entirely surprising: a never-before-seen brain circuit that channels noradrenaline to special brain cells called astrocytes.While the mice were stressed, researchers saw the astrocytes kick into high gear, helping the animals' brains relax and regulate the flood of overexcited neurons that contribute to Mouse brains are, of course, different from human brains. But human brains also contain astrocytes that may function in a similar way.",
        post_id: 2,
        category: "Education",
        publication_date: "2023-05-14",
        featured: true,
        views: 5,
        likes: 2,
        dislikes: 1
    },
    {
        author_id: "104928675914176513026",
        url: "https://www.dualdove.com/wp-content/uploads/2020/03/supermassive-black-hole-explosion.jpg",
        title: "A Massive Blue Hole Just Showed Up Near Mexico. New Lifeforms May Be Inside",
        content: "Scientists have released a study of their 2021 discovery of the world's second-deepest blue hole off the Mexican Yucatan Peninsula coAt about 900 feet deep, the blue hole find trails only one other in depth—the Dragon Hole in the South China SThe new blue hole features steep slopes forming a conic structure with the study of microbial diversity below an intriguing possibiliThe mysterious world of blue holes just got a bit more intriguing, thanks to the discovery of what is now considered the world's second-deepest blue hole. Guided by tips from fishermen, scientists from Colegio de le Frontera Sur explored a tropical estuary off the southeastern coast of the Yucatan Peninsula in Mexico and found a blue hole. It spans 147,000 square feet across and dips 900 feet down.The world's largest blue hole—the Dragon Hole in the South China Sea—isn't much deeper than this newly discovered one. It clocks in at about 980 feet deep. Unsurprisingly, the scientists names their new discovery the Taam ja' Blue Hole, using the Mayan language phrase for deep water.hile the new blue hole was discovered in 2021, the researchers only recently detailed their findings in a study published in Frontiers in Marine Science. With a circular opening near the surface, just 15 feet below sea level, the steep 80-degree-plus slopes form a large conic structure the scientists say is covered by biofilms, sediments, limestone, and gypsum ledges. Our knowledge of blue holes is limited by accessibility issues, sometimes due to opening being too small or the depths being so great, and sometimes due to limited oxygen in the water, making it dangerous to explore without specialized equipment. With the openings of blue holes being below sea level, the karst walls block tidal flows, creating a unique mixture of water properties within the hole. The study says that in the Taam ja' blue hole and hydrographic profiles show a layered water column with a low-oxygen layer atop a gas-heavy layer atop another layer with virtually no oxygehis gas-rich environments that fill with hydrogen sulfide don't destroy all life, but instead give a home to more extreme biology that finds comfort in oxygen-depleted areas. This unique mixture of water properties and biological life invites scientists to explore the depths of blue holes to learn more about their makeup and the life that can exist within.",
        post_id: 1,
        category: "Education",
        publication_date: "2023-05-14",
        featured: false,
        views: 5,
        likes: 2,
        dislikes: 1
    },
    {
        author_id: "",
        url: "https://upload.wikimedia.org/wikipedia/commons/6/68/A_Dog_Beggar_-_panoramio.jpg",
        title: "The Dogs of Chernobyl Are Experiencing Rapid Evolution, Study Suggests",
        content: "For decades, scientists have studied animals living in or near the Chernobyl Nuclear Power Plant to see how increased levels of radiation affect their health, growth, and evolutiA new study analyzed the DNA of 302 feral dogs living near the power plant, compared the animals to others living 10 miles away, and found remarkable differencWhile the study doesn’t prove that radiation is the cause of these differences, the data provides an important first step in analyzing these irradiated populations, and understanding how they compare to dogs living elsewOn April 26, 1986, the Chernobyl Nuclear Reactor in northern Ukraine—then part of the Soviet Union—exploded, sending a massive plume of radiation into the sky. Nearly four decades later, the Chernobyl Power Plant and many parts of the surrounding area remain uninhabited—by humans, at leastAnimals of all kinds have thrived in humanity’s absence. Living among radiation-resistant fauna are thousands of feral dogs, many of whom are descendants of pets left behind in the speedy evacuation of the area so many years ago. As the world’s greatest nuclear disaster approaches its 40th anniversary, biologists are now taking a closer look at the animals located inside the Chernobyl Exclusion Zone (CEZ), which is about the size of Yosemite National Park, and investigating how decades of radiation exposure may have altered animals’ genomes—and even, possibly, sped up evolutiScientists from the University of South Carolina and the National Human Genome Research Institute have begun examining the DNA of 302 feral dogs found in or around the CEZ to better understand how radiation may have altered their genomes. Their results were published in the journal Science Advances earlier this month. The idea of radiation speeding up natural evolution isn’t a new one. The practice of purposefully irradiating seeds in outer space to induce advantageous mutations, for example, is now a well-worn method for developing crops well-suited for a warming world.",
        post_id: 2,
        category: "Education",
        publication_date: "2023-05-14",
        featured: false,
        views: 5,
        likes: 2,
        dislikes: 1
    },
    {
        author_id: "",
        url: "https://i.pinimg.com/originals/3f/f6/b3/3ff6b37f886f2532c5a9a7edb7816ed6.jpg",
        title: "Yoshitomo Nara on Turning His Cute Characters into Art World Icons",
        content: "For decades, scientists have studied animals living in or near the Chernobyl Nuclear Power Plant to see how increased levels of radiation affect their health, growth, and evolutiA new study analyzed the DNA of 302 feral dogs living near the power plant, compared the animals to others living 10 miles away, and found remarkable differencWhile the study doesn’t prove that radiation is the cause of these differences, the data provides an important first step in analyzing these irradiated populations, and understanding how they compare to dogs living elsewOn April 26, 1986, the Chernobyl Nuclear Reactor in northern Ukraine—then part of the Soviet Union—exploded, sending a massive plume of radiation into the sky. Nearly four decades later, the Chernobyl Power Plant and many parts of the surrounding area remain uninhabited—by humans, at leastAnimals of all kinds have thrived in humanity’s absence. Living among radiation-resistant fauna are thousands of feral dogs, many of whom are descendants of pets left behind in the speedy evacuation of the area so many years ago. As the world’s greatest nuclear disaster approaches its 40th anniversary, biologists are now taking a closer look at the animals located inside the Chernobyl Exclusion Zone (CEZ), which is about the size of Yosemite National Park, and investigating how decades of radiation exposure may have altered animals’ genomes—and even, possibly, sped up evolutiScientists from the University of South Carolina and the National Human Genome Research Institute have begun examining the DNA of 302 feral dogs found in or around the CEZ to better understand how radiation may have altered their genomes. Their results were published in the journal Science Advances earlier this month. The idea of radiation speeding up natural evolution isn’t a new one. The practice of purposefully irradiating seeds in outer space to induce advantageous mutations, for example, is now a well-worn method for developing crops well-suited for a warming world.",
        post_id: 5,
        category: "Arts",
        publication_date: "2023-05-14",
        featured: false,
        views: 5,
        likes: 2,
        dislikes: 1
    },
    {
        author_id: "",
        url: "https://orlandoinformer.com/wp-content/uploads/2012/10/02-oi.jpg",
        title: "Unique Reasons Why I Love the Magic Kingdom",
        content: "When Walt Disney World is mentioned, the image that comes to mind is likely Cinderella Castle in the iconic Magic Kingdom. The first Park at Disney World Resort opened in 1971, so it’s hard not to fall in love with this Disney original. It is no accident that Magic Kingdom Park draws millions of visitors annually and is the picture of the American family vacation.After all, even popular sitcoms have taken their characters to Magic Kingdom on a Disney vacation over the years. The Magic Kingdom is so much more than a theme Park; it truly transports Guests into another world. From chowing down on a Dole Whip or visiting Tom Sawyer Island to riding Walt Disney’s Carousel of Progress, a day in Magic Kingdom Park is unmatched. But some reasons I love Disney’s Magic Kingdom may seem a bit odd. Here are some unique reasons why I love the Magic Kingxploring Ariel’s grotto or blowing through Pooh’s ride on a “very blustery day” allow Guests the opportunity to become part of the story and get to know their favorite characters in a new way. The Magic Kingdom takes Walt Disney movie memories to a new dimension for children and adults in the storybook rides. Soar with Peter Pan or ride the skies of Agrabah with Aladdin on The Magic Carpets Iconic Photo-OWe know you want that perfect Instagram photo on vacation. Who doesn’t love the photo opportunities at the Magic Kingdom?! Castle photos, character meets, and of course, photos with a smoked turkey leg, Dole Whip or Mickey Premium Ice Cream Bar are must-have Magic Kingdom photos.s your family part of a Disney Dynasty? If so, why not remember the magic of previous trips by recreating photos? Recreating family photos at the Magic Kingdom is always a fun way to update family albums and create more fun memories. Don’t forget about the iconic spots or poses in the Park. The Purple Wall, entrances to each land, wishing well near Cinderella Castle, or holding a Mickey balloon on Main Street, U.S.A., are all great ideas for that perfect picture!Magic Kingdom’s theming is incredible. Unlike other famous theme parks, details like Cast Member costuming immerse Guests in theming and stories. Every decision in Magic Kingdom was made deliberately, from the varying costumes of Cast Members across the Park and rides to the themed menus throughout the Park restaurants. The placement of each of the Park sectors is perfect for traffic flow, and seamless theming changes keep the magic flowing as Guests roam the Park.",
        post_id: 3,
        category: "Arts",
        publication_date: "2023-05-14",
        featured: false,
        views: 5,
        likes: 2,
        dislikes: 1
    },
    {
        author_id: "",
        url: "https://www.encantadaorlando.com/wp-content/uploads/2021/08/walt-disney-orlando-castle-c-900x600.jpg",
        title: "Like a Thief in the Night: Massive Piece of Cinderella Castle Missing",
        content: "Guests arriving at Magic Kingdom Park this week were shocked to discover a huge piece of Cinderella Castle missing, as if it had been taken by a thief in the middle of the night after Guests left for the evening. It’s a new week, and that means lots of Guests are just kicking off their spring vacations at the Walt Disney World Resort. Regular visitors to the Central Florida parks often celebrate the tradition of visiting a certain park on the first day of all of their trips, and for many, that park is Magic Kingdom.No one really knows why, as the reasons for choosing Magic Kingdom as the first-day park are as different as the Guests who walk through the gates of Disney World’s oldest park. Maybe it’s the excitement of the rides inspired by many of Disney’s classic animated films and the nostalgia Guests feel when they board their favorite classic attraction. Perhaps it’s the excitement of Main Street, U. S. A. that beckons Guests from the moment they pass through the tunnels at the Walt Disney World Railroad station. And maybe, just maybe, it’s simply the lure of Cinderella Castle herself. The most iconic structure in all of Disney World’s four theme parks–Magic Kingdom Park, EPCOT, Disney’s Hollywood Studios, and Disney’s Animal Kingdom–has a magic all her own. Though Cinderella Castle has endured several dress-ups and facelifts over her 50+ years, she remains constant, steadfast, and Guests can trust that every time they visit Magic Kingdom, Cinderella Castle–with her pink towers and brilliantly blue turrets will be there to serve as the backdrop for marriage proposals, family photos, and any number of magical moments in the park. This week, however, many have noticed something missing, something undeniably different and concerning, at the ever-constant castle. When Guests arrived in the park earlier this week, they noticed a huge piece of the castle missing, and if they didn’t know any better, they might have been sure the missing piece was swiped by a thief–perhaps a self-proclaimed Disney Parks super fan. But alas, such was not the case, though the missing piece is glaringly obvious.",
        post_id: 4,
        category: "Arts",
        publication_date: "2023-05-14",
        featured: true,
        views: 5,
        likes: 2,
        dislikes: 1
    },
    {
        author_id: "",
        url: "https://i.etsystatic.com/5458934/r/il/b22307/2261526543/il_fullxfull.2261526543_qtar.jpg",
        title: "DIVERSITY IN THE ART WORLD: WHERE ARE WE AT NOW AND WHAT’S BEING DONE?",
        content: "As long as the art world has been bastion for self-expression and radical system-challenging, the structures that make it up have often been exclusionary and narrow-minded. Part of the work of the current fight against injustice is to examine the country’s most enduring fixtures- like art museums- and force the systemic hang-ups that’s baked into them to bubble up to the surface. The question of diversity isn’t a new one in the art world, but in the current moment, these conversations have made themselves urgent, and the numbers are still disturbingly grim.In March 2019 a group of researchers published a study at the Public Library of Science that surveyed eighteen of the most respected museums in America (like LACMA and the Met), and found that work by Black artists only made up 1.2 percent of their collections despite making up 13 percent of the population, according to the 2019 census. Works by Asian artists only totaled 9 percent of the collections, and Hispanic and Latinx artists only about 3 percent, despite comprising 18 percent of the population. It is worth noting that this study relies on public information about artists, and while the data was peer reviewed, racial and ethnic identity is often personal, thus not always accurately guessable. In any case, the numbers show marked lack of progress when it comes to representation. The National Endowment for the Arts’ 2019 study, “Artists and Other Cultural Workers: A Statistical Portrait,” also provided a comprehensive picture of what working in the art world looks like. They uncovered that from 2012 to 2016, non-white or Hispanic made up nearly 36 percent of the U.S. workforce, but only 25 percent of the artist workforce.",
        post_id: 3,
        category: "Arts",
        publication_date: "2023-05-14",
        featured: false,
        views: 5,
        likes: 2,
        dislikes: 1
    },
    {
        author_id: "",
        url: "https://homeschoolhideout.com/wp-content/uploads/2019/01/artappreciationfb-600x314.jpg",
        title: "Can Art Appreciation Be Taught? 5 Tips That Can Help",
        content: "Each person’s perception of art differs, and there is no one-size-fits-all approach to art appreciation. It is a good idea to start with art books or magazines. Every year, art galleries and museums across the country offer free or reduced-price admission to a variety of art exhibitions. People argue that visual art is a type of art that combines the creative process with an appreciation for beauty and order. Visual art, in some ways, can be thought of as pieces that are intended to provoke the viewer’s interest. One of the drawbacks of online art appreciation is that there aren’t many online platforms that provide access to galleries, the ability to communicate with artists, and the ability to support and advocate for artists. Individual decision: What level of art is difficult for an individual to achieve?The following factors should be considered in order for you to consider whether or not history of art is an easy A level topic to learn. Students can learn about and appreciate the art form through a variety of online resources. Depending on your level of art appreciation and experience, you may need to adapt your methods. Reading art reviews, watching art videos, and taking part in art discussion boards are just a few examples of popular ways to engage in art discussion. You can improve your critical thinking skills and learn about art history if you become more interested in art. Learning how to appreciate online art will vary depending on one’s level of education and art knowledge. In addition to studying art history, finding online art resources, and attending art events, you can also attend art shows.",
        post_id: 2,
        category: "Arts",
        publication_date: "2023-05-14",
        featured: false,
        views: 5,
        likes: 2,
        dislikes: 1
    },
    {
        author_id: "",
        url: "https://th.bing.com/th/id/OIP.8iyDEAnD1vYgFr1XWhkYjgHaFj?pid=ImgDet&rs=1",
        title: "Elon Musk says work from home is 'bull**it' and 'morally wrong'",
        content: "Elon Musk has thoughts about work from home. Many, many thoughts.The CEO of Tesla, SpaceX, and Twitter shared them all in an interview with CNBC, leaving no doubt as to where his stance on working from home is.I'm a big believer that people are more productive when they're in person, said Musk, before bringing Marie Antoinette, the last queen of France, into the discussion.The whole notion of work from home is a bit like the fake Marie Antoinette quote, let them eat cake. It's like, really? You're gonna work from home, and you're gonna make everyone else, who made you car, come work in the factory (...) the people that come fix your house, they can't work from home, but you can? Does that seem morally right? That's messed up,said Musk.Each person’s perception of art differs, and there is no one-size-fits-all approach to art appreciation. It is a good idea to start with art books or magazines. Every year, art galleries and museums across the country offer free or reduced-price admission to a variety of art exhibitions. People argue that visual art is a type of art that combines the creative process with an appreciation for beauty and order. Visual art, in some ways, can be thought of as pieces that are intended to provoke the viewer’s interest. One of the drawbacks of online art appreciation is that there aren’t many online platforms that provide access to galleries, the ability to communicate with artists, and the ability to support and advocate for artists. Individual decision: What level of art is difficult for an individual to achieve?The following factors should be considered in order for you to consider whether or not history of art is an easy A level topic to learn. Students can learn about and appreciate the art form through a variety of online resources. Depending on your level of art appreciation and experience, you may need to adapt your methods. Reading art reviews, watching art videos, and taking part in art discussion boards are just a few examples of popular ways to engage in art discussion. You can improve your critical thinking skills and learn about art history if you become more interested in art. Learning how to appreciate online art will vary depending on one’s level of education and art knowledge. In addition to studying art history, finding online art resources, and attending art events, you can also attend art shows.",
        post_id: 2,
        category: "Business",
        publication_date: "2023-05-14",
        featured: false,
        views: 5,
        likes: 2,
        dislikes: 1
    },
    {
        author_id: "",
        url: "https://cdn.geekwire.com/wp-content/uploads/2020/02/Image-from-iOS-9-scaled.jpg",
        title: "Google will delete inactive accounts this yearElon Musk says work from home is 'bull**it' and 'morally wrong'",
        content: "If an account hasn’t been used for an extended period of time, it is more likely to be compromised,Google said in a statement(opens in a new tab).This is because forgotten or unattended accounts often rely on old or re-used passwords that may have been compromised, haven't had two factor authentication set up, and receive fewer security checks by the user.Starting in December, Google may delete an account if it hasn't been used or logged-into during the last two years. That means it would wipe everything in the account, including content within Google Workspace (Gmail, Docs, Drive, Meet, Calendar), YouTube, and Google Photos.SEE ALSO: All the AI announcements from Google I/O 2023, art galleries and museums across the country offer free or reduced-price admission  and experience, you may need to adapt your methods. Reading art reviews, watching art videos, and taking part in art discussion boards are just a few examples of popular ways to engage in art discussion. You can improve your critical thinking skills and learn about art history if you become more interested in art. Learning how to appreciate online art will vary depending on one’s level of education and art knowledge. In addition to studying art history, finding online art resources, and attending art events, you can also attend art shows.",
        post_id: 2,
        category: "Business",
        publication_date: "2023-05-14",
        featured: false,
        views: 5,
        likes: 2,
        dislikes: 1
    },
    {
        author_id: "",
        url: "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/6TJI6GIXVJM4HHWYVNIYXRKS5E.jpg",
        title: "We may already know who Twitter's new CEO is",
        content: "Elon Musk has thoughts about work from home. Many, many thoughts.The CEO of Tesla, SpaceX, and Twitter shared them all in an interview with CNBC, leaving no doubt as to where his stance on working from home is.I'm a big believer that people are more productive when they're in person, said Musk, before bringing Marie Antoinette, the last queen of France, into the discussion.The whole notion of work from home is a bit like the fake Marie Antoinette quote, let them eat cake. It's like, really? You're gonna work from home, and you're gonna make everyone else, who made you car, come work in the factory (...) the people that come fix your house, they can't work from home, but you can? Does that seem morally right? That's messed up,said Musk.Each person’s perception of art differs, and there is no one-size-fits-all approach to art appreciation. It is a good idea to start with art books or magazines. Every year, art galleries and museums across the country offer free or reduced-price admission to a variety of art exhibitions. People argue that visual art is a type of art that combines the creative process with an appreciation for beauty and order. Visual art, in some ways, can be thought of as pieces that are intended to provoke the viewer’s interest. One of the drawbacks of online art appreciation is that there aren’t many online platforms that provide access to galleries, the ability to communicate with artists, and the ability to support and advocate for artists. Individual decision: What level of art is difficult for an individual to achieve?The following factors should be considered in order for you to consider whether or not history of art is an easy A level topic to learn. Students can learn about and appreciate the art form through a variety of online resources. Depending on your level of art appreciation and experience, you may need to adapt your methods. Reading art reviews, watching art videos, and taking part in art discussion boards are just a few examples of popular ways to engage in art discussion. You can improve your critical thinking skills and learn about art history if you become more interested in art. Learning how to appreciate online art will vary depending on one’s level of education and art knowledge. In addition to studying art history, finding online art resources, and attending art events, you can also attend art shows.",
        post_id: 2,
        category: "Business",
        publication_date: "2023-05-14",
        featured: false,
        views: 5,
        likes: 2,
        dislikes: 1
    },
    {
        author_id: "",
        url: "https://th.bing.com/th/id/OIP.zrxYq8JNhOpDd_VQ-v80XQHaE7?pid=ImgDet&rs=1",
        title: "This Google AI keynote could have been a Gmail may already know who Twitter's new CEO is",
        content: "Elon Musk has thoughts about work from home. Many, many thoughts.The CEO of Tesla, SpaceX, and Twitter shared them all in an interview with CNBC, leaving no doubt as to where his stance on working from home is.I'm a big believer that people are more productive when they're in person, said Musk, before bringing Marie Antoinette, the last queen of France, into the discussion.The whole notion of work from home is a bit like the fake Marie Antoinette quote, let them eat cake. It's like, really? You're gonna work from home, and you're gonna make everyone else, who made you car, come work in the factory (...) the people that come fix your house, they can't work from home, but you can? Does that seem morally right? That's messed up,said Musk.Each person’s perception of art differs, and there is no one-size-fits-all approach to art appreciation. It is a good idea to start with art books or magazines. Every year, art galleries and museums across the country offer free or reduced-price admission to a variety of art exhibitions. People argue that visual art is a type of art that combines the creative process with an appreciation for beauty and order. Visual art, in some ways, can be thought of as pieces that are intended to provoke the viewer’s interest. One of the drawbacks of online art appreciation is that there aren’t many online platforms that provide access to galleries, the ability to communicate with artists, and the ability to support and advocate for artists. Individual decision: What level of art is difficult for an individual to achieve?The following factors should be considered in order for you to consider whether or not history of art is an easy A level topic to learn. Students can learn about and appreciate the art form through a variety of online resources. Depending on your level of art appreciation and experience, you may need to adapt your methods. Reading art reviews, watching art videos, and taking part in art discussion boards are just a few examples of popular ways to engage in art discussion. You can improve your critical thinking skills and learn about art history if you become more interested in art. Learning how to appreciate online art will vary depending on one’s level of education and art knowledge. In addition to studying art history, finding online art resources, and attending art events, you can also attend art shows.",
        post_id: 2,
        category: "Business",
        publication_date: "2023-05-14",
        featured: false,
        views: 5,
        likes: 2,
        dislikes: 1
    },
    {
        author_id: "",
        url: "https://th.bing.com/th/id/R.a7a1ccbfcf00b76930c488acb6dcfefd?rik=nRTzzMvhDqM%2bwg&pid=ImgRaw&r=0",
        title: "Peugeot’s “Inception” concept car introduces electronic steering — Future Blink Google AI keynote could have been a Gmail may already know who Twitter's new CEO is",
        content: "Elon Musk has thoughts about work from home. Many, many thoughts.The CEO of Tesla, SpaceX, and Twitter shared them all in an interview with CNBC, leaving no doubt as to where his stance on working from home is.I'm a big believer that people are more productive when they're in person, said Musk, before bringing Marie Antoinette, the last queen of France, into the discussion.The whole notion of work from home is a bit like the fake Marie Antoinette quote, let them eat cake. It's like, really? You're gonna work from home, and you're gonna make everyone else, who made you car, come work in the factory (...) the people that come fix your house, they can't work from home, but you can? Does that seem morally right? That's messed up,said Musk.Each person’s perception of art differs, and there is no one-size-fits-all approach to art appreciation. It is a good idea to start with art books or magazines. Every year, art galleries and museums across the country offer free or reduced-price admission to a variety of art exhibitions. People argue that visual art is a type of art that combines the creative process with an appreciation for beauty and order. Visual art, in some ways, can be thought of as pieces that are intended to provoke the viewer’s interest. One of the drawbacks of online art appreciation is that there aren’t many online platforms that provide access to galleries, the ability to communicate with artists, and the ability to support and advocate for artists. Individual decision: What level of art is difficult for an individual to achieve?The following factors should be considered in order for you to consider whether or not history of art is an easy A level topic to learn. Students can learn about and appreciate the art form through a variety of online resources. Depending on your level of art appreciation and experience, you may need to adapt your methods. Reading art reviews, watching art videos, and taking part in art discussion boards are just a few examples of popular ways to engage in art discussion. You can improve your critical thinking skills and learn about art history if you become more interested in art. Learning how to appreciate online art will vary depending on one’s level of education and art knowledge. In addition to studying art history, finding online art resources, and attending art events, you can also attend art shows.",
        post_id: 2,
        category: "Business",
        publication_date: "2023-05-14",
        featured: false,
        views: 5,
        likes: 2,
        dislikes: 1
    },


];

// Insert sample data into users collection
const result = db.BlogPosts.insertMany(posts);
