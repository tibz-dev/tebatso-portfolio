export type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
  consent: boolean;
  website?: string;
};

export type ContactValidationResult =
  | { success: true; data: ContactFormData }
  | { success: false; issues: Record<string, string> };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function readString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export function validateContact(input: unknown): ContactValidationResult {
  if (!isRecord(input)) {
    return {
      success: false,
      issues: { form: "Invalid submission" },
    };
  }

  const data: ContactFormData = {
    name: readString(input.name),
    email: readString(input.email),
    subject: readString(input.subject),
    message: readString(input.message),
    consent: input.consent === true,
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
  if (data.subject.length < 3 || data.subject.length > 160) {
    issues.subject = "Subject must be between 3 and 160 characters";
  }
  if (data.message.length < 10 || data.message.length > 5000) {
    issues.message = "Message must be between 10 and 5000 characters";
  }
  if (!data.consent) {
    issues.consent = "Please confirm you agree to be contacted";
  }

  return Object.keys(issues).length > 0
    ? { success: false, issues }
    : { success: true, data };
}
