export default class UriBuilder {
    #cleanDomain; // private instance variable
    constructor(domain) {
       // Validate domain
    if (!domain || typeof domain !== 'string') {
        throw new Error('Domain must be a non-empty string');
    }
    
    // Remove any protocol if accidentally included
    this.#cleanDomain = domain.replace(/^https?:\/\//, ''); 
    }

    buildPath(path) {
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
        
        return `https://${this.#cleanDomain}/${normalizedPath}`;
    }
}