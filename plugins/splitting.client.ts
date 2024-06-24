import 'splitting/dist/splitting.css'
import 'splitting/dist/splitting-cells.css'
import splitting from 'splitting'

export default defineNuxtPlugin(() => {
    return {
        provide: {
            splitting,
        },
    };
});