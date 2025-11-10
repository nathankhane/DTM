import { sources } from "@/content/sources";

export default function SourcesPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
      <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
        Sources
      </h1>
      <p className="text-lg text-slate-600 mb-10">
        All sources cited throughout this educational resource. Click any link to view the original material.
      </p>
      
      <div className="bg-slate-50 rounded-xl border border-slate-200 p-8">
        <ol className="list-decimal pl-6 space-y-5">
          {sources.map((s, i) => (
            <li 
              key={s.id} 
              id={s.id}
              className="text-slate-700 leading-relaxed scroll-mt-24"
            >
              <a 
                className="text-teal-600 hover:text-teal-700 underline font-medium text-lg" 
                href={s.url} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {s.label}
              </a>
              <div className="mt-1 text-sm text-slate-500 break-all">
                {s.url}
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-10 p-6 bg-blue-50 rounded-xl border border-blue-200">
        <h2 className="text-lg font-semibold text-slate-900 mb-2">
          About These Sources
        </h2>
        <p className="text-slate-700 leading-relaxed">
          These sources were carefully selected from reputable medical institutions, 
          peer-reviewed publications, and established OCD advocacy organizations. 
          All information presented on this site is based on these vetted sources 
          and is intended for educational purposes only.
        </p>
      </div>

      <div className="mt-8 text-center">
        <a 
          href="#top" 
          className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium"
        >
          ↑ Back to top
        </a>
      </div>
    </div>
  );
}

