export async function callOpenRouter(prompt, retries = 2) {
    for (let i = 0; i < retries; i++) {
        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ prompt }),
                timeout: 15000
            });
            
            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.error || 'Error en el servidor');
            }
            
            const data = await response.json();
            return data.content || '';
        } catch (error) {
            if (i === retries - 1) {
                throw new Error('No pude conectar con Dasky. Revisa tu conexión.');
            }
            await new Promise(r => setTimeout(r, 1000 * (i + 1)));
        }
    }
}
