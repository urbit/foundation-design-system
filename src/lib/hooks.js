import { useState, useCallback, useEffect } from "react";

export function useCopyToClipboard(text, notifyTimeout = 1000) {
  const [copyStatus, setCopyStatus] = useState("inactive");
  const copy = useCallback(() => {
    navigator.clipboard.writeText(text).then(
      () => setCopyStatus("copied"),
      () => setCopyStatus("failed")
    );
  }, [text]);

  useEffect(() => {
    if (copyStatus === "inactive") {
      return;
    }

    const timeoutId = setTimeout(
      () => setCopyStatus("inactive"),
      notifyTimeout
    );

    return () => clearTimeout(timeoutId);
  }, [copyStatus]);

  return [copyStatus, copy];
}
