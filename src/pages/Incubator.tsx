import { Button } from "@/components/ui/button";
import {
  Lightbulb,
  Rocket,
  Target,
  Sprout,
  ShieldCheck,
  Users,
  Globe,
  Landmark,
} from "lucide-react";

export default function Incubator() {
  return (
    <div className="min-h-screen bg-[#FDFCF8] animate-fade-in">
      {/* 1. HERO SECTION (Ocean Data Style) */}
      <div className="relative bg-[#0a192f] text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a192f] via-[#102a43] to-[#004e92] opacity-90"></div>
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-teal-500/20 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute -bottom-32 left-[20%] w-96 h-96 bg-[#FF7F50]/20 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
            <Lightbulb className="w-6 h-6 text-[#FF7F50]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Incubation for Ocean Startups
          </h1>
          <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            Accelerating Blue Innovation for a Sustainable Maritime Future. We
            support entrepreneurs turning pioneering ocean ideas into scalable
            ventures.
          </p>
          <Button
            size="lg"
            className="bg-[#FF7F50] hover:bg-[#E06040] text-white rounded-full px-8 font-semibold shadow-lg shadow-orange-500/20"
          >
            Download Brochure
          </Button>
        </div>
      </div>

      {/* 2. MAIN CONTENT */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT COLUMN: Benefits */}
          <div className="space-y-12">
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Rocket className="w-6 h-6 text-[#FF7F50]" />
                What We Provide
              </h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                We support early-stage entrepreneurs, youth innovators, and
                women-led enterprises with a complete ecosystem of support.
              </p>
              <ul className="space-y-5">
                <BenefitItem text="Business Development & Mentoring (Industry/Finance experts)" />
                <BenefitItem text="Technical Labs & Field Access (Coastal sites/Facilities)" />
                <BenefitItem text="Investor & Funding Support (Grants, VC access)" />
                <BenefitItem text="IP Support (Patents & Licensing)" />
                <BenefitItem text="Digital Marketplace Integration" />
              </ul>
            </div>

            {/* Focus Themes */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Target className="w-6 h-6 text-teal-600" />
                Focus Themes
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ThemeTag text="Smart Fishing & AI" />
                <ThemeTag text="Seaweed Value Chain" />
                <ThemeTag text="Ocean Robotics & Drones" />
                <ThemeTag text="Marine Renewable Energy" />
                <ThemeTag text="Coastal Eco-Tourism" />
                <ThemeTag text="Blue Circular Economy" />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Who Can Apply & Partners */}
          <div className="space-y-10">
            <div className="bg-[#001E2B] text-white rounded-2xl shadow-xl p-10 relative overflow-hidden border border-slate-800">
              <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500 rounded-full blur-[80px] opacity-20 pointer-events-none" />
              <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                <Users className="w-6 h-6 text-teal-400" />
                Who Can Apply?
              </h3>
              <div className="space-y-6 relative z-10">
                <EligibilityItem
                  title="Ocean-Tech Innovators"
                  desc="Startups building hardware/software for marine use."
                />
                <EligibilityItem
                  title="Women-Led Enterprises"
                  desc="Dedicated track for female founders in the Blue Economy."
                />
                <EligibilityItem
                  title="Youth & University Incubators"
                  desc="Student teams with scalable research projects."
                />
                <EligibilityItem
                  title="Coastal Entrepreneurs"
                  desc="Locals solving problems in fisheries or tourism."
                />
              </div>
              <div className="mt-10 pt-8 border-t border-slate-700">
                <p className="text-center text-slate-400 text-sm">
                  Applications for the next cohort open soon.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Globe className="w-6 h-6 text-blue-600" />
                Strategic Ecosystem
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <PartnerBadge
                  label="Govt Ministries"
                  icon={<Landmark className="w-4 h-4" />}
                />
                <PartnerBadge
                  label="Marine Institutes"
                  icon={<Globe className="w-4 h-4" />}
                />
                <PartnerBadge
                  label="Donor Agencies"
                  icon={<Users className="w-4 h-4" />}
                />
                <PartnerBadge
                  label="Impact Investors"
                  icon={<Rocket className="w-4 h-4" />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helpers
function BenefitItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-4 text-slate-700">
      <ShieldCheck className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
      <span className="text-sm md:text-base leading-snug">{text}</span>
    </li>
  );
}

function ThemeTag({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 bg-white border border-slate-200 text-slate-700 px-4 py-3 rounded-xl text-sm font-medium shadow-sm hover:border-teal-500 hover:text-teal-600 transition-colors cursor-default">
      <Sprout className="w-4 h-4 text-teal-500" />
      {text}
    </div>
  );
}

function EligibilityItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex gap-4">
      <div className="w-1.5 h-1.5 mt-2 rounded-full bg-teal-400 shrink-0 shadow-[0_0_10px_rgba(45,212,191,0.5)]" />
      <div>
        <h4 className="font-bold text-slate-100 text-sm mb-1">{title}</h4>
        <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function PartnerBadge({
  label,
  icon,
}: {
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100 shadow-sm text-slate-700 text-sm font-medium hover:bg-white hover:shadow-md transition-all">
      <div className="text-blue-500">{icon}</div>
      {label}
    </div>
  );
}
