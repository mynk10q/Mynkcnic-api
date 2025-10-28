import fetch from "node-fetch";

export default async function handler(req, res) {
  const { cnic } = req.query;

  if (!cnic) {
    return res.status(400).json({ error: "Missing cnic parameter" });
  }

  try {
    const apiUrl = `https://paknuminfo-by-narcos.vercel.app/api/familyinfo?cnic=${encodeURIComponent(cnic)}`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    res.status(200).json({
      key: "mynk api",
      username: "@_mynk_mynk_mynk",
      tag: "api by mynk",
      data: data
    });
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch data",
      details: error.message
    });
  }
}
