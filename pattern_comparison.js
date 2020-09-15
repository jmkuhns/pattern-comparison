// pattern_comparison.js
// Salthouse and Babcock: letter comparison is randomly chosen consonants of length 3, 6, or 9
// Paper version had two separately timed versions with 32 pairs per pages
// half are same, half are different
// Difference is in 1 LD for a string
// patterns_page_1_left, patterns_page_1_right, patterns_page_2_left, patterns_page_2_right
/*
var test_trials_p1 = {
  type: "html-keyboard-response",
  choices: [37, 39],
  stimulus:   function(){
    var html='<div class="row">' +
                '<div class="column"><img src=' +
                     patterns_page_1_left[test_index] +
                     ' style="width:150px;height:150px";>' +
                     '</img>' +
                '</div>' +
                '<div class="column"><img src=' + patterns_page_1_right[test_index] +
                '  style="width:150px;height:150px";></img>'+
                '</div>'+
              '</div>';
    return html;
  },
  data: {
    exp_stage: "pattern_comp_p_1",
    corr_resp: p1_correct[test_index],
    stim: patterns_page_1_left[test_index],
    length: test_index,
    time_out: timedout
  },
  on_load: function(){
    if (test_index == 0){
      var current_timer = Date.now()+30000;
    }
    var time_var = current_timer - Date.now();

    //jsPsych.pluginAPI.setTimeout(function() {
    //  jsPsych.finishTrial(
    //    function(){
    //    var  timedout = 1;
    //    }
    //  )}, 500);
  },
  trial_duration: time_var,
//  response_ends_trial: true,
  on_finish: function(){
  accuracy_function();
  if (timedout == 1) {
    jsPsych.endCurrentTimeline();
    }
  }
};
*/
/*
jsPsych.pluginAPI.setTimeout(function() {
  jsPsych.finishTrial(
    function() {
      jsPsych.endCurrentTimeline();
      timeline.push( function() {
        var blank = {
        type: "html-keyboard-response",
        choices: jsPsych.NO_KEYS,
        trial_duration: 5000,
        stimuli: '<p>it_worked</p>',
        data: {
          exp_stage: "timeout",
          length: test_index
        }
      }
  });
}
  );

        }, 500);
        */
/*
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
*/


/*
var my_expando_function = function(left, right, length){
    to_paste = [];
    for (var index = 0; index < length; index++) {
      to_paste.push({left: left[index],right: right[index]});
    }
    return to_paste;
}

my_expando_function(practice_left, practice_right, practice_left.length);

var to_paste = [
{left: practice_left[0], right: practice_right[0]},
{left: practice_left[1], right: practice_right[1]},
{left: practice_left[2], right: practice_right[2]}
];*/

/*
var shebang = {
  timeline: [practice_trials],
  timeline_variables: [
    {left: practice_left[0], right: practice_right[0]},
    {left: practice_left[1], right: practice_right[1]},
    {left: practice_left[2], right: practice_right[2]}
  ]}
timeline.push(shebang);
*/

// var num_practice_trials = 3;

/*
var patterns_page_1_left = [];
for (i = 0; i<30; i++){
  patterns_page_1_left.push( "1_" + nums_01[i] + "_01")
}

var patterns_page_1_right = [];
for (i = 0; i<30; i++){
  patterns_page_1_right.push( "1_" + nums_01[i] + "_02")
}
*/
//to_paste.push('{left: ' + left[index] + ', right: '+ right[index] +'}');
/*
var my_expando_function = function(left, right, length){
  to_paste = [];
  next_step = [];
  for (var index = 0; index < length; index++) {
    to_paste.push({left: left[index],right: right[index]});
  }
  for (var index = 0; index < length; index++) {
    next_step.push( toString(to_paste[index]) );
  }
    return next_step;
}


const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);
*/

/*
var i = 0;
while (i < num_practice_trials){
//  if (i == 0){
//    var timer = jsPsych.totalTime();
//    myFunction(3000);
//  }
  var practice_left_loop = practice_left[i];
  var practice_right_loop = practice_right[i];
  var prac_correct_loop = prac_correct[i];

  timeline.push({
        type: "html-keyboard-response",
        choices: [37, 39],
        stimulus: '<div class="row"><div class="column"><img src=' + practice_left_loop + ' style="width:100px;height:100px";></img></div><div class="column"><img src=' + practice_right_loop + '  style="width:100px;height:100px";></img></div></div>',
        data: {
          stim: i+1,
          exp_stage: "practice pattern comp",
          corr_resp: prac_correct_loop
        },
    		response_ends_trial: true,
    		on_finish: function(data){
          if (data.key_press == data.corr_resp){
    				data.accuracy = 1;
    			} else {
    					data.accuracy = 0;
    				}
        }
      });
      i++
}
*/
