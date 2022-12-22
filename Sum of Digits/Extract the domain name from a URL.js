/* Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
5kyu
https://www.codewars.com/kata/514a024011ea4fb54200004b/javascript */

function domainName(url){
    url = url.replace("https://", '');
   url = url.replace("http://", '');
   url = url.replace("www.", '');
   return url.split('.')[0];
 }
 
 domainName("http://google.com")//, "google");
 domainName("http://google.co.jp")//, "google");
 domainName("www.xakep.ru")//, "xakep");
 domainName("https://youtube.com")//, "youtube"
 domainName('https://www.g35teyvuo2.tv/error')
 

 /* function domainName(url){
  for(let i = 0; i < url.length; i++){
    if(url[11] === '.'){
      return url.slice(12).split('.')[0]
    }
    if(url[7] === '/'){
      return url.slice(8).split('.')[0]
    }
    if(url[6] === '/'){
      return url.slice(7).split('.')[0]
    }
    
    if(url[3] === '.'){
      return url.slice(4).split('.')[0]
    }
    if(url[11] === '.'){
      return url.slice(12).split('.')[0]
    }
  }
} */