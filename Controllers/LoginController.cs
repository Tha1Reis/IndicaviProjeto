using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Indicavi.Projeto.Models;

namespace Indicavi.Projeto.Controllers
{
    public class LoginController : Controller
    {
        public IActionResult Index()
    {
        return View();
    }
    public IActionResult Cadastro()
    {
        return View();
    }
    }
}