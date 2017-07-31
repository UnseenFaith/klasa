const { Language, util } = require('klasa');

module.exports = class extends Language {

	constructor(...args) {
		super(...args);
		this.language = {
			DEFAULT: (key) => `${key} has not been localized for en-US yet.`,
			SETTING_GATEWAY_EXPECTS_GUILD: 'The parameter <Guild> expects either a Guild or a Guild Object.',
			SETTING_GATEWAY_VALUE_FOR_KEY_NOEXT: (data, key) => `The value ${data} for the key ${key} does not exist.`,
			SETTING_GATEWAY_VALUE_FOR_KEY_ALREXT: (data, key) => `The value ${data} for the key ${key} already exists.`,
			SETTING_GATEWAY_SPECIFY_VALUE: 'You must specify the value to add or filter.',
			SETTING_GATEWAY_KEY_NOT_ARRAY: (key) => `The key ${key} is not an Array.`,
			SETTING_GATEWAY_KEY_NOEXT: (key) => `The key ${key} does not exist in the current data schema.`,
			SETTING_GATEWAY_INVALID_TYPE: 'The type parameter must be either add or remove.',
			SETTING_RESOLVER_INVALID_USER: 'This key expects a User Object or ID.',
			SETTING_RESOLVER_INVALID_CHANNEL: 'This key expects a Channel Object or ID.',
			SETTING_RESOLVER_INVALID_GUILD: 'This key expects a Guild ID.',
			SETTING_RESOLVER_INVALID_ROLE: 'This key expects a Role Object or ID.',
			SETTING_RESOLVER_INVALID_BOOLEAN: 'This key expects a Boolean.',
			SETTING_RESOLVER_STRING_MAXMIN: (err) => `The string length must be ${err} characters.`,
			SETTING_RESOLVER_INVALID_INTEGER: 'This key expects an Integer value.',
			SETTING_RESOLVER_INTEGER_MAXMIN: (err) => `The integer value must be ${err}.`,
			SETTING_RESOLVER_INVALID_FLOAT: 'This key expects a Float value.',
			SETTING_RESOLVER_FLOAT_MAXMIN: (err) => `The float value must be ${err}.`,
			SETTING_RESOLVER_INVALID_URL: 'This key expects an URL (Uniform Resource Locator).',
			SETTING_RESOLVER_INVALID_COMMAND: 'This key expects a Command.',
			SETTING_RESOLVER_MINMAX_EXACTLY: (min) => `exactly ${min}`,
			SETTING_RESOLVER_MINMAX_BOTH: (min, max) => `between ${min} and ${max}`,
			SETTING_RESOLVER_MINMAX_MIN: (min) => `more than ${min}`,
			SETTING_RESOLVER_MINMAX_MAX: (max) => `less than ${max}`,
			ARG_RESOLVER_INVALID_PIECE: (name, piece) => `${name} must be a valid ${piece} name.`,
			ARG_RESOLVER_INVALID_MSG: (name) => `${name} must be a valid message id.`,
			ARG_RESOLVER_INVALID_USER: (name) => `${name} must be a mention or valid user id.`,
			ARG_RESOLVER_INVALID_MEMBER: (name) => `${name} must be a mention or valid user id.`,
			ARG_RESOLVER_INVALID_CHANNEL: (name) => `${name} must be a channel tag or valid channel id.`,
			ARG_RESOLVER_INVALID_GUILD: (name) => `${name} must be a valid guild id.`,
			ARG_RESOLVER_INVALID_ROLE: (name) => `${name} must be a role mention or role id.`,
			ARG_RESOLVER_INVALID_LITERAL: (name) => `Your option did not match the only possibility: ${name}`,
			ARG_RESOLVER_INVALID_BOOL: (name) => `${name} must be true or false.`,
			ARG_RESOLVER_INVALID_INT: (name) => `${name} must be an integer.`,
			ARG_RESOLVER_INVALID_FLOAT: (name) => `${name} must be a valid number.`,
			ARG_RESOLVER_INVALID_URL: (name) => `${name} must be a valid url.`,
			ARG_RESOLVER_STRING_SUFFIX: ' characters',
			ARG_RESOLVER_MINMAX_EXACTLY: (name, min, suffix) => `${name} must be exactly ${min}${suffix}.`,
			ARG_RESOLVER_MINMAX_BOTH: (name, min, max, suffix) => `${name} must be between ${min} and ${max}${suffix}.`,
			ARG_RESOLVER_MINMAX_MIN: (name, min, suffix) => `${name} must be greater than ${min}${suffix}.`,
			ARG_RESOLVER_MINMAX_MAX: (name, max, suffix) => `${name} must be less than ${max}${suffix}.`,
			COMMANDMESSAGE_MISSING: 'Missing one or more required arguments after end of input.',
			COMMANDMESSAGE_MISSING_REQUIRED: (name) => `${name} is a required argument.`,
			COMMANDMESSAGE_MISSING_OPTIONALS: (possibles) => `Missing a required option: (${possibles})`,
			COMMANDMESSAGE_NOMATCH: (possibles) => `Your option didn't match any of the possibilities: (${possibles})`,
			MONITOR_COMMAND_HANDLER_REPROMPT: (tag, error) => `${tag} | **${error}** | You have **30** seconds to respond to this prompt with a valid argument. Type **"ABORT"** to abort this prompt.`,
			MONITOR_COMMAND_HANDLER_ABORTED: 'Aborted',
			INHIBITOR_COOLDOWN: (remaining) => `You have just used this command. You can use this command again in ${remaining} seconds.`,
			INHIBITOR_DISABLED: 'This command is currently disabled',
			INHIBITOR_MISSING_BOT_PERMS: (missing) => `Insufficient permissions, missing: **${missing}**`,
			INHIBITOR_PERMISSINS: 'You do not have permission to use this command',
			INHIBITOR_REQUIRED_SETTINGS: (settings) => `The guild is missing the **${settings.join(', ')}** guild setting${settings.length > 1 ? 's' : ''} and cannot run.`,
			INHIBITOR_RUNIN: (types) => `This command is only avaliable in ${types} channels`,
			INHIBITOR_RUNIN_NONE: (name) => `The ${name} command is not configured to run in any channel.`,
			COMMAD_UNLOAD: (type, name) => `✅ Unloaded ${type}: ${name}`,
			COMMAND_TRANSFER_ERROR: '❌ That file has been transfered already or never existed.',
			COMMAND_TRANSFER_SUCCESS: (type, name) => `✅ Successfully Transferred ${type}: ${name}`,
			COMMAND_TRANSFER_FAILED: (type, name) => `Transfer of ${type}: ${name} to Client has failed. Please check your Console.`,
			COMMAND_RELOAD: (type, name) => `✅ Reloaded ${type}: ${name}`,
			COMMAND_RELOAD_ALL: (type) => `✅ Reloaded all ${type}.`,
			COMMAND_REBOOT: 'Rebooting...',
			COMMAND_PING: 'Ping?',
			COMMAND_PINGPONG: (diff, ping) => `Pong! (Roundtrip took: ${diff}ms. Heartbeat: ${ping}ms.)`,
			COMMAND_INVITE_SELFBOT: 'Why would you need an invite link for a selfbot...',
			COMMAND_INVITE: (client) => [
				`To add ${client.user.username} to your discord guild:`,
				client.invite,
				util.codeBlock('', [
					'The above link is generated requesting the minimum permissions required to use every command currently.',
					"I know not all permissions are right for every server, so don't be afraid to uncheck any of the boxes.",
					'If you try to use a command that requires more permissions than the bot is granted, it will let you know.'
				].join(' ')),
				'Please file an issue at <https://github.com/dirigeants/klasa> if you find any bugs.'
			],
			COMMAND_INFO: [
				"Klasa is a 'plug-and-play' framework built on top of the Discord.js library.",
				'Most of the code is modularized, which allows developers to edit Komada to suit their needs.',
				'',
				'Some features of Klasa include:',
				'• Fast Loading times with ES7 Support (Async/Await)',
				'• Per-server settings for each guild, that can be extended with your own code',
				'• Customizable Command system with automated usage parsing and easy to use reloading and downloading modules',
				'• "Monitors" which can watch messages and act on them, like a normal message event (Swear Filters, Spam Protection, etc)',
				'• "Inhibitors" which can prevent commands from running based on a set of parameters (Permissions, Blacklists, etc)',
				'• "Providers" which allow you to connect with an outside database of your choosing. Not yet documented.',
				'• "Finalizers" which run on messages after a successful command.',
				'• "Extendables", code that acts passively. They add properties or methods to existing Discord.js classes.',
				'',
				'We hope to be a 100% customizable framework that can cater to all audiences. We do frequent updates and bugfixes when available.',
				"If you're interested in us, check us out at https://klasa.js.org"
			],
			COMMAND_HELP_DM: '📥 | Commands have been sent to your DMs.',
			COMMAND_HELP_NODM: "❌ | You have DMs disabled, I couldn't send you the commands in DMs.",
			COMMAND_ENABLE: (type, name) => `+ Successfully enabled ${type}: ${name}`,
			COMMAND_DISABLE: (type, name) => `+ Successfully enabled ${type}: ${name}`,
			COMMAND_DISABLE_WARN: 'You probably don\'t want to disable that, since you wouldn\'t be able to run any command to enable it again',
			COMMAND_CONF_NOKEY: 'You must provide a key',
			COMMAND_CONF_NOVALUE: 'You must provide a value',
			COMMAND_CONF_ADDED: (value, key) => `Successfully added the value \`${value}\` to the key: **${key}**`,
			COMMAND_CONF_UPDATED: (key, response) => `Successfully updated the key **${key}**: \`${response}\``,
			COMMAND_CONF_KEY_NOT_ARRAY: "This key is not array type. Use the action 'reset' instead.",
			COMMAND_CONF_REMOVE: (value, key) => `Successfully removed the value \`${value}\` from the key: **${key}**`,
			COMMAND_CONF_GET_NOEXT: (key) => `The key **${key}** does not seem to exist.`,
			COMMAND_CONF_GET: (key, value) => `The value for the key **${key}** is: \`${value}\``,
			COMMAND_CONF_RESET: (key, response) => `The key **${key}** has been reset to: \`${response}\``
		};
	}

};
