float angle = 0; // Variable para el ángulo de rotación
float amplitude = 300; // Amplitud de la traslación ondulada (aumentada)
float frequency = 0.5; // Frecuencia de la onda senoidal (reducida)

void setup() {
  size(800, 600, P3D); // Usar modo 3D
  noStroke(); // Sin bordes
  fill(221, 179, 6); // Color del cubo
}

void draw() {
  background(51); // Fondo oscuro
  
  // Calcular variables temporales
  float time = millis() * 0.001; // Tiempo transcurrido en segundos
  float translationX = amplitude * sin(time * frequency); // Traslación ondulada
  float scaleValue = 0.5 + 0.5 * sin(time); // Escala entre 0.5 y 1.5
  
  // Depuración: Imprimir el valor de translationX
  println("translationX:", translationX, "     scaleValue: ", scaleValue, "     angle: ", angle);
  
  // Aislar transformaciones con pushMatrix() y popMatrix()
  pushMatrix();
  
    // Trasladar al centro de la pantalla
    translate(width / 2, height / 2, 0);
    
    // Aplicar traslación ondulada
    translate(translationX, 0, 0);
    
    // Rotar sobre su eje Y
    rotateY(angle);
    angle += 0.02;
    
    // Escalar cíclicamente
    scale(scaleValue);
    
    // Dibujar el cubo
    box(100); // Tamaño base del cubo
  
  popMatrix();
}
