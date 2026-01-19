import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const COOKIE_CONSENT_KEY = "cookie_consent";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
}

export const CookieConsent = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: true,
  });

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      setIsVisible(true);
    } else {
      const savedPreferences = JSON.parse(consent);
      applyAnalytics(savedPreferences.analytics);
    }
  }, []);

  const applyAnalytics = (enabled: boolean) => {
    if (enabled && typeof window !== "undefined") {
      window.gtag?.("consent", "update", {
        analytics_storage: "granted",
      });
    } else if (typeof window !== "undefined") {
      window.gtag?.("consent", "update", {
        analytics_storage: "denied",
      });
    }
  };

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(prefs));
    applyAnalytics(prefs.analytics);
    setIsVisible(false);
  };

  const acceptAll = () => {
    const allAccepted = { necessary: true, analytics: true };
    savePreferences(allAccepted);
  };

  const acceptSelected = () => {
    savePreferences(preferences);
  };

  const rejectOptional = () => {
    const onlyNecessary = { necessary: true, analytics: false };
    savePreferences(onlyNecessary);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-lg">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 mb-1">🍪 {t("cookies.title")}</h3>
            <p className="text-sm text-gray-600">
              {t("cookies.description")}{" "}
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="text-primary hover:underline font-medium"
              >
                {showDetails ? t("cookies.hideDetails") : t("cookies.moreInfo")}
              </button>
            </p>

            {showDetails && (
              <div className="mt-4 space-y-3 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="necessary"
                    checked={preferences.necessary}
                    disabled
                    className="mt-1"
                  />
                  <div>
                    <label htmlFor="necessary" className="font-medium text-gray-900">
                      {t("cookies.necessary")}
                    </label>
                    <p className="text-sm text-gray-500">
                      {t("cookies.necessaryDesc")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="analytics"
                    checked={preferences.analytics}
                    onCheckedChange={(checked) =>
                      setPreferences((prev) => ({ ...prev, analytics: checked as boolean }))
                    }
                    className="mt-1"
                  />
                  <div>
                    <label htmlFor="analytics" className="font-medium text-gray-900">
                      {t("cookies.analytics")}
                    </label>
                    <p className="text-sm text-gray-500">
                      {t("cookies.analyticsDesc")}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-2">
            {showDetails ? (
              <>
                <Button variant="outline" onClick={rejectOptional} size="sm">
                  {t("cookies.rejectOptional")}
                </Button>
                <Button onClick={acceptSelected} size="sm">
                  {t("cookies.savePreferences")}
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" onClick={() => setShowDetails(true)} size="sm">
                  {t("cookies.configure")}
                </Button>
                <Button onClick={acceptAll} size="sm">
                  {t("cookies.acceptAll")}
                </Button>
              </>
            )}
          </div>

          <button
            onClick={rejectOptional}
            className="absolute top-2 right-2 md:static p-1 text-gray-400 hover:text-gray-600"
            aria-label={t("common.close")}
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Declaración de tipos para gtag
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
