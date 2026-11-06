/**
 * Renders content that is either real (a string) or a missing fact.
 * Missing facts are created with PLACEHOLDER('label') in src/content and show
 * up as a visibly dashed [PLACEHOLDER: label] marker, so nothing is silently
 * invented and every gap is easy to find (search the site for "PLACEHOLDER").
 */
export function Fill({ value }) {
  if (value && typeof value === 'object' && value.placeholder) {
    return <span className="placeholder-mark">[PLACEHOLDER: {value.label}]</span>
  }
  return <>{value}</>
}

export const isPlaceholder = (value) =>
  Boolean(value && typeof value === 'object' && value.placeholder)
