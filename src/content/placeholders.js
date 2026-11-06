/**
 * Marks a fact we do not have yet. Rendered by <Fill /> as a visible
 * [PLACEHOLDER: label] marker. Replace the call with the real string when known.
 *
 *   email: PLACEHOLDER('club email')   ->   email: 'club@example.edu'
 */
export const PLACEHOLDER = (label) => ({ placeholder: true, label })
