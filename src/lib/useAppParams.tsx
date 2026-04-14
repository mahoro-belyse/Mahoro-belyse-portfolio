// useAppParams.tsx
import { useEffect, useState } from "react";

const isNode = typeof window === "undefined";

const MOBILE_STORAGE_FALLBACK: Storage = (() => {
  const map = new Map<string, string>();
  return {
    getItem: (key: string) => map.get(key) ?? null,
    setItem: (key: string, value: string) => {
      map.set(key, value);
    },
    removeItem: (key: string) => {
      map.delete(key);
    },
    clear: () => map.clear(),
    key: (index: number) => [...map.keys()][index] ?? null,
    get length() {
      return map.size;
    },
  } as Storage;
})();

const storage: Storage = isNode ? MOBILE_STORAGE_FALLBACK : window.localStorage;

const toSnakeCase = (str: string) =>
  str.replace(/([A-Z])/g, "_$1").toLowerCase();

export interface AppParams {
  appId: string | null;
  token: string | null;
  fromUrl: string | null;
  functionsVersion: string | null;
  appBaseUrl: string | null;
}

interface GetParamOptions {
  defaultValue?: string;
  removeFromUrl?: boolean;
}

function getParamValue(
  paramName: string,
  { defaultValue, removeFromUrl }: GetParamOptions = {},
): string | null {
  if (isNode) return defaultValue ?? null;

  const storageKey = `base44_${toSnakeCase(paramName)}`;
  const urlParams = new URLSearchParams(window.location.search);
  const searchParam = urlParams.get(paramName);

  if (removeFromUrl && searchParam !== null) {
    urlParams.delete(paramName);
    const newUrl = `${window.location.pathname}${urlParams.toString() ? `?${urlParams.toString()}` : ""}${window.location.hash}`;
    window.history.replaceState({}, document.title, newUrl);
  }

  if (searchParam !== null) {
    storage.setItem(storageKey, searchParam);
    return searchParam;
  }

  const storedValue = storage.getItem(storageKey);
  if (storedValue !== null) return storedValue;

  if (defaultValue !== undefined) {
    storage.setItem(storageKey, defaultValue);
    return defaultValue;
  }

  return null;
}

export function useAppParams(): AppParams {
  const [params, setParams] = useState<AppParams>(() => ({
    appId: getParamValue("app_id", {
      defaultValue: import.meta.env.VITE_BASE44_APP_ID,
    }),
    token: getParamValue("access_token", { removeFromUrl: true }),
    fromUrl: getParamValue("from_url", {
      defaultValue: isNode ? "" : window.location.href,
    }),
    functionsVersion: getParamValue("functions_version", {
      defaultValue: import.meta.env.VITE_BASE44_FUNCTIONS_VERSION,
    }),
    appBaseUrl: getParamValue("app_base_url", {
      defaultValue: import.meta.env.VITE_BASE44_APP_BASE_URL,
    }),
  }));

  useEffect(() => {
    if (isNode) return;

    const onPopState = () => {
      setParams({
        appId: getParamValue("app_id", {
          defaultValue: import.meta.env.VITE_BASE44_APP_ID,
        }),
        token: getParamValue("access_token", { removeFromUrl: true }),
        fromUrl: getParamValue("from_url", {
          defaultValue: window.location.href,
        }),
        functionsVersion: getParamValue("functions_version", {
          defaultValue: import.meta.env.VITE_BASE44_FUNCTIONS_VERSION,
        }),
        appBaseUrl: getParamValue("app_base_url", {
          defaultValue: import.meta.env.VITE_BASE44_APP_BASE_URL,
        }),
      });
    };

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  return params;
}
