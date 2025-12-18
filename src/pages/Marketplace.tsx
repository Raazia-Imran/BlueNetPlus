// import { useState } from "react";
// import { SectionHeader } from "@/components/ui/SectionHeader";
// import { ServiceCard } from "@/components/ui/ServiceCard";
// import { SERVICES } from "@/data/mockData";
// import { useToast } from "@/hooks/use-toast";
// import { Briefcase, Search } from "lucide-react";
// import { Service } from "@/types";

// export default function Marketplace() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const { toast } = useToast();

//   const filteredServices = SERVICES.filter(
//     (service) =>
//       service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       service.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       service.provider.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const handleRequestQuote = (service: Service) => {
//     toast({
//       title: "Quote Requested",
//       description: `Your request for "${service.title}" has been submitted. We'll get back to you soon!`,
//     });
//   };

//   return (
//     <div className="py-12 bg-background min-h-screen animate-fade-in">
//       <div className="container mx-auto px-4">
//         <SectionHeader
//           title="Maritime Services Marketplace"
//           subtitle="One-stop platform connecting you with verified marine professionals and solutions."
//           icon={Briefcase}
//         />

//         {/* Search Bar */}
//         <div className="max-w-2xl mx-auto mb-12 relative">
//           <input
//             type="text"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             placeholder="Search for surveys, diving, consulting..."
//             className="w-full pl-12 pr-4 py-4 rounded-full bg-card border border-border shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-lg transition-all"
//           />
//           <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
//         </div>

//         {/* Services Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {filteredServices.map((service, idx) => (
//             <div
//               key={service.id}
//               className="animate-fade-in"
//               style={{ animationDelay: `${idx * 0.1}s` }}
//             >
//               <ServiceCard
//                 service={service}
//                 onRequestQuote={handleRequestQuote}
//               />
//             </div>
//           ))}
//         </div>

//         {filteredServices.length === 0 && (
//           <div className="text-center py-16">
//             <p className="text-muted-foreground text-lg">
//               No services found matching "{searchQuery}"
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
import { useNavigate } from "react-router-dom";
import { SectionHeader } from "@/components/ui/SectionHeader";
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
    <div className="py-24 min-h-screen animate-fade-in">
      <div className="container mx-auto px-4">
        {/* 1. HERO SECTION */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <SectionHeader
            title="Marketplace for Maritime Services"
            subtitle="Your One-Stop Platform for Ocean & Maritime Solutions."
            icon={Briefcase}
            className="mb-8"
          />
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Pakistan’s first digital marketplace connecting maritime
            professionals, service providers, industries, and experts. We enable
            business visibility, trusted hiring, and technical support for the
            Blue Economy.
          </p>
          <div className="flex justify-center gap-4">
            <Button
              size="lg"
              className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-8"
              onClick={() => navigate("/membership")}
            >
              Join as a Service Provider
            </Button>
          </div>
        </div>

        {/* 2. WHAT YOU CAN FIND (Categories) */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">
            Services Ecosystem
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <CategoryCard
              icon={<Ship className="w-8 h-8 text-blue-500" />}
              title="Port & Shipping"
              desc="Vessel surveys, marine insurance, chartering, and handling."
            />
            <CategoryCard
              icon={<Anchor className="w-8 h-8 text-teal-500" />}
              title="Marine Engineering"
              desc="Hydrographic surveys, diving services, ROV inspections."
            />
            <CategoryCard
              icon={<Leaf className="w-8 h-8 text-green-500" />}
              title="Fisheries & Aqua"
              desc="Hatchery design, feed consulting, seaweed farming tools."
            />
            <CategoryCard
              icon={<Search className="w-8 h-8 text-indigo-500" />}
              title="Ocean Tech & Data"
              desc="GIS mapping, drone monitoring, marine sensors, AI analytics."
            />
            <CategoryCard
              icon={<Gavel className="w-8 h-8 text-slate-500" />}
              title="Legal & Policy"
              desc="Maritime law, trade compliance, environmental regulations."
            />
            <CategoryCard
              icon={<LifeBuoy className="w-8 h-8 text-orange-500" />}
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

        {/* 4. VALUE PROP */}
        <div className="mt-24 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">
            Why Use This Marketplace?
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Verified Professionals",
              "Centralized Access",
              "Transparent Ratings",
              "Secure Bookings",
            ].map((tag, i) => (
              <span
                key={i}
                className="flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full font-medium"
              >
                <CheckCircle className="w-4 h-4 text-teal-500" />
                {tag}
              </span>
            ))}
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
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1">
      <div className="mb-4">{icon}</div>
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
      <div className="text-5xl font-bold text-slate-100 mb-4">{number}</div>
      <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600">{desc}</p>
    </div>
  );
}