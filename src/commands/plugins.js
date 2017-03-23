import { Log, loadPlugins, loadStyles } from '../utils';

const helpMessage = `
Usage:

  reaction plugins [command]

    Commands:
      load     Set up the imports of your internal Reaction plugins
`;

export function plugins(yargs) {
  Log.args(yargs.argv);

  const commands = yargs.argv._;

  if (!commands[1]) {
    Log.error('\nOops! A subcommand is required.\n');
    Log.error('To load plugins, try running:\n');
    Log.warn(Log.yellow(' reaction plugins load\n'));
    process.exit(1);
  }

  if (commands[1] === 'load') {
    Log.info('\nSetting up plugin imports...');
    loadPlugins();
    Log.info('\nSetting up style imports...\n');
    loadStyles();
    return Log.success('Done!\n');
  }

  Log.error('\nInvalid subcommand');
  Log.default(helpMessage);
}
