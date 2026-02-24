
import React from 'react';
import { 
  Brain, 
  Lightbulb, 
  GraduationCap, 
  CheckCircle, 
  AlertCircle,
  BarChart3,
  HelpCircle,
  Award,
  Users,
  BookOpen,
  Monitor,
  Ban
} from 'lucide-react';
import CenterCardForm from './CenterCardForm';

export default function StudentsAndParents() {
  const primaryBlue = '#0066FF';

  return (
    <main className="w-full bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header Section */}
      <section className="w-full px-4 py-12 md:py-20 text-center border-b border-slate-200">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          Students & Parents
        </h1>
        <p className="text-lg md:text-xl font-medium text-slate-600 mb-6">
          Clarity for students. Confidence for parents.
        </p>
        <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          A structured, institution-led system that supports students and gives parents visibility—without pressure or guesswork.
        </p>
      </section>

      {/* Both Students & Parents Face Section */}
      <section className="w-full px-4 py-12 md:py-16 border-b border-slate-200">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-12">
          Both Students & Parents Face:
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Students Feel */}
          <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-8 pb-4 border-b-2" style={{ borderColor: primaryBlue }}>
              STUDENTS FEEL
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Lightbulb className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: primaryBlue }} />
                <span className="text-slate-700 font-medium">Pressure</span>
              </div>
              <div className="flex items-start gap-4">
                <GraduationCap className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: primaryBlue }} />
                <span className="text-slate-700 font-medium">Confusion</span>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: primaryBlue }} />
                <span className="text-slate-700 font-medium">Unclear direction</span>
              </div>
            </div>
          </div>

          {/* Parents Feel */}
          <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-8 pb-4 border-b-2" style={{ borderColor: primaryBlue }}>
              PARENTS FEEL
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <HelpCircle className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: primaryBlue }} />
                <span className="text-slate-700 font-medium">Anxiety</span>
              </div>
              <div className="flex items-start gap-4">
                <BarChart3 className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: primaryBlue }} />
                <span className="text-slate-700 font-medium">Guesswork</span>
              </div>
              <div className="flex items-start gap-4">
                <Monitor className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: primaryBlue }} />
                <span className="text-slate-700 font-medium">Lack of visibility</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full px-4 py-12 md:py-16 border-b border-slate-200">
        <p className="text-center text-slate-600 text-lg mb-12">
          One integrated ecosystem. Different benefits for each.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* For Students */}
          <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-8 pb-4 border-b-2" style={{ borderColor: primaryBlue }}>
              FOR STUDENTS
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Award className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: primaryBlue }} />
                <span className="text-slate-700 font-medium">Self-awareness</span>
              </div>
              <div className="flex items-start gap-4">
                <Users className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: primaryBlue }} />
                <span className="text-slate-700 font-medium">Academic confidence</span>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: primaryBlue }} />
                <span className="text-slate-700 font-medium">Decision readiness</span>
              </div>
              <div className="flex items-start gap-4">
                <Brain className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: primaryBlue }} />
                <span className="text-slate-700 font-medium">Psychological safety</span>
              </div>
            </div>
          </div>

          {/* For Parents */}
          <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-8 pb-4 border-b-2" style={{ borderColor: primaryBlue }}>
              FOR PARENTS
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <BarChart3 className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: primaryBlue }} />
                <span className="text-slate-700 font-medium">Transparency</span>
              </div>
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: primaryBlue }} />
                <span className="text-slate-700 font-medium">Readiness signals</span>
              </div>
              <div className="flex items-start gap-4">
                <BookOpen className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: primaryBlue }} />
                <span className="text-slate-700 font-medium">Structured guidance</span>
              </div>
              <div className="flex items-start gap-4">
                <Ban className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: primaryBlue }} />
                <span className="text-slate-700 font-medium">No blind decisions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes This Possible Section */}
      <section className="w-full px-4 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-8">
          What makes this possible:
        </h2>
        
        <p className="text-center text-slate-700 text-lg mb-12 max-w-2xl mx-auto">
          We build systems that guide decisions safely.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Psychometrics */}
          <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <Brain className="w-8 h-8 flex-shrink-0" style={{ color: primaryBlue }} />
              <h3 className="text-lg font-bold text-slate-900">Psychometrics</h3>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Advanced psychological assessment tools that measure student aptitude, learning patterns, emotional intelligence, and decision-making capacity to provide personalized insights for academic and career planning.
            </p>
          </div>

          {/* Academic Reinforcement (iBookGPT) */}
          <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <BookOpen className="w-8 h-8 flex-shrink-0" style={{ color: primaryBlue }} />
              <div>
                <h3 className="text-lg font-bold text-slate-900">Academic Reinforcement</h3>
                <p className="text-sm text-slate-500 mt-1">(iBookGPT)</p>
              </div>
            </div>
            <p className="text-slate-600 leading-relaxed">
              An intelligent AI-powered learning companion that provides personalized academic support, adaptive learning paths, and real-time feedback to reinforce understanding and boost academic performance across all subjects.
            </p>
          </div>
        </div>
      </section>
                <div className="min-h-screen w-full flex items-center justify-center bg-slate-100 px-4">
            <CenterCardForm />
          </div>

    </main>
  );
}


































// import { useState } from 'react';

// import { 
//   Brain, 
//   Lightbulb, 
//   GraduationCap, 
//   CheckCircle, 
//   AlertCircle,
//   BarChart3,
//   HelpCircle,
//   Award,
//   Users,
//   BookOpen,
//   Monitor,
//   Ban
// } from 'lucide-react';

// export default function StudentsAndParents() {
//   const primaryBlue = '#0066FF';
//     const [formData, setFormData] = useState({
//     fullName: "",
//     organization: "",
//     email: "",
//     phone: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//   };
//   return (
//     <main className="w-full bg-gradient-to-br from-slate-50 to-slate-100">
//       {/* Header Section */}
//       <section className="w-full px-4 py-12 md:py-20 text-center border-b border-slate-200">
//         <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
//           Students & Parents
//         </h1>
//         <p className="text-lg md:text-xl font-medium text-slate-600 mb-6">
//           Clarity for students. Confidence for parents.
//         </p>
//         <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
//           A structured, institution-led system that supports students and gives parents visibility—without pressure or guesswork.
//         </p>
//       </section>

//       {/* Both Students & Parents Face Section */}
//       <section className="w-full px-4 py-12 md:py-16 border-b border-slate-200">
//         <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-12">
//           Both Students & Parents Face:
//         </h2>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//           {/* Students Feel */}
//           <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
//             <h3 className="text-lg font-bold text-slate-900 mb-8 pb-4 border-b-2" style={{ borderColor: primaryBlue }}>
//               STUDENTS FEEL
//             </h3>
//             <div className="space-y-6">
//               <div className="flex items-start gap-4">
//                 <Lightbulb className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: primaryBlue }} />
//                 <span className="text-slate-700 font-medium">Pressure</span>
//               </div>
//               <div className="flex items-start gap-4">
//                 <GraduationCap className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: primaryBlue }} />
//                 <span className="text-slate-700 font-medium">Confusion</span>
//               </div>
//               <div className="flex items-start gap-4">
//                 <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: primaryBlue }} />
//                 <span className="text-slate-700 font-medium">Unclear direction</span>
//               </div>
//             </div>
//           </div>

//           {/* Parents Feel */}
//           <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
//             <h3 className="text-lg font-bold text-slate-900 mb-8 pb-4 border-b-2" style={{ borderColor: primaryBlue }}>
//               PARENTS FEEL
//             </h3>
//             <div className="space-y-6">
//               <div className="flex items-start gap-4">
//                 <HelpCircle className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: primaryBlue }} />
//                 <span className="text-slate-700 font-medium">Anxiety</span>
//               </div>
//               <div className="flex items-start gap-4">
//                 <BarChart3 className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: primaryBlue }} />
//                 <span className="text-slate-700 font-medium">Guesswork</span>
//               </div>
//               <div className="flex items-start gap-4">
//                 <Monitor className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: primaryBlue }} />
//                 <span className="text-slate-700 font-medium">Lack of visibility</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Benefits Section */}
//       <section className="w-full px-4 py-12 md:py-16 border-b border-slate-200">
//         <p className="text-center text-slate-600 text-lg mb-12">
//           One integrated ecosystem. Different benefits for each.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//           {/* For Students */}
//           <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
//             <h3 className="text-lg font-bold text-slate-900 mb-8 pb-4 border-b-2" style={{ borderColor: primaryBlue }}>
//               FOR STUDENTS
//             </h3>
//             <div className="space-y-6">
//               <div className="flex items-start gap-4">
//                 <Award className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: primaryBlue }} />
//                 <span className="text-slate-700 font-medium">Self-awareness</span>
//               </div>
//               <div className="flex items-start gap-4">
//                 <Users className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: primaryBlue }} />
//                 <span className="text-slate-700 font-medium">Academic confidence</span>
//               </div>
//               <div className="flex items-start gap-4">
//                 <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: primaryBlue }} />
//                 <span className="text-slate-700 font-medium">Decision readiness</span>
//               </div>
//               <div className="flex items-start gap-4">
//                 <Brain className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: primaryBlue }} />
//                 <span className="text-slate-700 font-medium">Psychological safety</span>
//               </div>
//             </div>
//           </div>

//           {/* For Parents */}
//           <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
//             <h3 className="text-lg font-bold text-slate-900 mb-8 pb-4 border-b-2" style={{ borderColor: primaryBlue }}>
//               FOR PARENTS
//             </h3>
//             <div className="space-y-6">
//               <div className="flex items-start gap-4">
//                 <BarChart3 className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: primaryBlue }} />
//                 <span className="text-slate-700 font-medium">Transparency</span>
//               </div>
//               <div className="flex items-start gap-4">
//                 <AlertCircle className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: primaryBlue }} />
//                 <span className="text-slate-700 font-medium">Readiness signals</span>
//               </div>
//               <div className="flex items-start gap-4">
//                 <BookOpen className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: primaryBlue }} />
//                 <span className="text-slate-700 font-medium">Structured guidance</span>
//               </div>
//               <div className="flex items-start gap-4">
//                 <Ban className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: primaryBlue }} />
//                 <span className="text-slate-700 font-medium">No blind decisions</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* What Makes This Possible Section */}
//       <section className="w-full px-4 py-12 md:py-16">
//         <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-8">
//           What makes this possible:
//         </h2>
        
//         <p className="text-center text-slate-700 text-lg mb-12 max-w-2xl mx-auto">
//           We build systems that guide decisions safely.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//           {/* Psychometrics */}
//           <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
//             <div className="flex items-start gap-4 mb-4">
//               <Brain className="w-8 h-8 flex-shrink-0" style={{ color: primaryBlue }} />
//               <h3 className="text-lg font-bold text-slate-900">Psychometrics</h3>
//             </div>
//             <p className="text-slate-600 leading-relaxed">
//               Advanced psychological assessment tools that measure student aptitude, learning patterns, emotional intelligence, and decision-making capacity to provide personalized insights for academic and career planning.
//             </p>
//           </div>

//           {/* Academic Reinforcement (iBookGPT) */}
//           <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
//             <div className="flex items-start gap-4 mb-4">
//               <BookOpen className="w-8 h-8 flex-shrink-0" style={{ color: primaryBlue }} />
//               <div>
//                 <h3 className="text-lg font-bold text-slate-900">Academic Reinforcement</h3>
//                 <p className="text-sm text-slate-500 mt-1">(iBookGPT)</p>
//               </div>
//             </div>
//             <p className="text-slate-600 leading-relaxed">
//               An intelligent AI-powered learning companion that provides personalized academic support, adaptive learning paths, and real-time feedback to reinforce understanding and boost academic performance across all subjects.
//             </p>
//           </div>
//         </div>
//       </section>
     


//       <section className="w-full max-w-3xl rounded-xl bg-white p-8 shadow-sm">
//       <form onSubmit={handleSubmit} className="space-y-6">
        
//         {/* Full Name */}
//         <div className="flex flex-col gap-2">
//           <label className="text-base font-medium text-slate-800">
//             Full Name
//           </label>
//           <input
//             type="text"
//             name="fullName"
//             value={formData.fullName}
//             onChange={handleChange}
//             className="h-11 rounded-md border border-slate-300 px-4 text-base outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
//             required
//           />
//         </div>

//         {/* Organization */}
//         <div className="flex flex-col gap-2">
//           <label className="text-base font-medium text-slate-800">
//             Organization
//           </label>
//           <select
//             name="organization"
//             value={formData.organization}
//             onChange={handleChange}
//             className="h-11 rounded-md border border-slate-300 px-4 text-base text-slate-700 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
//             required
//           >
//             <option value="" disabled>
//               Select organization type
//             </option>
//             <option value="student">Student</option>
//             <option value="parent">Parent</option>
//             <option value="school">School</option>
//             <option value="college">College</option>
//             <option value="university">University</option>
//           </select>
//         </div>

//         {/* Email + Phone */}
//         <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
//           <div className="flex flex-col gap-2">
//             <label className="text-base font-medium text-slate-800">
//               Email
//             </label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="h-11 rounded-md border border-slate-300 px-4 text-base outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
//               required
//             />
//           </div>

//           <div className="flex flex-col gap-2">
//             <label className="text-base font-medium text-slate-800">
//               Phone <span className="text-slate-400">(optional)</span>
//             </label>
//             <input
//               type="tel"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               className="h-11 rounded-md border border-slate-300 px-4 text-base outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
//             />
//           </div>
//         </div>

//         {/* Button */}
//         <button
//           type="submit"
//           className="mt-2 inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-2.5 text-base font-medium text-white transition hover:bg-blue-700"
//         >
//           See Learning Benefits →
//         </button>
//       </form>
//     </section>


//     </main>
//   );
// }
