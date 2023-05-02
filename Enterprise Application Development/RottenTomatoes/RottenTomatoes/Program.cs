// See https://aka.ms/new-console-template for more information
using HtmlAgilityPack;
using RottenTomatoes;
using ServiceStack;

var Url = "https://editorial.rottentomatoes.com/guide/100-best-classic-movies/";
var PageResult = new HttpClient().GetAsync(Url).Result;

var Html = PageResult.Content.ReadAsStringAsync().Result;
var Doc = new HtmlDocument();
Doc.LoadHtml(Html);

var Links = new List<string>() { };
foreach (int i in Enumerable.Range(1, 10))
{
    Links.Add(Doc.DocumentNode.SelectSingleNode(
        $"//*[@id=\"row-index-{i}\"]/div[3]/div[1]/div[1]/div/div/h2/a")
        .Attributes.First(a => a.Name == "href").Value);
}

var Urls = new string[]
{
    "https://www.rottentomatoes.com/m/the_super_mario_bros_movie",
    "https://www.rottentomatoes.com/m/evil_dead_rise"
};

Console.WriteLine("Hello, World!");

var Filmes = new List<Filme>();

foreach (var link in Links)
    RodarRobozinho(link);

// Parallel roda em todos os núcleos em vez de 1 só
// Parallel.ForEach(Links, link =>
//    RodarRobozinho(link));

ServiceStack.Text.CsvConfig.ItemSeperatorString = "|";

File.WriteAllText("C://Users/logonrmlocal/lista.csv",
    Filmes.ToCsv());

Filme RodarRobozinho(string url)
{
    //Task.Factory.StartNew(() => {
    //    Thread.Sleep(new Random().Next(1000, 8000));
    //});
    

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
    return NovoFilme;
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
