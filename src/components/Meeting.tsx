import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

function Meeting() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ "namespace": "discovery" });
      cal("ui", { "cssVarsPerTheme": { "light": { "cal-brand": "#141414" }, "dark": { "cal-brand": "#CDF140" } }, "hideEventTypeDetails": false, "layout": "month_view" });
    })();
  }, [])
  return <Cal namespace="discovery"
    calLink="ben-chigozie/discovery"
    style={{ width: "100%", height: "100%", overflow: "scroll" }}
    config={{ "layout": "month_view", "theme": "dark" }}


  />;
};


function Meetings () {
  
    useEffect(() => {
      (async function () {
        const cal = await getCalApi({ "namespace": "video-editing-trial-intro-call" });
        cal("ui", { "cssVarsPerTheme": { "light": { "cal-brand": "#000000" }, "dark": { "cal-brand": "#bfd243" } }, "hideEventTypeDetails": false, "layout": "month_view" });
      })();
    }, [])
    return <button data-cal-namespace="video-editing-trial-intro-call"
      data-cal-link="asoya-david-kfup7h/video-editing-trial-intro-call"

      data-cal-config='{"layout":"month_view"}'
    >Click me</button>;
  };


export { Meeting, Meetings };