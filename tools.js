/*
 ╔══════════════════════════════════════════════════════════════╗
 ║                  AI TOOLS HUB — tools.js                    ║
 ║  This is the ONLY file you need to edit to add/update tools. ║
 ║  Host this on GitHub Pages or any public URL.               ║
 ╚══════════════════════════════════════════════════════════════╝

  HOW TO ADD A TOOL — copy this block and fill it in:
  ──────────────────────────────────────────────────────────────
  {
    id          : unique number (increment from last)
    name        : "Tool Name"
    desc        : "One or two sentence description."
    url         : "https://tool-website.com"
    category    : "Writing & Chat" | "Image & Design" | "Coding & Dev"
                  "Productivity"   | "Audio & Video"  | "Research & Data"
    pricing     : "free" | "freemium" | "paid"
    featured    : true | false
    isNew       : true | false
    tags        : ["tag1", "tag2", "tag3"]   ← up to 3
    icon        : emoji  e.g. "🎨"  or 2-3 letter abbreviation e.g. "GP"
    iconBg      : "#HEX"  background color for the icon box
    accentColor : "#HEX"  accent bar color on featured card & modal
    rating      : 4.7     number from 1 to 5
    pros        : ["Pro point 1", "Pro point 2"]   ← up to 5
    cons        : ["Con point 1", "Con point 2"]   ← up to 5
  }
  ──────────────────────────────────────────────────────────────
*/

const TOOLS = [

    /* ── Writing & Chat ─────────────────────────────────────────── */
    {
      id: 1,
      name: "Your Tool Name",
      desc: "A short description of what this tool does and who it's for. Keep it to one or two sentences.",
      url: "https://example.com",
      category: "Writing & Chat",
      pricing: "freemium",
      featured: true,
      isNew: false,
      tags: ["Tag 1", "Tag 2", "Tag 3"],
      icon: "✦",
      iconBg: "#EDE9FE",
      accentColor: "#7C3AED",
      rating: 4.5,
      pros: [
        "Easy to get started with",
        "Great free tier available",
        "Strong community support"
      ],
      cons: [
        "Limited features on free plan",
        "Can be slow at peak hours"
      ]
    },
  
    /* ── Image & Design ─────────────────────────────────────────── */
    {
      id: 2,
      name: "Another Tool",
      desc: "Brief description of what makes this tool special and who should use it.",
      url: "https://example.com",
      category: "Image & Design",
      pricing: "paid",
      featured: true,
      isNew: true,
      tags: ["Design", "AI", "Creative"],
      icon: "🎨",
      iconBg: "#FCE7F3",
      accentColor: "#EC4899",
      rating: 4.8,
      pros: [
        "Stunning output quality",
        "Fast generation speeds",
        "Huge style variety"
      ],
      cons: [
        "Paid subscription required",
        "Steep learning curve"
      ]
    },
  
    /* ── Coding & Dev ───────────────────────────────────────────── */
    {
      id: 3,
      name: "Free Tool Example",
      desc: "Completely free AI tool with no usage limits or paywalls.",
      url: "https://example.com",
      category: "Coding & Dev",
      pricing: "free",
      featured: false,
      isNew: true,
      tags: ["Open source", "Code", "Local"],
      icon: "</>",
      iconBg: "#D1FAE5",
      accentColor: "#059669",
      rating: 4.1,
      pros: [
        "100% free and open source",
        "Works fully offline / locally",
        "No data sent to third parties"
      ],
      cons: [
        "Requires technical setup",
        "No dedicated support team",
        "Less polished UI"
      ]
    }
  
    /* ── ADD MORE TOOLS ABOVE THIS LINE ────────────────────────── */
  
  ];