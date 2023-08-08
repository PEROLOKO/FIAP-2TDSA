using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HotelSpa.Controllers
{
    public class QuartoController : Controller
    {
        // GET: QuartoController
        public ActionResult Index()
        {
            return View();
        }

        // GET: QuartoController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: QuartoController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: QuartoController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: QuartoController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: QuartoController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: QuartoController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: QuartoController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
