<script>
import { storeInput } from '../../stores.js';

export let className;
export let storyblokEditableData;
export let blok;
let { name, value, label, placeholder } = {...blok};

const id = "input-" + Math.random().toString(36).slice(2, 11);
const classNameLocal = ['text-base appearance-none bg-primary-50 block border-0 dark:bg-primary-950 dark:focus:ring-primary-400 dark:hover:ring-primary-400 dark:placeholder:text-primary-200/60 dark:ring-primary-200/40 focus:outline-none focus:ring-2 focus:ring-primary-600 hover:ring-primary-600 placeholder:text-primary-950/60 ring-1 ring-primary-900/40 transition w-full', className].join(' ');
</script>

<div data-blok-c={storyblokEditableData['data-blok-c']} data-blok-uid={storyblokEditableData['data-blok-uid']}>
    <label for={id} class="sr-only">{label}</label>
    <textarea on:change={(e) => storeInput(name, e)} id={id} name={name} value={value} class={classNameLocal} placeholder={placeholder} rows="3"></textarea>
</div>