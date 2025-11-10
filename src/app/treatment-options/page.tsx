import Link from "next/link";
import { sourceIndex } from "@/content/sources";

export default function TreatmentOptions() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
      <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
        Treatment Options
      </h1>
      
      <div className="mt-4 mb-8 flex flex-wrap gap-4 text-sm">
        <a 
          className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 underline font-medium" 
          href="https://www.aafp.org/pubs/afp/issues/2015/1115/p896.html" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          AAFP article →
        </a>
        <a 
          className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 underline font-medium" 
          href="https://www.psychiatry.org/patients-families/obsessive-compulsive-disorder/what-is-obsessive-compulsive-disorder" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          APA (psychiatry.org) →
        </a>
      </div>

      <div className="prose prose-slate prose-lg max-w-none">
        <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
          Treatment Efficacy and Prevalence
        </h2>
        
        <ol className="space-y-4 text-lg leading-relaxed text-slate-700">
          <li>
            <strong>CBT:</strong> Specifically, Exposure and Response Prevention (ERP) is the most effective form in reducing symptoms as compared to medication alone. For patients without severe depression/anxiety. Longer, frequent sessions are most recommended.
          </li>
          <li>
            <strong>SSRIs</strong> can produce effects in 6-13 weeks. Relatively low rate and not as commonly prescribed.
            <br />
            <span className="ml-6 block mt-2">a. Ex. Fluoxetine, sertraline, citalopram</span>
          </li>
          <li>
            <strong>Combination of CBT with SSRIs or other antidepressants (clomipramine):</strong> often more effective than one modality. Medications can produce non desirable side effects.
          </li>
        </ol>

        <p className="text-lg leading-relaxed text-slate-700 mt-6">
          Goal of treatment is not always to completely remove the obsessions and compulsions, but rather to help those with the condition learn to manage these thoughts.
        </p>

        <h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4">
          Medication Specificities
        </h2>
        
        <p className="text-lg leading-relaxed text-slate-700">
          Antidepressant doses are often higher in OCD patients than depression patients to produce an effect. May take 6-12 weeks of consistent treatment to see results.
        </p>
        
        <p className="text-lg leading-relaxed text-slate-700">
          May produce side effects, including nausea, insomnia, or cardiac effects.
        </p>
        
        <p className="text-lg leading-relaxed text-slate-700">
          Treatment resistance, though rare, may occur and require a new medication or the addition of an antipsychotic.
        </p>
      </div>

      <div className="mt-12 p-6 bg-slate-50 rounded-xl border border-slate-200">
        <p className="text-sm text-slate-600">
          <span className="font-semibold text-slate-800">References:</span>{" "}
          <Link 
            href={`/sources#AAFP2015`} 
            className="text-teal-600 hover:text-teal-700 underline"
          >
            [{sourceIndex["AAFP2015"]}]
          </Link>
          {", "}
          <Link 
            href={`/sources#APA_Psychiatry`} 
            className="text-teal-600 hover:text-teal-700 underline"
          >
            [{sourceIndex["APA_Psychiatry"]}]
          </Link>
        </p>
      </div>

      <div className="mt-8 p-6 bg-teal-50 rounded-xl border-2 border-teal-200">
        <p className="text-sm text-slate-700 italic">
          <strong>Important:</strong> This information is for educational purposes only. 
          Always consult with a qualified healthcare professional for personalized treatment recommendations.
        </p>
      </div>
    </div>
  );
}

