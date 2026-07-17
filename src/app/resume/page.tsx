"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Printer } from "lucide-react";
import { RESUME_SUMMARY } from "@/lib/data/resume";
import { ResumeHeader } from "@/components/resume/ResumeHeader";
import { ResumeExperience } from "@/components/resume/ResumeExperience";
import { ResumeEducation } from "@/components/resume/ResumeEducation";
import { ResumeSkills } from "@/components/resume/ResumeSkills";
import { ResumeCertifications } from "@/components/resume/ResumeCertifications";

export default function ResumePage() {
  return (
    <main className="min-h-screen px-6 pt-32 pb-20 print:pt-0 print:px-0">
      <div className="max-w-3xl mx-auto">
        {/* Toolbar — hidden when printing */}
        <div className="flex items-center justify-between mb-8 print:hidden">
          <Link
            href="/#home"
            className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors"
          >
            <ArrowLeft size={16} /> Back to portfolio
          </Link>

          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 rounded-[var(--radius-pill)] bg-[var(--color-accent)] px-5 py-2.5 text-sm font-medium text-white hover:bg-[var(--color-accent-soft)] transition-colors"
          >
            <Printer size={16} /> Download CV
          </button>
        </div>

        {/* The resume "sheet" */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass rounded-[var(--radius-glass)] p-8 sm:p-12 print:glass-none print:bg-white print:rounded-none print:p-0 print:shadow-none"
        >
          <ResumeHeader />

          <div className="mb-8 print:mb-6">
            <p className="text-sm text-[var(--color-text-muted)] print:text-gray-700 leading-relaxed">
              {RESUME_SUMMARY.summary}
            </p>
          </div>
          
          <ResumeExperience />
          <ResumeEducation />
          <ResumeSkills />
          <ResumeCertifications />
        </motion.div>
      </div>
    </main>
  );
}