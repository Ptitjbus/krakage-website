import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function defineNuxtplugin() {
    gsap.registerPlugin(ScrollTrigger);
}