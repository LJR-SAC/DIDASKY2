export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'POST') return res.status(405).json({ error: 'Método no permitido' });
    
    const { prompt } = req.body;
    if (!prompt || typeof prompt !== 'string') {
        return res.status(400).json({ error: 'Prompt inválido' });
    }
    
    const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
    if (!OPENROUTER_API_KEY) {
        console.error('API Key no configurada');
        return res.status(500).json({ error: 'Servicio temporalmente no disponible' });
    }
    
    try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 20000);
        
        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            signal: controller.signal,
            headers: {
                'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
                'Content-Type': 'application/json',
                'HTTP-Referer': process.env.VERCEL_URL || 'https://didasky.vercel.app',
                'X-Title': 'Didasky'
            },
            body: JSON.stringify({
                model: "nvidia/nemotron-3-super-120b-a12b:free",
                messages: [
                    {
                        role: 'system',
                        content: 'Eres Dasky, asistente educativo de Didasky. NUNCA des respuestas directas; solo pistas o análisis de error paso a paso. Si el usuario pide análisis de error, clasifica el tipo de error (conceptual, cálculo, fórmula, lógica) y genera un ejercicio de recuperación similar.'
                    },
                    { role: 'user', content: prompt }
                ],
                temperature: 0.7,
                max_tokens: 1500
            })
        });
        
        clearTimeout(timeout);
        
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.error?.message || 'Error en OpenRouter');
        }
        
        const content = data.choices?.[0]?.message?.content || '';
        if (!content) throw new Error('Respuesta vacía');
        
        res.status(200).json({ content });
    } catch (error) {
        console.error('Error en chat:', error.message);
        res.status(500).json({ error: 'Error procesando solicitud' });
    }
}
