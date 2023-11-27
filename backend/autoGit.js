import { promisify } from 'util';
import { exec as execCallback } from 'child_process';

const exec = promisify(execCallback);


async function gitCommitAndPush(repoPath) {
  const options = { cwd: repoPath };
  try {
    // Add changes to Git
    await exec('git add -A', options);
    console.log('Changes added to git.');

    // Commit changes
    await exec('git commit -m "Automated blog update"', options);
    console.log('Changes committed.');

    // Push changes to the repository
    await exec('git push', options);
    console.log('Changes pushed to GitHub.');
  } catch (error) {
    console.error('Error during Git operations:', error);
  }
}

export default gitCommitAndPush;
