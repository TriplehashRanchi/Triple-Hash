export const caseStudiesData = [
  {
    slug: "delivery-hero",
    companyLogo: "/logo1.webp",
    companyName: "Delivery Hero",
    headline:
      'Delivery Hero saved <span class="bg-gradient-to-r from-[#ffb552] via-[#ff5873] to-[#b83dff] bg-clip-text text-transparent tracking-tight font-bold">200 hours/month</span> with a single IT ops workflow',
    quote:
      "We have seen drastic efficiency improvements since we started using n8n. It's incredibly powerful, but also simple to use.",
    authorName: "Dennis Zahrt",
    authorTitle: "Director of Global IT Service Delivery",
    authorProfile: "/picture2.png", // 🆕 added profile field
    challenge: `
      <p>Delivery Hero is the world’s leading local delivery platform, operating in over 70 countries with over 53,000 global employees. Having an employee base of this size comes with challenges, one of them being people getting locked out of their accounts.</p>
      <p>When locked out, an employee would need to contact IT, who would verify their identity and then restore their access in Okta and Google Workspace. The company saw around 800 such requests per month and on average it took 35 minutes to complete the recovery process. This led to a large number of employees spending time locked out of their accounts and unable to work.</p>
    `,
    solution: `
      <p>Under the leadership of Dennis Zahrt, the IT service delivery team, which includes Slimani Ghaith (Software Engineer) and Dorina Ababii (Data Analyst), resolved to eliminate IT as the obstruction in the process. They had the employee's direct manager approve account recovery, instead of it being managed by the IT team.</p>
      <p>They also set up automated API calls to Okta, Jira and Google systems to trigger the actual account recovery as soon as the manager authorized it. All of this was implemented through a single n8n workflow.</p>
    `,
    results: `
      <p>With account recovery requests being handled automatically by n8n and managers doing the approval, the average time locked out dropped from 35 to 20 mins. This meant that employees were locked out for a total of 200 hours per month less.</p>
      <p>Seeing such large time savings from a single workflow inspired Delivery Hero to identify and automate other manual processes using n8n, e.g. account offboarding and software license assignments.</p>
    `,
    meta: {
      version: "n8n Enterprise",
      deployment: "5 hours",
      hoursSaved: "200 hours per month",
    },
  
  },

  {
    slug: "slack",
    companyLogo: "/logo1.webp",
    companyName: "Slack",
    headline:
      'Slack automated <span class="bg-gradient-to-r from-[#ffb552] via-[#ff5873] to-[#b83dff] bg-clip-text text-transparent tracking-tight font-bold">onboarding workflows</span> for faster employee setup',
    quote:
      "Thanks to n8n, our onboarding process went from days to minutes. Our IT team can now focus on higher-value projects instead of repetitive tasks.",
    authorName: "Maria Gomez",
    authorTitle: "Head of IT Operations",
    authorProfile: "/picture1.png",  
    challenge: `
      <p>Slack, with thousands of employees worldwide, faced significant delays in onboarding new hires. Each employee required manual setup across multiple platforms like Google Workspace, Zoom, and internal tools. This process often took 2–3 days per new hire and created a backlog for the IT team.</p>
    `,
    solution: `
      <p>Using n8n, Slack automated the entire onboarding workflow. As soon as HR entered new employee details, automated API calls were triggered to provision accounts across all tools. Notifications were also sent automatically to managers and employees once setup was complete.</p>
    `,
    results: `
      <p>The onboarding process time was reduced from days to just 15 minutes. IT reported a 70% reduction in manual tickets related to new hire setup, saving approximately 500 hours per month. Employees could start working productively on day one.</p>
    `,
    meta: {
      version: "n8n Cloud",
      deployment: "1 day",
      hoursSaved: "500 hours per month",
    },
  
  },
];  