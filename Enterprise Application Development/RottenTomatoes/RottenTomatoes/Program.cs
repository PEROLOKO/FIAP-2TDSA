// See https://aka.ms/new-console-template for more information
using HtmlAgilityPack;
using RottenTomatoes;

var Urls = new string[]
{
    "https://www.rottentomatoes.com/m/the_super_mario_bros_movie",
    "https://www.rottentomatoes.com/m/evil_dead_rise"
};

Console.WriteLine("Hello, World!");

//foreach (var url in Urls)
//    RodarRobozinho(url);

Parallel.ForEach(Urls, url =>
    RodarRobozinho(url));

void RodarRobozinho(string url)
{
    var PageResult = new HttpClient().GetAsync(url).Result;

    var Html = PageResult.Content.ReadAsStringAsync().Result;
    var doc = new HtmlDocument();
    doc.LoadHtml(Html);

    var NovoFilme = new Filme()
    {
        Nome = doc.DocumentNode.SelectSingleNode(
            "/html/body/div[3]/main/div[1]/section/div[2]/section[1]/div[1]/score-board/h1").InnerText
    };

    Console.WriteLine(NovoFilme.Nome);
}



// COMENTAR CÓDIGO CTRL+K+C
//var PageResult = new HttpClient().GetAsync(
//    "https://www.rottentomatoes.com/m/the_super_mario_bros_movie").Result;

//var Html = PageResult.Content.ReadAsStringAsync().Result;
//var doc = new HtmlDocument();
//doc.LoadHtml(Html);

//var NovoFilme = new Filme()
//{
//    Nome = doc.DocumentNode.SelectSingleNode(
//        "/html/body/div[3]/main/div[1]/section/div[2]/section[1]/div[1]/score-board/h1").InnerText
//};

//Console.WriteLine(NovoFilme.Nome);
