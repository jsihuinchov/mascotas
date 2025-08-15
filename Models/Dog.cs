namespace mascotas.Models
{
    public class Dog
    {
        public string Name { get; set; }
        public string Category { get; set; } // Primera letra A-Z
        public string Weight { get; set; } // en kg
        public string Size { get; set; } // Pequeño, Mediano, Grande
        public int Lifespan { get; set; } // en años
    }
}
