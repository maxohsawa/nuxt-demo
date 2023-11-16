# nuxt-demo

## features demonstrated

### frontend routing
- frontend routing mimics file structure of project
- index.vue is used to signify root and subroots
- square bracket notation in file name denotes slug for dynamic routing
- nuxt link hyperlinks within frontend routing system

### layouts
- default.vue
- outlet is designated by `<slot />`
- custom layout using `definePageMeta`

### modules
- integration of tailwind via nuxt modules
- custom css via assets/css directory

### fetching data
- useFetch composable from composition api
- injecting data into markup
- use of v-for to loop through data array
- use of key option with useFetch to ensure unique fetch

### reusable components
- components directory
- using defineProps to use data passed through props

### error page
- custom 404 page
- undefined routes via error.vue
- errors on dynamic routes via createError composable
- clearing nuxt error using clearError composable and redirecting user to safe page

## special thanks to netninja
