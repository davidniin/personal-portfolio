/**
 * Project Domain Model
 * Represents a portfolio project/repository
 */
export class Project {
    constructor({ title, description, tags, category, colorClass }) {
        this.title = title;
        this.description = description;
        this.tags = tags;
        this.category = category;
        this.colorClass = colorClass;
    }

    /**
     * Get category badge classes
     */
    getCategoryClasses() {
        return this.colorClass;
    }

    /**
     * Check if project has specific tag
     */
    hasTag(tag) {
        return this.tags.includes(tag);
    }

    /**
     * Get formatted tags for display
     */
    getFormattedTags() {
        return this.tags.join(' • ');
    }
}
