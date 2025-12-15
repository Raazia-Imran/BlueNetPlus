import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Users, Briefcase, Lock, CheckCircle } from "lucide-react";

export default function Membership() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState({
    name: "",
    organization: "",
    role: "",
    interests: "",
    member_type: "Individual",
  });

  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // 1. Check if user is logged in
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsLoggedIn(!!session);
      if (session?.user) {
        fetchProfile(session.user.id);
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsLoggedIn(!!session);
      if (session?.user) {
        fetchProfile(session.user.id);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const fetchProfile = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("user_id", userId)
        .single();

      if (error) throw error;
      if (data) {
        setProfile({
          name: data.name || "",
          organization: data.organization || "",
          role: data.role || "",
          interests: data.interests || "",
          member_type: data.member_type || "Individual",
        });
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  const handleLogin = () => {
    // 2. Redirect to the login page
    navigate("/login");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) throw new Error("No user found");

      const { error } = await supabase
        .from("profiles")
        .update({
          name: profile.name,
          organization: profile.organization,
          role: profile.role,
          interests: profile.interests,
          member_type: profile.member_type,
        })
        .eq("user_id", user.id);

      if (error) throw error;

      toast({
        title: "Profile Updated",
        description: "Your membership profile has been saved successfully.",
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="py-20 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto bg-card p-8 rounded-2xl shadow-lg border border-border text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lock className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Membership Access
            </h2>
            <p className="text-muted-foreground mb-8">
              Please log in to access your digital membership profile, network
              with peers, and access exclusive resources.
            </p>
            <Button variant="hero" className="w-full" onClick={handleLogin}>
              Login / Register
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 bg-secondary/30 min-h-screen animate-fade-in">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="My Digital Membership"
          subtitle="Manage your professional identity and connect with the maritime ecosystem."
          icon={Users}
        />

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-xl border border-border p-6 sticky top-24">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 gradient-ocean rounded-full flex items-center justify-center text-primary-foreground text-3xl font-bold mb-4 shadow-ocean">
                  {profile.name ? profile.name.charAt(0).toUpperCase() : "M"}
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {profile.name || "New Member"}
                </h3>
                <p className="text-primary font-medium mb-1">
                  {profile.role || "Role Not Set"}
                </p>
                <p className="text-muted-foreground text-sm mb-6">
                  {profile.organization || "Organization Not Set"}
                </p>

                <div className="w-full pt-6 border-t border-border space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Status</span>
                    <span className="px-2 py-0.5 bg-accent/20 text-accent rounded-full text-xs font-semibold flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      Active
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Member Type</span>
                    <span className="text-foreground font-medium">
                      {profile.member_type}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Member Since</span>
                    <span className="text-foreground font-medium">
                      Dec 2025
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Edit Form */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-xl border border-border p-8">
              <h3 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-primary" />
                Update Profile Information
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <input
                      value={profile.name}
                      onChange={(e) =>
                        setProfile({ ...profile, name: e.target.value })
                      }
                      required
                      className="w-full px-4 py-2 bg-background border border-input rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all"
                      placeholder="e.g. Ali Ahmed"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Organization / Institute
                    </label>
                    <input
                      value={profile.organization}
                      onChange={(e) =>
                        setProfile({ ...profile, organization: e.target.value })
                      }
                      required
                      className="w-full px-4 py-2 bg-background border border-input rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all"
                      placeholder="e.g. KPT"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Job Title / Role
                    </label>
                    <input
                      value={profile.role}
                      onChange={(e) =>
                        setProfile({ ...profile, role: e.target.value })
                      }
                      required
                      className="w-full px-4 py-2 bg-background border border-input rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all"
                      placeholder="e.g. Marine Engineer"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Membership Category
                    </label>
                    <select
                      value={profile.member_type}
                      onChange={(e) =>
                        setProfile({ ...profile, member_type: e.target.value })
                      }
                      className="w-full px-4 py-2 bg-background border border-input rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all"
                    >
                      <option value="Individual">
                        Individual (Student/Pro)
                      </option>
                      <option value="Institutional">Institutional</option>
                      <option value="Corporate">Corporate</option>
                      <option value="Community">Community/NGO</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Areas of Interest
                  </label>
                  <textarea
                    value={profile.interests}
                    onChange={(e) =>
                      setProfile({ ...profile, interests: e.target.value })
                    }
                    rows={3}
                    className="w-full px-4 py-2 bg-background border border-input rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
                    placeholder="e.g. Deep sea mining, Coastal tourism, Sustainable fisheries..."
                  />
                </div>

                <div className="flex justify-end pt-4">
                  <Button variant="navy" type="submit" disabled={loading}>
                    {loading ? "Saving..." : "Save Changes"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
