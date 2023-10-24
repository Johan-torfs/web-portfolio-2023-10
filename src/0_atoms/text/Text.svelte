<script>
import { inputs } from '../../stores.js';

export let htmlWithClass;

let html = htmlWithClass.replace(new RegExp('{{(' + Object.keys($inputs).join('|') + ')}}', 'g'), match => $inputs[match.replace(/{{|}}/g, '')]);
</script>

{#if $inputs["rating"]}
    {@html html}
{:else}
    <p>Submitting review</p>
{/if}

<!-- new RegExp('{{(' + Object.keys($store.inputs).join('|') + ')}}', 'g'), $store.inputs["$1"] -->