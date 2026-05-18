import { callOpenRouter } from './IA.js';

const MATERIAS = {
    fisica: {
        nombre: 'Física',
        icono: '⚗️',
        color: '#c9932a',
        temas: [
            {
                id: 'mru',
                nombre: 'MRU',
                desc: 'Movimiento Rectilíneo Uniforme',
                emoji: '🚗',
                diagnosticos: [
                    { texto: "Un auto viaja a velocidad constante de 80 km/h durante 2.5 horas. ¿Qué distancia recorre?", respuesta: 200 },
                    { texto: "Un ciclista recorre 45 km en 1.5 horas. ¿Cuál es su velocidad promedio en km/h?", respuesta: 30 },
                    { texto: "Un tren recorre 360 km en 6 horas a velocidad constante. ¿Cuál es su velocidad?", respuesta: 60 },
                    { texto: "Un corredor mantiene una velocidad de 12 m/s durante 25 segundos. ¿Qué distancia corre?", respuesta: 300 },
                    { texto: "Un barco viaja a 20 km/h y recorre 100 km. ¿Cuánto tiempo tarda?", respuesta: 5 },
                    { texto: "Dos móviles se acercan: uno a 15 km/h y otro a 25 km/h. Si están separados 80 km, ¿en cuántas horas se encuentran?", respuesta: 2 },
                    { texto: "Un avión viaja a 900 km/h durante 3 horas. ¿Qué distancia recorre?", respuesta: 2700 },
                    { texto: "Una persona camina a 1.5 m/s durante 120 segundos. ¿Cuántos metros recorre?", respuesta: 180 },
                    { texto: "Un vehículo recorre 150 km a una velocidad constante de 50 km/h. ¿Cuánto tiempo invierte?", respuesta: 3 },
                    { texto: "Dos corredores se alejan: uno a 8 m/s y otro a 6 m/s. ¿Cuál es su velocidad de separación en m/s?", respuesta: 14 }
                ],
                fallbacks: [
                    { nivel: 1, texto: "Un automóvil viaja a 60 km/h durante 2 horas. ¿Qué distancia recorre?", respuesta: 120 },
                    { nivel: 2, texto: "Un ciclista recorre 45 km en 1.5 horas. ¿Cuál es su velocidad en km/h?", respuesta: 30 },
                    { nivel: 3, texto: "Un autobús recorre 18 km a velocidad constante en 24 minutos. ¿Cuál es la velocidad en km/h?", respuesta: 45 },
                    { nivel: 4, texto: "Dos ciudades están separadas 150 km. Un auto viaja a 75 km/h desde la primera ciudad. ¿Cuánto tiempo tarda en llegar?", respuesta: 2 },
                    { nivel: 5, texto: "Dos ciclistas salen simultáneamente de dos pueblos separados 42 km. Uno va a 18 km/h y el otro a 24 km/h en dirección opuesta. ¿Cuánto tiempo tardan en encontrarse?", respuesta: 1 },
                    { nivel: 6, texto: "Un tren que viaja a 90 km/h se encuentra 15 km detrás de otro que viaja a 54 km/h en la misma dirección. ¿En cuántas horas lo alcanzará?", respuesta: 0.5 },
                    { nivel: 7, texto: "Un corredor mantiene 5.2 m/s constantes. Otro sale 25 segundos después a 6.8 m/s desde el mismo punto. ¿Cuántos segundos tarda el segundo en alcanzar al primero?", respuesta: 90 },
                    { nivel: 8, texto: "Un mensajero sale a las 9:00 AM a 60 km/h hacia una sucursal a 75 km. Otro sale 30 minutos después a 75 km/h. ¿A qué hora alcanza al primero? (Responde en decimales: 10.5 = 10:30)", respuesta: 10.5 },
                    { nivel: 9, texto: "Tres puntos A, B, C están alineados. La distancia AB es 240 m y BC es 360 m. Un auto pasa por A a 20 m/s hacia C. ¿Cuánto tiempo total tarda en ir de A a C?", respuesta: 30 },
                    { nivel: 10, texto: "Un auto pasa un poste kilométrico. 8 segundos después pasa el siguiente poste, 240 metros más adelante. ¿Cuál es su velocidad en km/h?", respuesta: 108 }
                ]
            },
            {
                id: 'mruv',
                nombre: 'MRUV',
                desc: 'Movimiento Rectilíneo Uniformemente Variado',
                emoji: '⚡',
                diagnosticos:[
                    { texto: "Un auto parte del reposo y acelera a 4 m/s² durante 5 segundos. ¿Cuál es su velocidad final?", respuesta: 20 },
                    { texto: "Un objeto viaja a 10 m/s y acelera a 2 m/s² durante 6 segundos. ¿Qué velocidad alcanza?", respuesta: 22 },
                    { texto: "Una bicicleta acelera de 5 m/s a 15 m/s en 4 segundos. ¿Cuál es su aceleración?", respuesta: 2.5 },
                    { texto: "Un auto que viaja a 20 m/s desacelera a -3 m/s² durante 4 segundos. ¿Cuál es su velocidad final?", respuesta: 8 },
                    { texto: "Un objeto parte del reposo con aceleración de 6 m/s² durante 3 segundos. ¿Qué distancia recorre?", respuesta: 27 },
                    { texto: "Un vehículo acelera de 0 a 30 m/s en 10 segundos. ¿Cuál es su aceleración?", respuesta: 3 },
                    { texto: "Un móvil viaja a 8 m/s y acelera a 1.5 m/s² durante 8 segundos. ¿Cuál es su velocidad final?", respuesta: 20 },
                    { texto: "Una pelota parte del reposo y recorre 50 m en 5 segundos. ¿Cuál es su aceleración?", respuesta: 4 },
                    { texto: "Un auto desacelera de 25 m/s a 5 m/s en 4 segundos. ¿Cuál es su desaceleración?", respuesta: 5 },
                    { texto: "Un objeto acelera a 2 m/s² desde el reposo durante 7 segundos. ¿Qué distancia recorre?", respuesta: 49 }
                ],
                fallbacks: [
                    { nivel: 1, texto: "Un auto acelera uniformemente desde el reposo con a = 2 m/s². ¿Qué velocidad alcanza en 5 segundos?", respuesta: 10 },
                    { nivel: 2, texto: "Un cuerpo parte del reposo y después de 4 segundos recorre 32 metros. ¿Cuál es su aceleración?", respuesta: 4 },
                    { nivel: 3, texto: "Un automóvil sale del reposo y acelera uniformemente a 4 m/s² durante 5 segundos. ¿Qué distancia recorre?", respuesta: 50 },
                    { nivel: 4, texto: "Un auto viaja a 20 m/s y frena uniformemente, deteniéndose en 10 segundos. ¿Cuál es su aceleración (magnitud)?", respuesta: 2 },
                    { nivel: 5, texto: "Un tren que viaja a 30 m/s ve una señal y frena uniformemente, parándose en 225 metros. ¿Cuál es su aceleración?", respuesta: 2 },
                    { nivel: 6, texto: "Un objeto parte del reposo y acelera uniformemente. Después de 120 metros su velocidad es 24 m/s. ¿Cuánto tiempo tardó?", respuesta: 10 },
                    { nivel: 7, texto: "Un vehículo acelera uniformemente desde 10 m/s a 30 m/s en 4 segundos. ¿Qué distancia recorre en ese intervalo?", respuesta: 80 },
                    { nivel: 8, texto: "Un conductor viaja a 25 m/s y frena con a = -5.5 m/s². Si un obstáculo está a 80 m, ¿logra detenerse a tiempo? (1=sí, 0=no)", respuesta: 1 },
                    { nivel: 9, texto: "En t=3s la velocidad es 12 m/s. En t=8s la velocidad es 27 m/s. Si el movimiento es uniformemente acelerado, ¿cuál es la velocidad inicial?", respuesta: 3 },
                    { nivel: 10, texto: "Un auto acelera uniformemente desde reposo. En los primeros 10 segundos recorre 100 metros. ¿Cuál es su velocidad al final de esos 10 segundos?", respuesta: 20 }
                ]
            },
            {
                id: 'caida-libre',
                nombre: 'Caída Libre',
                desc: 'Movimiento Vertical Uniformemente Acelerado',
                emoji: '🍎',
                diagnosticos: [
                    { texto: "Se deja caer una piedra desde una altura. Tarda 4 segundos en llegar al suelo. ¿Desde qué altura se lanzó? (g = 10 m/s²)", respuesta: 80 },
                    { texto: "Una pelota se deja caer y alcanza una velocidad de 30 m/s. ¿Cuánto tiempo tardó en caer? (g = 10 m/s²)", respuesta: 3 },
                    { texto: "Un objeto cae durante 5 segundos. ¿Qué velocidad alcanza? (g = 10 m/s²)", respuesta: 50 },
                    { texto: "Se deja caer una moneda desde una altura de 45 metros. ¿Cuánto tiempo tarda en caer? (g = 10 m/s²)", respuesta: 3 },
                    { texto: "Una piedra se lanza hacia abajo con velocidad inicial de 10 m/s y cae durante 2 segundos. ¿Qué velocidad alcanza? (g = 10 m/s²)", respuesta: 30 },
                    { texto: "Un objeto cae desde 20 metros de altura. ¿Cuál es su velocidad al tocar el suelo? (g = 10 m/s²)", respuesta: 20 },
                    { texto: "Se deja caer un objeto que alcanza 80 m/s. ¿Desde qué altura cayó? (g = 10 m/s²)", respuesta: 320 },
                    { texto: "Una pelota cae durante 6 segundos. ¿Qué distancia recorre? (g = 10 m/s²)", respuesta: 180 },
                    { texto: "Un objeto se lanza hacia abajo con 5 m/s desde una altura de 30 metros. ¿Cuánto tiempo tarda en caer? (g = 10 m/s²)", respuesta: 2 },
                    { texto: "Se deja caer una roca que alcanza 40 m/s. ¿Cuántos segundos tardó en caer? (g = 10 m/s²)", respuesta: 4 }
                ],
                fallbacks: [
                    { nivel: 1, texto: "Se deja caer una piedra desde una altura de 45 metros. ¿Cuánto tiempo tarda en llegar al suelo? (g=10 m/s²)", respuesta: 3 },
                    { nivel: 2, texto: "Una piedra cae libremente durante 2 segundos. ¿Con qué velocidad llega al suelo? (g=10 m/s²)", respuesta: 20 },
                    { nivel: 3, texto: "Desde una azotea se deja caer una piedra que tarda 3.5 segundos en llegar al suelo. ¿A qué altura está la azotea? (g=9.8 m/s²)", respuesta: 60.025 },
                    { nivel: 4, texto: "Se lanza una pelota hacia arriba con 20 m/s desde el piso. ¿Después de cuántos segundos regresa al piso? (g=10 m/s²)", respuesta: 4 },
                    { nivel: 5, texto: "Una pelota se lanza verticalmente hacia arriba con 22 m/s desde un techo de 45 metros. ¿Con qué velocidad impacta el suelo? (g=10 m/s²)", respuesta: 32 },
                    { nivel: 6, texto: "Un objeto se lanza hacia arriba con velocidad inicial desconocida. Alcanza 80 metros. ¿Cuál fue la velocidad inicial? (g=10 m/s²)", respuesta: 40 },
                    { nivel: 7, texto: "Desde un puente se deja caer una piedra. 2 segundos después se lanza otra hacia abajo con 18 m/s. ¿Quién llega primero y por cuántos segundos? (g=10)", respuesta: 0.6 },
                    { nivel: 8, texto: "Una pelota pasa un punto a 25 metros de altura con velocidad 15 m/s hacia arriba. ¿Cuál fue su velocidad inicial? (g=10 m/s²)", respuesta: 25 },
                    { nivel: 9, texto: "Un globo sube con velocidad constante de 5 m/s. A los 50 metros se suelta un objeto. ¿Cuánto tiempo tarda en caer al piso? (g=10 m/s²)", respuesta: 3.3 },
                    { nivel: 10, texto: "Se lanzan dos objetos desde el piso con g=10. Uno hacia arriba a 30 m/s, otro hacia arriba a 20 m/s, el segundo 1 segundo después. ¿En qué momento se encuentran?", respuesta: 5 }
                ]
            },
            {
                id: 'fuerzas-newton',
                nombre: 'Leyes de Newton',
                desc: 'Fuerza, Masa y Aceleración',
                emoji: '💪',
                diagnosticos: [
                    { texto: "¿Cuál es la fuerza necesaria para acelerar una masa de 5 kg a 4 m/s²?", respuesta: 20 },
                    { texto: "Un objeto de 2 kg es empujado con una fuerza de 16 N. ¿Cuál es su aceleración?", respuesta: 8 },
                    { texto: "¿Qué masa tiene un objeto si una fuerza de 12 N produce una aceleración de 3 m/s²?", respuesta: 4 },
                    { texto: "Una fuerza de 30 N actúa sobre una masa de 6 kg. ¿Cuál es la aceleración resultante?", respuesta: 5 },
                    { texto: "Un objeto de 10 kg experimenta una aceleración de 2 m/s². ¿Cuál es la fuerza aplicada?", respuesta: 20 },
                    { texto: "¿Qué aceleración experimenta un objeto de 8 kg si se le aplica una fuerza de 24 N?", respuesta: 3 },
                    { texto: "Una fuerza de 50 N acelera una masa desconocida a 10 m/s². ¿Cuál es su masa?", respuesta: 5 },
                    { texto: "Un objeto de 3 kg es empujado con una fuerza de 27 N. ¿Cuál es su aceleración?", respuesta: 9 },
                    { texto: "¿Qué fuerza se necesita para acelerar 7 kg a una velocidad de 6 m/s²?", respuesta: 42 },
                    { texto: "Una masa de 12 kg experimenta una fuerza de 36 N. ¿Cuál es su aceleración?", respuesta: 3 }
                ],
                fallbacks: [
                    { nivel: 2, texto: "¿Cuál es la fuerza necesaria para acelerar una masa de 5 kg a 3 m/s²?", respuesta: 15 },
                    { nivel: 3, texto: "Una fuerza de 40 N actúa sobre un objeto de 8 kg. ¿Cuál es su aceleración?", respuesta: 5 },
                    { nivel: 4, texto: "Un objeto de 12 kg se arrastra sobre una superficie con una fuerza de 60 N. ¿Cuál es su aceleración?", respuesta: 5 },
                    { nivel: 5, texto: "Dos fuerzas de 30 N y 40 N actúan sobre un objeto de 10 kg en la misma dirección. ¿Cuál es la aceleración?", respuesta: 7 },
                    { nivel: 6, texto: "Un bloque de 5 kg cuelga de una cuerda. ¿Cuál es la tensión si sube con aceleración de 2 m/s²? (g=10)", respuesta: 60 },
                    { nivel: 7, texto: "Dos bloques de 2 kg y 3 kg están conectados. Se aplica una fuerza de 15 N al sistema. ¿Cuál es la aceleración? (sin rozamiento)", respuesta: 3 },
                    { nivel: 8, texto: "Un auto de 1000 kg acelera a 2 m/s². ¿Cuál es la fuerza neta aplicada?", respuesta: 2000 },
                    { nivel: 9, texto: "Dos fuerzas perpendiculares de 12 N y 16 N actúan sobre un objeto de 4 kg. ¿Cuál es la aceleración resultante?", respuesta: 5 },
                    { nivel: 10, texto: "Un objeto de 6 kg está en una superficie inclinada 30°. ¿Cuál es la componente de peso paralela al plano? (g=10)", respuesta: 30 }
                ]
            },
            {
                id: 'trabajo-energia',
                nombre: 'Trabajo y Energía',
                desc: 'Trabajo, Energía Cinética y Potencial',
                emoji: '⚙️',
                diagnosticos: [
                    { texto: "Se realiza un trabajo de 300 J al desplazar un objeto 6 metros. ¿Cuál fue la fuerza aplicada?", respuesta: 50 },
                    { texto: "Un objeto de 4 kg se mueve a 5 m/s. ¿Cuál es su energía cinética?", respuesta: 50 },
                    { texto: "Se aplica una fuerza de 20 N para desplazar un objeto 8 metros. ¿Cuál es el trabajo realizado?", respuesta: 160 },
                    { texto: "Un objeto de 2 kg se mueve a 6 m/s. ¿Cuál es su energía cinética?", respuesta: 36 },
                    { texto: "Se realiza un trabajo de 240 J con una fuerza de 30 N. ¿Qué distancia se desplazó?", respuesta: 8 },
                    { texto: "Un cuerpo de 5 kg cae desde una altura de 10 metros. ¿Cuál es su energía potencial? (g = 10 m/s²)", respuesta: 500 },
                    { texto: "Se aplica una fuerza de 15 N para desplazar un objeto 12 metros. ¿Cuál es el trabajo?", respuesta: 180 },
                    { texto: "Un objeto de 6 kg se mueve a 4 m/s. ¿Cuál es su energía cinética?", respuesta: 48 },
                    { texto: "Se realiza un trabajo de 400 J desplazando un objeto con una fuerza de 50 N. ¿Cuál es la distancia?", respuesta: 8 },
                    { texto: "Un cuerpo de 3 kg está a una altura de 20 metros. ¿Cuál es su energía potencial? (g = 10 m/s²)", respuesta: 600 }
                ],
                fallbacks: [
                    { nivel: 3, texto: "Se aplica una fuerza de 50 N en la dirección del movimiento para desplazar un objeto 10 metros. ¿Cuál es el trabajo realizado?", respuesta: 500 },
                    { nivel: 4, texto: "Un objeto de 4 kg se mueve a 6 m/s. ¿Cuál es su energía cinética?", respuesta: 72 },
                    { nivel: 5, texto: "Un objeto de 2 kg se eleva 5 metros. ¿Cuál es su energía potencial? (g=10 m/s²)", respuesta: 100 },
                    { nivel: 6, texto: "Una fuerza de 80 N hace un trabajo de 400 J. ¿Qué distancia se recorre?", respuesta: 5 },
                    { nivel: 7, texto: "Un auto de 1500 kg acelera de 0 a 20 m/s. ¿Cuál es el cambio en su energía cinética?", respuesta: 300000 },
                    { nivel: 8, texto: "Se lanza un objeto de 1 kg hacia arriba a 10 m/s. ¿Cuál es su energía mecánica total? (g=10)", respuesta: 50 },
                    { nivel: 9, texto: "Un objeto cae desde 20 metros. ¿Con qué velocidad llega al suelo si no hay resistencia? (g=10)", respuesta: 20 },
                    { nivel: 10, texto: "Una rampa sin fricción tiene altura 10 m. Si un bloque baja desde reposo, ¿cuál es su velocidad al final? (g=10)", respuesta: 14.14 }
                ]
            }
        ]
    },
    matematicas: {
        nombre: 'Matemáticas',
        icono: '📐',
        color: '#2d5a9b',
        temas: [
            {
                id: 'ecuaciones-lineales',
                nombre: 'Ecuaciones Lineales',
                desc: 'Ecuaciones de primer grado',
                emoji: '➕',
                fallbacks: [
                    { nivel: 1, texto: "Resuelve: 2x = 10. ¿Cuál es x?", respuesta: 5 },
                    { nivel: 2, texto: "Resuelve: 3x + 5 = 14. ¿Cuál es x?", respuesta: 3 },
                    { nivel: 3, texto: "Resuelve: 2x - 8 = 12. ¿Cuál es x?", respuesta: 10 },
                    { nivel: 4, texto: "Resuelve: 5x + 3 = 2x + 12. ¿Cuál es x?", respuesta: 3 },
                    { nivel: 5, texto: "Resuelve: 4(x - 2) = 20. ¿Cuál es x?", respuesta: 7 },
                    { nivel: 6, texto: "Resuelve: 3x - 5 = x + 15. ¿Cuál es x?", respuesta: 10 },
                    { nivel: 7, texto: "Resuelve: 2(3x + 1) = 5x + 8. ¿Cuál es x?", respuesta: 2 },
                    { nivel: 8, texto: "Resuelve: (2x + 4)/3 = 6. ¿Cuál es x?", respuesta: 7 },
                    { nivel: 9, texto: "Resuelve: 3(x - 2) + 2 = 5(x + 1) - 10. ¿Cuál es x?", respuesta: 0.5 },
                    { nivel: 10, texto: "Resuelve: (3x - 5)/2 = (x + 1)/3. ¿Cuál es x?", respuesta: 2.6 }
                ]
            },
            {
                id: 'pitagoras',
                nombre: 'Teorema de Pitágoras',
                desc: 'Triángulos rectángulos',
                emoji: '📏',
                fallbacks: [
                    { nivel: 2, texto: "Un triángulo rectángulo tiene catetos 3 y 4. ¿Cuál es la hipotenusa?", respuesta: 5 },
                    { nivel: 3, texto: "Un triángulo rectángulo tiene catetos 5 y 12. ¿Cuál es la hipotenusa?", respuesta: 13 },
                    { nivel: 4, texto: "Una escalera de 10 metros se apoya en una pared, llegando a 8 metros de altura. ¿A qué distancia está la base?", respuesta: 6 },
                    { nivel: 5, texto: "Un triángulo rectángulo tiene hipotenusa 25 e hipotenusa 15. ¿Cuál es el otro cateto?", respuesta: 20 },
                    { nivel: 6, texto: "Una diagonal de un rectángulo mide 13 cm. Si un lado mide 5 cm, ¿cuál es el otro lado?", respuesta: 12 },
                    { nivel: 7, texto: "Un triángulo rectángulo tiene catetos de 9 y 12 cm. ¿Cuál es la hipotenusa?", respuesta: 15 },
                    { nivel: 8, texto: "La hipotenusa es 17 y un cateto es 8. ¿Cuál es el otro cateto?", respuesta: 15 },
                    { nivel: 9, texto: "Un cuadrado tiene lado 7. ¿Cuál es la longitud de su diagonal?", respuesta: 9.9 },
                    { nivel: 10, texto: "En un triángulo rectángulo, la altura sobre la hipotenusa divide esta en segmentos de 4 y 9. ¿Cuál es la hipotenusa?", respuesta: 13 }
                ]
            },
            {
                id: 'porcentajes',
                nombre: 'Porcentajes',
                desc: 'Cálculos porcentuales',
                emoji: '📊',
                fallbacks: [
                    { nivel: 1, texto: "¿Cuál es el 10% de 50?", respuesta: 5 },
                    { nivel: 2, texto: "¿Cuál es el 25% de 80?", respuesta: 20 },
                    { nivel: 3, texto: "Si 40 es el 20% de un número, ¿cuál es ese número?", respuesta: 200 },
                    { nivel: 4, texto: "Un producto cuesta $100 y tiene un descuento del 15%. ¿Cuál es el precio final?", respuesta: 85 },
                    { nivel: 5, texto: "Un precio sube de $50 a $65. ¿Cuál es el porcentaje de aumento?", respuesta: 30 },
                    { nivel: 6, texto: "Un artículo costaba $200 y ahora cuesta $140. ¿Cuál fue el porcentaje de rebaja?", respuesta: 30 },
                    { nivel: 7, texto: "Un inversión de $1000 crece un 5% anual durante 2 años. ¿Cuál es el valor final?", respuesta: 1102.5 },
                    { nivel: 8, texto: "De 250 estudiantes, 45% pasó un examen. ¿Cuántos estudiantes pasaron?", respuesta: 112.5 },
                    { nivel: 9, texto: "Un precio original es desconocido. Después de un 20% de descuento, cuesta $80. ¿Cuál era el precio original?", respuesta: 100 },
                    { nivel: 10, texto: "Un salario sube 8%, luego baja 5%. Si el salario final es $2280, ¿cuál era el salario inicial?", respuesta: 2222.22 }
                ]
            }
        ]
    }
};
// ==================== VARIABLES GLOBALES ====================
let materiaActual = 'fisica';
let temaActual = null;
let ejercicioActual = null;
let nivelUsuario = 5.0;
let diagTimer = null;

const $ = id => document.getElementById(id);

// ==================== PIZARRA ====================
let canvas, ctx, isDrawing = false, lastX = 0, lastY = 0;
let currentTool = 'pen';
let currentColor = '#ffdd88';

function initPizarra() {
    canvas = $('pizarraCanvas');
    if (!canvas) return;
    ctx = canvas.getContext('2d');
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = currentColor;
    ctx.lineWidth = 3;

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    canvas.addEventListener('touchstart', e => { e.preventDefault(); startDrawing(e.touches[0]); });
    canvas.addEventListener('touchmove', e => { e.preventDefault(); draw(e.touches[0]); });
    canvas.addEventListener('touchend', stopDrawing);

    document.querySelectorAll('.tool-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tool-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            if (btn.dataset.tool) currentTool = btn.dataset.tool;
            if (btn.dataset.color) {
                currentColor = btn.dataset.color;
                ctx.strokeStyle = currentColor;
            }
        });
    });

    $('clearCanvas').addEventListener('click', () => ctx.clearRect(0, 0, canvas.width, canvas.height));
    $('saveCanvas').addEventListener('click', () => {
        const link = document.createElement('a');
        link.download = `didasky_diagrama_${Date.now()}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
    $('togglePizarra').addEventListener('click', () => {
        const cont = $('pizarraContainer');
        cont.style.display = cont.style.display === 'none' ? 'block' : 'none';
    });
}

function startDrawing(e) {
    isDrawing = true;
    const rect = canvas.getBoundingClientRect();
    lastX = e.clientX - rect.left;
    lastY = e.clientY - rect.top;
}

function draw(e) {
    if (!isDrawing) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ctx.strokeStyle = currentTool === 'eraser' ? '#111' : currentColor;
    ctx.lineWidth = currentTool === 'eraser' ? 20 : 3.5;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(x, y);
    ctx.stroke();
    lastX = x;
    lastY = y;
}

function stopDrawing() {
    isDrawing = false;
}

// ==================== FUNCIONES PRINCIPALES ====================
function mostrarPantalla(id) {
    document.querySelectorAll('.pantalla').forEach(p => {
        p.classList.add('oculta');
        p.classList.remove('activa');
    });
    const pantalla = $(id);
    if (pantalla) {
        pantalla.classList.remove('oculta');
        pantalla.classList.add('activa');
    }
}

function actualizarScoreUI() {
    document.querySelectorAll('#scoreTop, #scoreEjercicio').forEach(el => {
        if (el) el.textContent = nivelUsuario.toFixed(1);
    });
    if ($('nivelBadgeMapa')) $('nivelBadgeMapa').textContent = nivelUsuario.toFixed(1);
    if ($('nivelActual')) $('nivelActual').textContent = nivelUsuario.toFixed(1);

    const barra = $('progresoBarra');
    if (barra) barra.style.width = `${(nivelUsuario / 10) * 100}%`;
}

function construirMapa() {
    const contenedor = $('rutaVertical');
    contenedor.innerHTML = '';
    const temas = MATERIAS[materiaActual].temas;

    temas.forEach((tema, idx) => {
        const item = document.createElement('div');
        item.className = `nodo-item ${idx % 2 === 0 ? 'izq' : 'der'}`;
        const btnNodo = document.createElement('button');
        btnNodo.className = 'nodo-btn';
        btnNodo.innerHTML = `<span>${tema.emoji}</span><span class="nodo-label-btn">${tema.nombre}</span>`;
        const lineaH = document.createElement('div'); lineaH.className = 'nodo-linea-h';
        const card = document.createElement('div'); card.className = 'nodo-card';
        card.innerHTML = `<h3>${tema.emoji} ${tema.nombre}</h3><p>${tema.desc}</p>`;
        if (idx % 2 === 0) item.append(btnNodo, lineaH, card);
        else item.append(card, lineaH, btnNodo);
        item.addEventListener('click', () => abrirPopup(tema));
        contenedor.appendChild(item);
    });
}

function abrirPopup(tema) {
    temaActual = tema;
    $('popupIcono').textContent = tema.emoji;
    $('popupNombre').textContent = tema.nombre;
    $('popupDesc').textContent = tema.desc;
    $('nodoPopup').classList.remove('oculta');
    $('popupOverlay').classList.remove('oculta');
}

function cerrarPopup() {
    $('nodoPopup').classList.add('oculta');
    $('popupOverlay').classList.add('oculta');
}

// ==================== DIAGNÓSTICO DEDICADO ====================
function iniciarDiagnosticoTema() {
    if (!temaActual) return;
    cerrarPopup();
    mostrarPantalla('diagnosticoTemaScreen');

    $('diagTemaNombre').textContent = temaActual.nombre;
    $('diagTemaDesc').textContent = temaActual.desc;

    const diagnosticos = temaActual.diagnosticos || temaActual.fallbacks || [];
    const seleccionado = diagnosticos[Math.floor(Math.random() * diagnosticos.length)];

    ejercicioActual = {
        texto: seleccionado.texto,
        respuesta: seleccionado.respuesta,
        esDiagnostico: true
    };

    $('diagTemaEnunciado').innerHTML = `<p>${ejercicioActual.texto}</p>`;

    const input = $('diagTemaInput');
    input.value = '';
    input.disabled = false;
    $('diagTemaComprobar').disabled = false;
    $('diagTemaRetro').innerHTML = '';

    let tiempo = 60;
    const timerEl = $('diagTemaTimer');
    if (diagTimer) clearInterval(diagTimer);

    diagTimer = setInterval(() => {
        tiempo--;
        if (timerEl) timerEl.textContent = tiempo;
        if (tiempo <= 0) {
            clearInterval(diagTimer);
            finalizarDiagnosticoTema(false);
        }
    }, 1000);
}

function finalizarDiagnosticoTema(exito) {
    if (diagTimer) clearInterval(diagTimer);
    const input = $('diagTemaInput');
    const retro = $('diagTemaRetro');
    if (input) input.disabled = true;
    if ($('diagTemaComprobar')) $('diagTemaComprobar').disabled = true;

    if (exito) {
        nivelUsuario = 6.5;
        retro.innerHTML = `<div class="retro-correcto"><strong>¡Excelente!</strong><br>Tienes buen nivel en este tema.</div>`;
    } else {
        const userVal = parseFloat(input.value.replace(',', '.'));
        if (!isNaN(userVal)) {
            const diff = Math.abs(userVal - ejercicioActual.respuesta);
            if (diff < ejercicioActual.respuesta * 0.45) {
                nivelUsuario = 4.0;
                retro.innerHTML = `<div class="retro-warning"><strong>Casi...</strong><br>Empezamos en nivel intermedio.</div>`;
            } else {
                nivelUsuario = 2.0;
                retro.innerHTML = `<div class="retro-incorrecto"><strong>Vamos desde lo básico</strong><br>Reforzaremos fundamentos.</div>`;
            }
        } else {
            nivelUsuario = 2.0;
            retro.innerHTML = `<div class="retro-incorrecto"><strong>Tiempo agotado</strong><br>Empezamos desde nivel básico.</div>`;
        }
    }

    actualizarScoreUI();

    setTimeout(() => {
        ejercicioActual.esDiagnostico = false;
        mostrarPantalla('ejercicioScreen');
        $('topbarTemaTitulo').textContent = `${temaActual.emoji} ${temaActual.nombre}`;
        cargarEjercicio();
    }, 2200);
}

// ==================== EJERCICIOS ====================
async function cargarEjercicio() {
    if (!temaActual) return;
    const enunciadoEl = $('enunciadoEjercicio');
    enunciadoEl.innerHTML = `<div class="cargando-msg">🧭 Generando ejercicio nivel ${nivelUsuario.toFixed(1)}...</div>`;

    $('respuestaEjercicio').value = '';
    $('retroalimentacion').innerHTML = '';

    try {
        const prompt = `Eres un excelente profesor de ${MATERIAS[materiaActual].nombre}.
Tema: ${temaActual.nombre} - ${temaActual.desc}
Nivel del estudiante: ${nivelUsuario.toFixed(1)} / 10

Genera UN ejercicio **bien redactado, largo y contextualizado** (como un problema real de libro de texto).
Debe tener una buena historia o contexto.
Responde **exactamente** en este formato:

Enunciado: [problema completo y detallado]
Respuesta: [solo el número]`;

        const res = await callOpenRouter(prompt);
        const matchE = res.match(/Enunciado:\s*([\s\S]+?)(?=Respuesta:)/i);
        const matchR = res.match(/Respuesta:\s*([\d.,\-]+)/i);

        if (matchE && matchR) {
            const respNum = parseFloat(matchR[1].replace(',', '.'));
            if (!isNaN(respNum)) {
                ejercicioActual = { texto: matchE[1].trim(), respuesta: respNum };
                enunciadoEl.innerHTML = `<p>${ejercicioActual.texto}</p>`;
                return;
            }
        }
    } catch (e) {
        console.warn('IA falló, usando fallback');
    }

    const fallbacks = temaActual.fallbacks || [];
    const seleccionado = fallbacks[Math.floor(Math.random() * fallbacks.length)];
    ejercicioActual = { texto: seleccionado.texto, respuesta: seleccionado.respuesta };
    enunciadoEl.innerHTML = `<p>${ejercicioActual.texto}</p>`;
}

async function analizarError() {
    const chatBox = $('daskyChatBox');
    chatBox.classList.remove('oculta');
    $('daskyToggle').classList.add('oculta');
    const mensajes = $('daskyMessages');
    const userMsg = document.createElement('div');
    userMsg.className = 'msg-user';
    userMsg.textContent = `Analizar error: ${document.getElementById('respuestaEjercicio').value}`;
    mensajes.appendChild(userMsg);
    const loading = document.createElement('div');
    loading.className = 'msg-cargando';
    loading.textContent = 'Dasky analizando tu error...';
    mensajes.appendChild(loading);
    mensajes.scrollTop = mensajes.scrollHeight;

    const prompt = `Ejercicio: ${ejercicioActual.texto}
Respuesta del estudiante: ${document.getElementById('respuestaEjercicio').value}
Respuesta correcta: ${ejercicioActual.respuesta}

Clasifica el error y explícalo paso a paso.`;

    try {
        const respuesta = await callOpenRouter(prompt);
        loading.remove();
        const daskyMsg = document.createElement('div');
        daskyMsg.className = 'msg-dasky';
        daskyMsg.innerHTML = `<strong>Dasky:</strong><br>${respuesta}`;
        mensajes.appendChild(daskyMsg);
    } catch (e) {
        loading.textContent = '❌ Error de conexión.';
    }
    mensajes.scrollTop = mensajes.scrollHeight;
}

async function comprobarRespuesta() {
    const inputEl = $('respuestaEjercicio');
    const retroEl = $('retroalimentacion');
    const userVal = parseFloat(inputEl.value.replace(',', '.'));

    if (isNaN(userVal)) {
        retroEl.innerHTML = `<div class="retro-warning">⚠️ Ingresa un número válido.</div>`;
        return;
    }

    const correcta = ejercicioActual.respuesta;
    const margen = Math.max(Math.abs(correcta * 0.15), 0.5);
    const esCorrecto = Math.abs(userVal - correcta) <= margen;

    if (ejercicioActual.esDiagnostico) {
        finalizarDiagnosticoTema(esCorrecto);
    } else {
        if (esCorrecto) {
            nivelUsuario = Math.min(10, nivelUsuario + 0.5);
            retroEl.innerHTML = `<div class="retro-correcto"><strong>🎉 ¡Correcto!</strong><br>Excelente trabajo.</div>`;
            inputEl.disabled = true;
            $('comprobarEjercicio').disabled = true;
            actualizarScoreUI();
            setTimeout(cargarEjercicio, 2200);
        } else {
            nivelUsuario = Math.max(1, nivelUsuario - 0.35);
            actualizarScoreUI();
            retroEl.innerHTML = `
            <div class="retro-incorrecto">
                <strong>❌ Incorrecto</strong><br>
                Tu respuesta: <strong>${userVal}</strong> | Correcta: <strong>${correcta}</strong><br><br>
                <button id="analizarErrorBtn" class="btn-pista" style="width:100%; margin-top:10px;">
                    🤖 Analizar mi error con Dasky
                </button>
            </div>`;
            setTimeout(() => {
                const btn = $('analizarErrorBtn');
                if (btn) btn.addEventListener('click', analizarError);
            }, 100);
        }
    }
}

// ==================== DASKY CHAT ====================
function setupDasky() {
    const chatBox = $('daskyChatBox');
    const fab = $('daskyToggle');
    const closeBtn = $('daskyClose');
    const enviarBtn = $('daskyEnviar');
    const inputEl = $('daskyInput');
    const mensajesEl = $('daskyMessages');

    const toggle = () => {
        chatBox.classList.toggle('oculta');
        fab.classList.toggle('oculta');
    };

    fab.addEventListener('click', toggle);
    closeBtn.addEventListener('click', toggle);

    async function enviarMensaje(texto) {
        if (!texto.trim()) return;
        const msgU = document.createElement('div');
        msgU.className = 'msg-user';
        msgU.textContent = texto;
        mensajesEl.appendChild(msgU);

        const spinner = document.createElement('div');
        spinner.className = 'msg-cargando';
        spinner.textContent = '🧭 Dasky pensando...';
        mensajesEl.appendChild(spinner);
        mensajesEl.scrollTop = mensajesEl.scrollHeight;

        try {
            const respuesta = await callOpenRouter(texto);
            spinner.remove();
            const msgD = document.createElement('div');
            msgD.className = 'msg-dasky';
            msgD.innerHTML = `<strong>Dasky:</strong><br>${respuesta}`;
            mensajesEl.appendChild(msgD);
        } catch (e) {
            spinner.remove();
            const msgD = document.createElement('div');
            msgD.className = 'msg-dasky';
            msgD.textContent = "Lo siento, tuve un problema de conexión.";
            mensajesEl.appendChild(msgD);
        }
        mensajesEl.scrollTop = mensajesEl.scrollHeight;
    }

    enviarBtn.addEventListener('click', () => {
        enviarMensaje(inputEl.value.trim());
        inputEl.value = '';
    });

    inputEl.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
            enviarMensaje(inputEl.value.trim());
            inputEl.value = '';
        }
    });

    $('ayudaDasky').addEventListener('click', () => {
        chatBox.classList.remove('oculta');
        fab.classList.add('oculta');
        enviarMensaje(`Dame una pista para el tema actual: ${temaActual?.nombre}`);
    });
};

// ==================== INICIO ====================
document.addEventListener('DOMContentLoaded', () => {
    const savedNivel = parseFloat(localStorage.getItem('didasky_nivel'));
    if (!isNaN(savedNivel)) nivelUsuario = savedNivel;
    actualizarScoreUI();

    document.querySelectorAll('.materia-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.materia-btn').forEach(b => b.classList.remove('activa-materia'));
            btn.classList.add('activa-materia');
            materiaActual = btn.dataset.materia;
        });
    });

    $('btnEmpezar').addEventListener('click', () => {
        mostrarPantalla('mapaScreen');
        actualizarTopbarMateria();
        construirMapa();
        $('daskyToggle').classList.remove('oculta');
    });

    function actualizarTopbarMateria() {
        const materia = MATERIAS[materiaActual];
        if ($('topbarMateriaBadge')) $('topbarMateriaBadge').textContent = `${materia.icono} ${materia.nombre}`;
    }

    $('popupEntrar').addEventListener('click', iniciarDiagnosticoTema);
    $('popupCerrar').addEventListener('click', cerrarPopup);
    $('popupOverlay').addEventListener('click', cerrarPopup);

    $('btnVolverMapa').addEventListener('click', () => mostrarPantalla('mapaScreen'));
    $('comprobarEjercicio').addEventListener('click', comprobarRespuesta);
    $('saltarEjercicio').addEventListener('click', () => {
        nivelUsuario = Math.max(1, nivelUsuario - 0.2);
        actualizarScoreUI();
        cargarEjercicio();
    });

    $('btnCambiarMateria').addEventListener('click', () => {
        mostrarPantalla('inicioScreen');
        $('daskyToggle').classList.add('oculta');
    });

    $('respuestaEjercicio').addEventListener('keydown', e => {
        if (e.key === 'Enter') comprobarRespuesta();
    });

    // Diagnóstico Tema
    const diagTemaComprobar = $('diagTemaComprobar');
    if (diagTemaComprobar) {
        diagTemaComprobar.addEventListener('click', () => {
            const input = $('diagTemaInput');
            const userVal = parseFloat(input.value.replace(',', '.'));
            if (isNaN(userVal)) {
                $('diagTemaRetro').innerHTML = `<div class="retro-warning">⚠️ Ingresa un número válido.</div>`;
                return;
            }
            const correcta = ejercicioActual.respuesta;
            const esCorrecto = Math.abs(userVal - correcta) <= Math.max(correcta * 0.15, 1);
            finalizarDiagnosticoTema(esCorrecto);
        });
    }

    const diagInputTema = $('diagTemaInput');
    if (diagInputTema) {
        diagInputTema.addEventListener('keydown', e => {
            if (e.key === 'Enter') {
                const btn = $('diagTemaComprobar');
                if (btn) btn.click();
            }
        });
    }

    setupDasky();
});
