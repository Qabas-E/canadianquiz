var currentQuestion = 0; //question we are on
var score = 0;  // the Score 

// Array of question objects
var questions = [
   {
	"question": "How many Canadian provinces do not have marine coastlines?",
	"a": "One",
	"b": "Two",
	"c": "Three",
	"d": "Four",
	"image":"quizimages/q1.jpg",
	"answer": "b"
   },
   {
	"question": "The glacial feature in The Northwestern part of Manitoba is a...",
	"a": "Esker",
	"b": "Drumlin",
	"c": "End moraine",
	"d": "cirque",
	"image":"quizimages/q2.jpg",
	"answer": "a"
   },
   {
	"question": "Île René-Levasseur, a Québec island which can be seen from space, is located in:",
	"a": "St. Lawrence Seaway",
	"b": "Manicouagan Reservoir",
	"c": "Ungava Bay",
	"d": "James Bay",
	"image":"quizimages/q3.jpg",
	"answer": "b"
   },
   {
	"question": "The animal which is known as a Skunk is not native to any part of:",
	"a": "Newfoundland and Labrador",
	"b": "British Columbia",
	"c": "Northwest Territories",
	"d": "Saskatchewan",
	"image":"quizimages/q4.jpg",
	"answer": "a"
   },
   {
	"question": "how many provinces and territories are in canada",
	"a": "12",
	"b": "10",
	"c": "11",
	"d": "13",
	"image":"quizimages/q5.jpg",
	"answer": "d"
   },
   {
	"question": "Approximately 475,000 colonies of these animals lived in the Canadian Prairie Provinces in 2011",
	"a": "Prairie dogs",
	"b": "Monarch butterflies",
	"c": "Honey bees",
	"d": "Garter snakes",
	"image":"quizimages/q6.jpg",
	"answer": "c"
   },
   {
	"question": "Which Canadian province does not adopt Daylight Saving Time?",
	"a": "Newfoundland and Labrador",
	"b": "New Brunswick",
	"c": "Manitoba",
	"d": "Saskatchewan",
	"image":"quizimages/q7.jpg",
	"answer": "d"
   },
   {
	"question": "Which of the following elements is not mined in Canada",
	"a": "Aluminum",
	"b": "Copper",
	"c": "Molybdenum",
	"d": "Zinc",
	"image":"quizimages/q8.jpg",
	"answer": "a"
   },
   {
	"question": "Environment Canada requires a blizzard to have sustained wind speeds of at least:",
	"a": "100 km/hr",
	"b": "75 km/hr",
	"c": "40 km/hr",
	"d": "20km/hr",
	"image":"quizimages/q9.jpg",
	"answer": "c"
   },
   {
	"question": "The border between Alberta and Saskatchewan follows which line of longitude?",
	"a": "49W",
	"b": "60W",
	"c": "230W",
	"d": "110W",
	"image":"quizimages/q2.jpg",
	"answer": "d"
   }
   
   
 ];
 
 

 //load Current question on page
 function loadQuestion() {
 let message ="";
if (currentQuestion == questions.length){
	message = "Congrats, you have finished the quiz! Your Score is: " + score + "/" +
	questions.length + ". Click To start again";

//show lightbox	
	  document.getElementById("lightbox").style.display="block"
	  document.getElementById("message").innerHTML = message
	  currentQuestion = 0;
	  score = 0;
}
  //pre-load the image
   var img = document.getElementById("image");
   var preLoadImg = new Image ();
   preLoadImg.src = questions[currentQuestion].image;
   
   preLoadImg.onLoad = function () {
	   img.width = this.width;
   }
 img.style.maxWidth = "500px";
 img.src = preLoadImg.src;
 
   
   //load the question
   document.getElementById("question").innerHTML = questions[currentQuestion].question;
   
   // id "A"
   document.getElementById("a").innerHTML = "A "+ questions[currentQuestion].a;
   document.getElementById("b").innerHTML = "B "+ questions[currentQuestion].b;
   document.getElementById("c").innerHTML = "C "+ questions[currentQuestion].c;
   document.getElementById("d").innerHTML = "D "+ questions[currentQuestion].d;
   document.getElementById("image").src =  questions[currentQuestion].image;

 } // loadQuestion
 
 //run code when the body loads
 function initialize(){
	 document.getElementById("lightbox").style.display="none";
	 loadQuestion();
 };
 
 //close lightbox
 function closelightbox(){
	 document.getElementById("lightbox").style.display="none";
 }
 
 //Mart The Current Question
 function markIt(ans) {
  let message = "";
  //if the answer is correct 
   if(ans == questions[currentQuestion].answer){
	//   alert("Correct");  //dont use this in real design
	   
	   
	   //add to score
	  score += 1; //score++
	  document.getElementById("score").innerHTML = score + "/" + questions.length;
	  
	  //show lightbox with feedback
	  document.getElementById("lightbox").style.display="block";
	  message = "Correct Answer Your Score is: " + score + "/" + questions.length;
	  document.getElementById("message").innerHTML = message; 
	  
	  
   }
  //otherwise notify the user its incorrect
 else {
	// alert("incorect");
	  document.getElementById("lightbox").style.display="block";
	  message = "Incorrect your score is: " + score + "/" + questions.length;
	  document.getElementById("message").innerHTML = message;
 }
 	  currentQuestion++; //adds one to current question
	  loadQuestion();
 }  // markIt
   
   
   function newTabaction() {
  document.getElementById("demo").innerHTML = "New Tab Opened!<br><br>Refresh to Restart! ";
  document.getElementById("demo").style.backgroundColor = "red";
  document.getElementById("demo").style.color = "white";
  document.getElementById("demo").style.textAlignment = "center";
  document.getElementById("demo").style.fontSize = "4em";
  document.getElementById("demo").style.position = "absolute";
  document.getElementById("demo").style.top = "50%";
  document.getElementById("demo").style.transform = "translate(70%, -50%)";
  document.getElementById("demo").style.left = "15%";
  }
window.onblur = newTabaction;
   
   
   
   function next(){
	  currentQuestion++; //adds one to current question
	  loadQuestion();
   }
   
   
   
      function back(){
	  currentQuestion--; //adds one to current question
	  loadQuestion();
	  }
   
   
   
   
   //register the service worker when the js loads
   if('serviceWorker' in naviator){
		navigator.serviceWorker.register('/sw.js')
	
   } 
   
   
   
   
   
   

