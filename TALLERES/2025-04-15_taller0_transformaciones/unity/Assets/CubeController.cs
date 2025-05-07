using UnityEngine;

public class CubeController : MonoBehaviour
{
    // Variables para controlar la traslación aleatoria
    public float translationSpeed = 2f; // Velocidad de traslación
    public float translationInterval = 3f; // Intervalo entre traslaciones
    private float timer = 0f;
    private Vector3 randomDirection;

    // Variables para controlar la rotación constante
    public float rotationSpeed = 50f; // Velocidad de rotación

    // Variables para controlar el escalado oscilante
    public float scaleAmplitude = 0.5f; // Amplitud del escalado
    public float baseScale = 1f; // Escala base del objeto

    void Start()
    {
        // Inicializar una dirección aleatoria al inicio
        randomDirection = GetRandomDirection();
    }

    void Update()
    {
        // 1. Traslación aleatoria cada ciertos segundos
        timer += Time.deltaTime;
        if (timer >= translationInterval)
        {
            // Reiniciar el temporizador y obtener una nueva dirección aleatoria
            timer = 0f;
            randomDirection = GetRandomDirection();
        }

        // Aplicar traslación en la dirección aleatoria
        transform.Translate(randomDirection * translationSpeed * Time.deltaTime);

        // 2. Rotación constante
        transform.Rotate(Vector3.up, rotationSpeed * Time.deltaTime);

        // 3. Escalado oscilante usando Mathf.Sin
        float oscillation = Mathf.Sin(Time.time) * scaleAmplitude;
        transform.localScale = Vector3.one * (baseScale + oscillation);
    }

    // Función para obtener una dirección aleatoria en X o Y
    private Vector3 GetRandomDirection()
    {
        int axis = Random.Range(0, 2); // 0 para X, 1 para Y
        return axis == 0 ? new Vector3(Random.Range(-1f, 1f), 0, 0) : new Vector3(0, Random.Range(-1f, 1f), 0);
    }
}