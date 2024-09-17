import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"


// useful function created by shadcn init.
// allows us to merge class names 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
