import axios from "axios";

export const stats = async (req, res) => {
  try {
    const song = req.body.song,
      words = song.split(" "),
      lines = song.split("\n");
    res.status(200).json({
      words: words.length,
      lines: lines.length,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const translate = async (req, res) => {
  const token =
    "a_ItVQVpy8n2JpN7SO382k7W0vMPV3O27WE9QQ0PXkAAAPDX9HEHRS5VJmcPuOPGzZoH2U0PglLUVbv2W0";
  try {
    const soli = await axios({
      method: "post",
      url: "https://api-b2b.backenster.com/b1/api/v3/translate/",
      data: {
        'from': "en_GB",
        'to': "es_CO",
        'data': req.body.song,
        'platform': "api",
      },
      headers: { 'Authorization': "Bearer " + token },
    });
    res.status(200).json({
      result: soli.data.result
    });
  } catch (error) {
    res.status(500).json(error);
  }
};
