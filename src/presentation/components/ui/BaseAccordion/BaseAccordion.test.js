import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import BaseAccordion from './BaseAccordion.vue';

describe('BaseAccordion', () => {
    it('reflects the isOpen prop in aria-expanded and links the panel via aria-controls', () => {
        const wrapper = mount(BaseAccordion, {
            props: { isOpen: false, panelId: 'panel-test' }
        });

        const button = wrapper.get('button');
        expect(button.attributes('aria-expanded')).toBe('false');
        expect(button.attributes('aria-controls')).toBe('panel-test');
        expect(wrapper.find('#panel-test').exists()).toBe(true);
    });

    it('shows aria-expanded="true" when open', () => {
        const wrapper = mount(BaseAccordion, {
            props: { isOpen: true, panelId: 'panel-test' }
        });
        expect(wrapper.get('button').attributes('aria-expanded')).toBe('true');
    });

    it('emits "toggle" when the header button is clicked', async () => {
        const wrapper = mount(BaseAccordion, {
            props: { isOpen: false, panelId: 'panel-test' }
        });

        await wrapper.get('button').trigger('click');

        expect(wrapper.emitted('toggle')).toHaveLength(1);
    });
});
