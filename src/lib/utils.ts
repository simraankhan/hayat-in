import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatNumber(value: number) {
  if (value >= 1000) {
    return (value / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
  }
  return value.toString();
}

export function timeAgoShort(date: number | string | Date) {
  const now = Date.now()
  const diff = now - new Date(date).getTime();
  const seconds = diff / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;
  const months = days / 30;
  const years = days / 365;

  if (seconds < 60) return Math.floor(seconds) + 'sec';
  if (minutes < 60) return Math.floor(minutes) + 'min';
  if (hours < 24) return Math.floor(hours) + 'hr';
  if (days < 30) return Math.floor(days) + 'day';
  if (months < 12) return Math.floor(months) + 'm';
  return Math.floor(years) + 'y';
}