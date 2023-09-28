const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

//filter through the fruit list for a matching string, then adds to an array and returns a array with only matches
function search(str) {
	if (!str) return []; // logic to not show the entire array when backspace all characters

	const results = fruit.filter(function(val){						
		return val.toLowerCase().includes(str)
			
	})
	console.log('search',results)
	return results;
}

//this is the function that is being run for the keyup event listener
//good practice to pull out inner calls to their own variables
function searchHandler(e) {
	const lowerCaseResults = search(input.value.toLowerCase())
	showSuggestions(lowerCaseResults)
	console.log (input.value)
}

function showSuggestions(results) {
	suggestions.innerHTML = ''
	//can add way to bold innerHTML as person types
	for (let sugg of results){
		let newListEl = document.createElement('li');
		newListEl.innerText = sugg
		suggestions.append(newListEl);
	}
}

function useSuggestion(e) {
	let clickEvent = e.target.innerText
	input.value = `${clickEvent}`
	console.log(clickEvent)
	suggestions.innerHTML = ''
}


input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);