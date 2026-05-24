import init from "./scope.mjs";
import { buildUri } from "./buildUriClosure.mjs";
import UriBuilder from "./buildUriClass.mjs";


const githubUriBuilder = buildUri('api.github.com');
/**
 * In this case, githubUriBuilder is a reference to the instance of 
 *  the function buildPath that is created when buildUri is run. 
 * The instance of buildPath maintains a reference to its lexical environment,
 *  within which the variable domain exists.
 */
const githubUsersUri = githubUriBuilder('users/octocat');
const githubGistUri = githubUriBuilder('/gist');
console.log(`closure: github users uri: ${githubUsersUri}`);
console.log(`closure: github gist uri: ${githubGistUri}`);

/**
 * UriBuilder class is equivalant class structure of buildUriClosure
 */
const githubUriBuilderClassInstance = new UriBuilder('api.github.com');
console.log(`class instance: github users uri
     ${githubUriBuilderClassInstance.buildPath('users/octocat')}`);
console.log(`class instance: github gist uri
    ${githubUriBuilderClassInstance.buildPath('gist')}`);