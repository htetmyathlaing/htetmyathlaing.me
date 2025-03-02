import fetchNotionPage from '../../../utils/fetchNotionPage';

export default async function handler(req, res) {
  const {
    query: { id: notionId },
  } = req;

  if (!notionId) {
    return res.status(400).json({ error: 'Missing notionId' });
  }

  try {
    const { recordMap, pageTitle } = await fetchNotionPage(notionId);
    res.status(200).json({ recordMap, pageTitle });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
