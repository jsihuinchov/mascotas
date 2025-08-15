using Microsoft.AspNetCore.Mvc;
using mascotas.Models;

namespace mascotas.Controllers
{
    public class DogController : Controller
    {
        public IActionResult Index()
        {
            var dogs = GetDogList();
            return View(dogs);
        }

        private List<Dog> GetDogList()
        {
            return new List<Dog>
            {
                new Dog { Name = "Akita Inu", Category = "A", Weight = "32-45 kg", Size = "Grande", Lifespan = 12 },
                new Dog { Name = "Beagle", Category = "B", Weight = "9-11 kg", Size = "Mediano", Lifespan = 13 },
                new Dog { Name = "Chow Chow", Category = "C", Weight = "20-32 kg", Size = "Mediano", Lifespan = 12 },
                // ... aquí van hasta mínimo 100 perros
            };
        }
    }
}
