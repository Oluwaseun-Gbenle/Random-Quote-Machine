$(document).ready(function () {
    function getColors() {
      var colors = [ '#D7816A', '#20BF55', '#5F0A87', '#ED0A3F', '#FF355E',
'#FD5B78', '#FF6037', '#FF9966', '#FF9933','#FFCC33', '#808000', '#00FF00', '#00FFFF', '#66FF66', '#AAF0D1', '#50BFE6', '#FF6EFF', '#EE34D2', '#FF00CC', '#1C0E19', '#FFAA1D', '#FF5733', '#299617', '#FA8072', '#2243B6', '#5DADEC', '#5946B2', '#9C51B6', '#A83731', '#AF6E4D'];
 var color = colors[Math.floor(Math.random() * colors.length)];
      return color;
   };
  
 function getQuotes() {
  var quoteList = [
{text:'It is necessary to fall in love... if only to provide an alibi for all the random despair you are going to feel anyway.',author:'Albert Camus'},
{text:"All of the Vines that were acted & setup & had nice cameras, those weren't the good Vines. The good Vines were, like, a random little kid in the middle of a forest, like, yelling.", author:'Billie Eilish'},
{text:"I used to write random little stupid things when I was five, but then the first song I really wrote was one called 'Fingers Crossed,' which is on SoundCloud." ,author:'Billie Eilish'},
{text:"O! many a shaft, at random sent, Finds mark the archer little meant! And many a word, at random spoken, May soothe or wound a heart that's broken!" ,author:'Walter Scott'},
{text:'I know that a Christmas tree farm in Pennsylvania is about the most random place for a country singer to come from, but I had an awesome childhood.' ,author:'Taylor Swift'},
{text:"The Christian leaders of the future have to be theologians, persons who know the heart of God and are trained - through prayer, study, and careful analysis - to manifest the divine event of God's saving work in the midst of the many seemingly random events of their time." ,author:'Henri Nouwen'},
{text:'The amount of random conversations that lead to culture-shifting ideas is insane.' ,author:'Virgil Abloh'},
{text:'Game shows are designed to make us feel better about the random, useless facts that are all we have left of our education.' ,author:'Chuck Palahniuk'},
{text:'Natural selection is anything but random.' ,author:'Richard Dawkins'},
{text:'I have always believed that each man makes his own happiness and is responsible for his own problems. It is a simple philosophy.' ,author:' Ray Kroc'},
{text:'When we have respect for ourselves and others, we gravitate towards connections that encourage that.' ,author:'Simeon Lindstrom'},
{text:'Anger is the ultimate destroyer of your own peace of mind.' ,author:' Dalai Lama'},
{text:"Only one thing is ever guaranteed, that is that you will definitely not achieve the goal if you don't take the shot." ,author:' Wayne Gretzky'},
{text:"Don't be afraid. Be focused. Be determined. Be hopeful. Be empowered." ,author:' Michelle Obama'},
{text:'Children really brighten up a household. They never turn the lights off.' ,author:'Ralph Bus'},
{text:'No one would have crossed the ocean if he could have gotten off the ship in the storm.' ,author:' Charles Kettering'},
{text:"Appreciate those early influences and what they've done for you.",author:'Willie Davis'},
{text:'Emotional empathy is what motivates us to help others.' ,author:'Brian Goldman'},
{text:"The true wealth of a nation lies not in it's gold or silver but in it's learning, wisdom and in the uprightness of its sons." ,author:' Kahlil Gibran'},
{text:'Make the decision, make another. Remake one past, you cannot.' ,author:' Yoda'},
{text:'Be honest in your feelings, for they are the surest conduit to knowledge...' ,author:'Anoon Bondara'},
{text:"I think beauty comes from actually knowing who you are. That's real beauty to me." ,author:' Elllen DeGeneres'},
{text:'If you want to see a rainbow you have to learn to see the rain. ' ,author:'Paulo Coelho'},
{text:'Memories, pressed between the pages of my mind. Memories, sweetened through the ages just like wine.' ,author:' Elvis Presley'},
{text:'I had it in my heart. I believed in myself, and I had confidence. I knew how to do it, had natural talent and I pursued it.',author:'Muhammad Ali'},
{text:'Reading without reflecting is like eating without digesting.' ,author:' Edmund Burke'},
{text:'Remember to focus on goals that are within your control.' ,author:'Tony Dungy'},
{text:'Life itself is the proper binge.' ,author:'Julia Child'},
{text:'In any project, the important factor is your belief. Without belief there can be no successful outcome.' ,author:'William James'},
{text:'You can be rich and famous and still end up being unhappy.',author:'Ryanne Knight'}
]; 
 return quoteList[Math.floor(Math.random() * quoteList.length)];
 };
  
 $('#new-quote').on('click',function() {
    var quoteAuthor = getQuotes();
  var texts = quoteAuthor.text;
  var author = quoteAuthor.author;
   var colorMe = getColors();
        $('#text').text(texts);
          $('#author').text(author);
       $('#new-quote, .btn, #container').css('background-color', colorMe);
   $('#mount').css('color', colorMe);
    $('.twitter-share-button').attr('href','https://twitter.com/intent/tweet?text=' +'"'+ texts +'"' + ' ' + '-' + author);
    $('#whatsapp-quote').attr('href','whatsapp://send?text=' +'"'+ texts +'"' + ' ' + '-' + author);
  
});
});
