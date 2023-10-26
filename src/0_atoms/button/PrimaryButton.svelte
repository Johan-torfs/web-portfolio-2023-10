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
    disabled={$inputs["__submitting"]}
>
    {#if !!icon?.type || $inputs["__submitting"]}
        <i class={($inputs["__submitting"] ? "fas fa-spinner fa-spin" : [icon.type, icon.icon].join(' ')) + ' mr-2'} aria-hidden="true"></i>
    {/if}
    <span>
        <slot />
    </span>  
</button>