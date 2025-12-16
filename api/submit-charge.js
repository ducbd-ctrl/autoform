export default function handler(req, res) {
    if (req.method === 'POST') {
        res.redirect(302, '/charge-form.html?submitted=true');
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
