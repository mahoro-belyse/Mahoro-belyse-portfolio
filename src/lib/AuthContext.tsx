// AuthContext.tsx
import React, { createContext, useState, useContext, useEffect } from "react";
import { useAppParams, type AppParams } from "@/lib/useAppParams";
import axios from "axios";

// ✅ Single unified interface — remove the two separate ones
interface AuthError {
  type: "auth_required" | "user_not_registered" | "unknown" | string;
  message: string;
}

interface AppPublicSettings {
  id: string;
  public_settings: Record<string, any>;
}

interface AuthContextProps {
  user: any | null;
  isAuthenticated: boolean;
  isLoadingAuth: boolean;
  isLoadingPublicSettings: boolean;
  authError: AuthError | null;
  appPublicSettings: AppPublicSettings | null;
  logout: () => void;
  checkAppState: () => Promise<void>;
  navigateToLogin: () => void; // ✅ moved here from the first duplicate
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const appParams: AppParams = useAppParams();

  const [user, setUser] = useState<any | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoadingAuth, setIsLoadingAuth] = useState(true);
  const [isLoadingPublicSettings, setIsLoadingPublicSettings] = useState(true);
  const [authError, setAuthError] = useState<AuthError | null>(null);
  const [appPublicSettings, setAppPublicSettings] =
    useState<AppPublicSettings | null>(null);

  useEffect(() => {
    checkAppState();
  }, [appParams.token]);

  const checkAppState = async () => {
    try {
      setIsLoadingPublicSettings(true);
      setAuthError(null);

      const { data: publicSettings } = await axios.get(
        `/api/apps/public/prod/public-settings/by-id/${appParams.appId}`,
        {
          headers: {
            "X-App-Id": appParams.appId ?? "",
            Authorization: appParams.token
              ? `Bearer ${appParams.token}`
              : undefined,
          },
        },
      );

      setAppPublicSettings(publicSettings);

      if (appParams.token) {
        await checkUserAuth();
      } else {
        setIsAuthenticated(false);
        setIsLoadingAuth(false);
      }

      setIsLoadingPublicSettings(false);
    } catch (error: any) {
      setAuthError({
        type: "unknown",
        message: error?.message || "Failed to load app",
      });
      setIsLoadingAuth(false);
      setIsLoadingPublicSettings(false);
    }
  };

  const checkUserAuth = async () => {
    try {
      setIsLoadingAuth(true);

      const { data: currentUser } = await axios.get("/api/auth/me", {
        headers: {
          Authorization: appParams.token
            ? `Bearer ${appParams.token}`
            : undefined,
        },
      });

      setUser(currentUser);
      setIsAuthenticated(true);
      setIsLoadingAuth(false);
    } catch (error: any) {
      setUser(null);
      setIsAuthenticated(false);
      setIsLoadingAuth(false);

      if (error.response?.status === 401 || error.response?.status === 403) {
        setAuthError({
          type: "auth_required",
          message: "Authentication required",
        });
      }
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    window.location.href = "/login";
  };

  // ✅ Implement navigateToLogin
  const navigateToLogin = () => {
    window.location.href = "/login";
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoadingAuth,
        isLoadingPublicSettings,
        authError,
        appPublicSettings,
        logout,
        checkAppState,
        navigateToLogin, // ✅ added to provider value
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};

// ✅ Export AuthError so App.tsx and UserNotRegisteredError.tsx can use it
export type { AuthError };
