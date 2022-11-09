export async function insertOrder(payload) {
  const key =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9vend0YmtvdmFsd25qcHB6ZWJrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTg3MTksImV4cCI6MTk4MjE3NDcxOX0.T54ScdOq_PdkBUiFj41oy6MpG_hqs3xUwNBisvJ_2rI";
  const url = "https://oozwtbkovalwnjppzebk.supabase.co";
  const res = await fetch(url + "/rest/v1/simpleshop", {
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
  });
  return await res.json();
}
