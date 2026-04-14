// src/hooks/use-toast.ts
import { useState } from "react";
import type { ReactNode } from "react"; // ✅ fixes React.ReactNode error

export interface Toast {
  id: string;
  title?: string;
  description?: string;
  action?: ReactNode; // ✅ use ReactNode directly instead of React.ReactNode
}

export function useToast() {
  const [toasts] = useState<Toast[]>([]);
  return { toasts };
}
