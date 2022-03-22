using Microsoft.EntityFrameworkCore;
using Indicavi.Projeto.Models;


namespace Indicavi.Projeto.Models
{
    
    public class ProdutoContexto : DbContext
    {

        public ProdutoContexto(DbContextOptions<ProdutoContexto> options) : base(options)
        {
        }

        public DbSet<Produto> Produtos { get; set; }
    }
}