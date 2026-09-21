/**
 * Project Domain Model
 * Represents a portfolio project/repository
 */
export class Project {
    constructor({ id, title, tags, url, usesAI = false, featured = false }) {
        this.id = id; // Unique identifier for i18n lookup
        this.title = title;
        this.tags = tags;
        this.url = url; // Live website URL
        this.usesAI = usesAI; // Whether this project's core value relies on AI
        this.featured = featured; // Whether this project gets the larger, featured card treatment
    }
}
