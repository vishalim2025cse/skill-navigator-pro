import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Sparkles, Play, Zap, Brain, Target, BarChart3, Bot,
  CheckCircle2, Star,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Student Skill Tracker — Your Personal Learning OS" },
      { name: "description", content: "Track skills, build knowledge, become career ready. One intelligent platform for serious students." },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-ambient relative overflow-hidden">
      {/* Floating orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-20 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-float" />
        <div className="absolute top-40 right-0 h-96 w-96 rounded-full bg-accent/15 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-primary/10 blur-3xl animate-float" style={{ animationDelay: "4s" }} />
      </div>

      {/* Nav */}
      <header className="relative z-10 px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-primary to-accent grid place-items-center shadow-[0_0_30px_-6px_var(--color-primary)]">
            <Sparkles className="h-4 w-4 text-white" />
          </div>
          <span className="font-semibold tracking-tight">Skill Tracker</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#testimonials" className="hover:text-white transition">Students</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/app/dashboard" className="text-sm text-muted-foreground hover:text-white transition px-3 py-2">Sign in</Link>
          <Link to="/app/dashboard" className="inline-flex items-center gap-1.5 text-sm font-medium bg-white text-black hover:bg-white/90 transition rounded-lg px-3.5 py-2">
            Get started <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 px-6 lg:px-10 pt-16 pb-28 text-center max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-3 py-1.5 text-xs text-muted-foreground mb-8">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          AI-powered learning, built for students
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-gradient">
          Track Skills.<br />Build Knowledge.<br />Become Career Ready.
        </h1>

        <p className="mt-7 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          One intelligent platform to help students improve skills, stay consistent, build projects, and prepare for successful careers.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link to="/app/dashboard" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-5 py-3 text-sm font-medium text-white shadow-[0_12px_40px_-12px_var(--color-primary)] hover:opacity-95 transition">
            Get Started <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/app/dashboard" className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/60 backdrop-blur px-5 py-3 text-sm font-medium hover:bg-card transition">
            View Dashboard
          </Link>
          <button className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-muted-foreground hover:text-white transition">
            <Play className="h-3.5 w-3.5" /> Watch Demo
          </button>
        </div>

        {/* Floating preview card */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 -m-6 rounded-3xl bg-gradient-to-b from-primary/30 to-transparent blur-2xl opacity-50" />
          <div className="relative card-premium p-6 text-left">
            <div className="flex items-center gap-1.5 mb-4">
              <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <MiniStat label="Streak" value="12 days" hint="+3 vs last week" />
              <MiniStat label="Study Score" value="86" hint="Top 8% of peers" />
              <MiniStat label="Career Readiness" value="74%" hint="Almost interview-ready" />
            </div>
            <div className="mt-4 grid grid-cols-12 gap-2">
              {Array.from({ length: 60 }).map((_, i) => (
                <div key={i} className="h-6 rounded-md" style={{
                  background: `color-mix(in oklab, var(--color-primary) ${Math.round(((i * 7) % 100))}%, transparent)`,
                }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative z-10 px-6 lg:px-10 py-24 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-[11px] uppercase tracking-[0.16em] text-primary font-medium mb-3">Everything you need</div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gradient">A personal learning operating system</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Feature icon={Brain} title="AI Mentor" desc="Get personalized study plans, doubt-solving, quizzes, and weak-area reviews on demand." />
          <Feature icon={Target} title="Skill Roadmaps" desc="Visual, level-based roadmaps that guide you from beginner to job-ready, step by step." />
          <Feature icon={BarChart3} title="Deep Analytics" desc="Radar charts, heatmaps, and trends that reveal exactly how you're growing." />
          <Feature icon={Zap} title="Study Tracker" desc="Pomodoro, focus mode, streaks and a GitHub-style heatmap to keep consistency high." />
          <Feature icon={Bot} title="Project Builder" desc="Get AI-suggested projects matched to your skills and career goals." />
          <Feature icon={CheckCircle2} title="Career Readiness" desc="Resume score, interview prep, portfolio strength — all in one place." />
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="relative z-10 px-6 lg:px-10 py-24 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { name: "Ananya S.", role: "CSE, 3rd year", quote: "It finally feels like someone built a tool for how students actually learn. The streaks and roadmaps keep me consistent." },
            { name: "Rohit M.", role: "AI/ML, 2nd year", quote: "The AI mentor is my study partner now. It quizzes me, reviews my weak spots, and recommends what to learn next." },
            { name: "Priya R.", role: "ECE, final year", quote: "My career readiness score jumped from 41 to 78 in two months. The interview prep is excellent." },
          ].map((t) => (
            <div key={t.name} className="card-premium hover-lift p-6">
              <div className="flex gap-0.5 text-primary mb-3">{Array.from({length:5}).map((_,i)=><Star key={i} className="h-3.5 w-3.5 fill-current"/>)}</div>
              <p className="text-sm leading-relaxed text-foreground/90">"{t.quote}"</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary to-accent grid place-items-center text-xs font-semibold">{t.name[0]}</div>
                <div>
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 px-6 lg:px-10 pb-24">
        <div className="relative max-w-4xl mx-auto card-premium p-12 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10" />
          <div className="relative">
            <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gradient">Start your learning OS today</h3>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">Free for students. Sets up in under a minute.</p>
            <Link to="/app/dashboard" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-5 py-3 text-sm font-medium text-white shadow-[0_12px_40px_-12px_var(--color-primary)] hover:opacity-95 transition">
              Get started free <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-border px-6 lg:px-10 py-8 text-xs text-muted-foreground flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-gradient-to-br from-primary to-accent grid place-items-center">
            <Sparkles className="h-3 w-3 text-white" />
          </div>
          © 2026 Student Skill Tracker
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition">Privacy</a>
          <a href="#" className="hover:text-white transition">Terms</a>
          <a href="#" className="hover:text-white transition">Contact</a>
        </div>
      </footer>
    </div>
  );
}

function MiniStat({ label, value, hint }: { label: string; value: string; hint: string }) {
  return (
    <div className="rounded-xl border border-border bg-card-2/60 p-4">
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="mt-1 text-2xl font-semibold tracking-tight">{value}</div>
      <div className="mt-1 text-[11px] text-success">{hint}</div>
    </div>
  );
}

function Feature({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) {
  return (
    <div className="card-premium hover-lift p-6">
      <div className="h-10 w-10 rounded-xl bg-primary/15 ring-1 ring-primary/20 grid place-items-center mb-4">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <h3 className="text-base font-semibold tracking-tight">{title}</h3>
      <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}
