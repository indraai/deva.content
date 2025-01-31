// Copyright (c)2025 Quinn Michaels
// Content Deva
// Manages various Content in Deva.space, Deva.cloud, and Deva.world.
import Deva from '@indra.ai/deva';

// import package for info
import pkg from './package.json' with {type:'json'};

import data from './data.json' with {type:'json'};
const {agent,vars} = data.DATA;

// set the __dirname
import {dirname} from 'node:path';
import {fileURLToPath} from 'node:url';    
const __dirname = dirname(fileURLToPath(import.meta.url));

const info = {
	id: pkg.id,
	name: pkg.name,
	describe: pkg.description,
	version: pkg.version,
	dir: __dirname,
	url: pkg.homepage,
	git: pkg.repository.url,
	bugs: pkg.bugs.url,
	author: pkg.author,
	license: pkg.license,
	copyright: pkg.copyright,
};
const CONTENT = new Deva({
	info,
	agent,
	vars,
	utils: {
		translate(input) {return input.trim();},
		parse(input) {return input.trim();},
		proecess(input) {return input.trim();}
	},
	listeners: {},
	modules: {},
	func: {},
	methods: {},
	onReady(data, resolve) {
		this.prompt('ready');
		return resolve(data);
	},
	onError(err) {
		console.log('ERR', err);
	}
});
export default CONTENT;
