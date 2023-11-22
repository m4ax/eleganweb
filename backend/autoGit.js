import { promisify } from 'util';
import { exec as execCallback } from 'child_process';

const exec = promisify(execCallback);

async function gitCommitAndPush() {
  try {
    // Add changes to Git
    await exec('git add -A');
    console.log('Changes added to git.');

    // Commit changes
    await exec('git commit -m "Automated blog update"');
    console.log('Changes committed.');

    // Push changes to the repository
    await exec('git push');
    console.log('Changes pushed to GitHub.');
  } catch (error) {
    console.error('Error during Git operations:', error);
  }
}

export default gitCommitAndPush;
