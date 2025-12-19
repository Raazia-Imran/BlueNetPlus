import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  Cpu,
  Microscope,
  Anchor,
  Gavel,
  TrendingUp,
  Users,
} from "lucide-react";

export default function Academy() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FDFCF8] animate-fade-in">
      {/* 1. HERO SECTION (Ocean Data Style) */}
      <div className="relative bg-[#0a192f] text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a192f] via-[#102a43] to-[#004e92] opacity-90"></div>
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-600/30 rounded-full mix-blend-overlay filter blur-3xl animate-blob" />
          <div className="absolute -bottom-32 left-[20%] w-96 h-96 bg-cyan-500/20 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
            <GraduationCap className="w-6 h-6 text-indigo-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            HarvestWise Blue Skills Academy
          </h1>
          <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            Shaping Pakistan’s Next-Generation Maritime Workforce. We equip
            youth, women, and professionals with future-ready skills to drive
            the Blue Economy.
          </p>
          <Button
            size="lg"
            className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-full px-8 font-semibold shadow-lg shadow-indigo-500/20"
            onClick={() => navigate("/membership")}
          >
            Join Waitlist / Register Interest
          </Button>
        </div>
      </div>

      {/* 2. MAIN CONTENT */}
      <div className="container mx-auto px-4 py-20">
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">
              Blue Skills Tracks
            </h2>
            <p className="text-slate-600 mt-2">
              Specialized curriculum for the modern ocean economy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <TrackCard
              icon={<Cpu className="w-8 h-8 text-blue-500" />}
              title="Blue Tech"
              desc="AI, sensors, GIS, drones, and marine robotics."
            />
            <TrackCard
              icon={<Microscope className="w-8 h-8 text-teal-500" />}
              title="Blue Science"
              desc="Oceanography, ecology, climatology, and research."
            />
            <TrackCard
              icon={<Anchor className="w-8 h-8 text-indigo-500" />}
              title="Blue Economy"
              desc="Ports, shipping, fisheries, and logistics management."
            />
            <TrackCard
              icon={<Gavel className="w-8 h-8 text-slate-500" />}
              title="Blue Governance"
              desc="Policy, climate law, marine planning, and compliance."
            />
            <TrackCard
              icon={<TrendingUp className="w-8 h-8 text-[#FF7F50]" />}
              title="Blue Business"
              desc="Startups, seaweed, aquaculture, and tourism."
            />
            <TrackCard
              icon={<Users className="w-8 h-8 text-green-500" />}
              title="Community Leadership"
              desc="Women & Youth empowerment in coastal zones."
            />
          </div>
        </div>

        {/* Impact Section */}
        <div className="bg-[#001E2B] rounded-3xl p-12 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/50 to-transparent" />
          <div className="relative z-10 grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Training Methodology</h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-teal-400 rounded-full" /> Hands-on
                  workshops & field labs
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-teal-400 rounded-full" /> Virtual
                  learning + hybrid classes
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-teal-400 rounded-full" /> Industry
                  internships & port visits
                </li>
              </ul>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold mb-6">Impact Goals</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-bold text-teal-400 mb-1">
                    10,000+
                  </div>
                  <div className="text-sm text-slate-400 uppercase tracking-wider">
                    Professionals Trained
                  </div>
                </div>
                <div className="w-full h-px bg-white/10" />
                <div>
                  <div className="text-4xl font-bold text-[#FF7F50] mb-1">
                    Global
                  </div>
                  <div className="text-sm text-slate-400 uppercase tracking-wider">
                    Market Competitiveness
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TrackCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-indigo-100 transition-all hover:-translate-y-1 group">
      <div className="mb-6 p-3 bg-slate-50 rounded-xl w-fit group-hover:bg-indigo-50 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{desc}</p>
    </div>
  );
}
