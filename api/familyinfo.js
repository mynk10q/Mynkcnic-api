import fetch from "node-fetch";

export default async function handler(req, res) {
  const { cnic, key } = req.query;

  // --- Simple API key check ---
  if (key !== "mynkapi") {
    return res.status(403).json({ error: "Invalid API key" });
  }

  // --- Check if CNIC provided ---
  if (!cnic) {
    return res.status(400).json({ error: "Please provide CNIC number" });
  }

  try {
    // Dummy response for test
    const data = {
      cnic,
      name: "Ali Khan",
      father: "Rehman Khan",
      address: "Karachi, Pakistan",
      family: [
        { name: "Sara Khan", relation: "Wife" },
        { name: "Ahmed Khan", relation: "Son" }
      ]
    };

    // --- Final response with footer tag at bottom ---
    res.status(200).json({
      success: true,
      data,
      footer: "API by Mynk | © @_mynk_mynk_mynk"
    });
  } catch (error) {
    res.status(500).json({
      error: "Internal server error",
      footer: "API by Mynk | © @_mynk_mynk_mynk"
    });
  }
}
