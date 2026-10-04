export type TestimonialFormData = {
  name: string;
  email: string;
  role: string;
  company?: string;
  rating: number;
  quote: string;
  website?: string;
};

export type TestimonialValidationResult =
  | { success: true; data: TestimonialFormData }
  | { success: false; issues: Record<string, string> };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function readString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export function validateTestimonial(
  input: unknown
): TestimonialValidationResult {
  if (!isRecord(input)) {
    return {
      success: false,
      issues: { form: "Invalid submission" },
    };
  }

  const rating =
    typeof input.rating === "number" && Number.isFinite(input.rating)
      ? input.rating
      : 0;

  const data: TestimonialFormData = {
    name: readString(input.name),
    email: readString(input.email),
    role: readString(input.role),
    company: readString(input.company) || undefined,
    rating,
    quote: readString(input.quote),
    website: readString(input.website),
  };

  const issues: Record<string, string> = {};

  if (data.website) issues.website = "Spam detected";
  if (data.name.length < 2 || data.name.length > 100) {
    issues.name = "Name must be between 2 and 100 characters";
  }
  if (!EMAIL_PATTERN.test(data.email) || data.email.length > 254) {
    issues.email = "Enter a valid email address";
  }
  if (data.role.length < 2 || data.role.length > 100) {
    issues.role = "Role must be between 2 and 100 characters";
  }
  if (data.company && data.company.length > 120) {
    issues.company = "Company must be 120 characters or fewer";
  }
  if (!Number.isInteger(data.rating) || data.rating < 1 || data.rating > 5) {
    issues.rating = "Rating must be between 1 and 5";
  }
  if (data.quote.length < 20 || data.quote.length > 3000) {
    issues.quote = "Testimonial must be between 20 and 3000 characters";
  }

  return Object.keys(issues).length > 0
    ? { success: false, issues }
    : { success: true, data };
}
