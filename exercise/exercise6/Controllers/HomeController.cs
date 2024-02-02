using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using exercise6.Models;

namespace exercise6.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }

    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }

    [HttpPost] 
    public IActionResult ProcessForm(string fname, string lname, string email, string tall, string message)
    {
        var viewModel = new FormResult
    {
        FirstName = fname,
        LastName = lname,
        Email = email,
        Tall = tall,
        Message = message
    };

    return View("Result", viewModel);
    }
}
