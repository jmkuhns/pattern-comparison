// pattern_comparison.js
// Salthouse and Babcock: letter comparison is randomly chosen consonants of length 3, 6, or 9
// Paper version had two separately timed versions with 32 pairs per pages
// half are same, half are different
// Difference is in 1 LD for a string
// patterns_page_1_left, patterns_page_1_right, patterns_page_2_left, patterns_page_2_right

// new dump

//var trl_dur =  function() {
//		 trl =	jsPsych.data.get().select('time_elapsed');
//		 time = trl[trl.length] - trl[trl.length - 1];
//		limit = limit - time;
//		return limit
//	};

/*
var does_it_work = {
	type: "html-keyboard-response",
	choices: [37, 39],
	stimulus: function(){
		var strt = jsPsych.data.get().select('start').values[0];
		return 	"<p>"+strt+"</p>"
	},
	on_start: function(){
		trl = jsPsych.data.get().select('time_elapsed');
		var drl = trl.values.length;
	  console.log(trl.values);
		console.log(trl.values[drl-1]);
		console.log(trl.values[trl.values.length-1]);
		console.log(trl.values[trl.values.length-2]);
		time = trl.values[trl.values.length-1] - trl.values[trl.values.length-2];
		limit = limit - time;
		return limit;
		console.log(time);
	},
	trial_duration: limit,
	on_finish: function(data){
			data.trial_duration = limit
	}
};

var does_it_work_2 = {
	type: "html-keyboard-response",
	choices: [37, 39],
	stimulus: "<p>This seems to be working......</p>",
	trial_duration: limit,
	on_start: function(){
		trl = jsPsych.data.get().select('time_elapsed');
	  console.log(trl.values);
		time = trl.values[trl.values.length-1] - trl.values[trl.values.length-2];
		limit = limit - time;
		return limit;

	},
	on_finish: function(data){
			data.trial_duration = limit
	}
}
*/


// This includes older way of loading images. It worked nicely but not with the timeout functions
/*
// set up practice stimuli
var prac_correct = [37, 39, 39];

var practice_left = [patterns_practice + "prac_1_1.png", patterns_practice + "prac_2_1.png", patterns_practice + "prac_3_1.png"];
var practice_right = [patterns_practice + "prac_1_2.png", patterns_practice + "prac_2_2.png", patterns_practice + "prac_3_2.png"];
/*
var practice_stims = [
  {stimulus_1: patterns_practice + "prac_1_1.png",
    stimulus_2: patterns_practice + "prac_1_2.png",
    data: {corr_resp: 37, exp_stage: "practice",
  stim: patterns_practice + "prac_1_1.png"}},
    {stimulus_1: patterns_practice + "prac_2_1.png",
    stimulus_2: patterns_practice + "prac_2_2.png",
      data: {corr_resp: 39, exp_stage: "practice",
    patterns_practice + "prac_2_1.png"}},
      {stimulus_1: patterns_practice + "prac_3_1.png",
      stimulus_2: patterns_practice + "prac_3_2.png",
        data: {corr_resp: 39, exp_stage: "practice",
      patterns_practice + "prac_3_1.png"}}
];



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
/*
var test_1 = [
      {
        stimulus_1: 'https://jmkuhns.github.io/pattern-comparison/patterns/1_01_1.png',

        stimulus_2: 'https://jmkuhns.github.io/pattern-comparison/patterns/1_01_2.png',

        data: { stim: 1, corr_resp:  37, exp_stage: 'pattern_comp_p1'}
        },
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
];

var test_2 = [
          {
        stimulus_1: 'https://jmkuhns.github.io/pattern-comparison/patterns/2_01_1.png',
        stimulus_2: 'https://jmkuhns.github.io/pattern-comparison/patterns/2_01_2.png',
        data: { stim: 1, corr_resp:  39, exp_stage: 'pattern_comp_p2'}
        },
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
];


// 37 = same; 39 = diff
//var p1_correct = [37, 39, 37, 39, 37, 39, 37, 39, 37, 39, 37, 39, 39, 39, 37, 39, 37, 39, 39, 37, 37, 37, 37, 37, 39, 39, 39, 37, 39, 37];

// var p2_correct = [39, 39, 37, 37, 37, 37, 39, 39, 37, 37, 39, 39, 37, 39, 39, 39, 37, 37, 37, 37, 37, 39, 39, 39, 37, 39, 39, 37, 37, 39];

jsPsych.pluginAPI.preloadImages(images = [practice_left, practice_right]);


*/
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




//timeline.push(node_p1);
//timeline.push(debrief);


        /*
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
          data: function() {
              jsPsych.data.get().addToLast({
              success: true,
              prac_index: practice_index,
              corr_resp: prac_correct[practice_index],
              stim: practice_left[practice_index]
            })
          },
          loop_function: function(){
            practice_index++;
              if (practice_index == practice_left.length){
                  return false; // don't loop again
              } else {
                  return true; // loop again
              }
          }
        }

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
