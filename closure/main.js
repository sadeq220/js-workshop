import init from "./scope.mjs";
import { buildUri } from "./closure.mjs";

const githubUriBuilder = buildUri('api.github.com');
/**
 * In this case, githubUriBuilder is a reference to the instance of 
 *  the function buildPath that is created when buildUri is run. 
 * The instance of buildPath maintains a reference to its lexical environment,
 *  within which the variable domain exists.
 */
const githubUsersUri = githubUriBuilder('users/octocat');
const githubGistUri = githubUriBuilder('/gist');
console.log(`github users uri: ${githubUsersUri}`);
console.log(`github gist uri: ${githubGistUri}`)