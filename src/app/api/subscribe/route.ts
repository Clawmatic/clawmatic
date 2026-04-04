import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    const apiKey = process.env.BREVO_API_KEY;
    if (!apiKey) {
      // In dev without API key, just return success
      console.log("[subscribe] No BREVO_API_KEY set — skipping API call for:", email);
      return NextResponse.json({ ok: true });
    }

    const res = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        email,
        listIds: [2], // Update list ID as needed
        updateEnabled: true,
      }),
    });

    if (!res.ok && res.status !== 204) {
      const body = await res.json().catch(() => ({}));
      console.error("[subscribe] Brevo error:", res.status, body);
      return NextResponse.json({ error: "Failed to subscribe." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[subscribe] Unexpected error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
