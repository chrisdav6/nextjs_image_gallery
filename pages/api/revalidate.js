const handler = async (req, res) => {
  if (req.query.secret !== process.env.REVALIDATE_SECRET) {
    return res.status(401).json({ message: 'Invalid Token!' });
  }

  try {
    await res.unstable_revalidate('/');
    return res.json({ revalidated: true });
  } catch (error) {
    return res.status(500).send('Error Revalidating!');
  }
};

export default handler;
