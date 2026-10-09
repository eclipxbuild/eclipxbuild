"use client";

import { FormEvent, useState } from "react";

const questions = [
  { q: "How much does a website cost?", a: "Eligible projects start at ₹9,999. The final price depends on the project’s complexity, features, number of pages, and integrations. We confirm the scope and quotation before development begins." },
  { q: "Are domain and hosting charges included?", a: "Not unless they are explicitly included in your quotation. Domain registration, hosting, and relevant third-party costs are generally additional." },
  { q: "When will I receive my website’s source code?", a: "We transfer the GitHub project to your GitHub account after full payment, according to the handover terms agreed for your project." },
  { q: "Will I own my website?", a: "You receive the source code and project ownership described in our agreement. Domain registrations, hosting accounts, third-party licenses, and other services can have separate ownership or transfer requirements." },
  { q: "How long does development take?", a: "Timelines depend on project scope, content readiness, complexity, and feedback. We confirm an estimated timeline before starting." },
  { q: "Can I request custom features?", a: "Yes. We assess custom features individually, and they may require additional charges depending on the requirements." },
  { q: "Do you redesign existing websites?", a: "Yes, depending on the existing technology and your project requirements." },
  { q: "Are revisions included?", a: "Revisions are included according to the agreed project scope. Additional revisions or changes may be charged separately." },
  { q: "Can I contact you before ordering?", a: "Yes. Email us at eclipx.build@gmail.com to discuss your project before you decide how to proceed." },
];

export function FAQ() {
  return (
    <div className="faq-list">
      {questions.map(({ q, a }) => (
        <details className="faq-item" key={q}>
          <summary>{q}</summary>
          <div className="faq-answer"><p>{a}</p></div>
        </details>
      ))}
    </div>
  );
}

export function InquiryForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const values = new FormData(form);
    const subject = `Website project inquiry — ${String(values.get("business") || values.get("name"))}`;
    const body = [
      "Hello Eclipse Build,",
      "",
      "I’d like to discuss a website project.",
      "",
      `Name: ${values.get("name")}`,
      `Email: ${values.get("email")}`,
      `Business or brand: ${values.get("business") || "Not provided"}`,
      `Website type: ${values.get("type")}`,
      `Approximate budget: ${values.get("budget") || "Not provided"}`,
      `Desired timeline: ${values.get("timeline") || "Not provided"}`,
      "",
      "Project description:",
      `${values.get("description")}`,
      "",
      "Sent from the Eclipse Build website inquiry form.",
    ].join("\n");
    const emailUrl = `mailto:eclipx.build@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("Your email application should open with a draft. This website has not sent the message; review the draft and send it from your email app.");
    window.location.href = emailUrl;
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="field"><label htmlFor="name">Full name <span aria-hidden="true">*</span></label><input id="name" name="name" autoComplete="name" placeholder="Your name" required maxLength={100} /></div>
        <div className="field"><label htmlFor="email">Email address <span aria-hidden="true">*</span></label><input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required maxLength={254} /></div>
        <div className="field"><label htmlFor="business">Business or brand name</label><input id="business" name="business" autoComplete="organization" placeholder="Your business" maxLength={120} /></div>
        <div className="field"><label htmlFor="type">Type of website <span aria-hidden="true">*</span></label>
          <select id="type" name="type" required defaultValue="">
            <option value="" disabled>Select a project type</option>
            <option>Business website</option><option>Landing page</option><option>Portfolio website</option><option>Startup website</option><option>E-commerce website</option><option>Website redesign</option><option>Custom web development</option><option>Not sure yet</option>
          </select>
        </div>
        <div className="field"><label htmlFor="budget">Approximate budget</label>
          <select id="budget" name="budget" defaultValue="">
            <option value="">Select a range (optional)</option><option>₹9,999–₹20,000</option><option>₹20,000–₹50,000</option><option>₹50,000+</option><option>Need guidance</option>
          </select>
        </div>
        <div className="field"><label htmlFor="timeline">Desired timeline</label>
          <select id="timeline" name="timeline" defaultValue=""><option value="">Select a timeline (optional)</option><option>As soon as practical</option><option>Within 2–4 weeks</option><option>Within 1–2 months</option><option>Flexible / exploring</option></select>
        </div>
        <div className="field field--wide"><label htmlFor="description">Project description <span aria-hidden="true">*</span></label><textarea id="description" name="description" placeholder="What are you building? Tell us about the pages, features, and goals you have in mind." required minLength={10} maxLength={4000} /></div>
      </div>
      <label className="consent" htmlFor="consent"><input id="consent" name="consent" type="checkbox" required /><span>I agree to open my email application with the project details above so I can choose whether to send them to Eclipse Build. This website does not store or submit this form.</span></label>
      <button className="button button--primary form-submit" type="submit">Prepare project inquiry <span className="arrow" aria-hidden="true">↗</span></button>
      <p className="form-handoff" aria-live="polite">{status}</p>
      <p className="form-explainer">Selecting the button opens your email app with a draft addressed to eclipx.build@gmail.com. You still need to review and send it there.</p>
    </form>
  );
}
