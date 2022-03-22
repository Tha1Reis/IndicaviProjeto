using System.Linq;

namespace Indicavi.Projeto.Models
{
    public class InicializaDB
    {
        public static void Initialize(ProdutoContexto context)
        {
            context.Database.EnsureCreated();

            // Procura por produtos 
            if (context.Produtos.Any())
            {
                return; // O BD foi alimentado
            }

            var produtos = new Produto[]
            {
                new Produto{Nome="Alfred", Preco=3.99M},
                new Produto{Nome="Batman", Preco=2.59M},
            };
            foreach (Produto p in produtos)
            {
                context.Produtos.Add(p);
            }
            context.SaveChanges();
        }
    }
}