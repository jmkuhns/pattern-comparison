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
*/


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
*/
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
  }
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

// interim instructions...You will have 30 seconds...

var interim_instructions = {
  type: "html-keyboard-response",
  stimulus: '<p>You have now completed the practice trials. For the experiment, you will have 30 seconds to complete as many problems as you can. You will complete this process two times in total.<br><br>As a reminder, if the two patterns are the SAME, press the LEFT ARROW KEY. If the two patterns are DIFFERENT, press the RIGHT ARROW KEY. Please try to work as rapidly as you can.</p>' +
  '<br><p>Press any key to begin.</p>',
  post_trial_gap: 1000,
  data:{
    exp_stage: "instructions"
  },
  on_finish: function(){
    var current_timer = jsPsych.totalTime()+30000;
  }
}
var debrief = {
  type: "html-keyboard-response",
	stimulus: "<p>Press any key to complete the experiment. Thank you!</p>",
  data:{exp_stage: "instructions"}
};

timeline = [];
timeline.push(welcome);
timeline.push(instructions, instructions2);
// timeline.push(alt_practice);
timeline.push(interim_instructions);


// idea for timer
// html keyoard response has trial_duration function.
// This can be updated after each trial. e.g., set a time limit like timer = 30000 ms or something, and then on the onload of each trial, subtract the timer from the current run time and set that value as the trial_duration

// var test_index = 0;
//var time_var = current_timer - Date.now();
var alt_test_trials = {
  timeline:[{
    type: "html-keyboard-response",
    choices: [37, 39],
    stimulus:   function(){
      var html= '<div class="row">' +
                  '<div class="column"><img src=' +
                  jsPsych.timelineVariable('stimulus_1', true) +
                       //patterns_page_1_left[test_index] +
                       ' style="width:150px;height:150px";>' +
                       '</img>' +
                  '</div>' +
                  '<div class="column"><img src=' +
                  jsPsych.timelineVariable('stimulus_2', true)+
                  // patterns_page_1_right[test_index] +
                  '  style="width:150px;height:150px";></img>'+
                  '</div>'+
                '</div>';
      return html;
    },
    post_trial_gap: 250,
    on_start:function(){
      var trial_timeout = setTimeout(function () {
            jsPsych.endCurrentTimeline();;
        }, 3000);
      },
    // trial_duration: current_timer,
  //  response_ends_trial: true,
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
    ]
};

timeline.push(alt_test_trials)
timeline.push(debrief);
/*,
loop_function:function(){
  current_timer -= jsPsych.totalTime();
  test_index++;
    if (test_index == p1_correct.length || current_timer <= 0){
        return false; // don't loop again
    } else {
        return true; // loop again
    };

}*/
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




//timeline.push(node_p1);
//timeline.push(debrief);
