
  $.get("https://www.reddit.com/r/aww/.json").then(function (json) {
    let text = json.data.children;    
    let target = $("#output");
    let link = $("#link");
    for(i= 0; i<10; i++){
    target.append(`<p id="link">${text[i].data.title}</p>`);
    target.append(`<img id="bloop" src="${text[i].data.thumbnail}"/>`);
    link.wrap(`<a src="${text[i].data.url}"></a>`);
    }
});