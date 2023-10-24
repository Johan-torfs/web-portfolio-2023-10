import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';
import vercel from "@astrojs/vercel/serverless";
import svelte from "@astrojs/svelte";
const env = loadEnv("", process.cwd(), ['STORYBLOK', 'PUBLIC_VERCEL_ENV']);

export default defineConfig({
  output: env.PUBLIC_VERCEL_ENV === 'production' ? 'hybrid' : 'server',
  adapter: vercel(),
  integrations: [tailwind(), storyblok({
    accessToken: env.STORYBLOK_TOKEN,
    bridge: true,
    apiOptions: {},
    components: {
      section: '4_layout_elements/_dto/SectionDTO',
      container: '4_layout_elements/_dto/ContainerDTO',
      grid: '4_layout_elements/_dto/GridDTO',
      flex: '4_layout_elements/_dto/FlexDTO',
      column: '4_layout_elements/_dto/ColumnDTO',
      styleguide_element: '2_components/_dto/StyleguideElementDTO',
      card: '1_molecules/_dto/CardDTO',
      accordeon: '1_molecules/_dto/AccordeonDTO',
      alert: '1_molecules/_dto/AlertDTO',
      form: '1_molecules/_dto/FormDTO',
      navigation: '1_molecules/_dto/NavigationDTO',
      link: '1_molecules/_dto/LinkDTO',
      list: '1_molecules/_dto/ListDTO',
      list_item: '1_molecules/_dto/ListItemDTO',
      dropdown: '1_molucules/_dto/DropdownDTO',
      button: '0_atoms/_dto/ButtonDTO',
      icon_button: '0_atoms/_dto/ButtonDTO',
      theme_button: '0_atoms/_dto/ThemeButtonDTO',
      image: '0_atoms/_dto/ImageDTO',
      paragraph: '0_atoms/_dto/TextDTO',
      title: '0_atoms/_dto/TitleDTO',
      icon: '0_atoms/_dto/IconDTO',
      input: '0_atoms/_dto/InputDTO',
      hamburger: '0_atoms/_dto/HamburgerDTO',
    },
    componentsDir: "src",
    enableFallbackComponent: true,
    customFallbackComponent: "",
    useCustomApi: false
  }), svelte()]
});