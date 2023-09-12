using System.ComponentModel.DataAnnotations;

namespace HotelSpa.Models
{
    public class Carta
    {

        [Key]
        public int Id { get; set; }

        [Required]
        public string Nome { get; set; }

    }
}
