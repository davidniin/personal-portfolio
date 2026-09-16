import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import BaseTabs from './BaseTabs.vue';

const tabs = [
    { id: 'a', label: 'Tab A' },
    { id: 'b', label: 'Tab B' }
];

describe('BaseTabs', () => {
    it('marks only the active tab as aria-selected', () => {
        const wrapper = mount(BaseTabs, {
            props: { tabs, modelValue: 'a' }
        });

        const [tabA, tabB] = wrapper.findAll('[role="tab"]');
        expect(tabA.attributes('aria-selected')).toBe('true');
        expect(tabB.attributes('aria-selected')).toBe('false');
    });

    it('emits update:modelValue with the clicked tab id', async () => {
        const wrapper = mount(BaseTabs, {
            props: { tabs, modelValue: 'a' }
        });

        const [, tabB] = wrapper.findAll('[role="tab"]');
        await tabB.trigger('click');

        expect(wrapper.emitted('update:modelValue')[0]).toEqual(['b']);
    });

    it('links the tabpanel to the active tab via aria-labelledby', () => {
        const wrapper = mount(BaseTabs, {
            props: { tabs, modelValue: 'b' }
        });

        const panel = wrapper.get('[role="tabpanel"]');
        expect(panel.attributes('aria-labelledby')).toBe('tab-b');
    });
});
