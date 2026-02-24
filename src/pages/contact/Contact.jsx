
import { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    organization: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <main className="min-h-screen bg-[#f5f5f5]">
      {/* Hero Section */}
      <section className="py-12 text-center">
        <h1 className="text-4xl font-semibold text-[#4a4a4a] md:text-5xl">
          Partner With CMG
        </h1>
        <p className="mt-4 text-lg text-[#6b6b6b]">
          Let's strengthen education systems{" "}
          <span className="italic">together</span>.
        </p>

         {/* Decorative Underline */}
        <div className="mx-auto mt-8 max-w-30xl px-4">
          <div className="relative">
            <div className="h-px w-full bg-gradient-to-r from-[#d8d8d8] via-[#c0c0c0] to-[#d8d8d8]" />
            <div className="absolute left-0 top-1/2  -translate-y-1/2 rounded-full bg-[#b0b0b0]" />
            <div className="absolute right-0 top-1/2  -translate-y-1/2 rounded-full bg-[#b0b0b0]" />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="mx-auto max-w-5xl px-4 py-8">
        <div className="rounded-sm border border-[#f7f3f3] bg-[#fafafa] p-6 shadow-sm md:p-8">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Left - Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="fullName"
                  className="text-base font-normal text-[#4a4a4a]"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="h-10 rounded-md border border-[#d0d0d0] bg-white px-3 text-base outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF]"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="organization"
                  className="text-base font-normal text-[#4a4a4a]"
                >
                  Organization
                </label>
                <select
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                  className="h-10 rounded-md border border-[#d0d0d0] bg-white px-3 text-base text-[#4a4a4a] outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF]"
                  required
                >
                  <option value="" disabled>
                    Select organization type
                  </option>
                  <option value="students">Student</option>
                  <option value="parents">Parents</option>
                  <option value="school">School</option>
                  <option value="college">College</option>
                  <option value="university">University</option>
                </select>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-base font-normal text-[#4a4a4a]"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="h-10 rounded-md border border-[#d0d0d0] bg-white px-3 text-base outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF]"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="phone"
                    className="text-base font-normal text-[#4a4a4a]"
                  >
                    Phone <span className="text-[#888]">(optional)</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="h-10 rounded-md border border-[#d0d0d0] bg-white px-3 text-base outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-2 w-fit rounded-md bg-[#0066FF] px-4 py-2 text-[#fdf7f7] transition-colors hover:bg-[#0066FF]"
              >
                See Learning Benefits &rarr;
              </button>
            </form>

            {/* Right - Contact Info */}
            <div className="rounded-sm border border-[#e0e0e0] bg-white p-6">
              <h2 className="mb-6 text-sm font-semibold tracking-wide text-[#6b6b6b]">
                CONTACT INFORMATION
              </h2>

              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 text-[#888]" />
                  <div>
                    <p className="font-medium text-[#4a4a4a]">
                      CMG Office Location
                    </p>
                    <p className="text-[#6b6b6b]">Sheikh Sarai Phase 2</p>
                    <p className="text-[#6b6b6b]">New Delhi 110017</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-[#888]" />
                  <a
                    href="mailto:partners@collegemilgaya.com"
                    className="text-[#4a4a4a] hover:underline"
                  >
                    partners@collegemilgaya.com
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="mt-1 h-5 w-5 text-[#888]" />
                  <div>
                    <p className="text-[#4a4a4a]">+91 98104 08514</p>
                    <p className="text-[#4a4a4a]">+91 98103 41824</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner With Us Section */}
      <section className="mx-auto max-w-3xl px-4 py-12">
        <div className="flex items-center justify-center gap-4">
          <div className="h-px flex-1 bg-[#d0d0d0]" />
          <h2 className="text-sm font-semibold tracking-wide text-[#6b6b6b]">
            PARTNER WITH US
          </h2>
          <div className="h-px flex-1 bg-[#d0d0d0]" />
        </div>

        <p className="mt-6 text-center text-[#6b6b6b]">
          Reach out with your interest in strengthening school and college
          ecosystems across India. We'll get
        </p>

        <p className="mt-4 text-center">
          <a
            href="mailto:partners@collegemilgaya.com"
            className="text-[#4a4a4a] hover:underline"
          >
            partners@collegemilgaya.com
          </a>
        </p>

        <div className="mx-auto mt-8 h-px w-32 bg-[#d0d0d0]" />
      </section>

      {/* Footer Section */}
      <section className="border-t border-[#e0e0e0] bg-[#f0f0f0] py-10">
        <div className="mx-auto max-w-5xl px-4">
          {/* Header with social icons */}
          <div className="mb-8 flex flex-col items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="h-px w-16 bg-[#d0d0d0]" />
              <h2 className="text-sm font-semibold tracking-wide text-[#6b6b6b]">
                PARTNER WITH US
              </h2>
              <div className="h-px w-16 bg-[#d0d0d0]" />
            </div>

            <p className="text-center text-[#6b6b6b]">
              Reach out with your interest in strengthening school and college
              ecosystems across India. We'll get back to you shortly.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="text-[#888] hover:text-[#4a4a4a]"
                aria-label="Chat"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-[#888] hover:text-[#4a4a4a]"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-[#888] hover:text-[#4a4a4a]"
                aria-label="More"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Cards */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Resources Card */}
            <div className="rounded-sm border border-[#e0e0e0] bg-white p-6">
              <h3 className="text-lg font-semibold text-[#4a4a4a]">
                RESOURCES & INSIGHTS
              </h3>
              <p className="mt-3 text-[#6b6b6b]">
                Download academic papers, case studies, or explore iBOOKGPT.
              </p>
              <button className="mt-4 rounded-md border  border-[#0066FF] bg-transparent px-4 py-2 text-[#0066FF] transition-colors hover:bg-[#f5f5f5]">
                View Resources &rarr;
              </button>
            </div>

            {/* Careers Card */}
            <div className="rounded-sm border border-[#e0e0e0] bg-white p-6">
              <h3 className="text-lg font-semibold text-[#4a4a4a]">
                CAREERS AT CMG
              </h3>
              <p className="mt-3 text-[#6b6b6b]">
                Join an outstanding team of educators, psychologists, and tech
                innovators.
              </p>
              <button className="mt-4 rounded-md border border-[#0066FF] bg-transparent px-4 py-2 text-[#0066FF] transition-colors hover:bg-[#f5f5f5]">
                View Open Roles &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
