export type MythItem = { myth: string; fact: string; cites: string[] };

export const introBlurb: string = `Misinformation regarding OCD & cited sources: 

In recent times, roughly 1.2 % of U.S. adults were diagnosed with OCD. This is equivalent to roughly 2.5 million individuals. Considering that this is deemed a relatively common and destructive disorder, it is crucial that the majority have an understanding of the struggles faced by the ones diagnosed (Diena, 2023).`;

export const misconceptionParagraphs: string[] = [
  `Everyone has a little bit of OCD. Often, when people have organized and cleaning tendencies, they relate this to the disorder. This claim is damaging to the sufferers, as they may feel that their symptoms are "typical" or nothing major to be concerned about. Many people may stick to this concept that it is a personality trait and therefore not seek the help they need.`,
  
  `OCD involves being a "neat freak" and simply liking aesthetics. Several people do not know that lining up items neatly and gaining satisfaction from doing so is not an OCD disorder. OCD involves obsessions and compulsions that result from distressful thoughts. Rather, obsessions may pose a threat or extreme danger in the Individual's mind, and compulsions are often an act done to prevent harm or seek comfort in these times of distress. These acts are usually repeatably done and form a routine that establishes a sense of safety for the sufferer. For example, someone with OCD may repeatedly check that their doors are locked to ensure that the worst-case scenario will not occur; this repetitive nature is often seen even when the sufferer logically knows that they have already done the act multiple times. This is just one example, but obsessions and compulsions will look different depending on the individual (5 Common Misconceptions About OCD | Jefferson Health, n.d.).`,
  
  `People with OCD just have typical anxiety, and it can easily be managed with willpower. This statement is incorrect for several reasons. One, anxiety faced by a neurotypical individual regarding regular life stressors is not equivalent to the distress that comes with OCD. Two, treatment is available for this disorder, but it does not rely simply on an individual's "willpower" to recover. Someone with OCD cannot simply "get over" or stop their behavior. Research shows that they can learn awareness and management of the disorder through various therapy practices and medications.  Exposure and response prevention is a treatment often used by cognitive behavioral therapists to aid in recovery. It is important to  note that OCD will not completely go away, which can be disheartening. But, with proper treatment, symptoms will become manageable and much less distressing, allowing sufferers to live a mostly normal life (Chackes, 2018).`
];

export const myths: MythItem[] = [
  {
    myth: "Myth: Everyone has a little OCD; it is nothing to worry about!",
    fact: "Fact: While some people may be more organized and likely to clean, this is not OCD. Rather, it involves obsessions and compulsive behaviors that cause great distress and even harm to the sufferer. An example of an obsession may be cleanliness, but this becomes extremely excessive to the person involved. Repeated hand washing is a compulsion or ritual often seen within the sufferer. In some cases, repeated behavior may result in physical harm. Specifically, excessive hand washing can result in extremely dry and sensitive skin (DermNet, 2023).",
    cites: ["DermNet2023"]
  },
  {
    myth: "Myth: Compulsions only involve cleanliness and the need to wash your hands.",
    fact: "Fact: While this behavior has been seen in several individuals with cleanliness related to OCD, it is not the only compulsion. Some other examples include skin picking, avoidance of feared places, mental rituals like checking or counting, avoidance of objects deemed unsafe, hoarding, and more. Compulsions can be very specific to the person involved and their fears. It is important to note that not everyone with OCD will experience all of these, and several others are missing from the list (What Are Compulsions? | OCD-UK, n.d.).",
    cites: ["OCDUK"]
  },
  {
    myth: "Myth: You will grow out of it; it is an age thing.",
    fact: "Fact: OCD symptoms typically show up in one's youth, merging into early adulthood. Meaning, several children struggle with the debilitating symptoms of the condition. Most go undiagnosed without the proper help from a licensed therapist. While OCD will never completely go away, it can be managed through CBT techniques and coping strategies. When you first become aware of the signs, in your child or yourself, this is when to reach out; but it is never too late to get help. Age does not simply get rid of the condition, which is the case for several mental health conditions. Instead of thinking of OCD as something to be cured, think of its patterns and how to ease the individual involved. The common symptoms and intensity of them come in waves. Some days will be better than others, so learning to patiently observe the signs and utilize coping strategies is the most effective method (Lear, 2021).",
    cites: ["Lear2021"]
  },
  {
    myth: "Myth: OCD is just a part of anxiety.",
    fact: "Fact: OCD is not an anxiety disorder. While persistent symptoms often result in high anxiety, the criteria of the disorder do not perfectly match that of a generalized anxiety disorder. OCD involves intrusive thoughts influenced by fear, and they are followed by compulsive behaviors or routines. These compulsions offer temporary relief to the sufferer and are often repeatedly performed. Generalized anxiety disorder does not show this same pattern (Obsessive-Compulsive Disorder (OCD), 2024b).",
    cites: ["UofUtah2024b"]
  },
  {
    myth: "Myth: Everyone is obsessed with something at some point",
    fact: "Fact: While many people may claim to be \"obsessed\" with something or someone throughout life, this is not the same as the obsessions of OCD. For the diagnosed, these obsessions take over the mind and convince the individual that something extreme or harmful will happen. Extreme worry and feelings of paranoia can overwhelm them, further affecting everyday life (Obsessive-Compulsive Disorder (OCD), 2025).",
    cites: ["ClevelandClinic2025"]
  },
  {
    myth: "Myth: It is not a big deal; you're just worried about small or irrational things.",
    fact: "Fact: Some people with OCD have reported fears based on harming another or themselves, contracting deadly diseases, and other frightening acts of violence and danger.  They may be worried if these acts will be performed on them, or that they will accidentally harm another. Everyone will experience intrusive thoughts, but the fears in OCD are much more intense and persistent. The duration of which they last, and the intensity level will give a therapist more insight into the patient's proper diagnosis (Website, 2025).",
    cites: ["NHSWebsite2025"]
  },
  {
    myth: "Myth: OCD can't be helped",
    fact: "Fact: Anyone who suffers from OCD deserves proper care. While access and ability may look different for everyone, there are several methods one can use to make their OCD mind look a little less hectic. As a family member or loved one that knows someone with the diagnosis, you can become educated about the illness, help them find professional guidance, and learn appropriate ways to handle someone that refuses treatment (International OCD Foundation, 2014).  Here is a list of resources that specialize in OCD treatment and care: NOCD- 225 N Michigan Suite 1430 Chicago, IL, 60601 care@nocdhelp.com Fax: 224-204-9089 — FHEHealth- 504 S Federal Hwy Deerfield Beach, FL 33441, (877) 621-4144 — StopOCD- 2025 stopocd.com, contact: support@stopocd.com — These are just a few examples of programs that focus on OCD treatment, but most therapists will provide services for those struggling. Do not be afraid to reach out! They are here for you and your wellbeing.",
    cites: ["IOCDF2014","NOCD","FHEHealth","StopOCD"]
  },
];

