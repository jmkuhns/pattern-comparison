var patterns = "https://jmkuhns.github.io/pattern-comparison/patterns/";
var patterns_practice = "https://jmkuhns.github.io/pattern-comparison/patterns_practice/";
var timeline = [];
var p1_correct = [37, 39, 37, 39, 37, 39, 37, 39, 37, 39, 37, 39, 39, 39, 37, 39, 37, 39, 39, 37, 37, 37, 37, 37, 39, 39, 39, 37, 39, 37];

var p2_correct = [39, 39, 37, 37, 37, 37, 39, 39, 37, 37, 39, 39, 37, 39, 39, 39, 37, 37, 37, 37, 37, 39, 39, 39, 37, 39, 39, 37, 37, 39];
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
    data:{
    exp_stage: "instructions"
  }
};
var instructions2 = {
  type: "html-keyboard-response",
  stimulus:'<p>As a reminder, if the two patterns are the SAME, press the LEFT ARROW KEY. If the two patterns are DIFFERENT, press the RIGHT ARROW KEY.</p>' +
  '<br><p>Press any key to begin the practice trials.</p>',
  post_trial_gap: 500,
  data:{exp_stage: "instructions"}
};


var alt_practice = {
  timeline: [
  {
  type: "html-keyboard-response",
  choices: [37, 39],
  stimulus: function(){
    var html='<div class="row">' +
                '<div class="column"><img src=' +
                  jsPsych.timelineVariable("stimulus_1", true) +
                     //practice_left[practice_index] +
                     ' style="width:150px;height:150px";>' +
                     '</img>' +
                '</div>' +
                '<div class="column"><img src=' +
                jsPsych.timelineVariable("stimulus_2", true) +
                //practice_right[practice_index] +
                '  style="width:150px;height:150px";></img>'+
                '</div>'+
              '</div>';
    return html;
  },
      post_trial_gap: 250
  }],
  data: jsPsych.timelineVariable('data'),
  on_finish: function(data){
    if (data.key_press == data.corr_resp){
      data.accuracy = 1;
    } else {
      data.accuracy = 0;
      }
  },
  timeline_variables: [
    {stimulus_1: patterns_practice + "prac_1_1.png",
      stimulus_2: patterns_practice + "prac_1_2.png",
        data: {corr_resp: 37, exp_stage: "practice" ,
      stim:  "prac_1_1.png"}},
    {stimulus_1: patterns_practice + "prac_2_1.png",
      stimulus_2: patterns_practice + "prac_2_2.png",
        data: {corr_resp: 39, exp_stage: "practice",
      stim:  "prac_2_1.png"}},
    {stimulus_1: patterns_practice + "prac_3_1.png",
      stimulus_2: patterns_practice + "prac_3_2.png",
        data: {corr_resp: 39, exp_stage: "practice",
      stim:  "prac_3_1.png"}}
  ]
};

// practice end


var interim_instructions = {
  type: "html-keyboard-response",
  stimulus: '<p>You have now completed the practice trials. For the experiment, you will have 30 seconds to complete as many problems as you can. You will complete this process two times in total.<br><br>As a reminder, if the two patterns are the SAME, press the LEFT ARROW KEY. If the two patterns are DIFFERENT, press the RIGHT ARROW KEY. Please try to work as rapidly as you can.</p>' +
  '<br><p>Press any key to begin.</p>',
  post_trial_gap: 250,
  data:{exp_stage: "instructions"}
}

var limit = 5000;
var test_trials_p1_trl1 = {
  timeline:[{
  type: "html-keyboard-response",
  choices: [37, 39],
  stimulus:   function(){
    var html= '<div class="row">' +
                '<div class="column"><img src=' +
                jsPsych.timelineVariable('stimulus_1', true) +
                     ' style="width:150px;height:150px";>' +
                     '</img>' +
                '</div>' +
                '<div class="column"><img src=' +
                jsPsych.timelineVariable('stimulus_2', true)+
                '  style="width:150px;height:150px";></img>'+
                '</div>'+
              '</div>';
    return html;
  },
  post_trial_gap: 250,
  trial_duration: limit
  }],
  data: jsPsych.timelineVariable('data'),
  on_finish: function(){
    jsPsych.data.get().addToLast({dur: limit});
    trl = jsPsych.data.get().select('time_elapsed');
    time = trl.values[trl.values.length-1] - trl.values[trl.values.length-2];
    jsPsych.data.get().addToLast({time_between: time});
    var total = jsPsych.totalTime();
    jsPsych.data.get().addToLast({total_time: total});
    limit = limit - time - 250;
  },
  timeline_variables: {
    stimulus_1: 'https://jmkuhns.github.io/pattern-comparison/patterns/1_01_1.png',

    stimulus_2: 'https://jmkuhns.github.io/pattern-comparison/patterns/1_01_2.png',

    data: { stim: 1, corr_resp:  37, exp_stage: 'pattern_comp_p1'}
  }
};
var trl = null;
var time = null;
var time_out = 0;

//timeline.push(trl_1);
//timeline.push(debrief);

var test_trials_p1_trl2 = {
  timeline:[{
    type: "html-keyboard-response",
    choices: [37, 39],
    stimulus:   function(){
      var html= '<div class="row">' +
                  '<div class="column"><img src=' +
                  jsPsych.timelineVariable('stimulus_1', true) +
                       ' style="width:150px;height:150px";>' +
                       '</img>' +
                  '</div>' +
                  '<div class="column"><img src=' +
                  jsPsych.timelineVariable('stimulus_2', true)+
                  '  style="width:150px;height:150px";></img>'+
                  '</div>'+
                '</div>' +
               "<button id = 'hidden-button' hidden type='button' onclick= 'setTimeout(timeout_function, 1000)'></button>";
      return html;
    },
    post_trial_gap: 250,
    trial_duration: limit
}],
  data: jsPsych.timelineVariable('data'),
  on_start: function(){
			setTimeout(
				function(){
				time_out = 1;
				jsPsych.endCurrentTimeline;
			}, limit);
	},
	on_finish: function(){
		jsPsych.data.get().addToLast({dur: limit});
		trl = jsPsych.data.get().select('time_elapsed');
		time = trl.values[trl.values.length-1] - trl.values[trl.values.length-2];
		jsPsych.data.get().addToLast({time_between: time});
		var total = jsPsych.totalTime();
		jsPsych.data.get().addToLast({total_time: total});
		limit = limit - time - 250;
		if (limit <= 0){
			jsPsych.endCurrentTimeline;
			jsPsych.data.get().addToLast({limit_timeout: 1});
			limit = 30;
		}
		jsPsych.data.get().addToLast({timeout: time_out})
	},
    timeline_variables: [
            {
            stimulus_1: 'https://jmkuhns.github.io/pattern-comparison/patterns/1_02_1.png',

            stimulus_2: 'https://jmkuhns.github.io/pattern-comparison/patterns/1_02_2.png',

            data: { stim: 2, corr_resp:  39, exp_stage: 'pattern_comp_p1'}
            },
            {
            stimulus_1: 'https://jmkuhns.github.io/pattern-comparison/patterns/1_03_1.png',

            stimulus_2: 'https://jmkuhns.github.io/pattern-comparison/patterns/1_03_2.png',

            data: { stim: 3, corr_resp:  37, exp_stage: 'pattern_comp_p1'}
            },
            {
            stimulus_1: 'https://jmkuhns.github.io/pattern-comparison/patterns/1_04_1.png',

            stimulus_2: 'https://jmkuhns.github.io/pattern-comparison/patterns/1_04_2.png',

            data: { stim: 4, corr_resp:  39, exp_stage: 'pattern_comp_p1'}
            },
            {
            stimulus_1: 'https://jmkuhns.github.io/pattern-comparison/patterns/1_05_1.png',

            stimulus_2: 'https://jmkuhns.github.io/pattern-comparison/patterns/1_05_2.png',

            data: { stim: 5, corr_resp:  37, exp_stage: 'pattern_comp_p1'}
            },
            {
            stimulus_1: 'https://jmkuhns.github.io/pattern-comparison/patterns/1_06_1.png',

            stimulus_2: 'https://jmkuhns.github.io/pattern-comparison/patterns/1_06_2.png',

            data: { stim: 6, corr_resp:  39, exp_stage: 'pattern_comp_p1'}
            },
            {
            stimulus_1: 'https://jmkuhns.github.io/pattern-comparison/patterns/1_07_1.png',

            stimulus_2: 'https://jmkuhns.github.io/pattern-comparison/patterns/1_07_2.png',

            data: { stim: 7, corr_resp:  37, exp_stage: 'pattern_comp_p1'}
            },
            {
            stimulus_1: 'https://jmkuhns.github.io/pattern-comparison/patterns/1_08_1.png',

            stimulus_2: 'https://jmkuhns.github.io/pattern-comparison/patterns/1_08_2.png',

            data: { stim: 8, corr_resp:  39, exp_stage: 'pattern_comp_p1'}
            },
            {
            stimulus_1: 'https://jmkuhns.github.io/pattern-comparison/patterns/1_09_1.png',

            stimulus_2: 'https://jmkuhns.github.io/pattern-comparison/patterns/1_09_2.png',

            data: { stim: 9, corr_resp:  37, exp_stage: 'pattern_comp_p1'}
            },
            {
            stimulus_1: 'https://jmkuhns.github.io/pattern-comparison/patterns/1_10_1.png',

            stimulus_2: 'https://jmkuhns.github.io/pattern-comparison/patterns/1_10_2.png',

            data: { stim: 10, corr_resp:  39, exp_stage: 'pattern_comp_p1'}
            },
            {
            stimulus_1: 'https://jmkuhns.github.io/pattern-comparison/patterns/1_11_1.png',

            stimulus_2: 'https://jmkuhns.github.io/pattern-comparison/patterns/1_11_2.png',

            data: { stim: 11, corr_resp:  37, exp_stage: 'pattern_comp_p1'}
            },
            {
            stimulus_1: 'https://jmkuhns.github.io/pattern-comparison/patterns/1_12_1.png',

            stimulus_2: 'https://jmkuhns.github.io/pattern-comparison/patterns/1_12_2.png',

            data: { stim: 12, corr_resp:  39, exp_stage: 'pattern_comp_p1'}
            },
            {
            stimulus_1: 'https://jmkuhns.github.io/pattern-comparison/patterns/1_13_1.png',

            stimulus_2: 'https://jmkuhns.github.io/pattern-comparison/patterns/1_13_2.png',

            data: { stim: 13, corr_resp:  39, exp_stage: 'pattern_comp_p1'}
            },
            {
            stimulus_1: 'https://jmkuhns.github.io/pattern-comparison/patterns/1_14_1.png',

            stimulus_2: 'https://jmkuhns.github.io/pattern-comparison/patterns/1_14_2.png',

            data: { stim: 14, corr_resp:  39, exp_stage: 'pattern_comp_p1'}
            },
            {
            stimulus_1: 'https://jmkuhns.github.io/pattern-comparison/patterns/1_15_1.png',

            stimulus_2: 'https://jmkuhns.github.io/pattern-comparison/patterns/1_15_2.png',

            data: { stim: 15, corr_resp:  37, exp_stage: 'pattern_comp_p1'}
            },
            {
            stimulus_1: 'https://jmkuhns.github.io/pattern-comparison/patterns/1_16_1.png',

            stimulus_2: 'https://jmkuhns.github.io/pattern-comparison/patterns/1_16_2.png',

            data: { stim: 16, corr_resp:  39, exp_stage: 'pattern_comp_p1'}
            },
            {
            stimulus_1: 'https://jmkuhns.github.io/pattern-comparison/patterns/1_17_1.png',

            stimulus_2: 'https://jmkuhns.github.io/pattern-comparison/patterns/1_17_2.png',

            data: { stim: 17, corr_resp:  37, exp_stage: 'pattern_comp_p1'}
            },
            {
            stimulus_1: 'https://jmkuhns.github.io/pattern-comparison/patterns/1_18_1.png',

            stimulus_2: 'https://jmkuhns.github.io/pattern-comparison/patterns/1_18_2.png',

            data: { stim: 18, corr_resp:  39, exp_stage: 'pattern_comp_p1'}
            },
            {
            stimulus_1: 'https://jmkuhns.github.io/pattern-comparison/patterns/1_19_1.png',

            stimulus_2: 'https://jmkuhns.github.io/pattern-comparison/patterns/1_19_2.png',

            data: { stim: 19, corr_resp:  39, exp_stage: 'pattern_comp_p1'}
            },
            {
            stimulus_1: 'https://jmkuhns.github.io/pattern-comparison/patterns/1_20_1.png',

            stimulus_2: 'https://jmkuhns.github.io/pattern-comparison/patterns/1_20_2.png',

            data: { stim: 20, corr_resp:  37, exp_stage: 'pattern_comp_p1'}
            },
            {
            stimulus_1: 'https://jmkuhns.github.io/pattern-comparison/patterns/1_21_1.png',

            stimulus_2: 'https://jmkuhns.github.io/pattern-comparison/patterns/1_21_2.png',

            data: { stim: 21, corr_resp:  37, exp_stage: 'pattern_comp_p1'}
            },
            {
            stimulus_1: 'https://jmkuhns.github.io/pattern-comparison/patterns/1_22_1.png',

            stimulus_2: 'https://jmkuhns.github.io/pattern-comparison/patterns/1_22_2.png',

            data: { stim: 22, corr_resp:  37, exp_stage: 'pattern_comp_p1'}
            },
            {
            stimulus_1: 'https://jmkuhns.github.io/pattern-comparison/patterns/1_23_1.png',

            stimulus_2: 'https://jmkuhns.github.io/pattern-comparison/patterns/1_23_2.png',

            data: { stim: 23, corr_resp:  37, exp_stage: 'pattern_comp_p1'}
            },
            {
            stimulus_1: 'https://jmkuhns.github.io/pattern-comparison/patterns/1_24_1.png',

            stimulus_2: 'https://jmkuhns.github.io/pattern-comparison/patterns/1_24_2.png',

            data: { stim: 24, corr_resp:  37, exp_stage: 'pattern_comp_p1'}
            },
            {
            stimulus_1: 'https://jmkuhns.github.io/pattern-comparison/patterns/1_25_1.png',

            stimulus_2: 'https://jmkuhns.github.io/pattern-comparison/patterns/1_25_2.png',

            data: { stim: 25, corr_resp:  39, exp_stage: 'pattern_comp_p1'}
            },
            {
            stimulus_1: 'https://jmkuhns.github.io/pattern-comparison/patterns/1_26_1.png',

            stimulus_2: 'https://jmkuhns.github.io/pattern-comparison/patterns/1_26_2.png',

            data: { stim: 26, corr_resp:  39, exp_stage: 'pattern_comp_p1'}
            },
            {
            stimulus_1: 'https://jmkuhns.github.io/pattern-comparison/patterns/1_27_1.png',

            stimulus_2: 'https://jmkuhns.github.io/pattern-comparison/patterns/1_27_2.png',

            data: { stim: 27, corr_resp:  39, exp_stage: 'pattern_comp_p1'}
            },
            {
            stimulus_1: 'https://jmkuhns.github.io/pattern-comparison/patterns/1_28_1.png',

            stimulus_2: 'https://jmkuhns.github.io/pattern-comparison/patterns/1_28_2.png',

            data: { stim: 28, corr_resp:  37, exp_stage: 'pattern_comp_p1'}
            },
            {
            stimulus_1: 'https://jmkuhns.github.io/pattern-comparison/patterns/1_29_1.png',

            stimulus_2: 'https://jmkuhns.github.io/pattern-comparison/patterns/1_29_2.png',

            data: { stim: 29, corr_resp:  39, exp_stage: 'pattern_comp_p1'}
            },
            {
            stimulus_1: 'https://jmkuhns.github.io/pattern-comparison/patterns/1_30_1.png',

            stimulus_2: 'https://jmkuhns.github.io/pattern-comparison/patterns/1_30_2.png',

            data: { stim: 30, corr_resp:  37, exp_stage: 'pattern_comp_p1'}
            }
    ]
};
var filter_data = function(stage) {
		var selected_data = jsPsych.data.get().filter({exp_stage: stage}).select("key_press");
  //  var  = jsPsych.data.get().filter(rows).ignore(ignore_columns);
    // the next piece of codes orders the columns of the data file
    var d = selected_data.values;// get the data values
		for (var i = 0; i < d.length; i++){
				if (stage == "pattern_comp_p1"){
					if ( d[i] != p1_correct[i]){
						selected_data.values[i] = 0;
					} else {
						selected_data.values[i] = 1;
					}
				}
				if (stage == "pattern_comp_p2"){
					if ( d[i] != p2_correct[i]){
						selected_data.values[i] = 0;
					} else {
						selected_data.values[i] = 1;
					}
				}

		}
		//console.log(selected_data);
    return selected_data;
};
var interim_instructions_2 = {
  type: "html-keyboard-response",
  stimulus:
  '<p>You will now complete the same process again. You will have 30 seconds to complete as many problems as you can. <br><br>As a reminder, if the two patterns are the SAME, press the LEFT ARROW KEY. If the two patterns are DIFFERENT, press the RIGHT ARROW KEY. Please try to work as rapidly as you can.</p>' +
  '<br><p>Press any key to begin.</p>',
  post_trial_gap: 250,
  data:{
    exp_stage: "instructions"
  },
  on_finish: function(){
    var selected_data = filter_data("pattern_comp_p1");
    jsPsych.data.get().addToLast({correct_responses: selected_data});
  },
};


var limit = 5000;
var test_trials_p2_trl1 = {
  type: "html-keyboard-response",
  choices: [37, 39],
  stimulus:   function(){
    var html= '<div class="row">' +
                '<div class="column"><img src=' +
                jsPsych.timelineVariable('stimulus_1', true) +
                     ' style="width:150px;height:150px";>' +
                     '</img>' +
                '</div>' +
                '<div class="column"><img src=' +
                jsPsych.timelineVariable('stimulus_2', true)+
                '  style="width:150px;height:150px";></img>'+
                '</div>'+
              '</div>';
    return html;
  },
  timeline_variables:
  {
    stimulus_1: 'https://jmkuhns.github.io/pattern-comparison/patterns/2_01_1.png',
    stimulus_2: 'https://jmkuhns.github.io/pattern-comparison/patterns/2_01_2.png',
    data: { stim: 1, corr_resp:  39, exp_stage: 'pattern_comp_p2'}
  },
  trial_duration: limit,
  data: jsPsych.timelineVariable('data'),
  on_finish: function(){

    jsPsych.data.get().addToLast({dur: limit});
    trl = jsPsych.data.get().select('time_elapsed');
    time = trl.values[trl.values.length-1] - trl.values[trl.values.length-2];
    jsPsych.data.get().addToLast({time_between: time});
    var total = jsPsych.totalTime();
    jsPsych.data.get().addToLast({total_time: total});
    limit = limit - time - 250;
  }
};
var trl = null;
var time = null;
var time_out = 0;

var test_trials_p2 = {
  timeline:[{
    type: "html-keyboard-response",
    choices: [37, 39],
    stimulus:   function(){
      var html= '<div class="row">' +
                  '<div class="column"><img src=' +
                  jsPsych.timelineVariable('stimulus_1', true) +
                  ' style="width:150px;height:150px";>' +
                       '</img>' +
                  '</div>' +
                  '<div class="column"><img src=' +
                  jsPsych.timelineVariable('stimulus_2', true)+
                  '  style="width:150px;height:150px";></img>'+
                  '</div>'+
                '</div>'+
                "<button id = 'hidden-button' hidden type='button' onclick= 'setTimeout(timeout_function1, 30000)'></button>";
      return html;
    },
    post_trial_gap: 250,
    trial_duration: limit
}],
  data: jsPsych.timelineVariable('data'),
  on_start: function(){
			setTimeout(
				function(){
				time_out = 1;
				jsPsych.endCurrentTimeline;
			}, limit);
	},
	on_finish: function(){
		jsPsych.data.get().addToLast({dur: limit});
		trl = jsPsych.data.get().select('time_elapsed');
		time = trl.values[trl.values.length-1] - trl.values[trl.values.length-2];
		jsPsych.data.get().addToLast({time_between: time});
		var total = jsPsych.totalTime();
		jsPsych.data.get().addToLast({total_time: total});
		limit = limit - time - 250;
		if (limit <= 0){
			jsPsych.endCurrentTimeline;
			jsPsych.data.get().addToLast({limit_timeout: 1});
			limit = 30;
		}
		jsPsych.data.get().addToLast({timeout: time_out})
	},
  timeline_variables: [
    {
            stimulus_1: 'https://jmkuhns.github.io/pattern-comparison/patterns/2_02_1.png',
            stimulus_2: 'https://jmkuhns.github.io/pattern-comparison/patterns/2_02_2.png',
            data: { stim: 2, corr_resp:  39, exp_stage: 'pattern_comp_p2'}
            },
            {
            stimulus_1: 'https://jmkuhns.github.io/pattern-comparison/patterns/2_03_1.png',
            stimulus_2: 'https://jmkuhns.github.io/pattern-comparison/patterns/2_03_2.png',
            data: { stim: 3, corr_resp:  37, exp_stage: 'pattern_comp_p2'}
            },
            {
            stimulus_1: 'https://jmkuhns.github.io/pattern-comparison/patterns/2_04_1.png',
            stimulus_2: 'https://jmkuhns.github.io/pattern-comparison/patterns/2_04_2.png',
            data: { stim: 4, corr_resp:  37, exp_stage: 'pattern_comp_p2'}
            },
            {
            stimulus_1: 'https://jmkuhns.github.io/pattern-comparison/patterns/2_05_1.png',
            stimulus_2: 'https://jmkuhns.github.io/pattern-comparison/patterns/2_05_2.png',
            data: { stim: 5, corr_resp:  37, exp_stage: 'pattern_comp_p2'}
            },
            {
            stimulus_1: 'https://jmkuhns.github.io/pattern-comparison/patterns/2_06_1.png',
            stimulus_2: 'https://jmkuhns.github.io/pattern-comparison/patterns/2_06_2.png',
            data: { stim: 6, corr_resp:  37, exp_stage: 'pattern_comp_p2'}
            },
            {
            stimulus_1: 'https://jmkuhns.github.io/pattern-comparison/patterns/2_07_1.png',
            stimulus_2: 'https://jmkuhns.github.io/pattern-comparison/patterns/2_07_2.png',
            data: { stim: 7, corr_resp:  39, exp_stage: 'pattern_comp_p2'}
            },
            {
            stimulus_1: 'https://jmkuhns.github.io/pattern-comparison/patterns/2_08_1.png',

            stimulus_2: 'https://jmkuhns.github.io/pattern-comparison/patterns/2_08_2.png',

            data: { stim: 8, corr_resp:  39, exp_stage: 'pattern_comp_p2'}
            },
            {
            stimulus_1: 'https://jmkuhns.github.io/pattern-comparison/patterns/2_09_1.png',

            stimulus_2: 'https://jmkuhns.github.io/pattern-comparison/patterns/2_09_2.png',

            data: { stim: 9, corr_resp:  37, exp_stage: 'pattern_comp_p2'}
            },
            {
            stimulus_1: 'https://jmkuhns.github.io/pattern-comparison/patterns/2_10_1.png',

            stimulus_2: 'https://jmkuhns.github.io/pattern-comparison/patterns/2_10_2.png',

            data: { stim: 10, corr_resp:  37, exp_stage: 'pattern_comp_p2'}
            },
            {
            stimulus_1: 'https://jmkuhns.github.io/pattern-comparison/patterns/2_11_1.png',

            stimulus_2: 'https://jmkuhns.github.io/pattern-comparison/patterns/2_11_2.png',

            data: { stim: 11, corr_resp:  39, exp_stage: 'pattern_comp_p2'}
            },
            {
            stimulus_1: 'https://jmkuhns.github.io/pattern-comparison/patterns/2_12_1.png',

            stimulus_2: 'https://jmkuhns.github.io/pattern-comparison/patterns/2_12_2.png',

            data: { stim: 12, corr_resp:  39, exp_stage: 'pattern_comp_p2'}
            },
            {
            stimulus_1: 'https://jmkuhns.github.io/pattern-comparison/patterns/2_13_1.png',

            stimulus_2: 'https://jmkuhns.github.io/pattern-comparison/patterns/2_13_2.png',

            data: { stim: 13, corr_resp:  37, exp_stage: 'pattern_comp_p2'}
            },
            {
            stimulus_1: 'https://jmkuhns.github.io/pattern-comparison/patterns/2_14_1.png',

            stimulus_2: 'https://jmkuhns.github.io/pattern-comparison/patterns/2_14_2.png',

            data: { stim: 14, corr_resp:  39, exp_stage: 'pattern_comp_p2'}
            },
            {
            stimulus_1: 'https://jmkuhns.github.io/pattern-comparison/patterns/2_15_1.png',

            stimulus_2: 'https://jmkuhns.github.io/pattern-comparison/patterns/2_15_2.png',

            data: { stim: 15, corr_resp:  39, exp_stage: 'pattern_comp_p2'}
            },
            {
            stimulus_1: 'https://jmkuhns.github.io/pattern-comparison/patterns/2_16_1.png',

            stimulus_2: 'https://jmkuhns.github.io/pattern-comparison/patterns/2_16_2.png',

            data: { stim: 16, corr_resp:  39, exp_stage: 'pattern_comp_p2'}
            },
            {
            stimulus_1: 'https://jmkuhns.github.io/pattern-comparison/patterns/2_17_1.png',

            stimulus_2: 'https://jmkuhns.github.io/pattern-comparison/patterns/2_17_2.png',

            data: { stim: 17, corr_resp:  37, exp_stage: 'pattern_comp_p2'}
            },
            {
            stimulus_1: 'https://jmkuhns.github.io/pattern-comparison/patterns/2_18_1.png',

            stimulus_2: 'https://jmkuhns.github.io/pattern-comparison/patterns/2_18_2.png',

            data: { stim: 18, corr_resp:  37, exp_stage: 'pattern_comp_p2'}
            },
            {
            stimulus_1: 'https://jmkuhns.github.io/pattern-comparison/patterns/2_19_1.png',

            stimulus_2: 'https://jmkuhns.github.io/pattern-comparison/patterns/2_19_2.png',

            data: { stim: 19, corr_resp:  37, exp_stage: 'pattern_comp_p2'}
            },
            {
            stimulus_1: 'https://jmkuhns.github.io/pattern-comparison/patterns/2_20_1.png',

            stimulus_2: 'https://jmkuhns.github.io/pattern-comparison/patterns/2_20_2.png',

            data: { stim: 20, corr_resp:  37, exp_stage: 'pattern_comp_p2'}
            },
            {
            stimulus_1: 'https://jmkuhns.github.io/pattern-comparison/patterns/2_21_1.png',

            stimulus_2: 'https://jmkuhns.github.io/pattern-comparison/patterns/2_21_2.png',

            data: { stim: 21, corr_resp:  37, exp_stage: 'pattern_comp_p2'}
            },
            {
            stimulus_1: 'https://jmkuhns.github.io/pattern-comparison/patterns/2_22_1.png',

            stimulus_2: 'https://jmkuhns.github.io/pattern-comparison/patterns/2_22_2.png',

            data: { stim: 22, corr_resp:  39, exp_stage: 'pattern_comp_p2'}
            },
            {
            stimulus_1: 'https://jmkuhns.github.io/pattern-comparison/patterns/2_23_1.png',

            stimulus_2: 'https://jmkuhns.github.io/pattern-comparison/patterns/2_23_2.png',

            data: { stim: 23, corr_resp:  39, exp_stage: 'pattern_comp_p2'}
            },
            {
            stimulus_1: 'https://jmkuhns.github.io/pattern-comparison/patterns/2_24_1.png',

            stimulus_2: 'https://jmkuhns.github.io/pattern-comparison/patterns/2_24_2.png',

            data: { stim: 24, corr_resp:  39, exp_stage: 'pattern_comp_p2'}
            },
            {
            stimulus_1: 'https://jmkuhns.github.io/pattern-comparison/patterns/2_25_1.png',

            stimulus_2: 'https://jmkuhns.github.io/pattern-comparison/patterns/2_25_2.png',

            data: { stim: 25, corr_resp:  37, exp_stage: 'pattern_comp_p2'}
            },
            {
            stimulus_1: 'https://jmkuhns.github.io/pattern-comparison/patterns/2_26_1.png',

            stimulus_2: 'https://jmkuhns.github.io/pattern-comparison/patterns/2_26_2.png',

            data: { stim: 26, corr_resp:  39, exp_stage: 'pattern_comp_p2'}
            },
            {
            stimulus_1: 'https://jmkuhns.github.io/pattern-comparison/patterns/2_27_1.png',

            stimulus_2: 'https://jmkuhns.github.io/pattern-comparison/patterns/2_27_2.png',

            data: { stim: 27, corr_resp:  39, exp_stage: 'pattern_comp_p2'}
            },
            {
            stimulus_1: 'https://jmkuhns.github.io/pattern-comparison/patterns/2_28_1.png',

            stimulus_2: 'https://jmkuhns.github.io/pattern-comparison/patterns/2_28_2.png',

            data: { stim: 28, corr_resp:  37, exp_stage: 'pattern_comp_p2'}
            },
            {
            stimulus_1: 'https://jmkuhns.github.io/pattern-comparison/patterns/2_29_1.png',

            stimulus_2: 'https://jmkuhns.github.io/pattern-comparison/patterns/2_29_2.png',

            data: { stim: 29, corr_resp:  37, exp_stage: 'pattern_comp_p2'}
            },
            {
            stimulus_1: 'https://jmkuhns.github.io/pattern-comparison/patterns/2_30_1.png',

            stimulus_2: 'https://jmkuhns.github.io/pattern-comparison/patterns/2_30_2.png',

            data: { stim: 30, corr_resp:  39, exp_stage: 'pattern_comp_p2'}
            }
    ]
};


var debrief = {
  type: "html-keyboard-response",
	stimulus: "<p>Press any key to complete the experiment. Thank you!</p>",
  data:{exp_stage: "instructions"},
  on_finish: function(){
    var selected_data = filter_data("pattern_comp_p2");
    jsPsych.data.get().addToLast({correct_responses: selected_data});
  },
};

timeline.push(welcome);
timeline.push(instructions, instructions2);
timeline.push(alt_practice);
timeline.push(interim_instructions);
timeline.push(test_trials_p1_trl1);
//timeline.push(test_trials_p1_trl2);
//timeline.push(interim_instructions_2);
/*
timeline.push(test_trials_p2_trl1);
timeline.push(test_trials_p2);
timeline.push(debrief);
*/
