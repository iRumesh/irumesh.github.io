var inputReady = true;
var input = $('.404-input');
input.focus();
$('.container').on('click', function(e){
  input.focus();
});

input.on('keyup', function(e){
  $('.new-output').text(input.val());
  // console.log(inputReady);
});

$('.four-oh-four-form').on('submit', function(e){
  e.preventDefault();
  var val = $(this).children($('.404-input')).val().toLowerCase();
  var href;

	 if (val === 'rumesh'){
    showKittens();
  }else {
    resetForm();
  }
});

function resetForm(withKittens){
  var message = "Sorry, Are you a really a human?"
  var input = $('.404-input');

  if (withKittens){
    $('.kittens').removeClass('kittens');
    message = "Congratulations! You are Human, You can visit my website."
  }

  $('.new-output').removeClass('new-output');
  input.val('');
  $('.terminal').append('<p class="prompt">' + message + '</p><p class="prompt output new-output"></p>');

  $('.new-output').velocity(
    'scroll'
  ), {duration: 100}
}

	function showKittens(){
		var bMusic = new Audio('tone.mp3')
				bMusic.play()
		$('.terminal').append("<div class='kittens'>"+
								// "<p class='prompt'> ███████████                                               █████     </p>" +
								// "<p class='prompt'>░░███░░░░░███                                             ░░███      </p>" +
								// "<p class='prompt'> ░███    ░███  █████ ████ █████████████    ██████   █████  ░███████  </p>" +
								// "<p class='prompt'> ░██████████  ░░███ ░███ ░░███░░███░░███  ███░░███ ███░░   ░███░░███ </p>" +
								// "<p class='prompt'> ░███░░░░░███  ░███ ░███  ░███ ░███ ░███ ░███████ ░░█████  ░███ ░███ </p>" +
								// "<p class='prompt'> ░███    ░███  ░███ ░███  ░███ ░███ ░███ ░███░░░   ░░░░███ ░███ ░███ </p>" +
								// "<p class='prompt'> █████   █████ ░░████████ █████░███ █████░░██████  ██████  ████ █████</p>" +
								// "<p class='prompt'>░░░░░   ░░░░░   ░░░░░░░░ ░░░░░ ░░░ ░░░░░  ░░░░░░  ░░░░░░  ░░░░ ░░░░░ </p>" +
								 "<p class='prompt'>You are being redirected to my site, please wait...</p>" +
								 "<p class='prompt'>                                                              </p></div>");

		
		var lines = $('.kittens p');
		$.each(lines, function(index, line){
			setTimeout(function(){
				$(line).css({
					"opacity": 1
				});

				textEffect($(line))
			}, index * 100);
		});

		$('.new-output').velocity(
			'scroll'
		), {duration: 100}

		setTimeout(function(){
			window.location.replace("home/index.html");
		}, (lines.length * 100) + 1000);
	}

	function textEffect(line){
		var alpha = [';', '.', ',', ':', ';', '~', '`'];
		var animationSpeed = 10;
		var index = 0;
		var string = line.text();
		var splitString = string.split("");
		var copyString = splitString.slice(0);

		var emptyString = copyString.map(function(el){
		    return [alpha[Math.floor(Math.random() * (alpha.length))], index++];
		})

		emptyString = shuffle(emptyString);

		$.each(copyString, function(i, el){
		    var newChar = emptyString[i];
		    toUnderscore(copyString, line, newChar);

		    setTimeout(function(){
		      fromUnderscore(copyString, splitString, newChar, line);
		    },i * animationSpeed);
		  })
	}

	function toUnderscore(copyString, line, newChar){
		copyString[newChar[1]] = newChar[0];
		line.text(copyString.join(''));
	}

	function fromUnderscore(copyString, splitString, newChar, line){
		copyString[newChar[1]] = splitString[newChar[1]];
		line.text(copyString.join(""));
	}


	function shuffle(o){
	    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	    return o;
	};