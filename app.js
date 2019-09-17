const btn = document.querySelector("#adduser");
let index = 0;
let People = [];
let follow = [];
// STEP 2 - insert 3 Github users in morePeople array
let morePeople = [
	{
		login: "SJDavies2020",
		id: 44582668,
		node_id: "MDQ6VXNlcjQ0NTgyNjY4",
		avatar_url: "https://avatars2.githubusercontent.com/u/44582668?v=4",
		name: "SJDavies2020"
	},
	{
		login: "smccrindle",
		id: 1187460,
		avatar_url: "https://avatars2.githubusercontent.com/u/1187460?v=4",
		name: "SMccrindle"
	},
	{
		login: "ifotn",
		id: 6728111,
		avatar_url: "https://avatars3.githubusercontent.com/u/6728111?v=4",
		name: "RFreeman"
	}
];
// STEP 3 - Create render function that uses .map method
// in order to display data found in 'people' array
function render() {
	const newHTML = People.map(function(person, index) {
		return `<article class="dt w-100 bb b--black-05 pb2 mt2" href="#0">
    <div class="dtc w2 w3-ns v-mid">
        <img src="${
					person.avatar_url
				}" class="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"/>
    </div>
    <div class="dtc v-mid pl3">
        <h1 class="f6 f5-ns fw6 lh-title black mv0">${person.login}</h1>
        <h2 class="f6 fw4 mt0 mb0 black-60">@yg</h2>
    </div>
    <div class="dtc v-mid">
        <form class="w-100 tr">
            <button	data-id=${index} class="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60" type="submit">${person.isFollowing == true ? "- Following" : "+ Follow"}</button>
        </form>
    </div>
</article>`;
	}).join("");
	const main = document.querySelector("main");
	main.innerHTML = newHTML;

	const myBtns = [...document.querySelectorAll("button")];
	// Add Event Listener to Btns
	myBtns.map(mybtn => mybtn.addEventListener("click", isFollowing));
}
// function to process event
function isFollowing(event) {
	event.preventDefault();
	// Get the index of the array from the event target data-id
	const index = event.target.dataset.id;
	// Check Property and set
	if (People[index].isFollowing == true) {
		People[index].isFollowing = false;
		// log out the follow/unfollow name
		console.log(`Unfollowed ${People[index].name}`);
	} else {
		People[index].isFollowing = true;
		console.log(`Followed ${People[index].name}`);
	}
	render();
}
// STEP 4 - Upon button click, call function add1More that
// takes away one person from the morePeople array
// then inserts it into the people array
// then render data
function add1More(e) {
	if (morePeople.length == 0) {
		beep2();
	} else {
		// Prevents default screen eefresh
		e.preventDefault();
		People.push(morePeople.pop());
		// Render screen
		render();
		// Play Sound
		beep();
	}
}
// STEP 6 - Finally, upload to a web server, submit in Blackboard

btn.addEventListener("click", add1More);

// render();

// Base 64 Embeded Tones
function beep() {
	var snd = new Audio(
		"data:audio/wav;base64,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"
	);
	snd.play();
}
// Base 64 Embeded Tones
function beep2() {
	var snd = new Audio(
		"data:audio/wav;base64,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"
	);
	snd.play();
}
