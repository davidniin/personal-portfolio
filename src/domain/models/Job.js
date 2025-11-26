/**
 * Job Domain Model
 * Represents a professional work experience
 */
export class Job {
    constructor({ id, company, role, dates, bullets }) {
        this.id = id;
        this.company = company;
        this.role = role;
        this.dates = dates;
        this.bullets = bullets;
    }

    /**
     * Get formatted title for display
     */
    getFormattedTitle() {
        return `${this.role} @ ${this.company}`;
    }

    /**
     * Check if job is current position
     */
    isCurrent() {
        return this.dates.toLowerCase().includes('present');
    }

    /**
     * Get bullet points as array of strings
     */
    getBulletTexts() {
        return this.bullets.map(b => b.text);
    }
}
