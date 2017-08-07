var translator = new Translator();

translator.getListOfLanguages(function(languages) 
{
    languages.forEach(function(language) 
    {
        console.log(language.name, langauge.language);
    });
});

var config = {
    api_key: '664935483713-4fsijng4padljnb26d4d2tos5au9c8nn',
};

translator.getListOfLanguages(function(languages) 
{
    languages.forEach(function(language)
     {
        console.log(language.name, langauge.language);
    });
}, config);

var config = {
    from: 'language-of-the-text',
    to: 'convert-into',
    api_key: '664935483713-4fsijng4padljnb26d4d2tos5au9c8nn', // use your own key
    callback: function (translatedText) {
        console.log('translated text', translatedText);

    }
};

translator.translateLanguage(textToConvert, config);

$("body").prepend("<h1>"+ Hello+ "</h1>")
