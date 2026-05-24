/**
 * Builds a URI builder function for a specific domain
 * 
 * @param {string} domain - The domain name (e.g., "api.example.com")
 * @returns {Function} A function that takes a path and returns a complete URI
 * 
 * @example
 * const buildGithubUri = buildUri("api.github.com");
 * console.log(buildGithubUri("/users/octocat"));
 * // "https://api.github.com/users/octocat"
 */
export function buildUri(domain) {
    // Validate domain
    if (!domain || typeof domain !== 'string') {
        throw new Error('Domain must be a non-empty string');
    }
    
    // Remove any protocol if accidentally included
    const cleanDomain = domain.replace(/^https?:\/\//, '');
    
    return function buildPath(path) {
        // Validate path
        if (typeof path !== 'string') {
            throw new Error('Path must be a string');
        }
        
        // Handle empty path
        if (path === '') {
            return `https://${cleanDomain}/`;
        }
        
        // Normalize path: remove leading slash, ensure no trailing slash
        const normalizedPath = path
            .replace(/^\//, '')  // Remove leading slash
            .replace(/\/$/, ''); // Remove trailing slash
        
        return `https://${cleanDomain}/${normalizedPath}`;
    };
}
