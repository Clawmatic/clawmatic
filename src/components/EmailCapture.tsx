"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface EmailCaptureProps {
  heading?: string;
  subheading?: string;
  finePrint?: string;
  className?: string;
}

export default function EmailCapture({
  heading = "Get notified when the one-click installer launches",
  subheading = "Plus weekly OpenClaw tips, model updates, and new skill packs.",
  finePrint = "No spam. Unsubscribe anytime.",
  className = "",
}: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  return (
    <div className={`text-center ${className}`}>
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">{heading}</h2>
      <p className="text-muted-foreground mb-8 max-w-lg mx-auto">{subheading}</p>

      {status === "success" ? (
        <div className="flex items-center justify-center gap-2 text-primary font-medium">
          <CheckCircle2 className="h-5 w-5" />
          You&apos;re on the list — we&apos;ll be in touch!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="flex-1 rounded-lg border border-border/50 bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
          />
          <Button
            type="submit"
            variant="hero"
            disabled={status === "loading"}
            className="whitespace-nowrap"
          >
            {status === "loading" ? "..." : "Notify me"}
            {status !== "loading" && <ArrowRight className="ml-1 h-4 w-4" />}
          </Button>
        </form>
      )}

      {status === "error" && (
        <p className="text-xs text-destructive mt-3">{errorMsg}</p>
      )}

      <p className="text-xs text-muted-foreground/60 mt-4">{finePrint}</p>
    </div>
  );
}
