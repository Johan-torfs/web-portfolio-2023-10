<script>
    import { inputs } from '../../stores.js';

    export let icon;
    export let className;
    export let storyblokData;
</script>

<button
    data-blok-c={storyblokData?.['data-blok-c']} data-blok-uid={storyblokData?.['data-blok-uid']}
    class={className}
    type="submit"
>
    {#if !!icon?.type || $inputs["__submitting"]}
        <i class={$inputs["__submitting"] ? "fa-spinner fa-spin" : [icon.type, icon.icon].join(' ')} aria-hidden="true"></i>
    {/if}
    <span class:list={[{"ml-2": !!icon?.type}]}>
        <slot />
    </span>  
</button>