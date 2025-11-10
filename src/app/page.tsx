import Link from "next/link";
import MythAccordion from "@/components/MythAccordion";
import { introBlurb, misconceptionParagraphs, myths } from "@/content/myths";
import { resources } from "@/content/resources";

const HERO_IMAGES = {
  // Unsplash conceptual head-with-maze (license free to use)
  hero: "https://images.unsplash.com/photo-1719150036268-9f2b7a2f6c6d?q=80&w=1600&auto=format&fit=crop",
  // CC0 backup SVG (Public Domain)
  backupSvg: "https://freesvg.org/img/brain-silhouette.png",
};

export default function Page() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        <div
          className="absolute inset-0 opacity-10"
          style={{ 
            backgroundImage: `url(${HERO_IMAGES.hero})`, 
            backgroundSize: "cover", 
            backgroundPosition: "center" 
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-5xl px-6 py-20 sm:py-28">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
            Debunking The Myths:<br />
            <span className="text-teal-600">Clear Facts About OCD</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg sm:text-xl text-slate-700 leading-relaxed">
            A calm, evidence-based overview to separate facts from misconceptions. 
            Built for a university project; strictly educational.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a 
              href="#myths" 
              className="rounded-xl px-6 py-3 bg-teal-600 text-white font-medium hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 transition-all hover:scale-[1.03] shadow-md hover:shadow-lg"
            >
              Explore Myths
            </a>
            <Link 
              href="/treatment-options" 
              className="rounded-xl px-6 py-3 border-2 border-slate-300 text-slate-700 font-medium hover:bg-slate-50 hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 transition-all"
            >
              Treatment Options
            </Link>
            <Link 
              href="/sources" 
              className="rounded-xl px-6 py-3 border-2 border-slate-300 text-slate-700 font-medium hover:bg-slate-50 hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 transition-all"
            >
              See Sources
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
        <div className="prose prose-slate prose-lg max-w-none">
          <p className="text-lg leading-relaxed text-slate-700 whitespace-pre-line">{introBlurb}</p>
          
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mt-12 mb-6">
            Here are some common misconceptions often spread by the media:
          </h2>
          
          {misconceptionParagraphs.map((para, i) => (
            <p key={i} className="text-lg leading-relaxed text-slate-700 mb-6">
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* Myths vs Facts Section */}
      <section id="myths" className="mx-auto max-w-5xl px-6 py-12 sm:py-16 scroll-mt-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
          Myth vs Fact — Myth Busting Obsessive-Compulsive Disorder
        </h2>
        <p className="text-lg text-slate-600 mb-8">
          Click on each myth to reveal the facts and supporting sources.
        </p>
        <MythAccordion items={myths} />
      </section>

      {/* Resources Section */}
      <section className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
        <div className="rounded-2xl border-2 border-slate-200 p-8 bg-gradient-to-br from-slate-50 to-teal-50/30">
          <h3 className="text-2xl font-semibold text-slate-900 mb-4">
            Need help or more information?
          </h3>
          <p className="text-lg text-slate-700 mb-6">
            See the <Link href="/sources" className="underline text-teal-600 hover:text-teal-700 font-medium">full source list</Link> and the resources below.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            {resources.map((resource) => (
              <div key={resource.name} className="bg-white p-5 rounded-lg shadow-sm border border-slate-200">
                <h4 className="font-semibold text-slate-900 text-lg mb-3">{resource.name}</h4>
                <div className="text-sm text-slate-600 space-y-2">
                  {resource.email && (
                    <p className="flex items-start gap-2">
                      <span className="font-medium">Email:</span>
                      <a 
                        href={`mailto:${resource.email}`} 
                        className="text-teal-600 hover:text-teal-700 underline break-all"
                      >
                        {resource.email}
                      </a>
                    </p>
                  )}
                  {resource.phone && (
                    <p className="flex items-start gap-2">
                      <span className="font-medium">Phone:</span>
                      <a 
                        href={`tel:${resource.phone.replace(/\D/g, '')}`} 
                        className="text-teal-600 hover:text-teal-700 underline"
                      >
                        {resource.phone}
                      </a>
                    </p>
                  )}
                  {resource.address !== "—" && (
                    <p className="text-xs text-slate-500 mt-2">{resource.address}</p>
                  )}
                  <a 
                    href={resource.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-teal-600 hover:text-teal-700 underline text-sm font-medium"
                  >
                    Visit website →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
