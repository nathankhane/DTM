export type Source = { id: string; label: string; url: string };

// IDs are stable anchors used for footnotes on myths/facts
export const sources: Source[] = [
  { id: "Diena2023", label: "Diena, Y. (2023). 51 OCD statistics", url: "https://www.ambitionsaba.com/resources/ocd-statistics" },
  { id: "JeffersonMisconceptions", label: "5 Common Misconceptions About OCD | Jefferson Health (n.d.)", url: "https://www.jeffersonhealth.org/your-health/living-well/common-misconceptions-about-ocd" },
  { id: "Chackes2018", label: "Chackes, L. (2018). Five Myths About OCD", url: "https://mindfulstl.com/five-myths-about-ocd/" },
  { id: "DermNet2023", label: "DermNet (2023). Compulsive hand washing", url: "https://dermnetnz.org/topics/compulsive-hand-washing" },
  { id: "OCDUK", label: "What are compulsions? | OCD-UK (n.d.)", url: "https://www.ocduk.org/ocd/compulsions/" },
  { id: "Lear2021", label: "Lear, K. (2021). Does childhood OCD go away?", url: "https://www.katielear.com/child-therapy-blog/2021/7/10/does-childhood-ocd-go-away" },
  { id: "UofUtah2024b", label: "Obsessive-Compulsive Disorder (OCD). (2024b). Univ. of Utah Health", url: "https://healthcare.utah.edu/hmhi/conditions/obsessive-compulsive-disorder" },
  { id: "ClevelandClinic2025", label: "Obsessive-Compulsive Disorder (OCD). (2025). Cleveland Clinic", url: "https://my.clevelandclinic.org/health/diseases/9490-ocd-obsessive-compulsive-disorder" },
  { id: "NHSWebsite2025", label: "Website, N. (2025). Symptoms - OCD | nhs.uk", url: "https://www.nhs.uk/mental-health/conditions/obsessive-compulsive-disorder-ocd/symptoms/" },
  { id: "IOCDF2014", label: "International OCD Foundation (2014). Families: What can I do to help?", url: "https://iocdf.org/expert-opinions/expert-opinion-families-what-you-can-do-to-help/" },
  { id: "StopOCD", label: "Contact | StopOCD.com", url: "https://www.stopocd.com/contact/feedback" },
  { id: "NOCD", label: "NOCD — OCD Therapists near you", url: "https://www.treatmyocd.com/ocd_therapy_nocd" },
  { id: "FHEHealth", label: "Mental health rehab at FHE Health", url: "https://fherehab.com/mental-health-lp/" },
  // Treatment page sources:
  { id: "AAFP2015", label: "American Family Physician (2015). OCD treatment efficacy & prevalence", url: "https://www.aafp.org/pubs/afp/issues/2015/1115/p896.html" },
  { id: "APA_Psychiatry", label: "APA (psychiatry.org). What is OCD", url: "https://www.psychiatry.org/patients-families/obsessive-compulsive-disorder/what-is-obsessive-compulsive-disorder" },
];

// Convenience map: numeric index for footnotes
export const sourceIndex = Object.fromEntries(sources.map((s, i) => [s.id, i + 1]));

