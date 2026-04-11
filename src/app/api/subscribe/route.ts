import { NextRequest, NextResponse } from "next/server";

const BUTTONDOWN_API_BASE = "https://api.buttondown.email/v1";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    const apiKey = process.env.BUTTONDOWN_API_KEY;
    if (!apiKey) {
      console.log("[subscribe] No BUTTONDOWN_API_KEY set — skipping API call for:", email);
      return NextResponse.json({ ok: true });
    }

    const res = await fetch(`${BUTTONDOWN_API_BASE}/subscribers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${apiKey}`,
      },
      body: JSON.stringify({
        email,
        tags: ["website"],
        metadata: {
          source: "clawmatic.eu",
        },
      }),
    });

    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      const detail = typeof body?.detail === "string" ? body.detail : "";
      const alreadySubscribed = res.status === 400 && /already subscribed|already exists|already a subscriber/i.test(detail);

      if (!alreadySubscribed) {
        console.error("[subscribe] Buttondown error:", res.status, body);
        return NextResponse.json({ error: "Failed to subscribe." }, { status: 500 });
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[subscribe] Unexpected error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
