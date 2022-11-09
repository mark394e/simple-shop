export function insertOrder(payload) {
  const key =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9vend0YmtvdmFsd25qcHB6ZWJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTg3MTksImV4cCI6MTk4MjE3NDcxOX0.T54ScdOq_PdkBUiFj41oy6MpG_hqs3xUwNBisvJ_2rI";
  const url = "https://oozwtbkovalwnjppzebk.supabase.co";
  fetch(url + "/rest/v1/simpleshop", {
    method: "POST",
    headers: {
      apikey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9vend0YmtvdmFsd25qcHB6ZWJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTg3MTksImV4cCI6MTk4MjE3NDcxOX0.T54ScdOq_PdkBUiFj41oy6MpG_hqs3xUwNBisvJ_2rI",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9vend0YmtvdmFsd25qcHB6ZWJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTg3MTksImV4cCI6MTk4MjE3NDcxOX0.T54ScdOq_PdkBUiFj41oy6MpG_hqs3xUwNBisvJ_2rI",
      Prefer: "return=representation",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then()
    .then();
}

/*
const options = {
  method: 'POST',
  headers: {
    apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9vend0YmtvdmFsd25qcHB6ZWJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTg3MTksImV4cCI6MTk4MjE3NDcxOX0.T54ScdOq_PdkBUiFj41oy6MpG_hqs3xUwNBisvJ_2rI',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9vend0YmtvdmFsd25qcHB6ZWJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTg3MTksImV4cCI6MTk4MjE3NDcxOX0.T54ScdOq_PdkBUiFj41oy6MpG_hqs3xUwNBisvJ_2rI',
    Prefer: 'return=representation'
  },
  body: '{"name":"Breaking Bad","genres":["crime","comedy","drama"],"seasons":5,"director":"Vince Gilligan","rating":4.9,"ongoing":false}'
};

fetch('https://oozwtbkovalwnjppzebk.supabase.co/rest/v1/tvShows', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
*/
