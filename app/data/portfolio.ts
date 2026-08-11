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
      "Software Quality Assurance Tester with hands-on manual testing, bug reporting, and test case creation experience across crowd-testing platforms and a self-directed automation project using Playwright, TypeScript, and the Page Object Model. Brings 3+ years of professional discipline verifying finished output against exact specifications, documenting defects, and testing software after system updates. Detail-oriented and comfortable working within structured, standards-driven processes, with strong interest in developing and maintaining software quality.",
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
      "Selenium WebDriver"
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
        role: "CNC Press Brake Operator / Machinist",
        company: "REV Group Ambulance",
        period: "Nov 2023 - Feb 2026",
        location: "Orlando, FL",
        details: [
          "Tested and validated machine control system software following system updates, identifying and reporting issues such as lagging, unexpected shutdowns, and glitches to ensure stability before returning to production.",
          "Performed quality control and quality assurance checks on finished parts, verifying end results against blueprint specifications using high-tolerance measurement tools.",
          "Verified machine setup and raw material quality prior to production runs to ensure parts met specification from the first cycle.",
          "Maintained detailed production and quality logs to track part measurements and setup parameters."
        ]
      },
      {
        role: "CNC Machinist",
        company: "Ballistic Advantage",
        period: "Jan 2020 - Oct 2023",
        location: "Ocoee, FL",
        details: [
          "Performed quality control and quality assurance checks on finished parts, verifying end results against blueprint specifications using high-tolerance measurement tools.",
          "Edited machine control code and parameters to correct measurement deviations when part output fell outside tolerance, restoring accuracy to specification.",
          "Verified machine setup and material quality prior to production runs and maintained production and quality logs."
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