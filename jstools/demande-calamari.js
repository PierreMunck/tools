const fetch = require("node-fetch");

fetch("https://maisonronde.calamari.io/webapi/absence-request/new/for-me", {
  "headers": {
    "accept": "application/json, text/javascript, */*; q=0.01",
    "accept-language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",
    "content-type": "application/json",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "sec-gpc": "1",
    "x-requested-with": "XMLHttpRequest",
    "cookie": "intercom-id-b0b2o95w=0e6a89ce-7052-4e79-8965-25d0e54a6439; intercom-session-b0b2o95w=; calamarisesseuir=ZjQyYzVmMzUtMGE2Mi00MDhmLTg1ZjktOGY3MTc0Y2JkNTlk; calamari.cloud.session=12c41ac4-1bfe-448a-a43d-73e81294692dWtu1e9p.qM&jm*7wty%6uY~QU2]*4eI^K~k#o09CGhXI%W&3ay+.oÂ§Xuwr45@Aj1z-Vb|7RvY=; _csrf_token=8df74c9f-ee1a-44ad-b539-83e87f0b1d6f; updateBrowserScreenDisplayed=true"
  },
  "referrer": "https://maisonronde.calamari.io/absence/main-new.do",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"absenceTypeId\":\"2\",\"absenceStart\":\"2021-07-01\",\"absenceEnd\":\"2021-07-01\",\"reason\":\"\",\"substitute\":\"\",\"comment\":\"\",\"fromPart\":\"MORNING\",\"toPart\":\"END_OF_DAY\",\"attachments\":[]}",
  "method": "POST",
  "mode": "cors"
});