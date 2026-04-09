import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind classes with clsx and tailwind-merge to handle conflicts effectively.
 * @param {...string[]} inputs - Classes to merge.
 * @returns {string} - Merged classes.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
