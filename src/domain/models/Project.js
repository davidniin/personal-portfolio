/**
 * Project Domain Model
 * Represents a portfolio project/repository
 */
export class Project {
    constructor({ id, title, tags, category, colorClass, url, image }) {
        this.id = id; // Unique identifier for i18n lookup
        this.title = title;
        this.tags = tags;
        this.category = category;
        this.colorClass = colorClass;
        this.url = url; // Live website URL
        this.image = image; // Preview image path
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
