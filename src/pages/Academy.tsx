// import { SectionHeader } from "@/components/ui/SectionHeader";
// import { CourseCard } from "@/components/ui/CourseCard";
// import { COURSES } from "@/data/mockData";
// import { useToast } from "@/hooks/use-toast";
// import { GraduationCap } from "lucide-react";
// import { Course } from "@/types";

// export default function Academy() {
//   const { toast } = useToast();

//   const handleEnroll = (course: Course) => {
//     toast({
//       title: "Enrolled Successfully",
//       description: `You've been enrolled in "${course.title}". Check your email for course materials.`,
//     });
//   };

//   return (
//     <div className="py-12 bg-background min-h-screen animate-fade-in">
//       <div className="container mx-auto px-4">
//         <SectionHeader
//           title="Blue Skills Academy"
//           subtitle="Future-ready training for Pakistan's next-gen maritime workforce."
//           icon={GraduationCap}
//         />

//         {/* Course Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
//           {COURSES.map((course, idx) => (
//             <div
//               key={course.id}
//               className="animate-fade-in"
//               style={{ animationDelay: `${idx * 0.1}s` }}
//             >
//               <CourseCard course={course} onEnroll={handleEnroll} />
//             </div>
//           ))}
//         </div>

//         {/* Stats Section */}
//         <div className="gradient-ocean rounded-2xl p-8 md:p-12">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-primary-foreground">
//             <div>
//               <div className="text-4xl md:text-5xl font-bold mb-2">1,200+</div>
//               <div className="text-primary-foreground/70">Graduates</div>
//             </div>
//             <div>
//               <div className="text-4xl md:text-5xl font-bold mb-2">25+</div>
//               <div className="text-primary-foreground/70">Courses</div>
//             </div>
//             <div>
//               <div className="text-4xl md:text-5xl font-bold mb-2">15</div>
//               <div className="text-primary-foreground/70">Expert Instructors</div>
//             </div>
//             <div>
//               <div className="text-4xl md:text-5xl font-bold mb-2">95%</div>
//               <div className="text-primary-foreground/70">Satisfaction Rate</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import { useNavigate } from "react-router-dom";
import { SectionHeader } from "@/components/ui/SectionHeader";
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
    <div className="py-24 min-h-screen animate-fade-in">
      <div className="container mx-auto px-4">
        {/* HERO */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <SectionHeader
            title="HarvestWise Blue Skills Academy"
            subtitle="Shaping Pakistan’s Next-Generation Maritime Workforce."
            icon={GraduationCap}
            className="mb-8"
          />
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Equipping youth, women, and professionals with future-ready skills.
            Blending certifications, research, and hands-on learning to drive
            the Blue Economy.
          </p>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8"
            onClick={() => navigate("/membership")}
          >
            Join Waitlist / Register Interest
          </Button>
        </div>

        {/* 1. TRAINING TRACKS */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">
            Blue Skills Tracks
          </h2>
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

        {/* 2. METHODOLOGY & IMPACT */}
        <div className="bg-[#001E2B] rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-transparent opacity-50" />

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
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-teal-400 rounded-full" />{" "}
                  Hackathons & startup incubation
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Impact Goals</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-3xl font-bold text-teal-400 mb-1">
                    10,000+
                  </div>
                  <div className="text-sm text-slate-400">
                    Professionals trained in 5 years
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#FF7F50] mb-1">
                    Global
                  </div>
                  <div className="text-sm text-slate-400">
                    Competitiveness in maritime trade
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

// Helpers
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
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
      <div className="mb-6">{icon}</div>
      <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{desc}</p>
    </div>
  );
}