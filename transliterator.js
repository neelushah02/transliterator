//later figure out how to encapsulate the myObj data into a different file.
myObj = 
{
	"vowels": {"अ":"a", "आ":"ā", "इ":"i", "ई":"ī", "उ":"u", "ऊ":"ū", "ऋ":"ṛ", "ॠ":"ṝ", "ऌ":"ḷ", "ॡ":"ḹ", "ए":"e", "ऐ":"ai", "ओ":"o", "औ":"au"},
	"vowel_marks": {"ा":"ā", "ि":"i", "ी":"ī", "ु":"u", "ू":"ū", "ृ":"ṝ", "े":"e", "ै":"ai", "ो":"o", "ौ":"au"},
	"other_marks": {"ं":"ṃ", "ः":"ḥ", "ँ":"~"},
	"virama": {"्":""},
	"consonants": {"क":"k", "ख":"kh", "ग":"g", "घ":"gh", "ङ":"ṅ", "च":"c", "छ":"ch", "ज":"j", "झ":"jh", "ञ":"ñ", "ट":"ṭ", "ठ":"ṭh", "ड":"ḍ", "ढ":"ḍh", "ण":"ṇ", "त":"t", "थ":"th", "द":"d", "ध":"dh", "न":"n", "प":"p", "फ":"ph", "ब":"b", "भ":"bh", "म":"m", "य":"y", "र":"r", "ल":"l", "व":"v", "श":"ś", "ष":"ṣ", "स":"s", "ह":"h", "ळ":"ḻ", "क्ष":"kṣ", "ज्ञ":"jñ"},
	//"symbols": ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९", "ॐ", "ऽ", "।", "॥"],
	//"skip": [""],
	//"candra": ["ॅ"],
	//"other": ["क़", "ख़", "ग़", "ज़", "ड़", "ढ़", "फ़", "य़", "ऱ"]
}

cluttered = 
{
	"अ":"a", "आ":"ā", "इ":"i", "ई":"ī", "उ":"u", "ऊ":"ū", "ऋ":"ṛ", "ॠ":"ṝ", "ऌ":"ḷ", "ॡ":"ḹ", "ए":"e", "ऐ":"ai", "ओ":"o", "औ":"au",
	"ा":"ā", "ि":"i", "ी":"ī", "ु":"u", "ू":"ū", "ृ":"ṝ", "े":"e", "ै":"ai", "ो":"o", "ौ":"au",
	"ं":"ṃ", "ः":"ḥ", "ँ":"~",
	"्":"",
	"क":"k", "ख":"kh", "ग":"g", "घ":"gh", "ङ":"ṅ", "च":"c", "छ":"ch", "ज":"j", "झ":"jh", "ञ":"ñ", "ट":"ṭ", "ठ":"ṭh", "ड":"ḍ", "ढ":"ḍh", "ण":"ṇ", "त":"t", "थ":"th", "द":"d", "ध":"dh", "न":"n", "प":"p", "फ":"ph", "ब":"b", "भ":"bh", "म":"m", "य":"y", "र":"r", "ल":"l", "व":"v", "श":"ś", "ष":"ṣ", "स":"s", "ह":"h", "ळ":"ḻ", "क्ष":"kṣ", "ज्ञ":"jñ"
}


function transliterate(input)
{
    var output = "";
    //for-of loops loop through the values, as opposed to for-in loops which go through properties
    //js is confusing as balls
    for (char of input)
    {
        if(char in cluttered)
        {
            var equivalent = cluttered[char];
        }
        else
        {
            var equivalent=char;
        }
        output=output+equivalent;
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
