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
/*set up instructions block*/
var pic_1 = patterns_practice + "prac_1_1.png";
var instructions = {
  type: "html-keyboard-response",
  stimulus:
  '<p style:"font-size:30px">PATTERN COMPARISON</p>' +
  '<br><br><p>In this experiment you will be asked to determine whether two patterns of lines are the same or different. If the two patterns are the SAME, press the LEFT ARROW KEY. If the two patterns are DIFFERENT, press the RIGHT ARROW KEY. Please try to work as rapidly as you can.</p>' +
  '<br><p>You will complete a few practice trials with feedback before starting.</p><br><p>Press any key to continue.</p>',
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


// set up practice stimuli
var prac_correct = [37, 39, 39];

var practice_left = [patterns_practice + "prac_1_1.png", patterns_practice + "prac_2_1.png", patterns_practice + "prac_3_1.png"];
var practice_right = [patterns_practice + "prac_1_2.png", patterns_practice + "prac_2_2.png", patterns_practice + "prac_3_2.png"];

// set up test stimuli
var nums_01 = ['01', '02', '03', '04', '05', '06', '07', '08', '09'];
var nums_2 = [];
for (i = 10; i < 31; i++){nums_2.push(i)}
nums_01 = nums_01.concat(nums_2);


var patterns_page_1_left = [];
for (i = 0; i<30; i++){
  patterns_page_1_left.push( patterns + "1_" + nums_01[i] + "_1.png")
}

var patterns_page_1_right = [];
for (i = 0; i<30; i++){
  patterns_page_1_right.push( patterns+ "1_" + nums_01[i] + "_2.png")
}
// cmon
var patterns_page_2_left = [];
for (i = 0; i<30; i++){
  patterns_page_2_left.push( patterns + "2_" + nums_01[i] + "_1.png")
}

var patterns_page_2_right = [];
for (i = 0; i<30; i++){
  patterns_page_2_right.push( patterns+ "2_" + nums_01[i] + "_2.png")
}
// 37 = same; 39 = diff
var p1_correct = [37, 39, 37, 39, 37, 39, 37, 39, 37, 39, 37, 39, 39, 39, 37, 39, 37, 39, 39, 37, 37, 37, 37, 37, 39, 39, 39, 37, 39, 37];

var p2_correct = [39, 39, 37, 37, 37, 37, 39, 39, 37, 37, 39, 39, 37, 39, 39, 39, 37, 37, 37, 37, 37, 39, 39, 39, 37, 39, 39, 37, 37, 39];

jsPsych.pluginAPI.preloadImages(images = [practice_left, practice_right, patterns_page_1_left, patterns_page_1_right, patterns_page_2_left, patterns_page_2_right]);
/*
var record_acc = function() {
	var global_trial = jsPsych.progress().current_trial_global
	var stim = jsPsych.data.getData()[global_trial].stim.toLowerCase()
	var target = jsPsych.data.getData()[global_trial].target.toLowerCase()
	var key = jsPsych.data.getData()[global_trial].key_press
	if (stim == target && key == 37) {
		correct = true
	} else if (stim != target && key == 40) {
		correct = true
	} else {
		correct = false
	}
	jsPsych.data.addDataToLastTrial({
		correct: correct,
		trial_num: current_trial
	})
	current_trial = current_trial + 1
}*/
/*
var accuracy_function = function(){
  //var global_trial = jsPsych.progress().current_trial_global;
  //ar stim = jsPsych.data.get()[global_trial].stim;
  //var corr = jsPsych.data.get()[global_trial].corr_resp;
  //var key = jsPsych.data.get()[global_trial].key_press;
  var data = jsPsych.data.get().last(1);
  if(data.key_press == data.corr_resp){
    jsPsych.data.get().addToLast({accuracy = 1});
  } else{
    jsPsych.data.get().addToLast({accuracy = 0});
  }
  };
*/

// set up practice trials
var practice_index = 0;
var practice_trials = {
  type: "html-keyboard-response",
  choices: [37, 39],
  stimulus:   function(){
    var html='<div class="row">' +
                '<div class="column"><img src=' +
                     practice_left[practice_index] +
                     ' style="width:150px;height:150px";>' +
                     '</img>' +
                '</div>' +
                '<div class="column"><img src=' + practice_right[practice_index] +
                '  style="width:150px;height:150px";></img>'+
                '</div>'+
              '</div>';
    return html;
  },
  data: {
    exp_stage: "practice pattern comp",
    corr_resp: prac_correct[practice_index],
    stim: practice_left[practice_index]
  },
  response_ends_trial: true,
  on_finish: function(data){
    if (data.key_press == data.corr_resp){
      data.accuracy = 1;
    } else {
      data.accuracy = 0;
      }
  }
};

var looping_node = {
  timeline: [practice_trials],
  loop_function: function(){
    practice_index++;
      if (practice_index == practice_left.length){
          return false; // don't loop again
      } else {
          return true; // loop again
      }
  }
}


// practice end

// interim instructions...You will have 30 seconds...

var interim_instructions = {
  type: "html-keyboard-response",
  stimulus: '<p>You have now completed the practice trials. For the experiment, you will have 30 seconds to complete as many problems as you can. You will complete this process two times in total.<br><br>As a reminder, if the two patterns are the SAME, press the LEFT ARROW KEY. If the two patterns are DIFFERENT, press the RIGHT ARROW KEY. Please try to work as rapidly as you can.</p>' +
  '<br><p>Press any key to begin.</p>',
  post_trial_gap: 1000,
  data:{
    exp_stage: "instructions"
  }
}


var delay = 30000;
// idea for timer
// html keyoard response has trial_duration function.
// This can be updated after each trial. e.g., set a time limit like timer = 30000 ms or something, and then on the onload of each trial, subtract the timer from the current run time and set that value as the trial_duration

var timedout = 0;
var test_index = 0;
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

var looping_node_p1 = {
  timeline: [test_trials_p1],
  loop_function: function(){
    test_index++;
      if (test_index == p1_correct.length){
          return false; // don't loop again
      } else {
          return true; // loop again
      };

  }
}
*/
var timedout = 0;
var test_index = 0;
var current_timer = Date.now()+30000;
//var time_var = current_timer - Date.now();
var alt_test_trials = {
  loop_function:function(){
    test_index++;
      if (test_index == p1_correct.length || current_timer <= 0){
          return false; // don't loop again
      } else {
          return true; // loop again
      };

  },
  timeline: [{
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
    on_start: function(){
      var trial_timeout = setTimeout(function () {
          if (current_timer <= 0) {
            jsPsych.endCurrentTimeline();
          }
        }, 30000);
    },
    on_load: function(){
      current_timer -= jsPsych.totalTime();
    },
    trial_duration: current_timer,
  //  response_ends_trial: true,
  data: {
    exp_stage: "pattern_comp_p_1",
    corr_resp: p1_correct[test_index],
    stim: patterns_page_1_left[test_index],
    length: test_index,
    time_out: timedout,
    trial_time: time_var
  },
    on_finish: function(data){
      if (data.key_press == data.corr_resp){
        data.accuracy = 1;
      } else {
        data.accuracy = 0;
        }
    }
  }]
};


// timeline.push(looping_node_p1);
/*
var interim_instructions_2 = {
  type: "html-keyboard-response",
  stimulus:
  '<p>You will now complete the same process again. You will have 30 seconds to complete as many problems as you can. <br><br>As a reminder, if the two patterns are the SAME, press the LEFT ARROW KEY. If the two patterns are DIFFERENT, press the RIGHT ARROW KEY. Please try to work as rapidly as you can.</p>' +
  '<br><p>Press any key to begin.</p>',
  post_trial_gap: 1000,
  data:{
    exp_stage: "instructions"
  }
}
timeline.push(interim_instructions_2);


var test_index_2 = 0;
// patterns_page_1_left, patterns_page_1_right, patterns_page_2_left, patterns_page_2_right
var test_trials_p2 = {
  type: "html-keyboard-response",
  choices: [37, 39],
  stimulus:   function(){
    var html='<div class="row">' +
                '<div class="column"><img src=' +
                     patterns_page_2_left[test_index_2] +
                     ' style="width:150px;height:150px";>' +
                     '</img>' +
                '</div>' +
                '<div class="column"><img src=' + patterns_page_2_right[test_index_2] +
                '  style="width:150px;height:150px";></img>'+
                '</div>'+
              '</div>';
    return html;
  },
  data: {
    exp_stage: "pattern_comp_p_2",
    corr_resp: p2_correct[test_index_2],
    stim: patterns_page_2_left[test_index_2],
    length: test_index_2
  },
  on_load: function(){
    jsPsych.pluginAPI.setTimeout(function() {
      //jsPsych.finishTrial();
      jsPsych.endCurrentTimeline();
    }, 30000);
  },
  response_ends_trial: true,
  on_finish: function(data){
    if (data.key_press == data.corr_resp){
      data.accuracy = 1;
    } else {
      data.accuracy = 0;
      }

  }
};

var looping_node_p2 = {
  timeline: [test_trials_p2],
  loop_function: function(){
    test_index_2++;
      if (test_index_2 == p2_correct.length){
          return false; // don't loop again
      } else {
          return true; // loop again
      }
  }
}

timeline.push(looping_node_p2);
*/

var debrief = {
  type: "html-keyboard-response",
	stimulus: "<p>Press any key to complete the experiment. Thank you!</p>",
  data:{exp_stage: "instructions"}
};

timeline = [];
timeline.push(welcome);
timeline.push(instructions, instructions2);
timeline.push(looping_node);
timeline.push(interim_instructions);
timeline.push(alt_test_trials);
timeline.push(debrief);
