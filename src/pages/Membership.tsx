import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/button";
import { Users, Building2, CheckCircle, ShieldCheck } from "lucide-react";

export default function Membership() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsLoggedIn(!!session);
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFCF8] animate-fade-in">
      {/* 1. HERO SECTION (Ocean Data Style) */}
      <div className="relative bg-[#0a192f] text-white py-24 lg:py-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a192f] via-[#102a43] to-[#004e92] opacity-90"></div>
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-600/30 rounded-full mix-blend-overlay filter blur-3xl animate-blob" />
          <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-teal-500/20 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000" />
        </div>

        <div className="container relative z-10 px-4 text-center max-w-4xl">
          <div className="inline-flex items-center justify-center p-3 bg-[#FF7F50]/15 rounded-full mb-6 backdrop-blur-sm">
            <Users className="w-6 h-6 text-[#FF7F50]" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Digital Maritime Membership
          </h1>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Connecting Pakistan’s Maritime Community Through One Smart Network.
            Join professionals, institutions, and industries on a unified
            digital platform.
          </p>
          <div className="flex justify-center">
            {isLoggedIn ? (
              <Button
                size="lg"
                className="bg-teal-500 hover:bg-teal-600 text-white rounded-full px-8"
              >
                Go to Dashboard
              </Button>
            ) : (
              <Button
                size="lg"
                className="bg-[#FF7F50] hover:bg-[#E06040] text-white rounded-full px-8 shadow-lg shadow-orange-500/20"
                onClick={() => navigate("/login")}
              >
                Login / Register
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* 2. MEMBERSHIP TYPES */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">
            Choose Your Pathway
          </h2>
          <p className="text-slate-600 mt-2">
            Tailored benefits for every stakeholder.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Individual Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:-translate-y-2 transition-all">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6">
              <Users size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Individual Membership
            </h3>
            <p className="text-slate-600 mb-6">
              For Students, Professionals, Researchers & Freelancers.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Digital Identity & Profile",
                "Access to Job Board",
                "Learning & Certifications",
                "Networking Events",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-teal-500" /> {item}
                </li>
              ))}
            </ul>
            <Button
              className="w-full bg-blue-600 hover:bg-blue-700"
              onClick={() => navigate("/membership/individualform")}
            >
              Apply as Individual
            </Button>
          </div>

          {/* Corporate Card */}
          <div className="bg-[#001E2B] text-white p-8 rounded-2xl shadow-xl relative overflow-hidden hover:-translate-y-2 transition-all">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500 rounded-full blur-[80px] opacity-20" />
            <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-teal-400 mb-6 relative z-10">
              <Building2 size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-2 relative z-10">
              Coral (Corporate) Membership
            </h3>
            <p className="text-slate-300 mb-6 relative z-10">
              For Companies, Startups, NGOs & Institutes.
            </p>
            <ul className="space-y-3 mb-8 relative z-10">
              {[
                "B2B Marketplace Access",
                "Talent Recruitment",
                "Industry Visibility",
                "Research Collaboration",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-200">
                  <ShieldCheck className="w-5 h-5 text-teal-400" /> {item}
                </li>
              ))}
            </ul>
            <Button
              className="w-full bg-[#FF7F50] hover:bg-[#E06040] text-white border-0 relative z-10"
              onClick={() => navigate("/membership/coralform")}
            >
              Register Organization
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
