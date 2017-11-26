import React from 'react';

export const validate = {
	number: function(val){
		return /^[0-9]*$|^$|undefined/.test(val)
	},
	text: function(val){
		return /^[a-zA-Z_ ]*$|^$|undefined/.test(val)
	}
}


