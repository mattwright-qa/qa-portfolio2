import { User } from "lucide-react"

export const portfolioData = {
  resume: {
    title: "RESUME.md",
    name: "MATTHEW WRIGHT",
    role: "Quality Assurance Tester | Automation Engineer",
    contact: {
      location: "Orlando, FL",
      phone: "(407) ***-****",
      email: "mattwright.qa@gmail.com",
      github: "https://github.com/mattwright-qa/savarus"
    },
    summary:
      "Software Quality Assurance Tester with hands-on manual testing, bug reporting, and test case creation experience across crowd-testing platforms and a self-directed automation project using Playwright, TypeScript, and the Page Object Model. Brings 5 years of professional discipline verifying finished output against exact specifications, documenting defects, and testing software after system updates. Detail-oriented and comfortable working within structured, standards-driven processes, with strong interest in developing and maintaining software quality.",
    skills: [
      "Manual & Functional Testing",
      "Playwright",
      "TypeScript",
      "JavaScript",
      "Java",
      "Jira",
      "REST API & Postman",
      "SQL",
      "Page Object Model (POM)",
      "Git & GitHub",
      "Agile/Scrum",
      "Selenium WebDriver",
      "Python",
      "Microsoft Office Suite (Word, Excel, PowerPoint, Outlook)"
    ],
    experience: [
      {
        role: "Crowd-Testing Contributor",
        company: "uTest, Test IO, Ubertesting",
        period: "Ongoing",
        location: "Remote",
        details: [
          "Performed manual functional testing and bug reporting on live client web and mobile applications through paid crowd-testing platforms.",
          "Wrote clear, reproducible defect reports and communicated critical issues per each platform's bug tracking workflow."
        ]
      },
      {
        role: "IT Help Desk Technician",
        company: "REV Group Ambulance",
        period: "Nov 2023 - Feb 2026",
        location: "Orlando, FL",
        details: [
          "Employees needed fast, reliable issue resolution to stay productive: managed and resolved help desk tickets covering hardware, software, and network issues, prioritizing by severity and tracking each through to closure." ,
          "User access issues threatened productivity and security: administered Active Directory — account creation, password resets, and group/permissions management — to keep employees securely connected to the systems they needed." ,
          "Unfamiliar or complex issues needed accurate root-cause identification, not guesswork: researched error messages, vendor documentation, and internal knowledge bases to diagnose and resolve tickets rather than escalating unresolved." ,
          "Software problems disrupted daily operations: provided software installation, configuration, and troubleshooting support across the organization, verifying each fix worked before closing the ticket — the same close-the-loop verification used in QA defect resolution."
        ]
      },
      {
        role: "IT Help Desk Technician",
        company: "Ballistic Advantage",
        period: "Jan 2020 - Oct 2023",
        location: "Ocoee, FL",
        details: [
          "Staff across departments needed responsive IT support: fielded and resolved help desk tickets for hardware, software, and connectivity issues, documenting steps taken and outcomes for each." ,
          "User provisioning and system access needed consistent management: maintained Active Directory accounts, permissions, and group memberships, and researched recurring issues to build repeatable troubleshooting steps rather than relying on temporary workarounds." ,
          "End users needed working software to stay productive: provided software installation, configuration, and troubleshooting support, confirming each fix resolved the issue before closing the ticket." 
        ]
      }
    ],
    education: [
      {
        school: "Seminole State College",
        program: "Computer Programming (Java, Web Programming, and Data Structures)"
      }
    ]
  },
 projects: [
    {
      id: "srs-test-generator",
      fileName: "srs_test_creator.ts",
      name: "SRS Requirement-to-Test-Case Creator",
      description:
        "Automated utility that parses raw SRS requirements into structured Playwright automation stubs and boundary value test cases.",
      github: "https://github.com/mattwright-qa/srs-test-generator",
      tech: ["TypeScript", "Playwright", "RegEx", "JSON Schema"]
    },
    {
      id: "automation-framework",
      fileName: "ai_qa_automation_suite.ts",
      name: "End-to-End AI QA Workflow & API Automation Suite",
      description:
        "Automated end-to-end regression suite of 450+ test scenarios using Playwright and Java, reducing manual execution time by ~70%. Applied POM for modularity and executed REST API testing via Postman.",
      github: "https://github.com/mattwright-qa/savarus",
      tech: ["Playwright", "TypeScript", "Java", "Postman", "Jira", "POM"]
    }
  ]
};