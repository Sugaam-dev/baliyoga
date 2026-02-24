import { useState } from "react";

export default function CenterCardForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    organization: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="w-full max-w-xl rounded-2xl bg-white p-8 shadow-xl">

          {/* Heading */}
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-semibold text-slate-900">
          Connect to Us
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Share your details and we’ll reach out shortly
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        
        <div className="flex flex-col gap-2">
          <label className="text-base font-medium text-slate-800">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="h-11 rounded-md border border-slate-300 px-4 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-base font-medium text-slate-800">
            Organization
          </label>
          <select
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            className="h-11 rounded-md border border-slate-300 px-4 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            required
          >
            <option value="" disabled>
              Select organization type
            </option>
            <option value="student">Student</option>
            <option value="parent">Parent</option>
            <option value="school">School</option>
            <option value="college">College</option>
            <option value="university">University</option>
          </select>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label className="text-base font-medium text-slate-800">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="h-11 rounded-md border border-slate-300 px-4 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base font-medium text-slate-800">
              Phone <span className="text-slate-400">(optional)</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="h-11 rounded-md border border-slate-300 px-4 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-2 w-full rounded-md bg-blue-600 py-3 text-base font-medium text-white transition hover:bg-blue-700"
        >
          See Learning Benefits →
        </button>
      </form>
    </div>
  );
}
