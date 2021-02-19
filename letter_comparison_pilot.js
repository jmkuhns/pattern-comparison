var timeline = [];

	var prac_cresp = [37, 39, 39];
	var p1_correct = [39,37,39,39,39,39,39,37,39,39,37,37,37,39,37,37,39,37,39, 37,39,37,37,39,37,37,37,39,37,39];
	var p2_correct = [39,39,37,37,37,39,39,37,37,39,37,39,39,37,39,39,39,39,37, 37,37,37,37,39,37,37,39,39,39,37];

var prac_left = ["XTL", "PDNGJR", "FRXJSYZGP"];
var prac_right = ["XTL", "PDNGKR", "FRXJSYWGP"];

var p1_left = ["SRKFMPHXQ", "MHJWLK", "LXQ", "HVBNQCWRT", "YVJ", "KLCDQZ", "LSVMNRQDY", "YCT", "RSXMVK", "QBM", "SRBNWT", "LVXHJBDMP", "NLGJYWQBM", "SNP", "FWVSPJ", "DGVLSK", "GDCYXZQPT", "YFV", "RJGPNB", "PBM", "CQGNSLMWX", "FJMSBDTZN", "LPY", "JBZMRP", "XNV", "MRXCNJ", "PRVWSTLYK", "ZQRWYM", "WHZJPXMVN", "ZSH"]

var p1_right = ["SRKFMPHXG", "MHJWLK", "LXY", "HVBNQCWGT", "YVQ", "KLHDQZ", "LSVMNCQDY", "YCT", "RSNMVK", "QBS", "SRBNWT", "LVXHJBDMP", "NLGJYWQBM", "QNP", "FWVSPJ", "DGVLSK", "GNCYXZQPT", "YFV", "RJGPVB", "PBM", "CQGNSLTWX", "FJMSBDTZN", "LPY", "JBZMRN", "XNV", "MRXCNJ", "PRVWSTLYK", "ZQXWYM", "WHZJPXMVN", "ZSR"];

var p2_left = ["JRLWVD", "NLZTJWQXC", "ZJT", "JKFLSMCWN", "VFZ", "GCLZJQ", "TRK", "CVQZJB", "SGCYZBWHX", "WHGZKRLPM", "MTGLBY", "CXK", "JBMWZR", "DNK", "PGTKXBZNF", "KFQ", "ZXQBNFHGP", "CZVWPK", "JZKDHY", "QZD", "CHJXRNLMQ", "PHLDMZ", "GYT", "RHBCMNGYL", "LNRBFXKHW", "TJPMZQ", "GYP", "YRSLDK", "SFH", "WTKGRDSZX"];

var p2_right = ["JRLWBD", "SLZTJWQXC", "ZJT", "JKFLSMCWN", "VFZ", "GCTZJQ", "TRP", "CVQZJB", "SGCYZBWHX", "WHQZKRLPM", "MTGLBY", "CRK", "JFMWZR", "DNK", "PGTKXBVNF", "KFN", "ZXQBYFHGP", "CZVWPH", "JZKDHY", "QZD", "CHJXRNLMQ", "PHLDMZ", "GYT", "RHBCFNGYL", "LNRBFXKHW", "TJPMZQ", "GHP", "YRTLDK", "SRH", "WTKGRDSZX"];



// removed the calculation of scores because they were not helpful in data analysis. See pattern_comparison_grant.js for original code here.


	var welcome = {
	  type: "html-keyboard-response",
	  stimulus: "Welcome to the Pattern Comparison task. Press any key to begin.",
	  data:{
	    exp_stage: "instructions"
	  }
	};
	var instructions = {
	  type: "html-keyboard-response",
	  stimulus:
	  '<p style:"font-size:30px">PATTERN COMPARISON</p>' +
	  '<br><br><p>In this task you will be asked to determine whether two strings of letters are the same or different. If the two strings are the SAME, press the LEFT ARROW KEY. If the two patterns are DIFFERENT, press the RIGHT ARROW KEY. Please try to work as rapidly as you can.</p>' +
	  '<br><p>You will complete a few practice trials with feedback before starting.</p><br><p>Press any key to continue.</p>',
	  data:{
	    exp_stage: "instructions"
	  }
	};
	var instructions2 = {
	  type: "html-keyboard-response",
	  stimulus:'<p>As a reminder, if the two strings are the SAME, press the LEFT ARROW KEY. If the two strings are DIFFERENT, press the RIGHT ARROW KEY.</p>' +
	  '<br><p>Press any key to begin the practice trials.</p>',
	  post_trial_gap: 250,
	  data:{exp_stage: "instructions"}
	};

	var alt_practice = {
	  timeline: [
	  {
	  type: "html-keyboard-response",
	  choices: [37, 39],
	  stimulus: function(){
	    var html='<div class="row">' +
	                '<div class="column">' +
	                  	jsPsych.timelineVariable("stimulus_1", true) +
	                '</div>' +
	                	'<div class="column">'+
	                			jsPsych.timelineVariable("stimulus_2", true) +
	                '</div>'+
	              '</div>';
	    return html;
	  }
		//,
	  //    post_trial_gap: 250
	  }],
				prompt: '<br><br><br><p style="font-size:25px">Press ‹— for Same. Press —› for Different.</p>',
	  data: jsPsych.timelineVariable('data'),
	  timeline_variables:
		[
	    {stimulus_1: prac_left[0],
	     stimulus_2: prac_right[0],
	     	data: {corr_resp: prac_cresp[0], exp_stage: "practice"}},
	    {stimulus_1: prac_left[1],
	     stimulus_2: prac_right[1],
	        data: {corr_resp: prac_cresp[1], exp_stage: "practice"}},
	    {stimulus_1: prac_left[2],
	     stimulus_2: prac_right[2],
	        data: {corr_resp: prac_cresp[2], exp_stage: "practice"}}
	  ]
	};

	var limit = 30000;
	var trl = null;
	var time = null;
	var time_out = 0;

	var interim_instructions = {
	  type: "html-keyboard-response",
	  stimulus: '<p>You have now completed the practice trials. For the experiment, you will have 30 seconds to complete as many problems as you can. You will complete this process two times in total.<br><br>As a reminder, if the two patterns are the SAME, press the LEFT ARROW KEY. If the two patterns are DIFFERENT, press the RIGHT ARROW KEY. Please try to work as rapidly as you can.</p>' +
	  '<br><p>Press any key to begin.</p>',
	  post_trial_gap: 250,
	  data:{exp_stage: "instructions"},
		on_finish: function(){
			console.log(limit);
			console.log(time);
			console.log(time_out);
			console.log('what else???');
		}
	};

	var generic_trial = {
		timeline:[
			{
				type: "html-keyboard-response",
				choices: [37, 39],
				stimulus: function(){
			    var html='<div class="row">' +
			                '<div class="column">' +
			                  	jsPsych.timelineVariable("stimulus_1", true) +
			                '</div>' +
			                	'<div class="column">'+
			                			jsPsych.timelineVariable("stimulus_2", true) +
			                '</div>'+
			              '</div>';
			    return html;
			  },
						prompt: '<br><br><br><p style="font-size:25px">Press ‹— for Same. Press —› for Different.</p>',
					//	post_trial_gap: 250,
						trial_duration: function(){
							return limit;
						},

				}

		]
	};

var trial_1 = {
	timeline: [generic_trial],
	data: jsPsych.timelineVariable('data'),
	on_finish: function(){
		jsPsych.data.get().addToLast({dur: limit});
		trl = jsPsych.data.get().select('time_elapsed');
		console.log(trl);
		time = trl.values[trl.values.length-1] - trl.values[trl.values.length-2];
		console.log(time);
		jsPsych.data.get().addToLast({time_between: time});
		limit = limit - time;
		time_out = 0;
		console.log(time_out);
		setTimeout(
			function(){
			time_out = 1;
			limit = 0;
			console.log('timeout');
			console.log(time_out);
			jsPsych.data.get().addToLast({timeout: time_out});
		}, limit);
	},
	timeline_variables:[
			{
			stimulus_1: p1_left[0],
			stimulus_2: p1_right[0],
				data: {corr_resp: p1_correct[0] , exp_stage: 'letter_comp_p1'}
			}
	]
};


var test_trials_p1_trl2 = {
	timeline: [generic_trial],
  data: jsPsych.timelineVariable('data'),
	on_finish: function(){
		console.log("limit");
		console.log(limit);
		jsPsych.data.get().addToLast({dur: limit});
		trl = jsPsych.data.get().select('time_elapsed');
		time = trl.values[trl.values.length-1] - trl.values[trl.values.length-2];
		jsPsych.data.get().addToLast({time_between: time});
		limit = limit - time;
		if (limit < 0){
			limit = 0;
			time_out = 1;
			console.log(limit);
		}
	},
	timeline_variables: [
						{
		stimulus_1: p1_left[1],

		stimulus_2:  p1_right[1],

		data: {corr_resp:  p1_correct[1], exp_stage: 'letter_comp_p1'}
		},
		{
		stimulus_1: p1_left[2],

		stimulus_2:  p1_right[2],

		data: {corr_resp:  p1_correct[2], exp_stage: 'letter_comp_p1'}
		},
		{
		stimulus_1: p1_left[3],

		stimulus_2:  p1_right[3],

		data: {corr_resp:  p1_correct[3], exp_stage: 'letter_comp_p1'}
		},
		{
		stimulus_1: p1_left[4],

		stimulus_2:  p1_right[4],

		data: {corr_resp:  p1_correct[4], exp_stage: 'letter_comp_p1'}
		},
		{
		stimulus_1: p1_left[5],

		stimulus_2:  p1_right[5],

		data: {corr_resp:  p1_correct[5], exp_stage: 'letter_comp_p1'}
		},
		{
		stimulus_1: p1_left[6],

		stimulus_2:  p1_right[6],

		data: {corr_resp:  p1_correct[6], exp_stage: 'letter_comp_p1'}
		},
		{
		stimulus_1: p1_left[7],

		stimulus_2:  p1_right[7],

		data: {corr_resp:  p1_correct[7], exp_stage: 'letter_comp_p1'}
		},
		{
		stimulus_1: p1_left[8],

		stimulus_2:  p1_right[8],

		data: {corr_resp:  p1_correct[8], exp_stage: 'letter_comp_p1'}
		},
		{
		stimulus_1: p1_left[9],

		stimulus_2:  p1_right[9],

		data: {corr_resp:  p1_correct[9], exp_stage: 'letter_comp_p1'}
		},
		{
		stimulus_1: p1_left[10],

		stimulus_2:  p1_right[10],

		data: {corr_resp:  p1_correct[10], exp_stage: 'letter_comp_p1'}
		},
		{
		stimulus_1: p1_left[11],

		stimulus_2:  p1_right[11],

		data: {corr_resp:  p1_correct[11], exp_stage: 'letter_comp_p1'}
		},
		{
		stimulus_1: p1_left[12],

		stimulus_2:  p1_right[12],

		data: {corr_resp:  p1_correct[12], exp_stage: 'letter_comp_p1'}
		},
		{
		stimulus_1: p1_left[13],

		stimulus_2:  p1_right[13],

		data: {corr_resp:  p1_correct[13], exp_stage: 'letter_comp_p1'}
		},
		{
		stimulus_1: p1_left[14],

		stimulus_2:  p1_right[14],

		data: {corr_resp:  p1_correct[14], exp_stage: 'letter_comp_p1'}
		},
		{
		stimulus_1: p1_left[15],

		stimulus_2:  p1_right[15],

		data: {corr_resp:  p1_correct[15], exp_stage: 'letter_comp_p1'}
		},
		{
		stimulus_1: p1_left[16],

		stimulus_2:  p1_right[16],

		data: {corr_resp:  p1_correct[16], exp_stage: 'letter_comp_p1'}
		},
		{
		stimulus_1: p1_left[17],

		stimulus_2:  p1_right[17],

		data: {corr_resp:  p1_correct[17], exp_stage: 'letter_comp_p1'}
		},
		{
		stimulus_1: p1_left[18],

		stimulus_2:  p1_right[18],

		data: {corr_resp:  p1_correct[18], exp_stage: 'letter_comp_p1'}
		},
		{
		stimulus_1: p1_left[19],

		stimulus_2:  p1_right[19],

		data: {corr_resp:  p1_correct[19], exp_stage: 'letter_comp_p1'}
		},
		{
		stimulus_1: p1_left[20],

		stimulus_2:  p1_right[20],

		data: {corr_resp:  p1_correct[20], exp_stage: 'letter_comp_p1'}
		},
		{
		stimulus_1: p1_left[21],

		stimulus_2:  p1_right[21],

		data: {corr_resp:  p1_correct[21], exp_stage: 'letter_comp_p1'}
		},
		{
		stimulus_1: p1_left[22],

		stimulus_2:  p1_right[22],

		data: {corr_resp:  p1_correct[22], exp_stage: 'letter_comp_p1'}
		},
		{
		stimulus_1: p1_left[23],

		stimulus_2:  p1_right[23],

		data: {corr_resp:  p1_correct[23], exp_stage: 'letter_comp_p1'}
		},
		{
		stimulus_1: p1_left[24],

		stimulus_2:  p1_right[24],

		data: {corr_resp:  p1_correct[24], exp_stage: 'letter_comp_p1'}
		},
		{
		stimulus_1: p1_left[25],

		stimulus_2:  p1_right[25],

		data: {corr_resp:  p1_correct[25], exp_stage: 'letter_comp_p1'}
		},
		{
		stimulus_1: p1_left[26],

		stimulus_2:  p1_right[26],

		data: {corr_resp:  p1_correct[26], exp_stage: 'letter_comp_p1'}
		},
		{
		stimulus_1: p1_left[27],

		stimulus_2:  p1_right[27],

		data: {corr_resp:  p1_correct[27], exp_stage: 'letter_comp_p1'}
		},
		{
		stimulus_1: p1_left[28],

		stimulus_2:  p1_right[28],

		data: {corr_resp:  p1_correct[28], exp_stage: 'letter_comp_p1'}
		},
		{
		stimulus_1: p1_left[29],

		stimulus_2:  p1_right[29],

		data: {corr_resp:  p1_correct[29], exp_stage: 'letter_comp_p1'}
		}
	],
	conditional_function: function(){
        // get the data from the previous trial,
        // and check which key was pressed
        if(time_out != 0){
            return false;
        } else {
            return true;
        }
    }
};


var interim_instructions_2 = {
  type: "html-keyboard-response",
  stimulus:
  '<p>You will now complete the same process again. You will have 30 seconds to complete as many problems as you can. <br><br>As a reminder, if the two strings are the SAME, press the LEFT ARROW KEY. If the two strings are DIFFERENT, press the RIGHT ARROW KEY. Please try to work as rapidly as you can.</p>' +
  '<br><p>Press any key to begin.</p>',
  post_trial_gap: 250,
  data:{
    exp_stage: "instructions"
  },
  on_finish: function(){
		trl = jsPsych.data.get().select('time_elapsed');
		time = trl.values[trl.values.length-1] - trl.values[trl.values.length-2];
		console.log("time between last trial and end");
		console.log(time);
		jsPsych.data.get().addToLast({dur: limit});

		limit = 30000;
		trl = null;
		time = null;
		time_out = 0;
  },
};



var trial_2 = {
	timeline: [generic_trial],
	data: jsPsych.timelineVariable('data'),
	on_finish: function(){
		jsPsych.data.get().addToLast({dur: limit});
		trl = jsPsych.data.get().select('time_elapsed');
		console.log(trl);
		time = trl.values[trl.values.length-1] - trl.values[trl.values.length-2];
		console.log(time);
		jsPsych.data.get().addToLast({time_between: time});
		limit = limit - time;
		console.log(limit);
		setTimeout(
			function(){
			time_out = 1;
			limit = 0;
			console.log('timeout');
			console.log(time_out);
			jsPsych.data.get().addToLast({timeout: time_out});
		}, limit);
	},
	timeline_variables: [
		{
			stimulus_1: p2_left[0],
			stimulus_2:  p2_right[0],
				data: {corr_resp:  p2_correct[0], exp_stage: 'letter_comp_p2'}
			}
	]
}

var test_trials_p2_trl2 = {
	timeline: [generic_trial],
  data: jsPsych.timelineVariable('data'),
	on_finish: function(){
		console.log("limit");
		console.log(limit);
		jsPsych.data.get().addToLast({dur: limit});
		trl = jsPsych.data.get().select('time_elapsed');
		time = trl.values[trl.values.length-1] - trl.values[trl.values.length-2];
		jsPsych.data.get().addToLast({time_between: time});
		limit = limit - time;
		if (limit < 0){
			limit = 0;
			time_out = 1;
			console.log(limit);
		}
	},
			prompt: '<br><br><br><p style="font-size:25px">Press ‹— for Same. Press —› for Different.</p>',
			timeline_variables: [
			          {
			  stimulus_1: p2_left[1],

			  stimulus_2:  p2_right[1],

			  data: {corr_resp:  p2_correct[1], exp_stage: 'letter_comp_p2'}
			  },
			  {
			  stimulus_1: p2_left[2],

			  stimulus_2:  p2_right[2],

			  data: {corr_resp:  p2_correct[2], exp_stage: 'letter_comp_p2'}
			  },
			  {
			  stimulus_1: p2_left[3],

			  stimulus_2:  p2_right[3],

			  data: {corr_resp:  p2_correct[3], exp_stage: 'letter_comp_p2'}
			  },
			  {
			  stimulus_1: p2_left[4],

			  stimulus_2:  p2_right[4],

			  data: {corr_resp:  p2_correct[4], exp_stage: 'letter_comp_p2'}
			  },
			  {
			  stimulus_1: p2_left[5],

			  stimulus_2:  p2_right[5],

			  data: {corr_resp:  p2_correct[5], exp_stage: 'letter_comp_p2'}
			  },
			  {
			  stimulus_1: p2_left[6],

			  stimulus_2:  p2_right[6],

			  data: {corr_resp:  p2_correct[6], exp_stage: 'letter_comp_p2'}
			  },
			  {
			  stimulus_1: p2_left[7],

			  stimulus_2:  p2_right[7],

			  data: {corr_resp:  p2_correct[7], exp_stage: 'letter_comp_p2'}
			  },
			  {
			  stimulus_1: p2_left[8],

			  stimulus_2:  p2_right[8],

			  data: {corr_resp:  p2_correct[8], exp_stage: 'letter_comp_p2'}
			  },
			  {
			  stimulus_1: p2_left[9],

			  stimulus_2:  p2_right[9],

			  data: {corr_resp:  p2_correct[9], exp_stage: 'letter_comp_p2'}
			  },
			  {
			  stimulus_1: p2_left[10],

			  stimulus_2:  p2_right[10],

			  data: {corr_resp:  p2_correct[10], exp_stage: 'letter_comp_p2'}
			  },
			  {
			  stimulus_1: p2_left[11],

			  stimulus_2:  p2_right[11],

			  data: {corr_resp:  p2_correct[11], exp_stage: 'letter_comp_p2'}
			  },
			  {
			  stimulus_1: p2_left[12],

			  stimulus_2:  p2_right[12],

			  data: {corr_resp:  p2_correct[12], exp_stage: 'letter_comp_p2'}
			  },
			  {
			  stimulus_1: p2_left[13],

			  stimulus_2:  p2_right[13],

			  data: {corr_resp:  p2_correct[13], exp_stage: 'letter_comp_p2'}
			  },
			  {
			  stimulus_1: p2_left[14],

			  stimulus_2:  p2_right[14],

			  data: {corr_resp:  p2_correct[14], exp_stage: 'letter_comp_p2'}
			  },
			  {
			  stimulus_1: p2_left[15],

			  stimulus_2:  p2_right[15],

			  data: {corr_resp:  p2_correct[15], exp_stage: 'letter_comp_p2'}
			  },
			  {
			  stimulus_1: p2_left[16],

			  stimulus_2:  p2_right[16],

			  data: {corr_resp:  p2_correct[16], exp_stage: 'letter_comp_p2'}
			  },
			  {
			  stimulus_1: p2_left[17],

			  stimulus_2:  p2_right[17],

			  data: {corr_resp:  p2_correct[17], exp_stage: 'letter_comp_p2'}
			  },
			  {
			  stimulus_1: p2_left[18],

			  stimulus_2:  p2_right[18],

			  data: {corr_resp:  p2_correct[18], exp_stage: 'letter_comp_p2'}
			  },
			  {
			  stimulus_1: p2_left[19],

			  stimulus_2:  p2_right[19],

			  data: {corr_resp:  p2_correct[19], exp_stage: 'letter_comp_p2'}
			  },
			  {
			  stimulus_1: p2_left[20],

			  stimulus_2:  p2_right[20],

			  data: {corr_resp:  p2_correct[20], exp_stage: 'letter_comp_p2'}
			  },
			  {
			  stimulus_1: p2_left[21],

			  stimulus_2:  p2_right[21],

			  data: {corr_resp:  p2_correct[21], exp_stage: 'letter_comp_p2'}
			  },
			  {
			  stimulus_1: p2_left[22],

			  stimulus_2:  p2_right[22],

			  data: {corr_resp:  p2_correct[22], exp_stage: 'letter_comp_p2'}
			  },
			  {
			  stimulus_1: p2_left[23],

			  stimulus_2:  p2_right[23],

			  data: {corr_resp:  p2_correct[23], exp_stage: 'letter_comp_p2'}
			  },
			  {
			  stimulus_1: p2_left[24],

			  stimulus_2:  p2_right[24],

			  data: {corr_resp:  p2_correct[24], exp_stage: 'letter_comp_p2'}
			  },
			  {
			  stimulus_1: p2_left[25],

			  stimulus_2:  p2_right[25],

			  data: {corr_resp:  p2_correct[25], exp_stage: 'letter_comp_p2'}
			  },
			  {
			  stimulus_1: p2_left[26],

			  stimulus_2:  p2_right[26],

			  data: {corr_resp:  p2_correct[26], exp_stage: 'letter_comp_p2'}
			  },
			  {
			  stimulus_1: p2_left[27],

			  stimulus_2:  p2_right[27],

			  data: {corr_resp:  p2_correct[27], exp_stage: 'letter_comp_p2'}
			  },
			  {
			  stimulus_1: p2_left[28],

			  stimulus_2:  p2_right[28],

			  data: {corr_resp:  p2_correct[28], exp_stage: 'letter_comp_p2'}
			  },
			  {
			  stimulus_1: p2_left[29],

			  stimulus_2:  p2_right[29],

			  data: {corr_resp:  p2_correct[29], exp_stage: 'letter_comp_p2'}
			  }
			],
		conditional_function: function(){
					// get the data from the previous trial,
					// and check which key was pressed
					if(time_out != 0){
							return false;
					} else {
							return true;
					}
			}
};


var debrief = {
	  type: "html-keyboard-response",
		stimulus: "<p>You have now completed the experiment. Thank you!</p>",
		data:{exp_stage: "instructions"}
	};

timeline.push(welcome);
timeline.push(instructions);
timeline.push(instructions2);
timeline.push(alt_practice);
timeline.push(interim_instructions);
timeline.push(trial_1);
timeline.push(test_trials_p1_trl2);
timeline.push(interim_instructions_2);
timeline.push(trial_2);
timeline.push(test_trials_p2_trl2);
timeline.push(debrief);
