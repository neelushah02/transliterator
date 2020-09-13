//later figure out how to encapsulate the myObj data into a different file.
paired = 
{
	"vowels": {"अ":"a", "आ":"ā", "इ":"i", "ई":"ī", "उ":"u", "ऊ":"ū", "ऋ":"ṛ", "ॠ":"ṝ", "ऌ":"ḷ", "ॡ":"ḹ", "ए":"e", "ऐ":"ai", "ओ":"o", "औ":"au"},
	"vowel_marks": {"ा":"ā", "ि":"i", "ी":"ī", "ु":"u", "ू":"ū", "ृ":"ṝ", "े":"e", "ै":"ai", "ो":"o", "ौ":"au"},
	"other_marks": {"ं":"ṃ", "ः":"ḥ", "ँ":"~"},
	"virama": {"्":""},
	"consonants": {"क":"k", "ख":"kh", "ग":"g", "घ":"gh", "ङ":"ṅ", "च":"c", "छ":"ch", "ज":"j", "झ":"jh", "ञ":"ñ", "ट":"ṭ", "ठ":"ṭh", "ड":"ḍ", "ढ":"ḍh", "ण":"ṇ", "त":"t", "थ":"th", "द":"d", "ध":"dh", "न":"n", "प":"p", "फ":"ph", "ब":"b", "भ":"bh", "म":"m", "य":"y", "र":"r", "ल":"l", "व":"v", "श":"ś", "ष":"ṣ", "स":"s", "ह":"h", "ळ":"ḻ", "क्ष":"kṣ", "ज्ञ":"jñ"},
	"symbols": {"०":"0", "१":"1", "२":"2", "३":"3", "४":"4", "५":"5", "६":"6", "७":"7", "८":"8", "९":"9", "ॐ":"oṃ", "ऽ":"'", "।":"."},
	//"candra": ["ॅ"],
	"other": {"क़":"q", "ख़":"kh", "ग़":"gh", "ज़":"z", "ड़":"ṛ", "ढ़":"ṛh", "फ़":"f", "य़":"y", "ऱ":"r"}
}

untouched=
{
	"vowels": ["अ", "आ", "इ", "ई", "उ", "ऊ", "ऋ", "ॠ", "ऌ", "ॡ", "ऎ", "ए", "ऐ", "ऒ", "ओ", "औ"],
	"vowel_marks": ["ा", "ि", "ी", "ु", "ू", "ृ", "ॄ", "ॢ", "ॣ", "ॆ", "े", "ै", "ॊ", "ो", "ौ"],
	"other_marks": ["ं", "ः", "ँ"],
	"virama": ["्"],
	"consonants": ["क", "ख", "ग", "घ", "ङ", "च", "छ", "ज", "झ", "ञ", "ट", "ठ", "ड", "ढ", "ण", "त", "थ", "द", "ध", "न", "प", "फ", "ब", "भ", "म", "य", "र", "ल", "व", "श", "ष", "स", "ह", "ळ", "क्ष", "ज्ञ"],
	"symbols": ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९", "ॐ", "ऽ", "।", "॥"],
	"zwj": ["\u200D"],
	"skip": [""],
	"accent": ["\u0951", "\u0952"],
	"combo_accent": ["ः॑", "ः॒", "ं॑", "ं॒"],
	"candra": ["ॅ"],
	"other": ["क़", "ख़", "ग़", "ज़", "ड़", "ढ़", "फ़", "य़", "ऱ"]
}

cluttered = 
{
	"अ":"a", "आ":"ā", "इ":"i", "ई":"ī", "उ":"u", "ऊ":"ū", "ऋ":"ṛ", "ॠ":"ṝ", "ऌ":"ḷ", "ॡ":"ḹ", "ए":"e", "ऐ":"ai", "ओ":"o", "औ":"au",
	"ा":"ā", "ि":"i", "ी":"ī", "ु":"u", "ू":"ū", "ृ":"ṝ", "े":"e", "ै":"ai", "ो":"o", "ौ":"au",
	"ं":"ṃ", "ः":"ḥ", "ँ":"~",
	"्":"",
    "क":"k", "ख":"kh", "ग":"g", "घ":"gh", "ङ":"ṅ", "च":"c", "छ":"ch", "ज":"j", "झ":"jh", "ञ":"ñ", "ट":"ṭ", "ठ":"ṭh", "ड":"ḍ", "ढ":"ḍh", "ण":"ṇ", "त":"t", "थ":"th", "द":"d", "ध":"dh", "न":"n", "प":"p", "फ":"ph", "ब":"b", "भ":"bh", "म":"m", "य":"y", "र":"r", "ल":"l", "व":"v", "श":"ś", "ष":"ṣ", "स":"s", "ह":"h", "ळ":"ḻ", "क्ष":"kṣ", "ज्ञ":"jñ",
    "०":"0", "१":"1", "२":"2", "३":"3", "४":"4", "५":"5", "६":"6", "७":"7", "८":"8", "९":"9", "ॐ":"oṃ", "ऽ":"'", "।":".",
    "क़":"q", "ख़":"kh", "ग़":"gh", "ज़":"z", "ड़":"ṛ", "ढ़":"ṛh", "फ़":"f", "य़":"y", "ऱ":"r"
}


function transliterate(input)
{
    var output = "";
    var i = 0;
    var len = input.length;
    //for-of loops loop through the values, as opposed to for-in loops which go through properties
    //js is confusing as balls
    //for (char of input)
    for(;i<len;)
    {
        if(input[i] in cluttered)
        {
            if( (input[i] in paired.consonants || input[i] in paired.other) && !(input[i+1] in paired.vowel_marks) && !(input[i+1] in paired.vowels))
            {
                var equivalent = cluttered[input[i]] + "a"
            }
            else
            {
                var equivalent = cluttered[input[i]];
            }
        }
        else
        {
            var equivalent=input[i];
        }
        output=output+equivalent;
        i=i+1;
    }
    return output;
}

var devanagari = document.getElementById("devanagari");
var onChange = function()
{
    var input = devanagari.value;
    document.getElementById("roman").innerHTML=transliterate(input);
}
devanagari.addEventListener("change", onChange);
