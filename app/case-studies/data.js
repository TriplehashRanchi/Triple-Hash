export const caseStudiesData = [
  {
    slug: "kunal-kumar",
    companyLogo: "/logo1.webp",
    companyName: "TripleHash",
    headline:
      'How Kunal Kumar built a <span class="bg-gradient-to-r from-[#ffb552] via-[#ff5873] to-[#b83dff] bg-clip-text text-transparent tracking-tight font-bold">VS Code-Style Online Editor</span> for Developers',
    quote:
      "We wanted to give developers a coding experience that felt as powerful and intuitive as their desktop IDE, but directly in the browser.",
    authorName: "Kunal Kumar",
    authorTitle: "Founder & Builder",
    authorProfile: "/Team/kunal-sir-icon.jpeg",
    challenge: `<p>Developers today rely heavily on Visual Studio Code for productivity, but when it comes to teaching, hackathons, or quick prototyping, asking someone to install a full IDE creates friction. Kunal wanted to replicate the familiar VS Code interface in the browser so that students and developers could write HTML, CSS, and JavaScript in real time without setup. The challenge was not just the editor design, but handling live previews, error handling, file structure simulation, and performance at scale.</p>`,
    solution: `<p>Kunal combined <strong>Monaco Editor</strong> (the core editor that powers VS Code) with a Node.js/React stack to build a web-based IDE. He integrated support for syntax highlighting, code autocompletion, and live preview rendering of HTML, CSS, and JS. The platform also simulated file systems so users could organize projects like in a real IDE. On top of this, collaboration features were added — multiple users could code together in real time using WebSockets. For scalability, the solution leveraged serverless execution for preview environments, ensuring that even complex snippets could run safely in isolated sandboxes.</p>`,
    results: `<p>The project successfully delivered a browser-based VS Code clone with near-native experience. Bootcamp students could start coding in seconds, hackathon participants used it without setup headaches, and educators praised it for simplifying workshops. Hundreds of hours were saved by eliminating installation barriers, and feedback showed that the familiarity of the VS Code-like interface made adoption effortless.</p>`,
    meta: {
      version: "Custom Build",
      deployment: "5 weeks",
      hoursSaved: "Hundreds of developer setup hours",
    },
  },
  {
    slug: "kunal",
    companyLogo: "/logo1.webp",
    companyName: "Slack (Community Project Review)",
    headline:
      'Google Pixel 10: <span class="bg-gradient-to-r from-[#ffb552] via-[#ff5873] to-[#b83dff] bg-clip-text text-transparent tracking-tight font-bold">First Impressions</span> — Magnets, Magic & More',
    quote:
      "We tested the Pixel 10 lineup right after launch, and the blend of AI features with new magnetic accessories really stood out.",
    authorName: "Kunal Kumar",
    authorTitle: "Tech Reviewer & Consultant",
    authorProfile: "/Team/kunal-icon.png",
    challenge: `<p>Google’s Pixel 10 event introduced four devices — Pixel 10, Pixel 10 Pro, Pixel 10 Pro XL, and the Pixel 10 Pro Fold. The challenge for reviewers and early users was cutting through the hype to see whether the new features actually added value. Kunal wanted to explore how the much-talked-about magnetic accessories, AI camera upgrades, and foldable design translated into real-world usage. Early impressions mattered since many potential buyers were skeptical about durability, heat issues, and pricing justification.</p>`,
    solution: `<p>Kunal conducted a week-long hands-on review. He tested the Pixel 10 Pro as his daily driver, focusing on performance, photography, battery life, and integration with existing Google services. Special attention was given to the new magnetic ecosystem, which included snap-on batteries and desk mounts. The foldable model was stress-tested for hinge durability and multitasking capabilities. Comparisons were drawn against Pixel 9 and competing devices like Samsung’s Galaxy Z Fold series.</p>`,
    results: `<p>The Pixel 10 impressed with its <strong>AI-driven photo editing</strong>, smooth performance, and genuinely useful magnetic accessories. However, the foldable variant still showed durability concerns, and pricing was on the higher end. Kunal concluded that the Pixel 10 was a strong upgrade for power users, but casual users might not find enough reason to switch. The review reached thousands of readers online, sparking conversations in developer and tech enthusiast communities.</p>`,
    meta: {
      version: "Pixel 10 Review",
      deployment: "1 week of testing",
      hoursSaved: "N/A — Product review",
    },
  },
  {
    slug: "localcafe",
    companyLogo: "/logo1.webp",
    companyName: "The Daily Brew Café",
    headline:
      'Daily Brew Café saved <span class="bg-gradient-to-r from-[#ffb552] via-[#ff5873] to-[#b83dff] bg-clip-text text-transparent tracking-tight font-bold">5 hours a week</span> by automating order tracking',
    quote:
      "Before automation, I spent every morning updating a spreadsheet with online and walk-in orders. Now it runs itself.",
    authorName: "Priya Sharma",
    authorTitle: "Owner",
    authorProfile: "/Team/sagar-icon.jpg",
    challenge: `<p>Priya runs a popular café in Pune, where daily orders come from a mix of walk-in customers and delivery platforms like Swiggy and Zomato. Managing sales records was chaotic: she had to log into each delivery partner dashboard, collect order counts, and manually update an Excel file every morning before opening. This was tedious, error-prone, and left her stressed when numbers didn’t match up. Staff couldn’t see sales data in real time, which made inventory and kitchen prep harder.</p>`,
    solution: `<p>Priya set up a workflow with n8n that automatically pulled order data from Zomato and Swiggy APIs every morning and pushed it into a Google Sheet. For walk-in orders, a simple POS integration fed numbers into the same sheet. The sheet then generated daily summaries, which were emailed to Priya and displayed on a tablet in the kitchen for staff. No manual login or copy-pasting was needed anymore. The café essentially created its own lightweight dashboard without paying for an expensive POS system upgrade.</p>`,
    results: `<p>The café saved over <strong>5 hours of manual work every week</strong>. Staff had real-time visibility into daily sales, which made prep and inventory management smoother. Priya no longer had to juggle spreadsheets at 6 a.m., and the accuracy of records improved dramatically. Customers also benefited indirectly — faster service and fewer stock-outs because the kitchen was better informed. Over time, the automation gave Priya confidence to experiment with new menu items because she had clear sales trends without extra effort.</p>`,
    meta: {
      version: "n8n Cloud",
      deployment: "3 days",
      hoursSaved: "20+ hours per month",
    },
  },

  {
    slug: "freelancer-agency",
    companyLogo: "/logo1.webp",
    companyName: "CreativeWave Agency",
    headline:
      'CreativeWave saved <span class="bg-gradient-to-r from-[#ffb552] via-[#ff5873] to-[#b83dff] bg-clip-text text-transparent tracking-tight font-bold">10+ hours every week</span> by automating client reporting',
    quote:
      "I used to spend half of Monday creating client reports. Now it’s all ready before I even open my laptop.",
    authorName: "Ravi Mehta",
    authorTitle: "Founder",
    authorProfile: "/picture1.png",
    challenge: `<p>As a small creative agency handling multiple social media and branding clients, Ravi had to generate weekly performance reports. Every Monday was spent manually pulling data from Facebook, Instagram, and Google Analytics, pasting it into PowerPoint slides, and formatting charts. The task was repetitive, prone to copy-paste errors, and took up almost an entire working day, preventing the team from focusing on strategy.</p>`,
    solution: `<p>Using n8n, Ravi connected all client accounts to a single workflow. The automation pulled analytics data, formatted charts, and generated ready-to-send PDF reports. Each Monday morning, reports were automatically emailed to clients without any manual work. The system was flexible, allowing custom KPIs per client, and updates required no extra effort.</p>`,
    results: `<p>The agency saved more than 10 hours every week, reports became more accurate, and client satisfaction improved. Instead of starting the week with a manual grind, the team could now focus on campaign ideas and creative pitches. Clients appreciated receiving reports on time, and Ravi no longer worried about mistakes creeping into presentations.</p>`,
    meta: {
      version: "n8n Cloud",
      deployment: "5 days",
      hoursSaved: "40+ hours per month",
    },
  },
  {
    slug: "ngo-education",
    companyLogo: "/logo1.webp",
    companyName: "BrightPath Foundation",
    headline:
      'BrightPath automated <span class="bg-gradient-to-r from-[#ffb552] via-[#ff5873] to-[#b83dff] bg-clip-text text-transparent tracking-tight font-bold">donor updates</span> and freed up staff time',
    quote:
      "Instead of updating spreadsheets late into the night, our volunteers now focus on students.",
    authorName: "Anjali Verma",
    authorTitle: "Program Coordinator",
    authorProfile: "/picture2.png",
    challenge: `<p>BrightPath, a non-profit supporting underprivileged children’s education, relied heavily on donor contributions. Every month, staff manually compiled donation records, matched them to student progress reports, and emailed updates. This manual system often led to delays, missing data, and errors. Volunteers were spending valuable time on clerical work instead of mentoring children, and donors were asking for more transparency.</p>`,
    solution: `<p>With n8n, BrightPath set up automated workflows that connected their payment gateway, Google Sheets, and email system. Each donation was automatically logged, matched to a beneficiary, and linked to the child’s progress updates. Donors received personalized monthly reports with photos and academic updates. The team no longer needed to manually prepare dozens of emails.</p>`,
    results: `<p>The foundation saved 30+ hours per month on admin work, donor satisfaction improved, and the volunteers could focus on mentoring students. Transparency improved, donor retention went up, and BrightPath was able to scale its program to more children without hiring additional staff.</p>`,
    meta: {
      version: "n8n Cloud",
      deployment: "2 weeks",
      hoursSaved: "30+ hours per month",
    },
  },
  {
    slug: "school-admin",
    companyLogo: "/logo1.webp",
    companyName: "Greenwood High School",
    headline:
      'Greenwood High eliminated <span class="bg-gradient-to-r from-[#ffb552] via-[#ff5873] to-[#b83dff] bg-clip-text text-transparent tracking-tight font-bold">manual attendance tracking</span>',
    quote:
      "Teachers now spend mornings teaching, not tallying attendance sheets.",
    authorName: "Mark Stevens",
    authorTitle: "Vice Principal",
    authorProfile: "/picture3.png",
    challenge: `<p>At Greenwood High, teachers took attendance manually every morning on paper sheets. The data was later entered into Excel by admin staff, often with delays and errors. Parents frequently called to check attendance records, but the data was not always up to date. Teachers complained about losing class time, and the administration struggled to provide accurate daily summaries.</p>`,
    solution: `<p>n8n integrated the school’s existing Google Forms with a central Google Sheet. Teachers simply submitted attendance online, and workflows instantly updated records. Parents received automated SMS updates if their child was absent, and the administration dashboard provided real-time reports. The system worked on both desktops and smartphones, making adoption smooth.</p>`,
    results: `<p>Attendance reporting went from a 2-hour daily task to a 10-minute automated process. Teachers had more instructional time, parents trusted the system more, and the school avoided hiring an extra admin clerk. Over the school year, hundreds of hours were saved, and the school board cited attendance transparency as a key achievement.</p>`,
    meta: {
      version: "n8n Enterprise",
      deployment: "1 week",
      hoursSaved: "50+ hours per month",
    },
  },
  {
    slug: "freelance-writer",
    companyLogo: "/logo1.webp",
    companyName: "WriteBetter Content",
    headline:
      'WriteBetter automated <span class="bg-gradient-to-r from-[#ffb552] via-[#ff5873] to-[#b83dff] bg-clip-text text-transparent tracking-tight font-bold">client invoicing</span> and follow-ups',
    quote:
      "Chasing invoices used to drain my energy. Now payments come on time.",
    authorName: "Sarah Lee",
    authorTitle: "Freelance Copywriter",
    authorProfile: "/picture4.png",
    challenge: `<p>Sarah, a freelance copywriter, juggled multiple clients across industries. Every month, she manually created invoices in Word, emailed them, and kept a spreadsheet of payments. Late payments were common because there were no automated reminders, and Sarah often had to awkwardly chase clients. The admin burden was overwhelming, leaving her less time to focus on writing.</p>`,
    solution: `<p>Using n8n, Sarah connected her time-tracking app to Google Sheets, which automatically generated invoices in PDF format. The invoices were emailed to clients with clear due dates, and automated reminders were triggered for overdue payments. Payment status updates were synced back into her Google Sheet without manual work.</p>`,
    results: `<p>Sarah reduced her admin time by 70%. Clients started paying faster thanks to reminders, and cash flow stabilized. She gained back 8–10 hours every month, which she used for billable work. The stress of chasing payments was gone, allowing her to grow her freelance business with peace of mind.</p>`,
    meta: {
      version: "n8n Cloud",
      deployment: "3 days",
      hoursSaved: "10+ hours per month",
    },
  },
  {
    slug: "fitness-studio",
    companyLogo: "/logo1.webp",
    companyName: "Pulse Fitness Studio",
    headline:
      'Pulse Fitness automated <span class="bg-gradient-to-r from-[#ffb552] via-[#ff5873] to-[#b83dff] bg-clip-text text-transparent tracking-tight font-bold">membership renewals</span>',
    quote:
      "Members now get reminders automatically, and our staff stopped drowning in spreadsheets.",
    authorName: "Daniel Roberts",
    authorTitle: "Owner",
    authorProfile: "/picture5.png",
    challenge: `<p>Pulse Fitness had over 300 active members. Staff manually tracked membership expiry dates in Excel and called or texted clients to remind them. This led to late renewals, missed payments, and frustrated staff. Trainers often had to step in to help with admin work, taking time away from fitness programs.</p>`,
    solution: `<p>n8n connected the studio’s CRM, payment processor, and SMS service. Members received automated reminders 7 days before expiry, along with payment links. Once payments were made, the system updated records instantly. The owner could also see upcoming renewals in a simple dashboard.</p>`,
    results: `<p>Membership renewals improved by 35%, admin work dropped significantly, and the team could fully focus on clients. Trainers got back valuable time, revenue consistency improved, and member satisfaction went up because of seamless reminders. The studio scaled without needing extra admin staff.</p>`,
    meta: {
      version: "n8n Enterprise",
      deployment: "1 week",
      hoursSaved: "25+ hours per month",
    },
  },
  {
    slug: "startup-hr",
    companyLogo: "/logo1.webp",
    companyName: "TechSpark",
    headline:
      'TechSpark automated <span class="bg-gradient-to-r from-[#ffb552] via-[#ff5873] to-[#b83dff] bg-clip-text text-transparent tracking-tight font-bold">employee onboarding</span>',
    quote:
      "We no longer lose new hires in paperwork chaos — the process feels smooth.",
    authorName: "Neha Gupta",
    authorTitle: "HR Manager",
    authorProfile: "/picture6.png",
    challenge: `<p>As TechSpark grew rapidly, onboarding became messy. New employees received scattered emails with forms, documents, and policies. HR had to chase signatures, create accounts manually, and coordinate with IT for laptop allocation. This resulted in delayed access for new hires and a poor first-day experience. HR was overwhelmed with repetitive tasks.</p>`,
    solution: `<p>With n8n, the HR team automated the onboarding process. When a candidate accepted an offer, a workflow sent them a personalized welcome email, triggered account creation in Google Workspace, and notified IT to prepare hardware. Policy documents were shared automatically, and e-signatures were collected without manual intervention.</p>`,
    results: `<p>Onboarding time dropped from 5 days to less than 1. HR saved over 20 hours per hire, and employees started with a smooth experience. Productivity improved because new hires had access to tools immediately. TechSpark scaled its hiring process without adding more HR staff, maintaining employee satisfaction.</p>`,
    meta: {
      version: "n8n Cloud",
      deployment: "2 weeks",
      hoursSaved: "80+ hours per month",
    },
  },
  {
    slug: "law-firm",
    companyLogo: "/logo1.webp",
    companyName: "Sharma & Associates",
    headline:
      'Sharma & Associates cut <span class="bg-gradient-to-r from-[#ffb552] via-[#ff5873] to-[#b83dff] bg-clip-text text-transparent tracking-tight font-bold">document prep time</span> in half',
    quote: "Preparing contracts used to take hours — now it’s almost instant.",
    authorName: "Arjun Sharma",
    authorTitle: "Managing Partner",
    authorProfile: "/picture7.png",
    challenge: `<p>The law firm handled dozens of client contracts every month. Lawyers and paralegals spent hours copying client information into standard templates, formatting clauses, and ensuring documents were consistent. Mistakes sometimes slipped in, requiring revisions. The manual process slowed down case handling and frustrated both lawyers and clients who expected quicker service.</p>`,
    solution: `<p>n8n connected the firm’s client database with their contract templates in Google Docs. When a new contract was needed, the workflow pulled client details, inserted them into the correct template, and formatted the document automatically. Lawyers only had to review and approve instead of drafting from scratch.</p>`,
    results: `<p>Document preparation time was cut by 50%, lawyers saved hours every week, and client satisfaction improved. The team could handle more cases without hiring additional paralegals. Accuracy increased because data came directly from the client database, reducing human error. The firm improved turnaround time and built a reputation for efficiency.</p>`,
    meta: {
      version: "n8n Enterprise",
      deployment: "3 weeks",
      hoursSaved: "100+ hours per month",
    },
  },
];
