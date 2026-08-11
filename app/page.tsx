"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio";

const Folder = ({ className }: { className?: string }) => <span className={className}>📁</span>;
const FileCode = ({ className }: { className?: string }) => <span className={className}>📄</span>;
const FileText = ({ className }: { className?: string }) => <span className={className}>📝</span>;
const Terminal = ({ className }: { className?: string }) => <span className={className}>⌨️</span>;
const Code2 = ({ className }: { className?: string }) => <span className={className}>⚙️</span>;

export default function IDEDashboard() {
  const [activeTab, setActiveTab] = useState<"resume" | string>("resume");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const activeProject = portfolioData.projects.find(
    (p) => p.id === activeTab
  );

  return (
    <div className="flex flex-col md:flex-row h-screen w-screen overflow-hidden bg-[#1e1e1e] text-[#d4d4d4] font-mono">
      {/* Mobile Top Header */}
      <div className="md:hidden flex items-center justify-between bg-[#252526] px-4 py-2.5 border-b border-[#2a2a2a] z-30 shrink-0">
        <div className="flex items-center gap-2">
          <Code2 className="text-[#569cd6] w-5 h-5" />
          <span className="text-xs font-bold text-[#cccccc] tracking-wider uppercase">Explorer</span>
        </div>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="bg-[#37373d] text-xs text-white px-3 py-1 rounded border border-[#45454d] hover:bg-[#45454d] transition-colors"
        >
          {isSidebarOpen ? "✕ Close" : "☰ Files"}
        </button>
      </div>

      {/* Activity Bar (Desktop Only) */}
      <div className="hidden md:flex w-12 bg-[#333333] flex-col items-center py-4 border-r border-[#2a2a2a] shrink-0">
        <Code2 className="text-[#569cd6] w-6 h-6 mb-6" />
      </div>

      {/* Sidebar Explorer (Drawer on Mobile, Sidebar on Desktop) */}
      <div
        className={`
          ${isSidebarOpen ? "flex" : "hidden"} md:flex 
          w-full md:w-64 bg-[#252526] border-b md:border-b-0 md:border-r border-[#2a2a2a] 
          flex-col select-none shrink-0 z-20 max-h-[50vh] md:max-h-full overflow-y-auto
        `}
      >
        <div className="hidden md:block px-4 py-2 text-xs font-bold text-[#858585] tracking-wider uppercase">
          Explorer
        </div>

        <div className="py-2 text-sm">
          <div
            onClick={() => {
              setActiveTab("resume");
              setIsSidebarOpen(false);
            }}
            className={`flex items-center gap-2 px-4 py-2 md:py-1.5 cursor-pointer hover:bg-[#2a2d2e] ${
              activeTab === "resume" ? "bg-[#37373d] text-white" : "text-[#cccccc]"
            }`}
          >
            <FileText className="w-4 h-4 text-[#4ec9b0]" />
            <span>RESUME.md</span>
          </div>

          <div className="px-4 py-1.5 flex items-center gap-2 text-[#cccccc] font-semibold mt-2">
            <Folder className="w-4 h-4 text-[#dcb67a]" />
            <span>PROJECTS</span>
          </div>

          {portfolioData.projects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => {
                setActiveTab(proj.id);
                setIsSidebarOpen(false);
              }}
              className={`flex items-center gap-2 pl-8 pr-4 py-2 md:py-1.5 cursor-pointer hover:bg-[#2a2d2e] ${
                activeTab === proj.id ? "bg-[#37373d] text-white" : "text-[#cccccc]"
              }`}
            >
              <FileCode className="w-4 h-4 text-[#569cd6]" />
              <span>{proj.fileName}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Editor & Content Area */}
      <div className="flex-1 flex flex-col bg-[#1e1e1e] min-w-0 min-h-0">
        {/* Workspace Tabs */}
        <div className="flex bg-[#252526] border-b border-[#2a2a2a] overflow-x-auto shrink-0">
          <button
            onClick={() => setActiveTab("resume")}
            className={`flex items-center gap-2 px-3 md:px-4 py-2 text-xs border-r border-[#2a2a2a] shrink-0 ${
              activeTab === "resume"
                ? "bg-[#1e1e1e] text-white border-t-2 border-t-[#007acc]"
                : "bg-[#2d2d2d] text-[#969696]"
            }`}
          >
            <FileText className="w-3.5 h-3.5 text-[#4ec9b0]" />
            RESUME.md
          </button>

          {portfolioData.projects.map((proj) => (
            <button
              key={proj.id}
              onClick={() => setActiveTab(proj.id)}
              className={`flex items-center gap-2 px-3 md:px-4 py-2 text-xs border-r border-[#2a2a2a] shrink-0 ${
                activeTab === proj.id
                  ? "bg-[#1e1e1e] text-white border-t-2 border-t-[#007acc]"
                  : "bg-[#2d2d2d] text-[#969696]"
              }`}
            >
              <FileCode className="w-3.5 h-3.5 text-[#569cd6]" />
              {proj.fileName}
            </button>
          ))}
        </div>

        {/* File Content Workspace */}
        <div className="flex-1 p-4 md:p-6 overflow-y-auto text-xs md:text-sm leading-relaxed">
          {activeTab === "resume" ? (
            <div className="space-y-6 max-w-4xl">
              {/* Header */}
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-[#569cd6]"># {portfolioData.resume.name}</h1>
                <p className="text-[#4ec9b0] font-semibold text-xs md:text-sm">{portfolioData.resume.role}</p>
                <div className="text-xs text-[#808080] mt-2 flex flex-col sm:flex-row flex-wrap gap-x-4 gap-y-1">
                  <span>📍 {portfolioData.resume.contact.location}</span>
                  <span>✉️ {portfolioData.resume.contact.email}</span>
                  <span>
                    🔗{" "}
                    <a
                      href={portfolioData.resume.contact.github}
                      target="_blank"
                      rel="noreferrer"
                      className="underline hover:text-[#569cd6]"
                    >
                      GitHub Portfolio
                    </a>
                  </span>
                </div>
              </div>

              {/* Summary */}
              <div>
                <h2 className="text-base md:text-lg font-semibold text-[#4ec9b0]">## Professional Summary</h2>
                <p className="text-[#ce9178] mt-1 text-xs md:text-sm">"{portfolioData.resume.summary}"</p>
              </div>

              {/* Technical Skills */}
              <div>
                <h2 className="text-base md:text-lg font-semibold text-[#4ec9b0]">## Technical Skills</h2>
                <div className="flex flex-wrap gap-2 mt-2">
                  {portfolioData.resume.skills.map((skill) => (
                    <span key={skill} className="bg-[#264f78] text-[#9cdcfe] px-2.5 py-1 rounded text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div>
                <h2 className="text-base md:text-lg font-semibold text-[#4ec9b0]">## QA & Professional Experience</h2>
                <div className="space-y-4 mt-3">
                  {portfolioData.resume.experience.map((exp, idx) => (
                    <div key={idx} className="border-l-2 border-[#007acc] pl-3 md:pl-4 py-1">
                      <div className="flex justify-between items-baseline flex-wrap gap-1 md:gap-2">
                        <span className="text-[#dcdcaa] font-bold text-xs md:text-sm">
                          {exp.role} — <span className="text-[#cccccc]">{exp.company}</span>
                        </span>
                        <span className="text-xs text-[#808080]">
                          {exp.period} | {exp.location}
                        </span>
                      </div>
                      <ul className="list-disc list-inside text-xs text-[#cccccc] mt-2 space-y-1">
                        {Array.isArray(exp.details) ? (
                          exp.details.map((item, dIdx) => <li key={dIdx}>{item}</li>)
                        ) : (
                          <li>{exp.details}</li>
                        )}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              {portfolioData.resume.education && (
                <div>
                  <h2 className="text-base md:text-lg font-semibold text-[#4ec9b0]">## Education & Training</h2>
                  {portfolioData.resume.education.map((edu, idx) => (
                    <div key={idx} className="text-xs text-[#cccccc] mt-2">
                      <span className="text-[#dcdcaa] font-bold">{edu.school}</span> — {edu.program}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : activeProject ? (
            <div className="space-y-4 max-w-3xl">
              <div className="text-[#6a9955] text-xs">// Module Source File</div>
              <h1 className="text-lg md:text-xl font-bold text-[#dcdcaa]">{activeProject.name}</h1>
              <p className="text-[#ce9178] text-xs md:text-sm">/* {activeProject.description} */</p>

              {activeProject.id === "srs-test-generator" ? (
                <div className="bg-[#181818] border border-[#2a2a2a] rounded p-3 md:p-4 text-xs font-mono space-y-4 overflow-x-auto">
                  <div>
                    <span className="text-[#6a9955]">// Input: Raw Software Requirements Specification (SRS)</span>
                    <div className="mt-1 text-[#dcdcaa]">
                      <span className="text-[#569cd6]">const</span> srsRequirement = &#123;<br />
                      &nbsp;&nbsp;reqId: <span className="text-[#ce9178]">"REQ-001"</span>,<br />
                      &nbsp;&nbsp;title: <span className="text-[#ce9178]">"Password Field Rules"</span>,<br />
                      &nbsp;&nbsp;rule: <span className="text-[#ce9178]">"8-20 characters, requires 1 uppercase, 1 lowercase, 1 digit."</span><br />
                      &#125;;
                    </div>
                  </div>

                  <div>
                    <span className="text-[#6a9955]">// Auto-Generated Playwright Test Case Output</span>
                    <div className="mt-1 text-[#dcdcaa]">
                      <span className="text-[#569cd6]">import</span> &#123; test, expect &#125; <span className="text-[#569cd6]">from</span> <span className="text-[#ce9178]">"@playwright/test"</span>;<br /><br />
                      test.<span className="text-[#dcdcaa]">describe</span>(<span className="text-[#ce9178]">`[&#36;&#123;srsRequirement.reqId&#125;] &#36;&#123;srsRequirement.title&#125;`</span>, () =&gt; &#123;<br />
                      &nbsp;&nbsp;test(<span className="text-[#ce9178]">"Boundary Failure: Input length below 8 characters"</span>, <span className="text-[#569cd6]">async</span> (&#123; page &#125;) =&gt; &#123;<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#569cd6]">await</span> page.fill(<span className="text-[#ce9178]">"#password-input"</span>, <span className="text-[#ce9178]">"Pass1"</span>);<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#569cd6]">await</span> page.click(<span className="text-[#ce9178]">"#submit-btn"</span>);<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#569cd6]">await</span> expect(page.locator(<span className="text-[#ce9178]">".validation-error"</span>)).toContainText(<span className="text-[#ce9178]">"Minimum 8 characters required"</span>);<br />
                      &nbsp;&nbsp;&#125;);<br />
                      &#125;);
                    </div>
                  </div>
                </div>
              ) : (
                <div className="pt-4 overflow-x-auto text-xs md:text-sm">
                  <span className="text-[#569cd6]">public class</span>{" "}
                  <span className="text-[#4ec9b0]">ProjectDetails</span> &#123;
                  <div className="pl-4 md:pl-6 py-2 space-y-1">
                    <div>
                      <span className="text-[#569cd6]">String</span> repo = <span className="text-[#ce9178]">"{activeProject.github}"</span>;
                    </div>
                    <div>
                      <span className="text-[#569cd6]">String[]</span> techStack = &#123;
                      {activeProject.tech.map((t) => `"${t}"`).join(", ")}&#125;;
                    </div>
                  </div>
                  &#125;
                </div>
              )}

              <div className="pt-4">
                <a
                  href={activeProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[#0e639c] hover:bg-[#1177bb] text-white px-3 md:px-4 py-2 rounded text-xs transition-colors"
                >
                  View Repository on GitHub
                </a>
              </div>
            </div>
          ) : null}
        </div>

        {/* Terminal Output */}
        <div className="h-24 md:h-28 bg-[#181818] border-t border-[#2a2a2a] p-2.5 md:p-3 text-[11px] md:text-xs flex flex-col justify-between shrink-0">
          <div className="flex items-center gap-2 text-[#808080]">
            <Terminal className="w-3.5 h-3.5 text-[#4ec9b0]" />
            <span>Terminal Output</span>
          </div>
          <div className="text-[#6a9955] truncate md:whitespace-normal">
            $ npx ts-node srs_test_creator.ts --input=srs_spec.json --out=e2e/tests/<br className="hidden md:inline" />
            [SUCCESS] Auto-generated boundary & validation test cases for Playwright test runner.
          </div>
          <div className="text-[#569cd6] flex items-center justify-between border-t border-[#252526] pt-1 text-[10px] md:text-[11px]">
            <span>UTF-8 | JetBrains Mono</span>
            <span>Ready</span>
          </div>
        </div>
      </div>
    </div>
  );
}