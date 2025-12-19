import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Briefcase,
  Anchor,
  Ship,
  Search,
  Gavel,
  Leaf,
  LifeBuoy,
  CheckCircle,
} from "lucide-react";

export default function Marketplace() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FDFCF8] animate-fade-in">
      {/* 1. HERO SECTION (Ocean Data Style) */}
      <div className="relative bg-[#0a192f] text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a192f] via-[#102a43] to-[#004e92] opacity-90"></div>
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-teal-500/20 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute -bottom-32 left-[20%] w-96 h-96 bg-cyan-500/20 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
            <Briefcase className="w-6 h-6 text-teal-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Maritime Services Marketplace
          </h1>
          <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            Your One-Stop Platform for Ocean & Maritime Solutions. Connect with
            verified professionals, trusted providers, and industry experts.
          </p>
          <div className="flex justify-center gap-4">
            <Button
              size="lg"
              className="bg-teal-500 hover:bg-teal-600 text-white rounded-full px-8 font-semibold shadow-lg shadow-teal-500/20"
              onClick={() => navigate("/membership")}
            >
              Join as a Service Provider
            </Button>
          </div>
        </div>
      </div>

      {/* 2. SERVICES ECOSYSTEM */}
      <div className="container mx-auto px-4 py-20">
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">
              Services Ecosystem
            </h2>
            <p className="text-slate-600 mt-2">
              Explore the categories available on the hub.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CategoryCard
              icon={<Ship className="w-8 h-8 text-blue-600" />}
              title="Port & Shipping"
              desc="Vessel surveys, marine insurance, chartering, and handling."
            />
            <CategoryCard
              icon={<Anchor className="w-8 h-8 text-teal-600" />}
              title="Marine Engineering"
              desc="Hydrographic surveys, diving services, ROV inspections."
            />
            <CategoryCard
              icon={<Leaf className="w-8 h-8 text-green-600" />}
              title="Fisheries & Aqua"
              desc="Hatchery design, feed consulting, seaweed farming tools."
            />
            <CategoryCard
              icon={<Search className="w-8 h-8 text-indigo-600" />}
              title="Ocean Tech & Data"
              desc="GIS mapping, drone monitoring, marine sensors, AI analytics."
            />
            <CategoryCard
              icon={<Gavel className="w-8 h-8 text-slate-600" />}
              title="Legal & Policy"
              desc="Maritime law, trade compliance, environmental regulations."
            />
            <CategoryCard
              icon={<LifeBuoy className="w-8 h-8 text-[#FF7F50]" />}
              title="Tourism & Leisure"
              desc="Eco-tour planning, coastal business consulting, water sports."
            />
          </div>
        </div>

        {/* 3. HOW IT WORKS */}
        <div className="bg-white rounded-3xl p-12 shadow-xl border border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full -mr-32 -mt-32 opacity-50" />
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center relative z-10">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            <Step
              number="01"
              title="Create Profile"
              desc="Professionals and companies register as service providers."
            />
            <Step
              number="02"
              title="Get Verified"
              desc="Credentials, expertise, and certifications are validated by MSH."
            />
            <Step
              number="03"
              title="Get Hired"
              desc="Industries and researchers search, book, and rate your services."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Helpers
function CategoryCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-teal-100 transition-all hover:-translate-y-1 group">
      <div className="mb-6 p-3 bg-slate-50 rounded-xl w-fit group-hover:bg-teal-50 transition-colors">
        {icon}
      </div>
      <h3 className="font-bold text-lg text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function Step({
  number,
  title,
  desc,
}: {
  number: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="text-center">
      <div className="text-6xl font-bold text-slate-100 mb-4">{number}</div>
      <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600">{desc}</p>
    </div>
  );
}
