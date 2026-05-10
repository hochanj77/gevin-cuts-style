/**
 * Format an E.164 phone number (e.g. "+15551234567") into a readable
 * US-style display format (e.g. "(555) 123-4567").
 *
 * Falls back to returning the input untouched if it doesn't match.
 */
export function formatPhone(e164: string): string {
  const match = e164.match(/^\+1(\d{3})(\d{3})(\d{4})$/);
  if (!match) return e164;
  const [, area, prefix, line] = match;
  return `(${area}) ${prefix}-${line}`;
}
