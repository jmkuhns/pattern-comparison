var timeline = [];
var patterns = "https://jmkuhns.github.io/pattern-comparison/patterns/";
var patterns_practice = "https://jmkuhns.github.io/pattern-comparison/patterns_practice/";

/*set up welcome block*/
var welcome = {
  type: "html-keyboard-response",
  stimulus: "Welcome to the experiment. Press any key to begin.",
  data:{
    exp_stage: "instructions"
  }
};
timeline.push(welcome);
/*set up instructions block*/
var pic_1 = patterns_practice + "prac_1_1.png";
var instructions = {
  type: "html-keyboard-response",
  stimulus:
  '<p style:"font-size:30px">PATTERN COMPARISON</p>' +
  '<br><br><p>In this experiment you will be asked to determine whether two patterns of lines are the same or different. If the two patterns are the SAME, press the LEFT ARROW KEY. If the two patterns are DIFFERENT, press the RIGHT ARROW KEY. Please try to work as rapidly as you can.</p>' +
  '<br><p>You will complete a few practice trials with feedback before starting.</p>'+
  '<img src='+ pic_1 + ' style="width:100px;height:100px";></img>'+
  '<br><p>Press any key to continue.</p>',
  post_trial_gap: 1000,
  data:{
    exp_stage: "instructions"
  }
};
var instructions2 = {
  type: "html-keyboard-response",
  stimulus:'<p>As a reminder, if the two patterns are the SAME, press the LEFT ARROW KEY. If the two patterns are DIFFERENT, press the RIGHT ARROW KEY.</p>' +
  '<br><p>Press any key to begin the practice trials.</p>',
  post_trial_gap: 1000,
  data:{exp_stage: "instructions"}
};
timeline.push(instructions, instructions2);

var prac_correct = [37, 39, 39];

var practice_left = [
  {left: patterns_practice + 'prac_1_1.png'},
  {left: patterns_practice + 'prac_2_1.png'},
  {left: patterns_practice + 'prac_3_1.png'}
  ];

var practice_right = [
  {right: patterns_practice + 'prac_1_2.png'},
  {right: patterns_practice + 'prac_2_2.png'},
  {right: patterns_practice + 'prac_3_2.png'}
  ];


var myFunction = function(delay){
  setTimeout(function(){
    jsPsych.endCurrentTimeline()
  }, delay)
}
var practice_trials = {
  type: "html-keyboard-response",
  choices: [37, 39],
  stimulus:   function(){
    var html='<div class="row"><div class="column"><img src=' + jsPsych.timelineVariable('left', true) + ' style="width:100px;height:100px";></img></div>';
    html += '<div class="column"><img src=' + jsPsych.timelineVariable('right', true) + '  style="width:100px;height:100px";></img></div></div>';
    return html;
  },
  timeline_variables: [
    {left: practice_left[0], right: practice_right[0]},
    {left: practice_left[1], right: practice_right[1]},
    {left: practice_left[2], right: practice_right[2]}
  ],
  data: {
    exp_stage: "practice pattern comp",
     corr_resp: prac_correct
  },
  response_ends_trial: true,

  on_load: function(){
    myfunction(500)
  },
   on_finish: function(data){
    if (data.key_press == data.corr_resp){
      data.accuracy = 1;
    } else {
        data.accuracy = 0;
      }
    }
};

timeline.push(practice_trials);

var debrief = {
  type: "html-keyboard-response",
	stimulus: "<p>Press any key to complete the experiment. Thank you!</p>",
  data:{exp_stage: "instructions"}
};

timeline.push(debrief);


/*defining stimuli*/
// set up numbers to coordinate with the file names
/* // here
var nums_01 = ['01', '02', '03', '04', '05', '06', '07', '08', '09'];
var nums_2 = [];
for (i = 10; i < 31; i++){nums_2.push(i)}
nums_01 = nums_01.concat(nums_2);


var patterns_page_1_left = [];
for (i = 0; i<30; i++){
  patterns_page_1_left.push( "1_" + nums_01[i] + "_01")
}

var patterns_page_1_right = [];
for (i = 0; i<30; i++){
  patterns_page_1_right.push( "1_" + nums_01[i] + "_02")
}

var patterns_page_2_left = [];
for (i = 0; i<30; i++){
  patterns_page_2_left.push( "2_" + nums_01[i] + "_01")
}

var patterns_page_2_right = [];
for (i = 0; i<30; i++){
  patterns_page_2_right.push( "2_" + nums_01[i] + "_02")
}
// 37 = same; 39 = diff
var p1_correct = [37, 39, 37, 39, 37, 39, 37, 39, 37, 39, 37, 39, 39, 39, 37, 39, 37, 39, 39, 37, 37, 37, 37, 37, 39, 39, 39, 37, 39, 37];

var p2_correct = [39, 39, 37, 37, 37, 37, 39, 39, 37, 37, 39, 39, 37, 39, 39, 39, 37, 37, 37, 37, 37, 39, 39, 39, 37, 39, 39, 37, 37, 39];

for (i = 0; i < 30; i ++){

    var p1_left = [{
      stimulus: patterns + patterns_page_1_left[i],
      data: {stim: i, corr_resp: p1_correct[i], exp_stage: "pattern", position: "left"}
    }];
    var p1_right = [{
      stimulus: patterns + patterns_page_1_right[i],
      data: {stim: i, corr_resp: p1_correct[i], exp_stage: "pattern", position: "right"}
    }];
  var cresp = p1_correct[i];
  var pattern_name = patterns_page_1_left[i];
  var test = {
    type: "image-keyboard-response",
    choices: [37, 39],
    stimulus: '<div class="row"><div class="column"><img src=' + p1_left + ' style="width:100px;height:100px";></img></div><div class="column"><img src=' + p1_right + ' style="width:100px;height:100px";></img></div></div>',
    data: {
      exp_stage: "pattern comp",
      corr_resp: cresp,
      stim: pattern_name
    },
		response_ends_trial: true,
		on_finish: function(data){
			if (data.key_press == data.corr_resp){
				data.accuracy = 1;
			}else {
					data.accuracy = 0;
				}
      }
  }
  timeline.push(test);
}
var debrief = {
  type: "html-keyboard-response",
	stimulus: "<p>Press any key to complete the experiment. Thank you!</p>"
};

timeline.push(debrief);
*/ // here
